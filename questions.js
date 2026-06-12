'use strict';

// ===========================
// WORKSHEET IMAGE PATHS
// ===========================
const WORKSHEETS = {
  schreiben: [1,3,5,7,9,11,13,15,17,19,21,23,25,27].map(n =>
    `images/worksheets/20260528160859922_p${String(n).padStart(2,'0')}.jpg`
  ),
  sprechen1: [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,23,25,26,27,28,29,30,31,32,33,34,35,37,39,41,42,43,44,45,47,48,49,51,52,53,54,55,56,57,58,59,60].map(n =>
    `images/worksheets/20260528161040630_p${String(n).padStart(2,'0')}.jpg`
  ),
  sprechen2: Array.from({length:36},(_,i)=>
    `images/worksheets/20260528161129777_p${String(i+1).padStart(2,'0')}.jpg`
  ),
  gemischt: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,31,32,33,34,35,36,38,40,41,42,43,44,45,47].map(n =>
    `images/worksheets/20260528161308241_p${String(n).padStart(2,'0')}.jpg`
  )
};

// ===========================
// EXAM FORMAT DATA
// ===========================
const EXAM_FORMATS = {
  goethe: {
    name: 'Goethe-Zertifikat B1',
    logo: '🦁',
    color: '#F5B400',
    description: 'The international gold standard B1 certificate. Modular exam — you can retake individual failed sections.',
    sections: [
      { name: 'Lesen', time: '65 min', parts: 5, points: '100', passmark: '60/100' },
      { name: 'Hören', time: '40 min', parts: 4, points: '100', passmark: '60/100' },
      { name: 'Schreiben', time: '60 min', parts: 3, points: '100', passmark: '60/100' },
      { name: 'Sprechen', time: '15 min', parts: 3, points: '100', passmark: '60/100' }
    ],
    rule: 'Must pass EACH section separately with ≥60%. Modular — retake only failed parts.',
    writing: { tasks: 3, task1: 'Informal email (80 words)', task2: 'Forum post / opinion (80 words)', task3: 'Short formal email (40 words)' },
    speaking: { prepTime: '15 min', part1: 'Plan an event together', part2: 'Short presentation (2 min)', part3: 'Feedback on partner\'s presentation' }
  },
  telc: {
    name: 'telc Deutsch B1',
    logo: '🇩🇪',
    color: '#3B82F6',
    description: 'Most common in Germany. Required for citizenship, integration certificates. Written + oral separately.',
    sections: [
      { name: 'Leseverstehen', time: '90 min (shared)', parts: 3, points: '75', passmark: '45/75' },
      { name: 'Sprachbausteine', time: '(within 90 min)', parts: 2, points: '30', passmark: '18/30' },
      { name: 'Hörverstehen', time: '30 min', parts: 3, points: '75', passmark: '45/75' },
      { name: 'Schriftl. Ausdruck', time: '30 min', parts: 1, points: '45', passmark: '27/45' },
      { name: 'Mündliche Prüfung', time: '15 min', parts: 3, points: '75', passmark: '45/75' }
    ],
    rule: 'Must score ≥60% on Written (135/225) AND ≥60% on Oral (45/75) separately.',
    writing: { tasks: 1, task1: 'One formal/semi-formal letter or email (80-100 words, 4 bullet points)' },
    speaking: { prepTime: '20 min', part1: 'Introduce yourself', part2: 'Talk about a topic from your card', part3: 'Plan something together' }
  }
};

