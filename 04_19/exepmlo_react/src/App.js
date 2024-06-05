

function App() {
  return (

    <div className="flex bg-black h-screen w-screen overflow-hidden p-4 gap-4">
      <Sidebar />
      <AppContent />
    </div>
  );
}
function Sidebar() {
  return (
    <div className="flex flex-col gap-4 rounded-lg  h-screen w-24 max-w-48 ">
      <div className="bg-gray-600 p-2 rounded-lg w-full gap-2 flex flex-col justify-center items-center">
        <div className="h-16 w-16 bg-red-400"></div>
        <div className="h-16 w-16 bg-red-400"></div>
      </div>
      <div className="overflow-y-scroll bg-gray-600 p-2 rounded-lg w-full gap-2 flex flex-col justify-center items-center">
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>
        <div className="h-16 flex-shrink-0 w-16 bg-red-400"></div>

      </div>
    </div>
  );
}
function AppContent() {
  const recommendedItems = [
    { trackName: "Bailarina 2", imageSrc: "/image.jpg" },
    { trackName: "Bailarina 2", imageSrc: "/image.jpg" },
    { trackName: "Bailarina 2", imageSrc: "/image.jpg" },
    { trackName: "Bailarina 2", imageSrc: "/image.jpg" },
    { trackName: "Bailarina 2", imageSrc: "/image.jpg" },
    { trackName: "Bailarina 2", imageSrc: "/image.jpg" },
    { trackName: "Bailarina 2", imageSrc: "/image.jpg" },
    { trackName: "Bailarina 2", imageSrc: "/image.jpg" },
    { trackName: "Bailarina 2", imageSrc: "/image.jpg" },
  ]
  return (
    <div className="flex bg-slate-900 h-screen w-full gap-4 flex-wrap">
      {/* <RecommendedCard imageSrc={recommendedItems[0].imageSrc} trackName={recommendedItems[0].trackName} /> */}
      {
        recommendedItems.map(e => (
          <RecommendedCard trackName={e.trackName} imageSrc={e.imageSrc}/>
        ))
      }
    </div>
  );
}

function RecommendedCard(props) {
  return (
    <div className="group  group-hover:bg-red-800 flex w-fit h-24 min-w-64 justify-start items-start gap-4">
      <div className="w-24 h-24 overflow-hidden">
        <img className="w-24 h-24" src={props.imageSrc} />
      </div>
      <span className="group-hover:opacity-1 flex h-full opacity-80 items-center text-white font-bold">
        {props.trackName}
      </span>
    </div>
  )
}

export default App;
