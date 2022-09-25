import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😀": "Broadsmile Face",
  "😅": "Broadsmile Face with Happy Sweat",
  "🙃": "Upside-Down Face",
  "😉": " Winking Face",
  "🥰": "Smiling Face with Hearts",
  "😘": "Face Blowing a Kiss",
  "☺️": "Smiling Face",
  "🤗": "Feeling of Excitement",
  "😑": "frustration or annoyance",
  "😶": "Speechlessness",
  "😔": "Feeling Sad"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ padding: "2rem" }}>Self Helpoutt!</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3> Emojis we know:- </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
