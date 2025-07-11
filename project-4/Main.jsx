import { useState ,useEffect } from "react";

//In functional programming ,state is immutable,only mutable when using respective setter function
export default function Main() {
  const [meme, setMeme] = useState({
    imgUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "walk into Old City",
  });
  const [memeArr,setMemeArr]=useState([]);

  //Note :the callback func in useEffect can't be made async
  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(res=>res.json())
    .then(data=>setMemeArr(data.data.memes));
    
  },[])
  function captureText(event) {
    const { value ,name } = event.currentTarget;
    // setMeme(prev=>prev.topText=value);
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            name="topText"
            placeholder="One does not simply"
            onChange={captureText}
          />
        </label>
        <label>
          Bottom Text
          <input
            type="text"
            name="bottomText"
            placeholder="Walk into Old city"
            onChange={captureText}
          />
        </label>
        <>
          <button>Get a new meme image</button>
        </>
      </div>
      <div className="meme">
        {/* <pre>{memeArr.data}</pre> */}
        <img src={meme.imgUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
