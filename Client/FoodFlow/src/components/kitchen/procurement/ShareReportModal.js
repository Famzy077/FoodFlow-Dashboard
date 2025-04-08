import { closeModal } from "@/redux/features/modal/modalSlice";
import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import { useDispatch } from "react-redux";

export default function ShareReportModal({ handleCloseShareReportModal }) {
  const dispatch = useDispatch();
  const [currentContent, setCurrentContent] = useState("A");
  const [showContentA, setShowContentA] = useState(true);
  const [isEmailActive, setEmailActive] = useState(false);
  const [isPhoneActive, setPhoneActive] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleContentA = () => {
    setCurrentContent("A");
    setShowContentA(true);
  };

  const toggleContentB = () => {
    setCurrentContent("B");
    setShowContentA(false);
  };

  const toggleEmailActive = () => {
    setEmailActive(true);
    setPhoneActive(false);
  };

  const togglePhoneActive = () => {
    setEmailActive(false);
    setPhoneActive(true);
  };

  const handleClose = () => {
    dispatch(closeModal());
    handleCloseShareReportModal();
  };

  const handleCopy = () => {
    var copyText = document.getElementById("copyLink");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    setCopied(true);
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("bg-black")) {
        handleClose();
      }
    };

    setCurrentUrl(window.location.href);

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[647px] h-[347px] mb-16">
        <div className="flex gap-3">
          <button
            className={`text-gray ${
              currentContent === "A" ? "text-primary" : ""
            } transition-all duration-300 ease-linear`}
            onClick={toggleContentA}
          >
            Copy Report link
          </button>
          <button
            className={`text-gray ${
              currentContent === "B" ? "text-primary" : ""
            } transition-all duration-300 ease-linear`}
            onClick={toggleContentB}
          >
            Share Report
          </button>
        </div>

        {currentContent === "A" && (
          <div className="mt-5 flex gap-2">
            <BsLink className="border border-gray rounded-full" size={40} />
            <input
              type="text"
              id="copyLink"
              value={currentUrl}
              className="w-[354px] h-[41px] p-1 rounded-lg border border-gray"
              placeholder={currentUrl}
            />
            <button
              className="ml-3 bg-primary text-white rounded-lg p-2"
              onClick={handleCopy}
            >
              {copied ? "Copied" : "Copy Link"}
            </button>
          </div>
        )}

        {currentContent === "B" && (
          <div className="mt-2">
            <div className="mt-2">
              <button
                className={`${
                  isEmailActive ? "bg-primary rounded-lg" : ""
                } bg-gray rounded-lg text-white p-2 transition-all duration-300 ease-linear`}
                onClick={toggleEmailActive}
              >
                <AiOutlineMail />
              </button>
              <button
                className={`${
                  isPhoneActive ? "bg-primary" : ""
                } bg-gray rounded-lg text-white p-2 ml-2 transition-all duration-300 ease-linear`}
                onClick={togglePhoneActive}
              >
                <AiOutlineWhatsApp />
              </button>
            </div>
            {isEmailActive && (
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-[354px] h-[41px] p-1 rounded-lg border border-gray"
                />
                <button className="ml-3 bg-gray text-white rounded-lg p-2">
                  send Link
                </button>
              </div>
            )}
            {isPhoneActive && (
              <div className="mt-2">
                <input
                  type="tel"
                  placeholder="Enter Phone"
                  className="w-[354px] h-[41px] p-1 rounded-lg border border-gray"
                />
                <button className="ml-3 bg-gray text-white rounded-lg p-2">
                  send Link
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
