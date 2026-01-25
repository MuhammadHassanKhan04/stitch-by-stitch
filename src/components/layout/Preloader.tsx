import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500); // 2.5 seconds for the vibe

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Animated Logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1, ease: "easeOut" }
                            }}
                            className="relative mb-8"
                        >
                            <img src={logo} alt="Logo" className="h-24 md:h-32 w-auto brightness-125" />

                            {/* Shimmer Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full"
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "linear",
                                    delay: 1
                                }}
                            />
                        </motion.div>

                        {/* Brand Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="text-gold tracking-[0.4em] uppercase text-xs md:text-sm font-light">
                                Stitch By Stitch
                            </span>
                            <div className="mt-4 flex gap-1 justify-center">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1.5 h-1.5 bg-gold/40 rounded-full"
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.5,
                                            delay: i * 0.2
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Background Decorative Elements */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-1 bg-gold/20"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2.2, ease: "easeInOut" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