// ===========================
// READING EXERCISES
// ===========================
const READING = {
  // --- GOETHE: Part 1 (5 parts total, this is part 1) ---
  goethe_p1: {
    examType: 'goethe', part: 1,
    title: 'Lesen — Teil 1 (Goethe)', subtitle: 'True / False — Blog / E-Mail',
    instruction: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
    time: 10, totalParts: 5, thisPart: 1,
    text: {
      title: 'Mein erstes Jahr in Deutschland',
      content: `Liebe Freunde und Familie,

ich lebe jetzt seit einem Jahr in München und ich möchte euch von meinen Erfahrungen erzählen. Am Anfang war es nicht einfach. Die Sprache war das größte Problem, aber ich habe einen Deutschkurs an der VHS besucht und mein Deutsch wird jeden Tag besser.

Was mir am besten gefällt: die Pünktlichkeit! In Deutschland kommen Busse und Bahnen immer pünktlich. Das ist so anders als in meiner Heimat. Auch die Trennung von Müll finde ich interessant — man muss den Abfall in verschiedene Tonnen werfen: Papier, Glas, Plastik und Restmüll.

Das Wetter ist allerdings manchmal schwierig für mich. Im Winter ist es sehr kalt und es gibt nicht viel Sonne. Aber ich habe schon neue Freunde gefunden, und das hilft sehr!

Was vermisse ich? Das Essen aus meiner Heimat natürlich! Deutsches Essen ist gut, aber manchmal träume ich von den Gerichten meiner Mutter.

Bis bald!`
    },
    questions: [
      { id:1, text: 'Die Person lebt seit einem Jahr in München.', answer: true },
      { id:2, text: 'Der Deutschkurs findet in einer Schule statt.', answer: false },
      { id:3, text: 'In Deutschland fahren Busse oft unpünktlich.', answer: false },
      { id:4, text: 'Man muss in Deutschland den Müll trennen.', answer: true },
      { id:5, text: 'Das Wetter in Deutschland ist immer schön.', answer: false },
      { id:6, text: 'Die Person hat in Deutschland neue Freunde gefunden.', answer: true },
      { id:7, text: 'Die Person vermisst das Essen aus ihrer Heimat.', answer: true },
      { id:8, text: 'Deutsches Essen schmeckt der Person überhaupt nicht.', answer: false }
    ]
  },

  // --- GOETHE: Part 2 (MCQ, newspaper article) ---
  goethe_p2: {
    examType: 'goethe', part: 2,
    title: 'Lesen — Teil 2 (Goethe)', subtitle: 'Multiple Choice — Zeitungsartikel',
    instruction: 'Lesen Sie den Text. Welche Antwort (a, b oder c) ist richtig?',
    time: 15, totalParts: 5, thisPart: 2,
    articleTitle: 'Das kauf ich! Nicht.',
    articleText: `Niedrige Zinsen und die Gefahr steigender Preise: Geld auszugeben erscheint vielen Menschen derzeit ratsamer, als es anzulegen. Viele Kaufentscheidungen fällen wir im Vertrauen auf unsere Erfahrung.

Geld verdienen ist nicht einfach, aber es auszugeben: noch schwieriger. Das findet jedenfalls Steffen L. aus Schleswig-Holstein. Er arbeitet im mittleren Management eines IT-Dienstleisters — ein gut bezahlter Job. Gerade hat sich der Mittvierziger einen Porsche Cayenne gekauft. 75.000 Euro, bar bezahlt. Er will Geld ausgeben, hat sich das sogar vorgenommen. Doch es fällt ihm schwer.

Konsumieren wollen und es doch nicht tun: Damit ist Steffen L. nicht allein. Geringverdiener geben einen größeren Teil ihres Einkommens für Grundbedürfnisse aus. Gutverdiener hingegen sparen mehr und haben mehr Geld für Freizeit — aber nicht unbedingt mehr Zeit dafür.`,
    questions: [
      { id:1, question:'Viele Menschen bevorzugen es,', options:['a) Geld zu sparen.','b) Geld auszugeben, statt es anzulegen.','c) weniger Geld zu verdienen.'], answer:'b' },
      { id:2, question:'Steffen L. ist', options:['a) Geringverdiener.','b) arbeitslos.','c) gut bezahlter Manager.'], answer:'c' },
      { id:3, question:'Steffen kaufte seinen Porsche', options:['a) auf Kredit.','b) mit Bargeld.','c) auf Ratenzahlung.'], answer:'b' },
      { id:4, question:'Geringverdiener', options:['a) sparen sehr viel.','b) geben mehr Anteil ihres Geldes für Grundbedürfnisse aus.','c) kaufen teure Autos.'], answer:'b' },
      { id:5, question:'Gutverdiener', options:['a) haben immer viel Freizeit.','b) sparen mehr, haben aber nicht unbedingt mehr Zeit für Freizeit.','c) geben nichts für Freizeit aus.'], answer:'b' }
    ]
  },

  // --- TELC: Teil 1 (Globalverstehen — match headlines to texts) ---
  telc_p1: {
    examType: 'telc', part: 1,
    title: 'Leseverstehen — Teil 1 (telc)', subtitle: 'Globalverstehen — Überschriften zuordnen',
    instruction: 'Lesen Sie die Überschriften A–J und die Texte 1–5. Ordnen Sie zu. Jede Überschrift kann nur einmal benutzt werden.',
    time: 10,
    headlines: [
      { id:'A', text:'Doppelt so viele Studenten wie vor einer Generation' },
      { id:'B', text:'Das 3D-Fernsehen steht vor dem Aus' },
      { id:'C', text:'Die Welt ist unsportlich' },
      { id:'D', text:'90 Prozent der Deutschen sind online' },
      { id:'E', text:'Warum wir ohne Zeitumstellung besser schlafen' },
      { id:'F', text:'Hackerangriff auf bekannte Fluggesellschaft' },
      { id:'G', text:'Bewegung — Warum Sport so gesund ist' },
      { id:'H', text:'Vorsicht bei Reisegewinnen' },
      { id:'I', text:'Wasser weltweit — Weltwassertag' },
      { id:'J', text:'Yoga für Kinder'}
    ],
    texts: [
      { id:1, content:'Nicht nur beim Duschen, Zähneputzen oder Waschen verbrauchen wir Wasser. Jedes Produkt trägt einen unsichtbaren „Wasserrucksack" mit sich herum. Weil Wasser so wichtig ist, gibt es den Weltwassertag — seit 1993 immer am 22. März.', answer:'I', explanation:'Der Text handelt vom Weltwassertag und dem weltweiten Wasserverbrauch.' },
      { id:2, content:'Fast jeder zweite Deutsche bewegt sich zu wenig. Aber auch weltweit sieht es nicht besser aus: Mehr als 1,4 Milliarden Menschen sitzt zu viel. Die Folgen sind Herzkrankheiten, Diabetes und Übergewicht.', answer:'C', explanation:'Die Welt ist unsportlich — zu viel Sitzen, zu wenig Bewegung.' },
      { id:3, content:'Bewegung stärkt das Herz-Kreislauf-System und senkt den Blutdruck. Der Körper schüttet beim Sport Endorphine aus, die die Stimmung heben. Regelmäßige Bewegung reduziert Stress und stärkt das Immunsystem.', answer:'G', explanation:'Der Text erklärt die gesundheitlichen Vorteile von Bewegung.' },
      { id:4, content:'Eine Gewinnbenachrichtigung im Briefkasten oder ein Anruf mit einem Traumurlaub als Gewinn? Vorsicht — das ist fast immer Betrug! Die Verbraucherzentrale warnt vor gefälschten Versprechen.', answer:'H', explanation:'Warnung vor Betrug bei angeblichen Reisegewinnen.' },
      { id:5, content:'Yoga kann Kindern helfen, sich zu entspannen, die Konzentration zu verbessern und mit Stress besser umzugehen. Viele Schulen bieten heute spezielle Kurse für Kinder ab vier Jahren an.', answer:'J', explanation:'Yoga speziell für Kinder — Konzentration und Entspannung.' }
    ]
  },

  // --- TELC: Teil 2 (Detailverstehen — MCQ) ---
  telc_p2: {
    examType: 'telc', part: 2,
    title: 'Leseverstehen — Teil 2 (telc)', subtitle: 'Detailverstehen — Multiple Choice',
    instruction: 'Lesen Sie den Text und die Aufgaben 6–10. Welche Lösung (a, b oder c) ist richtig?',
    time: 15,
    articleTitle: 'Das kauf ich! Nicht.',
    articleText: `Niedrige Zinsen und die Gefahr steigender Preise: Geld auszugeben erscheint vielen Menschen derzeit ratsamer, als es anzulegen. Viele Kaufentscheidungen fällen wir im Vertrauen auf unsere Erfahrung.

Geld verdienen ist nicht einfach, aber es auszugeben: noch schwieriger. Das findet jedenfalls Steffen L. aus Schleswig-Holstein. Er arbeitet im mittleren Management eines IT-Dienstleisters — ein gut bezahlter Job. Gerade hat sich der Mittvierziger einen Porsche Cayenne gekauft. 75.000 Euro, bar bezahlt. Er will Geld ausgeben, hat sich das sogar vorgenommen. Doch es fällt ihm schwer.

Geringverdiener geben einen größeren Teil ihres Einkommens für Grundbedürfnisse aus. Gutverdiener hingegen sparen mehr und haben mehr Geld für Freizeit — aber nicht unbedingt mehr Zeit dafür.`,
    questions: [
      { id:6, question:'Viele Menschen bevorzugen es,', options:['a) Geld zu sparen, als es auszugeben.','b) Geld auszugeben, als es anzulegen.','c) weniger Geld zu verdienen.'], answer:'b' },
      { id:7, question:'Steffen L.', options:['a) findet Sparen wichtig.','b) ist Geringverdiener.','c) möchte mehr Geld ausgeben.'], answer:'c' },
      { id:8, question:'Geringverdiener', options:['a) geben höheren Anteil für Lebensmittel aus.','b) geben kaum Geld für Lebensmittel aus.','c) sparen sehr viel.'], answer:'a' },
      { id:9, question:'Steffen kaufte', options:['a) einen VW Golf.','b) einen Porsche Cayenne bar.','c) ein Auto auf Kredit.'], answer:'b' },
      { id:10, question:'Gutverdiener', options:['a) haben keine Freizeit.','b) geben mehr für Lebensmittel aus.','c) sparen mehr, haben aber nicht unbedingt mehr Freizeit.'], answer:'c' }
    ]
  },

  // --- TELC: Teil 3 (Selektives Verstehen — match situations to ads) ---
  telc_p3: {
    examType: 'telc', part: 3,
    title: 'Leseverstehen — Teil 3 (telc)', subtitle: 'Selektives Verstehen — Anzeigen zuordnen',
    instruction: 'Lesen Sie die Situationen 11–20 und die Anzeigen a–l. Finden Sie für jede Situation die passende Anzeige. Wenn es keine passende Anzeige gibt, markieren Sie x.',
    time: 15,
    situations: [
      { id:11, text:'Sie möchten Sport machen und erstmal schauen, welche Sportart Ihnen Spaß macht.' },
      { id:12, text:'Sie haben die B1-Prüfung bestanden und möchten nun die B2-Prüfung machen.' },
      { id:13, text:'Sie möchten bald verreisen, aber nicht online buchen.' },
      { id:14, text:'Ihr Sohn hat Marketing studiert und sucht ein Praktikum.' },
      { id:15, text:'Sie suchen für Ihre Hochzeitsfeier ein passendes Restaurant.' },
      { id:16, text:'Sie möchten jeden Morgen frische Brötchen kaufen.' },
      { id:17, text:'Sie suchen eine günstige 2-Zimmer-Wohnung in der Stadtmitte.' },
      { id:18, text:'Ihr Kind hat Zahnschmerzen und braucht schnell einen Termin.' },
      { id:19, text:'Sie möchten Ihr altes Fahrrad verkaufen und ein neues kaufen.' },
      { id:20, text:'Sie suchen eine Kinderbetreuung für Ihren 3-jährigen Sohn.' }
    ],
    ads: [
      { id:'a', title:'ReiseLust Reisebüro', text:'Jede Reise beginnt im Reisebüro! Frühbucher-Angebote bis 30.09. Rolandstr. 32. Tel: 090/21 30 52' },
      { id:'b', title:'PRAKTIKUM M/W GESUCHT', text:'al design – Werbeagentur Berlin. Internet Marketing, Social Media, Webdesign. info@aldesign.de' },
      { id:'c', title:'Betriebliche Weiterbildung', text:'Seminar: Kommunikation am Arbeitsplatz. Montag 12-16:30 Uhr im Seminarraum HLW17.' },
      { id:'d', title:'Faschingsparty', text:'Alljährliche Faschingsparty, Freitag 14. Feb ab 20 Uhr. Anmeldung bis 10. Feb.' },
      { id:'e', title:'Sportverein – Schnupperkurs', text:'Tennis, Volleyball, Schwimmen, Yoga ausprobieren! Kostenlos, jeden Samstag 10-13 Uhr. sport@freude.de' },
      { id:'f', title:'VHS Sprachkurse B2', text:'Deutschkurs B2 — Anmeldung jetzt! Kursstart 1. September. Mo+Mi 18-20 Uhr. 180€. Tel: 0221 98765' },
      { id:'g', title:'Restaurant Zur goldenen Hochzeit', text:'Hochzeitsmenüs, Festsäle bis 200 Personen, Catering. Reservierung: 069 123456' },
      { id:'h', title:'Zahnarztpraxis Dr. Müller', text:'Auch für Notfälle! Mo-Fr 8-18, Sa 9-13 Uhr. Schnelle Termine für Schmerzpatienten. 0221 333444' },
      { id:'i', title:'Bäckerei Frisch & Gut', text:'Täglich frische Brötchen! Mo-Sa 6-18 Uhr, So 7-12 Uhr. Lieferservice ab 10 Stück.' },
      { id:'j', title:'Fahrrad-Markt Müller', text:'Neu und gebraucht kaufen & verkaufen. E-Bikes, Mountainbikes, Cityräder. Di-Sa 10-18 Uhr.' },
      { id:'k', title:'Kindergarten Sonnenschein', text:'Kinder von 2-6 Jahren, liebevolle Betreuung, Ganztag möglich. kindergarten-sonnenschein@mail.de' },
      { id:'l', title:'2-Zimmer-Wohnung', text:'2 ZKB, 55m², zentrale Lage, Balkon. Kaltmiete 750€+NK. Sofort frei. 0163 7891234' }
    ],
    answers: { 11:'e', 12:'f', 13:'a', 14:'b', 15:'g', 16:'i', 17:'l', 18:'h', 19:'j', 20:'k' }
  }
};

