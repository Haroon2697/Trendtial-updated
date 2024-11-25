import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 z-10"
    onClick={onClick}
    aria-label="Previous"
  >
    &#8592;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 z-10"
    onClick={onClick}
    aria-label="Next"
  >
    &#8594;
  </button>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sheryar Kayani",
      role: "CEO & Co-Founder",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sheryar-x5VPdpU5ynaQYezxY3bdkk6ErkKyb2.jpg",
      bio: "Strategic leader driving innovation in digital marketing.",
      color: "from-blue-500 to-blue-700",
      linkedinUrl: "https://linkedin.com/in/sheryarkayani",
      twitterUrl: "https://twitter.com/sheryarkayani",
    },
    {
      name: "Muhammad Junaid",
      role: "CTO & Co-Founder",
      imageUrl: "/junaid.jpg",
      bio: "Visionary technologist with a passion for AI and machine learning.",
      color: "from-teal-500 to-teal-700",
      linkedinUrl: "https://linkedin.com/in/muhammad-junaid",
      twitterUrl: "https://twitter.com/muhammad-junaid",
    },
    {
      name: "Abdul Faheem",
      role: "CFO & Co-Founder",
      imageUrl: "/faheem.jpg",
      bio: "Financial expert ensuring sustainable growth and profitability.",
      color: "from-purple-500 to-purple-700",
      linkedinUrl: "https://www.linkedin.com/in/abdul-faheem-111a0b1b9/",
      twitterUrl: "https://twitter.com/abdul-faheem",
    },
    {
      name: "Khizar",
      role: "CSO & Co-Founder",
      imageUrl: "/khizar.jpg",
      bio: "Building lasting relationships and expanding our client base.",
      color: "from-green-600 to-green-800",
      linkedinUrl: "https://linkedin.com/in/khizar",
      twitterUrl: "https://twitter.com/khizar",
    },
    {
      name: "Khadija",
      role: "Head HR",
      imageUrl: "/khadija.jpeg",
      bio: "Cultivating a positive work culture and nurturing talent.",
      color: "from-pink-500 to-pink-700",
      linkedinUrl: "https://linkedin.com/in/khadija",
      twitterUrl: "https://twitter.com/khadija",
      fitTop: false,
    },
    {
      name: "Emaan",
      role: "Director Sales",
      imageUrl: "/emaan.jpg",
      bio: "Driving revenue growth through strategic sales initiatives.",
      color: "from-green-500 to-green-700",
      linkedinUrl: "https://linkedin.com/in/emaanazhar",
      twitterUrl: "https://twitter.com/emaan",
    },
    {
      name: "Mehreen",
      role: "Head Marketing",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mehreen-JfrVeMiBEoWSB9kAqSBzaHRJQBXVON.PNG",
      bio: "Creative marketer with a data-driven approach to growth.",
      color: "from-green-600 to-green-800",
      linkedinUrl: "https://linkedin.com/in/mehreen",
      twitterUrl: "https://twitter.com/mehreen",
      fitTop: true,
    },
    {
      name: "Anooshy",
      role: "Creative Director",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anooshy-vPx0R93fsuDv5czhBkDfeLFc9n0DfF.jpg",
      bio: "Visionary designer shaping our brand's visual identity.",
      color: "from-yellow-500 to-yellow-700",
      linkedinUrl: "https://linkedin.com/in/anooshy",
      twitterUrl: "https://twitter.com/anooshy",
      fitTop: true,
    },
    {
      name: "Sana",
      role: "Head Video Content",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sana-6vhl1s5ofPUffov2Tsbu0ZWW1NuzzZ.jpeg",
      bio: "Storyteller extraordinaire, bringing ideas to life through video.",
      color: "from-yellow-600 to-yellow-800",
      linkedinUrl: "https://linkedin.com/in/sana",
      twitterUrl: "https://twitter.com/sana",
      fitTop: true,
    },
    {
      name: "Aabis",
      role: "Head Web Development",
      imageUrl: "/aabis.jpg",
      bio: "Crafting seamless digital experiences through innovative web solutions.",
      color: "from-purple-500 to-purple-700",
      linkedinUrl: "https://linkedin.com/in/aabis",
      twitterUrl: "https://twitter.com/aabis",
    },
    {
      name: "Tooba",
      role: "Director Global Expansion",
      imageUrl: "/tooba.jpg",
      bio: "Spearheading international growth through data-driven strategies.",
      color: "from-pink-500 to-pink-700",
      linkedinUrl: "https://linkedin.com/in/tooba",
      twitterUrl: "https://twitter.com/tooba",
    },
    {
      name: "Fizza",
      role: "Head of Sales",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-27%20at%2013.03.43_b4ccce0b-w6n1z9t3QEbj5Nqa2qSBurnAWbPEmh.jpg",
      bio: "Driving sales performance and client satisfaction to new heights.",
      color: "from-green-700 to-green-900",
      linkedinUrl: "https://linkedin.com/in/fizza",
      twitterUrl: "https://twitter.com/fizza",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-44 pb-36 pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 pl-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Meet our team of creative experts.
          </h2>
          <p className="text-gray-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>

        {/* React-Slick Slider */}
        <div className="relative">
          <Slider {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4">
                <div className="bg-[#3f3f3f57] rounded-xl shadow-lg p-6">
                  {/* Profile Image */}
                  <div
                    className="w-full h-[18rem] rounded-xl hover:bg-[#ff00003c]"
                    style={{
                      backgroundImage: `url(${member.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: member.fitTop ? "top" : "center",
                      backgroundBlendMode: "overlay"
                    }}
                  ></div>

                  {/* Member Info */}
                  <div className="mt-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200">{member.role}</p>
                  </div>

                  {/* Social Links */}
                  <div className="mt-4 pt-4 border-t border-[#f3f4f629] flex items-center space-x-4">
                    <a
                      href={member.linkedinUrl}
                      className="text-white hover:text-gray-600"
                    >
                      <BiLogoLinkedin size={20} />
                    </a>
                    <a
                      href={member.twitterUrl}
                      className="text-white mt-1 hover:text-gray-600"
                    >
                      <FaXTwitter />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

