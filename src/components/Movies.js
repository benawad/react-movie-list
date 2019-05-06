import React from "react";
import { List, Header, Rating } from "semantic-ui-react";

export const Movies = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => {
        return (
          <List.Item key={movie.title}>
            <Header>{movie.title}</Header>
            <Rating rating={movie.rating} maxRating={5} disabled />
          </List.Item>
        );
      })}
    </List>
  );
};
