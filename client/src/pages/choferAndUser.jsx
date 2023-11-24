import io from "socket.io-client"; // Modulo de socket.io enfocado en aplicaciones de navegador
import { useState, useEffect } from "react"; // Para crear estados
import Maping from "../components/maping.jsx";
import { Footer } from "../components/Footer.jsx";
import { Nav } from "../components/Nav.jsx";

// Conexión con el backend
const socket = io("/"); // Este socket permite recibir información del backend

function ChoferAndUser() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      body: message,
      from: "Me",
    };

    setMessages([...messages, newMessage]);
    socket.emit("message", message);
    setMessage("");
  };

  useEffect(() => {
    // Este useEffect queda escuchando por eventos de sockets
    socket.on("message", receiveMessage); // Cuando el useEffect escuche un evento de nombre 'message' recibirá los mensajes alacenados en la variable 'receiveMessage'

    return () => {
      socket.off("message", receiveMessage); // Esta función apaga el evento anterior para impedir que se envíe 2 veces un mismo mensaje
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message]);

  return (
    <>
    <Nav/>

      <div className="container col-md-5 col-lg-4 order-md-last">
        <Maping/>
        <div
          className="d-flex flex-column align-items-center"
          style={{ color: "yellow", border: "1px solid yellow" }}
          >
          <ul
            style={{
              width: "100%",
              height: "250px",
              zIndex: "2",
            }}
            className="m-0 p-2 overflow-y-auto"
          >
            {messages.map((message, i) => (
              <li
                key={i}
                className={`d-flex flex-column m-2 form-control ${
                  message.from === "Me"
                    ? " ms-auto bg-warning-subtle text-emphasis-warning me-0"
                    : " me-auto bg-success-subtle ms-0"
                } border-bottom`}
                style={{
                  maxWidth: "75%",
                  width: "fit-content",
                  marginLeft: "auto",
                }}
              >
                <span
                  className={`text-md text-slate-700 block ${
                    message.from === "Me" ? "text-dark" : "text-dark"
                  }`}
                >
                  {message.from === "Me" ? (
                    <b>{message.from}</b>
                  ) : (
                    <b>{message.from}</b>
                  )}
                </span>

                <span className="text-xl" style={{ wordWrap: "break-word" }}>
                  {message.body}{" "}
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {time}
                  </div>
                </span>
              </li>
            ))}
          </ul>

          <form
            onSubmit={handleSubmit}
            className="container mx-1 col-md-5 order-md-last text-warning d-flex flex-column "
          >
            <input
              className="form-control border border-warning "
              type="text"
              placeholder="Write your message ..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <button className="m-2 btn btn-outline-light text-warning border border-warning">
              Send
            </button>
          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ChoferAndUser;