import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section ref={ref} id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Parallax Overlay */}
            <motion.div style={{ y }} className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat transform scale-110">
                    <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-glam-dark via-transparent to-black/30" />
                </div>
            </motion.div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <h2 className="text-glam-gold uppercase tracking-[0.3em] mb-4 text-sm md:text-base font-semibold">
                        Premium Beauty & Wellness
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
                        Redefine Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-glam-gold to-white">
                            Elegance
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="max-w-2xl mx-auto mb-10"
                >
                    <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                        Experience world-class hair styling, makeup, and spa treatments in a
                        luxurious atmosphere designed for your relaxation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button className="px-8 py-4 bg-glam-gold text-black font-bold tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105">
                        OUR SERVICES
                    </button>
                    <button
                        onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 border border-white text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                        BOOK NOW
                    </button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-glam-gold rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
