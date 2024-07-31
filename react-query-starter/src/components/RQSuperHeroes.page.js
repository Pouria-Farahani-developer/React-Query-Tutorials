import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log("Perform side effect after data fetching");
  };

  const onError = () => {
    console.log("Perform side effect after encountering error");
  };

  const { isLoading, data, error, isError } = useSuperHeroesData(
    onSuccess,
    onError
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
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};
