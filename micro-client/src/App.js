import React, { lazy, Suspense } from "react";
import "./styles.css";

const FirstApp = lazy(() => import("FIRST_APP/app"));
const FirstHome = lazy(() => import("FIRST_APP/home"));

const App = () => {
  const [name, setName] = React.useState(null);

  return (
    <div className="App">
      <h1>This is second app</h1>
      <h2>Micro host app is integrated here</h2>
      {name ? <p>Your name is: {name}</p> : null}
      <div>
        <Suspense fallback={<span>Loading...</span>}>
          <FirstApp onChange={(e) => setName(e.target.value)} />
          <FirstHome />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
