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
      <Clube title="Clube de Anime/Geek" description="Este clube é destinado aos interessados na cultura Geek e àqueles que gostam de assistir animes e ler mangás🗾🇯🇵 --- Todos são bem-vindos(as)! ✒️" link="https://cdn.discordapp.com/attachments/862708545530626078/880883463371247647/5924a518ee6a0a31bced26d4121b7555.png"></Clube>
      <Clube title="Clube Olímpico" description="A participação em olimpíadas de conhecimento pode abrir muitas portas! 📖 Por isso, nada mais justo do que estar por dentro das novidades e calendários das várias olimpíadas que ocorrem pelo Brasil, como Olimpíada Brasileira de Física🚀, Olimpíada Paulista de Química🔥, Olimpíada Brasileira de Medicina🧬 e Olimpíada Brasileira de História do Brasil🏞️." link="https://cdn.discordapp.com/attachments/862708545530626078/880885250585149450/R.png"></Clube>
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
