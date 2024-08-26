import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../state/pokemonSlice";
import { useNavigate } from "react-router-dom";

export const ListItem = ({ pokemon }) => {
  const { pokemonSelected } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickTimeout = useRef(null);

  const clearClickTimeout = () => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    }
  };

  const handleSingleClick = () => {
    dispatch(getPokemonById(pokemon.url));
  };

  const handleDoubleClick = () => {
    dispatch(getPokemonById(pokemon.url));
    navigate(`/${pokemon.name}`);
  };

  const handleGetPokemon = (event) => {
    clearClickTimeout();

    if (event.detail === 1) {
      clickTimeout.current = setTimeout(() => {
        handleSingleClick();
        clearClickTimeout();
      }, 250);
    } else if (event.detail === 2) {
      handleDoubleClick();
    }
  };

  return (
    <li
      onClick={handleGetPokemon}
      className={
        pokemonSelected && pokemon.name === pokemonSelected.name
          ? "list__item-selected"
          : "list__item"
      }
    >
      {pokemon.name}
    </li>
  );
};
