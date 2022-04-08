import { useState } from "react";
import { css } from "@emotion/react";
import BallTriangle from "react-spinners/ClipLoader";
  
const override = css`
 display: block;
 margin: 0 auto;
 border-color: red;
 `;
  
function Spinner() {
   let [loading] = useState(true);
   let [color] = useState();
  
return (
     <div className="sweet-loading">
        <BallTriangle color={color} loading={loading} css={override} size={150} />
     </div>
   );
 }
    
export default Spinner
