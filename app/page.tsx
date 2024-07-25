// Components
import { PokemonList } from "@/components/lists/PokemonList";

export default async function () {
  return (
    <main>
      <div className="p-5">
        <PokemonList />
      </div>
    </main>
  );
}