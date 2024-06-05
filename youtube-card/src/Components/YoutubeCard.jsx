export function YoutubeCard() {
  return (
    <div className="bg-black">
      <div className="flex justify-center bg-black">
        <Image url="/maxresdefault.jpg"></Image>
      </div>
      <div className="flex flex-row mt-2">
        <div>
          <Icon url="/channels4_profile.jpg"></Icon>
        </div>
        <div className="pr-10 ml-2">
          <Text></Text>
        </div>
      </div>
    </div>
  );
}

function Image(props) {
  return <img src={props.url} alt="thumbnail" className="rounded-2xl w-96" />;
}

function Icon(props) {
  return (
    <img src={props.url} alt="channel icon" className="rounded-full w-10" />
  );
}

function Text() {
  return (
    <h1 className="text-white font-semibold">
      I'm a Mess, so I'm Making My Own File <br />
      Organizer [TagStudio]
    </h1>
  );
}
