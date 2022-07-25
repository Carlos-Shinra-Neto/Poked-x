const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon');
const form = document.querySelector('.form');

const fetchPokemon = async (pokemon) => {    
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    console.log(data);
    return data;
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);
    
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

}

form.addEventListener('submit', (event)=>{

    event.preventDefault();

    console.log('Enviando formulario...')
})