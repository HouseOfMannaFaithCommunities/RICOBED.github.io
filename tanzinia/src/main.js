// Import Three.js
import * as THREE from 'three';

// Create a scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // Set the background to white

const camera = new THREE.PerspectiveCamera(
  75, // Field of View
  window.innerWidth / window.innerHeight, // Aspect Ratio
  0.1, // Near Clipping Plane
  1000 // Far Clipping Plane
);


const renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable antialiasing for smoother visuals
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const light = new THREE.DirectionalLight('#FFFFFF', 10); // Soft white light
light.position.set(1, 1, 1); // Position the light for better effect
scene.add(light);

// Create an HTML iframe for YouTube video
const iframe = document.createElement('iframe');
iframe.src = 'https://www.youtube.com/embed/LLYqY7zrMOw?autoplay=1&mute=1&loop=1&playlist=LLYqY7zrMOw'
;
iframe.style.border = 'none';
iframe.style.position = 'absolute';
iframe.style.width = '640px'; // Match your TV screen size
iframe.style.height = '360px';
iframe.style.left = '50%';
iframe.style.top = '50%';
iframe.style.transform = 'translate(-50%, -50%)';

// Append the iframe to the body
document.body.appendChild(iframe);

// Position the camera
camera.position.z = 2;
// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Handle window resizing
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
