export default function Skills() {
  return (
    <section className="min-h-screen px-[9%] py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">My Skills</h2>
      <ul className="flex flex-wrap justify-center gap-6 text-lg">
        {[
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "JavaScript ES6+",
          "HTML & CSS",
          "Git & GitHub"
        ].map((skill, index) => (
          <li key={index} className="bg-gray-900 px-6 py-3 rounded-full hover:scale-110 transition-transform">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
