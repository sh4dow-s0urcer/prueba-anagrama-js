var pa1 = "kaka"
var pa2 = "akat"

const pruebaAnagrama = require("./main")
test("Retorna verdadero cuando el anagrama existe.", () => {
	expect(pruebaAnagrama(pa1, pa2)).toBe(true);
}),

test("Retorna falso cuando el anagrama no exista.", () => {
	expect(pruebaAnagrama(pa1, pa2)).toBe(false);
})