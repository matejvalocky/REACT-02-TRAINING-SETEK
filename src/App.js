import { useState } from "react"

const App = () => {
  const[fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const[users, setUsers] = useState([])

  const formSubmit = (event) => {
    event.preventDefault()
    console.log("form bol odoslaný")
  }



  return <article>
    <form onSubmit={formSubmit}>
      <input className="userInfo" type="text" placeholder="Meno" />
      <input className="userInfo" type="email" placeholder='Email' />
      <input type="submit" />
    </form>
  </article>
  
}


export default App