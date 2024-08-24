import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Router } from "./router/Router";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Router />
        <Toaster expand visibleToasts={3} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
