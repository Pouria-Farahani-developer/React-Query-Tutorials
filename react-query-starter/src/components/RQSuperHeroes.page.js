import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, error, isError, isFetching  , refetch } = useQuery(
    "Super-Heroes",
    fetchSuperHeroes,
    {
      enabled:false
    }
  );


  //refetch is a handler function that return usequery for manage refetch manually

  


  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((item) => (
        <h3 key={item.name}>{item.name}</h3>
      ))}
    </>
  );
};
