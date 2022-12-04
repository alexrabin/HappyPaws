import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Breed from "../models/Breed";
import Image from "./DogImage";

const Description = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
`;

const Container = styled.div`
  margin: 1rem;
  a {
    text-decoration: none;
    color: black;
  }
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  :hover {
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Dog = ({ breed, size = 250 }: { breed: Breed; size?: number }) => {
  return (
    <Container className="noselect">
      <Link
        href={`/breed/${breed.breed ? `${breed.breed}/` : ""}${breed.name}`}
      >
        <Image
          src={breed.imageUrl[0]}
          alt={breed.name}
          width={size}
          height={size}
        />
        <Description>{breed.name.toUpperCase()}</Description>
      </Link>
    </Container>
  );
};
export default Dog;
