import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import type { ThemeConfig } from '@/payload-types'

export async function ThemeConfig() {
  const themeConfig: ThemeConfig = await getCachedGlobal('themeConfig', 2)()

  // Define our new color scheme
  const newColors = {
    radius: '0.775rem',
    
    background: 'hsl(0, 0%, 100%)',
    foreground: '#26446d',
    card: 'hsl(240, 5%, 96%)',
    'card-foreground': 'hsl(222.2, 84%, 4.9%)',
    
    popover: 'hsl(0, 0%, 100%)',
    'popover-foreground': 'hsl(222.2, 84%, 4.9%)',
    
    primary: '#3165b0',
    'primary-foreground': 'hsl(210, 40%, 98%)',
    
    secondary: 'hsl(210, 40%, 96.1%)',
    'secondary-foreground': 'hsl(222.2, 47.4%, 11.2%)',
    
    muted: 'hsl(210, 40%, 96.1%)',
    'muted-foreground': 'hsl(215.4, 16.3%, 46.9%)',
    
    accent: '#f0f7ff',
    'accent-foreground': 'hsl(222.2, 47.4%, 11.2%)',
    
    destructive: 'hsl(0, 84.2%, 60.2%)',
    'destructive-foreground': 'hsl(210, 40%, 98%)',
    
    border: 'hsl(240, 6%, 90%)',
    input: 'hsl(214.3, 31.8%, 91.4%)',
    ring: 'hsl(222.2, 84%, 4.9%)',
    
    success: 'hsl(196, 52%, 74%)',
    warning: 'hsl(34, 89%, 85%)',
    error: 'hsl(10, 100%, 86%)',
    
    'chart-1': 'hsl(12, 76%, 61%)',
    'chart-2': 'hsl(173, 58%, 39%)',
    'chart-3': 'hsl(197, 37%, 24%)',
    'chart-4': 'hsl(43, 74%, 66%)',
    'chart-5': 'hsl(27, 87%, 67%)',
    
    muted2: 'hsl(0, 0%, 91%)',
    'muted2-foreground': 'hsl(240, 3.8%, 46.1%)'
  }

  return <style id="theme-config" dangerouslySetInnerHTML={{
    __html: `
:root { 
  --radius: ${newColors.radius};

  --background: ${newColors.background};
  --foreground: ${newColors.foreground};
  --card: ${newColors.card};
  --card-foreground: ${newColors['card-foreground']};

  --popover: ${newColors.popover};
  --popover-foreground: ${newColors['popover-foreground']};

  --primary: ${newColors.primary};
  --primary-foreground: ${newColors['primary-foreground']};

  --secondary: ${newColors.secondary};
  --secondary-foreground: ${newColors['secondary-foreground']};

  --muted: ${newColors.muted};
  --muted-foreground: ${newColors['muted-foreground']};

  --accent: ${newColors.accent};
  --accent-foreground: ${newColors['accent-foreground']};

  --destructive: ${newColors.destructive};
  --destructive-foreground: ${newColors['destructive-foreground']};

  --border: ${newColors.border};
  --input: ${newColors.input};
  --ring: ${newColors.ring};

  --success: ${newColors.success};
  --warning: ${newColors.warning};
  --error: ${newColors.error};

  --chart-1: ${newColors['chart-1']};
  --chart-2: ${newColors['chart-2']};
  --chart-3: ${newColors['chart-3']};
  --chart-4: ${newColors['chart-4']};
  --chart-5: ${newColors['chart-5']};

  --muted2: ${newColors.muted2};
  --muted2-foreground: ${newColors['muted2-foreground']};
}`
      + (themeConfig.darkmodeColors?.enableDarkMode ? `

        
[data-theme='dark'] {
  --background: ${themeConfig.darkmodeColors?.background};
  --foreground: ${themeConfig.darkmodeColors?.foreground};

  --card: ${themeConfig.darkmodeColors?.card};
  --card-foreground: ${themeConfig.darkmodeColors?.['card-foreground']};

  --popover: ${themeConfig.darkmodeColors?.popover};
  --popover-foreground: ${themeConfig.darkmodeColors?.['popover-foreground']};

  --primary: ${themeConfig.darkmodeColors?.primary};
  --primary-foreground: ${themeConfig.darkmodeColors?.['primary-foreground']};

  --secondary: ${themeConfig.darkmodeColors?.secondary};
  --secondary-foreground: ${themeConfig.darkmodeColors?.['secondary-foreground']};

  --muted: ${themeConfig.darkmodeColors?.muted};
  --muted-foreground: ${themeConfig.darkmodeColors?.['muted-foreground']};

  --accent: ${themeConfig.darkmodeColors?.accent};
  --accent-foreground: ${themeConfig.darkmodeColors?.['accent-foreground']};

  --destructive: ${themeConfig.darkmodeColors?.destructive};
  --destructive-foreground: ${themeConfig.darkmodeColors?.['destructive-foreground']};

  --border: ${themeConfig.darkmodeColors?.border};
  --input: ${themeConfig.darkmodeColors?.input};
  --ring: ${themeConfig.darkmodeColors?.ring};

  --success: ${themeConfig.darkmodeColors?.success};
  --warning: ${themeConfig.darkmodeColors?.warning};
  --error: ${themeConfig.darkmodeColors?.error};
}` : '')
  }} />
}

