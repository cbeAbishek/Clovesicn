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
      title="Textile Liners"
<<<<<<< HEAD
      description="Crafted from durable polyester and cotton blends, these textile liners provide an eco-friendly and reusable alternative for medical waste management in autoclaves."
      image="/Product/al/p9.jpg" // Replace with real image
=======
      description="Atactic polypropylene and cotton blend liners providing eco-friendly solutions for medical waste autoclave facilities. Allows higher steam penetration and lower energy costs."
      image="/Product/al/p9.jpg"
>>>>>>> 588aeac076b34582da64bc0b8fd0d1ee46508d73
      features={[
        'Atactic polypropylene & cotton blends',
        'Allows higher steam penetration',
        'Enables lower cook time and lower energy cost',
        'Cost effective in purchase price and cooking cost',
        'Available in any size',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Autoclave Liners',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Atactic polypropylene & cotton blends',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Suitable for autoclaving',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Steam Penetration',
          value: 'Enhanced steam penetration',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Energy Efficiency',
          value: 'Lower cook time and energy cost',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Medical waste autoclave facilities',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Available in any size',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Cost Effectiveness',
          value: 'Cost effective in purchase and cooking',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Manufacturing',
          value: 'Only manufacturer with global supply capability',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Global medical waste facilities',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
