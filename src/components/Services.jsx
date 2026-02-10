import { motion } from 'framer-motion';

const services = [
    {
        title: 'Hair Cut & Styling',
        description: 'Expert cuts and styling tailored to your face shape and personality.',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop',
    },
    {
        title: 'Premium Makeup',
        description: 'Flawless makeup application for weddings, parties, and events.',
        image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=2670&auto=format&fit=crop',
    },
    {
        title: 'Luxury Spa',
        description: 'Rejuvenating facials and massages to relax your mind and body.',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop',
    },
];

const Services = ({ onBookNow }) => {
    return (
        <section id="services" className="py-20 bg-glam-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-glam-gold uppercase tracking-[0.2em] font-medium">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
                        Exclusive Services
                    </h2>
                    <div className="w-24 h-1 bg-glam-gold mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl glass border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {service.description}
                                </p>
                                <div className="flex justify-end items-center">
                                    <button
                                        onClick={() => onBookNow(service.title)}
                                        className="text-white text-sm uppercase tracking-wider border-b border-glam-gold pb-1 hover:text-glam-gold transition-colors"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
