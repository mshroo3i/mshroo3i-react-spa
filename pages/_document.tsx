import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document<{analeticsScript: string}> {
    render() {
        return (
            <Html>
                <Head>
                    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.ANALYTICS_SCRIPT }}/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument