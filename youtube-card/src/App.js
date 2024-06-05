import {YoutubeCard} from "./Components/YoutubeCard"
import './App.css';

function App() {
  return (
    <div className="App">
      <YoutubeCard>
        
      </YoutubeCard>
    </div>
  );
}

const videos = [
  {
    views: 4567890,
    date: 345678,
    title: "",
    thumbnail: "",
    duration: "23:21",
    user: {
      channelName: "",
      href:"",
      imageRef: ""
    }

  }
]

export default App;
