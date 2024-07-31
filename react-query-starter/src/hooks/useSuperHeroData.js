import axios from "axios";
import { useQuery } from "react-query";

const useSuperHeroData = (hero) => {
  return useQuery(["superHero", hero], () => {
    return axios.get(`http://localhost:4000/superheroes/${hero}`);
  });
};

export default useSuperHeroData;
