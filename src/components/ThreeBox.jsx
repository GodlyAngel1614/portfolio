import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function ThreeBox() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const renderer = new THREE.WebGLRenderer({antialias: true})
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        container.appendChild(renderer.domElement)

        const scene = new THREE.Scene()
        scene.background = new THREE.Color('#ffffff')

        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            4,
            1000
        )
        camera.position.set(10, 15, 25)

        // lights

        const ambient = new THREE.AmbientLight('#ffffff', 1)
        scene.add(ambient)

        const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
        directionalLight.position.set(1, 1, 1)
        scene.add(directionalLight)

        const directionalLight2 = new THREE.DirectionalLight('#9b5d5d', 1)
        directionalLight2.position.set(-1, -1, -1)
        scene.add(directionalLight2)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.enableRotate = false
        controls.enableZoom = false

        let isDragging = false
        let startY = 0
        let minY = 1
        let maxY = 4
        let sensitivity = 0.01

        function onMouseMove(event) {
            if (!isDragging) return;

            const deltaY = event.clientY - startY;
            startY = event.clientY; // Update for the next move

            camera.position.y -= deltaY * sensitivity;
            camera.position.y = Math.max(minY, Math.min(maxY, camera.position.y));

            camera.lookAt(0, 0, 0); // Optional: keeps it looking at center
        }

        function onMouseDown(event) {
            isDragging = true;
            startY = event.clientY;
        }

        function onMouseUp() {
            isDragging = false;
        }


        window.addEventListener('mousedown', onMouseDown)

        window.addEventListener('mouseup', onMouseUp)

        window.addEventListener('mousemove', onMouseMove)



        // Optional visible box
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshStandardMaterial({ color: '#2a268a' })
        const box = new THREE.Mesh(geometry, material)
        scene.add(box)

        // Load GLTF Model
        const loader = new GLTFLoader()
        loader.load(
            '/src/models/scene.gltf',
            (gltf) => {
                const model = gltf.scene
                model.scale.set(1, 1, 1)
                model.position.set(0, 0, 0)
                scene.add(model)
            },
            undefined,
            (error) => {
                console.error('Failed to load model:', error)
            }
        )

        // Resize handling
        const handleResize = () => {
            const width = window.innerWidth
            const height = window.innerHeight
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
        }

        window.addEventListener('resize', handleResize)

        // Animation loop
        const animate = () => {
            controls.update()
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }

        animate()

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousedown', () => {})
            window.removeEventListener('mouseup', () => {})
            window.removeEventListener('mousemove', () => {})
            renderer.dispose()
            container.removeChild(renderer.domElement)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                margin: 0,
                padding: 0,
                overflow: 'hidden',
                zIndex: 0,
            }}
        />
    )
}