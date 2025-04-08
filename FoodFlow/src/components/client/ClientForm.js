"use client";
import React, { useState } from "react";

export default function ClientForm() {
  const [formData, setFormData] = useState({
    name: "Tobi",
    number: "0811112299",
    email: "johndoe@gmail.com",
    city: "Lagos",
    state: "Lagos",
    zip: "00987",
    localGovt: "Etiosa",
    address: "somewhere in Nigeria",
    isSelected: false,
    isSelectedPayment: true,
    date : '06-02-2024',
    discount: '20'
  });

  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
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

  const calendar = () => {
    var d = new Date()
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    return (year  + "-" + month + '-' + day)
  }

  return (
    <form className="overflow-y-auto h-[92vh] w-[60vw] mr-4">
      <h1 className="mb-5 font-bold">Delivery Information</h1>

      <div className="border border-secondary w-full h-[290px] rounded-lg">
        <div className="flex flex-wrap p-3 gap-3">
          <div>
            <h1>Name</h1>
            <input
              className="border border-secondary w-[290px] p-1 rounded-lg"
              value={formData.name}
              readOnly
            />
          </div>
          <div>
            <h1>Number</h1>
            <input
              type="number"
              className="border border-secondary w-[290px] p-1 rounded-lg"
              value={formData.number}
             readOnly
            />
          </div>
          <div>
            <h1>Email</h1>
            <input
              type="email"
              className="border border-secondary w-[290px] p-1 rounded-lg"
              value={formData.email}
            readOnly
            />
          </div>
          <div>
            <h1>City</h1>
            <input
              type="text"
              className="border border-secondary w-[290px] p-1 rounded-lg"
              value={formData.city}
             readOnly
            />
          </div>
          <div>
            <h1>State</h1>
            <input
              type="text"
              className="border border-secondary w-[290px] p-1 rounded-lg"
              value={formData.state}
              readOnly
            />
          </div>
          <div>
            <h1>Zip</h1>
            <input
              type="text"
              className="border border-secondary w-[98px] p-1 rounded-lg"
              value={formData.zip}
              readOnly
            />
          </div>
          <div>
            <h1>Local Govt</h1>
            <input
              type="text"
              className="border border-secondary w-[98px] p-1 rounded-lg"
              value={formData.localGovt}
              readOnly
            />
          </div>
          <div>
            <h1>Address</h1>
            <input
              type="text"
              className="border border-secondary w-[580px] p-1 rounded-lg"
              value={formData.address}
              readOnly
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

      <div className="border border-secondary w-full h-[160px] rounded-lg p-3 flex flex-wrap">
        <div>
          <h1>Date</h1>
          <input
            // type="date"
            className="border border-secondary w-[580px] p-1 rounded-lg"
            value={formData.date}
            readOnly
          />
        </div>
        <div>
          <h1>Note</h1>
          <textarea className="border border-secondary w-[580px] p-1 rounded-lg" readOnly></textarea>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="font-bold">Payment Method</h1>
        <div className="border border-secondary w-full h-[66px] rounded-lg px-20 flex gap-5 justify-between items-center">
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
      
      <div className="mt-5">
        <h1 className="font-bold">Discount</h1>
        <div className="border border-secondary w-full h-[100px] rounded-lg px-20 flex flex-wrap gap-1 justify-between items-center focus:ring-2 focus:ring-primary">
          <select className="border border-secondary w-[870px] p-1 rounded-lg focus:ring-2 focus:ring-primary">
            <option value="">Select discount type</option>
            <option value="percentage" selected >Percentage value discount</option>
            <option value="fixed">Fixed value discount</option>
          </select>

          <div>
            <input
              type="number"
              placeholder="Enter Percentage... eg. 20%"
              className="border border-secondary w-[480px] p-1 rounded-lg"
              value={formData.discount}
              readOnly
            />
          </div>
        </div>
      </div>
    </form>
  );
}