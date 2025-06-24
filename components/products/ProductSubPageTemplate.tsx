interface ProductSubPageTemplateProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  specifications: { label: string; value: string }[];
}

export default function ProductSubPageTemplate({
  title,
  description,
  image,
  features,
  specifications,
}: ProductSubPageTemplateProps) {
  return (
    <section className="pt-28 px-4 sm:px-6 lg:px-8 pb-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-green-700">{title}</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image + Features Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center animate-fade-in-up">
          <img
            src={image}
            alt={title}
            className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-green-600">Why Choose Our {title}?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Specifications Section */}
        {specifications.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-8 animate-fade-in-up">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Specifications</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
              {specifications.map((spec, i) => (
                <div key={i}>
                  <span className="font-semibold">{spec.label}:</span> {spec.value}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
