import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  Link: ({ children }) => <a href="#link">{children}</a>,
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/' }),
}));

jest.mock('./components/Header', () => () => <div>Header Component</div>);
jest.mock('./components/Main', () => () => <div>Main Component</div>);
jest.mock('./components/Footer', () => () => <div>Footer Component</div>);
jest.mock('./pages/BookingPage', () => () => <div>Booking Page Component</div>);


test('renders the main application components', () => {
  render(<App />);
  const headerElement = screen.getByText(/Header Component/i);
  const mainElement = screen.getByText(/Main Component/i);
  const footerElement = screen.getByText(/Footer Component/i);

  expect(headerElement).toBeInTheDocument();
  expect(mainElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});