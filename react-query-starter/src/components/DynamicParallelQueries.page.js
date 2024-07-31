import React from "react";
import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

function DynamicParallelQueriesPage({ heroIds }) {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  return <div>DynamicParallelQueries</div>;
}

export default DynamicParallelQueriesPage;
