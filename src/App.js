import './App.css';
import HeaderComponent from './components/HeaderComponent'
import DashboardComponent from './components/DashboardComponent'
import MenuComponent from './components/MenuComponent'
import BodyComponent from './components/BodyComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <DashboardComponent/>
      <MenuComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
