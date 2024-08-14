// Wir benötigen eine Funktion, die die Produkte im einem Warenkorb (siehe Beispiel weiter unten) zu einem Gesamtpreis mit extra ausgewiesener Mehrwertsteuer addiert.
// (Beispieloutput: {total: 107, vat_total: 7, total_without_vat: 100})

// Schreibe erst Tests die geeignet sind, die Funktionalität dieser Funktion zu prüfen, dann entwickle die Funktion selbst, unter Zuhilfenahme der Tests.

// Beispiele für Tests:
// - warenkorb mit bestimmten Produkten soll definiertem Output entsprechen
// - leerer warenkorb soll bestimmten output ergeben
// - negative produktmenge soll irgeneinen Fehler ergeben (das kann ein bestimmter funktionsoutput oder ein Error sein, euch überlassen)
// - mehrwertsteuersatz soll berücksichtigt werden
// Gerne weitere ausdenken :)

const warenkorb = [
  {
    name: "Gurke",
    symbol: "🥒",
    price_per_unit: 0.8,
    amount_of_units: 7,
    vat_rate: 7,
  },
  {
    name: "Aubergine",
    symbol: "🍆",
    price_per_unit: 1.75,
    amount_of_units: 4,
    vat_rate: 7,
  },
  {
    name: "Kartoffel",
    symbol: "🥔",
    price_per_unit: 0.4,
    amount_of_units: 15,
    vat_rate: 7,
  },
  {
    name: "Kürbis",
    symbol: "🎃",
    price_per_unit: 2.5,
    amount_of_units: 2,
    vat_rate: 7,
  },
  {
    name: "Zwiebel",
    symbol: "🧅",
    price_per_unit: 0.6,
    amount_of_units: 12,
    vat_rate: 7,
  },
  {
    name: "Champignonschnitzel",
    symbol: "🍄",
    price_per_unit: 1.8,
    amount_of_units: 10,
    vat_rate: 19,
  },
];
