import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document<{ analeticsScript: string }> {
    render() {
        return (
            <Html lang="ar" dir="rtl">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.ANALYTICS_SCRIPT }} />
                </Head>
                <body className="font-tajawal">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument