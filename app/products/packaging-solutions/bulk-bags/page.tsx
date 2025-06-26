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
      title="Bulk Bags"
      description="These large, heavy-duty bulk bags are ideal for transporting materials such as chemicals, grains, and other industrial goods. Designed for strength and durability."
      image="https://example.com/images/bulk-bags.jpg" // Replace with real image
      features={[
<<<<<<< HEAD
        "High strength and durability",
        "Available in various sizes",
        "Suitable for industrial and agricultural use"
      ]}
      specifications={[
        { label: "Category", value: "Packaging Solutions", icon: <FaTag size={32} className="text-white" /> },
        { label: "Material", value: "Heavy-Duty Woven Fabric", icon: <FaRulerCombined size={32} className="text-white" /> },
        { label: "Temperature Resistance", value: "Standard (Not for high-heat applications)", icon: <FaThermometerHalf size={32} className="text-white" /> },
        { label: "Eco-Friendly", value: "Partially (Reusable and recyclable)", icon: <FaLeaf size={32} className="text-white" /> },
        { label: "Reusability", value: "Yes", icon: <FaSyncAlt size={32} className="text-white" /> },
        { label: "Use Case", value: "Transporting bulk chemicals, grains, and materials", icon: <FaBriefcase size={32} className="text-white" /> },
        { label: "Customization", value: "Various sizes and load capacities available", icon: <FaTools size={32} className="text-white" /> },
        { label: "Durability", value: "Very High - Designed for heavy loads", icon: <FaHammer size={32} className="text-white" /> },
        { label: "Water Resistance", value: "Depends on liner (optional waterproofing)", icon: <FaTint size={32} className="text-white" /> },
        { label: "Region Popularity", value: "Used globally in agriculture and industry", icon: <FaGlobeAmericas size={32} className="text-white" /> }
=======
        'High strength and durability',
        'Available in various sizes',
        'Suitable for industrial and agricultural use',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Packaging Solutions',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Heavy-Duty Woven Fabric',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Standard (Not for high-heat applications)',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Partially (Reusable and recyclable)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Reusability',
          value: 'Yes',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Transporting bulk chemicals, grains, and materials',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Various sizes and load capacities available',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'Very High - Designed for heavy loads',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'Depends on liner (optional waterproofing)',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Used globally in agriculture and industry',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
      ]}
    />
  );
}
