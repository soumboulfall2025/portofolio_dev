export default function Contact() {
  return (
    <section className="min-h-screen px-[9%] py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full px-4 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}
