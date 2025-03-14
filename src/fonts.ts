import localFont from 'next/font/local';

// Specify Black for H1 headings
export const specifyBlack = localFont({
  src: '../public/font/Specify-ExpandedBlack.otf',
  variable: '--font-heading-black',
  display: 'swap',
});

// Specify Bold for H2-H5 headings
export const specifyBold = localFont({
  src: '../public/font/Specify-ExpandedBold.otf',
  variable: '--font-heading-bold',
  display: 'swap',
});

// Specify Medium for body text
export const specifyMedium = localFont({
  src: '../public/font/Specify-ExpandedMedium.otf',
  variable: '--font-body',
  display: 'swap',
});
