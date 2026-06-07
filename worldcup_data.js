// ═══════════════════════════════════════════════════════════════
// 2026 FIFA World Cup Match Data
// Updated daily at 6am by Claude scheduled task
// ═══════════════════════════════════════════════════════════════
// LAST_UPDATED_START
window.WC_LAST_UPDATED = "SIMULATION — full 2026 WC (103 matches)";
// LAST_UPDATED_END

// MATCH_DATA_START
window.WC_MATCH_DATA = [
  // ── GROUP A: Czechia, Mexico, South Korea, South Africa ──
  {stage:"group",teamA:"Mexico",teamB:"South Africa",scoreA:3,scoreB:0},
  {stage:"group",teamA:"Czechia",teamB:"South Korea",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Mexico",teamB:"Czechia",scoreA:2,scoreB:1},
  {stage:"group",teamA:"South Korea",teamB:"South Africa",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Mexico",teamB:"South Korea",scoreA:1,scoreB:0},
  {stage:"group",teamA:"Czechia",teamB:"South Africa",scoreA:2,scoreB:0},
  // ── GROUP B: Bosnia and Herzegovina, Canada, Qatar, Switzerland ──
  {stage:"group",teamA:"Switzerland",teamB:"Qatar",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Canada",teamB:"Bosnia and Herzegovina",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Switzerland",teamB:"Canada",scoreA:1,scoreB:1},
  {stage:"group",teamA:"Bosnia and Herzegovina",teamB:"Qatar",scoreA:1,scoreB:0},
  {stage:"group",teamA:"Switzerland",teamB:"Bosnia and Herzegovina",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Canada",teamB:"Qatar",scoreA:3,scoreB:0},
  // ── GROUP C: Brazil, Haiti, Morocco, Scotland ──
  {stage:"group",teamA:"Brazil",teamB:"Haiti",scoreA:4,scoreB:0},
  {stage:"group",teamA:"Morocco",teamB:"Scotland",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Brazil",teamB:"Morocco",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Scotland",teamB:"Haiti",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Brazil",teamB:"Scotland",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Morocco",teamB:"Haiti",scoreA:3,scoreB:0},
  // ── GROUP D: Australia, Paraguay, Turkiye, USA ──
  {stage:"group",teamA:"Turkiye",teamB:"Australia",scoreA:2,scoreB:1},
  {stage:"group",teamA:"USA",teamB:"Paraguay",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Turkiye",teamB:"Paraguay",scoreA:1,scoreB:1},
  {stage:"group",teamA:"USA",teamB:"Australia",scoreA:3,scoreB:1},
  {stage:"group",teamA:"Turkiye",teamB:"USA",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Paraguay",teamB:"Australia",scoreA:2,scoreB:1},
  // ── GROUP E: Curacao, Ecuador, Germany, Ivory Coast ──
  {stage:"group",teamA:"Germany",teamB:"Curacao",scoreA:3,scoreB:0},
  {stage:"group",teamA:"Ecuador",teamB:"Ivory Coast",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Germany",teamB:"Ecuador",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Ivory Coast",teamB:"Curacao",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Germany",teamB:"Ivory Coast",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Ecuador",teamB:"Curacao",scoreA:3,scoreB:0},
  // ── GROUP F: Japan, Netherlands, Sweden, Tunisia ──
  {stage:"group",teamA:"Netherlands",teamB:"Sweden",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Japan",teamB:"Tunisia",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Netherlands",teamB:"Japan",scoreA:1,scoreB:1},
  {stage:"group",teamA:"Sweden",teamB:"Tunisia",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Netherlands",teamB:"Tunisia",scoreA:3,scoreB:0},
  {stage:"group",teamA:"Japan",teamB:"Sweden",scoreA:2,scoreB:1},
  // ── GROUP G: Belgium, Egypt, Iran, New Zealand ──
  {stage:"group",teamA:"Belgium",teamB:"New Zealand",scoreA:3,scoreB:0},
  {stage:"group",teamA:"Egypt",teamB:"Iran",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Belgium",teamB:"Iran",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Egypt",teamB:"New Zealand",scoreA:3,scoreB:0},
  {stage:"group",teamA:"Belgium",teamB:"Egypt",scoreA:1,scoreB:0},
  {stage:"group",teamA:"Iran",teamB:"New Zealand",scoreA:3,scoreB:1},
  // ── GROUP H: Cape Verde, Saudi Arabia, Spain, Uruguay ──
  {stage:"group",teamA:"Spain",teamB:"Cape Verde",scoreA:3,scoreB:0},
  {stage:"group",teamA:"Uruguay",teamB:"Saudi Arabia",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Spain",teamB:"Uruguay",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Cape Verde",teamB:"Saudi Arabia",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Spain",teamB:"Saudi Arabia",scoreA:4,scoreB:0},
  {stage:"group",teamA:"Uruguay",teamB:"Cape Verde",scoreA:2,scoreB:0},
  // ── GROUP I: France, Iraq, Norway, Senegal ──
  {stage:"group",teamA:"France",teamB:"Iraq",scoreA:3,scoreB:0},
  {stage:"group",teamA:"Norway",teamB:"Senegal",scoreA:2,scoreB:1},
  {stage:"group",teamA:"France",teamB:"Norway",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Senegal",teamB:"Iraq",scoreA:2,scoreB:0},
  {stage:"group",teamA:"France",teamB:"Senegal",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Norway",teamB:"Iraq",scoreA:3,scoreB:0},
  // ── GROUP J: Algeria, Argentina, Austria, Jordan ──
  {stage:"group",teamA:"Argentina",teamB:"Jordan",scoreA:3,scoreB:0},
  {stage:"group",teamA:"Austria",teamB:"Algeria",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Argentina",teamB:"Austria",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Algeria",teamB:"Jordan",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Argentina",teamB:"Algeria",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Austria",teamB:"Jordan",scoreA:2,scoreB:0},
  // ── GROUP K: Colombia, DR Congo, Portugal, Uzbekistan ──
  {stage:"group",teamA:"Portugal",teamB:"Uzbekistan",scoreA:3,scoreB:0},
  {stage:"group",teamA:"Colombia",teamB:"DR Congo",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Portugal",teamB:"Colombia",scoreA:2,scoreB:1},
  {stage:"group",teamA:"DR Congo",teamB:"Uzbekistan",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Portugal",teamB:"DR Congo",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Colombia",teamB:"Uzbekistan",scoreA:3,scoreB:0},
  // ── GROUP L: Croatia, England, Ghana, Panama ──
  {stage:"group",teamA:"England",teamB:"Panama",scoreA:3,scoreB:0},
  {stage:"group",teamA:"Croatia",teamB:"Ghana",scoreA:2,scoreB:0},
  {stage:"group",teamA:"England",teamB:"Croatia",scoreA:2,scoreB:1},
  {stage:"group",teamA:"Ghana",teamB:"Panama",scoreA:2,scoreB:1},
  {stage:"group",teamA:"England",teamB:"Ghana",scoreA:2,scoreB:0},
  {stage:"group",teamA:"Croatia",teamB:"Panama",scoreA:2,scoreB:0},
  // ── ROUND OF 32 ──
  {stage:"r32",teamA:"Spain",teamB:"Iran",scoreA:2,scoreB:0},
  {stage:"r32",teamA:"Brazil",teamB:"Sweden",scoreA:3,scoreB:1},
  {stage:"r32",teamA:"Germany",teamB:"Scotland",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"France",teamB:"South Korea",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"Argentina",teamB:"Bosnia and Herzegovina",scoreA:3,scoreB:0},
  {stage:"r32",teamA:"Portugal",teamB:"Paraguay",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"England",teamB:"Ivory Coast",scoreA:2,scoreB:0},
  {stage:"r32",teamA:"Netherlands",teamB:"Senegal",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"Croatia",teamB:"Mexico",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"Belgium",teamB:"Switzerland",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"Norway",teamB:"Colombia",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"Turkiye",teamB:"Austria",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"Uruguay",teamB:"Ecuador",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"Japan",teamB:"Czechia",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"USA",teamB:"Morocco",scoreA:2,scoreB:1},
  {stage:"r32",teamA:"Canada",teamB:"Egypt",scoreA:2,scoreB:1},
  // ── ROUND OF 16 ──
  {stage:"r16",teamA:"Spain",teamB:"Brazil",scoreA:2,scoreB:1},
  {stage:"r16",teamA:"France",teamB:"Germany",scoreA:2,scoreB:1},
  {stage:"r16",teamA:"Argentina",teamB:"Portugal",scoreA:2,scoreB:1},
  {stage:"r16",teamA:"Netherlands",teamB:"England",scoreA:2,scoreB:1},
  {stage:"r16",teamA:"Belgium",teamB:"Croatia",scoreA:2,scoreB:1},
  {stage:"r16",teamA:"Turkiye",teamB:"Norway",scoreA:2,scoreB:1},
  {stage:"r16",teamA:"Uruguay",teamB:"Japan",scoreA:2,scoreB:1},
  {stage:"r16",teamA:"USA",teamB:"Canada",scoreA:2,scoreB:1},
  // ── QUARTERFINALS ──
  {stage:"qf",teamA:"France",teamB:"Spain",scoreA:2,scoreB:1},
  {stage:"qf",teamA:"Argentina",teamB:"Netherlands",scoreA:2,scoreB:1},
  {stage:"qf",teamA:"Belgium",teamB:"Turkiye",scoreA:2,scoreB:1},
  {stage:"qf",teamA:"Uruguay",teamB:"USA",scoreA:2,scoreB:1},
  // ── SEMIFINALS ──
  {stage:"sf",teamA:"Argentina",teamB:"France",scoreA:2,scoreB:1},
  {stage:"sf",teamA:"Uruguay",teamB:"Belgium",scoreA:2,scoreB:1},
  // ── FINAL ──
  {stage:"final",teamA:"Argentina",teamB:"Uruguay",scoreA:2,scoreB:1},
];
// MATCH_DATA_END
