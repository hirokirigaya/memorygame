import React, { useEffect, useState, useRef } from 'react'
import './styles.css'
import DeckOfCards from '../../../Cards'

function index(props) {
  const bgCard = './img/bgcard.png'

  const [cards, setCards] = useState()

  useEffect(() => {
    // randomCards when it start page
    let randomCards = (window.onload = () =>
      DeckOfCards.sort(() => 0.12 - Math.random()))
    setCards(randomCards)
  }, [])

  let [selected, setSelected] = useState([])
  let img = useRef()

  return (
    <section className="gridCards">
      {cards !== undefined &&
        cards.map((card) => {
          //pickup Card clicked
          const selectedCard = (e) => {
            const selectCard = e.target
            if(selected.length == 2) {return}
            selectCard.src = card.img
            selectCard.style = 'pointer-events: none'
            selected.push(selectCard)

            console.log(selected)


            if (selected.length === 2) {
              let card1 = selected[0]
              let card2 = selected[1]

              if (card1.id == card.parent) {
                card1.src = card1.src
                card2.src = card2.src
                setSelected((selected = []))
                props.setGotItRight((oldstate) => [...oldstate, card1])
              } else {
                setTimeout(() => {
                  card1.src = bgCard
                  card2.src = bgCard
                  card1.style = 'pointer-events: all'
                  card2.style = 'pointer-events: all'
                  setSelected((selected = []))
                }, 1000)
              }
            }
          }

          return (
            <img
              src={bgCard}
              alt="card"
              key={card.id}
              className={props.status === 1 ? 'cards' : 'cardsOff'}
              onClick={(e) => selectedCard(e)}
              id={card.id}
              draggable={false}
              ref={img}
            />
          )
        })}
    </section>
  )
}

export default index
