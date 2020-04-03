import React from "react"
import { Link } from "gatsby"

import Hero from "../components/hero.js"
import Projects from "../home/projects.js"
import Developers from "../home/developers.js"
import Footer from "../components/footer.js"
import SEO from "../components/seo"


const IndexPage = ({data}) => (
  <div>
    <Hero/>
     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <Projects  items={data.project}/>
    <Developers />
    <Footer/>
  </div>
)


export const query = graphql`
{
  project:allContentfulProjects{
    edges{
      node{
        id
        title
        description {
          description
        }
      	project {
          fixed(width:300,height:300){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default IndexPage
