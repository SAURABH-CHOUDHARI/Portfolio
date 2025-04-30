'use client'

import { useRef, useEffect, useState } from 'react'

export default function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mousePositionRef = useRef({ x: 0, y: 0 })
    const isTouchingRef = useRef(false)
    const [isMobile, setIsMobile] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)
    const profileImageRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        // Create and load the profile image
        profileImageRef.current = new Image()
        profileImageRef.current.src = '/HERO.png' // Update this path to your PNG image
        profileImageRef.current.onload = () => setImageLoaded(true)

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            setIsMobile(window.innerWidth < 768) // Set mobile breakpoint
        }

        updateCanvasSize()

        let particles: {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            size: number;
            color: string;
            scatteredColor: string;
            isName: boolean;
            life: number;
        }[] = []

        let textImageData: ImageData | null = null

        function createTextImage() {
            if (!ctx || !canvas || !profileImageRef.current || !imageLoaded) return 0

            ctx.fillStyle = 'white'
            ctx.save()

            // Calculate dimensions based on responsive design
            const logoHeight = isMobile ? 100 : 180
            const imageWidth = logoHeight * (profileImageRef.current.width / profileImageRef.current.height)
            const nameWidth = logoHeight * 2  // Adjust this ratio based on your name length
            const spacing = isMobile ? 30 : 80
            const totalWidth = imageWidth + nameWidth + spacing

            // Position elements centered on the canvas
            ctx.translate(canvas.width / 2 - totalWidth / 2, canvas.height / 2 - logoHeight / 2)

            // Draw profile image on the left
            ctx.save()
            ctx.drawImage(profileImageRef.current, 0, 0, imageWidth, logoHeight)
            ctx.restore()

            // Draw name on the right
            ctx.save()
            ctx.translate(imageWidth + spacing, 0)

            // Set up text style
            const fontSize = isMobile ? 28 : 42
            ctx.font = `bold ${fontSize}px Arial`
            ctx.textBaseline = 'middle'

            // Calculate vertical centering
            const totalTextHeight = fontSize * 2.2 // Height of both lines with spacing
            const startY = (logoHeight / 2) - (totalTextHeight / 2) + fontSize / 2

            // Draw the name on two lines, vertically centered with the image
            ctx.fillText("SAURABH", 0, startY)
            ctx.fillText("CHOUDHARI", 0, startY + fontSize * 1.2)

            ctx.restore()
            ctx.restore()

            textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            return logoHeight / 180 // Return scale factor
        }

        function createParticle(scale: number) {
            if (!ctx || !canvas || !textImageData) return null

            const data = textImageData.data

            for (let attempt = 0; attempt < 100; attempt++) {
                const x = Math.floor(Math.random() * canvas.width)
                const y = Math.floor(Math.random() * canvas.height)

                if (data[(y * canvas.width + x) * 4 + 3] > 128) {
                    const logoHeight = isMobile ? 100 : 180
                    const imageWidth = logoHeight * (profileImageRef.current?.width || 1) / (profileImageRef.current?.height || 1)
                    const nameWidth = logoHeight * 2
                    const spacing = isMobile ? 30 : 80
                    const totalWidth = imageWidth + nameWidth + spacing
                    const centerX = canvas.width / 2

                    const isNameRegion = x >= centerX - (totalWidth / 2) + imageWidth + spacing

                    return {
                        x: x,
                        y: y,
                        baseX: x,
                        baseY: y,
                        size: Math.random() * 1.5 + 0.5,
                        color: 'white',
                        scatteredColor: isNameRegion ? '#00DCFF' : '#FF9900', // Blue for name, orange for image
                        isName: isNameRegion,
                        life: Math.random() * 100 + 50
                    }
                }
            }

            return null
        }

        function createInitialParticles(scale: number) {
            const baseParticleCount = 6000 // Adjust particle density
            const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)))
            for (let i = 0; i < particleCount; i++) {
                const particle = createParticle(scale)
                if (particle) particles.push(particle)
            }
        }

        let animationFrameId: number

        function animate(scale: number) {
            if (!ctx || !canvas) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            const { x: mouseX, y: mouseY } = mousePositionRef.current
            const maxDistance = 240

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i]
                const dx = mouseX - p.x
                const dy = mouseY - p.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < maxDistance && (isTouchingRef.current || !('ontouchstart' in window))) {
                    const force = (maxDistance - distance) / maxDistance
                    const angle = Math.atan2(dy, dx)
                    const moveX = Math.cos(angle) * force * 60
                    const moveY = Math.sin(angle) * force * 60
                    p.x = p.baseX - moveX
                    p.y = p.baseY - moveY

                    ctx.fillStyle = p.scatteredColor
                } else {
                    p.x += (p.baseX - p.x) * 0.1
                    p.y += (p.baseY - p.y) * 0.1
                    ctx.fillStyle = 'white'
                }

                ctx.fillRect(p.x, p.y, p.size, p.size)

                p.life--
                if (p.life <= 0) {
                    const newParticle = createParticle(scale)
                    if (newParticle) {
                        particles[i] = newParticle
                    } else {
                        particles.splice(i, 1)
                        i--
                    }
                }
            }

            const baseParticleCount = 6000
            const targetParticleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)))
            while (particles.length < targetParticleCount) {
                const newParticle = createParticle(scale)
                if (newParticle) particles.push(newParticle)
            }

            animationFrameId = requestAnimationFrame(() => animate(scale))
        }

        // Only start the animation when the image is loaded
        if (imageLoaded) {
            const scale = createTextImage()
            createInitialParticles(scale)
            animate(scale)
        }

        const handleResize = () => {
            updateCanvasSize()
            if (imageLoaded) {
                const newScale = createTextImage()
                particles = []
                createInitialParticles(newScale)
            }
        }

        const handleMove = (x: number, y: number) => {
            mousePositionRef.current = { x, y }
        }

        const handleMouseMove = (e: MouseEvent) => {
            handleMove(e.clientX, e.clientY)
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                e.preventDefault()
                handleMove(e.touches[0].clientX, e.touches[0].clientY)
            }
        }

        const handleTouchStart = () => {
            isTouchingRef.current = true
        }

        const handleTouchEnd = () => {
            isTouchingRef.current = false
            mousePositionRef.current = { x: 0, y: 0 }
        }

        const handleMouseLeave = () => {
            if (!('ontouchstart' in window)) {
                mousePositionRef.current = { x: 0, y: 0 }
            }
        }

        window.addEventListener('resize', handleResize)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
        canvas.addEventListener('mouseleave', handleMouseLeave)
        canvas.addEventListener('touchstart', handleTouchStart)
        canvas.addEventListener('touchend', handleTouchEnd)

        return () => {
            window.removeEventListener('resize', handleResize)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('touchmove', handleTouchMove)
            canvas.removeEventListener('mouseleave', handleMouseLeave)
            canvas.removeEventListener('touchstart', handleTouchStart)
            canvas.removeEventListener('touchend', handleTouchEnd)
            cancelAnimationFrame(animationFrameId)
        }
    }, [isMobile, imageLoaded])

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full absolute top-0 left-0 "
            aria-label="Interactive particle effect with profile image and name"
        />

    )
}