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
  FaGlobeAmericas,
} from 'react-icons/fa';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="Jute/Hessian Liners"
      description="Preferred in regions like Australia, these biodegradable and heavy-duty liners are ideal for managing unshredded medical waste in an eco-friendly way."
      image="/product/al/p5.jpg" // Replace with real image
      features={[
        'Strong and heavy-duty',
        'Biodegradable and environmentally friendly',
        'Ideal for waste systems that don’t require shredding',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Autoclave Liners',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Natural Jute/Hessian',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Suitable for non-shredding autoclave systems',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Yes (Biodegradable)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Reusability',
          value: 'Yes (Limited Reuse)',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Unshredded medical waste handling',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Available in standard and custom sizes',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'Very High - Designed for rugged use',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'Low (absorbent nature)',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Highly preferred in Australia and eco-sensitive markets',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
