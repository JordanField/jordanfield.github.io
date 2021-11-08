let illo = new Zdog.Illustration({
  element: document.getElementById("zdog-logo"),
  scale: 5,
  rotate: {x: Zdog.TAU*0.1, y: Zdog.TAU*0.1}
});

let logo = new Zdog.Group({
  addTo: illo
});

let body = new Zdog.Shape({
  addTo: logo,
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
  stroke: 4,
  fill: true,
  color: '#FFF',
  translate: {x: (-27/2), y:(-39/2), z: 3.75}
});

let circle = new Zdog.Ellipse({
  addTo: logo,
  diameter: 5,
  stroke: 4,
  fill:true,
  color: '#FFF',
  translate: {x: -3.5, y: -14, z:3.75}
});


Array(15).fill().map(function(_,i) {
  logo.copyGraph({
    translate: {z: (-0.5)*i}
  })
});

let g = new Zdog.Group({
  addTo: illo
});

let c = new Zdog.Ellipse({
  addTo: g,
  translate: {z: 1000},
  visible: false
});

body.copyGraph({
  addTo: g,
  fill: true,
  stroke: false,
  color: "#182715"
});

circle.copyGraph({
  addTo: g,
  fill: true,
  stroke: false,
  color: "#182715"
})

function mousemove(event) {
  let logo = document.getElementById('zdog-logo');
  let logoRect = logo.getBoundingClientRect();

  let offset = {
    x: event.clientX - (logoRect.x + (logoRect.width / 2)),
    y: event.clientY - (logoRect.y + (logoRect.height / 2))
  };

  let angle = {
    x: Math.atan(offset.y / 1000),
    y: Math.atan(offset.x / 1000)
  };

  illo.rotate.x = -angle.x;
  illo.rotate.y = -angle.y;
}

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

window.addEventListener('mousemove', mousemove)

animate();