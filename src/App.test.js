import React from 'react';
import { Provider } from "react-redux";
import { shallow, mount } from 'enzyme';
import * as redux from 'react-redux';
import store from "./store";
import App from './App';

const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue({ extraInfo: {}, result: {} });

describe("App", () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should render PatientStats form', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(".patient-stats")).toHaveLength(1);
  })
});
