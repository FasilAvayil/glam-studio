import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Scissors, MessageSquare } from 'lucide-react';

const Booking = ({ selectedService }) => {
    const [service, setService] = useState('');

    useEffect(() => {
        if (selectedService) {
            setService(selectedService);
        }
    }, [selectedService]);

    return (
        <section id="booking" className="py-20 relative bg-black">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center opacity-20" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                    {/* Inner gold glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-glam-gold/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-glam-gold/5 rounded-full blur-3xl" />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <span className="text-glam-gold uppercase tracking-[0.2em] font-medium block mb-2">
                            Reservation
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                            Book Your Experience
                        </h2>
                        <p className="text-gray-400 mt-4 font-light">
                            Reserve your spot for a premium salon experience.
                        </p>
                    </motion.div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                    <User size={16} className="text-glam-gold" /> Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                    <Phone size={16} className="text-glam-gold" /> Phone
                                </label>
                                <input
                                    type="tel"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                    <Scissors size={16} className="text-glam-gold" /> Service
                                </label>
                                <select
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors [&>option]:bg-black"
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                >
                                    <option value="" disabled>Select a service</option>
                                    <option value="Hair Cut & Styling">Hair Cut & Styling</option>
                                    <option value="Premium Makeup">Premium Makeup</option>
                                    <option value="Luxury Spa">Luxury Spa</option>
                                    <option value="Manicure/Pedicure">Manicure/Pedicure</option>
                                    <option value="Bridal Package">Bridal Package</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                        <Calendar size={16} className="text-glam-gold" /> Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors [color-scheme:dark]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                        <Clock size={16} className="text-glam-gold" /> Time
                                    </label>
                                    <input
                                        type="time"
                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors [color-scheme:dark]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                <MessageSquare size={16} className="text-glam-gold" /> Special Request
                            </label>
                            <textarea
                                rows="4"
                                className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:border-glam-gold focus:outline-none focus:ring-1 focus:ring-glam-gold transition-colors resize-none"
                                placeholder="Any specific preferences?"
                            />
                        </div>

                        <div className="pt-4">
                            <button className="w-full bg-glam-gold text-black font-bold uppercase tracking-[0.2em] py-4 hover:bg-white transition-all duration-300">
                                Confirm Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;
