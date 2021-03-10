import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { app2MainTheme } from '@react/themes'
import H from '@react/components/Typography/Header'
import P from '@react/components/Typography/Paragraph'
import Container from '@react/components/Container'

const Home = (data: any) => {
  const { lowlight } = app2MainTheme.colors;

  // NOTE: That this is logged while building next
  console.log('\n\n=> logging app2 lowlight:', lowlight);

  return (
    <>
      <Head>
        {/* NOTE: That this breaks the build */}
        <style>{`body { background-color: ${lowlight} }`}</style>
      </Head>
      <ThemeProvider theme={app2MainTheme}>
        <Container>
          <H variant="h1">{data.title}</H>
          <P>{data.text}</P>
        </Container>
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {

  // Dummy data
  const page = {
    title: "App 2",
    text: "Awesome app 2 text here"
  }

  return {
    props: page,
    revalidate: 1200,
  }
}

export default Home;
