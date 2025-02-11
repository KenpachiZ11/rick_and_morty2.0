import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Cards } from './Cards';

describe('Cards', () => {
  const arrayObj = [
    {
      created: "2021-11-02T17:24:37.458Z",
      episode: ['https://rickandmortyapi.com/api/episode/9'],
      gender: "Genderless",
      id: 826,
      image: "https://rickandmortyapi.com/api/character/avatar/826.jpeg",
      location: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'},
      name: "Butter Robot",
      origin: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'},
      species: "Robot",
      status: "Alive",
      type: "Passing Butter Robot",
      url: "https://rickandmortyapi.com/api/character/826"
    }
  ];

  test('Рендер данных имя и статус', () => {
    render(<Cards allCharacters={arrayObj} />);

    // Проверяем, что имя персонажа отображается в документе
    arrayObj.forEach(item => {
      const name = screen.getByText(item.name);
      expect(name).toBeInTheDocument();

      const status = screen.getByText(item.status);
      expect(status).toBeInTheDocument();
    });
  });

  test('Если нет рендера данных', () => {
    render(<Cards allCharacters={[]} />);

    // Проверяем, что при отсутствии персонажей ничего не отображается
    expect(screen.queryByText("Butter Robot")).not.toBeInTheDocument();
  });
});