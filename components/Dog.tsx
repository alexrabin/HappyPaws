import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Breed from "../models/Breed";
import Image from "./DogImage";

const Description = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const Container = styled.div`
  margin: 1rem;
  a {
    text-decoration: none;
    color: black;
  }
`;
const Dog = ({ breed }: { breed: Breed }) => {
  return (
    <Container className="noselect">
      <Link href={`/breed/${breed.name}`}>
        <Image src={breed.imageUrl} alt={breed.name} />
        <Description>{breed.name.toUpperCase()}</Description>
      </Link>
    </Container>
  );
};
export default Dog;
