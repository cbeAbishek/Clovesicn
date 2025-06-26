<<<<<<< HEAD
import ProductSubPageTemplate from '../../../../components/products/ProductSubPageTemplate';
=======
import ProductSubPageTemplate from '@/components/Products/pstemp';
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
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
<<<<<<< HEAD
  FaGlobeAmericas
} from "react-icons/fa";
=======
  FaGlobeAmericas,
} from 'react-icons/fa';
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="Multiwall Paper Sacks"
      description="Multiwall paper sacks are strong, multi-layered paper bags ideal for packaging dry goods and industrial materials. They provide excellent protection against moisture and external elements."
      image="https://example.com/images/multiwall-paper-sacks.jpg" // Replace with real image
      features={[
<<<<<<< HEAD
        "Environmentally friendly",
        "High strength and moisture resistance",
        "Suitable for various industrial applications"
      ]}
      specifications={[
        { label: "Category", value: "Packaging Solutions", icon: <FaTag size={32} className="text-white" /> },
        { label: "Material", value: "Multi-layered Paper", icon: <FaRulerCombined size={32} className="text-white" /> },
        { label: "Temperature Resistance", value: "Moderate - Suitable for dry storage", icon: <FaThermometerHalf size={32} className="text-white" /> },
        { label: "Eco-Friendly", value: "Yes (Biodegradable and recyclable)", icon: <FaLeaf size={32} className="text-white" /> },
        { label: "Reusability", value: "Limited (Typically single-use)", icon: <FaSyncAlt size={32} className="text-white" /> },
        { label: "Use Case", value: "Packaging dry goods and industrial materials", icon: <FaBriefcase size={32} className="text-white" /> },
        { label: "Customization", value: "Sizes, ply count, and printing available", icon: <FaTools size={32} className="text-white" /> },
        { label: "Durability", value: "High - Multi-layered strength", icon: <FaHammer size={32} className="text-white" /> },
        { label: "Water Resistance", value: "Good moisture resistance", icon: <FaTint size={32} className="text-white" /> },
        { label: "Region Popularity", value: "Common in industrial and agricultural sectors", icon: <FaGlobeAmericas size={32} className="text-white" /> }
=======
        'Environmentally friendly',
        'High strength and moisture resistance',
        'Suitable for various industrial applications',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Packaging Solutions',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Multi-layered Paper',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Moderate - Suitable for dry storage',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Yes (Biodegradable and recyclable)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Reusability',
          value: 'Limited (Typically single-use)',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Packaging dry goods and industrial materials',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Sizes, ply count, and printing available',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'High - Multi-layered strength',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'Good moisture resistance',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Common in industrial and agricultural sectors',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
      ]}
    />
  );
}
