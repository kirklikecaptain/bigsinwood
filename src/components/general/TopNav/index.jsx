import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const TopNav = () => {
  const { mainLogo } = useStaticQuery(graphql`
    query navQuery {
      mainLogo: file(relativePath: { eq: "brand/big-sin-round.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <StyledTopNav>
      <div className='edges'>
        <div className='container'>
          <ul>
            <li>
              <Img
                fadeInDuration={100}
                fixed={mainLogo.childImageSharp.fixed}
              />
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/contact/'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </StyledTopNav>
  );
};

export default TopNav;

const StyledTopNav = styled.nav`
  font-size: 20px;
  padding: 8px 0;
  ul {
    display: flex;
    align-items: center;

    li {
      margin-right: 1.5rem;

      a {
        color: black;
      }
    }
  }
`;
