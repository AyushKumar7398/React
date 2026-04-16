import CommentsForm from './CommentsForm'
import { useState } from 'react'
import './App.css'
import Comment from './Comment'
import Counter from './Counter'
import Joker from './Joker'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Joker/>
     {/* <Counter/> */}
     {/* <Comment/> */}

    </>
  )
}

export default App
