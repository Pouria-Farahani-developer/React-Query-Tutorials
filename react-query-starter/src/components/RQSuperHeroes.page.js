import { useSuperHeroesData } from "../hooks/useSuperHeroesData";







export const RQSuperHeroesPage = () => {


  const onSuccess = () => {
    console.log('Perform side effect after data fetching')
  }
  
  
  const onError = () => {
    console.log('Perform side effect after encountering error')
  }


  const { isLoading, data, error, isError, isFetching  , refetch } = useSuperHeroesData(onSuccess,onError)



  


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
