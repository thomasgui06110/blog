import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { List, Avatar, Divider } from "antd"

const Bio = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            bio
            authorImage
          }
        }
        allImageSharp {
            edges {
              node {
                ... on ImageSharp {
                  resize(width: 150, height: 150, grayscale: true) {
                    src
                  }
                }
              }
            }
          }
      }
      
    `}
    render={data => (
      <>
        <Divider orientation='left'>Author</Divider>
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar size={64} src={data.site.siteMetadata.authorImage} />
            }
            title={<Link to="/about">{data.site.siteMetadata.author}</Link>}
           
            description={data.site.siteMetadata.bio}
          />
        </List.Item>
       
      </>
    )}
  />
)

export default Bio
