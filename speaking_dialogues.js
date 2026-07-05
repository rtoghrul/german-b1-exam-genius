'use strict';

window.SIM_EXAMPLE_NAMES = {
  1: [
    "1. Kurs & Herkunft (Course & Origin)",
    "2. Beruf & Zukunft (Career & Future)",
    "3. Hobbys & Freizeit (Hobbies & Free Time)",
    "4. Familie & Kinder (Family & Children)",
    "5. Wohnort & Wohnung (Living Place & Apartment)",
    "6. Sprachen lernen (Learning Languages)",
    "7. Reisen & Urlaub (Travel & Vacation)",
    "8. Haustiere & Tiere (Pets & Animals)",
    "9. Musik & Konzerte (Music & Concerts)",
    "10. Essen & Kochen (Food & Cooking)",
    "11. Sport & Fitness (Sport & Fitness)",
    "12. Schule & Ausbildung (School & Education)",
    "13. Medien & Internet (Media & Internet)",
    "14. Feste & Feiertage (Festivals & Holidays)",
    "15. Wochenende & Pläne (Weekend & Plans)"
  ],
  2: [
    "1. Handys in der Schule (Smartphones in school)",
    "2. Haustiere in der Großstadt (Pets in the city)",
    "3. Einkaufen im Internet (Online shopping)",
    "4. Braucht man ein Auto in der Stadt? (Do we need a car in the city?)",
    "5. Fertiggerichte vs. Selber kochen (Ready meals vs cooking)",
    "6. Arbeiten im Homeoffice (Working in home office)",
    "7. Fremdsprachen für Kinder (Foreign languages for kids)",
    "8. Brauchen Kinder Taschengeld? (Do kids need pocket money?)",
    "9. Sport im Verein oder allein? (Sport in a club vs alone)",
    "10. Leben ohne Fernseher (Living without TV)",
    "11. Solarenergie auf Hausdächern (Solar energy on roofs)",
    "12. Öffentliche Verkehrsmittel kostenlos? (Free public transport?)",
    "13. Plastikfreie Supermärkte (Plastic-free supermarkets)",
    "14. Rauchverbot in Restaurants (Smoking ban in restaurants)",
    "15. Fast Food und Gesundheit (Fast food and health)",
    "16. Berufsausbildung vs. Studium (Vocational training vs uni)",
    "17. Getrenntes Lernen für Jungen/Mädchen? (Separate learning?)",
    "18. Bargeldloses Zahlen überall? (Cashless payment?)",
    "19. Sollen Geschäfte sonntags öffnen? (Shops open on Sundays?)",
    "20. Ganztagsschulen für alle Kinder? (All-day schools?)"
  ],
  3: [
    "1. Umweltschutz im Alltag (Forest trash cleanup)",
    "2. Gesunde Ernährung (Family cooking vegetables)",
    "3. Mobilität in der Stadt (People cycling on bike path)",
    "4. Generationen zusammen (Grandfather & child playing chess)",
    "5. Mülltrennung zu Hause (Sorting waste at home)",
    "6. Digitales Lernen (Students using tablets)",
    "7. Zusammen arbeiten (Team working in office)",
    "8. Einkaufen auf dem Markt (Buying fresh fruit)",
    "9. Urlaub in den Bergen (Hikers on mountain peak)",
    "10. Fahrrad vs. Auto im Stau (Cyclist passing cars)",
    "11. Haustierpflege (Boy playing with a dog in park)",
    "12. Zusammen Sport machen (Friends running in park)",
    "13. Wohnungssuche (Couple looking at apartment blueprint)",
    "14. Reparatur und Nachhaltigkeit (Man repairing bike wheel)",
    "15. Geselliges Essen (Friends eating pizza and laughing)"
  ]
};

