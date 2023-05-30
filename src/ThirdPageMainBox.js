import "./ThirdPageMainBox.css"

function ThirdPageMainBox()
{
    return(
        <div className="container">

            <div className="topDiv">

                <img src="shopping.png"></img>

                <nav className="topDivNav">

                    <a className="sellOnShopping"> sell on shopping</a>
                    <a className="register">Register</a>
                    <input type="text" placeholder="Search..."></input>
                    <a className="consumerElectronics">Consumer Electronics</a>
                    <a className="signIn">Sign In</a>
                    <a className="myCart">My Cart</a>
                    
                    
                </nav>
            </div>
            <div className="secondTopDiv">
                
                    <nav>
                        <a className="link">Clothing & Shoes</a>
                        <a className="link">Entertainment</a>
                        <a className="link">Music</a>
                        <a className="link">Sport & LifeStyle</a>
                        <a className="link">Pets</a>
                        <a className="link">Kitchen Accessories</a>
                        <a className="link">Travel Equipment</a>
                        <a className="link">Growing & Garden</a>
                        <a className="link">Electrical Tools</a>
                        <a className="link">Mother Care</a>
                        <a className="link">Toys & Entertainment</a>
                        <a className="link">Vintage</a>
                        
                    </nav>
                
            </div>

            <div className="boxes">
                <div className="sideDiv">

                    
                    <select id="department">
                    <option value=" " defaultChecked>Select</option>
                    <option value="clothing" name="clothing">Clothing & Shoes</option>
                    <option value="entertainment" name="entertainment">Entertainment</option>
                    <option value="music" name="music">Music</option>
                    <option value="sport" name="entertainment">Sport & LifeStyle</option>
                    <option value="pets" name="pets">Pets</option>
                    
                    <option value="kitchen" name="kitchen">Kitchen Accessories</option>
                    <option value="travel" name="travel">Travel Equipment</option>
                    <option value="growing" name="growing">Growing & Garden</option>
                    <option value="electrical" name="electrical">Electrical Tools</option>
                    <option value="mother" name="mother">Mother Care</option>
                    <option value="toys" name="toys">Toys & Entertainment</option>
                    <option value="vintage" name="vintage">Vintage</option>
                    
                    </select>
  


                </div>
            <div className="imagesDiv">
            <div className="firstRow">
                <div className="image">
                    <img src="keyboard.png" alt="image"></img>
                    <p>Vintage Typewriter to post awesome stories about UI design and webdev</p>
                    <p className="price">$49.50</p>
                    <p className="description">Eligible for shipping To Mars or somewhere else</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                <div className="image">
                    <img src="shoes.png" alt="image"></img>
                    <p>Lee Pucker design, Leather botinki for handsome designers. Free shipping</p>
                    <p className="price">$13.95</p>
                    <p className="description">1258 bids, 359 watchers $5.95 for shipping</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                <div className="image">
                    <img src="cat.png" alt="image"></img>
                    <p>Timesaving kitten to save months on development. Playful, cute, cheap!</p>
                    <p className="price">$128.99</p>
                    <p className="description">Eligible for nothing! but you can still try it.</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                <div className="image">
                    <img src="toys.png" alt="image"></img>
                    <p>Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!</p>
                    <p className="price">$12.48</p>
                    <p className="description">Worldwide shipping available Buyers protection possible!</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                
            </div>

            <div className="secondRow">
                <div className="image">
                    <img src="bottles.png" alt="image"></img>
                    <p>Creativity simulating lotion. Drink every morning to generate better ideas!</p>
                    <p className="price">$12.48</p>
                    <p className="description">Worldwide shipping available Buyers protection possible!</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                <div className="image">
                    <img src="cardsImages.png" alt="image"></img>
                    <p>Prototyping items to create a lot if useless things...</p>
                    <p className="price">$128.99</p>
                    <p className="description">Showcasing onHovered state</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                <div className="image">
                    <img src="pants.png" alt="image"></img>
                    <p>John Von Ebalkin SPRING, easy fit slim pants.</p>
                    <p className="price">$13.95</p>
                    <p className="description">1258 bids, 359 watchers $5.95 for shipping</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                <div className="image">
                    <img src="wishesCards.png" alt="image"></img>
                    <p>Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY</p>
                    <p className="price">$9.50</p>
                    <p className="description">Eligible for shipping To Mars or somewhere else</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                
            </div>

            <div className="thirdRow">
                <div className="image">
                    <img src="teaJars.png" alt="image"></img>
                    <p>Professional teadrinking set for every designer and developer</p>
                    <p className="price">$128.99</p>
                    <p className="description">Eligible for nothing! but you can still try it.</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                <div className="image">
                    <img src="tree.png" alt="image"></img>
                    <p>One string Bonsal description, great experience to have this!</p>
                    <p className="price">$11.68</p>
                    <p className="description">Worldwide shipping available Buyers protection possible!</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                <div className="image">
                    <img src="lipstick.png" alt="image"></img>
                    <p>Simply best item in town to shine bright with your Nine Inch Nails</p>
                    <p className="price">$1.25</p>
                    <p className="description">Eligible for shipping To Mars or somewhere else</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                </div>
                <div className="image">
                    <img src="brushes.png" alt="brushes image"></img>
                    <p>KISTOCHKI & KRASIBO. Top cosemetics brand from </p>
                    <p className="price">$23.25</p>
                    <p className="description">1258 bids, 359 watchers $5.95 for shipping</p>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <a href="Watch" className="watch">Watch</a>
                    
                    
                    
                </div>
                </div>    
            </div>
            </div>
        </div>

    );
}

export default ThirdPageMainBox;