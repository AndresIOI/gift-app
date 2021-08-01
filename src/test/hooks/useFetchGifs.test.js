import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas al hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('overwatch'))
    const {gifs, loading} = result.current;
    
    await waitForNextUpdate();

    expect(gifs).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('debe de retornar un arreglo de gifs y loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('overwatch'))
    await waitForNextUpdate();
    const {gifs, loading} = result.current;

    expect(gifs.length).toBe(10);
    expect(loading).not.toBeTruthy();
  });
});