import NavBar from '@/components/Navbar'
import './globals.css'
import { Metadata } from 'next';

export const metadata: Metadata = { //คือคำอธิบายของเว็บไซต์
  title: 'Next.js with Tailwind CSS',
  description: 'Generated by create next app',
  keywords: 'Next.js, Tailwind CSS',
}
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
<html>
  <body>
    <NavBar />
    {children}
  </body>
</html>
  )
}
export default layout