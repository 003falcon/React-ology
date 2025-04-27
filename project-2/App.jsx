import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";
function App() {
  const Entries = data.map((entry) => {
    return (
      <Entry
      //avoid key={index} ,instead use database's unique id
        key={entry.id}
        //if prop name is same as entry obj name simply {entry} or ( even by using the spread operator {...entry} )instead of the below
        image_path={entry.img.src}
        image_alt={entry.img.alt}
        country={entry.country}
        map_link={entry.googleMapsLink}
        title={entry.title}
        date={entry.dates}
        description={entry.text}
      />
    );
  });
  return (
    <>
      <Header />
      {Entries}
    </>
  );
}

export default App;
