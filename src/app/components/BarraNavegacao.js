'use client'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function BarraNavegacao() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Usuários</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

            </Container>
        </Navbar>
    )
}