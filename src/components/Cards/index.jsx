import React, { useEffect, useState } from 'react'
import './styles.css'
import DeckOfCards from '../../../Cards';




function index() {
  
  const bgCard = '../../../img/bgcard.png'

  const [cards, setCards] = useState()

  useEffect(() => {
   let randomCards = window.onload = () => DeckOfCards.sort(() => 0.12 - Math.random())
    setCards(randomCards)
  },[])
  console.log(cards)


  return (
    <section className='gridCards'>
      {cards !== undefined && cards.map((index) => {
        return (
          <img src={bgCard} alt="card" key={index.id} className="cards" onClick={(e) => console.log(e.target)}/>
        )
        })}
    </section>
  )
}

export default index