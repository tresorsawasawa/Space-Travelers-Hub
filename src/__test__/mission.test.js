import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import Missions from '../components/Missions';

const Tree = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Missions Component', () => {
  it('renders', async () => {
    render(<Tree />);
    const missionText = screen.getByText('Mission');
    const descriptionText = screen.getByText('Description');
    const statusText = screen.getByText('Status');
    expect(missionText).toMatchSnapshot();
    expect(descriptionText).toMatchSnapshot();
    expect(statusText).toMatchSnapshot();
  });
});