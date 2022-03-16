export default function Evolutions(chain){
  let evoChain = [];
let evoData = chain.chain;
  // let url_string= pokemon.item.url.slice(34).replace('/','');
do {
  let numberOfEvolutions = evoData['evolves_to'].length;

  evoChain.push({
    "species_name": evoData.species.name,
    "url": evoData.species.url.replace("-species",""),
    "photo": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evoData.species.url.slice(42).replace("/",'')}.png`,
  });
  if(numberOfEvolutions > 1) {
    for (let i = 1;i < numberOfEvolutions; i++) {
      evoChain.push({
        "species_name": evoData.evolves_to[i].species.name,
        "url": evoData.evolves_to[i].species.url.replace("-species",""),
        "photo": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evoData.evolves_to[i].species.url.slice(42).replace("/",'')}.png`,
     });
    }
  }
  evoData = evoData['evolves_to'][0];

} while (!!evoData && evoData.hasOwnProperty('evolves_to'));

return evoChain;
}

