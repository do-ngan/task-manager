import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

const checkVariants = {
  initial: {
    color: '#fff',
  },
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
};

const boxVariants = {
  checked: {
    background: '#0080d3',
    transition: { duration: 0.1 },
  },
  unchecked: { background: '#e6e6e6', transition: { duration: 0.1 } },
};

function CheckButton({ checked, setChecked }) {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      className="svgBox"
      animate={checked ? 'checked' : 'unchecked'}
      variants={boxVariants}
      onClick={setChecked}
    >
      <motion.svg
        className="svg"
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? 'checked' : 'unchecked'}
          style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}

export default CheckButton;