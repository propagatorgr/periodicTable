// ======================
// GLOBALS
// ======================
let cell;
const cols = 18;
const rows = 7;
const marginTop = 50;
const marginSide = 20;

let cards = [];
let closeButton;

// ======================
// SETUP & RESIZE
// ======================
function setup() {
  resizeCanvasToWindow();
  loadCards();

  // ΚΟΥΜΠΙ ΚΛΕΙΣΙΜΑΤΟΣ ΚΑΡΤΕΛΩΝ (δίπλα από υπόμνημα)
  closeButton = createButton("Κλείσε όλες τις καρτέλες");
  styleCloseButton();
  positionCloseButton();
  closeButton.mousePressed(closeAllCards);
}

function windowResized() {
  resizeCanvasToWindow();
  loadCards();
  positionCloseButton();
}

function resizeCanvasToWindow() {
  cell = min((windowWidth - marginSide * 2) / cols, 80);

  const tableHeight = rows * cell + marginTop;
  const legendHeight = cell * 4;

  createCanvas(
    cols * cell + marginSide * 2,
    tableHeight + legendHeight
  );
}

// ======================
// DATA → CARDS
// ======================
function loadCards() {
  cards = [];
  for (let e of elements) {
    let x = marginSide + (e.c - 1) * cell;
    let y = marginTop + (e.r - 1) * cell;
    cards.push(new Card(x, y, e));
  }
}

// ======================
// DRAW LOOP
// ======================
function draw() {
  background(240);

  drawGroupNumbers();

  for (let c of cards) {
    c.display();
  }

  drawLegend();
}

// ======================
// GROUP NUMBERS
// ======================
function drawGroupNumbers() {
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(cell * 0.17);

  for (let g = 1; g <= cols; g++) {
    let x = marginSide + (g - 0.5) * cell;
    let y = marginTop - 25;
    text(g, x, y);
  }
}

// ======================
// COLORS BY CATEGORY
// ======================
function getColor(cat) {
  switch (cat) {
    case "alkali": return color(255, 183, 77);
    case "alkaline": return color(255, 241, 118);
    case "transition": return color(129, 212, 250);
    case "nonmetal": return color(200, 230, 201);
    case "metalloid": return color(174, 213, 129);
    case "postmetal": return color(189);
    case "halogen": return color(255, 205, 210);
    case "noble": return color(206, 147, 216);
    default: return color(255);
  }
}

// ======================
// CARD CLASS
// ======================
class Card {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.flip = false;
  }

  display() {
    stroke(0);
    fill(getColor(this.d.cat));
    rect(this.x, this.y, cell, cell, 8);

    fill(0);
    textAlign(CENTER, CENTER);

    if (!this.flip) {
      textSize(cell * 0.36);
      text(
        this.d.s,
        this.x + cell / 2,
        this.y + cell / 2 + cell * 0.04
      );
    } else {
      textSize(cell * 0.16);
      textLeading(cell * 0.22);
      text(
        this.d.n + "\n" +
        "Z = " + this.d.Z + "\n" +
        "A = " + this.d.A + "\n" +
        "e⁻ εξωτ. = " + this.d.v,
        this.x + cell / 2,
        this.y + cell / 2
      );
    }
  }

  check(mx, my) {
    if (
      mx > this.x && mx < this.x + cell &&
      my > this.y && my < this.y + cell
    ) {
      this.flip = !this.flip;
    }
  }
}

// ======================
// INTERACTION
// ======================
function mousePressed() {
  for (let c of cards) {
    c.check(mouseX, mouseY);
  }
}

function closeAllCards() {
  for (let c of cards) {
    c.flip = false;
  }
}

// ======================
// LEGEND + NOTE
// ======================
function drawLegend() {
  const legendX = marginSide;
  const legendY = rows * cell + marginTop + 30;

  const boxSize = cell * 0.3;
  const spacing = cell * 0.45;

  const legendItems = [
    { label: "Αλκάλια", color: getColor("alkali") },
    { label: "Αλκαλικές γαίες", color: getColor("alkaline") },
    { label: "Μεταβατικά μέταλλα", color: getColor("transition") },
    { label: "Μη μέταλλα", color: getColor("nonmetal") },
    { label: "Μεταλλοειδή", color: getColor("metalloid") },
    { label: "Άλλα μέταλλα", color: getColor("postmetal") },
    { label: "Ευγενή αέρια", color: getColor("noble") }
  ];

  const legendWidth = cell * 6.5;
  const noteWidth = cell * 7;
  const totalHeight = spacing * legendItems.length + 40;

  fill(255);
  stroke(0);
  rect(
    legendX - 10,
    legendY - 20,
    legendWidth + noteWidth + 20,
    totalHeight,
    12
  );

  textAlign(LEFT, CENTER);
  textSize(cell * 0.18);

  for (let i = 0; i < legendItems.length; i++) {
    fill(legendItems[i].color);
    rect(
      legendX,
      legendY + i * spacing,
      boxSize,
      boxSize,
      4
    );

    fill(0);
    text(
      legendItems[i].label,
      legendX + boxSize + 10,
      legendY + i * spacing + boxSize / 2
    );
  }

  // Σημείωση
  const noteX = legendX + legendWidth + 15;
  const noteY = legendY + cell * 0.4;

  fill(230);
  stroke(80);
  ellipse(noteX, noteY, cell * 0.32);

  fill(50);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(cell * 0.22);
  text("ℹ", noteX, noteY);

  textAlign(LEFT, CENTER);
  fill(0);
  textSize(cell * 0.18);
  text("Σημείωση:", noteX + cell * 0.3, noteY);

  textAlign(LEFT, TOP);
  fill(60);
  textSize(cell * 0.17);
  textLeading(cell * 0.28);
  text(
    "Ο αριθμός ηλεκτρονίων εξωτερικής στιβάδας\n" +
    "έχει υπολογιστεί απλοποιημένα,\n" +
    "ώστε να ταιριάζει στο γνωστικό επίπεδο\n" +
    "μαθητών Γυμνασίου.",
    noteX,
    noteY + cell * 0.6
  );
}

// ======================
// BUTTON STYLING & POSITION
// ======================
function styleCloseButton() {
  closeButton.style("font-size", "14px");
  closeButton.style("padding", "10px 16px");
  closeButton.style("background-color", "#e57373");
  closeButton.style("color", "white");
  closeButton.style("border", "none");
  closeButton.style("border-radius", "8px");
  closeButton.style("cursor", "pointer");
}

function positionCloseButton() {
  const legendTotalWidth = cell * (6.5 + 7);
  closeButton.position(
    marginSide + legendTotalWidth + 30,
    rows * cell + marginTop + 80
  );
}
