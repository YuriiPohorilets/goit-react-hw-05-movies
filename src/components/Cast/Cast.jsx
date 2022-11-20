import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/fetchMovies';
import { NoCast } from 'Error/NoCast';
import { List, Item, Img, Name, Character } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <List>
      {cast.length === 0 && <NoCast />}

      {cast.map(({ id, profile_path, name, character }) => (
        <Item key={id}>
          <Img src={imgBaseUrl.concat(profile_path)} alt="" />
          <div>
            <Name>{name}</Name>
            <Character>{character}</Character>
          </div>
        </Item>
      ))}
    </List>
  );
};
