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
      title="Shower Curtains"
<<<<<<< HEAD
      description="Waterproof and durable, these shower curtains are ideal for use in hospitals, clinics, and hospitality sectors, offering hygiene, ease of maintenance, and customizability."
=======
      description="Hygiene-focused shower curtains ideal for use in hospitals, clinics, and hospitality sectors, offering ease of maintenance and customizability."
>>>>>>> 588aeac076b34582da64bc0b8fd0d1ee46508d73
      image="/Product/ct/ct4.jpg" // Replace with real image
      features={[
        'Hygiene-focused design',
        'Easy maintenance',
        'Customizable options',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Commercial Textiles',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Hygiene Fabric',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Standard temperature range',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Commercial-grade materials',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Healthcare and hospitality facilities',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Available in various sizes and designs',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Construction',
          value: 'Hygiene and mildew resistant',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Protection',
          value: 'Hygiene barrier',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Widely used in hospitality globally',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
