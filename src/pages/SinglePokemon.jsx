import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByName } from "../state/pokemonSlice";
import { useParams } from "react-router-dom";
import { ImagePokemon } from "../components/ImagePokemon";
import { PokemonStats } from "../components/PokemonStats";

export const SinglePokemon = () => {
  const { pokemonSelected } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  const { name } = useParams();

  useEffect(() => {
    if (!pokemonSelected) {
      dispatch(getPokemonByName(name));
    }
  }, []);

  return (
    <div className="page__container">
      <ImagePokemon />
      <PokemonStats />
    </div>
  );
};
