function fetchData() {
    const userInputPokemon = document.getElementById('userInputPokemon').value.toLowerCase();
    const pokemonSprite = document.getElementById('pokemonSprite');
    const pokemonName = document.getElementById('pokemonName');
    const pokemonNum = document.getElementById('pokemonNum');

   

    fetch(`https://pokeapi.co/api/v2/pokemon/${userInputPokemon}`)
        .then(response => response.json())
        .then(data => {
            pokemonSprite.src = data.sprites.front_default;
            pokemonName.textContent = data.name;
            pokemonNum.textContent = `${data.id}`;

            pokemonSprite.style.display = 'block';
            pokemonName.parentElement.style.display = 'block';
        })

        .catch(error => {
            console.error("Error fetching pokémon data:", error);
            pokemonSprite.src = "Image not found";
            pokemonName.textContent = "Pokémon not found";
            pokemonName.parentElement.style.display = 'block';
        });
}