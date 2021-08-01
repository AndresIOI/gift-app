import React from 'react';
import { shallow } from "enzyme";

import  GifGridItem  from '../../components/GifGridItem'; 

describe('Pruebas en <GifGridItem />', () => {

  const url = 'https://google.com/goo.png';
  const title = 'Un Titulo';
  const wrapper = shallow(<GifGridItem img={url} title={title} />)

  test('debe de mostrar el componente correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );
  });

  test('debe de tener una imagen y un alt que sea igual al title', () => {
    const img = wrapper.find('img');
    expect( img.prop('src') ).toBe( url );
    expect( img.prop('alt') ).toBe( title );
  });

  test('debe de tener la clase gif', () => {
    const div = wrapper.find('div');
    expect( div.hasClass('gif') ).toEqual(true);
  });
});