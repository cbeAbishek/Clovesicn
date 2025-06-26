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
      title="Poly Woven Bags"
      description="Poly woven bags are tear-resistant and moisture-proof packaging solutions, ideal for transporting heavy materials such as cement, grains, and chemicals."
      image="https://example.com/images/poly-woven-bags.jpg" // Replace with real image
      features={[
<<<<<<< HEAD
        "Tear-resistant and moisture-proof",
        "Available in custom sizes and designs",
        "Excellent for transporting heavy materials"
      ]}
      specifications={[
        { label: "Category", value: "Packaging Solutions", icon: <FaTag size={32} className="text-white" /> },
        { label: "Material", value: "Polypropylene Woven Fabric", icon: <FaRulerCombined size={32} className="text-white" /> },
        { label: "Temperature Resistance", value: "Normal range (not heat-rated)", icon: <FaThermometerHalf size={32} className="text-white" /> },
        { label: "Eco-Friendly", value: "Partially (Reusable)", icon: <FaLeaf size={32} className="text-white" /> },
        { label: "Reusability", value: "Yes", icon: <FaSyncAlt size={32} className="text-white" /> },
        { label: "Use Case", value: "Packaging and transporting grains, cement, chemicals", icon: <FaBriefcase size={32} className="text-white" /> },
        { label: "Customization", value: "Custom sizes and printing available", icon: <FaTools size={32} className="text-white" /> },
        { label: "Durability", value: "High - Tear and puncture resistant", icon: <FaHammer size={32} className="text-white" /> },
        { label: "Water Resistance", value: "Yes (moisture-proof coating)", icon: <FaTint size={32} className="text-white" /> },
        { label: "Region Popularity", value: "Widely used in agriculture and construction sectors", icon: <FaGlobeAmericas size={32} className="text-white" /> }
      ]}
    />
  );
}
=======
        'Tear-resistant and moisture-proof',
        'Available in custom sizes and designs',
        'Excellent for transporting heavy materials',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Packaging Solutions',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Polypropylene Woven Fabric',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Normal range (not heat-rated)',
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
          value: 'Packaging and transporting grains, cement, chemicals',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Custom sizes and printing available',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'High - Tear and puncture resistant',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'Yes (moisture-proof coating)',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Widely used in agriculture and construction sectors',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
