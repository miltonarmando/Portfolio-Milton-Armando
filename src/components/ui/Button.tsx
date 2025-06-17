import { cn } from '@/utils'
import { compositions } from './theme'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  isLoading?: boolean
  fullWidth?: boolean
}

const sizeMap = {
  xs: 'h-7 px-2.5 text-xs sm:text-sm font-medium font-touch-friendly',
  sm: 'h-8 px-3 text-sm sm:text-base font-medium font-touch-friendly',
  md: 'h-10 px-4 text-sm sm:text-base font-semibold font-touch-friendly',
  lg: 'h-11 px-6 text-base sm:text-lg font-semibold font-touch-friendly',
  xl: 'h-12 px-8 text-base sm:text-lg md:text-xl font-semibold font-touch-friendly',
  icon: 'h-10 w-10 p-0'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    fullWidth = false,
    disabled,
    children,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          compositions.button.base,
          compositions.button[variant],
          sizeMap[size],
          fullWidth && 'w-full',
          disabled && 'opacity-50 cursor-not-allowed',
          isLoading && 'cursor-wait',
          className
        )}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent opacity-75" />
        )}
        <span className={cn(
          'inline-flex items-center justify-center',
          isLoading && 'opacity-75'
        )}>
          {children}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'
