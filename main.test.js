var pa1 = "kaka"
var pa2 = "akak"

const pruebaAnagrama = require("./main")
test("Retorna verdadero cuando el anagrama existe.", () => {
	expect(pruebaAnagrama(pa1, pa2)).toBe(true);
})