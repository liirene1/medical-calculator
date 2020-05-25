import React from 'react';
import { mount } from 'enzyme';
import { Result } from './';

describe("Result", () => {
  let wrapper = mount(<Result result={{}}/>);
  afterEach(() => wrapper.unmount());

  it('does not render without result', () => {
    expect(wrapper.find(".result")).toHaveLength(0);
  });

  it('renders when passed results', () => {
    wrapper = mount(<Result result={ {score: 5, severity: 'high'}}/>);
    expect(wrapper.find(".result")).toHaveLength(1);
  });
});
