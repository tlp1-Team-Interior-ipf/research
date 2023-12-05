import React from "react";


export const PageNotFound = () => {

    return (
        <>
      <div>
        <h1 className="d-flex justify-content-center mt-5">Page Not Found</h1>
        <div className="d-flex justify-content-center">
          <img src="/img/taxi.gif" alt="GIF de taxi" />
        </div>
      </div>
        <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-warning">
            <a href="/" className="text-black">Volver al inicio</a>
        </button>
        </div>
        </>
    );
  };
