import Header from './components/Header.jsx';
import { useState } from 'react';
import UserCards from './components/UserCards.jsx';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {name, email, password};

    setUsers([...users, user]);
    setName('');
    setEmail('');
    setPassword('');
    console.log(users);
  }

  return (
    <>
      <Header name = {"Cielo A. Tadas"} title={"CIENANIGANS"}/>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 items-start ml-5 ">
        <div>
          <h5 className="font-serif">Name:</h5>
          <input 
            type="text" 
            name="name" 
            className="border p-2 m-1 mb-3shadow-md border-red-900 rounded-lg" 
            onChange={(e) => setName(e.target.value)}
          />

          <h5 className="font-serif">Email:</h5>
          <input 
            type="text" 
            name="email" 
            className="border p-2 m-1 mb-3 shadow-md border-red-900  rounded-lg" 
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5 className="font-serif">Password:</h5>
          <input 
            type="text" 
            name="password" 
            className="border p-2 m-1 mb-3 shadow-md border-red-900 rounded-lg" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button type="submit" className="bg-red-900 text-white px-4 py-2 rounded-lg mt-1 hover:bg-red-700 transition duration-300">SAVE</button>
          </div>
        </div>
      </form>

      <UserCards users={users} />
    </>
  )
}

export default App
