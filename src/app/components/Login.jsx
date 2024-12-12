import { useState, useRef } from "react";
import Image from "next/image";

export default function Login({ onClose }) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const inputRefs = useRef([]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Simulate sending OTP (replace with API call)
    if (mobile.length === 10) {
      setIsOtpSent(true);
      alert(`OTP sent to ${mobile}`); // Mock alert, replace with actual logic
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const handleVerifyOtp = (otp) => {
    console.log("Entered OTP:", otp);

    // Example verification logic
    const expectedOtp = "1234"; // Replace with dynamic or backend-provided OTP

    if (otp === expectedOtp) {
      // alert('OTP verified successfully!');
      setOtpVerified(true);
      setTimeout(() => {
        onClose();
      }, 2000);

      // Close the popup or navigate to another page
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleChange = (index, value) => {
    // Update the OTP array
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to clear the input and move focus back
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerifyOtp(otp.join("")); // Concatenate OTP and call the handler
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
      <div className="flex flex-col gap-3 items-center relative bg-white p-6 rounded-lg shadow-lg w-2/6 ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        {/* <h2 className="text-2xl font-semibold mb-4">FlashCart</h2> */}
        <Image src="/images/bg.jpg" alt="" width={80} height={80} />

        {!isOtpSent ? (
          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-lg mb-2 text-center">Login or Sign-up</h3>
            <form onSubmit={handleSendOtp}>
              <div className="mb-4 flex items-center border bg-teal-50 rounded-lg hover:outline  hover:outline-offset-2 hover:outline-emerald-300">
                <span className="ml-2">+91</span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your mobile number"
                  className=" p-2 outline-none  w-64 bg-transparent"
                  maxLength={10}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-400 text-white py-2 rounded-lg hover:bg-emerald-500"
              >
                Continue
              </button>
            </form>
          </div>
        ) : !otpVerified ? (
          // <form onSubmit={handleVerifyOtp}>
          //   <div className="mb-4">
          //     <label className="block text-gray-700">Enter OTP</label>
          //     <input
          //       type="text"
          //       value={otp}
          //       onChange={(e) => setOtp(e.target.value)}
          //       placeholder="Enter OTP"
          //       className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-400"
          //       maxLength={4}
          //     />
          //   </div>
          //   <button
          //     type="submit"
          //     className="w-full bg-emerald-400 text-white py-2 rounded-lg hover:bg-emerald-500"
          //   >
          //     Verify OTP
          //   </button>
          // </form>
          <div className="flex flex-col ">
            <h3 className="text-md mb-2 text-center text-gray">
              We have a verification code to{" "}
            </h3>
            <p className="text-md font-bold text-center -mt-2 ">
              +91 8928065925
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center flex-col items-center gap-4 mt-4"
            >
              <div className="flex justify-evenly  w-64 ">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)} // Assign input refs
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength={1}
                    className="w-12 h-12 text-center border-2  rounded-lg focus:ring-2 focus:ring-emerald-400 text-xl"
                  />
                ))}
              </div>
              <button
                type="submit"
                className="ml-4 bg-emerald-400 text-white py-2 px-4 rounded-lg hover:bg-emerald-500"
              >
                Verify OTP
              </button>
            </form>
          </div>
        ) : (
          <p className="text-emerald-500 text-center">Login successful!</p>
        )}
      </div>
    </div>
  );
}
