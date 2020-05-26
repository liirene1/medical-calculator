import React from 'react';
import * as redux from 'react-redux';
import { mount } from 'enzyme';
import { Result } from './';

const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue({ result: {} });

describe("Result", () => {
  let wrapper = mount(<Result />);
  afterEach(() => wrapper.unmount());

  it('does not render without result', () => {
    expect(wrapper.find(".result")).toHaveLength(0);
  });

  it('renders when passed results', () => {
    spy.mockReturnValue({ result: {score: 5, severity: 'high'} });
    wrapper = mount(<Result />);
    expect(wrapper.find(".result")).toHaveLength(1);
  });
});
