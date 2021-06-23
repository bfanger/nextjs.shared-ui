import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import theme from '@test/ui/themes'
import H from '@test/ui/components/Typography/Header'
import P from '@test/ui/components/Typography/Paragraph'
import Container from '@test/ui/components/Container'

const Home = (data: any) => {
  // const them = data.theme;
  const { app1MainTheme } = theme;
  console.log('\n\n=> logging app1 app1MainTheme:', app1MainTheme);
  const { colors } = app1MainTheme;
  console.log('\n\n=> logging app1 colors:', colors);
  const { lowlight } = colors;

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

export async function getStaticProps() {

  // Dummy data
  const page = {
    title: "App 1",
    text: "Awesome app 1 text here",
    // theme
  }

  return {
    props: page,
    revalidate: 1200,
  }
}

export default Home;
