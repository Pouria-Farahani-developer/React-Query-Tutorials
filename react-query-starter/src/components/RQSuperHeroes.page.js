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
      onError,
      select:(data) => { // automatically recive data api 
        const superHeroNames = data?.data.map((hero) => hero.name)
        return superHeroNames //infact destructure data to array
      }
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
      {data.map((heroName) => (
        <h3 key={heroName}>{heroName}</h3>
      ))}
    </>
  );
};
