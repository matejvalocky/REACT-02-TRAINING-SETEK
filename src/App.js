import React from 'react'

const App = () => {
  const formSubmit = (event) => {
    event.preventDefault() // vypnutie refreshu pri zadaní hodnoty do formulara a stlačení submit
    console.log("Formuár bol odoslaný");
  }



  return <article>
    <form>
        <input className='userName' type="text" id='userName' placeholder='Meno' />
        <input onClick={formSubmit} type="submit" value="Registrovať sa" />
    </form>
    <a href="https://youtu.be/YgIu54eSMRo?list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl" target='_blank'>Odkaz na video</a>
  </article>
}

export default App