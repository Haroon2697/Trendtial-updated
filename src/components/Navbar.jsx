import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#170707d6] backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
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
                <path
                  d="M487 1563 c-4 -3 -7 -235 -7 -515 0 -561 -2 -543 64 -616 47 -52 115
-84 170 -80 l41 3 0 75 0 74 -38 9 c-23 6 -45 20 -57 37 -19 27 -20 42 -18
247 l3 218 75 5 75 5 3 82 3 82 -78 3 -78 3 -3 188 -2 187 -74 0 c-40 0 -76
-3 -79 -7z"
                />
                <path
                  d="M1233 1171 c-113 -39 -216 -132 -264 -239 -13 -30 -24 -84 -30 -147
-10 -111 -9 -418 1 -435 4 -7 35 -10 81 -8 l74 3 5 245 c4 206 8 250 22 276
47 86 118 137 220 158 l63 13 3 76 3 77 -63 0 c-35 -1 -86 -9 -115 -19z"
                />
                <path
                  d="M1278 524 c-35 -19 -48 -43 -48 -92 0 -33 6 -45 32 -67 27 -23 39
-26 72 -22 98 13 120 145 31 182 -42 18 -53 18 -87 -1z"
                />
              </g>
            </svg>
            <span className="mt-1">Trendtial</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/team"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Who we are?
          </a>
          <a
            href="/#features"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            What we do?
          </a>
          <button
            onClick={() =>
              (window.location.href =
                "mailto:trendtial@gmail.com?subject=Hi Trendtial")
            }
            className="bg-white/10 hover:bg-white/20 text-sm text-white px-4 py-2 rounded-lg transition-colors"
          >
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
