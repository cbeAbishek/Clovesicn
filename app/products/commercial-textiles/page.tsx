import ProductPageTemplate from '../../products/ProductPageTemplate';

export default function Page() {
  return (
    <ProductPageTemplate
      title="Commercial Textiles"
      description="Our commercial textiles are designed for durability and performance in hospitality, healthcare, and industrial settings."
      image="https://picsum.photos/800/400?random=2"
      features={[
        "High-quality materials",
        "Custom sizes and colors",
        "Bulk order discounts",
      ]}
      specifications={[
        { label: "Material", value: "Cotton/Polyester Blends" },
        { label: "Applications", value: "Hotels, Hospitals, Industry" },
        { label: "Customization", value: "Logos, Colors, Sizes" },
      ]}
      subProducts={[
        { name: "Towels", href: "/products/commercial-textiles/towels" },
        { name: "Shower Curtains", href: "/products/commercial-textiles/shower-curtains" },
        { name: "Bedding", href: "/products/commercial-textiles/bedding" },
        { name: "Laundry Bags", href: "/products/commercial-textiles/laundry-bags" },
      ]}
    />
  );
} 