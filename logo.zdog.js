let illo = new Zdog.Illustration({
  element: document.getElementById("zdog-logo"),
  dragRotate: true,
  scale: 5,
  rotate: {x: Zdog.TAU*0.07, y: Zdog.TAU*0.07}
});

let body = new Zdog.Shape({
  addTo: illo,
  path: [
    {x: 0, y: 33},
    { arc: [
      {x: 0, y: 39},
      {x: 6, y: 39},
    ]},
    { arc: [
      {x: 12, y: 39},
      {x: 12, y: 33},
    ]},
    {x: 12, y: 15},
    {x: 15, y: 15},
    {x: 15, y: 33},
    {x: 19, y: 33},
    {x: 19, y: 15},
    {x: 21, y: 15},
    {x: 21, y: 11},
    {x: 19, y: 11},
    {x: 19, y: 6},
    { arc: [
      {x: 19, y: 4},
      {x: 21, y: 4},
    ]},
    { arc: [
      {x: 23, y: 4},
      {x: 23, y: 6},
    ]},
    {x: 27, y: 6},
    { arc: [
      {x: 27, y: 0},
      {x: 21, y: 0},
    ]},
    { arc: [
      {x: 15, y: 0},
      {x: 15, y: 6},
    ]},
    {x: 15, y: 11},
    {x: 8, y: 11},
    {x: 8, y: 33},
    { arc: [
      {x: 8, y: 35},
      {x: 6, y: 35},
    ]},
    { arc: [
      {x: 4, y: 35},
      {x: 4, y: 33},
    ]},
  ],
  closed: true,
  stroke: false,
  fill: true,
  color: '#5B1419',
  translate: {x: (-27/2), y:(-39/2)}
});

let circle = new Zdog.Ellipse({
  addTo: body,
  diameter: 5,
  stroke: 4,
  color: '#FFF',
  translate: {x: 10, y: 6}
});

Array(15).fill().map(function(_,i) {
  body.copyGraph({
    translate: {x: (-27/2), y:(-39/2), z:-(i)},
    fill: false,
    stroke: 4,
    color: "#fff"
  });
});

body.copy()

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();