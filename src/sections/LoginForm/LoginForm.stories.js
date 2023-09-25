import { BrowserRouter } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

export default {
  title: 'Edustipend/Sections/LoginForm',
  component: LoginForm,
  tags: ['autodocs']
};
const mockStore = configureMockStore([
]);
const store = mockStore({
  user: {
    name: 'Test User'
  }
});

export const LoginFormSection = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  </Provider>
);
