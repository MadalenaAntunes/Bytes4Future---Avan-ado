import { useState } from "react"

const initialState = new Array(16).fill("").map(e => new Array(30).fill("#1c1c1c"))

export function PixelArt() {
    const [state, setState] = useState(initialState)
    /*
    [
        ["#000", "#ff0054", "#000"].
        ["#000", "#ff0054", "#000"].
        ["#000", "#ff0054", "#000"].
        ["#000", "#ff0054", "#000"].
        ["#000", "#ff0054", "#000"].
    ]
    
    */


    const [selectedColor, setColor] = useState("#000000")
    const [isPainting, setPainting] = useState(false)

    const handleEnter = (i, j, isHolding) => {
        if (isPainting || isHolding) {
            setState((pState) => pState.map((line, row) => line.map((cell, column) => row === i && column === j ? selectedColor : cell)))
        }
    }

    const handleCopyColor = (i, j, event) => {
        if (event.altKey) {
            setColor(state[i][j])
        }
    }

    return (
        <div>
            {
                state.map((row, i) => (
                    <div style={{ display: "flex" }}>
                        {row.map((cell, j) => (
                            <div
                                onMouseEnter={() => handleEnter(i, j)}
                                onMouseDown={(e) => {
                                    if (!e.altKey) {
                                        setPainting(true);
                                        handleEnter(i, j, true)
                                    } else {
                                        handleCopyColor(i, j, e)
                                    }
                                }}
                                onMouseUp={() => setPainting(false)}
                                style={{
                                    flexShrink: 0,
                                    height: "40px",
                                    width: "40px",
                                    border: "1px solid black",
                                    backgroundColor: cell
                                }}></div>
                        ))}
                    </div>
                ))
            }

            <div>
                Select your color

                <input
                    value={selectedColor}
                    onChange={(e) => setColor(e.target.value)}
                    type="color" />
            </div>
        </div>
    )
}