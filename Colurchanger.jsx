import React, { useState } from "react";

function Colorchanger(){
    const [color, setColor] = useState("lightblue");
    const colors = ["lightblue", "lightgreen", "lightpink", "lightgoldenrodyellow", "lightpink", "lavender:"];
    
    return(
    <div style={{backgroundColor : color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
                }}>
                    <h1> Color Change App</h1>
                    <div>
                    {colors.map((c, idx) => (
                        <button
                            key={idx}
                            style={{
                                margin: "5px",
                                padding: "10px 20px",
                                backgroundColor: c.replace(":", ""), 
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer"
                            }}
                            onClick={() => setColor(c.replace(":", ""))}
                        >
                            {c.replace(":", "")}
                        </button>
                    ))}
                    </div>
        </div>
    );
}
export default Colorchanger;