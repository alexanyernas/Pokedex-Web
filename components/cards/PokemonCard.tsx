// Interfaces
import { Pokemon } from "@/interfaces/pokemon";

interface Props {
    pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    return (  
        <div key={pokemon.id} className="flex items-center bg-slate-200 p-2">
            <img 
                alt={pokemon.name}
                src={pokemon.sprites.front_default}
            ></img>
            <p>{pokemon.name}</p>
        </div>
    );
}