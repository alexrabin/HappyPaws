import { GetStaticProps } from "next";
import React from "react";
import Breed from "../../models/Breed";
import MainLayout from "../../components/MainLayout";
import {
  getAllBreeds,
  getAllImagesForBreed,
  getAllSubBreeds,
  getRandomBreedImage,
} from "../../services/dogService";
import { Container } from "../../components/Container";
import DogImage from "../../components/DogImage";
const BreedPage = ({
  name,
  images,
  subBreeds,
}: {
  name: string;
  images: string[];
  subBreeds: Breed;
}) => {
  return (
    <MainLayout>
      <h1>{name.toUpperCase()}</h1>
      <Container center>
        {images.map((b, i) => {
          return <DogImage src={b} key={i} alt={b} includeMargin />;
        })}
      </Container>
    </MainLayout>
  );
};

export default BreedPage;

export const getStaticPaths = async () => {
  const allBreeds = await getAllBreeds();
  const breedNames = Object.entries(allBreeds.data.message).map((a) => a[0]);
  return {
    paths: breedNames.map((name) => {
      return { params: { breed: name } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { breed } = context.params ?? {};
  if (!breed || typeof breed !== "string") {
    return {
      notFound: true,
    };
  }

  let subBreedsData = [];
  const allDogImagesRes = await getAllImagesForBreed(breed);
  try {
    const subBreedsRes = await getAllSubBreeds(breed);
    if (subBreedsRes.data.message) {
      subBreedsData = await Promise.all(
        subBreedsRes.data.message.map(async (name: string) => {
          return {
            name,
            imageUrl: await (await getRandomBreedImage(name)).data.message,
          };
        })
      );
    }
  } catch (e) {}
  return {
    props: {
      name: breed,
      images: allDogImagesRes.data.message,
      subBreeds: subBreedsData,
    },
  };
};
