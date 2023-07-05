import { useState } from "react"

const App = () => {
  // 1. Pridanie premnnej
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [users, setUsers] = useState([])

  const formSubmit = (event) => {
    event.preventDefault()

    if( fullName && email ) {
  // 2. pridanie do oneUser
      const oneUser = {fullName: fullName, email: email, age: age}
      setUsers( (users) => {
        return [...users, oneUser]
      })
    } else {
      console.log("Niečo nebolo vyplnené")
    }

  //3. vymazanie po zadaní hodnoty do políčka
    setFullName("")
    setEmail("")
    setAge("")

    


  }



  return <article>
    <form onSubmit={formSubmit}>
    
      <input 
  // 4. pridanie políčok 
        className="userInfo" 
        type="text" 
        placeholder="Meno" 
        value={fullName}  
        onChange={ (event) => setFullName(event.target.value)}    
      />

      <input  
        className="userInfo" 
        type="email" 
        placeholder='Email' 
        value={email}
        onChange={ (event) => setEmail(event.target.value)}
      />

      <input  
        className="userInfo" 
        type="text" 
        placeholder='vek' 
        value={age}
        onChange={ (event) => setAge(event.target.value)}
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