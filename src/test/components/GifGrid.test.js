import React from 'react';
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en componente <GifGrid />', () => {
  const category = "Overwatch";

  test('debe de mostrarse correctamente', () => {

    useFetchGifs.mockReturnValue({
      gifs: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={category}/>);
    expect( wrapper ).toMatchSnapshot();

  });

  test('debe de mostrar items cuando se hace el fetch a useFetchGifs', () => {
    const gifs = [{
      id: "1",
      title: "title",
      img: "https://google.mx/img.jpg"
    },
    {
      id: "123",
      title: "title",
      img: "https://google.mx/img.jpg"
    }];

    useFetchGifs.mockReturnValue({
      gifs: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={category}/>);
    expect( wrapper ).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect( wrapper.find('GifGridItem').length).toBe(gifs.length)

  });
})