// ===========================
// LISTENING EXERCISES
// ===========================
const LISTENING = {
  // --- GOETHE: Teil 1 (5 short monologues) ---
  goethe_p1: {
    examType: 'goethe', part: 1,
    title: 'Hören — Teil 1 (Goethe)', subtitle: '5 kurze Texte — je 2 Fragen',
    instruction: 'Sie hören fünf kurze Texte. Jeder Text wird zweimal gespielt. Beantworten Sie zu jedem Text zwei Fragen.',
    note: '⚠️ Im echten Goethe B1 hören Sie Audio. Hier üben Sie die Fragetypen mit Beispielfragen.',
    clips: [
      { id:1, context:'📞 Anrufbeantworter — Arztpraxis',
        q1: { question:'Wann hat die Praxis heute geschlossen?', options:['a) Um 12 Uhr','b) Um 13 Uhr','c) Um 14 Uhr'], answer:'b' },
        q2: { question:'Was soll der Anrufer tun?', options:['a) Noch einmal anrufen','b) Eine Nachricht hinterlassen','c) In die Praxis kommen'], answer:'a' }
      },
      { id:2, context:'📻 Radio — Wetterbericht',
        q1: { question:'Wie wird das Wetter am Samstag?', options:['a) Sonnig','b) Bewölkt mit Regen','c) Windig'], answer:'b' },
        q2: { question:'Was sollen die Zuhörer mitnehmen?', options:['a) Sonnencreme','b) Einen Regenschirm','c) Warme Kleidung'], answer:'b' }
      },
      { id:3, context:'🏪 Kaufhaus-Durchsage',
        q1: { question:'Was wird im Angebot angeboten?', options:['a) Kleidung','b) Elektronik','c) Lebensmittel'], answer:'c' },
        q2: { question:'Bis wann gilt das Angebot?', options:['a) Bis heute Abend 18 Uhr','b) Bis Samstag','c) Bis Ende des Monats'], answer:'a' }
      },
      { id:4, context:'📱 Freundin hinterlässt Nachricht',
        q1: { question:'Warum ruft die Freundin an?', options:['a) Sie kommt zu spät','b) Sie kommt nicht','c) Sie braucht eine Adresse'], answer:'a' },
        q2: { question:'Womit kommt sie?', options:['a) Mit dem Bus','b) Mit dem Auto','c) Zu Fuß'], answer:'b' }
      },
      { id:5, context:'🚂 Bahnhofsdurchsage',
        q1: { question:'Was ist das Problem mit dem Zug?', options:['a) Er hat Verspätung','b) Er fällt aus','c) Er fährt von einem anderen Gleis'], answer:'a' },
        q2: { question:'Auf welchem Gleis wartet der Zug?', options:['a) Gleis 5','b) Gleis 8','c) Gleis 12'], answer:'c' }
      }
    ]
  },

  // --- TELC / BOTH: Teil 2 (longer conversation — T/F) ---
  telc_p2: {
    examType: 'both', part: 2,
    title: 'Hörverstehen — Teil 2 (telc) / Teil 3 (Goethe)', subtitle: 'Au Pair — Richtig oder Falsch?',
    instruction: 'Sie hören ein Gespräch. Sie hören das Gespräch zweimal. Sind die Aussagen richtig (+) oder falsch (–)?',
    readingTime: 60,
    audioFile: 'audio/hoerverstehen_teil1.mp4',
    questions: [
      { id:46, text:'Als Au Pair ist man hauptsächlich mit den Kindern beschäftigt.', answer: true },
      { id:47, text:'Um in Frankreich als Au Pair zu arbeiten, braucht man mindestens 200 Stunden Erfahrung in der Kinderbetreuung.', answer: true },
      { id:48, text:'Die USA ist ein beliebtes Ziel für Au Pairs.', answer: true },
      { id:49, text:'Als Au Pair darf man sich nicht um Kinder unter zwei Jahren kümmern.', answer: false },
      { id:50, text:'Als Professional Au Pair arbeitet man maximal 45 Stunden die Woche.', answer: false },
      { id:51, text:'In den USA gibt es für Au Pairs keine Mindestaufenthaltsdauer.', answer: false },
      { id:52, text:'In Neuseeland kann man als Au Pair bis zu einem Jahr bleiben.', answer: true },
      { id:53, text:'Au Pairs bekommen kein Taschengeld.', answer: false },
      { id:54, text:'Die Gastfamilie ist für die Krankenversicherung des Au Pairs zuständig.', answer: true },
      { id:55, text:'Au Pairs müssen mindestens 18 Jahre alt sein.', answer: true }
    ]
  },

  // --- TELC: Teil 3 / Goethe Teil 1 (short clips T/F) ---
  telc_p3: {
    examType: 'both', part: 3,
    title: 'Hörverstehen — Teil 3 (telc) / Teil 1 (Goethe)', subtitle: '5 kurze Texte — Richtig oder Falsch?',
    instruction: 'Sie hören fünf kurze Texte. Sie hören die Texte zweimal. Richtig (+) oder Falsch (–)?',
    readingTime: 30,
    audioFile: 'audio/hoerverstehen_teil2.mp4',
    questions: [
      { id:56, text:'Die Regionalbahnen zwischen Brühl und Sechtem fahren am Wochenende nicht.', answer: false, context:'🚂 Nahverkehr' },
      { id:57, text:'Die Praxis ist donnerstags bis 13 Uhr geöffnet.', answer: false, context:'🏥 Arztpraxis' },
      { id:58, text:'Auf der A3 gibt es eine Baustelle.', answer: true, context:'🚗 Verkehr' },
      { id:59, text:'Am Samstag scheint im Osten die Sonne.', answer: false, context:'🌤 Wetter' },
      { id:60, text:'Die Herrenabteilung ist im zweiten Stock.', answer: false, context:'🛍 Kaufhaus' }
    ]
  }
};

