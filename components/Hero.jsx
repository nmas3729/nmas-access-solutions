import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section id="home" className="relative bg-black-main pt-28 pb-12 md:pt-36 md:pb-20">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-primary via-gold-dark to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left column – 60% */}
          <div className="md:col-span-3">
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-tight text-white-clean mb-2">
              Secure Your World with{' '}
              <span className="text-gold-primary">Smart Access Solutions</span>
            </h1>
            <p className="text-sm text-grey-metal mb-6 tracking-wide">A Division of NMAS Innovations</p>
            <p className="text-grey-metal text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              Professional access control, biometric systems, turnstiles, boom gates, and
              comprehensive security solutions across South Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                Explore Services
              </a>
              <a href="#contact" className="btn-secondary">
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Right column – 40% */}
          <div className="md:col-span-2">
            <div className="card border border-gold-primary/30 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-14 w-14 text-gold-primary" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white-clean mb-3">
                24/7 Professional Support
              </h3>
              <p className="text-grey-metal mb-6">Emergency service available</p>
              <a
                href="https://wa.me/27674877278"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.126 1.52 5.867L.055 23.52l5.775-1.514A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.98 0-3.83-.533-5.42-1.46l-.389-.23-4.03 1.057 1.076-3.93-.253-.403A9.789 9.789 0 012.18 12c0-5.423 4.397-9.82 9.82-9.82 5.423 0 9.82 4.397 9.82 9.82 0 5.423-4.397 9.82-9.82 9.82z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
