import React from "react";
import { motion } from "framer-motion";
import { Sun, Wind, BatteryCharging, Users } from "lucide-react";

export default function KinwardEnergyLanding() {
  const gallery = [
    { src: "/assets/solar-field.jpg", alt: "Solar field glinting under sunrise" },
    { src: "/assets/wind-farm.jpg", alt: "Wind turbines along a green ridge" },
    { src: "/assets/storage.jpg", alt: "Battery storage facility" },
    { src: "/assets/fuel-cell.jpg", alt: "Hydrogen fuel cell stack operating cleanly" },
  ];

  const [showCareerModal, setShowCareerModal] = React.useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const subject = `Contact from ${data.name}`;
    const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AMessage: ${data.message}`;
    window.location.href = `mailto:business@kinward.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Career Modal */}
      {showCareerModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Dream job not listed? Create it!
              </h3>
              <p className="text-slate-600 mb-6">
                We love hearing from people who think big, challenge ideas, and want to grow with us.
                Drop us an open application — you might just spark our next new role.
              </p>
              <div className="bg-sky-50 rounded-lg p-4 mb-6">
                <p className="text-sky-800 font-semibold">
                  Send us your application at<br />
                  <span className="text-lg">business@kinwardenergy.com</span>
                </p>
              </div>
              <button
                onClick={() => setShowCareerModal(false)}
                className="bg-sky-500 text-white px-6 py-3 rounded-2xl hover:bg-sky-600 transition-colors w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-xl font-bold leading-none">Kinward Energy</h1>
            <p className="text-xs text-slate-500">Our compass is our children's future</p>
          </div>
        </div>
        <nav className="flex gap-6 items-center text-sm">
          <a href="#about-section" className="hover:underline">ABOUT US</a>
          <button
            onClick={() => setShowCareerModal(true)}
            className="hover:underline"
          >
            CAREERS
          </button>
          <a href="#contact" className="bg-sky-400 text-white px-4 py-2 rounded-2xl shadow hover:bg-green-700">Get in touch</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="h-[560px] sm:h-[520px] md:h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/hero.jpg')` }}
          role="img"
          aria-label="Child and parent walking toward a sunlit field with solar panels"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
          <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-white"
            >
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                A New Direction in Energy
                <br />
                <span className="text-3xl sm:text-4xl font-semibold">
                  A Promise to Our Children and the Planet We Share.
                </span>
              </h2>

              <div className="mt-6">
                <p className="text-xl">
                  Discover our <a href="#our-why" className="font-semibold underline hover:text-sky-200 transition-colors">Whys</a>
                </p>
              </div>

              <div className="mt-6 flex gap-4">

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 -mt-1">
        {/* Our Why Section with New Background */}
        <section
          id="our-why"
          className="rounded-2xl p-12 shadow mt-12 text-white relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 50%, #059669 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-green-600/20"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Our Whys</h3>
            <p className="text-xl italic font-medium mb-8">The Unacceptable Inheritance</p>
            <p className="text-lg leading-relaxed">
              For too long, progress had a hidden cost a debt passed to the next generation. We asked: "What will we hand over?"
              The answer cannot be a burden or a source of shame. It must be a foundation for safety, health, and opportunity.
              This conviction drives everything we do.
            </p>
            <div className="mt-8">
              <p className="text-lg">
                Want to learn more about us?{" "}
                <a href="#about-section" className="font-semibold underline hover:text-sky-200 transition-colors">
                  About us
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-12 bg-gradient-to-r from-sky-400 to-green-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Are you ready to change direction?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">For Landowners:</h4>
              <p className="mb-3">Learn how your land can power a cleaner future and create a lasting legacy.</p>
              <a href="https://bisnexplore.com" className="inline-block bg-white text-sky-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Register your lands at Bisnexplore.com
              </a>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">For Investors & Partners:</h4>
              <p className="mb-3">Discover investable projects built on a foundation of purpose and principle.</p>
              <a href="https://bisnexplore.com" className="inline-block bg-white text-sky-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Find your projects at Bisnexplore.com
              </a>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">For Our Community:</h4>
              <p className="mb-3">See how we're committed to being a responsible neighbor and a catalyst for local prosperity.</p>
              <a href="https://bisnexplore.com" className="inline-block bg-white text-sky-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Follow up on your projects at Bisnexplore.com
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xl font-semibold">Together, let's build a future worthy of our children.</p>
          </div>
        </section>

        {/* About Section - Mission, Vision, Promise */}
        <section id="about-section" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.article className="bg-sky-400 rounded-2xl p-6 shadow text-center text-white">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-white italic font-medium mt-1">The Work We Do</p>
            <p className="mt-3">To power a reliable and resilient clean energy transition. We develop cost-effective renewable projects—solar, wind, storage, and fuel cells—that strengthen the grid, protect communities from disruption, and ensure critical businesses like data centers have the unwavering power they need.</p>
          </motion.article>

          <motion.article className="bg-sky-400 rounded-2xl p-6 shadow text-center text-white">
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-white italic font-medium mt-1">The Future We See</p>
            <p className="mt-3">A world where every child inherits clean air, a stable climate, and a thriving environment. We measure success not just by megawatts but by the lasting positive impact we create — a legacy you can be proud to hand down.</p>
          </motion.article>

          <motion.article className="bg-sky-400 rounded-2xl p-6 shadow text-center text-white">
            <h3 className="text-xl font-semibold">Our Promise</h3>
            <p className="text-white italic font-medium mt-1">The Guiding Principle</p>
            <p className="mt-3">We are building a legacy you can be proud of. We operate with the next generation as our silent partner in every decision — measuring success not only by energy output but by our positive, lasting impact.</p>
          </motion.article>
        </section>

        {/* Gallery */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold">Projects we Develop</h3>
          <p className="mt-2 text-slate-600">We develop clean energy projects so you can hand down a world filled with promise, not regret.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((g, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow">
                <img src={g.src} alt={g.alt} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold">Our Services</h3>
          <p className="mt-2 text-slate-600">
            We provide comprehensive support for renewable energy development — guiding each project from concept to completion.
          </p>
          <ul className="mt-6 list-disc list-inside text-slate-700 space-y-2">
            <li><span className="font-semibold">Project Development:</span> From feasibility studies to construction management.</li>
            <li><span className="font-semibold">Engineering & Design:</span> Tailored solutions for renewable energy projects.</li>
            <li><span className="font-semibold">Community Partnerships:</span> Collaborating with local stakeholders for sustainable impact.</li>
            <li><span className="font-semibold">Consulting & Advisory:</span> Strategic guidance for clean energy investments and policy alignment.</li>
          </ul>
        </section>

        {/* Footer / Contact */}
        <footer className="mt-12 bg-slate-50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start gap-6" id="contact">
          <div className="max-w-xl">
            <h4 className="text-xl font-bold">Together, let's build a future worthy of our children.</h4>
            <p className="mt-3 text-slate-600">Contact us to discuss land opportunities, projects, or partnerships.</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="mailto:business@kinward.com" className="block rounded-lg p-3 ring-1 ring-slate-200 hover:bg-white transition-colors">
                business@kinward.com
              </a>
              <a href="tel:+13468839217" className="block rounded-lg p-3 ring-1 ring-slate-200 hover:bg-white transition-colors">
                +1 346 883 9217
              </a>
            </div>
          </div>

          <div className="flex-1">
            <form className="grid grid-cols-1 gap-3" onSubmit={handleFormSubmit}>
              <label className="text-sm font-medium">Name</label>
              <input name="name" className="p-3 rounded-lg ring-1 ring-slate-200" placeholder="Your name" required />
              <label className="text-sm font-medium">Email</label>
              <input name="email" type="email" className="p-3 rounded-lg ring-1 ring-slate-200" placeholder="you@example.com" required />
              <label className="text-sm font-medium">Message</label>
              <textarea name="message" className="p-3 rounded-lg ring-1 ring-slate-200" rows={4} placeholder="Tell us about your interest or project" required />
              <div className="mt-2 flex gap-2">
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 transition-colors">
                  Send message
                </button>
                <button type="button" className="px-4 py-2 rounded-2xl ring-1 hover:bg-white transition-colors">
                  Request a call
                </button>
              </div>
            </form>
          </div>
        </footer>

        <div className="mt-6 mb-12 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Kinward Energy — Our compass is our children's future.
        </div>
      </main>
    </div>
  );
}