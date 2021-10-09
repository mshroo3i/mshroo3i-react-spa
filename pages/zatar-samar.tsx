import Head from 'next/head'
import App from '../components/zatar-samar/App'
import { Layout, siteTitle } from "../components/Layout";
import { Product, products } from '../data/products';
import { GetStaticPropsResult } from 'next';

export default function ZatarSamar() {
    return (<Layout>
        <Head>
            <title>{siteTitle + ' - Zatar Samar'}</title>
        </Head>
        <App products={products} />

    </Layout>)
}

export function getStaticProps() : GetStaticPropsResult<{ products: Product[]}> {
    return {
      props: {
        products,
      },
    }
  }