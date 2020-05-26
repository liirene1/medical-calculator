import React from 'react';
import { mount } from 'enzyme';
import { PatientStats } from './';
import { getAgeSex, getWeight, getHeight } from "actions/patientStats";

const dispatchFunctions = {
  getAgeSex,
  getWeight,
  getHeight
}

describe("PatientStats", () => {
  let wrapper = mount(<PatientStats {...dispatchFunctions}/>);
  afterEach(() => wrapper.unmount());

  it('renders 4 inputs and 2 buttonTabs', () => {
    expect(wrapper.find(".input-group")).toHaveLength(4);
    expect(wrapper.find(".btn")).toHaveLength(2);
  });
});
