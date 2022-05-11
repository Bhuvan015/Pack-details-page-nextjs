import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'
// Components
import { Navbar } from '../components/Navbar'
import { PackInfoContainer } from '../components/PackInfoContainer'
import { PackContent } from '../components/PackContent'



const Home: NextPage = () => {
  return (
    <Container>
      {/* Head tag */}
      <Head>
        <title>Pack Details Page</title>
        <link rel="icon" href="./design.png" />
      </Head>
    

      {/* Navbar */}
      <Navbar/>

      {/* Pack Info Container */}
      <PackInfoContainer />

      {/* Pack Content */}
      <PackContent/>



    </Container>
  )
}

export default Home

/* Styled Components */
const Container = styled.div `
  width: 100vw;
  min-height: 100vh;
`