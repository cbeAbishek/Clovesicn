import ProductSubPageTemplate from '@/components/Products/pstemp';
import {
  FaTag, // For Category
  FaRulerCombined, // For Material
  FaThermometerHalf, // For Temperature Resistance
  FaLeaf, // For Eco-Friendly
  FaSyncAlt, // For Reusability
  FaBriefcase, // For Use Case
  FaTools, // For Customization
  FaHammer, // For Durability
  FaTint, // For Water Resistance
  FaGlobeAmericas, // For Region Popularity
} from 'react-icons/fa';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="High-Temp Plastic Liners"
      description="Designed to withstand the intense heat of medical autoclaves, these liners protect carts and ensure safe sterilization of hazardous medical waste."
      image="/Product/al/p1.jpg" // Replace with real image
      features={[
        'Heat resistant up to 140°C',
        'Available in lightweight 30 kg rolls',
        'Ideal for sterilizing hazardous medical waste',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Autoclave Liners',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Durable Plastic (Polyester Blend)',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Up to 140°C',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Yes',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Reusability',
          value: 'No (Single-use)',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Hospital waste sterilization',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Available in various sizes',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'High - Prevents melting of medical waste',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'Yes',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Global (especially healthcare facilities)',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
