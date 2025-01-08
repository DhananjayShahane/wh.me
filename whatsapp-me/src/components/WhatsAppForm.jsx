import React, { useState, useEffect } from "react";

const WhatsAppForm = () => {
  const [countryCode, setCountryCode] = useState("India (+91)");
  const [mobileNumber, setMobileNumber] = useState("");
  const [baseURL, setBaseUrl] = useState("");
  const [message, setMessage] = useState("Hello");
  const [isCustomMessage, setIsCustomMessage] = useState(false);

  const [errors, setErrors] = useState({
    mobileNumber: "",
    message: "",
  });

  // Load the custom message from local storage on component mount
  useEffect(() => {
    const savedMessage = localStorage.getItem("customMessage");
    const savedBaseUrl = localStorage.getItem("baseUrl");
    if (savedMessage) {
      setMessage(savedMessage);
      setIsCustomMessage(true);
    }
    if (savedBaseUrl) {
      setBaseUrl(savedBaseUrl);
      setIsCustomMessage(true);
    }
  }, []);

  // Save the custom message to local storage whenever it changes
  useEffect(() => {
    if (isCustomMessage) {
      localStorage.setItem("customMessage", message);
    }
  }, [isCustomMessage, message]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { mobileNumber: "", message: "" };

    if (!mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required.";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid mobile number (10-15 digits).";
      isValid = false;
    }


    if(!baseURL){
      newErrors.baseURL = "Base URL is required.";
      isValid = false;
    }


    if (!message.trim()) {
      newErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendWhatsAppMessage = () => {
    if (!validateForm()) return;
  
    const phoneNumber = `${countryCode}${mobileNumber}`;
    const url = `${baseURL}?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
    window.open(url, "_blank");
  };
  
  

  const toggleCustomMessage = () => {
    setIsCustomMessage(!isCustomMessage);
    if (!isCustomMessage) {
      localStorage.setItem("customMessage", message);
      localStorage.setItem("baseUrl", baseURL);
    } else {
      localStorage.removeItem("customMessage");
      localStorage.removeItem("baseUrl");
    }
  };


  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md my-10">
      <h2 className="text-xl font-bold mb-4">Send a Message</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Base Url:</label>
        <input
          type="text"
          className={`w-full border rounded px-3 py-2 bg-slate-50 ${errors.baseURL ? "border-red-500" : ""
            }`}
          placeholder="Enter base url"
          value={baseURL}
          onChange={(e) => setBaseUrl(e.target.value)}
        />
        {errors.baseURL && (
          <p className="text-red-500 text-sm mt-1">{errors.baseURL}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Country Code:</label>
        <select
          className="w-full border bg-slate-50 rounded px-3 py-2"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
          <option value="+91">+91</option>
        </select>
      </div>


      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Mobile Number:</label>
        <input
          type="text"
          className={`w-full border rounded px-3 py-2 bg-slate-50 ${errors.mobileNumber ? "border-red-500" : ""
            }`}
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        {errors.mobileNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Message:</label>
        <textarea
          className={`w-full border rounded px-3 py-2 bg-slate-50 ${errors.message ? "border-red-500" : ""
            }`}
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isCustomMessage}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <div className="mb-4 flex items-center justify-between">
        <label htmlFor="customMessageSwitch" className="text-gray-700">
          Saved Message
        </label>
        <div
          className={`relative inline-flex items-center h-6 w-12 cursor-pointer rounded-full transition ${isCustomMessage ? "bg-green-500" : "bg-gray-300"
            }`}
          onClick={toggleCustomMessage}
        >
          <span
            className={`absolute h-4 w-4 bg-white rounded-full transition transform ${isCustomMessage ? "translate-x-6" : "translate-x-1"
              }`}
          ></span>
        </div>
      </div>
      <div>
        <button
          className="cursor-pointer transition-all bg-primary mb-3 w-full text-white px-6 py-2 rounded-lg
border-green-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          onClick={() => sendWhatsAppMessage(false)}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default WhatsAppForm;
