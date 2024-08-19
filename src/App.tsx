import './App.css';
import { SideBar } from './UI/SideBar';
import { Main } from './UI/Main';
import { GridFlex } from './UI/GridFlex';

function App() {
  return (
    <GridFlex>
      <SideBar />

      <Main />
    </GridFlex>
  );
}

export default App;
