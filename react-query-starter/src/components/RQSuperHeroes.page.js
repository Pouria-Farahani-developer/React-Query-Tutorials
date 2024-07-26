import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/susperheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, error, isError, isFetching } = useQuery(
    "Super-Heroes",
    fetchSuperHeroes,
    {
      // staleTime: 0, By default, this value is always set to zero so that the React Query value is updated every time the page is called.
      cacheTime: 5000,
      staleTime: 3000,
    }
  );

  // console.log(isLoading, isFetching);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map((item) => (
        <h3 key={item.name}>{item.name}</h3>
      ))}
    </>
  );
};
