import { Box, Container } from './App.styles'
import { Flow } from './Flow/Flow'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'

export default function App() {
  return (
    <Container>
      <Header />
      <Box>
        <Sidebar />
        <Flow />
      </Box>
    </Container>
  )
}
