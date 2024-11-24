import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Trendtial different from other marketing agencies?",
      answer:
        "Trendtial combines data-driven strategies with creative storytelling to deliver impactful marketing campaigns tailored to your brand.",
    },
    {
      question: "Is Trendtial suitable for large-scale enterprises?",
      answer:
        "Absolutely. Trendtial has experience working with large enterprises, providing scalable solutions and measurable results for complex marketing needs.",
    },
    {
      question: "Can Trendtial handle multiple projects for my company?",
      answer:
        "Yes, Trendtial is equipped to manage multiple campaigns and projects simultaneously while maintaining quality and alignment with your brand goals.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          The answers to your
          <br />
          <span className="text-gray-400">Frequently Asked Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 bg-[black] border border-white/10 hover:border-red-400 hover:shadow-lg`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>
                <span
                  className={`text-xl transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  &#x25BC;
                </span>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 mt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
