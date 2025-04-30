import { ThemeProvider } from './components/theme-provider';
import SPA from './pages/SPA';

function App() {
  return (
    <ThemeProvider>
      <SPA />
    </ThemeProvider>
  );
}

export default App;
