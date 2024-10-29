import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content_page from './Content_page';
import Cart_page from './cart_page';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content_page/>
      <Cart_page/>
    </div>
  );
}

export default App;
