// @ts-nocheck
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import 'normalize.css';
import { routes } from './libs/routes';
import { RoutesType } from './libs/types';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            {
              routes.map((item: RoutesType) => (
                <Route key={item.name} path={item.path} element={item.element} />
              ))
            }
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