// ===========================
// GRAMMAR — SPRACHBAUSTEINE (telc only)
// ===========================
const GRAMMAR = {
  part1: {
    title: 'Sprachbausteine — Teil 1: Grammatik',
    instruction: 'Welches Wort (a, b oder c) passt? Lesen Sie den Brief und ergänzen Sie die Lücken.',
    context: 'Ein Brief an eine Freundin:',
    rawText: 'Liebe Maria, ich schreibe dir, (1) ich nächsten Monat nach Berlin komme. Ich (2) mich sehr auf das Wiedersehen. (3) du Zeit, am Samstag mit mir in die Stadt zu gehen? Wir könnten (4) ein gutes Restaurant gehen und danach ins Kino. Ich hoffe, dass du (5) bist. Schreib mir bald zurück!',
    gaps: [
      { id:1, options:['a) weil','b) dass','c) ob'], answer:'a', tip:'"weil" = because, leitet einen Kausalsatz ein (Verb am Ende!)' },
      { id:2, options:['a) freut','b) freue','c) freuest'], answer:'b', tip:'ich + freue (Präsens, reflexiv: sich freuen)' },
      { id:3, options:['a) Haben','b) Hat','c) Hast'], answer:'c', tip:'du → Hast du Zeit?' },
      { id:4, options:['a) zu','b) in','c) bei'], answer:'b', tip:'in ein Restaurant gehen (Akk.)' },
      { id:5, options:['a) einverstanden','b) gesund','c) zufrieden'], answer:'a', tip:'einverstanden sein = to agree/be okay with something' }
    ]
  },
  part2: {
    title: 'Sprachbausteine — Teil 2: Wortschatz',
    instruction: 'Welches Wort passt am besten in die Lücke?',
    context: 'Ein Artikel über Arbeit und Alltag:',
    rawText: 'Viele Menschen (6) heutzutage zu viel. Die Arbeit macht ihnen zwar (7), aber sie haben wenig Zeit für die Familie. Experten (8), dass man regelmäßig Pausen machen sollte. Es ist wichtig, sich zu (9) und Zeit für Hobbys zu finden. Wer (10) ausruht, ist produktiver.',
    gaps: [
      { id:6, options:['a) arbeiten','b) schlafen','c) spielen'], answer:'a', tip:'Der Kontext: Arbeit und Alltag → arbeiten' },
      { id:7, options:['a) Spaß','b) Freude','c) Angst'], answer:'a', tip:'Spaß machen = to be fun' },
      { id:8, options:['a) empfehlen','b) fordern','c) sagen'], answer:'a', tip:'Experten empfehlen = experts recommend' },
      { id:9, options:['a) erholen','b) freuen','c) bewerben'], answer:'a', tip:'sich erholen = to recover / relax' },
      { id:10, options:['a) sich gut','b) gut','c) guten'], answer:'a', tip:'sich gut ausruhen = to rest well (reflexiv)' }
    ]
  }
};

