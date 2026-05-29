const Footer = () => {
  return (
    <footer className="bg-black-main border-t border-grey-metal/30 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-1 font-heading">
              <span className="text-gold-primary">NMAS</span>
              <span className="text-white-clean"> Access Solutions</span>
            </h3>
            <p className="text-[0.65rem] tracking-wide text-grey-metal mb-3 uppercase font-semibold">A Division of NMAS Innovations</p>
            <p className="text-grey-metal text-sm">Secure, Smart, Seamless Access Control Systems</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold-primary font-heading">Quick Links</h4>
            <ul className="space-y-2 text-grey-metal text-sm">
              <li><a href="#services" className="hover:text-gold-primary transition">Services</a></li>
              <li><a href="#about" className="hover:text-gold-primary transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-gold-primary transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold-primary font-heading">Contact Info</h4>
            <ul className="space-y-2 text-grey-metal text-sm">
              <li>📧 <a href="mailto:access@nmas.co.za" className="hover:text-gold-primary">access@nmas.co.za</a></li>
              <li>💬 <a href="https://wa.me/27674877278" className="hover:text-gold-primary">+27 67 487 7278</a></li>
              <li>📍 South Africa</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold-primary font-heading">Business Hours</h4>
            <ul className="space-y-2 text-grey-metal text-sm">
              <li>Mon-Fri: 8:00 - 17:00</li>
              <li>Sat: 9:00 - 13:00</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-grey-metal/30 pt-6 text-center text-grey-metal text-sm">
          <p>&copy; {new Date().getFullYear()} NMAS Access Solutions. All rights reserved.</p>
          <p className="mt-2">
            Site designed and hosted by{' '}
            <a 
              href="https://webcraft.nmas.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-primary hover:underline transition font-medium"
            >
              NMAS WebCraft
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
