import { useState } from "react";

function Spinner() {
    
    return (      
          <div className="spinner-border text-primary"  role="status">
              <span className="visually-hidden">Cargando...</span>
          </div>        
    );
  }

  export default Spinner
  