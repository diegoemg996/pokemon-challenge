import { PokemonList } from "../components/PokemonList";
import { ImagePokemon } from "../components/ImagePokemon";
import "../App.css";

export const MainPage = () => {
  return (
    <>
      <div className="page__container">
        <ImagePokemon />
        <PokemonList />
      </div>
    </>
  );
};
