import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("App", () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

// it('App renders extraInfo', () => {
//   const app = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   const extraInfoSection = <div class="extra-info"/>;
//   expect(app).toContainHTML(extraInfoSection);
// });

//renders PatientsStats form
