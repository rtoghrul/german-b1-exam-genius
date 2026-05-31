const examDatabase = {
  "leseverstehen_1": {
    "title": "Leseverstehen Teil 1 (Headlines Match)",
    "instruction": "Finden Sie f\u00fcr jeden Text die passende \u00dcberschrift. W\u00e4hlen Sie aus den \u00dcberschriften A-J.",
    "headlines": {
      "A": "Doppelt so viele Studenten wie vor einer Generation?",
      "B": "Das 3D-Fernsehen steht vor dem Aus?",
      "C": "Die Welt ist unsportlich",
      "D": "90 Prozent der Deutschen sind online",
      "E": "Warum wir ohne Zeitumstellung besser schlafen",
      "F": "Hackerangriff auf bekannte Fluggesellschaft",
      "G": "Bewegung - Warum Sport so gesund ist",
      "H": "Vorsicht bei Reisegewinnen",
      "I": "Wasser weltweit - Weltwassertag",
      "J": "Yoga f\u00fcr Kinder"
    },
    "texts": [
      {
        "id": 1,
        "text": "Fast jeder zweite Deutsche bewegt sich zu wenig - und gef\u00e4hrdet so seine Gesundheit, warnen Wissenschaftler und Experten. Aber auch weltweit sieht es nicht besser aus. Sitzen auf der Arbeit, sitzen in der U-Bahn, sitzen vorm Computer: Mehr als 1,4 Milliarden Menschen sitzen zu viel.",
        "correct": "G"
      },
      {
        "id": 2,
        "text": "Junge Menschen in Deutschland erreichen einen h\u00f6heren Bildungsabschluss als die Generation ihrer Eltern. 33 Prozent der 30- bis 36-J\u00e4hrigen verf\u00fcgen \u00fcber einen Hochschulabschluss. Bei den heute 60- bis 66-J\u00e4hrigen liegt der Anteil bei 20 Prozent.",
        "correct": "A"
      },
      {
        "id": 3,
        "text": "Trinkwasser ist kostbar. Am 22. M\u00e4rz findet j\u00e4hrlich der Weltwassertag statt, um die Bedeutung des Wassers f\u00fcr die Menschheit zu w\u00fcrdigen und die breite \u00d6ffentlichkeit auf Probleme aufmerksam zu machen. Sauberes Wasser ist ein Menschenrecht, doch noch immer haben Millionen Menschen keinen Zugang dazu.",
        "correct": "I"
      },
      {
        "id": 4,
        "text": "Immer mehr Betr\u00fcger versprechen per Mail oder Telefon angebliche Reisegewinne, um an pers\u00f6nliche Kundendaten und Bankverbindungen zu gelangen. Experten warnen davor, sensible Daten preiszugeben. Seri\u00f6se Reiseb\u00fcros fordern niemals Zahlungen oder sensible Daten am Telefon.",
        "correct": "H"
      },
      {
        "id": 5,
        "text": "Eine renommierte europ\u00e4ische Fluggesellschaft ist Opfer eines gro\u00dfangelegten Cyberangriffs geworden. Daten von Tausenden Passagieren wurden gestohlen. Die Fluggesellschaft versichert, dass Flugsicherheitssysteme zu keinem Zeitpunkt betroffen waren.",
        "correct": "F"
      }
    ]
  },
  "leseverstehen_2": {
    "title": "Leseverstehen Teil 2 (Das kauf ich! Nicht.)",
    "instruction": "Lesen Sie den Text und beantworten Sie die Multiple-Choice-Fragen.",
    "text": "Das kauf ich! Nicht.\nNiedrige Zinsen, die Gefahr steigender Preise und dann noch Weihnachten: Geld auszugeben erscheint vielen Menschen derzeit ratsamer, als es anzulegen. Viele Kaufentscheidungen f\u00e4llen wir im Vertrauen auf unsere Erfahrung. Geld verdienen ist nicht einfach, aber es auszugeben: noch schwieriger. Das findet jedenfalls Steffen L. aus Schleswig-Holstein. L. ist studierter Informatiker, er arbeitet im mittleren Management eines IT-Dienstleisters, es ist ein gut bezahlter Job. Gerade hat sich der Mittvierziger ein Auto gekauft. Keinen VW Golf \u2013 wie eigentlich mal geplant \u2013, sondern einen Audi A4. Die T\u00fcren, die sich automatisch entriegeln, der Kofferraum, der sich automatisch \u00f6ffnet: nicht n\u00f6tig, aber nett. Auf seinem Grundst\u00fcck hat L. nicht nur die defekte Mauer im Garten reparieren lassen, wie er es eigentlich vorhatte, sondern die Terrasse und die Garage gleich mit erneuert. Und wenn er und seine Frau einkaufen, dann achten sie auf Qualit\u00e4t. Fleisch etwa holen sie beim Metzger, auch wenn es mehr kostet als im Supermarkt. Trotzdem ist jeden Monat Geld \u00fcbrig: \"Die Kohle muss raus\", sagt L., \"aber ich kann gar nicht so viel konsumieren, wie ich m\u00fcsste.\"\nWenig Spielraum haben Verbraucher mit einem niedrigen Einkommen. Nach einer Studie des Sozio\u00f6konomischen Panels des DIW Berlin geben Haushalte mit einem sehr geringen Einkommen einen fast doppelt so hohen Anteil ihres Geldes f\u00fcr Lebensmittel aus wie Haushalte mit hohem Einkommen. \u00c4hnlich ist es bei den Ausgaben f\u00fcrs eigene Dach \u00fcberm Kopf. Umgekehrt k\u00f6nnen arme Haushalte nur einen halb so hohen Anteil ihres Einkommens f\u00fcr Mobilit\u00e4t und Freizeit lockermachen wie jene, die vergleichsweise viel Geld verdienen. L. ist nun der freiwilligen Feuerwehr beigetreten, um etwas zur\u00fcckzugeben, wie er sagt, und zu verhindern, dass andere Menschen ihr Hab und Gut verlieren.",
    "questions": [
      {
        "num": 6,
        "question": "Viele Menschen bevorzugen es derzeit,",
        "options": {
          "a": "Geld zu sparen, als es auszugeben.",
          "b": "Geld auszugeben, als es anzulegen.",
          "c": "weniger Geld zu verdienen."
        },
        "correct": "b"
      },
      {
        "num": 7,
        "question": "Steffen L. aus Schleswig-Holstein",
        "options": {
          "a": "findet Sparen wichtig.",
          "b": "ist Geringverdiener.",
          "c": "m\u00f6chte mehr Geld ausgeben."
        },
        "correct": "c"
      },
      {
        "num": 8,
        "question": "Geringverdiener",
        "options": {
          "a": "geben einen h\u00f6heren Anteil ihres Geldes f\u00fcr Lebensmittel aus.",
          "b": "geben kaum Geld f\u00fcr Lebensmittel aus.",
          "c": "wollen mehr Geld f\u00fcr Lebensmittel zur Verf\u00fcgung haben."
        },
        "correct": "a"
      },
      {
        "num": 9,
        "question": "Steffen ist der freiwilligen Feuerwehr beigetreten,",
        "options": {
          "a": "weil er gerne Menschenleben rettet.",
          "b": "damit Menschen ihren Besitz nicht verlieren.",
          "c": "weil er viel Freizeit hat."
        },
        "correct": "b"
      },
      {
        "num": 10,
        "question": "F\u00fcr Freizeit",
        "options": {
          "a": "haben Gutverdiener keine Zeit.",
          "b": "geben arme Haushalte weniger Geld aus (anteilig).",
          "c": "geben Gutverdiener einen niedrigeren Anteil ihres Einkommens aus."
        },
        "correct": "b"
      }
    ]
  },
  "leseverstehen_3": {
    "title": "Leseverstehen Teil 3 (Situations & Ads)",
    "instruction": "Finden Sie f\u00fcr jede Situation die passende Anzeige. Falls keine Anzeige passt, w\u00e4hlen Sie 'Keine Anzeige passt (X)'.",
    "situations": [
      {
        "id": 11,
        "text": "Sie m\u00f6chten Sport machen und erstmal schauen, welche Sportart Ihnen Spa\u00df macht.",
        "correct": "f"
      },
      {
        "id": 12,
        "text": "Sie haben die B1-Pr\u00fcfung bestanden. Sie m\u00f6chten nun weiterlernen und sich f\u00fcr die B2-Pr\u00fcfung anmelden.",
        "correct": "j"
      },
      {
        "id": 13,
        "text": "Sie m\u00f6chten bald verreisen. Ihr Ticket m\u00f6chten Sie aber nicht online buchen.",
        "correct": "c"
      },
      {
        "id": 14,
        "text": "Ihr Sohn hat Marketing studiert und sucht ein Praktikum. Sie m\u00f6chten ihm dabei helfen.",
        "correct": "a"
      },
      {
        "id": 15,
        "text": "Sie suchen f\u00fcr Ihre Hochzeitsfeier ein passendes Restaurant. Sie erwarten \u00fcber 100 G\u00e4ste.",
        "correct": "h"
      },
      {
        "id": 16,
        "text": "Sie liegen auf dem Sofa und haben Hunger. Sie m\u00f6chten etwas zu Essen bestellen.",
        "correct": "d"
      },
      {
        "id": 17,
        "text": "Sie m\u00f6chten ihre Cousine in Frankreich besuchen und suchen eine g\u00fcnstige Unterkunft.",
        "correct": "x"
      },
      {
        "id": 18,
        "text": "Sie haben keine Zeit einzukaufen und suchen einen Lieferservice f\u00fcr Eink\u00e4ufe.",
        "correct": "e"
      },
      {
        "id": 19,
        "text": "Die Tochter ihrer Freundin ist sitzen geblieben und braucht Nachhilfe in Deutsch.",
        "correct": "k"
      },
      {
        "id": 20,
        "text": "Sie m\u00f6chten sich in Ihrem Beruf weiterbilden und suchen nach M\u00f6glichkeiten.",
        "correct": "b"
      }
    ],
    "ads": {
      "a": "PRAKTIKANTEN (M/W) GESUCHT\nWerbeagentur AL Design Berlin. Bereiche: Internet Marketing, Social Media, Webdesign.",
      "b": "BERUFLICHE WEITERBILDUNG SEMINAR\nMontag, 15. April im Seminarraum der HLW. Wir freuen uns auf Ihr Kommen!",
      "c": "ReiseLust Reiseb\u00fcro\nJende Reise beginnt mit dem ersten Schritt ins Reiseb\u00fcro! Rolandstr. 32. Tel: 090/213052.",
      "d": "MIA Restaurant Lieferservice\nItalienische Spezialit\u00e4ten: Pasta, Pizza, Steak. Lieferung nach Hause.",
      "e": "Supermarkt Lieferservice\nPreise wie im Markt, Zeit und Benzin sparen. Lieferung Mo-Sa bis 22 Uhr.",
      "f": "Volleyball Schnupperkurs f\u00fcr Anf\u00e4nger\nMannschaft des SV Blau-Wei\u00df freut sich auf weiteren Nachwuchs! Kommen Sie vorbei.",
      "g": "ASIA HOUSE Chinarestaurant\nLive-Cooking, Buffet und Cocktail-Lounge. Perfekt f\u00fcr Familienfeste und Buffets.",
      "h": "Buffets f\u00fcr Ihre Feier ab 40 Personen\nSalatbuffet, Grill, warme Speisen. Perfekt f\u00fcr gro\u00dfe Anl\u00e4sse und Hochzeiten.",
      "i": "Deine Hochzeitstorte online bestellen\nFrische Lieferung europaweit zum Wunschtermin.",
      "j": "Sprachb\u00f6rse K\u00f6ln B2-Pr\u00fcfung\nVerbindliche Anmeldung bis zum 15.09. m\u00f6glich! R\u00f6merstr. 67.",
      "k": "Lehramt-Studentin bietet Nachhilfe\nNachhilfe in Deutsch und Latein an. 94491 Hengersberg."
    }
  },
  "sprachbausteine_1": {
    "title": "Sprachbausteine Teil 1",
    "instruction": "W\u00e4hlen Sie das passende Wort f\u00fcr jede L\u00fccke.",
    "letter": "Hallo Mareike,\nich freue mich, dass du an meinem Land und meiner Sprache interessiert bist. Wie dir [21] gemeinsamer Freund Jakob mitgeteilt hat, m\u00f6chte ich, dass wir uns gegenseitig schreiben, [22] ich mein Deutsch verbessern kann. Ich m\u00f6chte mich erstmal bei dir [23]. Mein Name ist Rita und ich wohne in Pomaz. Ich arbeite in [24] Krankenhaus, aber der Job als Krankenschwester macht mir nicht so viel Spa\u00df. Ich w\u00fcrde mich gerne [25] oder umorientieren. In [26] m\u00f6chte ich viel mehr reisen. Ich war schon an einigen Orten in Europa, aber ich war noch nie in [27] deutschsprachigen Land.",
    "questions": [
      {
        "num": 21,
        "options": [
          "unser",
          "uns",
          "unsere"
        ],
        "correct": "unser"
      },
      {
        "num": 22,
        "options": [
          "weil",
          "damit",
          "um"
        ],
        "correct": "damit"
      },
      {
        "num": 23,
        "options": [
          "vorstellen",
          "kennenlernen",
          "befreunden"
        ],
        "correct": "vorstellen"
      },
      {
        "num": 24,
        "options": [
          "einem",
          "einer",
          "eines"
        ],
        "correct": "einem"
      },
      {
        "num": 25,
        "options": [
          "fortbilden",
          "lernen",
          "studieren"
        ],
        "correct": "fortbilden"
      },
      {
        "num": 26,
        "options": [
          "der Zukunft",
          "Zukunft",
          "k\u00fcnftig"
        ],
        "correct": "der Zukunft"
      },
      {
        "num": 27,
        "options": [
          "einem",
          "einer",
          "eines"
        ],
        "correct": "einem"
      }
    ]
  },
  "schreiben": {
    "title": "Schriftlicher Ausdruck (Writing Prompts)",
    "prompts": [
      {
        "id": "prompt_1",
        "title": "Lieblingsserie (Filmabend)",
        "sender": "Maike",
        "context": "...wie geht es dir? Ich habe zurzeit viel zu tun. Mein Studium nimmt viel Zeit in Anspruch. Abends ruhe ich mich aber gern mit meinem Freund aus und wir schauen uns unsere Lieblingsserie 'Riders' an. Sie handelt von US Navy Kriminalf\u00e4llen...",
        "points": [
          "Wie hei\u00dft Ihre Lieblingsserie oder Lieblingssendung?",
          "Wovon handelt sie?",
          "Was m\u00f6gen Sie daran?",
          "Vorschlag f\u00fcr einen gemeinsamen Filmabend?"
        ],
        "model_answer": "K\u00f6ln, 28.11.2018\nLiebe Maike,\nvielen Dank f\u00fcr deinen Brief.\n\nSerien schaue ich nicht sehr gerne. Ich mag aber Sendungen, besonders Kochsendungen. Meine Lieblingskochsendung hei\u00dft \u201eDer gro\u00dfe Geschmackstest\u201c. In dieser Sendung geht ein Sternekoch zu Restaurants und Hotels, die nicht gut laufen und schaut sich erstmal die K\u00fcche, den Koch und das Team an. Er hat nur eine Woche Zeit alles zu verbessern, damit das Gesch\u00e4ft wieder viele G\u00e4ste bekommt.\n\nIch mag, dass der Sternekoch streng mit dem Koch und dem Team ist und viele professionelle Tipps gibt. Au\u00dferdem koche ich sehr gerne und bekomme in der Sendung viele Kochtipps.\n\nWenn du einen guten Film kennst, k\u00f6nnen wir mal einen Filmabend machen. Was denkst du? Ich freue mich auf deine Antwort.\n\nLiebe Gr\u00fc\u00dfe\nSina"
      }
    ]
  },
  "vocabulary": [
    {
      "de": "die Fahrkarte",
      "en": "train ticket",
      "cat": "Reise"
    },
    {
      "de": "das Gleis",
      "en": "track / platform",
      "cat": "Reise"
    },
    {
      "de": "die Versp\u00e4tung",
      "en": "delay",
      "cat": "Reise"
    },
    {
      "de": "die Verbindung",
      "en": "connection",
      "cat": "Reise"
    },
    {
      "de": "das Gep\u00e4ck",
      "en": "luggage",
      "cat": "Reise"
    },
    {
      "de": "die Bordkarte",
      "en": "boarding pass",
      "cat": "Reise"
    },
    {
      "de": "die Sicherheitskontrolle",
      "en": "security check",
      "cat": "Reise"
    },
    {
      "de": "der Hinflug",
      "en": "outbound flight",
      "cat": "Reise"
    },
    {
      "de": "das Vorstellungsgespr\u00e4ch",
      "en": "job interview",
      "cat": "Arbeit"
    },
    {
      "de": "die Bewerbung",
      "en": "application",
      "cat": "Arbeit"
    },
    {
      "de": "die Stelle",
      "en": "job position",
      "cat": "Arbeit"
    },
    {
      "de": "der Lebenslauf",
      "en": "CV / resume",
      "cat": "Arbeit"
    },
    {
      "de": "die Berufserfahrung",
      "en": "work experience",
      "cat": "Arbeit"
    },
    {
      "de": "die Ausbildung",
      "en": "education / training",
      "cat": "Arbeit"
    },
    {
      "de": "die Kenntnisse",
      "en": "skills / knowledge",
      "cat": "Arbeit"
    },
    {
      "de": "teilen",
      "en": "to share",
      "cat": "Medien"
    },
    {
      "de": "herunterladen",
      "en": "to download",
      "cat": "Medien"
    },
    {
      "de": "hochladen",
      "en": "to upload",
      "cat": "Medien"
    },
    {
      "de": "der Beitrag",
      "en": "post / contribution",
      "cat": "Medien"
    },
    {
      "de": "k\u00fcnstliche Intelligenz",
      "en": "artificial intelligence",
      "cat": "Medien"
    },
    {
      "de": "der Klimawandel",
      "en": "climate change",
      "cat": "Umwelt"
    },
    {
      "de": "die Erderw\u00e4rmung",
      "en": "global warming",
      "cat": "Umwelt"
    },
    {
      "de": "die Treibhausgase",
      "en": "greenhouse gases",
      "cat": "Umwelt"
    },
    {
      "de": "sch\u00fctzen",
      "en": "to protect",
      "cat": "Umwelt"
    },
    {
      "de": "umweltfreundlich",
      "en": "environmentally friendly",
      "cat": "Umwelt"
    },
    {
      "de": "erneuerbar",
      "en": "renewable",
      "cat": "Umwelt"
    },
    {
      "de": "die M\u00fclltrennung",
      "en": "waste separation",
      "cat": "Umwelt"
    },
    {
      "de": "vermeiden",
      "en": "to avoid / prevent",
      "cat": "Umwelt"
    }
  ]
};