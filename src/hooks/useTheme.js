import { useTheme } from '../context/ThemeContext';

const useThemeHook = () => {
  const theme = useTheme();
  
  return theme;
};

export default useThemeHook;