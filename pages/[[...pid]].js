import Head from 'next/head'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next"


export const getStaticProps = async ({locale}) => ({
  props: {
    ...await serverSideTranslations(locale),
  },
})


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}



export default function Home(props) {
  const {t} = useTranslation();
  return (
    <div className="container">
      <main>
        <h1>{t("common.test")}</h1>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

    </div>
  )
}
