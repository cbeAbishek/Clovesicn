import ProductPageTemplate from '../../products/ProductPageTemplate';

export default function Page() {
  return (
    <ProductPageTemplate
      title="Packaging Solutions"
      description="Discover our comprehensive packaging solutions designed for strength, durability, and efficiency across industries."
      image="https://picsum.photos/800/400?random=4"
      features={[
        "Heavy-duty materials",
        "Custom printing and sizing",
        "Bulk and retail options",
      ]}
      specifications={[
        { label: "Types", value: "Polywoven, Mesh, Multiwall Paper, Bulk Bags" },
        { label: "Applications", value: "Agriculture, Industry, Retail" },
        { label: "Customization", value: "Branding, Sizes, Strength" },
      ]}
      subProducts={[
        { name: "Polywoven Bags", href: "/products/packaging-solutions/polywoven-bags" },
        { name: "Mesh Bags", href: "/products/packaging-solutions/mesh-bags" },
        { name: "Multiwall Paper Sacks", href: "/products/packaging-solutions/multiwall-paper-sacks" },
        { name: "Bulk Bags", href: "/products/packaging-solutions/bulk-bags" },
      ]}
    />
  );
} 