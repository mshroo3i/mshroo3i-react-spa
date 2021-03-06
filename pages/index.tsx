import Head from 'next/head'
import { Layout } from '../components/Layout';
import { Hero } from '../components/home/Hero';
import { Fearures } from '../components/home/Features';
import { GetStaticPropsResult } from 'next';
import { StoresShowcase } from '../components/home/StoresShowcase';

export default function Home(props: PageProps) {
  return (
    <Layout mainClassName="flex-grow">
      <main>
        <Hero title={props.title} subtitle={props.subtitle} />
        {/* <Fearures /> */}
        <StoresShowcase></StoresShowcase>
        <div className="flex flex-col items-center justify-center  py-2">
          {/* <main className="flex flex-col items-center  w-full flex-1 px-20 text-center">
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main> */}
        </div>
      </main>
    </Layout>
  )
}

interface PageProps {
  title: string
  subtitle: string
}

export function getStaticProps(): GetStaticPropsResult<PageProps> {
  return {
    props: {
      title: "?????? ???????? ?? ???????????? ?????????????? ???? ???????????? ?????????????????? ????????????",
      subtitle: "???????????? ???????? ?????????????? ?????????? ?????????????? ?? ?????? ???????????????? ?? ?????????? ???? ???? ???????? ????????????????"
    },
  }
}