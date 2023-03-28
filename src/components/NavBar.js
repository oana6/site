import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Traveling } from "../pages/Traveling";
import { Sailing } from "../pages/Sailing";
import { Pentesting } from "../pages/Pentesting";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <BrowserRouter>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <NavDropdown title="Blog" id="basic-nav-dropdown" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>
                                <NavDropdown.Item href="blog/traveling" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Traveling Wishlist</NavDropdown.Item>
                                <NavDropdown.Item href="blog/pentesting" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Pentesting</NavDropdown.Item>
                                <NavDropdown.Item href="blog/sailing" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Sailing</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>

                <Route path="/blog/traveling" element={<Traveling />} />
                <Route path="/blog/pentesting" element={<Pentesting />} />
                <Route path="/blog/sailing" element={<Sailing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}
