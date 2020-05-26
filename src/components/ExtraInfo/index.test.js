import React from 'react';
import * as redux from 'react-redux';
import { mount } from 'enzyme';
import { ExtraInfo } from './';

const extraInfoData = {
  "whenToUse" : [
    "Assessing a patient’s renal function",
    "Prescribing a drug that is renally metabolized"
  ],
  "pearlsPitfalls": {
    "title": "From Dan Brown, PharmD, at Palm Beach Atlantic University, the primary author of the functional range of creatinine clearance paper",
    "text": "“The Cockcroft-Gault equation remains the gold standard after almost 40 years, despite inaccuracies that arise from variations in body composition among patients. Those who understand potential sources of error can adjust accordingly.”"
  }
}

const spy = jest.spyOn(redux, 'useSelector')

describe("ExtraInfo", () => {
  it('does not render with no extraInfo', () => {
    spy.mockReturnValue({ extraInfo: {} });
    const wrapper = mount(<ExtraInfo />);
    expect(wrapper.find(".extra-info")).toHaveLength(0);
  });

  it('should render two buttonTabs', () => {
    spy.mockReturnValue({ extraInfo: extraInfoData });
    const wrapper = mount(<ExtraInfo />);
    expect(wrapper.find(".btn")).toHaveLength(2);
  });

  it('should render content when user clicks on a buttonTab', () => {
    const wrapper = mount(<ExtraInfo />);
    wrapper.find(".btn").at(1).simulate("click");
    expect(wrapper.find(".content")).toHaveLength(1);
  })
});
