import ProductPageTemplate from '../../products/ProductPageTemplate';

export default function Page() {
  return (
    <ProductPageTemplate
      title="Natural & Synthetic Fabrics"
      description="Explore our range of natural and synthetic fabrics suitable for a variety of industrial and commercial applications."
      image="https://picsum.photos/800/400?random=3"
      features={[
        "Wide range of fabric types",
        "Customizable for your needs",
        "Sustainable options available",
      ]}
      specifications={[
        { label: "Types", value: "Cotton, Jute, Polypropylene, Polyester" },
        { label: "Applications", value: "Packaging, Apparel, Industry" },
        { label: "Customization", value: "Weaving, Dyeing, Printing" },
      ]}
      subProducts={[
        { name: "Woven & Knitted Fabrics", href: "/products/natural-synthetic-fabrics/woven-knitted-fabrics" },
        { name: "Hessian & Jute", href: "/products/natural-synthetic-fabrics/hessian-jute" },
        { name: "Poly Woven Fabrics", href: "/products/natural-synthetic-fabrics/poly-woven-fabrics" },
        { name: "Calico", href: "/products/natural-synthetic-fabrics/calico" },
      ]}
    />
  );
} 