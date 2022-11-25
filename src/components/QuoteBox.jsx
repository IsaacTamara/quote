import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, getNewValues, backgroundObject, colorObject}) => {

  return (
    <article className='quoteBox'>   
      <section className='quoteBox-quote'>
        <i style={colorObject} class='bx bxs-quote-left'></i>
        <h1 style={colorObject}>{quote.quote}</h1>        
      </section>   
      <p style={colorObject}>{quote.author}</p>
      

      <section className='quoteBox-footer'>
        <QuoteButton 
          getNewValues={getNewValues}
          backgroundObject={backgroundObject}
        />       
      </section>
      
    </article>
  )
}

export default QuoteBox
