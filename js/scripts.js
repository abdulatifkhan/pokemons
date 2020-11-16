var elContainer = document.querySelector('.container');

var elPokemonsWrapper = document.createElement('div');
elPokemonsWrapper.classList.add('mt-5', 'row', 'justify-content');
elContainer.appendChild(elPokemonsWrapper);

var elPokemonList = createElement('ul', 'js-pokemon-list d-flex flex-wrap align-items-center justify-content-center p-0');
elPokemonsWrapper.appendChild(elPokemonList);

// for loop

for (var i = 0; i < pokemons.length; i++) {
  
  var elPokemonIteam = createElement('li', 'js-pokemon-iteam p-2 d-flex flex-column align-items-center justify-content-center bg-white col-2 m-4 rounded');
  elPokemonList.appendChild(elPokemonIteam);

  var elPokemonImg = createElement('img', 'js-pokemon-img');
  elPokemonImg.setAttribute('src', pokemons[i].img);
  elPokemonImg.setAttribute('width', '100');
  elPokemonImg.setAttribute('height', '100');
  elPokemonIteam.appendChild(elPokemonImg);

  var elPokemonName = createElement('span', 'js-pokemon-name font-weight-bold text-center',  `Name: ${pokemons[i].name}`);
  elPokemonIteam.appendChild(elPokemonName);


  var elPokemonType = createElement('span', 'js-pokemon-type pokemons-type', `Type: ${pokemons[i].type}`);
  elPokemonIteam.appendChild(elPokemonType);
}

// forEach

// pokemons.forEach(function (pokemon) {
//   var elPokemonIteam = createElement('li', 'js-pokemon-iteam p-2 d-flex flex-column align-items-center justify-content-center bg-white col-2 m-4 rounded');
//   elPokemonList.appendChild(elPokemonIteam);

//   var elPokemonImg = createElement('img', 'js-pokemon-img');
//   elPokemonImg.setAttribute('src', pokemon.img);
//   elPokemonImg.setAttribute('width', '100');
//   elPokemonImg.setAttribute('height', '100');
//   elPokemonIteam.appendChild(elPokemonImg);

//   var elPokemonName = createElement('span', 'js-pokemon-name font-weight-bold text-center',  `Name: ${pokemon.name}`);
//   elPokemonIteam.appendChild(elPokemonName);


//   var elPokemonType = createElement('span', 'js-pokemon-type pokemons-type', `Type: ${pokemon.type}`);
//   elPokemonIteam.appendChild(elPokemonType);
// })
