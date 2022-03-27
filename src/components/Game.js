import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Game(props) {
  const { setpage, HOME, setgameState, gameState } = props;
  const deckOfCards = [
    { suit: "star", value: 1 },
    { suit: "star", value: 2 },
    { suit: "star", value: 3 },
    { suit: "star", value: 4 },
    { suit: "star", value: 5 },
    { suit: "star", value: 6 },
    { suit: "star", value: 7 },
    { suit: "star", value: 8 },
    { suit: "star", value: 9 },
    { suit: "star", value: 10 },
    { suit: "star", value: 11 },
    { suit: "star", value: 12 },
    { suit: "star", value: 13 },
    { suit: "light", value: 1 },
    { suit: "light", value: 2 },
    { suit: "light", value: 3 },
    { suit: "light", value: 4 },
    { suit: "light", value: 5 },
    { suit: "light", value: 6 },
    { suit: "light", value: 7 },
    { suit: "light", value: 8 },
    { suit: "light", value: 9 },
    { suit: "light", value: 10 },
    { suit: "light", value: 11 },
    { suit: "light", value: 12 },
    { suit: "light", value: 13 },
    { suit: "fire", value: 1 },
    { suit: "fire", value: 2 },
    { suit: "fire", value: 3 },
    { suit: "fire", value: 4 },
    { suit: "fire", value: 5 },
    { suit: "fire", value: 6 },
    { suit: "fire", value: 7 },
    { suit: "fire", value: 8 },
    { suit: "fire", value: 9 },
    { suit: "fire", value: 10 },
    { suit: "fire", value: 11 },
    { suit: "fire", value: 12 },
    { suit: "fire", value: 13 },
    { suit: "water", value: 1 },
    { suit: "water", value: 2 },
    { suit: "water", value: 3 },
    { suit: "water", value: 4 },
    { suit: "water", value: 5 },
    { suit: "water", value: 6 },
    { suit: "water", value: 7 },
    { suit: "water", value: 8 },
    { suit: "water", value: 9 },
    { suit: "water", value: 10 },
    { suit: "water", value: 11 },
    { suit: "water", value: 12 },
    { suit: "water", value: 13 },
  ];

  function shuffleArray(array) {
    // console.log(`dati: ${array}`);
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // console.log(`ngayon: ${array}`);
    return array;
  }

  // useEffect(() => {
  // 	let str = "";
  // 	["star", "light", "fire", "water"].map((suit) => {
  // 		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((value) => {
  // 			str += `{suit:"${suit}",value:${value}},`;
  // 		});
  // 	});
  // 	console.log(`[${str}]`);
  // }, []);

  const [deck, setdeck] = useState(shuffleArray(deckOfCards));
  const [graveyardDeck, setgraveyardDeck] = useState([]);
  const [cards, setcards] = useState([]);
  const [score, setscore] = useState(0);
  const [round, setround] = useState(1);
  const [choiceMade, setchoiceMade] = useState(false);
  const [cardsIdentical, setcardsIdentical] = useState(false);
  const [render, setrender] = useState(false);
  const [scoreCSS, setscoreCSS] = useState("");
  const [gameOver, setgameOver] = useState(false);
  // const [flip, setflip] = useState(false);

  //initial load
  useEffect(() => {
    if (gameState) {
      // console.log(deck);
      let newDeck = deck;
      let newCards = cards;
      cards.push(deck.pop());
      cards.push(deck.pop());
      cards.push(deck.pop());
      setdeck(newDeck);
      setcards(newCards);
      setgameState(false);
    }
  }, []);

  // useEffect(() => {
  //   // console.log(deck);
  // }, [deck]);
  useEffect(() => {
    // console.log(`cards ${JSON.stringify(cards)}`);
    setrender(true);
    if (render) {
      setcardsIdentical(cards[0].value === cards[1].value);
    }
  }, [cards]);
  // useEffect(() => {
  // 	console.log(cards);
  // 	if (render) {
  // 		setcardsIdentical(cards[0].value === cards[1].value);
  // 		// setcardsIdentical(1 === 1);
  // 	}
  // }, [render]);

  // function handleckic() {
  //   console.log(deck);
  //   let newDeck = deck;
  //   let newCards = cards;
  //   cards.push(deck.pop());
  //   cards.push(deck.pop());
  //   setdeck(newDeck);
  //   setcards(newCards);
  // }

  // function checkdeck() {
  //   console.log(deck);
  // }
  // function checkcards() {
  //   console.log(cards);
  // }
  function deal() {
    dealer("deal");
  }
  function noDeal() {
    dealer("nodeal");
  }
  function higher() {
    dealer("higher");
  }
  function lower() {
    dealer("lower");
  }

  // function dealOrNoDeal(str) {
  //   const inBetween =
  //     (cards[0].value < cards[2].value && cards[1].value > cards[2].value) ||
  //     (cards[0].value > cards[2].value && cards[1].value < cards[2].value);
  //   let newScore = score;
  //   console.log(inBetween);
  //   switch (str) {
  //     case "deal":
  //       // deal

  //       // dapat true
  //       if (inBetween) {
  //         newScore += 69 * round;
  //       } else {
  //         newScore /= 2;
  //       }
  //       break;
  //     case "nodeal":
  //       // no deal
  //       // dapat false
  //       if (!inBetween) {
  //         newScore += 69 * round;
  //       } else {
  //         newScore /= 2;
  //       }
  //       break;
  //       default:console.error('Something went wrong using dealOrNoDeal function');
  //   }
  //   choiceHasBeenMade(newScore);
  // }

  function dealer(str) {
    const higher = cards[0].value < cards[2].value;
    const inBetween =
      (cards[0].value < cards[2].value && cards[1].value > cards[2].value) ||
      (cards[0].value > cards[2].value && cards[1].value < cards[2].value);
    let newScore = score;
    // console.log(inBetween);
    // console.log(higher);
    let condition;
    switch (str) {
      case "higher":
        condition = higher;
        break;
      case "lower":
        condition = !higher;
        break;
      case "deal":
        condition = inBetween;
        break;
      case "nodeal":
        condition = !inBetween;
        break;
      default:
        console.error("Something went wrong in using dealer function");
    }
    if (condition) {
      newScore += 69 * round;
      setscoreCSS("green");
      // console.log("green css");
    } else {
      newScore /= 2;
      setscoreCSS("red");
      // console.log("red css");
    }
    choiceHasBeenMade(newScore);
    if (round === 5) setgameOver(true);
  }

  // useEffect(() => {
  //   console.log(scoreCSS);
  // }, [scoreCSS]);

  function choiceHasBeenMade(score) {
    setscore(score);
    setchoiceMade(true);
  }

  function nextRound() {
    let newCards = cards;
    let newDeck = deck;
    let newgraveyardDeck = graveyardDeck;
    let newRound = round + 1;

    // kunin unang card sa cards tapos lagay sa graveyard
    newgraveyardDeck.push(newCards.shift());
    // console.error(graveyardDeck);
    // kuha ng bagong card mula sa deck
    newCards.push(newDeck.pop());

    setcards(newCards);
    setdeck(newDeck);
    setchoiceMade(newgraveyardDeck);
    setchoiceMade(false);
    setround(newRound);
    setgraveyardDeck(newgraveyardDeck);
    setcardsIdentical(cards[0].value === cards[1].value);
    setscoreCSS("");
  }

  return (

    <div>
      <button className="exit-button margin-top-left" onClick={() => setpage(HOME)}>
        <img className="back-icon" src={require("./assets/back-icon.png")}>

        </img>
      </button>

      
      <div className={`${gameOver ? `unscroll` : ""}`}>
        {gameOver && (
          <>
            <div className="gameover-bg"></div>
            <div className="gameover">
              <h1>Game Over</h1> <h6>Thank you for playing</h6> <h3>Your Score: {score}</h3>
              <button class="exit-button" onClick={() => setpage(HOME)}>Exit Game</button>
            </div>
          </>
        )}

        
        <div className="main-container">
          {/* {" "}
        <button onClick={handleckic}>click</button>{" "}
        <button onClick={checkdeck}>check deck</button>{" "}
        <button onClick={checkcards}>check cards</button>{" "} */}

        {cardsIdentical ? <h1>Higher or Lower?</h1> : <h1>In-Between Card Game</h1>}
          <div className="scoreNRound">
            <span className={`${scoreCSS && scoreCSS}`}>Score: {score}</span>
            <span>Round: {round}</span>
          </div>

          


          
          <div className="cards inb">
            {/* {cards.length} */}
            {render &&
              cards.length > 2 &&
              cards.map((card, i) => {
                // console.log(card);
                return (
                  <div key={i}>

                    <Card
                      suit={card.suit}
                      value={card.value}

                      flip={i === 2 ? choiceMade : true}

                    />
                  </div>
                );
              })}
          </div>
          <div className="buttons">
            {choiceMade ? (
              <button className="inside-button" onClick={nextRound}>Next Round</button>
            ) : cardsIdentical ? (
              <>

                <button className="inside-button" onClick={higher}>Higher</button>
                <button className="inside-button" onClick={lower}>Lower</button>
              </>
            ) : (
              <>

                <button className="inside-button" onClick={deal}>Deal</button>
                <button className="inside-button" onClick={noDeal}>No Deal</button>
              </>
            )}
          </div>
          <div className="cards graveyard">
            {graveyardDeck.length > 0 &&
              graveyardDeck.map((card, i) => {
                return (
                  <div key={i}>
                    {/* Card: {card.suit} Value: {card.value} */}
                    {/* index  {i} */}
                    <Card
                      suit={card.suit}
                      value={card.value}
                      //   flip={i === 2 && flip}
                      flip={true}
                      // show={choiceMade}
                    />
                  </div>
                );
              })}
          </div>
          
        </div>
      </div>

    </div>
  );
}
