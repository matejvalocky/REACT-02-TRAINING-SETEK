import { useState } from "react"

const App = () => {
  const [firstName, setFirstName] = useState("")


  const formSubmit = (event) => {
    event.preventDefault(); // vypnutie refreshu pri zadaní hodnoty do formulara a stlačení submit
    console.log("Formuár bol odoslaný");
    console.log(firstName);

  }



  return <article>
    <form>
        <input className='userName' 
          type="text" 
          placeholder='Meno' 
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input onClick={formSubmit} type="submit" value="Registrovať sa" />
    </form>
    <a href="https://youtu.be/-hDaROLnyr4?list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl" target='_blank'>Odkaz na video</a>
  </article>
}

export default App