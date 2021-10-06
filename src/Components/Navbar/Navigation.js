import './Navigation.css';
import { Navbar, Container, Nav } from 'react-bootstrap';


function Navigation( composant ) {

    const mouseOver = (e) => { e.target.innerText = "Acceuil"}
    const mouseOver2 = (e) => { e.target.innerText = "Compétences"}
    const mouseOver3 = (e) => { e.target.innerText = "à Propos"}
    const mouseOver4 = (e) => { e.target.innerText = "Portfolio"}
    const mouseOver5 = (e) => { e.target.innerText = "Contact"}
    
    const mouseOut = (e) => { e.target.innerText = "127.0 0.1"}
    const mouseOut2 = (e) => { e.target.innerText = "extensions"}
    const mouseOut3 = (e) => { e.target.innerText ="Ctrl+H"}
    const mouseOut4 = (e) => { e.target.innerHTML ="&#60; show &#62;"}
    const mouseOut5 = (e) => { e.target.innerHTML = "&#x0260E &#x0260E; &#x0260E; &#x0260E;"}

    const mouseNav = (e, composant) => {
        if (e == true) {
        
}
}

    return (
        <div onMouseEnter={() => mouseNav(true)}>
            <Navbar className="navi">
                <Container>
                    <Navbar.Collapse className="navi justify-content-end">
                        <Nav.Link id="acceuil" href="#Acceuil"> <div className="navelement" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseOut(e)}>127.0 0.1</div> </Nav.Link>
                        <Nav.Link id="extens" href="#extensions"><div className="navelement" onMouseEnter={(e) => mouseOver2(e)} onMouseLeave={(e) => mouseOut2(e)}>extenstions</div> </Nav.Link>
                        <Nav.Link id="histoire" href="#historique"><div className="navelement" onMouseEnter={(e) => mouseOver3(e)} onMouseLeave={(e) => mouseOut3(e)}>Ctrl+H</div> </Nav.Link>
                        <Nav.Link id="histoire" href="#historique"><div className="navelement" onMouseEnter={(e) => mouseOver4(e)} onMouseLeave={(e) => mouseOut4(e)} >&#60; show &#62;</div> </Nav.Link>
                        <Nav.Link id="histoire" href="#historique"><div className="navelement" onMouseEnter={(e) => mouseOver5(e)} onMouseLeave={(e) => mouseOut5(e)} > &#x0260E; &#x0260E; &#x0260E; &#x0260E; </div> </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;




