import ProductPageTemplate from '../../products/ProductPageTemplate';

export default function Page() {
  return (
    <ProductPageTemplate
      title="Autoclave Liners"
      description="Our autoclave liners are designed for medical waste management systems, particularly for use in autoclaves that neutralize hazardous waste through high heat and pressure."
      image="https://picsum.photos/800/400"
      features={[
        "Compatible with all standard autoclaves",
        "Eco-friendly and recyclable options",
        "Certified for medical-grade usage",
      ]}
      specifications={[
        { label: "Material", value: "HDPE/LDPE" },
        { label: "Color", value: "Transparent / Custom" },
        { label: "Thickness", value: "30 – 200 microns" },
        { label: "Sizes", value: '18\"x18\" to 36\"x50\"' },
        { label: "Application", value: "Medical Waste, Lab" },
        { label: "Certification", value: "ISO 13485" },
      ]}
      subProducts={[
        { name: "High Temp Plastic Liners", href: "/products/autoclave-liners/hightemp-plastic-liners" },
        { name: "Jute Hessian Liners", href: "/products/autoclave-liners/jute-hessian-liners" },
        { name: "Textile Liners", href: "/products/autoclave-liners/textile-liners" },
        { name: "Woven Plastic Liners", href: "/products/autoclave-liners/woven-plastic-liners" },
      ]}
    />
  );
}
