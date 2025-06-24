import ProductPageTemplate from '../../products/ProductPageTemplate';

export default function Page() {
  return (
    <ProductPageTemplate
      title="Natural & Synthetic Fabrics"
      description={`Cloves Inc. offers a range of natural and synthetic fabrics designed for commercial and industrial use. We also provide a range of specialized fabrics like woven and knitted fabrics for industrial and commercial applications, including protective barriers, reinforced packaging, and other demanding environments.`}
      image="https://picsum.photos/seed/fabrics/800/400"
      features={[
        "Wide selection of natural and synthetic materials",
        "Specialized woven and knitted options",
        "Suitable for protective and packaging applications",
        "Custom solutions for industrial needs",
      ]}
      specifications={[
        { label: "Types", value: "Jute, Calico, Poly-Woven, Knitted" },
        { label: "Applications", value: "Industrial, Commercial, Packaging" },
        { label: "Features", value: "Protective, Reinforced, Customizable" },
        { label: "Color", value: "Natural / Custom" },
        { label: "Availability", value: "Bulk & Custom Orders" },
      ]}
      subProducts={[
        { name: "Hessian (Jute)", href: "/products/natural-synthetic-fabrics/hessian-jute" },
        { name: "Calico", href: "/products/natural-synthetic-fabrics/calico" },
        { name: "Poly-Woven Fabrics", href: "/products/natural-synthetic-fabrics/poly-woven-fabrics" },
        { name: "Woven & Knitted Fabrics", href: "/products/natural-synthetic-fabrics/woven-knitted-fabrics" },
      ]}
    />
  );
}