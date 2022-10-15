import logo from './logo.svg';
import './App.css';
import {User} from "./components/User"

function App() {
	return (
		<div className="App">
			<div className="purple-background"></div>
			<div>
				<img src={logo}/>
				<User/>
			</div>
		</div>
	);
}

export default App;