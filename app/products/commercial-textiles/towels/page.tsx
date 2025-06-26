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
  FaGlobeAmericas,
} from 'react-icons/fa';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="Towels"
      description="Industrial-grade towels built for high absorbency and repeated washing. Ideal for healthcare, hospitality, and industrial environments."
      image="/product/towels.jpg" // Replace with real image
      features={[
        'High absorbency',
        'Durable and long-lasting',
        'Available in various sizes',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Commercial Textiles',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Cotton-rich industrial blend',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Suitable for industrial laundering',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Yes (Reusable)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Reusability',
          value: 'Yes (Withstands repeated washes)',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Hospitals, hotels, industrial sanitation',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Size and thickness customization available',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'Very High - Built for commercial use',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'High absorbency (not waterproof)',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Standard in healthcare and hospitality industries',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
