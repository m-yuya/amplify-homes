import './App.css';
import { NewHomes, NavBar, MarketingFooter, HeroLayout1 } from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"}/>
      <HeroLayout1/>
      <MarketingFooter width={"100vw"}/>
    </div>
  );
}

export default App;