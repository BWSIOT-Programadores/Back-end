import { PeopleContextProvider } from 'Context/PeoplesContextAPI';
import HomePage from './pages/Homepage';
import GlobalStyles from './Styles/GlobalStyles';

function App() {
  return (
    <PeopleContextProvider>
      <GlobalStyles />
      <HomePage />
    </PeopleContextProvider>
  );
}

export default App;
