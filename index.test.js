// index.test.js
const sayHello = require("./index");

test("Debería retornar el saludo correcto", () => {
  expect(sayHello()).toBe("¡Hola, Integración Continua!");
});
