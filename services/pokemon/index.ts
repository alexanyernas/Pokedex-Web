// Interfaces
import { Pokemon, PokemonList, PokemonUrl } from "@/interfaces/pokemon";

// ApiService
import ApiService from "../api.service";

// Axios
import { AxiosResponse } from "axios";

export const getAll = async (limit: number = 100): Promise<Pokemon[]> => {
    try {
        const { data: links }: AxiosResponse<PokemonList, any> = await ApiService.get(`/pokemon?limit=${limit}`);
        const pokemonPromises = links.results.map(async (item: PokemonUrl) => {
            const { data: pokemon }: AxiosResponse<Pokemon, any> = await ApiService.get(`/pokemon/${item.name}`);
            return pokemon;
        });
        const pokemons = await Promise.all(pokemonPromises);
        return pokemons;
    } catch (error) {
        return [];
    }
}
