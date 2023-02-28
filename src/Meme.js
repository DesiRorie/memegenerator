import React from "react";

import { useState, useEffect } from "react";
const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          placeholder="Top Text"
          className="formInputs"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Bottom Text"
          className="formInputs"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button onClick={getMemeImage} className="formButton">
          Get a new meme image
        </button>
      </div>

      <div className="meme">
        <img className="memeBox" src={meme.randomImage} />
        <h2 className="memeText top ">{meme.topText}</h2>
        <h2 className="memeText bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
