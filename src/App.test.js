import { render, screen } from '@testing-library/react';
import App from './App';
import PokeBall from "./PokeBall/PokeBall";


describe('Pokemon', () => {

  test('renders Pokemon', () => {
    render(<PokeBall name={`charmander`} url={`https://pokeapi.co/api/v2/pokemon/1/`} />);

    screen.debug();
  });

});
