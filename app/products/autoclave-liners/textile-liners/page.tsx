import ProductSubPageTemplate from '../../../products/ProductSubPageTemplate';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="Textile Liners"
      description="Our textile liners offer versatility and strength for a wide range of industrial and commercial uses."
      image="https://picsum.photos/800/400?random=4"
      features={[
        "High tensile strength",
        "Customizable fabric blends",
        "Available in various sizes",
      ]}
      specifications={[
        { label: "Material", value: "Cotton/Polyester" },
        { label: "Thickness", value: "Varies" },
        { label: "Certification", value: "ISO Certified" },
      ]}
    />
  );
}
