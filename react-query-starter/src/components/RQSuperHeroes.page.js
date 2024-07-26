import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, error, isError, isFetching } = useQuery(
    "Super-Heroes",
    fetchSuperHeroes,
    {
      // refetchInterval: false,
      refetchInterval: 2000,
      refetchIntervalInBackground: true, // will continue to pull data even when the browser is not in focus
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
