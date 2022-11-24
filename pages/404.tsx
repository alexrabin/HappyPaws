import Link from "next/link";
import React from "react";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";

const Description = styled.p`
  a {
    color: #0099fa;
  }
`;

const NotFoundPage = () => {
  return (
    <MainLayout documentTitle="Not Found">
      <h1>Oops! No Doggos Here.</h1>
      <Description>
        Let&apos;s go back <Link href={"/"}>home</Link>.
      </Description>
    </MainLayout>
  );
};

export default NotFoundPage;
