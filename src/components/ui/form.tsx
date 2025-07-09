'use client'

import * as React from 'react'
import {
  FormProvider as RHFFormProvider,
  Controller,
  type FieldValues,
  type UseFormReturn,
  type SubmitHandler,
  type ControllerProps,
} from 'react-hook-form'
import { cn } from '@/lib/utils'

export function Form<T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
  ...props
}: {
  form: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>) {
  return (
    <RHFFormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-6', className)} {...props}>
        {children}
      </form>
    </RHFFormProvider>
  )
}

export const FormField = <T extends FieldValues>(props: ControllerProps<T>) => {
  return <Controller {...props} />
}

export const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-1', className)} {...props} />
  )
)
FormItem.displayName = 'FormItem'

export const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label ref={ref} className={cn('text-sm font-medium', className)} {...props} />
))
FormLabel.displayName = 'FormLabel'

export const FormControl = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('w-full', className)} {...props} />
  )
)
FormControl.displayName = 'FormControl'

export function FormMessage({
  message,
}: {
  message?: string
}) {
  return message ? <p className="text-sm text-red-500">{message}</p> : null
}