import React from "react";
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }
  function submit() {
    var lower = search.toLowerCase();
    switch (lower) {
      case "grassroots":
        window.location = "https://en.wikipedia.org/wiki/Grassroots";
        break;
      case "volunteering":
        window.location = "https://en.wikipedia.org/wiki/Volunteering";
        break;
      case "mohandas karamchand gandhi":
        window.location = "https://en.wikipedia.org/wiki/Mahatma_Gandhi";
        break;
      case "julian assange":
        window.location = "https://en.wikipedia.org/wiki/Julian_Assange";
        break;
      case "nelson mandela":
        window.location = "https://en.wikipedia.org/wiki/Nelson_Mandela";
        break;
      default:
        window.location = "https://www.google.com/search?q=" + lower;
    }
  }
  function handleKeypress(e) {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      submit();
    }
  }

  return (
    <div>
      <nav>
        <a href="#">Gmail</a>
        <a href="#">Images</a>
        <img src="img/g-menu.PNG" alt="google-menu" />
        <button>Sign in</button>
      </nav>
      <section className="section-1">
        <img src="img/logo.png" className="logo" alt="logo" />
        <br></br>
        <div className="s-box">
          <img src="img/search.svg" className="search-icon" alt="search" />
          <input
            type="text"
            className="s-input"
            onChange={handleChange}
            onKeyDown={handleKeypress}
          />
          <img src="img/vs.png" className="vs-icon" alt="vs-icon" />
          <input type="submit" className="s-btn" value="Google Search" />
          <input type="submit" className="s-btn" value="I'm Feeling Lucky" />
        </div>
        <div className="lang">
          Google offered in
          <a href="#">Enlish</a>
          <a href="#">Telugu</a>
          <a href="#">Hindi</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
