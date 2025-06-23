import ProductSubPageTemplate from '../../../products/ProductSubPageTemplate';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="Woven Plastic Liners"
      description="Our woven plastic liners are engineered for maximum durability and resistance to moisture and chemicals."
      image="https://picsum.photos/800/400?random=5"
      features={[
        "Moisture and chemical resistant",
        "Lightweight yet strong",
        "Custom sizes and printing",
      ]}
      specifications={[
        { label: "Material", value: "Polypropylene" },
        { label: "Thickness", value: "Varies" },
        { label: "Certification", value: "Industry Standard" },
      ]}
    />
  );
}
