import { useState } from "react"
import ParticleField from "./background_effects/ParticleField"
import AlpahabetField from "./background_effects/AlphabetField"
import NumberField from "./background_effects/NumberField"
import Navbar from "./components/Navbar"

const animations = {
    particles: <ParticleField />,
    Alphabets: <AlpahabetField />,
    Numbers: <NumberField />
}

function App() {
    const [current, setCurrent] = useState('particles')

    return (
        <>
            <Navbar 
                current={current}
                setCurrent={setCurrent}
                options={Object.keys(animations)}
            />
            <div>
                {animations[current]}
            </div>
        </>
    )
}

export default App
