import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { PAY } from './components/PAY'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvieder } from './context/GlobalState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvieder>
      <div className='App'>
        <Header></Header>
        <Balance></Balance>
        <PAY></PAY>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </GlobalProvieder>
  )
}

export default App
