import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import "../styles/sectionStyle.css"


export default function ContactFormulary() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_0guird3', 'template_tvoa9is', form.current, {
          publicKey: 'LU5gOD-hLVzOGFEMt',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail} style={styles.ContactFormularyContainer}>
            <div style={styles.inputContainer}>
                <label style={styles.inputText} htmlFor="fullName">Nombre completo</label>
                <input style={styles.input} type="text" id="fullName" name="user_name" required />
            </div>
            <div style={styles.inputContainer}>
                <label style={styles.inputText} htmlFor="email">Correo</label>
                <input style={styles.input} type="email" id="email" name="user_email" required />
            </div>
            <div style={styles.inputContainer}>
                <label style={styles.inputText} htmlFor="phone">Teléfono</label>
                <input style={styles.input} type="tel" id="phone" name="user_phone" pattern="[0-9]{9}" required />
            </div>

            <div style={styles.inputSection}>
                <div style={styles.labelContainer}>
                    <label style={styles.labelText} htmlFor="projectType">Tipo de proyecto:</label>
                    <select style={styles.selectContainer} id="projectType" name="projectType" defaultValue="" required>
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="construccion">Construcción</option>
                        <option value="electricidad">Electricidad</option>
                        <option value="plomeria">Plomería</option>
                        <option value="pintura">Pintura</option>
                        <option value="carpinteria">Carpintería</option>
                        <option value="albanileria">Albañilería</option>
                        <option value="soldadura">Soldadura</option>
                    </select>
                </div>
                <div style={styles.labelContainer}>
                    <label style={styles.labelText} htmlFor="location">Ubicación:</label>
                    <select style={styles.selectContainer} id="location" name="location" defaultValue="Otro" required>
                        <option value="Otro">Region</option>
                        <option value="Providencia">Providencia</option>
                        <option value="Santiago">Santiago</option>
                        <option value="Las Condes">Las Condes</option>
                        <option value="La Florida">La Florida</option>
                        <option value="Maipú">Maipú</option>
                        <option value="Pudahuel">Pudahuel</option>
                        <option value="Quilicura">Quilicura</option>
                        <option value="San Bernardo">San Bernardo</option>
                        <option value="Puente Alto">Puente Alto</option>
                        <option value="Ñuñoa">Ñuñoa</option>
                        <option value="La Reina">La Reina</option>
                        <option value="Vitacura">Vitacura</option>
                        <option value="Lo Barnechea">Lo Barnechea</option>
                        <option value="San Miguel">San Miguel</option>
                        <option value="Macul">Macul</option>
                        <option value="El Bosque">El Bosque</option>
                        <option value="Lo Espejo">Lo Espejo</option>
                        <option value="Cerro Navia">Cerro Navia</option>
                        <option value="Conchalí">Conchalí</option>
                        <option value="Huechuraba">Huechuraba</option>
                        <option value="La Cisterna">La Cisterna</option>
                        <option value="La Granja">La Granja</option>
                        <option value="La Pintana">La Pintana</option>
                        <option value="Lo Prado">Lo Prado</option>
                        <option value="Pedro Aguirre Cerda">Pedro Aguirre Cerda</option>
                        <option value="Peñalolén">Peñalolén</option>
                        <option value="Quinta Normal">Quinta Normal</option>
                        <option value="Renca">Renca</option>
                        <option value="San Joaquín">San Joaquín</option>
                        <option value="San Ramón">San Ramón</option>
                        <option value="Independencia">Independencia</option>
                    </select>
                </div>
            </div>

            <div style={styles.descriptionInputContainer}>
                <label style={styles.inputText} htmlFor="projectDescription">Descripción del proyecto</label>
                <textarea style={styles.inputDesc} id="projectDescription" name="message" required></textarea>
            </div>

            <button type="text" value= "Send" className="sendButton">Enviar</button>
        </form>
    );
}

const styles = {
    ContactFormularyContainer: {
        width: "80%",
        height: "90%",
        backgroundColor: "#25221B",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "10px",
    },
    inputContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        height: "10%",
        flexDirection: "column",
    },
    inputText: {
        color: "#FFF",
        fontSize: "clamp(8px, 15px, 15px)",
        fontWeight: "bold",
        padding: "0",
        margin: "0",
        fontFamily: "Readex Pro",
    },
    input: {
        width: "96%",
        height: "30px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#FFF",
        color: "#25221B",
        fontSize: "1em",
        fontWeight: "bold",
        fontFamily: "Readex Pro",
        padding: "5px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
    },
    inputSection: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "10%",
        flexDirection: "row",
    },
    labelContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "40%",
        height: "100%",
        flexDirection: "column",
    },
    labelText: {
        color: "#FFF",
        fontSize: "clamp(8px, 12px, 15px)",
        fontWeight: "bold",
        padding: "0",
        margin: "0",
        fontFamily: "Readex Pro",
    },
    selectContainer: {
        width: "100%",
        height: "30px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#FFF",
        color: "#25221B",
        fontSize: "1em",
        fontWeight: "bold",
        fontFamily: "Readex Pro",
        padding: "5px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
    },
    optionContainer: {
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        color: "#333",
    },
    descriptionInputContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        height: "40%",
        flexDirection: "column",
    },
    inputDesc: {
        width: "96%",
        height: "200px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#FFF",
        color: "#25221B",
        fontSize: "1em",
        fontWeight: "bold",
        fontFamily: "Readex Pro",
        padding: "5px",
        resize: "none",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
    },

};
