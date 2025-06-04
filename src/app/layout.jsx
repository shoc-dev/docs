/* eslint-env node */
import './global.css'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import siteConfig from '@/well-known/site-config'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  metadataBase: new URL('https://nextra.site'),
  title: {
    template: `%s - ${siteConfig.title}`
  },
  description: 'Nextra: the Next.js site builder',
  applicationName: siteConfig.title,
  generator: siteConfig.title,
  appleWebApp: {
    title: siteConfig.title
  },
  other: {
    'msapplication-TileImage': '/logos/shoc-512x512.png',
    'msapplication-TileColor': '#fff'
  }
}

export default async function RootLayout({ children }) {

  const navbar = (
    <Navbar
      logo={
        <div className='flex gap-2 items-center'>
          <Link prefetch={false} className='flex gap-2 items-center' href="/">
            <Image src="/logos/shoc-512x512.png" width={24} height={24} alt={siteConfig.title} />
            <span className='hidden md:inline text-lg font-bold'>{siteConfig.title}</span>
          </Link>
          <span className='hidden md:inline'>|</span>
          <span>Docs</span>
        </div>
      }
      logoLink={false}
      projectLink={siteConfig.shocRepo}
    />
  )

  const footer = <Footer>
    {siteConfig.title} © {new Date().getFullYear()}
  </Footer>

  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body suppressHydrationWarning>
        <Layout
          navbar={navbar}
          footer={footer}
          editLink="Edit on GitHub"
          docsRepositoryBase={`${siteConfig.docsRepo}/tree/main`}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          toc={{ float: true }}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
