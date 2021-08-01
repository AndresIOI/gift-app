import React from 'react';
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories}/>)

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories}/>)

  })

  test('debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = "Overwatch";

    input.simulate('change', { target: { value }})
  });

  test('NO debe de postear la informacion con el submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect( setCategories ).not.toHaveBeenCalled();
  });

  // test('debe de llamar el setCategories y limpiar la caja de texto', () => {
  //   const value = 'New Value';

  //   wrapper.find('input').simulate('change', { target: value });

  //   wrapper.find('form').simulate('submit', { preventDefault(){} });

  //   expect( setCategories ).toHaveBeenCalled();
  //   expect(input.prop('value')).toBe('');
  // });
});