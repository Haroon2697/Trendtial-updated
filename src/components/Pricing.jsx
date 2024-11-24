const PricingCard = ({ plan, isPopular }) => (
  <div className={`p-6 rounded-xl ${isPopular ? 'bg-gradient-to-b from-blue-500/20 to-[#1a1d23]' : 'bg-[#1a1d2352]'} border border-white/10`}>
    <h3 className="text-lg font-semibold">{plan.name}</h3>
    <div className="mt-4 mb-6">
      <span className="text-3xl font-bold">{plan.price}</span>
      <span className="text-gray-400">/{plan.period}</span>
    </div>
    <ul className="space-y-3">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center text-sm text-gray-400">
          <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`mt-6 w-full ${isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/10 hover:bg-white/20'} text-white px-6 py-2 rounded-lg transition-colors`}>
      Choose {plan.name}
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$10",
      period: "month",
      features: ["All free features", "Up to 10 users", "Basic support"]
    },
    {
      name: "Pro",
      price: "$19",
      period: "month",
      features: ["Everything in Basic", "Unlimited users", "Priority support", "API access"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      features: ["Custom solutions", "Dedicated support", "Custom integrations"]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Super Simple pricing
          <br />
          <span className="text-gray-400">for practically everyone</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isPopular={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;