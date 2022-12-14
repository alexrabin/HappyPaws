import { GetStaticProps } from "next";
import Breed from "../../../models/Breed";
import MainLayout from "../../../components/MainLayout";
import {
  getAllBreeds,
  getAllImagesForBreed,
  getAllSubBreeds,
  getRandomSubBreedImage,
} from "../../../services/dogService";
import { Container } from "../../../components/Container";
import DogImage from "../../../components/DogImage";
import Dog from "../../../components/Dog";
const BreedPage = ({
  name,
  images,
  subBreeds,
}: {
  name: string;
  images: string[];
  subBreeds?: Breed[];
}) => {
  return (
    <MainLayout documentTitle={name.toUpperCase()}>
      <h1>{name.toUpperCase()}</h1>

      {subBreeds !== undefined && subBreeds.length > 0 ? (
        <>
          <h2>Sub Breeds</h2>
          <Container center>
            {subBreeds.map((b, i) => (
              <Dog key={i} breed={b} size={100} />
            ))}
          </Container>
        </>
      ) : (
        <></>
      )}
      <h2>Images</h2>
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

export default BreedPage;

export const getStaticPaths = async () => {
  const allBreeds = await getAllBreeds();
  const breedNames = Object.keys(allBreeds.data.message);
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

  let subBreedsData;
  const allDogImagesRes = await getAllImagesForBreed(breed);
  try {
    const subBreedsRes = await getAllSubBreeds(breed);
    if (subBreedsRes.data.message) {
      subBreedsData = await Promise.all(
        subBreedsRes.data.message.map(async (name: string) => {
          return {
            name,
            breed,
            imageUrl: await (
              await getRandomSubBreedImage(breed, name)
            ).data.message,
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
