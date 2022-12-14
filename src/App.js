import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "π": "Broadsmile Face",
  "π": "Broadsmile Face with Happy Sweat",
  "π": "Upside-Down Face",
  "π": " Winking Face",
  "π₯°": "Smiling Face with Hearts",
  "π": "Face Blowing a Kiss",
  "βΊοΈ": "Smiling Face",
  "π€": "Feeling of Excitement",
  "π": "frustration or annoyance",
  "πΆ": "Speechlessness",
  "π": "Feeling Sad"
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
