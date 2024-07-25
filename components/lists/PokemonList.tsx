// Services
import { getAll } from "@/services/pokemon";

// Interfaces
import { Pokemon } from "@/interfaces/pokemon";

// Components
import { PokemonCard } from "../cards/PokemonCard";

export const PokemonList = async () => {
    const links = await getAll();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            { links.map((item: Pokemon) => 
                <PokemonCard key={item.id} pokemon={item} /> ) 
            }
        </div>
    );
}