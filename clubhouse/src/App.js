import './App.css';
import {ReactComponent as home} from './icon.svg';
import Tile from './components/tile.jsx';

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar">
          <img src="" alt=""/>
          <h1>Name</h1>
          <h5>address</h5>

          <h5>SubCategory</h5>
          
          <a href="#"><i class="fa fa-home"></i> Link</a>
          <a href="#"><i class="fa fa-hashtag"></i> Link</a>
          <a href="#"><i class="fa fa-user"></i> Link</a>

          <h5>SubCategory</h5>

          <a href="#"><i class="fa fa-comment"></i> Link</a>
          <a href="#"><i class="fa fa-bookmark"></i> Link</a>
          <a href="#"><i class="fa fa-bolt"></i> Link</a>

          <h5>SubCategory</h5>

          <a href="#"><i class="fa fa-list"></i> Link</a>
          <a href="#"><i class="fa fa-group"></i> Link</a>

        </nav>

        <div className="tilecontainer">
          <h1>Title</h1>
          
          <div className="tiles">
            <div className="column">
              <Tile title="lorem" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nihil quis, quos exercitationem repudiandae atque! Laudantium hic aspernatur itaque odio!">

              </Tile>

              <Tile title="lorem" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, facere? Error deleniti quis exercitationem corporis quaerat ad, consequuntur distinctio omnis. In officiis voluptatem eum, corrupti amet odio expedita provident debitis repellat cum vero, unde eos, nulla excepturi? Id error doloremque consectetur, porro hic odit sit laudantium aliquam, non facilis et.">

              </Tile>
              
              <Tile title="lorem" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, facere? Error deleniti quis exercitationem corporis quaerat ad, consequuntur distinctio omnis. In officiis voluptatem eum, corrupti amet odio expedita provident debitis repellat cum vero, unde eos, nulla excepturi? Id error doloremque consectetur, porro hic odit sit laudantium aliquam, non facilis et.">

              </Tile>
            </div>

            <div className="column">
              <Tile title="lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima, facilis distinctio sit fuga nihil doloribus architecto numquam eaque commodi odit. Rem minus obcaecati cumque magni dignissimos, illo sint suscipit, iure ratione commodi ipsam eligendi nostrum ullam, atque ipsa possimus? Dignissimos ullam quam, eaque quisquam consequatur qui quaerat perferendis facilis incidunt magni voluptate eius unde excepturi ea quas mollitia at tempora nam deserunt ad itaque beatae ipsa illum! Illo quibusdam provident, id ex tempora architecto. Ipsa modi libero omnis at. Tenetur aut consequatur veritatis omnis amet culpa doloribus eaque atque ad perspiciatis? Consequatur nostrum omnis fugiat laudantium voluptas numquam obcaecati!">

              </Tile>

              <Tile title="lorem" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nihil quis, quos exercitationem repudiandae atque! Laudantium hic aspernatur itaque odio!">

              </Tile>

              <Tile title="lorem" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nihil quis, quos exercitationem repudiandae atque! Laudantium hic aspernatur itaque odio!">

              </Tile>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
