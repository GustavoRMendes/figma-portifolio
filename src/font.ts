import { Fira_Sans, Poppins } from 'next/font/google'


export const fontFiraSans = Fira_Sans({
  weight: ['400','700'],
  variable: '--font-fira',
  subsets: ['latin'],
  display:'swap',
  style:'normal',
})
export const poppins = Poppins({
  weight: ['400','700'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display:'swap',
  style:'normal',
})