import Head from 'next/head'
import Script from 'next/script'
import { Footer } from './zatar-samar/Footer'
import { TopNav } from './TopNav'

export const siteTitle = 'Mshroo3i'
export const siteDescription = 'انشأ مترجك لمشروعك بسهولة مع الحفاظ على الجانب الاجتماعي'

export function Layout({ children, home = false, mainClassName = '' }) {
    const className = 'flex-grow ' + mainClassName
    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>{siteTitle}</title>
                <meta name="og:title" content={siteTitle} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={siteDescription} />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta property="og:image" content="/favicon-16x16.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="manifest" href="/manifest.json" />
                <Script
                    id="analytics-heap"
                    type="text/javascript"
                    >
                        {process.env.ANALYTICS_SCRIPT}
                </Script>
            </Head>
            <TopNav />
            <main className={className}>{children}</main>
            <Footer />
        </div>
    )
}