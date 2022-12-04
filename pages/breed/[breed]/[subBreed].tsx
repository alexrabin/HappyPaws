import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import MainLayout from "../../../components/MainLayout";
import {
  getAllBreeds,
  getAllImagesForSubBreed,
} from "../../../services/dogService";
import { Container } from "../../../components/Container";
import DogImage from "../../../components/DogImage";
import Link from "next/link";
const SubBreedPage = ({
  breed,
  subBreed,
  images,
}: {
  breed: string;
  subBreed: string;
  images: string[];
}) => {
  return (
    <MainLayout
      documentTitle={subBreed.toUpperCase() + " " + breed.toUpperCase()}
    >
      <Link href={`/breed/${breed}`}> {"View all " + breed + " images"}</Link>
      <h1>{subBreed.toUpperCase() + " " + breed.toUpperCase()}</h1>
      <Container center>
        {images.map((b, i) => {
          return (
            <DogImage
              src={b}
              key={i}
              alt={b}
              includeMargin
              width={250}
              height={250}
            />
          );
        })}
      </Container>
    </MainLayout>
  );
};

export default SubBreedPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const allBreeds = await getAllBreeds();
  const breedNames = Object.entries(allBreeds.data.message);
  const paths: any[] = [];
  breedNames.forEach((breed) => {
    if (breed[1]) {
      (breed[1] as string[]).forEach((element) => {
        paths.push({ params: { breed: breed[0], subBreed: element } });
      });
    }
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { breed, subBreed } = context.params ?? {};
  if (
    !breed ||
    !subBreed ||
    typeof breed !== "string" ||
    typeof subBreed !== "string"
  ) {
    return {
      notFound: true,
    };
  }
  const allDogImagesRes = await getAllImagesForSubBreed(breed, subBreed);

  return {
    props: {
      breed,
      subBreed,
      images: allDogImagesRes.data.message,
    },
  };
};
