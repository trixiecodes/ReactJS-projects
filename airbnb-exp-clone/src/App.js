import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cards from "./components/CardData"

export default function App() {
    const card = cards.map(cardData => {
        return (
            <Card
            key = {cardData.id}
            // {...cardData} but without the 'cardData' in the Card.js
            cardData = {cardData}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
            {card}
            </section>
        </div>
    )
}