import { useState, useEffect, useRef } from "react";
import "./App.css";
import { motion } from "framer-motion";

import image1 from "../src/images/image1.jpg";
import image2 from "../src/images/image2.jpg";
import image3 from "../src/images/image3.jpg";
import image4 from "../src/images/image4.jpg";
import image5 from "../src/images/image5.jpg";
import image6 from "../src/images/image6.jpg";
import image7 from "../src/images/image7.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];

function App() {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log(
            carousel.current?.scrollWidth,
            carousel.current?.offsetWidth
        );
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <div className="App">
            <motion.div
                ref={carousel}
                className="carousel"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    {images.map((image) => (
                        <motion.div className="item" key={image}>
                            <img src={image} alt="Fotos para slide"></img>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default App;
