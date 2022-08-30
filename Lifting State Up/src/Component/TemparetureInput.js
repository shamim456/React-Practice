import React from "react";

const scaleName = {
    c: "celcious",
    f: "fahenhite"
}
function TemparetureInput({scale, temp, changeHandelar}) {
        console.log(scale)
        return(
            <div>
                <p>{scaleName[scale]} </p>
                <input type="text" value={temp} name="tempareture" onChange={(e) => changeHandelar(e, scale)}/>  
            </div>
        )
    }

export default TemparetureInput;