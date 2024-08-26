import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../state/pokemonSlice";
import { ListItem } from "./ListItem";
import { useParams, useSearchParams } from "react-router-dom";
import { Pagination } from "./Pagination";

export const PokemonList = () => {
  const { pokemons } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page"));

  useEffect(() => {
    dispatch(getPokemons({ page: currentPage }));
  }, [searchParams]);

  return (
    <div className="section__container">
      <ul className="list__grid">
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <ListItem key={pokemon.name} pokemon={pokemon} />
          ))}
      </ul>
      <Pagination />
    </div>
  );
};
