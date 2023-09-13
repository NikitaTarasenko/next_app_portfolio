const fragmentShader = `
// // varying vec2 vUv;
// varying vec2 vCoordinates;
// vec3 colorA = vec3(0.912,0.191,0.652);
// vec3 colorB = vec3(1.000,0.777,0.052);

// void main() {
//   vec2 normalizedPixel = gl_FragCoord.xy/600.0;
//   vec3 color = mix(colorA, colorB, normalizedPixel.x);
//   gl_FragColor = vec4(color, 1.0);
// }



varying vec2 vUv;
varying vec2 vCoordinates;
varying vec3 vPos;
uniform sampler2D t1;
uniform sampler2D mask;
uniform sampler2D mask2;

void main() {
  vec4 maskTexture = texture2D(mask, gl_PointCoord);
  vec4 maskTexture2 = texture2D(mask2, gl_PointCoord);
  vec2 myUV = vec2(vCoordinates.x/512.,vCoordinates.y/512.);
  vec4 image = texture2D(t1,myUV);

  float alpha = 1. - clamp(0.,1., abs(vPos.z/900.));
  gl_FragColor = image;
 

  gl_FragColor.a *=maskTexture2.r*alpha;
 // gl_FragColor.a *=alpha;
}


`;

export default fragmentShader;
