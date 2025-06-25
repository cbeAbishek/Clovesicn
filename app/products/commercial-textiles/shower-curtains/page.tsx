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
      title="Shower Curtains"
      description="Waterproof and durable, these shower curtains are ideal for use in hospitals, clinics, and hospitality sectors, offering hygiene, ease of maintenance, and customizability."
      image="/product/ct/p8.jpg" // Replace with real image
      features={[
        'Water-resistant and easy to clean',
        'Durable for frequent use',
        'Customizable sizes and designs',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Commercial Textiles',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'PVC, PEVA, or polyester-based blends',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Resistant to warm water exposure',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Varies by material (PEVA preferred)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Reusability',
          value: 'Yes',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Hospitals, hotels, and hygiene-sensitive zones',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Custom lengths, hooks, and print options',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'High - Daily use ready',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'Yes (Fully waterproof)',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Widely used in institutional and hospitality settings',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
