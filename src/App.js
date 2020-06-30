import React from "react";

import JetskiList from "./components/JetskiList";

//import jetskis from "./jetskis";

import styles from "./styles";

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}>jet ski</h1>;
        <h3 style={styles.text}>Top of the line jet ski</h3>;
        <img
          src="https://i.pinimg.com/474x/85/f9/59/85f959846423744530c10374699535b1--jet-ski-wallpaper-desktop.jpg"
          alt="jet store"
          style={styles.jetImage}
        />
      </div>

      <div style={styles.jetskiList}>
        <JetskiList />
      </div>
    </div>
  );
}

export default App;
