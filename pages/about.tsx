import React from "react";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";

const Description = styled.p`
  a {
    color: #0099fa;
  }
`;

const AboutPage = () => {
  return (
    <MainLayout documentTitle="About">
      <h1>About</h1>
      <Description>
        This project uses{" "}
        <a href="https://nextjs.org/" target={"_blank"} rel="noreferrer">
          Next.js
        </a>{" "}
        and{" "}
        <a href="https://dog.ceo/dog-api/" target={"_blank"} rel="noreferrer">
          The Dog API
        </a>
        .
      </Description>

      <Description>
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
        </ul>
      </Description>
      <Description>
        Created by{" "}
        <a href="https://alexrabin.com" target={"_blank"} rel="noreferrer">
          Alex Rabin
        </a>
      </Description>
    </MainLayout>
  );
};

export default AboutPage;