window.SIM_DIALOGUES = {
  1: [
    // 1. Kurs & Herkunft
    [
      { id: 0, speaker: 'girl', name: 'Anna', text: 'Hallo, ich heiße Anna. Wie heißt du und woher kommst du?', translation: 'Hello, I am Anna. What is your name and where do you come from?' },
      { id: 1, speaker: 'boy', name: 'Lukas', text: 'Hallo Anna! Ich bin Lukas und ich komme aus Polen. Und du?', translation: 'Hello Anna! I am Lukas and I come from Poland. And you?' },
      { id: 2, speaker: 'girl', name: 'Anna', text: 'Ich komme aus der Ukraine. Wie lange lebst du schon in Deutschland?', translation: 'I come from Ukraine. How long have you been living in Germany?' },
      { id: 3, speaker: 'boy', name: 'Lukas', text: 'Seit etwa einem Jahr. Ich wohne jetzt in Frankfurt. Was machst du beruflich?', translation: 'Since about a year. I live in Frankfurt now. What is your occupation?' },
      { id: 4, speaker: 'girl', name: 'Anna', text: 'Ich arbeite als Krankenschwester. Und du? Arbeitest du oder lernst du noch?', translation: 'I work as a nurse. And you? Do you work or are you still studying?' },
      { id: 5, speaker: 'boy', name: 'Lukas', text: 'Ich mache gerade ein Praktikum als Automechaniker und besuche den B1-Kurs.', translation: 'I am currently doing an internship as a car mechanic and attending the B1 course.' }
    ],
    // 2. Beruf & Zukunft
    [
      { id: 0, speaker: 'girl', name: 'Sofia', text: 'Guten Tag! Ich bin Sofia. Darf ich dich fragen, was dein Traumberuf ist?', translation: 'Good day! I am Sofia. May I ask you what your dream job is?' },
      { id: 1, speaker: 'boy', name: 'David', text: 'Hallo Sofia! Ich bin David. Mein Traumberuf ist Softwareentwickler. Ich lerne viel am Computer. Was möchtest du machen?', translation: 'Hello Sofia! I am David. My dream job is software developer. I learn a lot on the computer. What would you like to do?' },
      { id: 2, speaker: 'girl', name: 'Sofia', text: 'Ich möchte gerne als Erzieherin im Kindergarten arbeiten, weil ich Kinder sehr mag.', translation: 'I would like to work as a kindergarten teacher because I like children very much.' },
      { id: 3, speaker: 'boy', name: 'David', text: 'Das ist ein schöner Beruf! Musst du dafür noch eine Ausbildung machen?', translation: 'That is a nice job! Do you have to do an apprenticeship for that?' },
      { id: 4, speaker: 'girl', name: 'Sofia', text: 'Ja, eine dreijährige Ausbildung. Davor muss ich aber zuerst die B1-Prüfung bestehen.', translation: 'Yes, a three-year apprenticeship. But before that, I must first pass the B1 exam.' },
      { id: 5, speaker: 'boy', name: 'David', text: 'Das wirst du bestimmt schaffen! Wir lernen ja fleißig zusammen.', translation: 'You will surely manage that! We are studying hard together after all.' }
    ],
    // 3. Hobbys & Freizeit
    [
      { id: 0, speaker: 'girl', name: 'Marie', text: 'Hallo! Ich heiße Marie. Was machst du eigentlich gerne in deiner Freizeit?', translation: 'Hello! I am Marie. What do you actually like to do in your free time?' },
      { id: 1, speaker: 'boy', name: 'Jonas', text: 'Hallo Marie! Ich spiele sehr gerne Fußball und gehe am Wochenende oft wandern. Und du?', translation: 'Hello Marie! I like playing football very much and often go hiking on the weekend. And you?' },
      { id: 2, speaker: 'girl', name: 'Marie', text: 'Ich lese viel und koche gerne für meine Freunde. Treibst du auch Sport unter der Woche?', translation: 'I read a lot and like to cook for my friends. Do you also do sports during the week?' },
      { id: 3, speaker: 'boy', name: 'Jonas', text: 'Ja, jeden Dienstagabend spiele ich im Verein. Das hilft mir, mich nach der Arbeit zu entspannen.', translation: 'Yes, every Tuesday evening I play in a club. That helps me relax after work.' },
      { id: 4, speaker: 'girl', name: 'Marie', text: 'Klingt super! Vielleicht können wir mal zusammen kochen oder eine Fahrradtour machen?', translation: 'Sounds great! Maybe we can cook together sometime or do a bike tour?' },
      { id: 5, speaker: 'boy', name: 'Jonas', text: 'Sehr gerne! Das ist eine tolle Idee, um unser Deutsch zu üben.', translation: 'Very gladly! That is a great idea to practice our German.' }
    ],
    // 4. Familie & Kinder
    [
      { id: 0, speaker: 'girl', name: 'Anna', text: 'Hallo Lukas! Hast du eigentlich Geschwister oder eine eigene Familie?', translation: 'Hello Lukas! Do you actually have siblings or a family of your own?' },
      { id: 1, speaker: 'boy', name: 'Lukas', text: 'Hallo Anna. Ja, ich habe zwei ältere Brüder. Ich bin verheiratet und habe eine kleine Tochter. Und du?', translation: 'Hello Anna. Yes, I have two older brothers. I am married and have a young daughter. And you?' },
      { id: 2, speaker: 'girl', name: 'Anna', text: 'Ich bin ledig, aber ich habe eine Schwester, die noch in der Ukraine wohnt. Wie alt ist deine Tochter?', translation: 'I am single, but I have a sister who still lives in Ukraine. How old is your daughter?' },
      { id: 3, speaker: 'boy', name: 'Lukas', text: 'Sie ist erst drei Jahre alt. Sie geht seit zwei Monaten hier in den Kindergarten.', translation: 'She is only three years old. She has been going to kindergarten here for two months.' },
      { id: 4, speaker: 'girl', name: 'Anna', text: 'Das ist toll für sie, um Deutsch zu lernen! Besucht deine Familie dich oft?', translation: 'That is great for her to learn German! Does your family visit you often?' },
      { id: 5, speaker: 'boy', name: 'Lukas', text: 'Ja, meine Eltern kommen nächsten Monat zu Besuch. Wir freuen uns sehr.', translation: 'Yes, my parents are coming to visit next month. We are very happy.' }
    ],
    // 5. Wohnort & Wohnung
    [
      { id: 0, speaker: 'girl', name: 'Sofia', text: 'Hallo David. Wie wohnst du zurzeit? Hast du eine eigene Wohnung?', translation: 'Hello David. How do you live at the moment? Do you have your own apartment?' },
      { id: 1, speaker: 'boy', name: 'David', text: 'Hallo Sofia. Ich wohne in einer WG mit zwei Freunden. Das spart Geld. Und du?', translation: 'Hello Sofia. I live in a shared flat with two friends. That saves money. And you?' },
      { id: 2, speaker: 'girl', name: 'Sofia', text: 'Ich habe eine kleine Zweizimmerwohnung gemietet. Sie liegt sehr zentral, direkt am Park.', translation: 'I rented a small two-room apartment. It is very central, right by the park.' },
      { id: 3, speaker: 'boy', name: 'David', text: 'Das klingt gemütlich! Gibt es dort eine Einbauküche und einen Balkon?', translation: 'That sounds cozy! Is there a fitted kitchen and a balcony?' },
      { id: 4, speaker: 'girl', name: 'Sofia', text: 'Ja, die Küche war schon drin. Der Balkon zeigt zum Innenhof, daher ist es sehr ruhig.', translation: 'Yes, the kitchen was already inside. The balcony faces the courtyard, so it is very quiet.' },
      { id: 5, speaker: 'boy', name: 'David', text: 'Sehr schön! Ich suche auch bald etwas Eigenes, aber die Mieten sind sehr hoch.', translation: 'Very nice! I am also looking for my own place soon, but rents are very high.' }
    ],
    // 6. Sprachen lernen
    [
      { id: 0, speaker: 'girl', name: 'Marie', text: 'Welche Sprachen sprichst du außer Deutsch und deiner Muttersprache?', translation: 'Which languages do you speak besides German and your native language?' },
      { id: 1, speaker: 'boy', name: 'Jonas', text: 'Ich spreche noch Englisch und ein bisschen Spanisch. Spanisch habe ich in der Schule gelernt. Und du?', translation: 'I also speak English and a bit of Spanish. I learned Spanish in school. And you?' },
      { id: 2, speaker: 'girl', name: 'Marie', text: 'Ich spreche Russisch und lerne jetzt intensiv Deutsch. Manchmal finde ich die Grammatik sehr schwer.', translation: 'I speak Russian and am now learning German intensively. Sometimes I find the grammar very difficult.' },
      { id: 3, speaker: 'boy', name: 'Jonas', text: 'Ja, besonders die Artikel und Adjektivendungen! Wie übst du am liebsten?', translation: 'Yes, especially the articles and adjective endings! How do you prefer to practice?' },
      { id: 4, speaker: 'girl', name: 'Marie', text: 'Ich schaue Filme auf Deutsch mit Untertiteln und versuche, viel Radio zu hören.', translation: 'I watch films in German with subtitles and try to listen to the radio a lot.' },
      { id: 5, speaker: 'boy', name: 'Jonas', text: 'Das ist eine sehr gute Methode! Das Sprechen im Kurs hilft mir auch sehr.', translation: 'That is a very good method! Speaking in the course also helps me a lot.' }
    ],
    // 7. Reisen & Urlaub
    [
      { id: 0, speaker: 'girl', name: 'Anna', text: 'Wohin fährst du dieses Jahr im Sommerurlaub, Lukas?', translation: 'Where are you going for summer vacation this year, Lukas?' },
      { id: 1, speaker: 'boy', name: 'Lukas', text: 'Ich fahre mit meiner Familie an die Ostsee. Wir haben dort ein kleines Ferienhaus gemietet. Und du?', translation: 'I am going with my family to the Baltic Sea. We rented a small holiday house there. And you?' },
      { id: 2, speaker: 'girl', name: 'Anna', text: 'Ich fliege in meine Heimat, um meine Verwandten zu besuchen. Ich habe sie schon lange nicht gesehen.', translation: 'I am flying to my home country to visit my relatives. I haven\'t seen them in a long time.' },
      { id: 3, speaker: 'boy', name: 'Lukas', text: 'Das ist verständlich. Reist du lieber mit dem Zug oder mit dem Flugzeug?', translation: 'That is understandable. Do you prefer traveling by train or by plane?' },
      { id: 4, speaker: 'girl', name: 'Anna', text: 'Weite Strecken fliege ich lieber, das spart viel Zeit. Aber Zugfahren finde ich entspannter.', translation: 'For long distances I prefer to fly, it saves a lot of time. But I find train travel more relaxing.' },
      { id: 5, speaker: 'boy', name: 'Lukas', text: 'Da stimme ich dir zu. Ich wünsche dir schon jetzt eine gute Reise und viel Spaß!', translation: 'I agree with you. I already wish you a good trip and lots of fun!' }
    ],
    // 8. Haustiere & Tiere
    [
      { id: 0, speaker: 'girl', name: 'Sofia', text: 'Magst du Tiere? Hast du ein Haustier in deiner Wohnung?', translation: 'Do you like animals? Do you have a pet in your apartment?' },
      { id: 1, speaker: 'boy', name: 'David', text: 'Ja, ich liebe Hunde! Aber in meiner WG ist Tierhaltung leider verboten. Und bei dir?', translation: 'Yes, I love dogs! But in my shared flat, keeping pets is unfortunately forbidden. And with you?' },
      { id: 2, speaker: 'girl', name: 'Sofia', text: 'Ich habe einen kleinen Kater namens Leo. Er ist sehr ruhig und schläft viel.', translation: 'I have a small male cat named Leo. He is very quiet and sleeps a lot.' },
      { id: 3, speaker: 'boy', name: 'David', text: 'Macht eine Katze nicht viel Arbeit? Wer kümmert sich um sie, wenn du weg bist?', translation: 'Doesn\'t a cat make a lot of work? Who takes care of him when you are away?' },
      { id: 4, speaker: 'girl', name: 'Sofia', text: 'Meine Nachbarin füttert ihn, wenn ich im Urlaub bin. Das klappt wunderbar.', translation: 'My neighbor feeds him when I am on vacation. That works wonderfully.' },
      { id: 5, speaker: 'boy', name: 'David', text: 'Das ist praktisch! Nachbarn, die sich gegenseitig helfen, sind sehr wertvoll.', translation: 'That is practical! Neighbors who help each other are very valuable.' }
    ],
    // 9. Musik & Konzerte
    [
      { id: 0, speaker: 'girl', name: 'Marie', text: 'Hallo Jonas. Hörst du gerne Musik? Was ist deine Lieblingsband?', translation: 'Hello Jonas. Do you like listening to music? What is your favorite band?' },
      { id: 1, speaker: 'boy', name: 'Jonas', text: 'Hallo Marie. Ich höre am liebsten Rockmusik und mag deutsche Bands. Und du?', translation: 'Hello Marie. I prefer listening to rock music and like German bands. And you?' },
      { id: 2, speaker: 'girl', name: 'Marie', text: 'Ich mag klassische Musik und Jazz. Spielst du selbst ein Instrument?', translation: 'I like classical music and jazz. Do you play an instrument yourself?' },
      { id: 3, speaker: 'boy', name: 'Jonas', text: 'Ja, ich spiele seit fünf Jahren Gitarre. Ich übe fast jeden Abend ein bisschen.', translation: 'Yes, I have been playing guitar for five years. I practice a bit almost every evening.' },
      { id: 4, speaker: 'girl', name: 'Marie', text: 'Toll! Gehst du oft auf Live-Konzerte oder Festivals?', translation: 'Great! Do you often go to live concerts or festivals?' },
      { id: 5, speaker: 'boy', name: 'Jonas', text: 'Ja, im Sommer gehe ich mit Freunden auf ein Open-Air-Festival. Das macht viel Spaß.', translation: 'Yes, in the summer I go to an open-air festival with friends. That is a lot of fun.' }
    ],
    // 10. Essen & Kochen
    [
      { id: 0, speaker: 'girl', name: 'Anna', text: 'Kochst du gerne selbst oder kaufst du lieber fertiges Essen?', translation: 'Do you like to cook yourself or do you prefer to buy ready-made food?' },
      { id: 1, speaker: 'boy', name: 'Lukas', text: 'Ich koche fast jeden Tag frisch, am liebsten Nudeln oder Suppen. Und du?', translation: 'I cook fresh almost every day, preferably pasta or soups. And you?' },
      { id: 2, speaker: 'girl', name: 'Anna', text: 'Ich koche auch gern, am liebsten am Wochenende für Freunde. Unter der Woche fehlt mir oft die Zeit.', translation: 'I also like to cook, preferably on weekends for friends. During the week I often lack the time.' },
      { id: 3, speaker: 'boy', name: 'Lukas', text: 'Was ist dein Spezialgericht, das du besonders gut zubereiten kannst?', translation: 'What is your specialty dish that you can prepare particularly well?' },
      { id: 4, speaker: 'girl', name: 'Anna', text: 'Ich mache eine tolle Lasagne! Jeder mag sie. Was isst du am liebsten?', translation: 'I make a great lasagna! Everyone likes it. What do you like to eat most?' },
      { id: 5, speaker: 'boy', name: 'Lukas', text: 'Ich esse sehr gerne Gemüsepfannen mit Reis. Das geht schnell und ist gesund.', translation: 'I like eating vegetable stir-fries with rice. That is fast and healthy.' }
    ],
    // 11. Sport & Fitness
    [
      { id: 0, speaker: 'girl', name: 'Sofia', text: 'Treibst du regelmäßig Sport, David? Gehst du ins Fitnessstudio?', translation: 'Do you do sports regularly, David? Do you go to the gym?' },
      { id: 1, speaker: 'boy', name: 'David', text: 'Nein, ich mag Fitnessstudios nicht. Ich gehe lieber joggen oder fahre Fahrrad. Und du?', translation: 'No, I don\'t like gyms. I prefer running or riding my bike. And you?' },
      { id: 2, speaker: 'girl', name: 'Sofia', text: 'Ich mache zweimal die Woche Yoga in einer kleinen Gruppe. Das entspannt mich.', translation: 'I do yoga twice a week in a small group. That relaxes me.' },
      { id: 3, speaker: 'boy', name: 'David', text: 'Yoga soll sehr gut für den Rücken sein. Ist der Kurs teuer?', translation: 'Yoga is supposed to be very good for the back. Is the course expensive?' },
      { id: 4, speaker: 'girl', name: 'Sofia', text: 'Es geht, ich zahle vierzig Euro im Monat. Der Lehrer ist wirklich sehr nett.', translation: 'It is okay, I pay forty euros a month. The teacher is really very nice.' },
      { id: 5, speaker: 'boy', name: 'David', text: 'Das klingt fair. Vielleicht probiere ich das auch mal aus.', translation: 'That sounds fair. Maybe I will try that sometime too.' }
    ],
    // 12. Schule & Ausbildung
    [
      { id: 0, speaker: 'girl', name: 'Marie', text: 'Wie war deine Schulzeit, Jonas? Welches Fach hast du am meisten gemocht?', translation: 'How was your school time, Jonas? Which subject did you like the most?' },
      { id: 1, speaker: 'boy', name: 'Jonas', text: 'Ich habe Sport und Physik gemocht. Sprachen waren nicht mein Ding. Und bei dir?', translation: 'I liked sport and physics. Languages were not my thing. And with you?' },
      { id: 2, speaker: 'girl', name: 'Marie', text: 'Ich mochte Literatur und Geschichte. Nach der Schule habe ich studiert. Und du?', translation: 'I liked literature and history. After school I studied. And you?' },
      { id: 3, speaker: 'boy', name: 'Jonas', text: 'Ich habe eine Ausbildung als Elektroniker gemacht. Das war sehr praxisnah.', translation: 'I did an apprenticeship as an electronics technician. That was very practical.' },
      { id: 4, speaker: 'girl', name: 'Marie', text: 'Das ist ein solider Beruf! Findest du es wichtig, heute zu studieren?', translation: 'That is a solid career! Do you find it important to study nowadays?' },
      { id: 5, speaker: 'boy', name: 'Jonas', text: 'Nicht unbedingt. Eine gute Ausbildung wird auf dem Arbeitsmarkt auch sehr gesucht.', translation: 'Not necessarily. A good vocational training is also very sought after in the job market.' }
    ],
    // 13. Medien & Internet
    [
      { id: 0, speaker: 'girl', name: 'Anna', text: 'Wie viel Zeit verbringst du täglich im Internet, Lukas?', translation: 'How much time do you spend on the internet daily, Lukas?' },
      { id: 1, speaker: 'boy', name: 'Lukas', text: 'Ziemlich viel, bestimmt drei Stunden für Arbeit und Nachrichten. Und du?', translation: 'Quite a lot, surely three hours for work and news. And you?' },
      { id: 2, speaker: 'girl', name: 'Anna', text: 'Ich nutze es meistens für soziale Medien und um mit meiner Familie zu chatten.', translation: 'I use it mostly for social media and to chat with my family.' },
      { id: 3, speaker: 'boy', name: 'Lukas', text: 'Liest du noch gedruckte Zeitungen oder informierst du dich online?', translation: 'Do you still read printed newspapers or do you get information online?' },
      { id: 4, speaker: 'girl', name: 'Anna', text: 'Nur noch online. Es ist schneller, kostenlos und schont die Umwelt.', translation: 'Only online now. It is faster, free, and protects the environment.' },
      { id: 5, speaker: 'boy', name: 'Lukas', text: 'Das stimmt. Aber man muss aufpassen, dass man nicht zu viel Zeit am Bildschirm verbringt.', translation: 'That\'s true. But one has to be careful not to spend too much time on the screen.' }
    ],
    // 14. Feste & Feiertage
    [
      { id: 0, speaker: 'girl', name: 'Sofia', text: 'Welches Fest feierst du am liebsten in deinem Heimatland, David?', translation: 'Which festival do you like to celebrate most in your home country, David?' },
      { id: 1, speaker: 'boy', name: 'David', text: 'Am liebsten feiere ich das Neujahrsfest mit meiner ganzen Familie. Und du?', translation: 'I prefer celebrating the New Year festival with my whole family. And you?' },
      { id: 2, speaker: 'girl', name: 'Sofia', text: 'Bei uns ist Weihnachten das größte Familienfest. Wir kochen tagelang zusammen.', translation: 'With us, Christmas is the biggest family festival. We cook together for days.' },
      { id: 3, speaker: 'boy', name: 'David', text: 'Gibt es an Weihnachten auch traditionelle Geschenke für die Kinder?', translation: 'Are there also traditional gifts for the children at Christmas?' },
      { id: 4, speaker: 'girl', name: 'Sofia', text: 'Ja, am Heiligabend gibt es die Bescherung unter dem Weihnachtsbaum.', translation: 'Yes, on Christmas Eve there is the gift-giving under the Christmas tree.' },
      { id: 5, speaker: 'boy', name: 'David', text: 'Das klingt wunderschön! Solche Traditionen verbinden die Familie sehr.', translation: 'That sounds wonderful! Such traditions connect the family a lot.' }
    ],
    // 15. Wochenende & Pläne
    [
      { id: 0, speaker: 'girl', name: 'Marie', text: 'Hast du schon Pläne für das kommende Wochenende, Jonas?', translation: 'Do you already have plans for the coming weekend, Jonas?' },
      { id: 1, speaker: 'boy', name: 'Jonas', text: 'Noch nichts Festes. Vielleicht fahre ich an den See, wenn das Wetter gut ist. Und du?', translation: 'Nothing fixed yet. Maybe I will go to the lake if the weather is good. And you?' },
      { id: 2, speaker: 'girl', name: 'Marie', text: 'Ich muss am Samstagvormittag einkaufen, aber am Sonntag treffe ich eine Freundin.', translation: 'I have to shop on Saturday morning, but on Sunday I am meeting a friend.' },
      { id: 3, speaker: 'boy', name: 'Jonas', text: 'Was macht ihr gemeinsam? Geht ihr in ein Café oder ins Kino?', translation: 'What are you doing together? Are you going to a café or to the cinema?' },
      { id: 4, speaker: 'girl', name: 'Marie', text: 'Wir wollen in das neue Kunstmuseum gehen und danach italienisch essen.', translation: 'We want to go to the new art museum and eat Italian food afterwards.' },
      { id: 5, speaker: 'boy', name: 'Jonas', text: 'Das klingt nach einem perfekten Sonntag! Ich wünsche dir viel Spaß dabei.', translation: 'That sounds like a perfect Sunday! I wish you lots of fun doing that.' }
    ]
  ],
  2: [
    // 1. Handys in der Schule
    [
      { id: 0, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Ich möchte heute über das Thema „Handys in der Schule" sprechen. Meine persönliche Erfahrung ist, dass Schüler ihr Handy oft im Unterricht nutzen, was stört.', translation: 'I would like to speak about the topic "Smartphones in school" today. My personal experience is that students often use their phone during class, which is disruptive.' },
      { id: 1, speaker: 'girl', name: 'Anna (Präsentation)', text: 'In meinem Heimatland dürfen Kinder Handys in der Schule haben, aber im Unterricht müssen sie stummgeschaltet sein. Ein Vorteil von Handys ist, dass Eltern ihre Kinder immer erreichen können. Ein großer Nachteil ist jedoch, dass die Schüler abgelenkt werden.', translation: 'In my home country, children are allowed to have phones in school, but they must be muted during class. An advantage of phones is that parents can always reach their children. A major disadvantage, however, is that students get distracted.' },
      { id: 2, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Zusammenfassend finde ich, dass Handys in den Pausen erlaubt sein sollten, aber im Unterricht verboten gehören. Vielen Dank für Ihre Aufmerksamkeit!', translation: 'In conclusion, I think phones should be allowed during breaks, but banned during class. Thank you for your attention!' },
      { id: 3, speaker: 'boy', name: 'Lukas (Partner-Feedback)', text: 'Vielen Dank für deine Präsentation, Anna. Das war sehr interessant. Du hast deutlich gesprochen und gute Beispiele genannt. Ich habe aber noch eine Frage: Denkst du, dass Lehrer Handys im Unterricht als Lernwerkzeug nutzen sollten?', translation: 'Thank you for your presentation, Anna. That was very interesting. You spoke clearly and gave good examples. But I have a question: Do you think teachers should use phones in class as learning tools?' },
      { id: 4, speaker: 'girl', name: 'Anna (Antwort)', text: 'Das ist eine gute Frage, Lukas. Ja, wenn der Lehrer es kontrolliert, zum Beispiel für ein Online-Quiz, kann es nützlich sein. Sonst ist die Ablenkung zu groß.', translation: 'That is a good question, Lukas. Yes, if the teacher controls it, for example for an online quiz, it can be useful. Otherwise, the distraction is too great.' }
    ],
    // 2. Haustiere in der Großstadt
    [
      { id: 0, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Mein Thema ist „Haustiere in der Großstadt". Ich habe selbst eine Katze in meiner Wohnung in Berlin, was gut funktioniert.', translation: 'My topic is "Pets in the big city". I have a cat myself in my apartment in Berlin, which works well.' },
      { id: 1, speaker: 'girl', name: 'Marie (Präsentation)', text: 'In meinem Heimatland haben viele Leute Hunde und Katzen, oft auch in kleineren Wohnungen. Ein Vorteil von Haustieren ist, dass sie gegen Einsamkeit helfen und Kindern Verantwortung beibringen. Ein Nachteil in der Stadt ist jedoch der Platzmangel, besonders für große Hunde.', translation: 'In my home country, many people have dogs and cats, often also in smaller apartments. An advantage of pets is that they help against loneliness and teach children responsibility. A disadvantage in the city, however, is the lack of space, especially for large dogs.' },
      { id: 2, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Ich denke, Haustiere sind eine Bereicherung, aber man muss genug Zeit für sie haben. Vielen Dank für Ihre Aufmerksamkeit!', translation: 'I think pets are an enrichment, but you must have enough time for them. Thank you for your attention!' },
      { id: 3, speaker: 'boy', name: 'Jonas (Partner-Feedback)', text: 'Deine Präsentation war sehr gut strukturiert, Marie. Du hast flüssig gesprochen. Meine Frage an dich: Findest du es tierfreundlich, einen Hund in einer Dreizimmerwohnung zu halten?', translation: 'Your presentation was very well structured, Marie. You spoke fluently. My question to you: Do you find it animal-friendly to keep a dog in a three-room apartment?' },
      { id: 4, speaker: 'girl', name: 'Marie (Antwort)', text: 'Danke für die Frage. Wenn man täglich zwei Stunden mit dem Hund im Park spazieren geht, ist es okay. Wenn er nur in der Wohnung liegt, ist es nicht gut.', translation: 'Thanks for the question. If you walk the dog in the park for two hours daily, it is okay. If he just lies in the apartment, it is not good.' }
    ],
    // 3. Einkaufen im Internet
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Ich präsentiere heute das Thema „Einkaufen im Internet". Ich persönlich kaufe fast alle meine Kleider und Bücher online.', translation: 'I present the topic "Online shopping" today. Personally, I buy almost all of my clothes and books online.' },
      { id: 1, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'In meinem Heimatland wächst der Online-Handel sehr schnell, besonders in den Städten. Der größte Vorteil ist die Zeitersparnis und die Möglichkeit, Preise einfach zu vergleichen. Der Nachteil ist, dass man die Produkte vor dem Kauf nicht anprobieren kann.', translation: 'In my home country, online trade is growing very fast, especially in the cities. The biggest advantage is the time saving and the possibility to easily compare prices. The disadvantage is that you cannot try on the products before buying.' },
      { id: 2, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Meiner Meinung nach hat das Online-Shopping mehr Vorteile, aber wir sollten auch lokale Geschäfte unterstützen. Vielen Dank fürs Zuhören!', translation: 'In my opinion, online shopping has more advantages, but we should also support local shops. Thank you for listening!' },
      { id: 3, speaker: 'boy', name: 'David (Partner-Feedback)', text: 'Das war eine informative Präsentation, Sofia. Mir haben deine Argumente gefallen. Ich habe folgende Frage: Was tust du, wenn ein online bestelltes Produkt beschädigt ankommt?', translation: 'That was an informative presentation, Sofia. I liked your arguments. I have the following question: What do you do when a product ordered online arrives damaged?' },
      { id: 4, speaker: 'girl', name: 'Sofia (Antwort)', text: 'Das passiert leider manchmal. In diesem Fall schicke ich es sofort zurück. Die meisten Online-Händler bieten eine kostenlose Rücksendung an.', translation: 'That unfortunately happens sometimes. In this case, I send it back immediately. Most online retailers offer a free return.' }
    ],
    // 4. Braucht man ein Auto in der Stadt?
    [
      { id: 0, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Mein Thema ist „Braucht man ein Auto in der Stadt?". Ich persönlich habe kein Auto und fahre meistens mit der U-Bahn.', translation: 'My topic is "Do you need a car in the city?". I personally do not have a car and mostly ride the subway.' },
      { id: 1, speaker: 'girl', name: 'Anna (Präsentation)', text: 'In den großen Städten meines Heimatlandes fahren fast alle Leute Auto, was zu viel Stau führt. Vorteile eines Autos sind Bequemlichkeit und Flexibilität. Nachteile sind hohe Kosten für Benzin und Parken sowie die Umweltverschmutzung.', translation: 'In the big cities of my home country, almost everyone drives a car, which leads to a lot of traffic. Advantages of a car are convenience and flexibility. Disadvantages are high costs for petrol and parking, as well as environmental pollution.' },
      { id: 2, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Ich bin der Meinung, dass man in Großstädten mit gutem Nahverkehr kein eigenes Auto braucht. Vielen Dank!', translation: 'I am of the opinion that in big cities with good public transport, one does not need their own car. Thank you very much!' },
      { id: 3, speaker: 'boy', name: 'Lukas (Feedback)', text: 'Danke für den Vortrag, Anna. Du hast das Thema verständlich erklärt. Meine Frage dazu: Wie würdest du schwere Einkäufe ohne Auto nach Hause transportieren?', translation: 'Thanks for the talk, Anna. You explained the topic understandably. My question: How would you transport heavy purchases home without a car?' },
      { id: 4, speaker: 'girl', name: 'Anna (Antwort)', text: 'Das ist ein wichtiger Punkt, Lukas. Dafür kann man sich kurzzeitig ein Lastenrad ausleihen oder Lieferdienste nutzen, das ist oft günstiger.', translation: 'That is an important point, Lukas. For that, one can rent a cargo bike for a short time or use delivery services, which is often cheaper.' }
    ],
    // 5. Fertiggerichte vs. Selber kochen
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Ich spreche heute über „Fertiggerichte contra Selber kochen". Ich versuche, immer selbst frisch zu kochen, weil es gesünder ist.', translation: 'I speak today about "Ready meals versus cooking yourself". I try to always cook fresh myself because it is healthier.' },
      { id: 1, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'In vielen Familien wird heute aus Zeitgründen oft auf Fertigprodukte zurückgegriffen. Ein Vorteil ist die schnelle Zubereitung ohne Aufwand. Ein Nachteil ist jedoch der hohe Gehalt an Salz, Zucker und Konservierungsstoffen.', translation: 'In many families today, ready-made products are often used due to lack of time. An advantage is the fast preparation without effort. A disadvantage, however, is the high content of salt, sugar, and preservatives.' },
      { id: 2, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Zusammenfassend finde ich, dass frisch gekochtes Essen die beste Wahl ist. Vielen Dank für Ihre Aufmerksamkeit!', translation: 'In summary, I think freshly cooked food is the best choice. Thank you for your attention!' },
      { id: 3, speaker: 'boy', name: 'David (Feedback)', text: 'Danke, Sofia. Das war eine gute Präsentation mit klaren Argumenten. Ich möchte dich fragen: Kochst du auch selbst, wenn du erst spät abends nach Hause kommst?', translation: 'Thanks, Sofia. That was a good presentation with clear arguments. I would like to ask you: Do you also cook yourself when you return home late in the evening?' },
      { id: 4, speaker: 'girl', name: 'Sofia (Antwort)', text: 'Das ist manchmal schwer, David. In solchen Fällen koche ich am Wochenende größere Portionen vor, die ich unter der Woche nur aufwärme.', translation: 'That is sometimes hard, David. In such cases, I cook larger portions in advance on the weekend, which I only warm up during the week.' }
    ],
    // 6. Arbeiten im Homeoffice
    [
      { id: 0, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Heute präsentiere ich das Thema „Arbeiten im Homeoffice". Ich persönlich arbeite zwei Tage pro Woche von zu Hause aus.', translation: 'Today I present the topic "Working in home office". I personally work from home two days a week.' },
      { id: 1, speaker: 'girl', name: 'Marie (Präsentation)', text: 'In meinem Heimatland wird Homeoffice immer beliebter, vor allem in IT-Firmen. Der Vorteil ist der Wegfall des täglichen Arbeitswegs und die bessere Zeiteinteilung. Der Nachteil ist der Mangel an sozialem Kontakt zu Kollegen.', translation: 'In my home country, home office is becoming more popular, especially in IT companies. The advantage is the elimination of the daily commute and better time management. The disadvantage is the lack of social contact with colleagues.' },
      { id: 2, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Meiner Meinung nach ist ein gemischtes Modell aus Büro und Homeoffice am besten. Vielen Dank!', translation: 'In my opinion, a mixed model of office and home office is best. Thank you very much!' },
      { id: 3, speaker: 'boy', name: 'Jonas (Feedback)', text: 'Eine sehr interessante Präsentation, Marie. Du hast flüssig gesprochen. Ich habe eine Frage: Glaubst du, dass man zu Hause im Homeoffice produktiver arbeitet als im Büro?', translation: 'A very interesting presentation, Marie. You spoke fluently. I have a question: Do you believe that one works more productively at home in the home office than in the office?' },
      { id: 4, speaker: 'girl', name: 'Marie (Antwort)', text: 'Danke für die Frage. Das hängt vom Menschen ab. Wenn man sich gut selbst organisieren kann, ja. Wenn man leicht abgelenkt wird, ist das Büro besser.', translation: 'Thanks for the question. That depends on the person. If you can organize yourself well, yes. If you are easily distracted, the office is better.' }
    ],
    // 7. Fremdsprachen für Kinder
    [
      { id: 0, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Ich möchte über „Fremdsprachen für Kinder" sprechen. In meiner Kindheit habe ich früh Englisch gelernt.', translation: 'I would like to speak about "Foreign languages for children". In my childhood, I learned English early.' },
      { id: 1, speaker: 'girl', name: 'Anna (Präsentation)', text: 'In meiner Heimat lernen die Kinder meistens ab der ersten Klasse eine Fremdsprache. Ein Vorteil ist, dass junge Gehirne Sprachen spielerisch und viel schneller aufnehmen. Ein Nachteil könnte eine Überforderung der Kinder sein.', translation: 'In my home country, children usually learn a foreign language starting in first grade. An advantage is that young brains absorb languages playfully and much faster. A disadvantage could be overloading the children.' },
      { id: 2, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Ich finde es sehr wichtig, früh mit dem Sprachenlernen anzufangen. Vielen Dank für Ihre Aufmerksamkeit!', translation: 'I find it very important to start language learning early. Thank you for your attention!' },
      { id: 3, speaker: 'boy', name: 'Lukas (Feedback)', text: 'Das war eine tolle Präsentation, Anna. Du hast mich überzeugt. Ich habe eine Frage: Welche Fremdsprache ist deiner Meinung nach für Kinder nach Englisch am nützlichsten?', translation: 'That was a great presentation, Anna. You convinced me. I have a question: Which foreign language do you think is most useful for children after English?' },
      { id: 4, speaker: 'girl', name: 'Anna (Antwort)', text: 'Danke für dein Feedback, Lukas. Ich denke, Spanisch oder Französisch sind sehr nützlich, weil sie weltweit von vielen Menschen gesprochen werden.', translation: 'Thank you for your feedback, Lukas. I think Spanish or French are very useful because they are spoken by many people worldwide.' }
    ],
    // 8. Brauchen Kinder Taschengeld?
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Mein Thema lautet „Brauchen Kinder Taschengeld?". Ich habe als Kind wöchentlich ein bisschen Geld bekommen.', translation: 'My topic is "Do children need pocket money?". As a child, I received a little money weekly.' },
      { id: 1, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'In vielen Familien in Deutschland ist Taschengeld üblich, um Kindern den Umgang mit Finanzen beizubringen. Der Vorteil ist der Lerneffekt bezüglich Sparen und Ausgeben. Der Nachteil ist, dass manche Kinder ihr Geld sofort für Süßigkeiten verschwenden.', translation: 'In many families in Germany, pocket money is common to teach children how to handle finances. The advantage is the learning effect regarding saving and spending. The disadvantage is that some children waste their money immediately on sweets.' },
      { id: 2, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Ich denke, ein kleines Taschengeld ab dem Grundschulalter ist sehr sinnvoll. Danke fürs Zuhören!', translation: 'I think a small pocket money starting at primary school age is very useful. Thanks for listening!' },
      { id: 3, speaker: 'boy', name: 'David (Feedback)', text: 'Vielen Dank, Sofia. Die Argumente waren sehr ausgewogen. Meine Frage an dich: Sollten Eltern kontrollieren, wofür die Kinder ihr Taschengeld ausgeben?', translation: 'Thank you very much, Sofia. The arguments were very balanced. My question to you: Should parents control what children spend their pocket money on?' },
      { id: 4, speaker: 'girl', name: 'Sofia (Antwort)', text: 'Das ist eine gute Frage, David. Nein, ich finde, Kinder sollten selbst entscheiden dürfen, um aus Fehlern zu lernen. Nur bei gefährlichen Dingen sollten Eltern eingreifen.', translation: 'That is a good question, David. No, I think children should be allowed to decide themselves in order to learn from mistakes. Only with dangerous things should parents intervene.' }
    ],
    // 9. Sport im Verein oder allein?
    [
      { id: 0, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Ich spreche heute über das Thema „Sport im Verein oder allein?". Ich persönlich spiele Tennis im Verein.', translation: 'I speak today about the topic "Sport in a club or alone?". I personally play tennis in a club.' },
      { id: 1, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Vereine haben in Deutschland eine lange Tradition und sind sehr populär. Der Vorteil des Vereins ist der soziale Kontakt, die Traineranleitung und Teamgeist. Der Nachteil sind feste Trainingszeiten und Mitgliedskosten.', translation: 'Clubs have a long tradition in Germany and are very popular. The advantage of the club is social contact, trainer guidance, and team spirit. The disadvantage is fixed training times and membership costs.' },
      { id: 2, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Zusammenfassend finde ich, dass Sport im Verein motivierender ist als Einzeltraining. Vielen Dank!', translation: 'In conclusion, I think sport in a club is more motivating than individual training. Thank you very much!' },
      { id: 3, speaker: 'boy', name: 'Jonas (Feedback)', text: 'Deine Präsentation war klasse, Marie. Sehr flüssig und strukturiert. Meine Frage: Was empfiehlst du jemandem, der wegen unregelmäßiger Arbeitszeiten keine festen Termine einhalten kann?', translation: 'Your presentation was great, Marie. Very fluent and structured. My question: What do you recommend to someone who cannot keep fixed appointments due to irregular working hours?' },
      { id: 4, speaker: 'girl', name: 'Marie (Antwort)', text: 'Das ist ein guter Einwand, Jonas. Für solche Menschen sind Fitnessstudios mit flexiblen Öffnungszeiten oder Online-Sportkurse für zu Hause besser geeignet.', translation: 'That is a good objection, Jonas. For such people, gyms with flexible opening hours or online sport courses for home are better suited.' }
    ],
    // 10. Leben ohne Fernseher
    [
      { id: 0, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Mein Thema ist „Leben ohne Fernseher". Ich besitze seit zwei Jahren keinen Fernseher mehr.', translation: 'My topic is "Living without a TV". I haven\'t owned a TV for two years.' },
      { id: 1, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Heutzutage nutzen viele Menschen stattdessen Streaming-Dienste auf dem Laptop. Ein Vorteil ohne Fernseher ist die gesparte Zeit, die man für sinnvollere Hobbys oder Familie nutzen kann. Ein Nachteil ist, dass man manche Live-Sendungen verpasst.', translation: 'Nowadays, many people use streaming services on their laptop instead. An advantage without a TV is the saved time, which can be used for more meaningful hobbies or family. A disadvantage is that you miss some live broadcasts.' },
      { id: 2, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Meiner Meinung nach kann man ohne Fernseher ein bewussteres und aktiveres Leben führen. Vielen Dank!', translation: 'In my opinion, one can lead a more conscious and active life without a TV. Thank you very much!' },
      { id: 3, speaker: 'boy', name: 'Lukas (Feedback)', text: 'Danke für deine Präsentation, Anna. Das war sehr gut vorgetragen. Ich habe folgende Frage: Wie informierst du dich über aktuelle Nachrichten ohne Fernseher?', translation: 'Thanks for your presentation, Anna. That was very well presented. I have the following question: How do you inform yourself about current news without a TV?' },
      { id: 4, speaker: 'girl', name: 'Anna (Antwort)', text: 'Das ist ganz einfach, Lukas. Ich lese Nachrichtenseiten im Internet oder höre Podcasts auf meinem Smartphone. So bin ich immer gut informiert.', translation: 'That is very simple, Lukas. I read news sites on the internet or listen to podcasts on my smartphone. This way I am always well informed.' }
    ],
    // 11. Solarenergie auf Hausdächern
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Ich spreche heute über das Thema „Solarenergie auf Hausdächern". Ich finde dieses Thema sehr wichtig für unsere Umwelt.', translation: 'I speak today about the topic "Solar energy on roofs". I find this topic very important for our environment.' },
      { id: 1, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'In Deutschland sieht man immer mehr Solarzellen auf privaten Häusern. Der Vorteil ist die Produktion von umweltfreundlichem Strom und langfristige Geldersparnis. Der Nachteil sind die hohen Anschaffungskosten zu Beginn.', translation: 'In Germany, one sees more and more solar cells on private houses. The advantage is the production of environmentally friendly electricity and long-term money savings. The disadvantage is the high purchase costs at the beginning.' },
      { id: 2, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Zusammenfassend finde ich, dass Solarenergie die Zukunft ist und vom Staat stärker gefördert werden sollte. Danke!', translation: 'In conclusion, I think solar energy is the future and should be supported more strongly by the state. Thank you!' },
      { id: 3, speaker: 'boy', name: 'David (Feedback)', text: 'Vielen Dank für deine Präsentation, Sofia. Das war sehr informativ. Meine Frage dazu: Was sollten Mieter in Mietwohnungen tun, die kein eigenes Dach für Solarzellen haben?', translation: 'Thank you very much for your presentation, Sofia. That was very informative. My question: What should tenants in rented apartments do, who do not have their own roof for solar cells?' },
      { id: 4, speaker: 'girl', name: 'Sofia (Antwort)', text: 'Das ist eine gute Frage, David. Mieter können sogenannte Balkonkraftwerke nutzen. Das sind kleine Solaranlagen, die man einfach am Balkongitter befestigt.', translation: 'That is a good question, David. Tenants can use so-called balcony power plants. These are small solar systems that are simply attached to the balcony railing.' }
    ],
    // 12. Öffentliche Verkehrsmittel kostenlos?
    [
      { id: 0, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Mein Thema ist „Sollte der öffentliche Nahverkehr kostenlos sein?". Ich fahre täglich mit Bus und Bahn.', translation: 'My topic is "Should public transport be free?". I ride buses and trains daily.' },
      { id: 1, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Einige Städte in Europa testen bereits kostenlose Busse und Bahnen. Der große Vorteil ist die Reduzierung von Autoverkehr, Stau und Abgasen. Der Nachteil ist die Finanzierung, da der Staat diese Kosten über Steuern bezahlen müsste.', translation: 'Some cities in Europe are already testing free buses and trains. The big advantage is the reduction of car traffic, traffic jams, and exhaust gases. The disadvantage is financing, as the state would have to pay these costs through taxes.' },
      { id: 2, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Ich bin der Meinung, dass ein kostenloser Nahverkehr ein wichtiger Schritt für den Klimaschutz wäre. Vielen Dank!', translation: 'I am of the opinion that free public transport would be an important step for climate protection. Thank you very much!' },
      { id: 3, speaker: 'boy', name: 'Jonas (Feedback)', text: 'Klasse Präsentation, Marie. Du hast flüssig gesprochen. Ich habe eine Frage: Befürchtest du nicht, dass die Busse und Bahnen dann völlig überfüllt sein werden?', translation: 'Great presentation, Marie. You spoke fluently. I have a question: Don\'t you fear that buses and trains will then be completely overcrowded?' },
      { id: 4, speaker: 'girl', name: 'Marie (Antwort)', text: 'Das ist ein berechtigter Punkt, Jonas. Die Städte müssten natürlich gleichzeitig in mehr Fahrzeuge und besseres Personal investieren, um das zu verhindern.', translation: 'That is a justified point, Jonas. The cities would of course have to invest in more vehicles and better staff at the same time to prevent that.' }
    ],
    // 13. Plastikfreie Supermärkte
    [
      { id: 0, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Ich möchte das Thema „Plastikfreie Supermärkte" vorstellen. Ich versuche, Müll beim Einkaufen zu vermeiden.', translation: 'I would like to introduce the topic "Plastic-free supermarkets". I try to avoid waste when shopping.' },
      { id: 1, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Es gibt bereits spezielle Läden, in denen man Lebensmittel in mitgebrachte Gläser abfüllt. Der Vorteil ist der aktive Umweltschutz und weniger Plastikmüll. Der Nachteil ist der höhere Aufwand beim Einkauf, da man Behälter mitbringen muss.', translation: 'There are already special stores where one fills food into brought jars. The advantage is active environmental protection and less plastic waste. The disadvantage is the higher effort when shopping, as you have to bring containers.' },
      { id: 2, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Ich finde, normale Supermärkte sollten auch mehr plastikfreie Optionen anbieten. Vielen Dank für Ihre Aufmerksamkeit!', translation: 'I think normal supermarkets should also offer more plastic-free options. Thank you for your attention!' },
      { id: 3, speaker: 'boy', name: 'Lukas (Feedback)', text: 'Vielen Dank für deine Präsentation, Anna. Das war sehr interessant. Ich habe eine Frage: Glaubst du, dass verpackungsfreie Produkte für arme Familien nicht zu teuer sind?', translation: 'Thank you very much for your presentation, Anna. That was very interesting. I have a question: Do you believe that packaging-free products are not too expensive for poor families?' },
      { id: 4, speaker: 'girl', name: 'Anna (Antwort)', text: 'Das ist leider oft der Fall, Lukas. Verpackungsfreie Produkte sollten staatlich subventioniert oder durch große Mengen günstiger angeboten werden.', translation: 'That is unfortunately often the case, Lukas. Packaging-free products should be subsidized by the state or offered cheaper through large quantities.' }
    ],
    // 14. Rauchverbot in Restaurants
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Ich spreche heute über das „Rauchverbot in Restaurants". Ich finde saubere Luft beim Essen sehr angenehm.', translation: 'I speak today about the "Smoking ban in restaurants". I find clean air while eating very pleasant.' },
      { id: 1, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'In Deutschland gilt dieses Verbot schon seit vielen Jahren in allen Bundesländern. Der Vorteil ist der Schutz der Gesundheit der Gäste und Mitarbeiter vor Passivrauchen. Der Nachteil betrifft Raucher, die zum Rauchen nach draußen gehen müssen.', translation: 'In Germany, this ban has applied for many years in all federal states. The advantage is the protection of the health of guests and staff from passive smoking. The disadvantage affects smokers who have to go outside to smoke.' },
      { id: 2, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Zusammenfassend finde ich das Rauchverbot in Gaststätten absolut richtig und notwendig. Vielen Dank!', translation: 'In conclusion, I think the smoking ban in restaurants is absolutely right and necessary. Thank you very much!' },
      { id: 3, speaker: 'boy', name: 'David (Feedback)', text: 'Danke für die gute Präsentation, Sofia. Du hast deutlich gesprochen. Meine Frage: Findest du, dass das Verbot auch für Außenbereiche (z.B. Terrassen) gelten sollte?', translation: 'Thanks for the good presentation, Sofia. You spoke clearly. My question: Do you think the ban should also apply to outdoor areas (e.g. terraces)?' },
      { id: 4, speaker: 'girl', name: 'Sofia (Antwort)', text: 'Das ist eine schwierige Frage, David. Auf einer Terrasse zieht der Rauch schnell ab. Solange Nichtraucher nicht gestört werden, finde ich es draußen okay.', translation: 'That is a difficult question, David. On a terrace, the smoke clears quickly. As long as non-smokers are not disturbed, I think it is okay outside.' }
    ],
    // 15. Fast Food und Gesundheit
    [
      { id: 0, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Heute präsentiere ich das Thema „Fast Food und Gesundheit". Ich esse nur sehr selten Hamburger oder Pommes.', translation: 'Today I present the topic "Fast food and health". I eat hamburgers or fries only very rarely.' },
      { id: 1, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Fast-Food-Ketten sind weltweit verbreitet und besonders bei Jugendlichen beliebt. Der Vorteil ist der günstige Preis und die schnelle Verfügbarkeit. Der Nachteil ist der Mangel an Nährstoffen und das Risiko für Übergewicht und Krankheiten.', translation: 'Fast food chains are widespread worldwide and especially popular with teenagers. The advantage is the cheap price and fast availability. The disadvantage is the lack of nutrients and the risk of obesity and illnesses.' },
      { id: 2, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Meiner Meinung nach sollte man Fast Food meiden und stattdessen selbst frisch kochen. Vielen Dank!', translation: 'In my opinion, one should avoid fast food and instead cook fresh themselves. Thank you very much!' },
      { id: 3, speaker: 'boy', name: 'Jonas (Feedback)', text: 'Deine Präsentation war sehr gut strukturiert, Marie. Ich habe eine Frage: Was hälst du von gesunden Fast-Food-Alternativen wie Salatbars?', translation: 'Your presentation was very well structured, Marie. I have a question: What do you think of healthy fast food alternatives like salad bars?' },
      { id: 4, speaker: 'girl', name: 'Marie (Antwort)', text: 'Das finde ich eine tolle Entwicklung, Jonas. Wenn es schnell gehen muss, ist eine Salatbar oder ein vegetarischer Wrap eine super Alternative.', translation: 'I think that is a great development, Jonas. When things have to be fast, a salad bar or a vegetarian wrap is a great alternative.' }
    ],
    // 16. Berufsausbildung vs. Studium
    [
      { id: 0, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Ich spreche heute über das Thema „Berufsausbildung oder Studium?". Viele junge Leute stehen vor dieser Entscheidung.', translation: 'I speak today about the topic "Vocational training or study?". Many young people face this decision.' },
      { id: 1, speaker: 'girl', name: 'Anna (Präsentation)', text: 'In Deutschland gibt es das duale Ausbildungssystem, das Theorie und Praxis verbindet. Der Vorteil der Ausbildung ist das frühe eigene Gehalt und Praxiserfahrung. Der Vorteil des Studiums sind oft höhere Karrierechancen und besseres Gehalt im Alter.', translation: 'In Germany, there is the dual education system, which connects theory and practice. The advantage of vocational training is the early salary and practical experience. The advantage of study is often higher career chances and better salary in old age.' },
      { id: 2, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Zusammenfassend finde ich beide Wege gut, je nachdem, ob man lieber praktisch oder theoretisch arbeitet. Danke!', translation: 'In conclusion, I find both paths good, depending on whether one prefers to work practically or theoretically. Thank you!' },
      { id: 3, speaker: 'boy', name: 'Lukas (Feedback)', text: 'Danke für die informative Präsentation, Anna. Ich habe eine Frage: Denkst du, dass manche Berufe heute ohne Studium gar nicht mehr ausgeübt werden können?', translation: 'Thanks for the informative presentation, Anna. I have a question: Do you think some professions today cannot be practiced at all without a university study?' },
      { id: 4, speaker: 'girl', name: 'Anna (Antwort)', text: 'Ja, für Berufe wie Arzt, Anwalt oder Lehrer ist ein Universitätsstudium gesetzlich vorgeschrieben. Da gibt es keine Alternative.', translation: 'Yes, for professions like doctor, lawyer, or teacher, a university study is legally required. There is no alternative there.' }
    ],
    // 17. Getrenntes Lernen für Jungen und Mädchen?
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Mein Thema lautet „Sollten Jungen und Mädchen getrennt lernen?". Das ist ein viel diskutiertes Thema.', translation: 'My topic is "Should boys and girls learn separately?". This is a much discussed topic.' },
      { id: 1, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Es gibt Schulen, die reine Mädchen- oder Jungenklassen anbieten. Der Vorteil ist, dass Schüler ohne Ablenkung und Klischees lernen können. Der Nachteil ist jedoch, dass das soziale Lernen und der Umgang miteinander im Alltag fehlen.', translation: 'There are schools that offer pure girl or boy classes. The advantage is that students can learn without distraction and clichés. The disadvantage, however, is that social learning and interaction with each other in daily life are missing.' },
      { id: 2, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Meiner Meinung nach ist die gemeinsame Schule (Koedukation) die beste Vorbereitung auf die Gesellschaft. Vielen Dank!', translation: 'In my opinion, the joint school (co-education) is the best preparation for society. Thank you very much!' },
      { id: 3, speaker: 'boy', name: 'David (Feedback)', text: 'Danke, Sofia. Das war ein sehr interessanter Vortrag. Ich habe eine Frage: Gibt es Fächer, in denen ein zeitweise getrennter Unterricht sinnvoll sein könnte?', translation: 'Thanks, Sofia. That was a very interesting talk. I have a question: Are there subjects in which temporarily separate lessons could make sense?' },
      { id: 4, speaker: 'girl', name: 'Sofia (Antwort)', text: 'Das ist ein guter Punkt, David. Im Sportunterricht oder bei manchen naturwissenschaftlichen Projekten kann ein getrennter Unterricht manchmal sinnvoll sein.', translation: 'That is a good point, David. In PE lessons or in some science projects, separate lessons can sometimes make sense.' }
    ],
    // 18. Bargeldloses Zahlen überall?
    [
      { id: 0, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Ich präsentiere heute das Thema „Bargeldloses Zahlen". Ich zahle fast nur noch mit Karte oder Smartphone.', translation: 'I present the topic "Cashless payment" today. I pay almost only with card or smartphone.' },
      { id: 1, speaker: 'girl', name: 'Marie (Präsentation)', text: 'In Ländern wie Schweden wird kaum noch Bargeld genutzt, in Deutschland ist es noch anders. Der Vorteil ist die Schnelligkeit und Hygiene beim Bezahlen. Der Nachteil ist der Mangel an Datenschutz und Kontrolle über die eigenen Ausgaben.', translation: 'In countries like Sweden, hardly any cash is used; in Germany it is still different. The advantage is the speed and hygiene when paying. The disadvantage is the lack of data protection and control over one\'s own expenses.' },
      { id: 2, speaker: 'girl', name: 'Marie (Präsentation)', text: 'Ich finde bargeldloses Zahlen sehr praktisch, aber wir sollten auch die Option für Bargeld behalten. Danke!', translation: 'I find cashless payment very practical, but we should also keep the option for cash. Thank you!' },
      { id: 3, speaker: 'boy', name: 'Jonas (Feedback)', text: 'Das war eine informative Präsentation, Marie. Gut gemacht. Ich habe folgende Frage: Was tun ältere Menschen, die sich mit moderner Technik nicht auskennen?', translation: 'That was an informative presentation, Marie. Well done. I have the following question: What do older people do who do not know their way around modern technology?' },
      { id: 4, speaker: 'girl', name: 'Marie (Antwort)', text: 'Das ist ein großes Problem, Jonas. Deshalb müssen wir sicherstellen, dass Bargeld weiterhin überall akzeptiert wird, um niemanden auszugrenzen.', translation: 'That is a big problem, Jonas. Therefore we must ensure that cash continues to be accepted everywhere, so as not to exclude anyone.' }
    ],
    // 19. Sollen Geschäfte sonntags öffnen?
    [
      { id: 0, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Ich spreche heute über das Thema „Sonntagsöffnung für Geschäfte". In Deutschland ist der Sonntag traditionell ein Ruhetag.', translation: 'I speak today about the topic "Sunday opening for shops". In Germany, Sunday is traditionally a day of rest.' },
      { id: 1, speaker: 'girl', name: 'Anna (Präsentation)', text: 'In vielen anderen Ländern sind Einkaufszentren am Sonntag normal geöffnet. Ein Vorteil ist die Flexibilität für die Kunden, besonders für Berufstätige. Ein Nachteil ist die Belastung der Mitarbeiter im Verkauf, die dann keine Zeit für ihre Familien haben.', translation: 'In many other countries, shopping centers are normally open on Sunday. An advantage is flexibility for customers, especially for working people. A disadvantage is the burden on sales staff, who then have no time for their families.' },
      { id: 2, speaker: 'girl', name: 'Anna (Präsentation)', text: 'Meiner Meinung nach sollte der Sonntag ein freier Tag bleiben, um Ruhe zu finden. Vielen Dank für Ihre Aufmerksamkeit!', translation: 'In my opinion, Sunday should remain a free day to find rest. Thank you for your attention!' },
      { id: 3, speaker: 'boy', name: 'Lukas (Feedback)', text: 'Vielen Dank für deine Präsentation, Anna. Du hast flüssig gesprochen. Ich möchte fragen: Was hältst du von speziellen Ausnahmen für Tankstellen und Bahnhofsgeschäfte?', translation: 'Thank you very much for your presentation, Anna. You spoke fluently. I would like to ask: What do you think of special exceptions for petrol stations and station shops?' },
      { id: 4, speaker: 'girl', name: 'Anna (Antwort)', text: 'Das finde ich in Ordnung, Lukas. Für dringende Notfälle (wie Milch oder Brot) sind diese Ausnahmen sehr nützlich, solange es nicht die Regel wird.', translation: 'I think that is okay, Lukas. For urgent emergencies (like milk or bread), these exceptions are very useful, as long as it does not become the rule.' }
    ],
    // 20. Ganztagsschulen für alle Kinder?
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Mein Thema lautet „Ganztagsschulen für alle Kinder". In Deutschland gibt es immer mehr solche Schulen.', translation: 'My topic is "All-day schools for all children". In Germany, there are more and more such schools.' },
      { id: 1, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Bei der Ganztagsschule bleiben die Kinder bis zum Nachmittag in der Schule. Der Vorteil ist die bessere Vereinbarkeit von Familie und Beruf für die Eltern und die gemeinsame Hausaufgabenhilfe. Der Nachteil ist die verkürzte Freizeit für Hobbys und Freunde zu Hause.', translation: 'In all-day schools, children stay in school until the afternoon. The advantage is the better compatibility of family and career for parents, and mutual homework help. The disadvantage is the shortened free time for hobbies and friends at home.' },
      { id: 2, speaker: 'girl', name: 'Sofia (Präsentation)', text: 'Zusammenfassend finde ich die Ganztagsschule sehr positiv, besonders wenn es gute Freizeitangebote gibt. Danke!', translation: 'In conclusion, I find the all-day school very positive, especially if there are good leisure offers. Thank you!' },
      { id: 3, speaker: 'boy', name: 'David (Feedback)', text: 'Danke für die Präsentation, Sofia. Das war gut strukturiert. Meine Frage: Denkst du, das Mittagessen in der Schule sollte für alle Kinder kostenlos sein?', translation: 'Thanks for the presentation, Sofia. That was well structured. My question: Do you think lunch at school should be free for all children?' },
      { id: 4, speaker: 'girl', name: 'Sofia (Antwort)', text: 'Ja, absolut, David. Ein gesundes, kostenloses Mittagessen sorgt für Chancengleichheit und hilft den Kindern, sich am Nachmittag besser zu konzentrieren.', translation: 'Yes, absolutely, David. A healthy, free lunch ensures equal opportunities and helps the children concentrate better in the afternoon.' }
    ]
  ],
  3: [
    // 1. Umweltschutz im Alltag
    [
      { id: 0, speaker: 'girl', name: 'Anna (Bildbeschreibung)', text: 'Auf diesem Bild sehe ich zwei Personen, eine junge Frau und einen Mann. Sie stehen im Wald und sammeln Plastikmüll in einen großen blauen Sack. Sie tragen Handschuhe und sehen konzentriert aus. Das Bild gehört zum Thema Umweltschutz.', translation: 'In this picture, I see two people, a young woman and a man. They are standing in the forest and collecting plastic waste into a large blue bag. They are wearing gloves and look focused. The picture belongs to the theme of environmental protection.' },
      { id: 1, speaker: 'boy', name: 'Lukas (Diskussion)', text: 'Das ist eine sehr schöne Beschreibung, Anna. Ich finde diese Aktion vorbildlich. Ich versuche auch, Plastik zu vermeiden. Zum Beispiel nehme ich beim Einkaufen immer eine Stofftasche mit. Wie machst du das?', translation: 'That is a very nice description, Anna. I find this action exemplary. I also try to avoid plastic. For example, I always take a cloth bag with me when shopping. How do you do it?' },
      { id: 2, speaker: 'girl', name: 'Anna (Diskussion)', text: 'Ich trenne zu Hause den Müll sehr genau und fahre oft mit dem Fahrrad statt mit dem Auto. Das schont die Umwelt und spart Geld.', translation: 'I separate trash very carefully at home and often ride my bike instead of driving. That protects the environment and saves money.' },
      { id: 3, speaker: 'boy', name: 'Lukas (Diskussion)', text: 'Da hast du absolut recht. Jeder kleine Schritt hilft. Wir sollten alle aktiver für den Umweltschutz sein.', translation: 'You are absolutely right. Every small step helps. We should all be more active for environmental protection.' }
    ],
    // 2. Gesunde Ernährung
    [
      { id: 0, speaker: 'girl', name: 'Marie (Bildbeschreibung)', text: 'Auf dem Bild sieht man eine Familie in der Küche: Vater, Mutter und zwei kleine Kinder. Sie schneiden frisches Gemüse wie Tomaten und Gurken und lachen zusammen. Sie bereiten offensichtlich ein gesundes Essen vor.', translation: 'In the picture, one sees a family in the kitchen: father, mother, and two small children. They are cutting fresh vegetables like tomatoes and cucumbers and laughing together. They are obviously preparing a healthy meal.' },
      { id: 1, speaker: 'boy', name: 'Jonas (Diskussion)', text: 'Ja, das Bild strahlt eine glückliche Atmosphäre aus! Ich koche auch sehr gerne frisch. Ich finde es wichtig, dass man sich Zeit für das Essen nimmt. Kochst du lieber selbst oder kaufst du Fertiggerichte?', translation: 'Yes, the picture radiates a happy atmosphere! I also like to cook fresh very much. I think it is important to take time for eating. Do you prefer cooking yourself or do you buy ready-made meals?' },
      { id: 2, speaker: 'girl', name: 'Marie (Diskussion)', text: 'Ich koche fast jeden Tag selbst, weil es gesünder ist und besser schmeckt. Fertiggerichte enthalten mir zu viel Salz und Konservierungsstoffe.', translation: 'I cook myself almost every day because it is healthier and tastes better. Ready-made meals contain too much salt and preservatives for me.' },
      { id: 3, speaker: 'boy', name: 'Jonas (Diskussion)', text: 'Das stimmt. Außerdem lernt die ganze Familie beim gemeinsamen Kochen, wie wichtig frische Lebensmittel sind.', translation: 'That is true. Besides, the whole family learns during cooking together how important fresh foods are.' }
    ],
    // 3. Mobilität in der Stadt
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Bildbeschreibung)', text: 'Das Bild zeigt eine breite Straße in einer Stadt. Man sieht viele Menschen auf Fahrrädern auf einem speziellen Fahrradweg. Im Hintergrund sieht man ein paar Autos, die im Stau stehen. Das Bild beschreibt das Thema moderne Mobilität.', translation: 'The picture shows a wide street in a city. You see many people on bicycles on a special bicycle path. In the background, you see a few cars standing in a traffic jam. The picture describes the topic of modern mobility.' },
      { id: 1, speaker: 'boy', name: 'David (Diskussion)', text: 'Eine interessante Szene! Ich fahre in der Stadt auch am liebsten Fahrrad, weil man schneller am Ziel ist und keinen Parkplatz suchen muss. Wie findest du das öffentliche Verkehrsnetz hier?', translation: 'An interesting scene! In the city, I also prefer riding a bicycle because you get to the destination faster and do not have to look for a parking space. How do you find the public transport network here?' },
      { id: 2, speaker: 'girl', name: 'Sofia (Diskussion)', text: 'Die U-Bahnen und Busse sind sehr gut und pünktlich. Ich benutze sie oft, wenn das Wetter schlecht ist oder es regnet.', translation: 'The subways and buses are very good and punctual. I use them often when the weather is bad or it rains.' },
      { id: 3, speaker: 'boy', name: 'David (Diskussion)', text: 'Genau, eine Mischung aus Fahrrad und Bahn ist meiner Meinung nach die beste Lösung für Großstädte, um Staus und Abgase zu reduzieren.', translation: 'Exactly, a mixture of bicycle and train is in my opinion the best solution for big cities to reduce traffic jams and exhaust fumes.' }
    ],
    // 4. Generationen zusammen
    [
      { id: 0, speaker: 'girl', name: 'Anna (Bildbeschreibung)', text: 'Auf dem Bild sehe ich einen älteren Mann mit grauen Haaren und ein kleines Mädchen, etwa sieben Jahre alt. Sie sitzen an einem Tisch und spielen Schach. Beide lächeln und wirken sehr entspannt.', translation: 'In the picture I see an older man with gray hair and a little girl, about seven years old. They are sitting at a table and playing chess. Both are smiling and look very relaxed.' },
      { id: 1, speaker: 'boy', name: 'Lukas (Diskussion)', text: 'Das Bild beschreibt gut das Zusammenleben der Generationen. Ich finde es wichtig, dass Großeltern Zeit mit ihren Enkeln verbringen. So können Kinder viel lernen. Wie ist das in deinem Heimatland?', translation: 'The picture describes well the coexistence of generations. I find it important that grandparents spend time with their grandchildren. In this way children can learn a lot. How is that in your home country?' },
      { id: 2, speaker: 'girl', name: 'Anna (Diskussion)', text: 'In meiner Heimat wohnen Großeltern oft im selben Haus mit den Kindern und helfen täglich bei der Erziehung. Das entlastet die Eltern sehr.', translation: 'In my home country, grandparents often live in the same house with the children and help daily with upbringing. That relieves the parents a lot.' },
      { id: 3, speaker: 'boy', name: 'Lukas (Diskussion)', text: 'Das ist ein großer Vorteil. In Deutschland wohnen ältere Menschen leider oft allein im Altersheim, was schade ist.', translation: 'That is a big advantage. In Germany, older people unfortunately often live alone in a nursing home, which is a pity.' }
    ],
    // 5. Mülltrennung zu Hause
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Bildbeschreibung)', text: 'Ich sehe auf dem Bild eine Person, die in einer Küche steht. Vor ihr stehen vier verschiedene Mülleimer in den Farben Gelb, Blau, Grün und Grau. Sie wirft eine Plastikflasche in die gelbe Tonne.', translation: 'I see in the picture a person standing in a kitchen. In front of her are four different trash cans in the colors yellow, blue, green, and gray. She throws a plastic bottle into the yellow bin.' },
      { id: 1, speaker: 'boy', name: 'David (Diskussion)', text: 'Das Bild zeigt das Thema Mülltrennung. In Deutschland ist das ein sehr wichtiges Thema, aber am Anfang fand ich das System sehr kompliziert. Wie geht es dir damit?', translation: 'The picture shows the topic of waste separation. In Germany, this is a very important topic, but in the beginning I found the system very complicated. How do you feel about it?' },
      { id: 2, speaker: 'girl', name: 'Sofia (Diskussion)', text: 'Ich habe mich schnell daran gewöhnt. Papier kommt in die blaue Tonne, Biomüll in die grüne Tonne und Plastikverpackungen in den gelben Sack.', translation: 'I quickly got used to it. Paper goes in the blue bin, organic waste in the green bin, and plastic packaging in the yellow bag.' },
      { id: 3, speaker: 'boy', name: 'David (Diskussion)', text: 'Genau! Und Glas bringt man zu den großen Containern auf der Straße. Wenn alle mitmachen, hilft das der Umwelt wirklich sehr.', translation: 'Exactly! And glass is brought to the large containers on the street. If everyone participates, that really helps the environment a lot.' }
    ],
    // 6. Digitales Lernen
    [
      { id: 0, speaker: 'girl', name: 'Marie (Bildbeschreibung)', text: 'Auf dem Bild sieht man ein Klassenzimmer. Fünf Schüler sitzen an Tischen, und jeder hat ein Tablet vor sich. Der Lehrer steht an einer digitalen Tafel und erklärt etwas.', translation: 'In the picture one sees a classroom. Five students are sitting at tables, and each has a tablet in front of them. The teacher stands at a digital board and explains something.' },
      { id: 1, speaker: 'boy', name: 'Jonas (Diskussion)', text: 'Dieses Bild beschreibt die Digitalisierung an Schulen. Ich finde es gut, wenn Schüler früh lernen, mit Computern umzugehen. Aber lenkt das nicht auch ab?', translation: 'This picture describes digitalization in schools. I think it is good if students learn early to handle computers. But doesn\'t that also distract?' },
      { id: 2, speaker: 'girl', name: 'Marie (Diskussion)', text: 'Wenn der Lehrer den Unterricht gut kontrolliert, ist die Ablenkung gering. Tablets machen den Unterricht oft viel interessanter und interaktiver.', translation: 'If the teacher controls the lesson well, the distraction is minor. Tablets often make the lesson much more interesting and interactive.' },
      { id: 3, speaker: 'boy', name: 'Jonas (Diskussion)', text: 'Stimmt. Außerdem spart es viel Papier, wenn man keine schweren Bücher mehr tragen muss. Das ist auch umweltfreundlich.', translation: 'True. Besides, it saves a lot of paper if one doesn\'t have to carry heavy books anymore. That is also environmentally friendly.' }
    ],
    // 7. Zusammen arbeiten
    [
      { id: 0, speaker: 'girl', name: 'Anna (Bildbeschreibung)', text: 'Ich sehe vier Personen &mdash; zwei Frauen und zwei Männer &mdash; die in einem modernen Büro um einen Tisch stehen. Sie schauen gemeinsam auf einen Laptop und diskutieren.', translation: 'I see four people &mdash; two women and two men &mdash; standing around a table in a modern office. They are looking together at a laptop and discussing.' },
      { id: 1, speaker: 'boy', name: 'Lukas (Diskussion)', text: 'Das Bild passt zum Thema Teamarbeit im Beruf. Ich arbeite viel lieber im Team als allein, weil man Ideen austauschen kann. Wie ist deine Erfahrung?', translation: 'The picture fits the topic of teamwork at work. I prefer working in a team much more than alone because one can exchange ideas. How is your experience?' },
      { id: 2, speaker: 'girl', name: 'Anna (Diskussion)', text: 'Ich finde Teamarbeit auch gut, aber nur, wenn alle mitmachen. Wenn eine Person nichts tut, gibt es oft Streit und Stress.', translation: 'I find teamwork good too, but only if everyone participates. If one person does nothing, there is often conflict and stress.' },
      { id: 3, speaker: 'boy', name: 'Lukas (Diskussion)', text: 'Das stimmt, gute Kommunikation und klare Aufgabenverteilung sind die wichtigsten Voraussetzungen für ein erfolgreiches Team.', translation: 'That\'s true, good communication and clear distribution of tasks are the most important requirements for a successful team.' }
    ],
    // 8. Einkaufen auf dem Markt
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Bildbeschreibung)', text: 'Auf dem Bild sieht man einen Marktstand im Freien. Eine Verkäuferin wiegt Äpfel für einen Kunden ab. Im Hintergrund sieht man viele Holzkisten mit frischem Obst und Gemüse.', translation: 'In the picture one sees an outdoor market stall. A saleswoman is weighing apples for a customer. In the background one sees many wooden boxes with fresh fruit and vegetables.' },
      { id: 1, speaker: 'boy', name: 'David (Diskussion)', text: 'Das ist ein schönes Bild zum Thema Einkaufen. Ich kaufe meine Lebensmittel am liebsten samstags auf dem Wochenmarkt, weil alles frisch ist. Kaufst du auch auf dem Markt ein?', translation: 'That is a nice picture on the topic of shopping. I prefer buying my groceries on the weekly market on Saturdays because everything is fresh. Do you also shop at the market?' },
      { id: 2, speaker: 'girl', name: 'Sofia (Diskussion)', text: 'Manchmal, aber meistens gehe ich in den Supermarkt, weil es günstiger ist und ich nach der Arbeit abends einkaufen muss.', translation: 'Sometimes, but mostly I go to the supermarket because it is cheaper and I have to shop in the evening after work.' },
      { id: 3, speaker: 'boy', name: 'David (Diskussion)', text: 'Der Supermarkt ist flexibler, das stimmt. Auf dem Markt bekommt man aber oft regionale Produkte ohne Plastikverpackung, was besser für die Umwelt ist.', translation: 'The supermarket is more flexible, that\'s true. On the market, however, you often get regional products without plastic packaging, which is better for the environment.' }
    ],
    // 9. Urlaub in den Bergen
    [
      { id: 0, speaker: 'girl', name: 'Marie (Bildbeschreibung)', text: 'Ich sehe zwei Wanderer, einen Mann und eine Frau, die auf einem Berggipfel stehen. Sie haben Rucksäcke auf dem Rücken und schauen in die Ferne auf ein Tal.', translation: 'I see two hikers, a man and a woman, standing on a mountain peak. They have backpacks on their backs and look into the distance at a valley.' },
      { id: 1, speaker: 'boy', name: 'Jonas (Diskussion)', text: 'Das Bild beschreibt das Thema Urlaub in der Natur. Ich mache am liebsten Aktivurlaub in den Bergen zum Wandern oder Skifahren. Was ist dein Traumurlaub?', translation: 'The picture describes the topic of vacation in nature. I prefer active holidays in the mountains for hiking or skiing. What is your dream vacation?' },
      { id: 2, speaker: 'girl', name: 'Marie (Diskussion)', text: 'Ich fahre lieber ans Meer, um am Strand zu entspannen und ein Buch zu lesen. Das ist für mich echte Erholung nach einer stressigen Arbeitswoche.', translation: 'I prefer going to the sea to relax on the beach and read a book. That is real relaxation for me after a stressful work week.' },
      { id: 3, speaker: 'boy', name: 'Jonas (Diskussion)', text: 'Das verstehe ich. Die Hauptsache im Urlaub ist ja, dass man abschalten und neue Energie tanken kann, egal wo.', translation: 'I understand that. The main thing in vacation is that one can switch off and recharge energy, no matter where.' }
    ],
    // 10. Fahrrad vs. Auto im Stau
    [
      { id: 0, speaker: 'girl', name: 'Anna (Bildbeschreibung)', text: 'Das Bild zeigt eine Straße mit vielen Autos, die im Stau stehen. Rechts auf dem Radweg fährt eine Frau auf einem Fahrrad zügig an den Autos vorbei и lächelt.', translation: 'The picture shows a street with many cars standing in a traffic jam. On the right on the bicycle path, a woman on a bicycle rides swiftly past the cars and smiles.' },
      { id: 1, speaker: 'boy', name: 'Lukas (Diskussion)', text: 'Dieses Bild beschreibt perfekt das Verkehrschaos in Großstädten. Fahrradfahrer sind in der Innenstadt oft viel schneller am Ziel als Autofahrer. Fährst du viel Fahrrad?', translation: 'This picture describes perfectly the traffic chaos in big cities. Cyclists in the city center are often much faster at the destination than car drivers. Do you ride a bike a lot?' },
      { id: 2, speaker: 'girl', name: 'Anna (Diskussion)', text: 'Ja, fast jeden Tag zur Arbeit. Es hält fit und man spart das Geld für Benzin und Parktickets.', translation: 'Yes, almost every day to work. It keeps you fit and you save money on petrol and parking tickets.' },
      { id: 3, speaker: 'boy', name: 'Lukas (Diskussion)', text: 'Das stimmt. Autofahren im Stau ist nur stressig. Die Städte sollten noch mehr breite Fahrradwege bauen, um das Radfahren sicherer zu machen.', translation: 'That\'s true. Driving in a traffic jam is only stressful. The cities should build even more wide bicycle paths to make cycling safer.' }
    ],
    // 11. Haustierpflege
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Bildbeschreibung)', text: 'Auf dem Bild sieht man einen kleinen Jungen, etwa acht Jahre alt, der im Park auf der Wiese sitzt und einen großen braunen Hund streichelt. Beide sehen sehr glücklich aus.', translation: 'In the picture one sees a little boy, about eight years old, sitting on the meadow in the park and petting a large brown dog. Both look very happy.' },
      { id: 1, speaker: 'boy', name: 'David (Diskussion)', text: 'Das Bild zeigt die Beziehung zwischen Kindern und Haustieren. Ich finde es gut, wenn Kinder mit Tieren aufwachsen, weil sie so lernen, Verantwortung zu übernehmen. Hattest du als Kind ein Haustier?', translation: 'The picture shows the relationship between children and pets. I think it is good when children grow up with animals because they learn to take responsibility. Did you have a pet as a child?' },
      { id: 2, speaker: 'girl', name: 'Sofia (Diskussion)', text: 'Ja, wir hatten einen Hund. Ich musste täglich mit ihm spazieren gehen, auch bei schlechtem Wetter. Das war manchmal anstrengend, aber ich habe ihn geliebt.', translation: 'Yes, we had a dog. I had to walk him daily, even in bad weather. That was sometimes exhausting, but I loved him.' },
      { id: 3, speaker: 'boy', name: 'David (Diskussion)', text: 'Das glaube ich! Haustiere sind wie Familienmitglieder. Man muss aber genug Zeit und Platz für sie haben.', translation: 'I believe that! Pets are like family members. But one must have enough time and space for them.' }
    ],
    // 12. Zusammen Sport machen
    [
      { id: 0, speaker: 'girl', name: 'Marie (Bildbeschreibung)', text: 'Ich sehe drei Personen &mdash; zwei Frauen und einen Mann &mdash; die in Sportkleidung durch einen herbstlichen Park joggen. Sie sehen fit aus und unterhalten sich.', translation: 'I see three people &mdash; two women and a man &mdash; jogging in sportswear through an autumn park. They look fit and are talking.' },
      { id: 1, speaker: 'boy', name: 'Jonas (Diskussion)', text: 'Das Bild beschreibt das Thema gemeinsame Fitness. Ich jogge ungern allein, weil mir die Motivation fehlt. Zusammen in der Gruppe macht es viel mehr Spaß. Wie ist das bei dir?', translation: 'The picture describes the topic of mutual fitness. I don\'t like jogging alone because I lack motivation. Together in a group it is much more fun. How is it with you?' },
      { id: 2, speaker: 'girl', name: 'Marie (Diskussion)', text: 'Ich gehe lieber allein laufen, weil ich mein eigenes Tempo laufen möchte. Beim Laufen in der Gruppe muss man sich immer anpassen.', translation: 'I prefer running alone because I want to run my own pace. When running in a group, one always has to adapt.' },
      { id: 3, speaker: 'boy', name: 'Jonas (Diskussion)', text: 'Das ist wahr. Man kann aber auch zusammen ins Fitnessstudio gehen und danach in die Sauna. Das ist ein guter Kompromiss.', translation: 'That is true. But one can also go to the gym together and to the sauna afterwards. That is a good compromise.' }
    ],
    // 13. Wohnungssuche
    [
      { id: 0, speaker: 'girl', name: 'Anna (Bildbeschreibung)', text: 'Auf dem Bild sieht man ein junges Paar, das in einer leeren Wohnung steht. Sie halten einen Wohnungsschlüssel in der Hand und schauen lächelnd auf einen Grundriss.', translation: 'In the picture one sees a young couple standing in an empty apartment. They are holding an apartment key in their hand and looking with a smile at a floor plan.' },
      { id: 1, speaker: 'boy', name: 'Lukas (Diskussion)', text: 'Das Bild passt zum Thema Wohnungssuche und Umzug. In deutschen Großstädten eine bezahlbare Wohnung zu finden, ist heutzutage eine große Herausforderung. Hast du lange gesucht?', translation: 'The picture fits the topic of apartment hunting and moving. Finding an affordable apartment in German big cities is a major challenge nowadays. Did you search for a long time?' },
      { id: 2, speaker: 'girl', name: 'Anna (Diskussion)', text: 'Ja, fast sechs Monate! Ich musste zu vielen Besichtigungen gehen und viele Dokumente vorlegen (Schufa-Auskunft, Gehaltsnachweise).', translation: 'Yes, almost six months! I had to go to many viewings and present many documents (credit report, proof of salary).' },
      { id: 3, speaker: 'boy', name: 'Lukas (Diskussion)', text: 'Das kenne ich. Der Wohnungsmarkt ist wirklich verrückt. Ein Umzug kostet auch viel Kraft und Geld, aber am Ende freut man sich über das neue Zuhause.', translation: 'I know that. The housing market is really crazy. Moving also costs a lot of energy and money, but in the end one is happy about the new home.' }
    ],
    // 14. Reparatur und Nachhaltigkeit
    [
      { id: 0, speaker: 'girl', name: 'Sofia (Bildbeschreibung)', text: 'Ich sehe einen Mann, der in einer Werkstatt steht. Er repariert das Rad eines Fahrrads. Um ihn herum hängen viele Werkzeuge an der Wand.', translation: 'I see a man standing in a workshop. He is repairing the wheel of a bicycle. Many tools are hanging on the wall around him.' },
      { id: 1, speaker: 'boy', name: 'David (Diskussion)', text: 'Das Bild zeigt das Thema Reparieren statt Wegwerfen. Ich versuche, defekte Geräte oder Kleidung immer zuerst zu reparieren, um Ressourcen zu schonen. Reparierst du auch Dinge selbst?', translation: 'The picture shows the topic of repairing instead of throwing away. I always try to repair broken devices or clothes first to conserve resources. Do you also repair things yourself?' },
      { id: 2, speaker: 'girl', name: 'Sofia (Diskussion)', text: 'Kleinigkeiten wie einen Fahrradschlauch wechseln oder einen Knopf annähen mache ich selbst. Bei Elektronik muss ich aber meistens Fachleute holen.', translation: 'Small things like changing a bike tube or sewing a button I do myself. With electronics, however, I usually have to call professionals.' },
      { id: 3, speaker: 'boy', name: 'David (Diskussion)', text: 'Das ist normal. Es gibt jetzt auch sogenannte „Repair-Cafés", wo man gemeinsam mit Experten seine kaputten Sachen kostenlos reparieren kann.', translation: 'That is normal. There are now also so-called "Repair Cafés" where you can repair your broken things for free together with experts.' }
    ],
    // 15. Geselliges Essen
    [
      { id: 0, speaker: 'girl', name: 'Marie (Bildbeschreibung)', text: 'Auf dem Bild sieht man eine Gruppe von sechs Freunden, die um einen Tisch sitzen. Sie essen Pizza, trinken Limonade und lachen zusammen. Die Atmosphäre wirkt sehr fröhlich.', translation: 'In the picture one sees a group of six friends sitting around a table. They are eating pizza, drinking lemonade, and laughing together. The atmosphere looks very joyful.' },
      { id: 1, speaker: 'boy', name: 'Jonas (Diskussion)', text: 'Das Bild beschreibt das Thema gemeinsame Zeit mit Freunden. Ich finde es sehr wichtig, sich trotz vieler Arbeit regelmäßig zu treffen und abzuschalten. Ladest du oft Freunde ein?', translation: 'The picture describes the topic of spending time with friends. I find it very important to meet regularly and switch off despite a lot of work. Do you invite friends often?' },
      { id: 2, speaker: 'girl', name: 'Marie (Diskussion)', text: 'Ja, mindestens einmal im Monat koche ich für meine Freunde. Gemeinsames Essen ist die beste Möglichkeit, um gute Gespräche zu führen.', translation: 'Yes, at least once a month I cook for my friends. Eating together is the best possibility to have good conversations.' },
      { id: 3, speaker: 'boy', name: 'Jonas (Diskussion)', text: 'Da stimme ich dir vollkommen zu. Solche Momente geben einem viel positive Energie für die neue Woche.', translation: 'I completely agree with you. Such moments give one a lot of positive energy for the new week.' }
    ]
  ]
};