// ===========================
// WRITING PROMPTS
// ===========================
const WRITING = {
  prompts: [
    {
      id:1, type:'Reklamation', icon:'😤', examType:'both',
      scenario:'Sie haben im Versandhaus Willi einen Geschirrspüler bestellt. Er ist geliefert worden, aber funktioniert nicht gut. Das Geschirr ist nicht sauber.',
      bullets:['Erklären Sie die Situation.','Sagen Sie, dass Sie verärgert sind.','Fordern Sie, dass das Gerät abgeholt wird.','Fordern Sie ein neues Gerät.'],
      register:'formal', minWords:80
    },
    {
      id:2, type:'Beschwerde (Malerfirma)', icon:'🏠', examType:'both',
      scenario:'Sie haben das Wohnzimmer von der Malerfirma Brand streichen lassen. Die Handwerker haben nicht sauber gearbeitet. An einer Wand sind Flecken und Streifen.',
      bullets:['Erklären Sie die Situation.','Sagen Sie, dass Sie nicht zufrieden sind.','Sagen Sie, was die Firma tun soll.','Bitten Sie um schnelle Antwort.'],
      register:'formal', minWords:80
    },
    {
      id:3, type:'Heizung defekt', icon:'🥶', examType:'both',
      scenario:'In Ihrer Wohnung funktioniert die Heizung nicht. Sie haben schon bei der Hausverwaltung angerufen, aber niemanden erreicht.',
      bullets:['Erklären Sie die Situation.','Erklären Sie, dass es kalt ist.','Bitten Sie um schnelle Reparatur.','Sagen Sie, wann Sie erreichbar sind.'],
      register:'formal', minWords:80
    },
    {
      id:4, type:'Forum-Meinung (Goethe)', icon:'💬', examType:'goethe',
      scenario:'Thema: "Sollten Kinder schon in der Grundschule Englisch lernen?" — Schreiben Sie Ihren Beitrag im Forum.',
      bullets:['Geben Sie Ihre Meinung an.','Nennen Sie einen Vorteil.','Nennen Sie einen Nachteil.','Schreiben Sie Ihre persönliche Erfahrung.'],
      register:'semi-formal', minWords:80
    },
    {
      id:5, type:'Informelle E-Mail (Goethe)', icon:'👋', examType:'goethe',
      scenario:'Ihr Freund Max hat Ihnen geschrieben, dass er nächsten Monat heiratet. Er möchte wissen, ob Sie kommen können.',
      bullets:['Gratulieren Sie Max.','Sagen Sie, ob Sie kommen können.','Machen Sie einen Geschenkvorschlag.','Schreiben Sie, worauf Sie sich freuen.'],
      register:'informal', minWords:80
    }
  ],
  templates: {
    formal: {
      greeting:'Sehr geehrte Damen und Herren,',
      altGreeting:'Sehr geehrte/r Frau/Herr [Name],',
      opener:'ich schreibe Ihnen bezüglich ...',
      closing:'Mit freundlichen Grüßen,',
      phrases:['Ich möchte Ihnen mitteilen, dass...','Leider muss ich Ihnen mitteilen, dass...','Ich bitte Sie dringend, ... zu...','Ich erwarte Ihre Antwort bis...','Ich bedanke mich im Voraus für Ihre Hilfe.','Für Rückfragen stehe ich Ihnen zur Verfügung.']
    },
    informal: {
      greeting:'Liebe/r [Name],',
      opener:'vielen Dank für deine Nachricht! / Wie schön, von dir zu hören!',
      closing:'Viele liebe Grüße, / Bis bald!',
      phrases:['Das freut mich sehr!','Ich finde es toll, dass...','Was meinst du dazu?','Ich würde mich so freuen, wenn...','Schreib mir bald zurück!']
    },
    semiFormal: {
      greeting:'Zum Thema „[Thema]" möchte ich folgendes sagen:',
      opener:'Meiner Meinung nach ist es wichtig, dass...',
      closing:'Ich freue mich über Ihre Meinungen und Kommentare.',
      phrases:['Einerseits..., andererseits...','Ich halte es für wichtig, dass...','Zwar..., aber...','Außerdem denke ich, dass...','Deshalb / Daher bin ich der Meinung, dass...']
    }
  },
  checklist: [
    'Anrede (greeting) vorhanden?','Alle Leitpunkte behandelt?','Richtige Anrede (Sie / du)?',
    'Datum und Ort angegeben (formal)?','Grußformel (closing) vorhanden?','Mindestens 80 Wörter?',
    'Verb am Ende im Nebensatz?','Register korrekt (formell/informell)?'
  ]
};

