import './App.css';
import { useRoutes } from './hooks/useRoutes';

import { TopBar } from './UI/TopBar';

function App() {
  const routes = useRoutes();

  return <>{routes}</>;
}

export default App;
