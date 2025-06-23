import ProductSubPageTemplate from '../../../products/ProductSubPageTemplate';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="High Temp Plastic Liners"
      description="Our high temp liners are designed for extreme conditions..."
      image="https://picsum.photos/800/400"
      features={[
        "Withstands up to 150°C",
        "Chemical resistant",
        "Custom sizes available",
      ]}
      specifications={[
        { label: "Material", value: "HDPE" },
        { label: "Thickness", value: "50-200 microns" },
        { label: "Certification", value: "ISO 13485" },
      ]}
    />
  );
}
