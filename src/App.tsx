import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import Home from './pages/Home'
import JournalListPage from './pages/JournalListPage'
import JournalEntryPage from './pages/JournalEntryPage'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journal" element={<JournalListPage />} />
            <Route path="/journal/:slug" element={<JournalEntryPage />} />
          </Routes>
        </main>
      </HashRouter>
    </ThemeProvider>
  )
}
