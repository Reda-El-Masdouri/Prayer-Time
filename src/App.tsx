import { Container } from '@mui/system'
import Header from './components/Header/Header'
import Divider from '@mui/material/Divider'
import './style.scss'

export const App = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <Divider className="divider" />
    </Container>
  )
}
