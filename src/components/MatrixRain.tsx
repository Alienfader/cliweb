import React, { useRef, useEffect } from 'react';

const MatrixRain: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas dimensions to full window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Use Katakana characters for the effect
        const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const chars = matrixChars.split('');
        const fontSize = 18;
        const columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array(columns).fill(1);

        const draw = () => {
            // Increase background opacity to fade trails faster (optional)
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Adjust as desired
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Increase text opacity for a more intense look
            ctx.fillStyle = 'rgba(0, 255, 0, 0.4)';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 1;
            }
        };


        let animationId: number;
        const animate = () => {
            draw();
            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default MatrixRain;
