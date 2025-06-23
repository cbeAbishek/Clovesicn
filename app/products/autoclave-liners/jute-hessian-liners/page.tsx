import ProductSubPageTemplate from '../../../products/ProductSubPageTemplate';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="Jute Hessian Liners"
      description="Our jute hessian liners are eco-friendly and perfect for sustainable packaging and storage."
      image="https://picsum.photos/800/400?random=3"
      features={[
        "Biodegradable material",
        "Strong and durable",
        "Custom sizes available",
      ]}
      specifications={[
        { label: "Material", value: "Jute" },
        { label: "Thickness", value: "Varies" },
        { label: "Certification", value: "Eco Certified" },
      ]}
    />
  );
}
