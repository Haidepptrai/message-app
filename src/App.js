import { useState } from 'react';
import './App.css';
import MessageBox from './MessageBox';

function App() {
  const [message, setMessage] = useState([])
  const addMessage = (name, newMessage) => {
    setMessage([...message, { name, message: newMessage }]);
  };
  const user = [
    {
      name: "Hai Nguyen",
      age: 20
    },
    {
      name: "Girl I loved",
      age: null
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <title>Message App</title>
        <h6>Message App</h6>
        <div className='message-container'>
          <MessageBox user={user} addMessage={addMessage} messageHistory={message} />
        </div>
      </header>
    </div>
  );
}

export default App;
