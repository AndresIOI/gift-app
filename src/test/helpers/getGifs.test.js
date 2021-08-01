import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {

  test('debe de traer 10 elementos', async () => {
    const gifs = await getGifs('Golang');

    expect( gifs.length ).toBe(10);
  });

  test('debe de traer 0 elementos si no se le pasa una categoria', async () => {
    const gifs = await getGifs('');

    expect( gifs.length ).toBe(0);
  })
});