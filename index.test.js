
const holaMundo = require('./index');

test('Devuelve "Hola Mundo!" correctamente', () => {
  expect(holaMundo()).toBe('Hola Mundo!');
});
