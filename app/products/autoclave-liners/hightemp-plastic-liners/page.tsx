import ProductSubPageTemplate from '../../../../components/products/ProductSubPageTemplate';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="High-Temp Plastic Liners"
      description="Designed to withstand the intense heat of medical autoclaves, these liners protect carts and ensure safe sterilization of hazardous medical waste."
      image="https://example.com/images/high-temp-plastic-liner.jpg" // Replace with real image
      features={[
        "Heat resistant up to 140°C",
        "Available in lightweight 30 kg rolls",
        "Ideal for sterilizing hazardous medical waste"
      ]}
      specifications={[
        { label: "Category", value: "Autoclave Liners" },
        { label: "Material", value: "Durable Plastic (Polyester Blend)" },
        { label: "Temperature Resistance", value: "Up to 140°C" },
        { label: "Eco-Friendly", value: "Yes" },
        { label: "Reusability", value: "No (Single-use)" },
        { label: "Use Case", value: "Hospital waste sterilization" },
        { label: "Customization", value: "Available in various sizes" },
        { label: "Durability", value: "High - Prevents melting of medical waste" },
        { label: "Water Resistance", value: "Yes" },
        { label: "Region Popularity", value: "Global (especially healthcare facilities)" }
      ]}
    />
  );
}
