import { Root } from "./components/pages/Signup";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Root />
    </ThemeProvider>
  );
}

export default App;
