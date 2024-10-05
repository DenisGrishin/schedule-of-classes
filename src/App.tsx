import './App.css';
import { useRoutes } from './hooks/useRoutes';

function App() {
  const routes = useRoutes();

  return <>{routes}</>;
}

export default App;
