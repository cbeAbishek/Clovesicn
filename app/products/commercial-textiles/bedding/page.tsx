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
      title="Bedding"
      description="High-quality bedding solutions designed specifically for hospitals and healthcare facilities, built for comfort, hygiene, and durability."
<<<<<<< HEAD
      image="/product/ct/p3.jpg" // Replace with real image
=======
      image="/Product/ct/p3.jpg" // Replace with real image
>>>>>>> 3acf85276d2fde6d297d52df55119d0427e2f7a3
      features={[
        'Soft and comfortable',
        'Durable for frequent laundering',
        'Suitable for healthcare environments',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Commercial Textiles',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Medical-grade cotton/poly blends',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Wash-safe (High temp laundry resistant)',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Yes (Reusable)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Reusability',
          value: 'Yes (Multiple wash cycles)',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Hospital beds, patient care settings',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Sizes, colors, and stitching options available',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'High - Designed for commercial laundering',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'Not applicable',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Hospitals and healthcare systems globally',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
