'use client'

import { forwardRef, ComponentPropsWithoutRef } from 'react'
import { motion } from 'framer-motion'

interface MotionDivProps extends ComponentPropsWithoutRef<typeof motion.div> {}

const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, initial, animate, transition, whileHover, whileTap, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={initial}
        animate={animate}
        transition={transition}
        whileHover={whileHover}
        whileTap={whileTap}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

MotionDiv.displayName = 'MotionDiv'

export { MotionDiv }