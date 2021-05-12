import './App.css';
import './style.css'
import image from './coffee.jpg';
import video from './react.mp4'

function App() {
  return (
    
    <div className="App">
    <div style={{border:'solid(1px)' , maxWidth:'100vw'}}>
    <h1 className="title red">Mohamed Mchirgui</h1>
    <br />
    <img className="image" src={image} style={{width:'400px', height:'250px'}}  alt="profile" ></img>
    <br />
    <img className="image" src='/coffeee.jpg' style={{width:'400px', height:'250px'}} alt="profile2" />
    
    </div>
    <br />
    <br />
    <video style = {{width:'320px' , height:'240px' }} src={video}  controls></video>

    </div>

  );
}
export default App;
