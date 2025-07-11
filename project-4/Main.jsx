import { useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    imgUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "walk into Old City",
  });
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
        <img src={meme.imgUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
