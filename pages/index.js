import Head from 'next/head'


export async function  getServerSideProps(context) {
  console.log(context);
  return { props: {pid: "foo"}}
}


export default function Home({pid}) {
  return (
    <div className="container">
      <Head>
        <title>{pid}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

    </div>
  )
}
