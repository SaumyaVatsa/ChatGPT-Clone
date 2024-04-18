// Imports
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import query from "./assets/message.svg";
import "./App.css"
import home from "./assets/home.svg";
import saveIcon from "./assets/bookmark.svg";
import gptProIcon from "./assets/rocket.svg"

// Main Program
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="upperside-top">
            <img src={gptLogo} alt="chat-gpt logo" className="logo"/>
            <span className="brand">ChatGpt</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="" className="addBtn"/> New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query"><img alt="Query" src={query}/> What is Programming ?</button>
            <button className="query"><img alt="Query" src={query}/> How to use an API ?</button>
          </div>
        </div>
        <div className="lowerside">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saveIcon} alt="Bookmark" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={gptProIcon} alt="GPT Pro" className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">

      </div>
    </div>
  );
}

export default App;
