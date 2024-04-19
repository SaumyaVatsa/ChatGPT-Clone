// Imports
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import query from "./assets/message.svg";
import "./App.css"
import home from "./assets/home.svg";
import saveIcon from "./assets/bookmark.svg";
import gptProIcon from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import gpt from "./assets/chatgptLogo.svg";
import userIcon from "./assets/user-icon.png";

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
      <div className="chat">
            <img className="chatimg" src={userIcon} alt="GPT-Icon" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit libero facilis laudantium tempore cupiditate recusandae sint culpa dolorum quaerat?
            </p>
          </div>
          <div className="chat bot">
            <img className="chatimg" src={gpt} alt="GPT-Icon" />
            <p className="txt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolore blanditiis itaque odio qui ut commodi, esse repellat provident pariatur, rem excepturi doloremque. Illo est fugit, ut ex praesentium commodi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit libero facilis laudantium tempore cupiditate recusandae sint culpa dolorum quaerat?
            </p>
          </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text"  placeholder="Send a message..."/><button className="send"><img src={sendBtn} alt=""/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
