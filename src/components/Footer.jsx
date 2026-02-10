import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Scissors } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-black text-white pt-20 pb-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Scissors className="h-6 w-6 text-glam-gold" />
                            <span className="text-xl font-serif font-bold tracking-wider">
                                GLAM <span className="text-glam-gold">STUDIO</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Elevating beauty standards with premium services and luxurious experiences.
                            Your beauty is our masterpiece.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon icon={<Instagram size={20} />} />
                            <SocialIcon icon={<Facebook size={20} />} />
                            <SocialIcon icon={<Twitter size={20} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-glam-gold">Explore</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <FooterLink text="Home" />
                            <FooterLink text="Services" />
                            <FooterLink text="About Us" />
                            <FooterLink text="Gallery" />
                            <FooterLink text="Contact" />
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-glam-gold">Services</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <FooterLink text="Hair Cutting" />
                            <FooterLink text="Hair Coloring" />
                            <FooterLink text="Makeup" />
                            <FooterLink text="Facials" />
                            <FooterLink text="Manicure & Pedicure" />
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-glam-gold">Contact</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-glam-gold shrink-0" />
                                <span>Lagoon Mall, Derlakatte, Mangalore, Karnataka, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-glam-gold shrink-0" />
                                <span>+91 9567848426</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-glam-gold shrink-0" />
                                <span>fasil@glamstudio.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Glam Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-glam-gold hover:text-black transition-all duration-300">
        {icon}
    </a>
);

const FooterLink = ({ text }) => (

    <li>
        <a href={`#${text.toLowerCase()}`} className="hover:text-glam-gold transition-colors duration-300">
            {text}
        </a>
    </li>
);

export default Footer;
