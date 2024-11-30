import React from 'react'
import { motion } from 'framer-motion'

const MetricCard = ({ label, value, suffix = '', className = '' }) => (
  <motion.div
    className={`bg-black/10 backdrop-blur-sm p-4 rounded-lg ${className}`}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-2xl font-bold">{value}{suffix}</div>
    <div className="text-sm opacity-80">{label}</div>
  </motion.div>
)

const GradeIndicator = ({ grade, score, label }) => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
      {grade}
    </div>
    <div className="flex-1">
      <div className="text-xs opacity-80">{label}</div>
      <div className="font-semibold">{score}</div>
    </div>
  </div>
)

const CaseStudy = ({ title, metrics, grades, objective, strategies, results, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`rounded-xl p-6 shadow-2xl ${className}`}
  >
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>

    <div className="bg-black/5 rounded-lg p-4 mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {grades.map((grade, index) => (
          <GradeIndicator key={index} {...grade} />
        ))}
      </div>
    </div>

    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Objective:</h3>
        <p className="opacity-80">{objective}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Strategies Implemented:</h3>
        <ul className="list-disc list-inside opacity-80 space-y-2">
          {strategies.map((strategy, index) => (
            <li key={index}>{strategy}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Results:</h3>
        <ul className="list-disc list-inside opacity-80 space-y-2">
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
)

function SEO() {
  const caseStudies = [
    {
      title: "Lucky Wholesale",
      metrics: [
        { label: "Total Clicks", value: "55.2", suffix: "k" },
        { label: "Total Impressions", value: "4.18", suffix: "M" },
        { label: "Average CTR", value: "1.3", suffix: "%" },
        { label: "Average Position", value: "22.9" },
      ],
      grades: [
        { grade: "A", score: "96%", label: "PERFORMANCE" },
        { grade: "A", score: "85%", label: "STRUCTURE" },
        { grade: "A", score: "864MS", label: "LCP" },
      ],
      objective: "Increase organic website traffic and rankings in a competitive industry.",
      strategies: [
        "Extensive keyword research and optimization",
        "On-page optimization for meta tags, headings, and content",
        "Technical SEO improvements (site structure, crawl ability, mobile optimization)",
        "High-quality content creation and optimization",
        "Strategic link-building and outreach",
      ],
      results: [
        "Organic website traffic increased significantly",
        "Top keyword rankings improved, resulting in increased visibility",
        "Enhanced brand recognition in the industry",
      ],
      className: "bg-white text-black",
    },
    {
      title: "Avant-Garde Original",
      metrics: [
        { label: "Total Clicks", value: "7.55", suffix: "K" },
        { label: "Total Impressions", value: "201", suffix: "K" },
        { label: "Average CTR", value: "3.8", suffix: "%" },
        { label: "Average Position", value: "20.4" },
      ],
      grades: [
        { grade: "A", score: "100%", label: "PERFORMANCE" },
        { grade: "A", score: "100%", label: "STRUCTURE" },
        { grade: "A", score: "732MS", label: "LCP" },
      ],
      objective: "Enhance local search presence and drive targeted leads to physical locations.",
      strategies: [
        "Thorough local keyword research and optimization",
        "Google My Business (GMB) optimization and management",
        "Consistent business listings across directories and review platforms",
        "Online reputation management and review monitoring",
        "Localized content creation and promotion",
      ],
      results: [
        "Significant improvement in local search visibility",
        "Increased website traffic from local searches",
        "Growth in customer acquisition for physical locations",
      ],
      className: "bg-red-600 text-white",
    },
    {
      title: "Male Reality",
      metrics: [
        { label: "Total Clicks", value: "5.4", suffix: "k" },
        { label: "Total Impressions", value: "77.7", suffix: "k" },
        { label: "Average CTR", value: "6.9", suffix: "%" },
        { label: "Average Position", value: "13.5" },
      ],
      grades: [
        { grade: "A", score: "98%", label: "PERFORMANCE" },
        { grade: "A", score: "92%", label: "STRUCTURE" },
        { grade: "A", score: "820MS", label: "LCP" },
      ],
      objective: "Improve online visibility and engagement for a niche audience.",
      strategies: [
        "Targeted keyword optimization for niche market",
        "Content strategy focused on user intent and engagement",
        "Social media integration and community building",
        "Mobile-first optimization for improved user experience",
        "Structured data implementation for rich snippets",
      ],
      results: [
        "Substantial increase in organic traffic",
        "Improved average session duration",
        "Achieved featured snippets for high-value keywords",
      ],
      className: "bg-white text-black",
    },
    {
      title: "SR Guro",
      metrics: [
        { label: "Total Clicks", value: "181" },
        { label: "Total Impressions", value: "2.71", suffix: "k" },
        { label: "Average CTR", value: "6.7", suffix: "%" },
        { label: "Average Position", value: "40.6" },
      ],
      grades: [
        { grade: "A", score: "97%", label: "PERFORMANCE" },
        { grade: "A", score: "95%", label: "STRUCTURE" },
        { grade: "A", score: "750MS", label: "LCP" },
      ],
      objective: "Establish a strong online presence for a new brand in a competitive market.",
      strategies: [
        "Comprehensive competitor analysis and gap identification",
        "Development of unique, high-quality content to establish authority",
        "Implementation of schema markup for enhanced SERP visibility",
        "Local SEO optimization for targeted geographical reach",
        "Influencer partnerships and guest posting for backlink acquisition",
      ],
      results: [
        "Achieved first page rankings for multiple target keywords",
        "Significant increase in organic traffic",
        "Improved domain authority",
      ],
      className: "bg-red-600 text-white",
    },
  ]

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
            Search Engine Optimization Portfolio
          </h1>
          <p className="text-xl opacity-80">
            Where SEO Excellence Meets Unforgettable Organic Triumph!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SEO

