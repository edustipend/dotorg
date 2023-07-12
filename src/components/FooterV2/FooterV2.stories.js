import FooterV2 from './FooterV2'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Edustipend/Footer',
  component: FooterV2,
}

export const Footer = () => {
  return (
    <Router>
      <FooterV2 />
    </Router>
  )
}