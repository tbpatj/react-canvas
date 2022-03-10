import logo from "./logo.svg";
import "./App.css";
import BackgroundCanvas from "./canvas/components/BackgroundCanvas";
import { drawContext } from "./canvas/drawFuncs/DrawFunc";
import { useContext, useEffect, useState } from "react";
import wsConnect from "./ws/ws";
import { DataContext, DataProvider } from "./context/GlobalData";

function MainApp() {
  const { dispatch } = useContext(DataContext);
  let [wsConnection, setWSConnection] = useState(null);

  useEffect(() => {
    async function webSocket() {
      let socket = await wsConnect(dispatch);
      setWSConnection(socket);
    }
    webSocket();
  }, []);

  return <BackgroundCanvas WSC={wsConnection} draw={drawContext} />;
}

function App() {
  return (
    <DataProvider>
      <div className="App">
        <MainApp />
      </div>
    </DataProvider>
  );
}

export default App;
