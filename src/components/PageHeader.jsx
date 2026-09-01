import { motion } from 'framer-motion'
import { pageItemVariants } from './PageTransition'

export default function PageHeader({ eyebrow, title, lede }) {
  return (
    <header className="page-header">
      {eyebrow && <motion.div className="eyebrow" variants={pageItemVariants}>{eyebrow}</motion.div>}
      <motion.div variants={pageItemVariants}><h1>{title}</h1></motion.div>
      {lede && <motion.div variants={pageItemVariants}><p className="lede">{lede}</p></motion.div>}
      {lede && <motion.div className="page-rule" variants={pageItemVariants} aria-hidden="true" />}
    </header>
  )
}
