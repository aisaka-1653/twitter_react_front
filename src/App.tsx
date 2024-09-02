import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Router } from "./router/Router";
import { Toaster } from "./components/ui/sonner";
import { AxiosClientProvider } from "./providers/AxiosClientProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AxiosClientProvider>
          <Router />
        </AxiosClientProvider>
        <Toaster expand visibleToasts={3} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
