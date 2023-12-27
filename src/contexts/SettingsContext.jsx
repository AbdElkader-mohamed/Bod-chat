import { createContext } from "react";
import { defaultSettings } from "../config";
import useLocalStorage from "../hooks/useLocalStorage";
import PropTypes from "prop-types";

const initialState = {
  ...defaultSettings,

  onToggleMode: () => {}
};
const SettingsContext = createContext(initialState);

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode
  });

  const onToggleTheme = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light"
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleTheme
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

SettingsProvider.propTypes = {
  children: PropTypes.object
};

export { SettingsContext };

export default SettingsProvider;
