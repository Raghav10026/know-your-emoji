import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "⛱️": "Umbrella on Ground",
  "🙌": "celebration",
  "💆‍♀️": "leave me alone",
  "😯": "hush hush hush!",
  "😤": "triumph",
  "🙇‍♂️": "bowing",
  "😇 ": "Smiling Face with Halo",
  "🥰 ": "Smiling Face with Hearts",
  "😍 ": "Smiling Face with Heart-Eyes",
  "🤩 ": "Star-Struck",
  "🙂": "Slightly Smiling Face",
  "🪀": "Yo-Yo",
  "🤐 ": "Zipper-Mouth Face",
  "🤨 ": "Face with Raised Eyebrow",
  "😐 ": "Neutral Face",
  "😑 ": "Expressionless Face",
  "😶 ": "Face Without Mouth",
  "😏 ": "Smirking Face",
  "😒 ": "Unamused Face",
  "🙄 ": "Face with Rolling Eyes",
  "😬 ": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face"
};
var emojisindb = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Oops! We do not have this in Database, Sorry!!";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="wrapper">
      <nav class="navigation">
        <div class="nav-brand">Emoji Knowing Fun app</div>
      </nav>
      <input
        placeholder="Type name of Emoji here"
        onChange={changeEventHandler}
      ></input>
      <h1 style={{ color: "silver" }}>{meaning}</h1>
      <h2>
        Check out the Emojis we got:
        {emojisindb.map(function (emoji) {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </h2>
    </div>
  );
}