// ===========================
// SPEAKING DATA
// ===========================
const SPEAKING = {
  bildbeschreibung: {
    partA_phrases:[
      'Auf dem Bild sehe ich...', 'Das Foto zeigt...', 'Im Vordergrund / Hintergrund ist/sind...',
      'Links / Rechts / In der Mitte sieht man...', 'Die Person trägt... / hat...', 'Es scheint, dass...',
      'Ich glaube, das Thema des Bildes ist...', 'Die Stimmung wirkt... (fröhlich / ernst / entspannt)'
    ],
    partB_phrases:[
      'Das Bild gehört zum Thema...', 'In meinem Heimatland ist es so, dass...',
      'In Deutschland ist es oft so, dass...', 'Ich finde / denke, dass...', 'Meiner Meinung nach...',
      'Einerseits... andererseits...', 'Das Thema ist wichtig, weil...'
    ]
  },
  goethe_parts: [
    { part:1, title:'Teil 1: Gemeinsam etwas planen', icon:'🤝', desc:'You and your partner plan something together (e.g. a farewell party, class trip). Make suggestions, react, agree, reach a decision.', duration:'3-4 min',
      phrases:['Ich schlage vor, dass wir...','Was hältst du davon, wenn wir...?','Das ist eine gute Idee!','Ich bin einverstanden.','Ich sehe das etwas anders, weil...','Können wir uns darauf einigen, dass...?']
    },
    { part:2, title:'Teil 2: Präsentation', icon:'🎤', desc:'Each candidate gives a 2-minute presentation on their topic card. Introduce it, give main points, state your opinion.', duration:'~2 min each',
      phrases:['Ich möchte über ... sprechen.','Das Thema ist wichtig, weil...','Einerseits..., andererseits...','Meiner Meinung nach...','Zum Schluss möchte ich sagen, dass...']
    },
    { part:3, title:'Teil 3: Feedback geben', icon:'💬', desc:'After each presentation, the partner gives feedback and asks a question. The presenter responds.', duration:'1-2 min',
      phrases:['Das war sehr interessant, weil...','Ich hätte noch eine Frage:...','Haben Sie/Hast du auch überlegt, dass...?','Ich stimme dir zu / Ich sehe das etwas anders.']
    }
  ],
  telc_parts: [
    { part:1, title:'Teil 1: Kontaktaufnahme', icon:'👋', desc:'Introduce yourself to your partner and the examiners. Ask your partner questions about themselves.', duration:'~3 min',
      phrases:['Ich heiße... und komme aus...','Ich wohne seit ... in Deutschland.','Ich lerne Deutsch, weil...','Was machst du / machen Sie beruflich?','Wie lange lebst du / leben Sie schon in Deutschland?']
    },
    { part:2, title:'Teil 2: Über ein Thema sprechen', icon:'🎤', desc:'Each candidate presents their topic card and then discusses it together.', duration:'~5 min',
      phrases:['Ich möchte über ... sprechen.','Meiner Meinung nach...','Das ist wichtig, weil...','Ich persönlich finde, dass...','Was denken Sie / denkst du darüber?']
    },
    { part:3, title:'Teil 3: Gemeinsam planen', icon:'🤝', desc:'Together with your partner, plan something or solve a problem.', duration:'~5 min',
      phrases:['Ich schlage vor, dass...','Was würdest du davon halten, wenn...?','Ich bin einverstanden.','Ich finde es besser, wenn...','Also, wir haben entschieden, dass...']
    }
  ],
  topics: [
    { id:1, title:'Arbeit & Beruf', emoji:'💼', questions:['Was ist Ihre aktuelle Arbeitssituation?','Was sind Ihre Berufsziele?','Was würden Sie gerne anders machen?'] },
    { id:2, title:'Familie & Freundschaft', emoji:'👨‍👩‍👧', questions:['Wie wichtig ist Familie für Sie?','Was unternehmen Sie mit Freunden?','Wie oft sehen Sie Ihre Familie?'] },
    { id:3, title:'Gesundheit & Sport', emoji:'🏃', questions:['Treiben Sie regelmäßig Sport?','Wie ernähren Sie sich?','Was tun Sie für Ihre Gesundheit?'] },
    { id:4, title:'Medien & Technologie', emoji:'📱', questions:['Wie nutzen Sie das Internet?','Welche sozialen Medien nutzen Sie?','Vorteile/Nachteile von Smartphones?'] },
    { id:5, title:'Reisen & Urlaub', emoji:'✈️', questions:['Wohin reisen Sie gerne?','Wie planen Sie Ihren Urlaub?','Was ist Ihr Lieblingsreiseziel?'] },
    { id:6, title:'Umwelt & Nachhaltigkeit', emoji:'🌱', questions:['Was tun Sie für die Umwelt?','Welche Umweltprobleme sehen Sie?','Wie können wir nachhaltiger leben?'] },
    { id:7, title:'Wohnen & Leben', emoji:'🏠', questions:['Wo wohnen Sie? Stadt oder Land?','Was gefällt Ihnen an Ihrem Wohnort?','Welche Vor-/Nachteile hat das Stadtleben?'] },
    { id:8, title:'Bildung & Lernen', emoji:'📚', questions:['Wie lange lernen Sie schon Deutsch?','Was ist Ihre Motivation?','Welche Lernmethoden helfen Ihnen?'] }
  ]
};

// ===========================
// PROGRESS TRACKING
// ===========================
const PROGRESS_KEY = 'b1_genius_progress_v2';
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch { return {}; }
}
function saveProgress(section, score, total) {
  const p = loadProgress();
  p[section] = { score, total, pct: Math.round(score/total*100), date: new Date().toLocaleDateString() };
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}
function clearProgress() { localStorage.removeItem(PROGRESS_KEY); }

