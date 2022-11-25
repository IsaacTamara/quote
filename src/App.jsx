import QuoteButton from "./components/QuoteButton"
import QuoteDB from "./db/Quotes.json" 
import ColorsDB from "./db/Colors.js"
import { useState } from "react"
import QuoteBox from "./components/QuoteBox"

function App() {


  const getRandom = (array) => {
    const randomIndex = Math.floor(array.length*Math.random())
    return array[randomIndex]
  }
  
  const getNewValues = () => {
    const newQuote = getRandom(QuoteDB)
    const newColor = getRandom(ColorsDB)
    setQuote(newQuote)
    setColor(newColor)
  }

  const [quote, setQuote] = useState(getRandom(QuoteDB))
  const [color, setColor] = useState(getRandom(ColorsDB))

  const backgroundObject = {
    backgroundColor: color
  }

  const colorObject = {
    color: color
  }
  
  return (
    <div className="App" style={backgroundObject}>
      <QuoteBox 
        quote={quote} 
        getNewValues={getNewValues}
        backgroundObject={backgroundObject}
        colorObject={colorObject}
      />      
    </div>
  )
}

export default App
