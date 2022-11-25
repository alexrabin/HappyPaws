import React from "react";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";

const AboutDescriptionContainer = styled.div`
  a {
    color: #0099fa;
  }
  margin: 0.5rem;
`;

const AboutPage = () => {
  return (
    <MainLayout documentTitle="About">
      <h1>About</h1>
      <AboutDescriptionContainer>
        This project uses{" "}
        <a href="https://nextjs.org/" target={"_blank"} rel="noreferrer">
          Next.js
        </a>{" "}
        and{" "}
        <a href="https://dog.ceo/dog-api/" target={"_blank"} rel="noreferrer">
          The Dog API
        </a>
        .
      </AboutDescriptionContainer>

      <AboutDescriptionContainer>
        Happy Paws also uses:
        <ul>
          <li>
            <a
              href="https://styled-components.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              Styled Components
            </a>
          </li>
          <li>
            <a
              href="https://axios-http.com/docs/intro"
              target={"_blank"}
              rel="noreferrer"
            >
              Axios
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/nextjs-progressbar"
              target={"_blank"}
              rel="noreferrer"
            >
              nextjs-progressbar
            </a>
          </li>
          <li>
            <a href="https://favicon.io" target={"_blank"} rel="noreferrer">
              favicon.io
            </a>
          </li>
        </ul>
      </AboutDescriptionContainer>
      <AboutDescriptionContainer>
        Created by{" "}
        <a href="https://alexrabin.com" target={"_blank"} rel="noreferrer">
          Alex Rabin
        </a>
      </AboutDescriptionContainer>
    </MainLayout>
  );
};

export default AboutPage;
