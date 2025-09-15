import './App.css';
import Form from './Form';
import {userContext} from './contexts/userContext';

function App() {
  return (
    <>
      <userContext.Provider value={{
        userName:"ali@123",
        name:"ali",
        email:"ali@gmail.com",
        phoneNumber:"81833890",
        age:"20",
      }}>
        <Form></Form>
      </userContext.Provider>
    </>
  )
}

export default App
