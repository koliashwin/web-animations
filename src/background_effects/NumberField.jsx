import React, { useEffect, useRef } from 'react'

const NumberField = () => {
    const canvasRef = useRef(null);
    const particleRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1;
                this.vy = (Math.random() - 0.5) * 1;
                this.radius = Math.random() * 2 + 30;
                this.opacity = Math.random() * 0.4 + 0.2;

                this.value = Math.floor(Math.random() * 10);
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // this.vx *= 0.99;
                // this.vy *= 0.99;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                
                // console.log(this.vx, this.vy)
            }

            draw() {
                // ctx.beginPath();
                // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(200, 220, 0, ${this.opacity})`
                ctx.font = `${this.radius * 1.2}px Arial`
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.value, this.x, this.y);
            }
        }

        particleRef.current = Array.from({length: 50}, () => new Particle());

        const animate = () => {
            ctx.fillStyle = "rgba(30 ,30 ,10, 0.8)"
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particleRef.current.forEach((p) => {
                p.update();
                p.draw();
            })

            requestAnimationFrame(animate);
        };

        animate();
    }, [])

    return (
        <canvas 
            ref={canvasRef}
            style={{
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                // inset: 0
                top: 0,
                left: 0
            }}
        />
    )
}

export default NumberField
