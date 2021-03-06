import React from 'react';
import * as redux from 'react-redux';
import { mount } from 'enzyme';
import extraInfoData from 'constants/extraInfo';
import { ExtraInfo } from './';

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
