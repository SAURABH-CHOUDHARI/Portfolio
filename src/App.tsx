import { ThemeProvider } from './components/theme-provider';
import SPA from './pages/SPA';

function App() {
  return (
    <ThemeProvider>
      <div className='bg-black'>
      <SPA />
      </div>
    </ThemeProvider>
  );
}

export default App;
