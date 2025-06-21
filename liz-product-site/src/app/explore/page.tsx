import { FaSearch, FaCloudDownloadAlt } from 'react-icons/fa'; // Corrected import
import FeatureCard from '../components/FeatureCard';


export default function ExplorePage() {
  return (
    <section className="py-12">
      <h2 className="text-5xl font-bold text-center text-white mb-12">Explore Our Powerful APIs</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <FeatureCard
          title="Search API"
          description="Instantly access and query vast datasets with our highly optimized search API. Find the information you need, when you need it."
          icon={<FaSearch />}
        />
        <FeatureCard
        title="Data Ingestion API"
        description="Seamlessly integrate your data sources with Liz. Our robust ingestion API handles large volumes of data with ease."
        icon={<FaCloudDownloadAlt />} // Corrected icon usage
        />
      </div>
      <div className="text-center mt-12">
        <p className="text-gray-300 text-lg mb-4">Ready to elevate your data experience?</p>
        <a href="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Contact Sales
        </a>
      </div>
    </section>
  );
}