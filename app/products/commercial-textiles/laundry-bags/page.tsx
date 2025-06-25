import ProductSubPageTemplate from '@/components/Products/ProductSubPageTemplate';
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
      title="Laundry Bags"
      description="Heavy-duty laundry bags designed for commercial laundry operations, offering strength, capacity, and easy handling across healthcare and hospitality sectors."
      image="/product/ct/p6.jpg" // Replace with real image
      features={[
        'Tear-resistant',
        'Available in various sizes',
        'Customizable for different needs',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Commercial Textiles',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Durable polyester or poly-cotton blends',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Wash-safe, compatible with hot water cycles',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Yes (Reusable)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Reusability',
          value: 'Yes (Multiple cycles)',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Commercial laundry for hospitals and hotels',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Available with color coding and closures',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'High - Industrial-grade stitching and material',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'Low - Breathable by design',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Common across global healthcare facilities',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
