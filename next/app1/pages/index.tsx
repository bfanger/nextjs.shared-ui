import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { app1MainTheme } from '@react/themes'
import H from '@react/components/Typography/Header'
import P from '@react/components/Typography/Paragraph'
import Container from '@react/components/Container'

const Home = (data: any) => {
  const { lowlight } = app1MainTheme.colors;

  // NOTE: That this is logged while building next
  console.log('\n\n=> logging app1 lowlight:', lowlight);

  return (
    <>
      <Head>
        {/* NOTE: That this breaks the build */}
        <style>{`body { background-color: ${lowlight} }`}</style>
      </Head>
      <ThemeProvider theme={app1MainTheme}>
        <Container>
          <H variant="h1">{data.title}</H>
          <P>{data.text}</P>
        </Container>
      </ThemeProvider>
    </>
  );
}

export async function getServerSideProps() {

  // Dummy data
  const page = {
    title: "App 1",
    text: "Awesome app 1 text here"
  }

  return {
    props: page,
  }
}

export default Home;