// ===========================
// VOCABULARY VERBS WITH FIXED PREPOSITIONS
// ===========================
const VOCAB_VERBS = [
  { verb: 'warten', prep: 'auf', case: 'Akkusativ', emoji: '⏰', text: 'Ich warte auf den Bus.', translation: { az: 'Mən avtobusu gözləyirəm.', ru: 'Я жду автобус.', de: 'Ich warte auf den Bus.' } },
  { verb: 'sich freuen (Zukunft)', prep: 'auf', case: 'Akkusativ', emoji: '✈️', text: 'Ich freue mich auf die Reise.', translation: { az: 'Mən səyahəti səbirsizliklə gözləyirəm.', ru: 'Я с нетерпением жду поездки.', de: 'Ich freue mich auf die Reise.' } },
  { verb: 'sich freuen (Gegenwart)', prep: 'über', case: 'Akkusativ', emoji: '🎁', text: 'Ich freue mich über das Geschenk.', translation: { az: 'Mən hədiyyəyə sevinirəm.', ru: 'Я рад подарку.', de: 'Ich freue mich über das Geschenk.' } },
  { verb: 'denken', prep: 'an', case: 'Akkusativ', emoji: '💭', text: 'Ich denke an meine Familie.', translation: { az: 'Mən ailəmi düşünürəm.', ru: 'Я думаю о своей семье.', de: 'Ich denke an meine Familie.' } },
  { verb: 'sich interessieren', prep: 'für', case: 'Akkusativ', emoji: '🎨', text: 'Er interessiert sich für Musik.', translation: { az: 'O, musiqi ilə maraqlanır.', ru: 'Он интересуется музыкой.', de: 'Er interessiert sich für Musik.' } },
  { verb: 'sich erinnern', prep: 'an', case: 'Akkusativ', emoji: '📸', text: 'Erinnerst du dich an unseren Urlaub?', translation: { az: 'Bizim tətilimizi xatırlayırsan?', ru: 'Ты помнишь наш отпуск?', de: 'Erinnerst du dich an unseren Urlaub?' } },
  { verb: 'träumen', prep: 'von', case: 'Dativ', emoji: '💤', text: 'Ich träume von einem großen Haus.', translation: { az: 'Mən böyük bir ev haqqında xəyal qururam.', ru: 'Я мечтаю о большом доме.', de: 'Ich träume von einem großen Haus.' } },
  { verb: 'teilnehmen', prep: 'an', case: 'Dativ', emoji: '👥', text: 'Nimmst du an dem Deutschkurs teil?', translation: { az: 'Alman dili kursunda iştirak edirsən?', ru: 'Ты участвуешь в курсе немецкого?', de: 'Nimmst du an dem Deutschkurs teil?' } },
  { verb: 'sprechen', prep: 'mit', case: 'Dativ', emoji: '🗣️', text: 'Ich spreche mit dem Lehrer.', translation: { az: 'Mən müəllimlə danışıram.', ru: 'Я говорю с учителем.', de: 'Ich spreche mit dem Lehrer.' } },
  { verb: 'passen', prep: 'zu', case: 'Dativ', emoji: '👚', text: 'Die Bluse passt gut zu der Hose.', translation: { az: 'Bluz şalvarla yaxşı uyğun gəlir.', ru: 'Блузка хорошо подходит к брюкам.', de: 'Die Bluse passt gut zu der Hose.' } },
  { verb: 'sich ärgern', prep: 'über', case: 'Akkusativ', emoji: '😠', text: 'Ich ärgere mich über das schlechte Wetter.', translation: { az: 'Mən pis havaya əsəbiləşirəm.', ru: 'Я злюсь из-за плохой погоды.', de: 'Ich ärgere mich über das schlechte Wetter.' } },
  { verb: 'bitten', prep: 'um', case: 'Akkusativ', emoji: '🙏', text: 'Darf ich Sie um Hilfe bitten?', translation: { az: 'Sizdən kömək istəyə bilərəm?', ru: 'Могу я попросить вас о помощи?', de: 'Darf ich Sie um Hilfe bitten?' } },
  { verb: 'gehören', prep: 'zu', case: 'Dativ', emoji: '🇩🇪', text: 'Deutschland gehört zu Europa.', translation: { az: 'Almaniya Avropaya aiddir.', ru: 'Германия принадлежит к Европе.', de: 'Deutschland gehört zu Europa.' } },
  { verb: 'sich kümmern', prep: 'um', case: 'Akkusativ', emoji: '🐱', text: 'Wer kümmert sich um die Katze?', translation: { az: 'Pişiyin qayğısına kim qalır?', ru: 'Кто заботится о кошке?', de: 'Wer kümmert sich um die Katze?' } },
  { verb: 'telefonieren', prep: 'mit', case: 'Dativ', emoji: '📞', text: 'Ich telefoniere gerade mit meiner Mutter.', translation: { az: 'Mən hazırda anamla telefonda danışıram.', ru: 'Я сейчас говорю по телефону с мамой.', de: 'Ich telefoniere gerade mit meiner Mutter.' } },
  { verb: 'sich bedanken', prep: 'für', case: 'Akkusativ', emoji: '💐', text: 'Ich bedanke mich für Ihre Hilfe.', translation: { az: 'Köməyinizə görə təşəkkür edirəm.', ru: 'Я благодарю вас за помощь.', de: 'Ich bedanke mich für Ihre Hilfe.' } },
  { verb: 'sich entschuldigen', prep: 'für', case: 'Akkusativ', emoji: '🙇', text: 'Er entschuldigt sich für die Verspätung.', translation: { az: 'O, gecikməyə görə üzr istəyir.', ru: 'Он извиняется за опоздание.', de: 'Er entschuldigt sich für die Verspätung.' } },
  { verb: 'sich bewerben', prep: 'um', case: 'Akkusativ', emoji: '📄', text: 'Sie bewirbt sich um eine neue Stelle.', translation: { az: 'O, yeni iş yerinə müraciət edir.', ru: 'Она подаёт заявку на новую должность.', de: 'Sie bewirbt sich um eine neue Stelle.' } },
  { verb: 'sich beschweren', prep: 'über', case: 'Akkusativ', emoji: '😡', text: 'Die Mieter beschweren sich über den Lärm.', translation: { az: 'Kirayəçilər səs-küydən şikayət edirlər.', ru: 'Жильцы жалуются на шум.', de: 'Die Mieter beschweren sich über den Lärm.' } },
  { verb: 'sich entscheiden', prep: 'für', case: 'Akkusativ', emoji: '✅', text: 'Wir entscheiden uns für das blaue Sofa.', translation: { az: 'Biz mavi divanı seçirik.', ru: 'Мы выбираем синий диван.', de: 'Wir entscheiden uns für das blaue Sofa.' } },
  { verb: 'sich vorbereiten', prep: 'auf', case: 'Akkusativ', emoji: '📚', text: 'Ich bereite mich auf die Prüfung vor.', translation: { az: 'Mən imtahana hazırlaşıram.', ru: 'Я готовлюсь к экзамену.', de: 'Ich bereite mich auf die Prüfung vor.' } },
  { verb: 'sich gewöhnen', prep: 'an', case: 'Akkusativ', emoji: '🌍', text: 'Sie gewöhnt sich langsam an das Wetter.', translation: { az: 'O, havaya yavaş-yavaş öyrəşir.', ru: 'Она постепенно привыкает к погоде.', de: 'Sie gewöhnt sich langsam an das Wetter.' } },
  { verb: 'sich verlieben', prep: 'in', case: 'Akkusativ', emoji: '❤️', text: 'Er hat sich in seine Kollegin verliebt.', translation: { az: 'O, iş yoldaşına aşiq olub.', ru: 'Он влюбился в свою коллегу.', de: 'Er hat sich in seine Kollegin verliebt.' } },
  { verb: 'sich unterhalten', prep: 'mit', case: 'Dativ', emoji: '💬', text: 'Ich unterhalte mich gern mit den Nachbarn.', translation: { az: 'Mən qonşularla söhbət etməyi xoşlayıram.', ru: 'Я люблю беседовать с соседями.', de: 'Ich unterhalte mich gern mit den Nachbarn.' } },
  { verb: 'sich treffen', prep: 'mit', case: 'Dativ', emoji: '🤝', text: 'Wir treffen uns am Samstag mit Freunden.', translation: { az: 'Biz şənbə günü dostlarla görüşürük.', ru: 'Мы встречаемся в субботу с друзьями.', de: 'Wir treffen uns am Samstag mit Freunden.' } },
  { verb: 'sich streiten', prep: 'mit', case: 'Dativ', emoji: '⚡', text: 'Er streitet sich oft mit seinem Bruder.', translation: { az: 'O, tez-tez qardaşı ilə mübahisə edir.', ru: 'Он часто ссорится со своим братом.', de: 'Er streitet sich oft mit seinem Bruder.' } },
  { verb: 'sich beschäftigen', prep: 'mit', case: 'Dativ', emoji: '🧩', text: 'Sie beschäftigt sich viel mit Musik.', translation: { az: 'O, musiqi ilə çox məşğul olur.', ru: 'Она много занимается музыкой.', de: 'Sie beschäftigt sich viel mit Musik.' } },
  { verb: 'sich informieren', prep: 'über', case: 'Akkusativ', emoji: '🔎', text: 'Ich informiere mich über die Kurse.', translation: { az: 'Mən kurslar haqqında məlumat alıram.', ru: 'Я узнаю информацию о курсах.', de: 'Ich informiere mich über die Kurse.' } },
  { verb: 'sich wundern', prep: 'über', case: 'Akkusativ', emoji: '😲', text: 'Ich wundere mich über seine Antwort.', translation: { az: 'Mən onun cavabına təəccüblənirəm.', ru: 'Я удивляюсь его ответу.', de: 'Ich wundere mich über seine Antwort.' } },
  { verb: 'sich erkundigen', prep: 'nach', case: 'Dativ', emoji: 'ℹ️', text: 'Er erkundigt sich nach dem Zugfahrplan.', translation: { az: 'O, qatar cədvəli haqqında soruşur.', ru: 'Он справляется о расписании поездов.', de: 'Er erkundigt sich nach dem Zugfahrplan.' } },
  { verb: 'fragen', prep: 'nach', case: 'Dativ', emoji: '❓', text: 'Der Tourist fragt nach dem Weg.', translation: { az: 'Turist yolu soruşur.', ru: 'Турист спрашивает дорогу.', de: 'Der Tourist fragt nach dem Weg.' } },
  { verb: 'suchen', prep: 'nach', case: 'Dativ', emoji: '🔍', text: 'Sie sucht nach einer neuen Wohnung.', translation: { az: 'O, yeni mənzil axtarır.', ru: 'Она ищет новую квартиру.', de: 'Sie sucht nach einer neuen Wohnung.' } },
  { verb: 'riechen', prep: 'nach', case: 'Dativ', emoji: '👃', text: 'Es riecht hier nach frischem Kaffee.', translation: { az: 'Burada təzə qəhvə iyi gəlir.', ru: 'Здесь пахнет свежим кофе.', de: 'Es riecht hier nach frischem Kaffee.' } },
  { verb: 'schmecken', prep: 'nach', case: 'Dativ', emoji: '😋', text: 'Der Kuchen schmeckt nach Zimt.', translation: { az: 'Tortun dadı darçın kimidir.', ru: 'Пирог на вкус как корица.', de: 'Der Kuchen schmeckt nach Zimt.' } },
  { verb: 'anfangen', prep: 'mit', case: 'Dativ', emoji: '🚀', text: 'Wir fangen mit der Arbeit an.', translation: { az: 'Biz işə başlayırıq.', ru: 'Мы начинаем работу.', de: 'Wir fangen mit der Arbeit an.' } },
  { verb: 'aufhören', prep: 'mit', case: 'Dativ', emoji: '🛑', text: 'Er hört mit dem Rauchen auf.', translation: { az: 'O, siqareti tərgidir.', ru: 'Он бросает курить.', de: 'Er hört mit dem Rauchen auf.' } },
  { verb: 'beginnen', prep: 'mit', case: 'Dativ', emoji: '▶️', text: 'Der Lehrer beginnt mit einer Wiederholung.', translation: { az: 'Müəllim təkrarla başlayır.', ru: 'Учитель начинает с повторения.', de: 'Der Lehrer beginnt mit einer Wiederholung.' } },
  { verb: 'antworten', prep: 'auf', case: 'Akkusativ', emoji: '✉️', text: 'Bitte antworten Sie auf meine E-Mail.', translation: { az: 'Zəhmət olmasa e-poçtuma cavab verin.', ru: 'Пожалуйста, ответьте на моё письмо.', de: 'Bitte antworten Sie auf meine E-Mail.' } },
  { verb: 'achten', prep: 'auf', case: 'Akkusativ', emoji: '👀', text: 'Achten Sie auf die Verkehrsschilder!', translation: { az: 'Yol nişanlarına diqqət edin!', ru: 'Обращайте внимание на дорожные знаки!', de: 'Achten Sie auf die Verkehrsschilder!' } },
  { verb: 'verzichten', prep: 'auf', case: 'Akkusativ', emoji: '🚫', text: 'Sie verzichtet auf Zucker im Kaffee.', translation: { az: 'O, qəhvədə şəkərdən imtina edir.', ru: 'Она отказывается от сахара в кофе.', de: 'Sie verzichtet auf Zucker im Kaffee.' } },
  { verb: 'hoffen', prep: 'auf', case: 'Akkusativ', emoji: '🤞', text: 'Wir hoffen auf gutes Wetter.', translation: { az: 'Biz yaxşı havaya ümid edirik.', ru: 'Мы надеемся на хорошую погоду.', de: 'Wir hoffen auf gutes Wetter.' } },
  { verb: 'sich konzentrieren', prep: 'auf', case: 'Akkusativ', emoji: '🎯', text: 'Konzentriere dich auf deine Aufgabe!', translation: { az: 'Tapşırığına diqqətini cəmlə!', ru: 'Сконцентрируйся на своём задании!', de: 'Konzentriere dich auf deine Aufgabe!' } },
  { verb: 'sich verlassen', prep: 'auf', case: 'Akkusativ', emoji: '🤲', text: 'Du kannst dich auf mich verlassen.', translation: { az: 'Mənə arxalana bilərsən.', ru: 'Ты можешь на меня положиться.', de: 'Du kannst dich auf mich verlassen.' } },
  { verb: 'sprechen', prep: 'über', case: 'Akkusativ', emoji: '🗨️', text: 'Wir sprechen über den neuen Film.', translation: { az: 'Biz yeni film haqqında danışırıq.', ru: 'Мы говорим о новом фильме.', de: 'Wir sprechen über den neuen Film.' } },
  { verb: 'nachdenken', prep: 'über', case: 'Akkusativ', emoji: '🤔', text: 'Ich denke über deinen Vorschlag nach.', translation: { az: 'Mən sənin təklifin barədə düşünürəm.', ru: 'Я обдумываю твоё предложение.', de: 'Ich denke über deinen Vorschlag nach.' } },
  { verb: 'lachen', prep: 'über', case: 'Akkusativ', emoji: '😂', text: 'Alle lachen über den Witz.', translation: { az: 'Hamı zarafata gülür.', ru: 'Все смеются над шуткой.', de: 'Alle lachen über den Witz.' } },
  { verb: 'erzählen', prep: 'von', case: 'Dativ', emoji: '📖', text: 'Oma erzählt von ihrer Jugend.', translation: { az: 'Nənə gəncliyindən danışır.', ru: 'Бабушка рассказывает о своей молодости.', de: 'Oma erzählt von ihrer Jugend.' } },
  { verb: 'halten', prep: 'von', case: 'Dativ', emoji: '⚖️', text: 'Was hältst du von dieser Idee?', translation: { az: 'Bu fikir haqqında nə düşünürsən?', ru: 'Что ты думаешь об этой идее?', de: 'Was hältst du von dieser Idee?' } },
  { verb: 'abhängen', prep: 'von', case: 'Dativ', emoji: '🔗', text: 'Das hängt vom Wetter ab.', translation: { az: 'Bu, havadan asılıdır.', ru: 'Это зависит от погоды.', de: 'Das hängt vom Wetter ab.' } },
  { verb: 'einladen', prep: 'zu', case: 'Dativ', emoji: '🎉', text: 'Ich lade dich zu meiner Party ein.', translation: { az: 'Səni partiyama dəvət edirəm.', ru: 'Я приглашаю тебя на свою вечеринку.', de: 'Ich lade dich zu meiner Party ein.' } },
  { verb: 'gratulieren', prep: 'zu', case: 'Dativ', emoji: '🥳', text: 'Wir gratulieren dir zum Geburtstag!', translation: { az: 'Ad günün münasibətilə təbrik edirik!', ru: 'Мы поздравляем тебя с днём рождения!', de: 'Wir gratulieren dir zum Geburtstag!' } }
];