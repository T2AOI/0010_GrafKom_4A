function setup() {
  createCanvas(640, 480);
}

function draw() {

  // Supaya ke tengah
  // 300/2 = 150 - pp/2
  // 150 - (80/2=40)

  background(200);
  fill(65);

  // ======= Karakter ========

  // Membuat kepala
  rect(115, 83, 70, 70, 5);

  //Membuat leher
  rect(140, 145, 20, 20, 5);

  // Membuat badan
  rect(110, 165, 80, 20, 5);
  rect(120, 160, 60, 80, 5);

  // Membuat tangan
  rect(95, 160, 20, 80, 5);
  rect(185, 160, 20, 80, 5);

  // Membuat kaki
  rect(120, 245, 60, 20, 5);
  rect(120, 250, 20, 80, 5);
  rect(160, 250, 20, 80, 5);


  // ======== Suasana =========

  // Supaya ke tengah
  // 640/2 = 320 - pp/2
  // 320 - (80/2=40)

  // Suasana kanan
  fill(150, 124, 63);
  rect(310, 95, 330, 15, 0);
  rect(330, 110, 320, 60, 0);
  rect(310, 90, 20, 390, 5);

  // Air
  fill(72, 133, 232);
  // Menghilangkan garis pinggir
  noStroke();
  rect(335, 175, 320, 310, 5);
  // Batas menghilangkan garis pinggir
  stroke(0);

  // Bayangan
  fill(65, 140);
  // Menghilangkan garis pinggir
  noStroke();
  rect(330, 110, 320, 90, 0);
  triangle(310, 175, 270, 200, 310, 200);
  rect(270, 200, 40, 285, 0);
  // Batas menghilangkan garis pinggir
  stroke(0);

}