import useLocalStorage from 'use-local-storage'
import './App.css'
import Game from './pages/Game'
import Footer from './components/Footer'


import { BsSun as ThemeOff, BsMoonFill as ThemeOn } from 'react-icons/bs'

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <main className='App' data-theme={theme}>
      <div className='button'>
      <button type='button' className='btnTheme' onClick={switchTheme}>{theme === 'light' ? <ThemeOn /> : <ThemeOff /> }</button>
      </div>
      <Game/>
      <Footer/>
    </main>
  );
};

export default App;
