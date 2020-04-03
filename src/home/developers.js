import React, { Component } from 'react'
import { Link } from "gatsby"

import developersStyles from '../modules/developers.module.scss'

import { StaticQuery, graphql } from "gatsby";


const getVolunteers = graphql`
{
    volunteers:allContentfulVolunteer{
      edges{
        node{
          id
          name
          description {
            description
          }
          photo{
            fixed(width:200,height:200){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
  `;


  export default function allVolunteers() {
    return (
      <StaticQuery
        query={getVolunteers}
        render={data => {
          return (
            <section className={developersStyles.developers} >
              <div className={developersStyles.container}>
                  <div className={developersStyles.titleHeading}>
                <h3 name="events">Check out upcoming events</h3>
                <h1>Developers</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
                </div>
                <div className={developersStyles.grid}>
                  {data.volunteers.edges.map(({ node: volunteer }) => {
                    return (
                      <div className={developersStyles.gridItem} key={volunteer.id}>
                           <img className={developersStyles.image} src={volunteer.photo.fixed.src} />
                           <h6>{volunteer.name}</h6>
                           <p>{volunteer.description.description}</p>
                      </div>
                    );
                  })}
                  </div>
                </div>
            </section>
          );
        }}
      />
    );
  }