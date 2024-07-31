import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );

  const chanelId = user?.data.channelId;

  useQuery(["courses", chanelId], () => fetchCoursesByChannelId(chanelId), {
    enabled: !!chanelId,
  });

  return <div>DependentQueries</div>;
};

export default DependentQueries;
