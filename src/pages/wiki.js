import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import SectionList from '../components/SectionList'
import Search from '../components/Search'

const Wiki = ({ data, location }) => {
  const title = `Wiki`
  return (
    <Layout pageTitle={title} path={location.pathname}>
      <PageTitle>
        <h1>{title}</h1>
      </PageTitle>
      <Search
        indices={[{ name: `Articles`, title: `Wiki`, hitComp: `ArticleHit` }]}
        style={{ hits: { position: `static` } }}
      />
      <SectionList {...data} />
    </Layout>
  )
}

export default Wiki

export const query = graphql`
  {
    sections: allContentfulWikiSection(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
          subsections: wiki_subsection {
            title
            slug
            icon {
              title
              file {
                url
              }
            }
          }
          icon {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`
