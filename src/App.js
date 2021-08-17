import Header from './Components/Header/Header';
import Divisor from './Components/Divisor/Divisor';
import Atalhos from './Components/Atalhos/Atalhos';
import Clube from './Components/Clube/Clube';
import Adicionar from './Components/Adicionar/Adicionar';

import './global.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Atalhos></Atalhos>
      <Divisor></Divisor>
      <p id="clubesTitulo" className="atalhosIndicator">Clubes: </p>
      <Clube title="Lorem ipsum dolor" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." link="1111111"></Clube>
      <Clube title="Lorem ipsum dolor" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." link="1111111"></Clube>
      <Clube title="Lorem ipsum dolor" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." link="1111111"></Clube>
      <p id="clubesTitulo" className="atalhosIndicator">Role para baixo</p>
      <div className="goBelow">
        <div className="ballContainer">
          <div className="ball"></div>
        </div>
      </div>
      <Adicionar></Adicionar>
    </div>
  );
}

export default App;
