'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutMotion({ children }) {
    return (
        <motion.section
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
            className="max-w-screen-xl min-h-screen py-14 mx-auto flex flex-col items-center sm:justify-center gap-2 sm:my-0"
        >
            {children}
        </motion.section>
    );
}
