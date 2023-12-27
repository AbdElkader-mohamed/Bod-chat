import SwitchTheme from "../../components/setting/SwitchTheme";
import useSettings from "../../hooks/useSettings";

const ToggleMode = () => {
  const { onToggleTheme } = useSettings();

  return <SwitchTheme onChange={() => onToggleTheme()} defaultChecked />;
};

export default ToggleMode;
