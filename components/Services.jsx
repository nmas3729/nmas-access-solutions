'use client'
import { 
  VideoCameraIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  BoltIcon,
  BellAlertIcon,
  WifiIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    id: 1,
    title: "CCTV",
    description: "Reliable & Professional",
    icon: VideoCameraIcon,
    features: ["HD & 4K cameras", "Remote viewing", "Night vision", "Motion detection"]
  },
  {
    id: 2,
    title: "Garage Doors",
    description: "Reliable & Professional",
    icon: WrenchScrewdriverIcon,
    features: ["Automatic openers", "Sectional doors", "Roll-up doors", "Quiet operation"]
  },
  {
    id: 3,
    title: "Gate Motors",
    description: "Reliable & Professional",
    icon: CogIcon,
    features: ["Sliding gates", "Swing gates", "Remote control", "Smooth operation"]
  },
  {
    id: 4,
    title: "Electric Fence",
    description: "Reliable & Professional",
    icon: BoltIcon,
    features: ["Perimeter security", "Energizer units", "Compliance certified", "Alarm integration"]
  },
  {
    id: 5,
    title: "Alarms",
    description: "Reliable & Professional",
    icon: BellAlertIcon,
    features: ["Intruder detection", "Smart alerts", "Armed response", "Mobile monitoring"]
  },
  {
    id: 6,
    title: "Intercom Systems",
    description: "Reliable & Professional",
    icon: WifiIcon,
    features: ["Audio & video intercom", "Mobile app integration", "Remote door release", "Multi-tenant support"]
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Comprehensive Services</h2>
          <p className="section-subtitle">
            Premium security solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="card p-6 group hover:border-gold-primary/50 border border-transparent transition-all"
              >
                <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-primary transition">
                  <Icon className="h-6 w-6 text-gold-primary group-hover:text-black-main" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white-clean font-heading">{service.title}</h3>
                <p className="text-grey-metal mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-grey-metal flex items-center">
                      <span className="text-gold-primary mr-2 font-bold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Request Custom Solution
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
