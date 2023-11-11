"use client";

import { gql, useQuery } from "@apollo/client";
import React from "react";

const BOARDS_QUERY = gql`
  query BoardsQuery {
    boards {
      id
      type
      content
      writerId
      views
      likes
    }
  }
`;

function BoardList() {
  const { data, loading, error } = useQuery(BOARDS_QUERY);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default BoardList;
