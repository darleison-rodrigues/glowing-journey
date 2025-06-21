interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Or string if using an icon font/SVG path
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="text-blue-400 text-5xl mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}