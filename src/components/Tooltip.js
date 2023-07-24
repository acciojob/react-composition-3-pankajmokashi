import React from "react"
import { useState } from "react"

const Tooltip = () => {

    let [tooltip1, setTooltip1] = useState(false)
    let [tooltip2, setTooltip2] = useState(false)

    return(
        <div>
            {
                tooltip1 &&
                <div className="tooltiptext text1">This is a Tooltip.</div>
            }
            <div className="tootip div1"
                onMouseEnter={() => setTooltip1(true)}
                onMouseLeave={() => setTooltip1(false)}
            >Hover over me.</div>
            {
                tooltip2 &&
                <div className="tooltiptext text2">This is another tooltip.</div>
            }
            <div className="tootip div2"
                onMouseEnter={() => setTooltip2(true)}
                onMouseLeave={() => setTooltip2(false)}
            >Hover over me to se another tooltip.</div>
        </div>
    )
}

export default Tooltip