import {
  VideoCameraIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  BoltIcon,
  SunIcon,
  BellAlertIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'CCTV',
    description: 'Reliable & Professional',
    icon: VideoCameraIcon,
    features: ['HD & 4K cameras', 'Remote viewing', 'Night vision', 'Motion detection'],
  },
  {
    title: 'Garage Doors',
    description: 'Reliable & Professional',
    icon: WrenchScrewdriverIcon,
    features: ['Automatic openers', 'Sectional doors', 'Roll-up doors', 'Quiet operation'],
  },
  {
    title: 'Gate Motors',
    description: 'Reliable & Professional',
    icon: CogIcon,
    features: ['Sliding gates', 'Swing gates', 'Remote control', 'Smooth operation'],
  },
  {
    title: 'Electric Fence',
    description: 'Reliable & Professional',
    icon: BoltIcon,
    features: ['Perimeter security', 'Energizer units', 'Compliance certified', 'Alarm integration'],
  },
  {
    title: 'Solar',
    description: 'Reliable & Professional',
    icon: SunIcon,
    features: ['Solar panels', 'Inverter systems', 'Battery backup', 'Energy savings'],
  },
  {
    title: 'Alarms',
    description: 'Reliable & Professional',
    icon: BellAlertIcon,
    features: ['Intruder detection', 'Smart alerts', 'Armed response', 'Mobile monitoring'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-charcoal py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">
          Professional, fast, and reliable security &amp; automation solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card p-6 group hover:border-gold-primary/50 border border-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-primary transition-all duration-300">
                  <Icon className="h-6 w-6 text-gold-primary group-hover:text-black-main transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white-clean font-heading">
                  {service.title}
                </h3>
                <p className="text-gold-primary text-sm font-medium mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-grey-metal flex items-center"
                    >
                      <span className="text-gold-primary mr-2 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Request Custom Solution
          </a>
        </div>
      </div>
    </section>
  );
}
