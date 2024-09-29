import './App.css';
import { getDataBaseFB, getRefFB, getValueFB } from './firebase';
import { useRoutes } from './hooks/useRoutes';

function App() {
  const routes = useRoutes();

  return <>{routes}</>;
}

export default App;
