import type { CSSProperties } from 'react';

const name = 'Bryan';
const lastName = 'Guillen';

const favoriteGames = [
  'The Witcher 3',
  'Elden Ring',
  'The Last of Us',
  'The Last of Us 2',
  'The Last of Us 3',
];

const styles: CSSProperties = {
  color: 'red',
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1 style={styles}> {name} </h1>
      <h3> {lastName} </h3>
      <ul>
        {favoriteGames.map((game) => (
          <li key={game}>{game}</li>
        ))}
      </ul>
    </>
  );
};
