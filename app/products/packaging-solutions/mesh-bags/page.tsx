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
      title="Mesh Bags"
      description="Lightweight and breathable, mesh bags are ideal for packaging produce such as fruits and vegetables, offering freshness and air circulation."
      image="https://example.com/images/mesh-bags.jpg" // Replace with real image
      features={[
<<<<<<< HEAD
        "Lightweight and breathable",
        "Ideal for produce and perishables",
        "Customizable sizes and colors"
      ]}
      specifications={[
        { label: "Category", value: "Packaging Solutions", icon: <FaTag size={32} className="text-white" /> },
        { label: "Material", value: "Poly Mesh Fabric", icon: <FaRulerCombined size={32} className="text-white" /> },
        { label: "Temperature Resistance", value: "Not heat-rated", icon: <FaThermometerHalf size={32} className="text-white" /> },
        { label: "Eco-Friendly", value: "Partially (Reusable)", icon: <FaLeaf size={32} className="text-white" /> },
        { label: "Reusability", value: "Yes", icon: <FaSyncAlt size={32} className="text-white" /> },
        { label: "Use Case", value: "Fresh produce packaging (fruits, vegetables)", icon: <FaBriefcase size={32} className="text-white" /> },
        { label: "Customization", value: "Custom sizes and colors available", icon: <FaTools size={32} className="text-white" /> },
        { label: "Durability", value: "Moderate - suitable for perishables", icon: <FaHammer size={32} className="text-white" /> },
        { label: "Water Resistance", value: "Breathable (not waterproof)", icon: <FaTint size={32} className="text-white" /> },
        { label: "Region Popularity", value: "Widely used in agriculture and grocery markets", icon: <FaGlobeAmericas size={32} className="text-white" /> }
=======
        'Lightweight and breathable',
        'Ideal for produce and perishables',
        'Customizable sizes and colors',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Packaging Solutions',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Poly Mesh Fabric',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Not heat-rated',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Partially (Reusable)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Reusability',
          value: 'Yes',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Fresh produce packaging (fruits, vegetables)',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Custom sizes and colors available',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'Moderate - suitable for perishables',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'Breathable (not waterproof)',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Widely used in agriculture and grocery markets',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
      ]}
    />
  );
}
