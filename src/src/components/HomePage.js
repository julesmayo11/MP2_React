import React from "react";
import './css/HomePage.css'
import authors from '../util/authors'


export default function HomePage(props) {
  const { setpage, setgameState } = props;
  function play() {
    setgameState(true);
    setpage("game");
  }
  return (
    <div>
      <div className="header-wrapper">
            <h2>MP2 - In-Between Game</h2>
      </div>

      <div className="header-container">
        <div className= "row">
          <div class="col-6">
            <img className="author-pics jules-pic" src={require("./assets/mypic.jpeg")} alt="my-pic"/>
          </div>
          <div class="col-6">
            <img className="author-pics" src={require("./assets/ash-pic.jpg")} alt="ash-pic"/>
          </div>
        </div>

          <h5 className="line-authors">
            Authors: {authors.author_1} and {authors.author_2}
          </h5>
          
          
      </div>

      <div className="how-to-play">
        <h3 className="left-align" >TASKS</h3>
      </div>
      

        

      <div className="main-container">



        <ul>
          <li>The game shall have five rounds of plays. </li>
          <li>The game shall randomly draw TWO numbers  (1, 2, 3….13)</li>
          <li>The program shall allow the user to choose to “Deal” or “No Deal” after the first two numbers are revealed.</li>
          <li>Show the third number only AFTER the user choose an option of “Deal” or “No Deal”</li>
          <li>(The two cards are <b>NOT identical</b>) </li>
          <ul className="indent">
            <li>The player has the option to choose between DEAL or NO DEAL.</li>
            <li>
              If the user chose DEAL - the player WINS the game if the THIRD number is in-between 
              the first two drawn numbers. Otherwise, the player LOSES. 
            </li>
            <li>
              <b>WIN:</b> Add one point to the total score.  
            </li>
            <li>
              <b>LOSE:</b> Deduct one point to the total score. 
            </li>
            <li>
              When the user chooses NO DEAL, deduct half points to the total score.
            </li>
          </ul>
          <li>(The two cards are <b>identical</b>)</li>
          <ul className="indent">
            <li>
              If the two randomized numbers are identical, the player has the option to choose between HIGHER or LOWER. 
            </li>
            <li>
              If the user chose HIGHER - the player  WINS the game if the THIRD number is higher than the first two identical drawn numbers. Otherwise, the player LOSES.
            </li>
            <li>
              If the user chose LOWER- the player WINS the game if the THIRD number is higher than the first two identical drawn cards. Otherwise, the player LOSES. 
            </li>
            <li>
              If the third randomized number is the same as the first two numbers, it is considered as a loss. 
            </li>
            <li>
              <b>WIN:</b> Add one point to the total score.  
            </li>
            <li>
              <b>LOSE:</b> Deduct one point to the total score. 
            </li>

          </ul>

        </ul>
        

        

        
      </div>

      {/*button*/}
      <center><button className = "play-button" onClick={play}>Play</button></center>
    </div>
  );
}
