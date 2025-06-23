export default function Page() {
  return (
    <section className="pt-28 px-4 sm:px-6 lg:px-8 pb-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* 🔰 Hero Section */}
        <div className="text-center space-y-4 animate-fade-in-up">
          
          <h1 className="text-4xl font-bold text-green-700">Autoclave Liners</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our autoclave liners are designed for medical waste management systems,
            particularly for use in autoclaves that neutralize hazardous waste through
            high heat and pressure.
          </p>
        </div>

        {/* 📸 Image + Description Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center animate-fade-in-up">
          <img
            src="https://picsum.photos/800/400"
            alt="Autoclave Liners"
            className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-green-600">Why Choose Our Liners?</h2>
            <p className="text-gray-600">
              Built with premium materials to withstand extreme temperatures and chemical environments.
              Our liners help streamline sterilization and disposal with maximum safety.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Compatible with all standard autoclaves</li>
              <li>Eco-friendly and recyclable options</li>
              <li>Certified for medical-grade usage</li>
            </ul>
          </div>
        </div>

        {/* ✨ Key Features Grid */}
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-green-600 text-center">Key Features</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "135°C Heat Resistance",
              "Chemical-Proof Design",
              "Custom Size Options",
              "Eco-Friendly Material",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-green-50 border border-green-100 p-4 rounded-lg text-center hover:shadow-lg transition"
              >
                <p className="text-sm font-medium text-gray-800">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 📊 Specifications Grid */}
        <div className="bg-gray-50 rounded-xl p-8 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Specifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
            <div><span className="font-semibold">Material:</span> HDPE/LDPE</div>
            <div><span className="font-semibold">Color:</span> Transparent / Custom</div>
            <div><span className="font-semibold">Thickness:</span> 30 – 200 microns</div>
            <div><span className="font-semibold">Sizes:</span> 18"x18" to 36"x50"</div>
            <div><span className="font-semibold">Application:</span> Medical Waste, Lab</div>
            <div><span className="font-semibold">Certification:</span> ISO 13485</div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
