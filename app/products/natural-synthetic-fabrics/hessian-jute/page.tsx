import ProductSubPageTemplate from '../../../../components/products/ProductSubPageTemplate';
import {
  FaTag,
  FaRulerCombined,
  FaThermometerHalf,
  FaLeaf,
  FaSyncAlt,
  FaBriefcase,
  FaTools,
  FaHammer,
  FaTint,
  FaGlobeAmericas
} from "react-icons/fa";

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="Hessian (Jute)"
      description="A biodegradable and heavy-duty natural fabric used widely in industrial packaging and protection applications. Valued for its strength and sustainability."
      image="https://example.com/images/hessian-jute.jpg" // Replace with real image
      features={[
        "Environmentally sustainable",
        "Biodegradable and strong",
        "Suitable for industrial packaging"
      ]}
      specifications={[
        { label: "Category", value: "Natural & Synthetic Fabrics", icon: <FaTag size={32} className="text-white" /> },
        { label: "Material", value: "Jute (Natural Fiber)", icon: <FaRulerCombined size={32} className="text-white" /> },
        { label: "Temperature Resistance", value: "Moderate (not for high heat)", icon: <FaThermometerHalf size={32} className="text-white" /> },
        { label: "Eco-Friendly", value: "Yes (100% biodegradable)", icon: <FaLeaf size={32} className="text-white" /> },
        { label: "Reusability", value: "Yes (Reusable and compostable)", icon: <FaSyncAlt size={32} className="text-white" /> },
        { label: "Use Case", value: "Industrial and agricultural packaging", icon: <FaBriefcase size={32} className="text-white" /> },
        { label: "Customization", value: "Available in various weights and sizes", icon: <FaTools size={32} className="text-white" /> },
        { label: "Durability", value: "High - Tough and rugged", icon: <FaHammer size={32} className="text-white" /> },
        { label: "Water Resistance", value: "Low - Absorbs moisture", icon: <FaTint size={32} className="text-white" /> },
        { label: "Region Popularity", value: "Popular in eco-conscious markets", icon: <FaGlobeAmericas size={32} className="text-white" /> }
      ]}
    />
  );
}
