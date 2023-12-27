import Router from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";

import "./sass/style-lightTheme.scss";

import "./sass/style-darkTheme.scss";

import useSettings from "./hooks/useSettings";

function App() {
  const { themeMode } = useSettings();
  return (
    <main className={themeMode}>
      <Router />
    </main>
  );
}

export default App;
