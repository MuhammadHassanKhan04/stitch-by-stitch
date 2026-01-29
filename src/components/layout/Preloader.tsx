import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export const Preloader = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenIntro = sessionStorage.getItem("has-seen-intro");
        if (!hasSeenIntro) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                sessionStorage.setItem("has-seen-intro", "true");
            }, 3200); // Slightly longer for premium feel
            return () => clearTimeout(timer);
        }
    }, []);

    const words = "Stitch By Stitch".split(" ");

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal overflow-hidden"
                >
                    {/* Background Texture/Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-charcoal-light/10 via-charcoal to-charcoal opacity-50" />

                    <div className="relative flex flex-col items-center">
                        {/* Animated Logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                filter: "blur(0px)",
                                transition: { duration: 1.2, ease: "easeOut" }
                            }}
                            className="relative mb-12"
                        >
                            <img src={logo} alt="Logo" className="h-28 md:h-36 w-auto brightness-125" />

                            {/* Premium Shimmer */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent w-full h-full"
                                animate={{
                                    x: ["-100%", "200%"],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />
                        </motion.div>

                        {/* Staggered Brand Text */}
                        <div className="flex flex-col items-center">
                            <div className="flex gap-4 overflow-hidden">
                                {words.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: 40, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.8 + i * 0.2,
                                            duration: 0.8,
                                            ease: [0.215, 0.61, 0.355, 1]
                                        }}
                                        className="text-gold tracking-[0.5em] uppercase text-sm md:text-base font-medium"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Loading Indicator */}
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "100%" }}
                                transition={{ delay: 1.5, duration: 1.5 }}
                                className="mt-8 flex flex-col items-center gap-4"
                            >
                                <div className="h-[1px] w-24 bg-gold/30 relative overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-gold"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
                                    />
                                </div>
                                <motion.span
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="text-[10px] text-ivory/40 uppercase tracking-[0.3em]"
                                >
                                    Excellence in Craftsmanship
                                </motion.span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Reveal Curtains */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-full bg-gold/5"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 3.2, ease: "linear" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
