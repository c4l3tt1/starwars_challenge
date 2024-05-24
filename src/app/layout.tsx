import type { Metadata } from 'next'
import localFont from 'next/font/local'
import React from 'react'
import './globals.css'

const helveticaNeue = localFont({
  src: [
    {
      path: '../../public/fonts/helveticaNeue_regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helveticaNeue_light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-helveticaNeue',
})

export const metadata: Metadata = {
  title: 'Star Wars Challenge - A project in NextJS, Typescript and TailwindCSS',
  description:
    'Explore the Star Wars universe with our project using NextJS for dynamic rendering, TypeScript for type safety, and TailwindCSS for modern styling. See how we fetch and display data from the Star Wars API, creating a responsive and interactive experience. Join us and may the force be with you!',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element => {
  // const socialMediaData = await getSocialMedia()
  // const menuData = await getMenu()
  return (
    <html lang="pt-br">
      <body className={`${helveticaNeue.variable} ${helveticaNeue.className}`}>{children}</body>
    </html>
  )
}

export default RootLayout
