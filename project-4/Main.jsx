export default function Main()
{
  return (
    <main>
      <div className="form">
      <label>Top Text
      <input type="text" name="topText" placeholder="One does not simply"/>
      </label>
      <label>Bottom Text
      <input type="text" name="bottomText" placeholder="Walk into Old city"/>
      </label>
      <>

      <button>Get a new meme image</button>
      </>
      </div>
      <div className="meme">
        <img src="http://i.imgflip.com/1bij.jpg"/>
        <span className="top">1</span>
        <span className="bottom">2</span>
      </div>
    </main>
  )
}