import ProductPageTemplate from '../../products/ProductPageTemplate';

export default function Page() {
  return (
    <ProductPageTemplate
      title="Packaging Solutions"
      description={`In addition to autoclave liners, we offer a wide range of industrial packaging solutions that meet the needs of various industries.`}
      image="https://picsum.photos/seed/packaging/800/400"
      features={[
        "Comprehensive packaging options",
        "Durable and reliable materials",
        "Custom sizes and branding available",
        "Suitable for multiple industries",
      ]}
      specifications={[
        { label: "Types", value: "Bulk Bags, Poly Woven Bags, Mesh Bags, Multiwall Paper Sacks" },
        { label: "Applications", value: "Industrial, Commercial, Agricultural" },
        { label: "Features", value: "Heavy-duty, Customizable, Eco-friendly" },
        { label: "Color", value: "Standard / Custom" },
        { label: "Availability", value: "Bulk & Custom Orders" },
      ]}
      subProducts={[
        { name: "Bulk Bags", href: "/products/packaging-solution/bulk-bags" },
        { name: "Poly Woven Bags", href: "/products/packaging-solution/poly-woven-bags" },
        { name: "Mesh Bags", href: "/products/packaging-solution/mesh-bags" },
        { name: "Multiwall Paper Sacks", href: "/products/packaging-solution/multiwall-paper-sacks" },
      ]}
    />
  );
}