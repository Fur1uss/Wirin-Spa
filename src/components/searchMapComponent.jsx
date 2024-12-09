import React, { useEffect, useRef } from "react";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

const AddressAutocomplete = () => {
  const geocoderContainerRef = useRef(null);

  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: "pk.eyJ1IjoibWFyY2UyMSIsImEiOiJjbTRjd2o5a2gwZndxMmtvaDdwOXpxY3pxIn0.beHGyEMVdmAlDxO5p2v2nQ", // Reemplaza con tu token de Mapbox
      placeholder: "Ingresa una dirección",
      countries: "cl", // Restringe a Chile (opcional)
      types: "address", // Filtra para direcciones
    });

    // Adjuntar el geocoder al contenedor
    geocoderContainerRef.current.appendChild(geocoder.onAdd());

    // Escuchar eventos cuando se selecciona una dirección
    geocoder.on("result", (e) => {
      console.log("Dirección seleccionada:", e.result.place_name);
    });

    return () => {
      geocoder.onRemove();
    };
  }, []);

  return (
    <div style={styles.AddressContainer}>
      <h1 style={styles.AddressTitle}>Selecciona una dirección</h1>
      <div ref={geocoderContainerRef} style={styles.searchContainer}></div>
      {/* Personalización del input directamente a través de CSS */}
      <style>
        {`
          /* Personalizar el input */
          .mapboxgl-ctrl-geocoder--input {
            width: 100%;
            height: 100%;
            padding: 10px;
            font-size: 16px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            font-family: 'Arial', sans-serif;
            background-color: aqua;
          }

          /* Personalizar el placeholder */
          .mapboxgl-ctrl-geocoder--input::placeholder {
            color: #999;
            font-style: italic;
          }

          /* Estilo del contenedor */
          .mapboxgl-ctrl-geocoder {
            width: 100%;
            margin: 0 auto;
            background-color: yellow;
          }

          /* Media query para pantallas pequeñas */
          @media (max-width: 768px) {
            .mapboxgl-ctrl-geocoder--input {
              font-size: 14px; /* Reducir tamaño de texto en pantallas pequeñas */
              padding: 8px; /* Menos padding en pantallas pequeñas */
            }

            .mapboxgl-ctrl-geocoder {
              margin: 0 10px; /* Añadir márgenes laterales en pantallas pequeñas */
            }

            .mapboxgl-ctrl-geocoder--input::placeholder {
              font-size: 12px; /* Reducir tamaño del placeholder */
            }
          }

          /* Media query para pantallas muy pequeñas (móviles) */
          @media (max-width: 480px) {
            .mapboxgl-ctrl-geocoder--input {
              font-size: 12px; /* Aún más pequeño en pantallas muy pequeñas */
              padding: 6px; /* Menos padding */
            }

            .mapboxgl-ctrl-geocoder {
              margin: 0 5px; /* Asegura que no se desborde en pantallas pequeñas */
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  AddressContainer: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    padding: "20px", // Agrega padding en pantallas grandes
  },
  AddressTitle: {
    color: "#FFF",
    fontSize: "1.2rem",
    fontFamily: "Readex Pro",
    padding: "0",
    margin: "0",
  },
  searchContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
};

export default AddressAutocomplete;
