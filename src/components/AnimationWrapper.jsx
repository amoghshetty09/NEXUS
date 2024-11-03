// src/components/AnimationWrapper.jsx
import { motion } from 'framer-motion';
import React from 'react';

const AnimationWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
);

export default AnimationWrapper;