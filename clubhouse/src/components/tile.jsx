import './tile.css'

function Tile(props) {
    return(
        <div className="Tile">
            <h3 className="title">{props.title}</h3>
            <p className="text">{props.text}</p>
        </div>
    );
}

export default Tile;