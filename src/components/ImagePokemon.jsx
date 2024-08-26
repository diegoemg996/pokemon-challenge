import { useSelector } from "react-redux";
import image from "../assets/logo.png";
import { Spinner } from "./Spinner";

export const ImagePokemon = () => {
  const { pokemonSelected, loading } = useSelector((state) => state.pokemon);

  return (
    <div className="section__container image__container">
      <img src={image} alt="pokemon logo" className="pokemon__logo" />
      {!pokemonSelected || loading ? (
        <Spinner />
      ) : (
        <img
          src={pokemonSelected.sprites.front_shiny}
          alt={pokemonSelected.name}
          className="pokemon__sprite"
        />
      )}
    </div>
  );
};
