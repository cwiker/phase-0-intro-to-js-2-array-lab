const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyAppendCat(Ralph) {
cats.push("Ralph");
}

function destructivelyPrependCat(Bob) {
cats.unshift("Bob");
}

function destructivelyRemoveLastCat(Garfield) {
cats.pop(2);
}

function destructivelyRemoveFirstCat(Milo) {
cats.shift(0);
}

function appendCat(Broom) {
  const cats1 = [...cats, "Broom"];
  return cats1;
}

function prependCat(Arnold) {
  const cats2 = ["Arnold", ...cats];
  return cats2;
}

function removeLastCat(Garfield) {
return cats.splice("Garfield");
}