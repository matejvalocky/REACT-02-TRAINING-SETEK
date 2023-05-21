import { useState } from "react"





// SPREAD OPERATOR 
// toto dokáže:
// Spájanie polí

// const studentsGroup = ["David", "Jana", "Martina"]
// const allStudents = ["Harry", "Ron", ...studentsGroup, "Hermiona"]
// console.log(allStudents)
//

// ARGUMENTY FUNKCII
// vynásobí všetky prvky v poli
// const numbers = [1, 5, 3]

// const multipleNumbers = (a, b, c) => {
//   console.log(a * b * c)
// }

// multipleNumbers(1, 2, 3)
// multipleNumbers(...numbers) 

// const App = () => {
//   const [firstName, setFirstName] = useState("")
//   const [names, setNames] = useState([])
//


// KOPIROVANIE POLI
// const students1 = ["Jan", "Monika", "Dalibor"]
// const students2 = students1
// console.log(students2)

//pridaj posledný prvok
// students2.push("Pavol")
// console.log(students2)

// console.log(students1) 
// aj s Pavlom // urobili sme odkaz zo students 2 na students1

// const students3 = ["Jan", "Monika", "Dalibor"]
// const students4 = [...students3]


// students4.push("Pavol")

// console.log(students3)
// // vypise bez Pavla

// console.log(students4) 
// // vypise s Pavlom



// SPOJOVANIE POLI = CONCATENATE = chceme ich spojit dokopy
// const names1 = ["David", "Martin"]
// const names2 = ["Jana", "Pavla"]

// const newArray1 = names1.concat(names2)

// console.log(newArray1) // vypíše David, Martin, Jana, Pavla

// const newArray2 = [...names1, "Dana", ...names2]
// // newArray2.push("Teodor")
// // console.log(newArray1)
// console.log(newArray2)



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




    <a href="https://youtu.be/qLoxxy1M2W4?list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl" target='_blank'>Odkaz na video</a>
  </article>
}

export default App