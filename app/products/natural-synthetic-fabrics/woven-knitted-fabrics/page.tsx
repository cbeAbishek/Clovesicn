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
      title="Woven & Knitted Fabrics"
      description="Specially engineered for industrial applications, these fabrics offer superior tear resistance and reinforcement for packaging, protection, and other demanding uses."
      image="/product/nfs/p8.jpg" // Replace with real image
      features={[
        'Reinforced for heavy-duty applications',
        'Tear-resistant',
        'Available in custom sizes and designs',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Natural & Synthetic Fabrics',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Engineered Woven and Knitted Blends',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Depends on blend (moderate to high)',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Varies (select blends available)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Reusability',
          value: 'Yes',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Protective barriers, reinforced packaging',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Custom weave patterns and strengths available',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Durability',
          value: 'Very High - Built for industrial use',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Water Resistance',
          value: 'Optional depending on coating',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Industrial markets globally',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
