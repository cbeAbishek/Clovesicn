import ProductPageTemplate from '../../products/ProductPageTemplate';

export default function Page() {
  return (
    <ProductPageTemplate
      title="Commercial Textiles"
      description="Our textiles are designed to meet the rigorous demands of healthcare, hospitality, and industrial sectors."
      image="https://picsum.photos/seed/textiles/800/400"
      features={[
        "Durable and long-lasting fabrics",
        "Available in various weaves and finishes",
        "Custom branding and sizing options",
      ]}
      specifications={[
        { label: "Material", value: "Cotton, Polyester, Blends" },
        { label: "GSM", value: "120 – 300" },
        { label: "Finish", value: "Stain-Resistant / Fire-Retardant" },
        { label: "Use", value: "Hospitality, Healthcare, Industrial" },
        { label: "Color", value: "White / Custom" },
        { label: "Certifications", value: "ISO 9001 / OEKO-TEX" },
      ]}
      subProducts={[
        { name: "Bedding", href: "/products/commercial-textiles/bedding" },
        { name: "Towels", href: "/products/commercial-textiles/towels" },
        { name: "Laundry Bags", href: "/products/commercial-textiles/laundry-bags" },
        { name: "Shower Curtains", href: "/products/commercial-textiles/shower-curtains" },
      ]}
        />
      );
    }