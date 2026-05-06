import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetTypography(), presetIcons()],
  theme: {
    colors: {
      nesBlack: '#000000',
      nesWhite: '#fcfcfc',
      nesRed: '#a80020',
      nesBlue: '#0058f8',
      nesGreen: '#00b800',
      nesAmber: '#f8b800'
    },
    fontFamily: {
      pixel: ['Press Start 2P', 'monospace'],
      arcade: ['VT323', 'monospace'],
      sans: ['Manrope', 'system-ui', 'sans-serif']
    }
  },
  shortcuts: {
    'pixel-card': 'border-4 border-nesWhite bg-nesBlack shadow-[8px_8px_0_#0058f8]',
    'pixel-button': 'inline-flex items-center justify-center border-4 border-nesWhite bg-nesGreen text-nesBlack px-5 py-3 uppercase shadow-[6px_6px_0_#a80020] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0_#a80020] focus:outline-none focus:ring-4 focus:ring-nesAmber',
    'pixel-button-red': 'inline-flex items-center justify-center border-4 border-nesWhite bg-nesRed text-nesWhite px-5 py-3 uppercase shadow-[6px_6px_0_#0058f8] transition-transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-nesAmber',
    'scanline': 'relative overflow-hidden before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(rgba(255,255,255,.05)_50%,rgba(0,0,0,.18)_50%)] before:bg-[length:100%_4px]'
  }
});
