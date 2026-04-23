let cell;
const cols = 18;
const rows = 7;
let cards = [];
const marginTop = 50;
const marginSide = 20;

// =========================
// setup / resize
// =========================

function setup() {
  resizeCanvasToWindow();
  loadCards();
}

function windowResized() {
  resizeCanvasToWindow();
  loadCards();
}

function resizeCanvasToWindow() {
  cell = min((windowWidth - marginSide * 2) / cols, 80);

  const tableHeight = rows * cell + marginTop + 20;
  const legendHeight = cell * 4;   // ← ΧΩΡΟΣ ΓΙΑ ΥΠΟΜΝΗΜΑ

  createCanvas(
    cols * cell + 2 * marginSide,
    tableHeight + legendHeight
  );
}

function loadCards() {
  cards = [];
  for (let e of elements) {
    let x = marginSide + (e.c - 1) * cell;
    let y = marginTop + (e.r - 1) * cell;
    cards.push(new Card(x, y, e));
  }
}

// =========================
// draw loop
// =========================

function draw() {
  background(240);
  drawGroupNumbers();
  drawLegend();   // ✅ ΥΠΟΜΝΗΜΑ ΧΡΩΜΑΤΩΝ
  for (let c of cards) c.display();
}

function drawGroupNumbers() {
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  for (let g = 1; g <= cols; g++) {
    text(g, marginSide + (g - 0.5) * cell, marginTop - 25);
  }
}
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

  // ---------- ΔΙΑΣΤΑΣΕΙΣ ----------
  const legendWidth = cell * 6.5;
  const noteWidth = cell * 7;
  const itemsHeight = spacing * legendItems.length;

  // ---------- ΠΛΑΙΣΙΟ ----------
  fill(255, 245);
  stroke(0);
  rect(
    legendX - 10,
    legendY - 20,
    legendWidth + noteWidth + 20,
    itemsHeight + 40,
    10
  );

  // ---------- ΥΠΟΜΝΗΜΑ ΧΡΩΜΑΤΩΝ ----------
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

 // ---------- ΣΗΜΕΙΩΣΗ (ℹ + ΤΙΤΛΟΣ + ΚΕΙΜΕΝΟ) ----------
const noteX = legendX + legendWidth + 15;
const noteY = legendY + cell * 0.4;   // κοινό κέντρο

// ℹ εικονίδιο
fill(220);
stroke(80);
ellipse(noteX, noteY, cell * 0.32);

fill(50);
noStroke();
textAlign(CENTER, CENTER);
textSize(cell * 0.22);
text("ℹ", noteX, noteY);

// Τίτλος "Σημείωση:" (ίδιο κατακόρυφο κέντρο)
textAlign(LEFT, CENTER);
fill(0);
textSize(cell * 0.18);
text(
  "Σημείωση:",
  noteX + cell * 0.3,
  noteY
);

// Κείμενο σημείωσης από κάτω
fill(60);
textAlign(LEFT, TOP);
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



function mousePressed() {
  for (let c of cards) c.check(mouseX, mouseY);
}

// =========================
// ΧΡΩΜΑ ΚΑΤΗΓΟΡΙΑΣ  ✅ ΕΔΩ
// =========================

function getColor(cat) {
  switch (cat) {
    case "alkali": return color(255, 183, 77);
    case "alkaline": return color(255, 241, 118);
    case "transition": return color(129, 212, 250);
    case "metalloid": return color(174, 213, 129);
    case "postmetal": return color(189);
    case "noble": return color(206, 147, 216);
	
    case "nonmetal": return color(200, 230, 201);   // ανοιχτό πράσινο
    case "halogen":  return color(255, 205, 210);   // ανοιχτό κόκκινο

    default: return color(255);
  }
}

// =========================
// Card class ✅ ΤΕΛΕΥΤΑΙΑ
// =========================

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
      textSize(cell * 0.4);
      text(this.d.s, this.x + cell / 2, this.y + cell / 2);
    } else {
      textSize(cell * 0.18);
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