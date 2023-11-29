export const Footer = () => {
    const footerStyle = {
        padding: '10px',
        marginTop: 'auto',
    };
  
    const textContainerStyle = {
        padding: '10px',
        borderTop: '1px solid #000',
    };
  
    return (
        <footer style={footerStyle}>
            <div className="text-black" style={textContainerStyle}>
                © Copyright - Derechos Reservados - Team Interior 2023 - tuRemo
            </div>
        </footer>
    )
  }