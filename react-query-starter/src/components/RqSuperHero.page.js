import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useSuperHeroData from "../hooks/useSuperHeroData";

function RqSuperHeroPage() {
  const Params = useParams();

  const { isLoading, data, isError, error } = useSuperHeroData(
    Params.superHero
  );

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <h2>
      {data?.data.name}-{data?.data.alterEgo}
    </h2>
  );
}

export default RqSuperHeroPage;
