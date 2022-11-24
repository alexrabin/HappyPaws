import axios from "axios";

const baseUrl = "https://dog.ceo/api/";
const DogApiClient = axios.create({
  baseURL: baseUrl,
  responseType: "json",
  headers: {
    "accept-encoding": "*",
  },
});
export const getAllBreeds = async () => {
  return await DogApiClient.get("breeds/list/all");
};

/// Max count can be 50
export const getRandomBreedImage = async (breed: string, count = 1) => {
  return await DogApiClient.get(`breed/${breed}/images/random/${count}`);
};

export const getAllImagesForBreed = async (breed: string) => {
  return await DogApiClient.get(`breed/${breed}/images`);
};

export const getAllSubBreeds = async (breed: string) => {
  return await DogApiClient.get(`breed/${breed}/list`);
};

/// Max count can be 50
export const getRandomSubBreedImage = async (
  breed: string,
  subBreed: string,
  count = 1,
) => {
  return await DogApiClient.get(
    `breed/${breed}/${subBreed}/images/random/${count}`,
  );
};

export const getAllImagesForSubBreed = async (
  breed: string,
  subBreed: string,
) => {
  return await DogApiClient.get(`breed/${breed}/${subBreed}/images`);
};
