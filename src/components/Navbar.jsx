import { useEffect, useState } from "react";

const Navbar = ({ current, setCurrent, options }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const width = window.innerWidth;

            setIsMobile(width <= 600)
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleSelect = (key) => {
        setCurrent(key);
        setMenuOpen(false);
    };

    /* ---------------- MOBILE NAV ---------------- */
    if (isMobile) {
        return (
            <>
                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        position: "fixed",
                        top: "1rem",
                        left: "1rem",
                        background: "rgba(15, 15, 25, 0.3)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "12px",
                        padding: "0.8rem",
                        color: "#fff",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        zIndex: 2001,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    }}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* Mobile Fullscreen Menu */}
                {menuOpen && (
                    <nav
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(10, 10, 10, 0.2)",
                            backdropFilter: "blur(20px)",
                            zIndex: 2000,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            animation: "fadeIn 0.3s ease",
                        }}
                    >
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2rem",
                                listStyle: "none",
                                padding: 0,
                                textAlign: "center",
                            }}
                        >
                            {options.map((key) => (
                                <li key={key}>
                                    <button
                                        onClick={() => handleSelect(key)}
                                        style={{
                                            background:
                                                current === key
                                                    ? "linear-gradient(135deg, #00d4ff, #7b2ff7)"
                                                    : "transparent",
                                            color: "#fff",
                                            border: "none",
                                            padding: "1rem 3rem",
                                            borderRadius: "25px",
                                            cursor: "pointer",
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            transition: "all 0.3s",
                                        }}
                                    >
                                        {key.toUpperCase()}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </>
        );
    }

    /* ---------------- DESKTOP NAV ---------------- */
    return (
        <nav
            style={{
                position: "fixed",
                top: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(15, 15, 25, 0.8)",
                backdropFilter: "blur(20px)",
                padding: "1rem 2rem",
                borderRadius: "50px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                zIndex: 1000,
            }}
        >
            <ul
                style={{
                    display: "flex",
                    gap: "1.5rem",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                }}
            >
                {options.map((key) => (
                    <li key={key}>
                        <button
                            onClick={() => handleSelect(key)}
                            style={{
                                background:
                                    current === key
                                        ? "linear-gradient(135deg, #00d4ff, #7b2ff7)"
                                        : "transparent",
                                color: "#fff",
                                border: "none",
                                padding: "0.5rem 1.5rem",
                                borderRadius: "25px",
                                cursor: "pointer",
                                fontWeight: 500,
                                fontSize: "1rem",
                                transition: "all 0.3s",
                            }}
                        >
                            {key.toUpperCase()}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
