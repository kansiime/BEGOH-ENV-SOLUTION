'use client'

import * as React from 'react'
import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

const Avatar = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
))
Avatar.displayName = 'Avatar'

interface AvatarImageProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
  src: ImageProps['src']
  alt?: string
  width?: number
  height?: number
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, alt = "Avatar", width = 40, height = 40, ...props }, ref) => (
    <Image
      ref={ref}
      className={cn('aspect-square h-full w-full object-cover', className)}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  )
)
AvatarImage.displayName = 'AvatarImage'

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = 'AvatarFallback'

export { Avatar, AvatarImage, AvatarFallback }