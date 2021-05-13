var pa1 = "kaka"
var pa2 = "kakaka"

const pruebaAnagrama = require("./main")
test("Retorna verdadero cuando el anagrama existe.", () => {
	expect(pruebaAnagrama(pa1, pa2)).toBe(true);
}),

test("Retorna falso cuando el anagrama no exista.", () => {
	expect(pruebaAnagrama(pa1, pa2)).toBe(false);
}),

test("Retornar falso cuando uno de los campos este vacio.", () => {
	expect(pruebaAnagrama(pa1, pa2)).toBe(false);
}),

test("Retornar falso cuando una de las palabras sea mas larga que la otra", () => {
	expect(pruebaAnagrama(pa1, pa2)).toBe(false);
})