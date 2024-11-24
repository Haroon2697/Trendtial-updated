import React from "react";

const PartnerForm = () => {
  return (
    <div className="flex relative justify-center items-center pb-16 min-h-screen bg-black">
      <div className="relative bg-gradient-to-r from-blue-500/20 to-gray-800/10 text-white rounded-3xl p-10 flex flex-col md:flex-row shadow-2xl w-11/12 max-w-6xl">
        {/* Left Section */}
        <div className="w-full md:w-[50%] mb-6 md:mb-0 flex flex-col justify-center px-4">
          <h2 className="text-lg font-medium uppercase tracking-wide mb-2">
            Let's Begin
          </h2>
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            Ready to Get Started?
          </h1>
          <p className="text-gray-300 leading-relaxed mb-8">
            Fill in your details below and our team will reach out with a
            customized enablement pack tailored just for you.
          </p>
        </div>

        {/* Right Section */}
        <div
          style={{ backdropFilter: "blur(10px)" }}
          className="w-full md:w-[50%] bg-[#dc26250f] rounded-lg p-8"
        >
          <form>
            {/* First and Last Name */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full bg-transparent border border-[#ffffff2b] rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full bg-transparent border border-[#ffffff2b] rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Company */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                placeholder="Your company name"
                className="w-full bg-transparent border border-[#ffffff2b] rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent border border-[#ffffff2b] rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <div className="flex">
                <select className="bg-transparent border border-[#ffffff2b] rounded-l-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="PK">PK</option>
                </select>
                <input
                  type="text"
                  placeholder="+1 (555) 987-65"
                  className="flex-1 bg-transparent border border-[#ffffff2b] rounded-r-lg px-4 py-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2 mb-6">
              <input type="checkbox" className="w-4 h-4 text-blue-500 rounded" />
              <label className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Privacy Policy
                </a>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerForm;
