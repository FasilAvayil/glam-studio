import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Loyal Client',
        content: "The best salon experience I've ever had. Professional staff and absolutely stunning results with my makeup!",
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop'
    },
    {
        name: 'Michael Chen',
        role: 'Regular Customer',
        content: "Precision haircut and a very relaxing atmosphere. Glam Studio is definitely my go-to place now.",
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop'
    },
    {
        name: 'Emma Williams',
        role: 'Bridal Client',
        content: "They made me feel like a queen on my wedding day. The bridal package was perfect and highly recommended!",
        rating: 5,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2570&auto=format&fit=crop'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-glam-gold/5 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-glam-gold/5 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-glam-gold uppercase tracking-[0.2em] font-medium">
                        Kind Words
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
                        Client Testimonials
                    </h2>
                    <div className="w-24 h-1 bg-glam-gold mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="glass-card p-8 rounded-xl relative hover:border-glam-gold/30 transition-all duration-500 group"
                        >
                            <Quote className="absolute top-6 right-8 text-glam-gold/20 h-10 w-10 group-hover:text-glam-gold/40 transition-colors" />

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-glam-gold/30"
                                />
                                <div>
                                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-glam-gold text-sm uppercase tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-glam-gold fill-glam-gold" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
