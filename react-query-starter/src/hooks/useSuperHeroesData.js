import axios from "axios";
import { useMutation, useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes',hero)
}

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("Super-Heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
  });
};


export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero)
}