import ProductSubPageTemplate from '@/components/Products/pstemp';
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
  FaGlobeAmericas,
} from 'react-icons/fa';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="Bulk Bags"
      description="These large, heavy-duty bulk bags are ideal for transporting materials such as chemicals, grains, and other industrial goods. Designed for strength and durability."
      image="/Product/ps/ps1.jpg" // Replace with real image
      features={[
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
      ]}
    />
  );
}
