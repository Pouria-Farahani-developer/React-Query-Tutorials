import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

function ParallelQueriesPage() {
  useQuery("friends", fetchFriends);
  useQuery("super-heroes", fetchSuperHeroes);

  return <h2>ParallelQueriesPage</h2>;
}

export default ParallelQueriesPage;
