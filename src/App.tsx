import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import AuthRoute from "./components/AuthRoute";
import Player from "./components/Player";
import { Main } from "./App.style";

function App() {
  // 重写 localStorage.setItem
  var originalSetItem = localStorage.setItem;
  localStorage.setItem = function (key, newValue) {
    var setItemEvent: any = new Event("setItemEvent");
    setItemEvent.newValue = newValue;
    originalSetItem.apply(this, [key, newValue]);
    window.dispatchEvent(setItemEvent);
  };

  return (
    <>
      <Header />
      <Main>
        <Switch>
          {routes.map((item) => {
            if (item.meta && item.meta.isAuth) {
              return <AuthRoute key={item.name} {...item} />;
            } else {
              return <Route exact key={item.name} {...item} />;
            }
          })}
        </Switch>
        <Player />
      </Main>
    </>
  );
}

export default App;
