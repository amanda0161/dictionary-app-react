import image from "./image.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-image" alt="image" />
      </header>
    </div>
  );
}

export default App;
