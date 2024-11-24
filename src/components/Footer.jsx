import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#000000e6] border-red-400 border-t relative text-gray-400 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0 w-full md:w-[60%]">
            <div className="text-2xl font-bold flex items-center space-x-2">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="30.000000pt"
                height="30.000000pt"
                viewBox="0 0 181.000000 195.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,195.000000) scale(0.100000,-0.100000)"
                  fill="#dc2625"
                  stroke="none"
                >
                  <path d="M487 1563 c-4 -3 -7 -235 -7 -515 0 -561 -2 -543 64 -616 47 -52 115 -84 170 -80 l41 3 0 75 0 74 -38 9 c-23 6 -45 20 -57 37 -19 27 -20 42 -18 247 l3 218 75 5 75 5 3 82 3 82 -78 3 -78 3 -3 188 -2 187 -74 0 c-40 0 -76 -3 -79 -7z" />
                  <path d="M1233 1171 c-113 -39 -216 -132 -264 -239 -13 -30 -24 -84 -30 -147 -10 -111 -9 -418 1 -435 4 -7 35 -10 81 -8 l74 3 5 245 c4 206 8 250 22 276 47 86 118 137 220 158 l63 13 3 76 3 77 -63 0 c-35 -1 -86 -9 -115 -19z" />
                  <path d="M1278 524 c-35 -19 -48 -43 -48 -92 0 -33 6 -45 32 -67 27 -23 39 -26 72 -22 98 13 120 145 31 182 -42 18 -53 18 -87 -1z" />
                </g>
              </svg>
              <span className="mt-1 text-white">Trendtial</span>
            </div>

            <p className="text-sm mt-3 w-[60%]">
            Trendtial Marketing leverages data-driven strategies and creative solutions to help businesses grow. With cutting-edge technology and innovative storytelling, we deliver tailored campaigns that boost engagement, build brand loyalty, and drive ROI. From digital marketing to branding and analytics, we are your partner for measurable results.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="w-full md:w-[35%] flex flex-col items-start md:items-end space-y-4">
            <h3 className="text-lg text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebook size={20}/>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="X"
              >
                <FaXTwitter size={20}/> 
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20}/>
              </a>
               <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={20}/>
              </a>
           
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-8 pt-6 text-sm text-center md:text-left">
          <div className="border-t border-gray-700 absolute top-0 left-0 w-full"></div>
          <div className="flex flex-col mt-8">
            {/* Terms and Policies */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white">
                Responsible Disclosure
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>

            {/* Copyright Section */}
            <div className="mt-4">
              <p>© 2024 Trendtial Marketing Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
