import { Provider } from "./components/ui/provider"
import Routes from './routes/Routes';
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Provider>
        {/* <AlertBox /> */}
        <Routes />
      </Provider>  
    </div>
  );
}

export default App
