import { useSelector } from "react-redux";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";

export const PokemonStats = () => {
  const { pokemonSelected, loading } = useSelector((state) => state.pokemon);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="section__container">
      {loading || !pokemonSelected ? (
        <Spinner />
      ) : (
        <div className="stats__container">
          <div className="mb-1">
            <h2>{pokemonSelected.name}</h2>
            <p>Height: {pokemonSelected.height}</p>
            <p>Experience: {pokemonSelected.base_experience}</p>
          </div>
          <div className="mb-1">
            <h3>Type</h3>
            {pokemonSelected.types.map((item) => (
              <p className="stats__tag" key={item.type.name}>
                {item.type.name}
              </p>
            ))}
          </div>
          <div className="mb-1">
            <h3>Habilities</h3>
            {pokemonSelected.abilities.map((item) => (
              <p className="stats__tag" key={item.ability.name}>
                {item.ability.name}
              </p>
            ))}
          </div>
          <div className="mb-1">
            <h3>Stats</h3>
            {pokemonSelected.stats.map((item) => (
              <div>
                <p>{item.stat.name}</p>
                <div className="stats__barcontainer">
                  <div
                    className="stats__bar"
                    style={{ width: `${item.base_stat}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleGoBack} className="pagination__button">
            &#60;
          </button>
        </div>
      )}
    </div>
  );
};
