export default function Services() {
  return (
    <section className="min-h-screen px-[9%] py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">My Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p>Développement d'applications web performantes et responsives avec la stack MERN.</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-4">API REST</h3>
          <p>Création d'API sécurisées et évolutives avec Node.js et Express.</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-4">Mobile Apps</h3>
          <p>Développement d'applications mobiles hybrides avec React Native Expo.</p>
        </div>
      </div>
    </section>
  );
}
