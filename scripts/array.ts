const filmesCategorias: (string | number)[] = ["horror", "comedia", "drama"];

filmesCategorias.push("aventura");

const filmesAnos: Array<number | string> = [];

for (let ano = 2000; ano <= 2021; ano++) {
  filmesAnos.push(ano);
}

console.log(filmesAnos)
