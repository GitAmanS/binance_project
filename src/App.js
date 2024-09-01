
import './App.css';
import BinanceFuturesPage from './BinanceFuturesPage.js';
function App() {
  return (
    <div className="App bg-gray-800 px-16 py-4">

        <div className="" style={{marginBottom: '-20px'}}>
          <img src="./binlogo.png" alt="Logo" className="h-32" />
        </div>
      <BinanceFuturesPage/>
      
        {/* <div className="absolute bottom-0 right-0 opacity-20">
          <img src="/background.png" alt="Rocket" className="h-100" />
        </div> */}
    </div>
  );
}

export default App;
