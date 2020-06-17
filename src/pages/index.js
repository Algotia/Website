import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Button } from '@material-ui/core'
import Layout from '../components/layout/Layout'
import styled from 'styled-components'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "Algotia.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid 
          }
        }
      }
    }
    `)
  return (
    <Layout>
        <MainColumn>
          <Logo 
            fluid={data.file.childImageSharp.fluid}
            alt="Algotia Logo"
          />
          <BtnRow>
          <a href='https://docs.algotia.io'>
            <DocsBtn color="primary" variant="outlined">Read The Docs</DocsBtn>
          </a>
          </BtnRow>
        </MainColumn>
    </Layout>
  )

}

const MainColumn = styled.div`
  height: 80vh;
  width: 100%;
  padding-top: 10vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`
const BtnRow = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Logo = styled(Img)`
  width: 80%;
  height: auto;
  margin-top: 5vh;
`

const DocsBtn = styled(Button)`

`
export default IndexPage
