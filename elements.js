const elements = [

  // ===== ΑΛΚΑΛΙΑ =====
  { s:"H",  n:"Υδρογόνο", Z:1,  A:1,   v:1, r:1, c:1, cat:"alkali" },
  { s:"Li", n:"Λίθιο", Z:3,  A:7,   v:1, r:2, c:1, cat:"alkali" },
  { s:"Na", n:"Νάτριο", Z:11, A:23,  v:1, r:3, c:1, cat:"alkali" },
  { s:"K",  n:"Κάλιο", Z:19, A:39,  v:1, r:4, c:1, cat:"alkali" },
  { s:"Rb", n:"Ρουβίδιο", Z:37, A:85, v:1, r:5, c:1, cat:"alkali" },
  { s:"Cs", n:"Καίσιο", Z:55, A:133, v:1, r:6, c:1, cat:"alkali" },

  // ===== ΑΛΚΑΛΙΚΕΣ ΓΑΙΕΣ =====
  { s:"Be", n:"Βηρύλλιο", Z:4,  A:9,  v:2, r:2, c:2, cat:"alkaline" },
  { s:"Mg", n:"Μαγνήσιο", Z:12, A:24, v:2, r:3, c:2, cat:"alkaline" },
  { s:"Ca", n:"Ασβέστιο", Z:20, A:40, v:2, r:4, c:2, cat:"alkaline" },
  { s:"Sr", n:"Στρόντιο", Z:38, A:88, v:2, r:5, c:2, cat:"alkaline" },
  { s:"Ba", n:"Βάριο", Z:56, A:137,v:2, r:6, c:2, cat:"alkaline" },

  // ===== ΜΕΤΑΒΑΤΙΚΑ ΜΕΤΑΛΛΑ =====
  { s:"Mn", n:"Μαγγάνιο", Z:25, A:55, v:2, r:4, c:7, cat:"transition" },
  { s:"Fe", n:"Σίδηρος", Z:26, A:56, v:2, r:4, c:8, cat:"transition" },
  { s:"Co", n:"Κοβάλτιο", Z:27, A:59, v:2, r:4, c:9, cat:"transition" },
  { s:"Ni", n:"Νικέλιο", Z:28, A:58, v:2, r:4, c:10,cat:"transition" },
  { s:"Cu", n:"Χαλκός", Z:29, A:64, v:1, r:4, c:11,cat:"transition" },
  { s:"Zn", n:"Ψευδάργυρος", Z:30, A:65, v:2, r:4, c:12,cat:"transition" },
  { s:"Zr", n:"Ζιρκόνιο", Z:40, A:91, v:2, r:5, c:4, cat:"transition" },
  { s:"Nb", n:"Νιόβιο", Z:41, A:93, v:2, r:5, c:5, cat:"transition" },
  { s:"Ag", n:"Άργυρος", Z:47, A:108, v:1, r:5, c:11,cat:"transition" },
  { s:"Pt", n:"Λευκόχρυσος", Z:78, A:195, v:2, r:6, c:10,cat:"transition" },
  { s:"Hg", n:"Υδράργυρος", Z:80, A:201, v:2, r:6, c:12,cat:"transition" },
  { s:"Sc", n:"Σκάνδιο", Z:21, A:45, v:2, r:4, c:3, cat:"transition" },
  { s:"Cr", n:"Χρώμιο", Z:24, A:52, v:2, r:4, c:6, cat:"transition" },
  { s:"W", n:"Βολφράμιο", Z:74, A:184, v:2, r:6, c:6, cat:"transition" },

 // ===== ΜΗ ΜΕΤΑΛΛΑ  =====
{ s:"C",  n:"Άνθρακας",  Z:6,  A:12, v:4, r:2, c:14, cat:"nonmetal" },
{ s:"N",  n:"Άζωτο",     Z:7,  A:14, v:5, r:2, c:15, cat:"nonmetal" },
{ s:"O",  n:"Οξυγόνο",   Z:8,  A:16, v:6, r:2, c:16, cat:"nonmetal" },
{ s:"P",  n:"Φώσφορος",  Z:15, A:31, v:5, r:3, c:15, cat:"nonmetal" },
{ s:"S", n:"Θείο", Z:16, A:32, v:6, r:3, c:16, cat:"nonmetal" },
{ s:"Se", n:"Σελήνιο", Z:34, A:79, v:6, r:4, c:16, cat:"nonmetal" },


  // ===== ΜΕΤΑΛΛΟΕΙΔΗ / ΑΛΛΑ =====
  { s:"Ge", n:"Γερμάνιο", Z:32, A:73, v:4, r:4, c:14,cat:"metalloid" },
  { s:"As", n:"Αρσενικό", Z:33, A:75, v:5, r:4, c:15, cat:"metalloid" },
  { s:"Si", n:"Πυρίτιο", Z:14, A:28, v:4, r:3, c:14, cat:"metalloid" },
  { s:"B", n:"Βόριο", Z:5, A:11, v:3, r:2, c:13, cat:"metalloid" },
  { s:"Pb", n:"Μόλυβδος", Z:82, A:207,v:4, r:6, c:14,cat:"postmetal" },
  { s:"Bi", n:"Βισμούθιο", Z:83, A:209,v:5, r:6, c:15,cat:"postmetal" },
  { s:"Al", n:"Αργίλιο", Z:13, A:27, v:3, r:3, c:13, cat:"postmetal" },


// ===== ΑΛΟΓΟΝΑ =====
{ s:"F",  n:"Φθόριο",  Z:9,  A:19,  v:7, r:2, c:17, cat:"halogen" },
{ s:"Cl", n:"Χλώριο",  Z:17, A:35,  v:7, r:3, c:17, cat:"halogen" },
{ s:"Br", n:"Βρώμιο",  Z:35, A:80,  v:7, r:4, c:17, cat:"halogen" },
{ s:"I",  n:"Ιώδιο",   Z:53, A:127, v:7, r:5, c:17, cat:"halogen" },



  // ===== ΕΥΓΕΝΗ ΑΕΡΙΑ =====
  { s:"He", n:"Ήλιο", Z:2, A:4, v:2, r:1, c:18,cat:"noble" },
  { s:"Ne", n:"Νέον", Z:10, A:20, v:8, r:2, c:18,cat:"noble" },
  { s:"Ar", n:"Αργό", Z:18, A:40, v:8, r:3, c:18,cat:"noble" },
  { s:"Kr", n:"Κρυπτό", Z:36, A:84, v:8, r:4, c:18,cat:"noble" },
  { s:"Xe", n:"Ξένο", Z:54, A:131,v:8, r:5, c:18,cat:"noble" },
  { s:"Rn", n:"Ραδόνιο", Z:86, A:222,v:8, r:6, c:18,cat:"noble" }
];
