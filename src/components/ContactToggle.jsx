import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; 

const ContactFloating = () => {
  const ownerNumber = "917020033003";

  const styles = {
    container: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      zIndex: 9999,
    },
    iconBtn: {
      width: "55px",
      height: "55px",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "28px",
      color: "#fff",
      boxShadow: "0 4px 8px rgba(0,0,0,0.25)",
      transition: "all 0.3s ease-in-out",
    },
    whatsapp: {
      backgroundColor: "#25D366",
    },
    call: {
      backgroundColor: "#007bff",
    },
  };

  return (
    <div style={styles.container}>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${ownerNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...styles.iconBtn, ...styles.whatsapp }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a
        href={`tel:${ownerNumber}`}
        style={{ ...styles.iconBtn, ...styles.call }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default ContactFloating;
