export default function Education() {
  return (
    <section className="min-h-screen px-[9%] py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">Education</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Diplôme Full Stack MERN</h3>
          <p>Gomycode</p>
          <span className="text-primary">2025</span>
          <a 
            href="https://diploma.gomycode.app/?id=31750946440750294" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 bg-primary text-black rounded-full font-semibold hover:bg-primary/80 transition"
          >
            Voir le diplôme (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
