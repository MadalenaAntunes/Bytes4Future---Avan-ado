import logo from './logo.svg';
import './App.css';
import { YoutubeCard } from './components/YoutubeCard';
import moment from 'moment';

const videos = [
  {
    views: 124214421,
    date: moment().subtract(6, "month").add(2, "day"),
    title: "Leonidas fez o que????",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UsseJLum7bkeD5q2e78A5FOb0BBENJSZNMQqy4fQXQ&s",
    duration: "23:21",
    href: "",
    user: {
      channelName: "Aprenda com o GatoLoko",
      href: "",
      imageRef: "",
      verified: true
    }
  }
]

function App() {

  // onPageLoad()
  //  Pede ao youtube videos
  //  Quando o youtube responder
  //  Guarda e renderiza os videos  

  return (
    <div className="p-12">
      <YoutubeCard

//      prop={valor} em que valor vem do backend
        uImage={videos[0].user.imageRef}
        uChannelUrl={videos[0].user.href}
        uChannelName={videos[0].user.channelName}
        uVerifiedChannel={videos[0].user.uVerifiedChannel}

        vImage={videos[0].thumbnail}
        vTitle={videos[0].title}
        vViews={videos[0].views}
        vPublishedDate={videos[0].date}
        vDuration={videos[0].duration}
        vVideoUrl={videos[0].href}

      />
    </div>
  );
}




// function Cumprimentar(atributos) {
//   atributos.nome
//   return (
//     <>
//     </>
//   )
// }

export default App;
