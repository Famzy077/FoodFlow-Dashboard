"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue, resetValue } from "@/redux/features/discountSlice";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    localGovt: "",
    address: "",
    isSelected: false,
    isSelectedPayment: false,
  });
  const [scheduleDelivery, setScheduleDelivery] = useState(false);
  const [discountType, setDiscountType] = useState(null);
  const dispatch = useDispatch();

  const [discount, setDiscount] = useState(0);

  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleDiscountChange = (e) => {
    ////console.log("N", e.target.value);
    dispatch(
      setValue({
        discountType,
        discountValue: e.target.value,
      })
    );
  };

  const handlePhoneChange = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength === 0) return "";

    let formattedPhoneNumber = "";

    if (phoneNumberLength < 4) {
      formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}`;
    } else if (phoneNumberLength < 7) {
      formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3
      )}`;
    } else {
      formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    }

    return formattedPhoneNumber;
  };

  const toggle = (field) => {
    if (scheduleDelivery === false) {
      setScheduleDelivery(true);
    } else {
      setScheduleDelivery(false);
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: !prevData[field],
    }));
  };

  const paymentMethods = [
    { id: "transfer", label: "Transfer" },
    { id: "pos", label: "Point of Sale (POS)" },
    { id: "cash", label: "Cash" },
  ];

  return (
    <form className=" h-[fit-content] w-[95%] ml-4">
      <h1 className="mb-5 font-bold">Delivery Information</h1>

      <div className="border formElem border-secondary w-full s h-[fit-content] rounded-lg">
        <div className=" p-3 gap-3">
          <main className="flex p-2 gap-6">
            <div className="w-[100%]">
              <h1>Name</h1>
              <input
                type="text"
                className="border border-secondary w-[100%] p-1 rounded-md"
                value={formData.name}
                onChange={(e) => {
                  // ////console.log(e.target);
                  handleFieldChange("name", e.target.value);
                }}
              />
            </div>
            <div className="w-[100%]">
              <h1>Number</h1>
              <input
                type="number"
                className="border border-secondary w-[100%] p-1 rounded-md"
                value={formData.number}
                onChange={(e) => handleFieldChange("number", e.target.value)}
              />
            </div>
          </main>
          <main className="flex p-2 gap-6">
            <div className="w-[100%]">
              <h1>Email</h1>
              <input
                type="email"
                className="border border-secondary w-[100%] p-1 rounded-md"
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
              />
            </div>
            <div className="w-[100%]">
              <h1>City</h1>
              <input
                type="text"
                className="border border-secondary w-[100%] p-1 rounded-md"
                value={formData.city}
                onChange={(e) => handleFieldChange("city", e.target.value)}
              />
            </div>
          </main>
          <main className="flex p-2 gap-6">
            <div className="w-[100%]">
              <h1>State</h1>
              <input
                type="text"
                className="border border-secondary w-[300px] p-1 rounded-lg"
                value={formData.state}
                onChange={(e) => handleFieldChange("state", e.target.value)}
              />
            </div>
            <div className="w-[70%]">
              <h1>Zip</h1>
              <input
                type="text"
                className="border border-secondary w-[100%] p-1 rounded-lg"
                value={formData.zip}
                onChange={(e) => handleFieldChange("zip", e.target.value)}
              />
            </div>
            <div className="w-[100%]">
              <h1>Local Govt</h1>
              <input
                type="text"
                className="border border-secondary w-[100%] p-1 rounded-lg"
                value={formData.localGovt}
                onChange={(e) => handleFieldChange("localGovt", e.target.value)}
              />
            </div>
          </main>
          <div className="w-[100%]">
            <h1>Address</h1>
            <input
              type="text"
              className="border border-secondary w-[100%] p-1 rounded-lg"
              value={formData.address}
              onChange={(e) => handleFieldChange("address", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-5 mt-5">
          <h1 className="mb-5 font-bold">Schedule Delivery</h1>
          <button
            type="button"
            className={`flex w-[54px] h-[27px] bg-black rounded-full ${
              formData.isSelected
                ? "bg-primary transition-all duration-300"
                : "transition-all duration-300"
            }`}
            onClick={() => toggle("isSelected")}
          >
            <span
              className={`h-[27px] w-[27px] bg-secondary rounded-full ${
                formData.isSelected
                  ? "transform translate-x-[27px] transition-all duration-300"
                  : "transition-all duration-300"
              }`}
            />
          </button>
        </div>
      </div>

      {scheduleDelivery && (
        <div className="border border-secondary w-full h-[fit-content] rounded-lg p-3 flex flex-wrap">
          <div className="w-[100%]">
            <h1>Date</h1>
            <input
              type="date"
              className="border border-secondary w-[100%] p-1 rounded-lg"
            />
          </div>
          <div className="w-[100%]">
            <h1>Note</h1>
            <textarea className="border border-secondary w-[100%] rounded-lg place-content-center px-3"></textarea>
          </div>
        </div>
      )}

      <div className="mt-5 w-[100%]">
        <h1 className="font-bold">Payment Method</h1>
        <div className="border border-secondary w-full h-[fit-content] p-5 rounded-lg px-20 flex gap-5 justify-between items-center">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex gap-1">
              <input
                type="radio"
                id={method.id}
                name="paymentMethod"
                value={method.id}
                checked={!formData.isSelectedPayment}
                onChange={() => toggle("isSelectedPayment")}
              />
              <label htmlFor={method.id}>{method.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 w-[100%] mb-7">
        <h1 className="font-bold">Discount</h1>
        <div className="border border-secondary w-full h-[fit-content] rounded-lg p-10 items-center focus:ring-2 focus:ring-primary">
          <select
            onChange={(e) => setDiscountType(e.target.value)}
            className="border border-secondary w-[100%] p-1 rounded-lg  p-2 focus:ring-2 focus:ring-primary"
          >
            <option value="">Select discount type</option>
            <option value="percentage">Percentage value discount</option>
            <option value="fixed">Fixed value discount</option>
          </select>

          <div className="h-[fit-content] mt-4">
            <input
              type="number"
              placeholder="Enter discount"
              onChange={(e) => handleDiscountChange(e)}
              className="border border-secondary w-[100%] rounded-lg p-2"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

// export default function Form() {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [zip, setZip] = useState("");
//   const [localGovt, setLocalGovt] = useState("");
//   const [address, setAddress] = useState("");

//   const [isSelected, setIsSelected] = useState(false);
//   const [isSelectedPayment, setIsSelectedPayment] = useState(false);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleNumberChange = (event) => {
//     setNumber(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleStateChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleZipChange = (event) => {
//     setZip(event.target.value);
//   };

//   const handleLocalGovtChange = (event) => {
//     setLocalGovt(event.target.value);
//   };

//   const handleAddressChange = (event) => {
//     setAddress(event.target.value);
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   // };
//   const toggle = () => {
//     setIsSelected(!isSelected);
//   };

//   const togglePayment = () => {
//     setIsSelectedPayment(!isSelectedPayment);
//   };

//   return (
//     <form>
//       <h1 className="mb-5 font-bold">Delivery Information</h1>
//       <div className="border border-secondary w-[900px] h-[307px] rounded-lg">
//         <div className="flex flex-wrap p-3 gap-3">
//           <div>
//             <h1>Name</h1>
//             <input
//               type="text"
//               className="border border-secondary w-[430px] p-1 rounded-lg"
//               value={name}
//               onChange={handleNameChange}
//             />
//           </div>
//           <div>
//             <h1>Number</h1>
//             <input
//               type="number"
//               className="border border-secondary w-[430px] p-1 rounded-lg"
//               value={number}
//               onChange={handleNumberChange}
//             />
//           </div>
//           <div>
//             <h1>Email</h1>
//             <input
//               type="email"
//               className="border border-secondary w-[430px] p-1 rounded-lg"
//               value={email}
//               onChange={handleEmailChange}
//             />
//           </div>
//           <div>
//             <h1>City</h1>
//             <input
//               type="text"
//               className="border border-secondary w-[430px] p-1 rounded-lg"
//               value={city}
//               onChange={handleCityChange}
//             />
//           </div>
//           <div>
//             <h1>State</h1>
//             <input
//               type="text"
//               className="border border-secondary w-[430px] p-1 rounded-lg"
//               value={state}
//               onChange={handleStateChange}
//             />
//           </div>
//           <div>
//             <h1>Zip</h1>
//             <input
//               type="text"
//               className="border border-secondary w-[115px] p-1 rounded-lg"
//               value={zip}
//               onChange={handleZipChange}
//             />
//           </div>
//           <div>
//             <h1>Local Govt</h1>
//             <input
//               type="text"
//               className="border border-secondary w-[305px] p-1 rounded-lg"
//               value={localGovt}
//               onChange={handleLocalGovtChange}
//             />
//           </div>
//           <div>
//             <h1>Address</h1>
//             <input
//               type="text"
//               className="border border-secondary w-[870px] p-1 rounded-lg"
//               value={address}
//               onChange={handleAddressChange}
//             />
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="flex gap-5 mt-5">
//           <h1 className="mb-5 font-bold">Schedule Delivery</h1>
//           <button
//             type="button"
//             className={`flex w-[54px] h-[27px] bg-black rounded-full ${
//               isSelected
//                 ? "bg-primary transition-all duration-300"
//                 : "transition-all duration-300"
//             }`}
//             onClick={toggle}
//           >
//             <span
//               className={`h-[27px] w-[27px] bg-secondary rounded-full ${
//                 isSelected
//                   ? "transform translate-x-[27px] transition-all duration-300"
//                   : "transition-all duration-300"
//               }`}
//             />
//           </button>
//         </div>
//       </div>
//       <div className="border border-secondary w-[900px] h-[160px] rounded-lg p-3 flex flex-wrap">
//         <div>
//           <h1>Date</h1>
//           <input
//             type="date"
//             className="border border-secondary w-[870px] p-1 rounded-lg"
//           />
//         </div>
//         <div>
//           <h1>Note</h1>
//           <textarea className="border border-secondary w-[870px] p-1 rounded-lg"></textarea>
//         </div>
//       </div>
//       <div className="mt-5">
//         <h1 className="font-bold">Payment Method</h1>
//         <div className="border border-secondary w-[900px] h-[66px] rounded-lg px-20 flex gap-5 justify-between items-center">
//           <div className="flex gap-1">
//             <input
//               type="radio"
//               id="transfer"
//               name="paymentMethod"
//               value="transfer"
//               checked={!isSelectedPayment}
//               onChange={togglePayment}
//             />
//             <label htmlFor="transfer">Transfer</label>
//           </div>
//           <div className="flex gap-1">
//             <input
//               type="radio"
//               id="pos"
//               name="paymentMethod"
//               value="pos"
//               checked={!isSelectedPayment}
//               onChange={togglePayment}
//             />
//             <label htmlFor="pos">Point of Sale (POS)</label>
//           </div>
//           <div className="flex gap-1">
//             <input
//               type="radio"
//               id="cash"
//               name="paymentMethod"
//               value="cash"
//               checked={!isSelectedPayment}
//               onChange={togglePayment}
//             />
//             <label htmlFor="cash">Cash</label>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
