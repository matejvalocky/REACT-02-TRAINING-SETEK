import { useState } from "react"

const App = () => {
  const [firstName, setFirstName] = useState("")
  const [names, setNames] = useState([])

  


  const formSubmit = (event) => {
    event.preventDefault(); // vypnutie refreshu pri zadaní hodnoty do formulara a stlačení submit
    console.log("Formuár bol odoslaný");
    

    if (firstName) {
      setNames((names) => {
        return [...names, firstName] // ... je spread operator a vezme to, čo má v names a pridá to k firstName
      })
    } else {
      console.log("Nebolo nič vyplnené")
    }

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



    {names.map((oneName, index) => {
      return <p key={index}>{oneName}</p>
    })}




    <a href="https://youtu.be/qjGzq4Zfn3o?list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl" target='_blank'>Odkaz na video</a>
  </article>
}

export default App