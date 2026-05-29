import { CheckCircleIcon, TrophyIcon } from '@heroicons/react/24/outline';

const trustBadges = [
  'ISO Certified',
  '24/7 Support',
  'Free Consultation',
  'Warranty Included',
];

const whyChoose = [
  'Premium quality products',
  'Expert installation team',
  'Competitive pricing',
  'After-sales support',
  'Tailored solutions',
];

export default function About() {
  return (
    <section id="about" className="bg-black-main py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <h2 className="section-title text-left">About NMAS Access Solutions</h2>
            <p className="text-grey-metal text-base md:text-lg mb-4 leading-relaxed">
              With over a decade of experience in the security industry, NMAS Access
              Solutions delivers cutting-edge access control and security systems across
              South Africa.
            </p>
            <p className="text-grey-metal text-base md:text-lg mb-8 leading-relaxed">
              We specialize in designing, installing, and maintaining comprehensive
              access solutions for commercial, industrial, and residential properties.
              Our team of certified technicians ensures your premises remain secure with
              the latest technology.
            </p>

            {/* Trust badges 2x2 grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-gold-primary flex-shrink-0" />
                  <span className="text-white-clean font-medium text-sm">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Request Free Quote
            </a>
          </div>

          {/* Right column */}
          <div className="card bg-gradient-to-br from-gold-primary/10 to-gold-dark/10 border border-gold-primary/30 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <TrophyIcon className="h-16 w-16 text-gold-primary" />
            </div>
            <h3 className="font-heading text-gold-primary text-2xl font-bold mb-6">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              {whyChoose.map((item) => (
                <li key={item} className="text-grey-metal flex items-center gap-3">
                  <span className="text-gold-primary font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
