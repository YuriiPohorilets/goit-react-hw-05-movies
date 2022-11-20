import { getMovieReviews } from 'services/fetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NoReviews } from 'Error/NoReviews';
import { List, Author, Text } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  console.log(reviews);

  if (!reviews) {
    return;
  }

  return (
    <List>
      {reviews.length === 0 && <NoReviews />}

      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <Author>{author}</Author>
          <Text>{content}</Text>
        </li>
      ))}
    </List>
  );
};
