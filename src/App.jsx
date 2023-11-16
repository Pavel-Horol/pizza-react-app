
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";


function App() {
  	return (
    	<div className="wrapper">			
				<Header />
    			<div className="content">
				<Routes>
					<Route path='/pizza-react-app/' element={<Home />}/>
					<Route path='/pizza-react-app/cart' element={<Cart/>}/>
					<Route path='/pizza-react-app/pizza/:id' element={<FullPizza/>}/>
					<Route path='/pizza-react-app/*' element={<NotFound/>}/>
				</Routes>
    			</div>
  		</div>
  	);
}

export default App;
