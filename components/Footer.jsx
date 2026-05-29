import Image from 'next/image';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black-main border-t border-grey-metal/30 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 – Logo & tagline */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <Image src="/images/nmasaccesslogo.png" alt="NMAS Access Solutions Logo" width={48} height={48} className="w-12 h-12 object-contain" />
              <div className="flex flex-col justify-center">
                <span className="text-xl font-heading font-bold leading-none mb-1">
                  <span className="text-white-clean">NMAS </span>
                  <span className="text-gold-primary">Access Solutions</span>
                </span>
                <span className="text-[0.6rem] text-grey-metal tracking-[0.15em] uppercase font-semibold">Division of NMAS Innovations</span>
              </div>
            </a>
            <p className="text-grey-metal mt-4 text-sm leading-relaxed">
              Secure, Smart, Seamless Access Control Systems
            </p>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h4 className="text-gold-primary font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-grey-metal hover:text-gold-primary transition-all duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Contact Info */}
          <div>
            <h4 className="text-gold-primary font-heading font-semibold mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:access@nmas.co.za"
                  className="text-grey-metal hover:text-gold-primary transition-all duration-300"
                >
                  access@nmas.co.za
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27674877278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey-metal hover:text-gold-primary transition-all duration-300"
                >
                  +27 67 487 7278
                </a>
              </li>
              <li className="text-grey-metal">South Africa</li>
            </ul>
          </div>

          {/* Column 4 – Business Hours */}
          <div>
            <h4 className="text-gold-primary font-heading font-semibold mb-4">
              Business Hours
            </h4>
            <ul className="space-y-2 text-sm text-grey-metal">
              <li>Mon-Fri: 8am - 5pm</li>
              <li>Sat: 9am - 1pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-grey-metal/30 pt-6 text-center">
          <p className="text-grey-metal text-sm">
            &copy; {new Date().getFullYear()} NMAS Access Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
