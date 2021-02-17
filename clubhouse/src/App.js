import './App.css';
import Tile from './components/tile.jsx'

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar">
          <img src="" alt=""/>
          <h1>Name</h1>
          <h5>address</h5>

          <a href="#"><i src=""></i> Link</a>
          <a href="#"><i src=""></i> Link</a>
          <a href="#"><i src=""></i> Link</a>
          <a href="#"><i src=""></i> Link</a>
          <a href="#"><i src=""></i> Link</a>
          <a href="#"><i src=""></i> Link</a>
          <a href="#"><i src=""></i> Link</a>
          <a href="#"><i src=""></i> Link</a>

        </nav>

        <div className="tilecontainer">
          <h1>Title</h1>

          <div className="tiles">
            <div className="column">
              <Tile title="asd asdad asd" text="sadfsdfsdfasdfs sadfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa df">

              </Tile>

              <Tile title="asd" text="sadfsdfsdfasdfs saddfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa fsa d fsdfasdfs sadfsa fsdfasdfs sadfsafsdfasdfs sadfsafasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa df">

              </Tile>
              
              <Tile title="asdasdasdsa" text="sadfsdfsdfasdfs sadfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa df dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa dfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa ">

              </Tile>
            </div>

            <div className="column">
              <Tile title="lorem asd" text="sadfsdfsdfasdffasdfs sadfsa dffasdfs sadfsa dfasdfasdfs sadfsa dfasdfasdfs sadfsa dfasdfasdfs sadfsa dfasdfasdfs sadfsa dfasdfasdfs sadfsa dfasdfasdfs sadfsa dfasdasdfasdfs sadfsa dfasds sadfsa fasdfs sadfsa dfasdfasdfs sadfsa dfasdfasdfs sadfsa dfasddfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa df">

              </Tile>

              <Tile title="asda asdasd" text="sadfsdfsdfasdfs sadfsa dfasdfasdfs sadfsa dfasdfasdfs sadfsa dfasdfasdfs sadfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa df">

              </Tile>

              <Tile title="asdasd" text="sadfsdfsdfasdfs sadfsa dfasdfasdfsadf sadfasdfa sd fsadf sadfasdf sadf sdfsa df">

              </Tile>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
