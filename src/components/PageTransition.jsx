import { motion, useReducedMotion } from 'framer-motion'
import ScrollToTop from './ScrollToTop'

const entrance = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1],
}

export const pageItemVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: entrance },
}

export const staggerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ...entrance,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: [0.4, 0, 1, 1] },
  },
}

export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <><ScrollToTop />{children}</>

  return (
    <motion.div
      className="page-transition"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollToTop />
      {children}
    </motion.div>
  )
}
