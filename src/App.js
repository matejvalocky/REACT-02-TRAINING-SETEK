import { useState } from "react"

const App = () => {
  const[fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const[users, setUsers] = useState([])

  const formSubmit = (event) => {
    event.preventDefault()

    if( fullName && email ) {
      const oneUser = {fullName: fullName, email: email}
      setUsers( (users) => {
        return [...users, oneUser]
      })
    } else {
      console.log("Niečo nebolo vyplnené")
    }

    setFullName("")
    setEmail("")

    


  }



  return <article>
    <form onSubmit={formSubmit}>
      <input  
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

      <input type="submit" />
    </form>

    {users.map( (oneUser, index) => {
      const {fullName, email} = oneUser

      return <div className="item" key={index}>
        <h4>{fullName}</h4>
        <p>{email}</p>
      </div>
    })}


  </article>
  
}


export default App