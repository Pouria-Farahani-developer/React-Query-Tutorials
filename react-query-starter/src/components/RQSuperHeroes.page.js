import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("Super-Heroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });

  if (isLoading) {
    return <h2>Loading ...</h2>;
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
