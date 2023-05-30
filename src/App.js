import logo from './logo.svg';
import './App.css';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ThirdPageMainBox from './ThirdPageMainBox';
import ThirdPageFirstHeader from './ThirdPageFirstHeader';


function App() {
  return (
    <div className='mainDiv'>
            {/* <div className='twoDivInOne' >
              <div className='circle'>

              </div>
              <div className="firstDiv">
              <h1>CCA Cockpit</h1>
              <p>powered by ETAP</p>
              </div>
              
            </div>

          <div className="secondDiv">
            <form>
              
              <input className='input1' type="email" required placeholder='Email / SSO Id'></input>
              <br></br>
              <input className='input2' type="email" required placeholder='Password'></input>
            </form>
          </div>

          <div className="thirdDiv">
            <button>Log In</button>
          </div> */}

          
          {/* <SecondPage/> */}
          {/* <ThirdPage/> */}
          {/* <ThirdPageFirstHeader/> */}
         
          <ThirdPageMainBox/>
          
    </div>
  );
}

export default App;
