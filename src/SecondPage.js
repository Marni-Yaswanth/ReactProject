import "./SecondPage.css"

function SecondPage()
{
    return(
        <div class="mainDiv">
            <div className='DivInOne' >
              <div className='circleInSecond'>

              </div>
              <div className="Div1">
              <h1>CCA Cockpit</h1>
              <p>powered by ETAP</p>
              </div>
              
            </div>
            

            <div className="Div2">
                <h2>You have successfully Logged out,Thank You !</h2>
                
            </div>

            <div className="Div3">
                <button><a>Go Back To Login</a></button>

            </div>
        </div>
    );
}

export default SecondPage;