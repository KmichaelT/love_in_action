/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]', 'class'],
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-out': 'fade-in-out 4s ease-in-out',
        progress: 'progress 8s linear'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        background: 'var(--background)',
        border: 'var(--border)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        foreground: 'var(--foreground)',
        input: 'var(--input)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        ring: 'var(--ring)',
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        success: 'var(--success)',
        error: 'var(--error)',
        warning: 'var(--warning)',
        muted2: {
          DEFAULT: 'var(--muted2)',
          foreground: 'var(--muted2-foreground)'
        }
      },
      fontFamily: {
        headingBlack: ["var(--font-heading-black)", ...fontFamily.sans],
        headingBold: ["var(--font-heading-bold)", ...fontFamily.sans],
        body: ["var(--font-body)", ...fontFamily.sans],
        mono: ["var(--font-mono)", "SFMono-Regular", ...fontFamily.mono],
        sans: ["var(--font-body)", "DM Sans", "Inter Variable", "Inter", ...fontFamily.sans]
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in-out': {
          '0%': {
            opacity: '0'
          },
          '20%': {
            opacity: '1'
          },
          '80%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        progress: {
          from: {
            width: '0%'
          },
          to: {
            width: '100%'
          }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text)',
            '--tw-prose-headings': 'var(--text)',
            h1: {
              fontSize: '4rem',
              fontWeight: 'normal',
              marginBottom: '0.25em'
            }
          }
        }
      }
    }
  },
}
