import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from '../CartWidget/CartWidget'
import Languages from '../Languages/Languages'
import { useTranslation } from 'react-i18next'

const NavBar = () => {

  const imgTitle = '/img/img-title.png'

  const { t } = useTranslation(['global'])


  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><img src={imgTitle} alt="Image logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/category/1">{t('navbar.italy')}</Nav.Link>
              <Nav.Link href="/category/2">{t('navbar.japan')}</Nav.Link>
              <Nav.Link href="/category/3">{t('navbar.thailand')}</Nav.Link>
              <Nav.Link href="/category/4">{t('navbar.spain')}</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/contact">{t('navbar.contact')}</Nav.Link>
              <Nav.Link href="/login">{t('navbar.login')}</Nav.Link>
              <CartWidget className='navbar-cart' />
              <Languages className='navbar-languages' />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar