import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};






export const RQSuperHeroesPage = () => {


  const onSuccess = () => {
    console.log('Perform side effect after data fetching')
  }
  
  
  const onError = () => {
    console.log('Perform side effect after encountering error')
  }


  const { isLoading, data, error, isError, isFetching  , refetch } = useQuery(
    "Super-Heroes",
    fetchSuperHeroes,
    {
      onSuccess,
      onError
    }
  );



  


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
