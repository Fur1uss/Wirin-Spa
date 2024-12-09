import React from "react";

import "../styles/landingPageStyle.css"
import "../styles/headerStyle.css"
import "../styles/mainStyle.css"
import "../styles/sectionStyle.css"
import "../styles/footerStyle.css"

import ImageCarrousel from "../components/imageCarrousel";
import CompanyBanner from "../components/companyBanner";
import ContactFormulary from "../components/contactFormulary";

import logo from "../assets/images/logowhite.png"
import logoblack from "../assets/images/logoblack.png"
import separator from "../assets/images/separator.png"

import tiktok from "../assets/images/RRSSIcons/tiktok.png"
import linkedin from "../assets/images/RRSSIcons/linkedin.png"
import instagram from "../assets/images/RRSSIcons/instagram.png"




export default function LandingPage() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };

 
    const handleRedirect = (url) => {
        window.location.href = url;
    };

      
    return (
        <>
            <header id="Inicio">
                <div className="navegationContainer">

                    <div className="navBarContainer">
                        <div className="empresaElement">
                            <img className="imageLogoHeader" src={logo} alt="Wirin" />
                            <p className="logoTextHeader">WIRIN</p>
                        </div>

                        <div className="navBarButton" onClick={() => scrollToSection("Inicio")}><p className="logoTextHeader">Inicio</p></div>
                        <div className="navBarButton" onClick={() => scrollToSection("NuestroTrabajo")}><p className="logoTextHeader">Nosotros</p></div>
                        <div className="navBarButton" onClick={() => scrollToSection("Contacto")}><p className="logoTextHeader">Contactanos</p></div>
                    </div>

                    <div className="navButtonContainer" onClick={() => scrollToSection("Contacto")}>
                    <p className="logoTextHeader">Solicitar</p>
                    </div> 
                </div>

                <div className="infoContainer">
                    <div className="divisorinfo">
                        <p className="mainTextInfo">Te ayudamos a <br /> materializar tus <br /> ideas. </p>
                        <p className="mainTitleText">WIRIN SPA</p>
                    </div>
                    <div className="divisorinfo">
                        <div className="divisionText">
                            <p className="subtitleTextInfo">Somos una empresa constructora con más de 7 años de experiencia.</p>
                        </div>
                        <div className="divisionImage">
                            <img className="imageLogoBlack" src={logoblack} alt="Wirin" />
                        </div>
                    </div>
                </div>


            </header>

            
            <img className="separatorItem" src={separator} alt="" />

            <main id="NuestroTrabajo">
                <p className="mainTitleCategory">Nuestro trabajo</p>
                <ImageCarrousel />
                <p className="mainSubtitleCategory">Somos una de las empresas constructoras en Santiago con <br /> más confianza por parte de nuestros clientes.</p>
                <CompanyBanner />
            </main>

            <img className="separatorItem" src={separator} alt="" />

            <section id="Contacto">
                <div className="sectionTextInfoContainer">

                    <p className="sectionTitleText">Contáctanos!</p>
                    <p className="sectionSubtitleText">Siempre estaremos <br /> disponible para tus <br /> necesidades.</p>
                    <p className="sectionListTitle">Te aseguramos</p>
                    <ul>
                        <li className="sectionTextList">Calidad</li>
                        <li className="sectionTextList">Confianza</li>
                        <li className="sectionTextList">Rapidez</li>
                    </ul>

                    <div className="RRSSContainer">
                        <p className="RRSSTitleText">Redes sociales</p>
                        <div className="RRSSIcons">
                            <img  onClick={() => handleRedirect("https://www.tiktok.com/@constructora.wirin?lang=es")}  className="RRSSIconIMG" src={tiktok} alt="" />
                            <img  onClick={() => handleRedirect("https://www.linkedin.com/in/wirin-spa-821897340/")} className="RRSSIconIMG" src={linkedin} alt="" />
                            <img  onClick={() => handleRedirect("https://www.instagram.com/constructorawirin/")} className="RRSSIconIMG" src={instagram} alt="" />
                        </div>
                    </div>

                </div>
                <div className="sectionFormularyContainer">
                    <ContactFormulary />
                </div>
            </section>

            
            <img className="separatorItem" src={separator} alt="" />

            <footer>
                <div className="footerDivisor">
                    <p className="footerTitleText">Navegación</p>

                    <ul className="footerList">
                        <li className="footerListText" onClick={() => scrollToSection("Inicio")}>Inicio</li>
                        <li className="footerListText" onClick={() => scrollToSection("NuestroTrabajo")}>Sobre nosotros</li>
                        <li className="footerListText" onClick={() => scrollToSection("Contacto")}>Contacto</li>
                    </ul>
                </div>

                <div className="divisor"></div>

                <div className="footerDivisor">
                    <p className="footerTitleText">Redes sociales</p>

                    <ul className="footerList">
                        <li className="footerListText" onClick={() => handleRedirect("https://www.tiktok.com/@constructora.wirin?lang=es")}>TikTok</li>
                        <li className="footerListText" onClick={() => handleRedirect("https://www.instagram.com/constructorawirin/")}>Instagram </li>
                        <li className="footerListText" onClick={() => handleRedirect("https://www.linkedin.com/in/wirin-spa-821897340/")}>Linkedin</li>
                    </ul>
                </div>

                <div className="divisor"></div>

                <div className="footerDivisor">
                    <p className="footerTitleText">Contacto</p>

                    <ul className="footerList">
                        <li className="footerListText">+56950069657</li>
                        <li className="footerListText">wirinspa@contacto.cl</li>
                    </ul>
                </div>

            </footer>

        </>
    );
}

