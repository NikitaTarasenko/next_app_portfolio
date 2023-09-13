// 'use client';

// import * as THREE from 'three';

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import mask from './img/mask4.png';
// import mask2 from './img/mask6.jpg';
// import t from './img/t1.png';
// import gsap from 'gsap';
// import fragmentShader from '@/shaders/fragment2';
// import vertexShader from '@/shaders/vertex2';

// export default class Sketch {
//     constructor() {
//         super();
//         this.renderer = new THREE.WebGLRenderer({ antialias: true });
//         this.renderer.setSize(window.innerWidth, window.innerHeight);

//         document
//             .getElementById('container')
//             .appendChild(this.renderer.domElement);
//         this.camera = new THREE.PerspectiveCamera(
//             75,
//             window.innerWidth / window.innerHeight,
//             0.1,
//             1000,
//         );
//         this.camera.position.z = 1000;
//         this.scene = new THREE.Scene();

//         this.raycaster = new THREE.Raycaster();
//         this.mouse = new THREE.Vector2();
//         this.point = new THREE.Vector2();

//           }
//         this.textures = [new THREE.TextureLoader().load(t)];

//         this.masks = [
//             new THREE.TextureLoader().load(mask),
//             new THREE.TextureLoader().load(mask2),
//         ];
//         this.time = 0;
//         this.move = 0;
//         // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
//         this.addMesh();

//         this.mouseEffects();
//         this.render();
//         this.loadT(t,mask,mask2);
//     }

//     mouseEffects() {
//         this.test = new THREE.Mesh(
//             new THREE.PlaneGeometry(2000, 2000),
//             new THREE.MeshBasicMaterial(),
//         );

//         window.addEventListener('mousedown', (e) => {
//             gsap.to(this.material.uniforms.mousePressed, {
//                 duration: 1,
//                 value: 1,
//                 ease: 'elastic.out(1,0.3)',
//             });
//         });
//         window.addEventListener('mouseup', (e) => {
//             gsap.to(this.material.uniforms.mousePressed, {
//                 duration: 1,
//                 value: 0,
//                 ease: 'elastic.out(1,0.3)',
//             });
//         });

//         window.addEventListener('wheel', (e) => {
//             this.move += e.wheelDeltaY / 1000;
//         });
//         window.addEventListener(
//             'pointermove',
//             (event) => {
//                 this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//                 this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//                 this.raycaster.setFromCamera(this.mouse, this.camera);

//                 const intersects = this.raycaster.intersectObjects([this.test]);
//                 //console.log(intersects[0] && intersects[0].point);

//                 if (intersects[0]) {
//                     this.point.x = intersects[0].point.x;
//                     this.point.y = intersects[0].point.y;
//                 }
//             },
//             false,
//         );
//     }

//     addMesh() {
//         this.material = new THREE.ShaderMaterial({
//             fragmentShader: fragmentShader,
//             vertexShader: vertexShader,

//             uniforms: {
//                 progress: { type: 'f', value: 0 },
//                 t1: { type: 't', value: this.textures[0] },
//                 mask: { type: 't', value: this.masks[0] },
//                 mask2: { type: 't', value: this.masks[1] },
//                 mouse: { type: 'v2', value: null },
//                 mousePressed: { type: 'f', value: 0 },
//                 move: { type: 'f', value: 0 },
//                 time: { type: 'f', value: 0 },
//             },

//             side: THREE.DoubleSide,
//             transparent: true,
//             depthTest: false,
//             depthWrite: false,
//         });
//         // this.geometry = new THREE.PlaneGeometry(100, 100, 10, 10);
//         let number = 512 * 512;
//         this.geometry = new THREE.BufferGeometry();
//         this.positions = new THREE.BufferAttribute(
//             new Float32Array(number * 3),
//             3,
//         );
//         this.coordinates = new THREE.BufferAttribute(
//             new Float32Array(number * 3),
//             3,
//         );
//         this.speed = new THREE.BufferAttribute(new Float32Array(number), 1);
//         this.offset = new THREE.BufferAttribute(new Float32Array(number), 1);
//         this.direction = new THREE.BufferAttribute(new Float32Array(number), 1);
//         this.press = new THREE.BufferAttribute(new Float32Array(number), 1);
//         function rand(a, b) {
//             return a + (b - a) * Math.random();
//         }

//         let index = 0;
//         for (let i = 0; i < 512; i++) {
//             let posX = i - 256;
//             for (let j = 0; j < 512; j++) {
//                 this.positions.setXYZ(index, posX * 2, (j - 256) * 2, 0);
//                 this.coordinates.setXYZ(index, i, j, 0);
//                 this.offset.setX(index, rand(-2000, 2000));
//                 this.speed.setX(index, rand(0.1, 0.6));
//                 this.direction.setX(index, Math.random() > 0.5 ? 1 : -1);
//                 this.press.setX(index, rand(0.4, 1));
//                 index++;
//             }
//         }

//         this.geometry.setAttribute('position', this.positions);
//         this.geometry.setAttribute('aCoordinates', this.coordinates);
//         this.geometry.setAttribute('aOffset', this.offset);
//         this.geometry.setAttribute('aSpeed', this.speed);
//         this.geometry.setAttribute('aPress', this.press);
//         this.geometry.setAttribute('aDirection', this.direction);

//         // this.material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });

//         this.mesh = new THREE.Points(this.geometry, this.material);
//         this.scene.add(this.mesh);
//     }

//     render() {
//         this.time++;

//         this.material.uniforms.time.value = this.time;
//         this.material.uniforms.move.value = this.move;
//         this.material.uniforms.mouse.value = this.point;
//         this.renderer.render(this.scene, this.camera);

//         window.requestAnimationFrame(this.render.bind(this));
//     }
// }
