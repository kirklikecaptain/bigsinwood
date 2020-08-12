import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';

const HomePage = props => {
  const {
    allFile: { edges }
  } = useStaticQuery(graphql`
    query indexQuery {
      allFile(filter: { relativeDirectory: { eq: "index" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const settings = {
    autoplay: true,
    arrows: true,
    centerMode: true,
    centerPadding: 60,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      <p>Welcome to BIG SIN WOOD</p>
      <p>
        BIG SIN WOOD designs and builds custom made-to-order furniture,
        fixtures, and installations for all spaces.
      </p>
      <p>
        <Link to='/contact/'>CONTACT</Link> BIG SIN WOOD to get a quote or
        inquire about some good wood.
      </p>
      <Slider {...settings}>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePage;
