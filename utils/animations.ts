import { Variants } from 'framer-motion';

// Fade up animation for content blocks
export const fadeUpVariant: Variants = {
  hidden: (custom = 0) => ({
    opacity: 0,
    y: 30,
    transition: { duration: 0.5, delay: custom * 0.1 }
  }),
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom * 0.1 }
  })
};

// Stagger container for child elements
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Scale up animation for cards
export const scaleUpVariant: Variants = {
  hidden: (custom = 0) => ({
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5, delay: custom * 0.1 }
  }),
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: custom * 0.1 }
  })
};

// Slide in from sides
export const slideInVariant: Variants = {
  hidden: (direction = 'left') => ({
    opacity: 0,
    x: direction === 'left' ? -50 : 50
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

// Hover animation for interactive elements
export const hoverVariant: Variants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};

// Scroll reveal animation
export const scrollRevealVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

// Infinite bounce animation
export const infiniteBounceVariant: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

// Text reveal animation
export const textRevealVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

// Background pattern animation
export const patternVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.1,
    transition: {
      duration: 1.2
    }
  }
};

// Navigation tab hover animation
export const tabHoverVariant: Variants = {
  initial: {
    backgroundPosition: "0% 0%"
  },
  hover: {
    backgroundPosition: "100% 0%",
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

// Smooth scroll function
export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}; 