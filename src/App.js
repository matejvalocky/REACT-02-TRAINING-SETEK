import { useState } from "react"

const App = () => {
  // 1. Pridanie premnnej


  // const [fullName, setFullName] = useState("")
  // const [email, setEmail] = useState("")
  // const [age, setAge] = useState("")

  const [oneUser, setOneUser] = useState ({fullName: "", email: "", age: ""}) //vcucnutie troch riadkov do jedného

  const [users, setUsers] = useState([])

  const formChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    // console.log(name, value)

    setOneUser({...oneUser, [name]: value })
  }

  const formSubmit = (event) => {
    event.preventDefault()

    if(oneUser.fullName && oneUser.email && oneUser.age) {
  // 2. pridanie do oneUser
      const newUser = {fullName: oneUser.fullName, email: oneUser.email, age: oneUser.age}
      setUsers( (users) => {
        return [...users, newUser]
      })
    } else {
      console.log("Niečo nebolo vyplnené")
    }

  //3. vymazanie po zadaní hodnoty do políčka
    // setFullName("")
    // setEmail("")
    // setAge("")

    


  }



  return <article>
    <form onSubmit={formSubmit}>
    
      <input 
  // 4. pridanie políčok 
        className="userInfo" 
        type="text" 
        placeholder="Meno" 
        value={oneUser.fullName}  
        onChange={formChange}   
        name="fullName"
      />

      <input  
        className="userInfo" 
        type="email" 
        placeholder='Email' 
        value={oneUser.email}
        onChange={formChange}  
        name="email" 
      />

      <input  
        className="userInfo" 
        type="text" 
        placeholder='vek' 
        value={oneUser.age}
        onChange={formChange}  
        name="age" 
      />

      <input type="submit" />
    </form>

    {users.map( (oneUser, index) => {
      const {fullName, email, age} = oneUser

      return <div className="item" key={index}>
        <h4>{fullName}</h4>
        <p>{email}</p>
        <p>{age}</p>
      </div>
    })}


  </article>
  
}


export default App