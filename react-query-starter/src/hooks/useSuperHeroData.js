import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(
    ["superHero", heroId],
    () => {
      return axios.get(`http://localhost:4000/superheroes/${heroId}`);
    },
    {
      initialData: () => {
        const hero = queryClient
          .getQueryData("superHero")
          ?.data?.find((hero) => hero.id === parseInt(heroId));

        if (hero) {
          return {
            data: hero,
          };
        } else {
          return undefined;
        }
      },
    }
  );
};

export default useSuperHeroData;
