import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import Dog from "../components/Dog";
import MainLayout from "../components/MainLayout";
import Breed from "../models/Breed";
import { getAllBreeds, getRandomBreedImage } from "../services/dogService";

const SearchContainer = styled.div`
  position: sticky;
  top: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 1rem;
`;
const SearchInput = styled.input`
  min-width: 300px;
  font-size: 16px;
  padding: 15px;
  border-radius: 5px;
  border-width: 1px;
`;
const Description = styled.p`
  a {
    color: #0099fa;
  }
`;
export default function Home({ breeds }: { breeds: Breed[] }) {
  const [filteredBreeds, setFilteredBreeds] = useState(breeds);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      setFilteredBreeds(
        breeds.filter((a) =>
          a.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setFilteredBreeds(breeds);
    }
  }, [breeds, searchInput]);
  return (
    <MainLayout>
      <h1>Happy Paws</h1>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for doggies"
          onChange={handleChange}
          value={searchInput}
        />
      </SearchContainer>
      <Description>
        Powered by{" "}
        <a href="https://dog.ceo/dog-api/" target={"_blank"} rel="noreferrer">
          The Dog API
        </a>
      </Description>
      <Container center>
        {filteredBreeds.map((b, i) => {
          return <Dog breed={b} key={i} />;
        })}
      </Container>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const allBreeds = await getAllBreeds();
  const breedNames = Object.entries(allBreeds.data.message).map((a) => a[0]);
  const breeds = await Promise.all(
    breedNames.map(async (name) => {
      return {
        name,
        imageUrl: await (await getRandomBreedImage(name)).data.message,
      };
    })
  );
  return {
    props: {
      breeds,
    },
  };
};
