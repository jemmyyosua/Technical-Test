import { Navbar, Nav, Button ,Container } from 'react-bootstrap';
import logo from '../assets/logo.svg'
import About from '../components/about';
import Advantage from '../components/advantage';
import Product from '../components/product';
import { Icon } from '@iconify/react';

export default function Home(){

    document.title = "Waroeng Kopi"

    return(
        <div>
            <div className="bg">
            <a
                href="https://wa.me/089636579383"
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
                id="contact"
            >
                <Icon className="whatsapp-icon" width="100%" icon="logos:whatsapp" />
            </a>
            <Container>
                <header>
                <Navbar className="py-3 mb-5" expand="lg">
                    <Navbar.Brand className="fw-bold logo" href="#home"><img width="80%" src={logo} alt={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="color" href="#home">Home</Nav.Link>
                        <Nav.Link className="color" href="#about">About</Nav.Link>
                        <Nav.Link className="color" href="#advantages">Advantages</Nav.Link>
                        <Nav.Link className="color" href="#product">Products</Nav.Link>
                        <Nav.Link className="color" href="https://wa.me/085163067976" target="_blank">Contact Us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </header>

                <section className="sec1" id="home">
                    <h1 style={{color : "aliceblue"}}>Waroeng Kopi Penggilingan</h1>
                    <div className="mt-3 d-flex justify-content-center">
                    <h5 className="text" style={{color : "aliceblue"}}>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                       Eum minima sequi excepturi distinctio, recusandae eius autem sed optio 
                       tempora asperiores voluptas facere modi nemo sapiente voluptatibus adipisci 
                       aut commodi rem!
                    </h5>
                    </div>
                    
                    <Button href="#product" className="mt-3 fw-bold" style={{backgroundColor: "navy", border: "unset"}} size="lg">
                        Our Products
                    </Button>
                </section>
            </Container>
            </div>

            <section className="mt-5 sec2" id="about">  
                <About/>
            </section>
           
            <section className="sec2" id="advantages">
                <Advantage/>
            </section>

            <section id="product">
                <Product/>
            </section>

            <footer className="py-2" style={{backgroundColor: "black", color:"white"}}>
               <h5><Icon className="mb-1 me-1" icon="logos:react" /> 2022 Created By Jemmy Yosua Alie</h5>
            </footer>
        </div>
    )
}