import './w3.css';
import Main from './Components/Main'
import Footer from './Components/Footer'
import Aside from './Components/Aside'


function App() {
  return (
    <div className="w3-light-grey">
      <div className='w3-content w3-margin-top' style={{maxwidth:'1400px'}}>
        <div className='w3-row-padding'>
        <Aside/>
        <Main/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
