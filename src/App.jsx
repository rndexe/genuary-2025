import getPages from './components/lazy.jsx'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import Experience from './components/Experience.jsx'

export default function App() {
  const pages = getPages()

  return (
    <>
      <Header />
      <Experience pages={pages} />
      <Nav pages={pages} />
    </>
  )
}
