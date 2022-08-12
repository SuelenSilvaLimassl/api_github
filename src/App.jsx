import { useState } from "react"
import { api } from "./lib/api"

export default function App() {

  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)

  async function handleSearchUser(event) {
    event.preventDefault()
    console.log("Passou aqui", username)

    const retorno = await api.get(`/users/${username}`)

    setUser(retorno.data)
    
  }

  return (
    <div className="App">
      <form onSubmit={handleSearchUser} >
        <input type="text" placeholder="Digite o usuário do GitHub"
          onChange={event => setUsername(event.target.value)}
        />

        <button type="submit" >
          Pesquisar
        </button>
  
      </form>

      {user &&
        <div>
          <img src={user.avatar_url} alt="" />
          <p>{user.login}</p>
        </div>
      }

      
      
    </div>
  )
}


