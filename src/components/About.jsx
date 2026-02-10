import { motion } from 'framer-motion';
import { Users, Heart, Sparkles } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <Users className="text-glam-gold" />, label: 'Happy Clients', value: '2k+' },
        { icon: <Heart className="text-glam-gold" />, label: 'Years Exp', value: '10+' },
        { icon: <Sparkles className="text-glam-gold" />, label: 'Stylists', value: '12+' },
    ];

    return (
        <section id="about" className="py-24 bg-glam-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 border border-white/10">
                            <img
                                // src="https://images.unsplash.com/photo-1593526612327-0479f646e3cb?q=80&w=2670&auto=format&fit=crop"
                                src="assets/images/kid-getting-haircut-front-view.jpg"
                                alt="Child getting a haircut"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative background elements */}
                        <div className="absolute -top-6 -left-6 w-64 h-64 bg-glam-gold/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-glam-gold/20 rounded-2xl -z-10" />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-glam-gold uppercase tracking-[0.2em] font-medium">
                            Our Story
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6 leading-tight">
                            Crafting Beauty & Confidence <br /> Since 2014
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            At Glam Studio, we believe that beauty is a journey, not a destination. Our mission is to
                            provide exceptional beauty services in a luxurious, welcoming environment that makes you
                            feel like the best version of yourself.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card p-6 rounded-xl text-center"
                                >
                                    <div className="flex justify-center mb-2">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <button className="px-10 py-4 bg-glam-gold text-black font-bold tracking-widest hover:bg-white transition-all duration-300">
                            LEARN MORE
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
