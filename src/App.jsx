import { useState } from 'react'
import "./index.css"
import Hello from './Components/Hello'
import Message from './Components/Message'
import Welcome from './Components/Welcome'
import AlertClock from './Components/AlertClock'
import {Counter} from './Components/Counter'
import Clock from './Components/Clock'
import MouseClicker from './Components/MouseClicker'
import InteractiveWelcome from './Components/InteractiveWelcome'
import Login from './Components/Login'
import UncontrolledLogin from './Components/UncontrolledLogin'
import FocusableInput from './Components/FocusableInput'
import Color from './Components/Color'
import TodoList from './Components/TodoList'
import { Container } from './Components/Container'
import { LanguageContext } from './Components/LanguageContext'
import {GithubUser} from "./Components/GithubUser"
import { GithubUsers } from './Components/GithubUsers'
import { UseCounter } from './Components/UseCounter'
import { FormHook } from './Components/FormHook'
import { UseGituser } from './Components/UseGituser'
import { Link, Route, Routes } from 'react-router-dom'
import { GithubUserList } from './Components/GithubUserList'
import { ShowGithubUser } from './Components/ShowGithubUser'



function App() {
  const [date, setDate] = useState (new Date ())
  const [login, setLogin] = useState(false)
  const [language, setLenguage] = useState("en")    
    function handleLenguage(language) {
        setLenguage(language)
    }
  
  function handleButton () {
      setDate(new Date())
      return alert(date.toLocaleTimeString());
  }
  function onLogin (){
    if(login){
      setLogin(false)
    } else {
      setLogin(true)
    }
    console.log(setLogin)
  }
  const color = [{ 
      id: 1,
      name: "red"
    },
    { 
      id: 2,
      name: "blue"
    },
    { 
      id: 3,
      name: "green"
    },
  ]
  
  return (
    <div>
      <h1> Components 1</h1>
      <Hello />
      <h1> Components 3</h1>
      <Hello />
      <Message />
      {/* Puedes reutilizar más de una vez ambos componentes siempre y cuando lo hayas
      importado   */}


      <h1> Props 1 & 2</h1>
      {/* Si no se pasa el nombre como prop queda un espacio vacío, pero sigue funcionando
      Además, se le puede pasar el valor que quieras.   */}
      <Welcome  name ="Jose" age="25" />
      <h2>Events </h2>
      <AlertClock handler={handleButton}/>
      <h2> State 1, 2, useEffect 1</h2>
      <Counter initialValue={0} incremento ={2} decremento ={1} />
        {/* Debería ser una función y no un valor directo, porque entonces no iría
        incrementando el valor sino que mantendría el valor directo  */}
      <h2>useEffect 2 & Context </h2>
      <LanguageContext.Provider value={language}>
      <button onClick={() =>handleLenguage("es")}>ES</button>
      <button onClick={() =>handleLenguage("en")}>EN</button>
        <Clock />
      </LanguageContext.Provider>
      <h2>Handling Events 1 & 2</h2>
      <MouseClicker />
        {/* puedes prevenir que salga el nombre especificando el valor que te interesa que salga
        con event.target.src*/}
      <h2> Controlled Forms 1</h2>
      <InteractiveWelcome />
      <h2> Controlled Forms 2, 3, 4, 5</h2>
      <Login onLogin={onLogin} />
          {/* puedes evitar que haga las acciones predefinidas usando el event.preventDefault*/}
      <h2> Uncontrolled Forms 1 & 2</h2>
      <UncontrolledLogin />
      <h2> Refs</h2>
      <FocusableInput />
      <h2>List</h2>
      <Color color={color} />
      <h2> List and State </h2>
      <TodoList/>
      <h2> Component Composition </h2>
      <Container title="Welcome">
      </Container>
      <h2>Data Fetching 1</h2>
      <GithubUser user="RafaelCPC"/>
      <GithubUsers />
      <h2> Custom hook 1</h2>
      <UseCounter />
      <h2> Custom hook 2</h2>
      <FormHook />
      <h2> Custom hook 3 & SWR 1</h2>
      <UseGituser user="RafaelCPC"/>
      <h2> React Router 4</h2>
      <Link to="/"> Welcome </Link> | <Link to="counter">Counter</Link> | <Link to="users"> Usuarios </Link> | <Link to="userlist"> User List</Link>
      <Routes>
          <Route path='/' element={<div>
          <h2>React Router 1</h2>
          <Welcome name="Jorge" />
          </div>
          }></Route>
          <Route path='counter' element={<div>
            <h2>React Router 2</h2>
            <Counter initialValue={0} incremento ={2} decremento ={1} />
          </div>} />
          <Route path="users" element={
          <div>
            <h2> React Router 3 </h2>
            <GithubUsers />
          </div>
          }>
                <Route path=":id" />
            </Route>
            <Route path="*" element={<div>
                <h2> React Router 5</h2>
                <p>Not Found</p>
                <Link to="/">Go Home</Link> 
                </div>} />
              <Route path="userlist" element={
                  <div>
                  <h2> React Router 6 & 7 </h2>
                  <GithubUserList />
                  </div>
                  }>
                  <Route index element={<p>Add an user and select it</p>} />
                <Route path=":username" element={<ShowGithubUser />  } />
            </Route>
      </Routes>
    </div>
  )
}

export default App
