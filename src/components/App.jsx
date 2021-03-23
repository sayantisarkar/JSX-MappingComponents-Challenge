import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia";

function getEntry(emojiEntry) {
  return (
    <Entry
      key={emojiEntry.id}
      emoji={emojiEntry.emoji}
      name={emojiEntry.name}
      meaning={emojiEntry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(getEntry)}</dl>
    </div>
  );
}

export default App;
