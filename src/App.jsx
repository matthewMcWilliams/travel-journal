import Header from './components/Header'
import Entry from './components/Entry'

import entryData from './data.js'

export default function App() {

  const entrieElements = entryData.map(entry => (
    <Entry 
      key={entry.id}
      entry={entry}
    />
  ))

  return (
    <>

      <Header />
      <main className="container">
        {entrieElements}
      </main>
    </>
  )
}