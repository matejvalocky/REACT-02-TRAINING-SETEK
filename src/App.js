import { useState } from "react"





// REST OPERATOR
const sum = (...allNumbers) => {
  let result = 0
  for (const oneNumber of allNumbers){
    // console.log(oneNumber)
    // result = result + oneNumber
    result += oneNumber
  }
  return result
}



// je jedno koľko čísel tam pošleme, vždy to vezme všetky, funguje
// to univerzálne = REST OPERATOR
console.log(sum(1, 2))
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 5, 10))
console.log(sum(1, 2, 10, 10, 10))



































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

    setFirstName("")



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
      return <p className="item" key={index}>{oneName}</p>
    })}




    <a href="https://youtu.be/B97fzZwqSHU?list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl" target='_blank'>Odkaz na video</a>
  </article>
}

export default App