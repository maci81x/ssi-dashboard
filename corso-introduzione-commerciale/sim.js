/* Simulatore di trattativa a scelta multipla — SSI Start.
   Ogni passo: c = criterio, cl = cosa dice il cliente, o = opzioni [punti, risposta dell'agente, reazione del cliente, commento del coach].
   Punti: 10 = risposta migliore, 6 = buona ma incompleta, 3 = debole, 0 = sbagliata. */
window.SIM = {
soglia: 70,
criteri: { rapporto: "Apertura e rapporto", scoperta: "Scoperta dei bisogni", proposta: "Proposta giusta", obiezioni: "Gestione delle obiezioni", chiusura: "Chiusura e prossimo passo" },
scenari: [

{ id: "conf", tag: "Tessile · Prato", titolo: "Confezione conto terzi", nome: "Sig. Chen, titolare", diff: 2, modulo: "Modulo 8",
  brief: "Laboratorio di confezioni aperto da 3 mesi in zona industriale a Prato, 6 operai, macchine da cucire e presse da stiro. L'hai trovato nell'elenco delle nuove attività. Ti riceve nel laboratorio, tra il rumore delle macchine.",
  passi: [
  { c: "rapporto", cl: "Buongiorno. Chi è lei? Io ho tanto lavoro oggi.",
    o: [
    [10, "Buongiorno sig. Chen, sono Cristiano di SI Soluzioni Impresa: aiutiamo le aziende di Prato a essere in regola con la sicurezza. Le rubo 10 minuti per capire come siete messi, poi decide lei se le serve.", "Va bene, 10 minuti. Dica.", "Chi sei, perché sei lì e quanto tempo chiedi: in 15 secondi. E lasci a lui la decisione."],
    [6, "Buongiorno, sono di SI Soluzioni Impresa, ci occupiamo di sicurezza sul lavoro. Ha un minuto?", "Un minuto sì. Veloce.", "Corretto ma debole: «ha un minuto?» invita a dire no e non dice cosa ci guadagna lui."],
    [3, "Buongiorno, sono qui perché la legge obbliga tutte le aziende a fare la sicurezza e lei probabilmente non è in regola.", "Chi le ha detto che non sono in regola?", "Partire accusando mette il cliente sulla difensiva prima ancora di iniziare."],
    [0, "Buongiorno, le lascio il nostro listino prezzi, così lo guarda con calma.", "Ok, lo metto qui. Arrivederci.", "Lasciare il listino senza parlare chiude la visita: nessuna domanda, nessun bisogno, nessun appuntamento."],
    [3, "Salve, passavo di qui e ho visto che avete aperto da poco. Come va il lavoro? E la famiglia?", "Bene, bene. Ma lei cosa vende?", "Rompere il ghiaccio va bene, ma con un titolare di fretta devi dire subito perché sei lì."]] },
  { c: "scoperta", cl: "Sicurezza? Il commercialista mi ha già fatto il DVR. Siamo a posto.",
    o: [
    [10, "Bene che ci sia. Posso chiederle chi l'ha firmato e se dentro c'è la valutazione del rumore e dei movimenti ripetitivi? In un laboratorio come il suo sono i due rischi principali.", "Firmato... no, non so. Rumore non credo. È un modulo che mi ha dato lui.", "Non contraddici: fai una domanda precisa che fa emergere da solo il problema."],
    [6, "Il DVR del commercialista spesso è un modulo standard. Me lo fa vedere?", "Adesso non lo trovo. Forse è in ufficio.", "Giusto chiedere di vederlo, ma senza una domanda precisa il cliente non capisce perché dovrebbe cercarlo."],
    [0, "I DVR fatti dai commercialisti non valgono niente, va rifatto tutto.", "Il mio commercialista è bravo. Lei vuole solo vendere.", "Attaccare il commercialista vuol dire attaccare una persona di cui si fida. E rischi di bruciarti un possibile prescrittore."],
    [3, "Perfetto, allora le serve solo la formazione dei lavoratori. Quanti sono?", "Sei. Ma la formazione costa?", "Accetti per buono un DVR che non hai visto: perdi il bisogno principale."],
    [6, "Benissimo. E oltre al DVR, avete fatto corsi o visite mediche per i ragazzi?", "No, quello no. Servono?", "Buona domanda, ma salti il DVR, che con ogni probabilità è il primo problema."]] },
  { c: "scoperta", cl: "Ma io sono piccolo, 6 operai. Chi viene a controllare?",
    o: [
    [10, "In zona industriale a Prato i controlli dell'ASL e dell'Ispettorato sono frequenti, soprattutto nel tessile. Le è capitato di sentire di qualche collega controllato di recente?", "Sì... un mio amico qui vicino ha preso una multa il mese scorso. Per questo sono un po' preoccupato.", "Domanda aperta sulla sua esperienza: è lui a dirti la preoccupazione vera."],
    [3, "Guardi, le multe arrivano a migliaia di euro e possono chiudere l'attività. Rischia grosso.", "Lei mi vuole spaventare.", "Il rischio va detto, ma senza terrore: chi si spaventa si chiude e rimanda."],
    [6, "Le dimensioni non contano: dal primo dipendente valgono gli stessi obblighi.", "Ah. Non lo sapevo.", "Corretto, ma è una lezione, non una domanda: non scopri cosa lo preoccupa davvero."],
    [0, "In effetti con 6 persone difficilmente vengono. Però è meglio essere in regola.", "Allora ci penso più avanti.", "Hai appena dato al cliente il motivo per rimandare. Ed è anche falso: i controlli non dipendono dalle dimensioni."],
    [6, "Chi lavora conto terzi per i marchi spesso deve dimostrare di essere in regola. I vostri committenti vi chiedono documenti?", "Uno sì, mi ha chiesto qualcosa. Non ho ancora risposto.", "Ottimo spunto commerciale, ma il tema dei controlli in zona era più vicino alla sua preoccupazione."]] },
  { c: "proposta", cl: "Allora cosa mi serve? Mi dica le cose importanti, non tutto.",
    o: [
    [10, "Partirei da tre cose: un DVR vero con rumore e movimenti ripetitivi, la formazione dei 6 operai e del datore di lavoro, e il medico competente con le visite. Poi addetti antincendio e primo soccorso e il controllo degli estintori. Le preparo un preventivo diviso per priorità.", "Va bene. Prima le cose urgenti.", "Priorità chiare, linguaggio semplice e il preventivo per tappe: è quello che il cliente ha chiesto."],
    [3, "Le serve tutto il pacchetto completo: DVR, formazione, visite, antincendio, primo soccorso, HACCP, privacy, ambiente.", "HACCP? Io faccio vestiti. Troppa roba.", "Proporre servizi che non c'entrano (l'HACCP in un laboratorio tessile) fa perdere credibilità."],
    [6, "Le serve il DVR fatto bene e la formazione dei lavoratori. Il resto lo vediamo dopo.", "Ok. E le visite?", "Giusto ma incompleto: medico competente e visite sono obbligatori con rumore e movimenti ripetitivi."],
    [0, "Le faccio il corso online per tutti, costa poco e risolve tutto.", "Solo il corso? Allora il DVR va bene?", "Il corso online non sostituisce il DVR né la parte pratica, e per il rischio di un laboratorio servono contenuti specifici."],
    [6, "Le preparo il preventivo con DVR, formazione, visite, antincendio e primo soccorso. Glielo mando per mail.", "Mail... io leggo poco la mail.", "Contenuto corretto, ma mandarlo per mail senza spiegarlo di persona riduce molto le possibilità di chiudere."]] },
  { c: "obiezioni", cl: "Costa troppo. Gli operai cambiano spesso, poi devo rifare tutto.",
    o: [
    [10, "La capisco. Possiamo partire dalle cose più urgenti e distribuire il resto nei mesi. Per chi cambia spesso, la formazione dei nuovi la pianifichiamo noi e la tracciamo nello scadenzario, così non deve pensarci lei.", "Se posso pagare un po' alla volta, va meglio.", "Riconosci l'obiezione, la trasformi in una soluzione concreta (tappe) e rispondi anche alla seconda (turnover)."],
    [0, "Allora le faccio uno sconto del 30% se firma oggi.", "Mmm, allora forse aspetto ancora: magari il prossimo mese fa il 40%.", "Lo sconto immediato svaluta il servizio e insegna al cliente ad aspettare. Gli sconti li decide il capo area."],
    [3, "Guardi che la multa costa molto di più.", "Sì, ma la multa forse non arriva. Il preventivo arriva sicuro.", "Paragonare al costo della multa è vero, ma da solo non risolve il problema del budget."],
    [6, "Capisco. Quanto pensava di spendere?", "Non so. Poco.", "Domanda legittima, ma senza una proposta per tappe il cliente non sa come risponderti."],
    [3, "Purtroppo è la legge, non dipende da me.", "Allora ci penso.", "Vero, ma non aiuta: il cliente cerca una soluzione, non una giustificazione."]] },
  { c: "chiusura", cl: "Ok. E adesso cosa facciamo?",
    o: [
    [10, "Compiliamo adesso il modello raccolta dati: 10 minuti. Domani le porto il preventivo diviso per tappe, con acconto del 30% sulla prima. Le va bene domani alle 17 o preferisce giovedì mattina?", "Domani alle 17 va bene.", "Raccolta dati subito, preventivo chiaro con l'acconto, data precisa con due alternative."],
    [3, "Le mando tutto per mail, poi mi fa sapere lei.", "Va bene, guardo.", "Lasci il prossimo passo al cliente: nella maggior parte dei casi non succede niente."],
    [6, "Le preparo il preventivo e la richiamo la settimana prossima.", "Ok, mi chiami.", "C'è un prossimo passo, ma è vago: niente dati raccolti e nessuna data fissata."],
    [0, "Firmi qui e partiamo subito con tutto, poi vediamo i dettagli.", "Firmare senza sapere il prezzo? No.", "Forzare la firma senza preventivo né dati raccolti rompe la fiducia appena costruita."],
    [6, "Fissiamo un appuntamento con il nostro tecnico per un sopralluogo, così il preventivo è preciso.", "Va bene, quando?", "Buona idea, ma ti manca il modello raccolta dati adesso e una data concreta."]] }
  ] },

{ id: "rist", tag: "Ristorazione", titolo: "Trattoria con serate musicali", nome: "Sig.ra Paola, titolare", diff: 2, modulo: "Modulo 4",
  brief: "Trattoria con 8 dipendenti (3 stagionali assunti a maggio), circa 90 coperti, musica dal vivo il venerdì. Era cliente SSI fino al 2021, poi più nessun servizio. Ti riceve alle 16, tra un servizio e l'altro.",
  passi: [
  { c: "rapporto", cl: "SSI... vi ricordo. Poi siete spariti. Perché dovrei ascoltarla?",
    o: [
    [10, "Ha ragione, e mi dispiace: se nessuno l'ha più seguita è un nostro errore. Sono qui proprio per questo: capire come state oggi e, se le va, seguirla io in prima persona.", "Almeno lo ammette. Va bene, mi dica.", "Riconoscere il disservizio senza scuse lunghe è il modo più rapido per riaprire la fiducia."],
    [0, "Non è colpa mia, io sono nuovo. Allora, le serve qualcosa?", "Ecco, appunto. Nessuno si prende la responsabilità.", "Scaricare la colpa conferma l'idea che SSI non si prende cura dei clienti."],
    [3, "Forse non avete rinnovato voi il contratto. Comunque oggi le porto delle novità.", "Ah, adesso è colpa mia?", "Discutere su chi ha sbagliato ti mette contro il cliente fin dall'inizio."],
    [6, "Mi dispiace sentirlo. Oggi abbiamo un'organizzazione nuova. Posso farle qualche domanda?", "Vediamo.", "Bene, ma manca un impegno personale: «la seguo io» è quello che lei vuole sentire."],
    [3, "Le assicuro che siamo i migliori in Toscana, abbiamo mille clienti.", "Mille clienti, e io ero uno di quelli dimenticati.", "Vantarti dei numeri davanti a un cliente deluso peggiora le cose."]] },
  { c: "scoperta", cl: "Siamo in 8, più io. Il piano HACCP c'è, l'avevate fatto voi nel 2019.",
    o: [
    [10, "Ottimo punto di partenza. Da allora sono cambiate cose: avete il registro allergeni scritto? E i 3 stagionali di maggio hanno fatto il corso HACCP e quello sulla sicurezza?", "Gli allergeni li sanno i camerieri, a voce. I ragazzi nuovi... no, nessun corso.", "Due domande precise sui punti che di solito mancano: allergeni scritti e formazione dei nuovi."],
    [6, "Il piano del 2019 va aggiornato. Cos'è cambiato da allora?", "Mah, il menu, un po' di personale...", "Domanda giusta ma troppo aperta: rischi di non arrivare ai punti critici."],
    [3, "Se il piano è del 2019 è scaduto, va rifatto.", "Scaduto? Nessuno me l'ha detto.", "Il piano non «scade»: va tenuto aggiornato quando cambiano menu, locali o procedure. Imprecisioni così fanno perdere credibilità."],
    [0, "Perfetto, se c'è il piano HACCP siete a posto. Parliamo d'altro.", "Bene.", "Hai saltato il punto su cui l'ASL l'ha già richiamata: gli allergeni."],
    [6, "E la sicurezza? Il DVR è aggiornato?", "Anche quello è del 2019.", "Utile, ma lasci indietro HACCP e allergeni, che per una trattoria sono il rischio di controllo più alto."]] },
  { c: "scoperta", cl: "L'ASL è venuta due anni fa. Mi hanno detto di sistemare gli allergeni, ma non l'ho mai fatto.",
    o: [
    [10, "Grazie di avermelo detto. Al prossimo controllo, se trovano ancora lo stesso punto, la situazione è più pesante. Il venerdì con la musica quante persone avete, più o meno?", "Anche 130. Perché?", "Prendi sul serio la segnalazione e passi a un rischio che lei non vede: oltre 100 persone serve la verifica antincendio."],
    [3, "Due anni? Allora è grave, rischia la chiusura.", "Lei mi mette ansia.", "Il rischio c'è, ma drammatizzare blocca il cliente invece di farlo decidere."],
    [6, "Lo sistemiamo subito con il registro allergeni. È la prima cosa da fare.", "Va bene.", "Giusto, ma ti fermi lì: non scopri le serate con più di 100 persone e la cucina a gas."],
    [0, "Tranquilla, se non sono più tornati vuol dire che è tutto a posto.", "Ah, meno male.", "Falso e pericoloso: rassicuri la cliente su un'irregolarità già contestata."],
    [6, "Chi c'è in cucina? Quante friggitrici e fuochi avete?", "Sei fuochi, forno e due friggitrici a gas.", "Buona domanda tecnica, ma lasci in sospeso il problema allergeni che lei ti ha appena confessato."]] },
  { c: "proposta", cl: "Va bene. Cosa mi propone, in concreto?",
    o: [
    [10, "Tre tappe. Subito: registro allergeni e aggiornamento del piano HACCP, corsi HACCP e sicurezza per i tre stagionali. Poi: DVR aggiornato con lo stress. Infine: verifica antincendio per la cucina e per le serate oltre 100 persone. E uno scadenzario, così non la dimentichiamo più.", "Così mi piace. Un passo alla volta.", "Priorità chiare, la parte urgente dell'ASL per prima e una risposta al suo timore di essere dimenticata."],
    [6, "Le rifaccio piano HACCP e allergeni e i corsi per i nuovi.", "E basta?", "Corretto ma incompleto: restano DVR, antincendio e il motivo per cui se n'era andata (nessuno la seguiva)."],
    [3, "Le propongo il pacchetto Azienda Sicura Large, comprende tutto.", "Cosa vuol dire tutto? Quanto costa?", "Nominare un pacchetto senza spiegare cosa risolve non convince: prima i bisogni, poi la formula."],
    [0, "Facciamo solo il corso online HACCP per tutti, così risolviamo con l'ASL.", "Solo il corso? E gli allergeni?", "Il corso non sostituisce il registro allergeni né l'aggiornamento del piano: non risolve la contestazione dell'ASL."],
    [3, "Prima di tutto la pratica antincendio, perché è quella che costa di più se sbagli.", "Ma l'ASL mi ha detto gli allergeni...", "Ordine sbagliato: la cliente ha un problema già contestato, si parte da quello."]] },
  { c: "obiezioni", cl: "I soldi per la stagione sono finiti. E non ho tempo di stare dietro a tutto.",
    o: [
    [10, "Per questo propongo le tappe: la prima è piccola e risolve il problema dell'ASL. Le altre le spalmiamo in inverno, quando avete meno lavoro. Al calendario pensiamo noi: lei riceve solo un promemoria.", "In inverno sì, ho più tempo e più calma.", "Rispondi a entrambe le obiezioni (soldi e tempo) con una soluzione legata alla sua stagionalità."],
    [3, "Purtroppo sono obblighi di legge, il tempo va trovato.", "Facile dirlo.", "Vero, ma non aiuta la cliente: ripeti l'obbligo invece di risolvere il problema."],
    [0, "Allora facciamo tutto a gennaio, adesso non serve.", "Perfetto, ci risentiamo a gennaio.", "Rimandare anche la parte urgente lascia aperta la contestazione dell'ASL: rischio concreto per lei."],
    [6, "Possiamo rateizzare il pagamento.", "Rate... quante?", "Utile, ma non rispondi al problema del tempo. Le rate le definisce il capo area."],
    [6, "I corsi HACCP si fanno anche online, la sera, senza fermare il locale.", "Ah, la sera va bene.", "Buona risposta sul tempo, ma lasci aperta l'obiezione sui soldi."]] },
  { c: "chiusura", cl: "Mi convince. Ma mi faccia pensare.",
    o: [
    [10, "Certo. Intanto fissiamo la prima tappa, quella che chiude il punto dell'ASL: preventivo domani con acconto del 30%, e il tecnico può venire martedì o giovedì mattina. Quale preferisce?", "Giovedì mattina.", "Rispetti il suo tempo ma chiudi la parte urgente con una data e l'acconto."],
    [3, "Va bene, ci pensi e mi richiami lei.", "Sì, la richiamo.", "Lasci il prossimo passo alla cliente: quella che si sentiva dimenticata rischia di dimenticare lei."],
    [0, "Se non decide oggi non posso garantirle questi prezzi.", "Allora lasciamo stare.", "La pressione falsa sui prezzi distrugge la fiducia che hai appena ricostruito."],
    [6, "Le mando il preventivo stasera e la richiamo venerdì.", "Va bene, venerdì.", "C'è una data, ma nessun impegno sulla prima tappa urgente."],
    [6, "Le lascio il modello raccolta dati da compilare con calma.", "Ok, lo guardo.", "Il modello va compilato insieme durante la visita, non lasciato al cliente."]] }
  ] },

{ id: "edile", tag: "Edilizia", titolo: "Impresa edile in subappalto", nome: "Sig. Bruno, titolare", diff: 3, modulo: "Modulo 7",
  brief: "Impresa edile con 5 operai, lavora quasi solo in subappalto per due imprese grandi. Ti ha dato il contatto il suo commercialista. Lo incontri in cantiere: ha 15 minuti e poca pazienza.",
  passi: [
  { c: "rapporto", cl: "Mi ha mandato il commercialista. Ho 15 minuti. Cosa vuole?",
    o: [
    [10, "Grazie del tempo. Una cosa sola: capire se i suoi documenti per entrare in cantiere sono a posto, così non rischia di farsi fermare dall'impresa principale o da un controllo. In 15 minuti ce la facciamo.", "Ok. Vada.", "Rispetti il tempo, parli del suo problema concreto (lavorare senza fermarsi), niente giri di parole."],
    [3, "Buongiorno! Bel cantiere. Da quanto tempo fa questo lavoro?", "Da 25 anni. E quindi?", "Con un cliente impaziente le chiacchiere iniziali lo innervosiscono."],
    [6, "Mi occupo di sicurezza per le imprese edili. Posso farle qualche domanda?", "Veloce.", "Corretto, ma non dici cosa ci guadagna lui."],
    [0, "Il suo commercialista dice che non è in regola, sono qui per sistemarla.", "Il commercialista si faccia gli affari suoi.", "Metti in difficoltà chi ti ha presentato e partendo dall'accusa chiudi la porta."],
    [3, "Le porto una presentazione della nostra società, sono 10 slide.", "Dieci slide? Non ho tempo.", "Un cliente con 15 minuti non vuole una presentazione: vuole sapere se risolvi un problema."]] },
  { c: "scoperta", cl: "I POS li scrivo io, li copio da quelli vecchi. Funziona.",
    o: [
    [10, "Finora le hanno accettati. Le chiedo: con la patente a crediti, sa quanti crediti ha adesso? E i due operai nuovi hanno il corso per il rischio alto?", "Crediti... non lo so. I nuovi no, nessun corso.", "Non contesti il suo metodo: con due domande precise emergono patente a crediti e formazione mancante."],
    [0, "Copiare i POS è illegale, rischia la galera.", "Ma vada via.", "Esagerato e aggressivo: perdi il cliente in una frase."],
    [6, "Un POS copiato spesso non corrisponde al cantiere vero. Su questo cantiere cosa fate?", "Ristrutturazione, tetto e facciata.", "Domanda giusta, ma non tocchi la patente a crediti, la leva più forte per un'impresa edile."],
    [3, "Ok, se i POS funzionano parliamo d'altro. Fate visite mediche?", "Quando capita.", "Lasci perdere troppo presto un punto debole che ti aveva appena mostrato."],
    [6, "Lavorate sui tetti: chi sale ha il corso per i DPI anticaduta?", "No, quello no.", "Buona domanda di rischio, ma manca il collegamento alla patente a crediti e ai nuovi assunti."]] },
  { c: "scoperta", cl: "Tanto i controlli non arrivano. Sono 10 anni che lavoro così.",
    o: [
    [10, "Oggi i controlli nei cantieri sono aumentati e con la patente a crediti una violazione grave le toglie crediti: sotto la soglia non può più lavorare nei cantieri. Le imprese per cui lavora le hanno chiesto documenti ultimamente?", "Sì, una mi ha chiesto gli attestati degli operai la settimana scorsa.", "Colleghi la norma al suo rischio economico vero (fermarsi) e scopri che il committente sta già chiedendo."],
    [3, "Prima o poi arrivano, e allora sono guai.", "Lo dicono tutti.", "Generico: non porta niente di nuovo al cliente."],
    [0, "Ha ragione, raramente controllano le piccole imprese.", "Appunto. Allora ci vediamo.", "Gli dai ragione sul punto sbagliato e perdi la leva principale."],
    [6, "Se succede un infortunio senza formazione, la responsabilità è sua personale.", "Speriamo di no.", "Vero e importante, ma la patente a crediti è più concreta per chi vive di subappalti."],
    [6, "Quanti cantieri ha aperti in questo momento?", "Tre.", "Domanda utile per dimensionare, ma non rispondi all'obiezione che ti ha fatto."]] },
  { c: "proposta", cl: "Ok, cosa mi serve? Veloce.",
    o: [
    [10, "Quattro cose: POS fatto per ogni cantiere, pronto in tempi rapidi; corso rischio alto per i due nuovi; corso DPI anticaduta per chi sale sui tetti; aggiornamento del preposto. Poi le visite mediche con il medico competente. I corsi li possiamo fare anche il sabato o in azienda.", "Il sabato va bene. E i POS veloci mi servono.", "Elenco breve, giusto per il suo lavoro, e la risposta alla sua paura: non fermare il cantiere."],
    [6, "Le servono i POS e i corsi per gli operai.", "Quali corsi?", "Giusto ma vago: per un cliente pratico serve l'elenco concreto."],
    [3, "Le serve il pacchetto completo: DVR, HACCP, formazione, visite, privacy.", "HACCP? Faccio muri.", "Servizi che non c'entrano fanno capire che non conosci il settore."],
    [0, "Le faccio fare il corso online a tutti, anche quello per i lavori in quota.", "Online va bene, così non perdo tempo.", "L'addestramento anticaduta prevede una parte pratica: non si fa solo online. Rischi di vendere un corso che non vale."],
    [6, "Le preparo un'analisi completa dell'impresa, poi le dico.", "Quanto tempo ci vuole?", "Serio, ma lui vuole risposte rapide: digli subito le priorità."]] },
  { c: "obiezioni", cl: "Gli operai devono lavorare, non posso fermarli per i corsi.",
    o: [
    [10, "Per questo li facciamo il sabato mattina o a fine giornata, a blocchi. E la parte pratica dell'anticaduta la facciamo in cantiere. Non perde giornate di lavoro.", "Se è così, si può fare.", "L'obiezione è organizzativa: rispondi con un'organizzazione concreta."],
    [3, "Purtroppo sono ore obbligatorie, non si possono saltare.", "Allora più avanti.", "Ripeti l'obbligo senza risolvere il suo problema."],
    [0, "Possiamo fare gli attestati senza farli venire, ci pensiamo noi.", "Ah, così è perfetto.", "Mai. Un attestato senza corso è un falso: rischi penali per l'azienda e per SSI."],
    [6, "Il costo di un cantiere fermo è molto più alto di qualche ora di corso.", "Sì, ma oggi devo consegnare.", "Argomento valido, ma non risolve il quando."],
    [6, "Possiamo farli online, la sera.", "Online va bene.", "Utile per la parte teorica, ma non per l'addestramento pratico anticaduta: va chiarito."]] },
  { c: "chiusura", cl: "Mi mandi qualcosa.",
    o: [
    [10, "Le mando oggi il preventivo con acconto del 30%. Per partire mi servono i dati del cantiere e gli operai: compiliamo adesso il modello in 5 minuti. Il primo corso possiamo fissarlo sabato 9 o sabato 16: quale preferisce?", "Sabato 16. Compiliamo.", "Raccolta dati subito, preventivo e una data concreta per il primo corso."],
    [3, "Va bene, le mando una mail con la nostra presentazione.", "Ok.", "Una presentazione non è un passo avanti: non hai preventivo né data."],
    [6, "Le mando il preventivo stasera e la chiamo domani.", "Mi chiami.", "C'è un seguito, ma ti mancano i dati per un preventivo preciso."],
    [0, "Se firma adesso le faccio i POS gratis.", "Gratis? Allora firmo.", "Promettere servizi gratis che non puoi decidere tu crea un problema con l'azienda e con il cliente."],
    [6, "La faccio richiamare dal tecnico per i dettagli.", "Va bene.", "Coinvolgere il tecnico può servire, ma il prossimo passo resta vago."]] }
  ] },

{ id: "este", tag: "Persona", titolo: "Centro estetico nuovo", nome: "Sig.ra Giulia, titolare", diff: 1, modulo: "Modulo 10",
  brief: "Centro estetico aperto da 2 mesi, titolare più una dipendente part-time. Usa luce pulsata, radiofrequenza e lampada UV. È arrivata da una campagna Facebook: ha chiesto «cosa serve per essere in regola».",
  passi: [
  { c: "rapporto", cl: "Salve! Ho visto la vostra pubblicità. Non so bene cosa mi serve, sinceramente.",
    o: [
    [10, "Ha fatto benissimo a chiedere: aprire è già tanto lavoro. Le faccio qualche domanda e alla fine le lascio una lista chiara di cosa serve e in che ordine.", "Perfetto, è proprio quello che mi serve.", "Accogli la sua incertezza e prometti chiarezza: è ciò che cerca."],
    [3, "Le serve tutto, gliel'assicuro. Le faccio un pacchetto completo.", "Tutto? Ho appena aperto...", "Senza capire la situazione spaventi la cliente sul budget."],
    [6, "Benissimo. Partiamo dal personale: quanti dipendenti ha?", "Una ragazza, part-time.", "Domanda giusta, ma una frase di rassicurazione prima avrebbe creato più fiducia."],
    [0, "Non si preoccupi, con una sola dipendente quasi non serve niente.", "Ah, meglio così!", "Falso: gli obblighi partono dal primo dipendente. E apparecchi e gravidanza aggiungono obblighi."],
    [3, "Guardi, i centri estetici sono tra le attività più controllate. Rischia molto.", "Mi sta spaventando.", "Una cliente arrivata da sola per informarsi non va spaventata."]] },
  { c: "scoperta", cl: "Ho una dipendente. Uso luce pulsata, radiofrequenza e la lampada UV per le unghie.",
    o: [
    [10, "Ottimo, mi aiuta molto. Per questi apparecchi serve il fascicolo di esercizio e la valutazione delle radiazioni ottiche. E la sua collaboratrice: tutto bene con lei? Ci sono situazioni particolari, per esempio una gravidanza?", "Sì, è incinta di tre mesi. È un problema?", "Colleghi gli apparecchi agli obblighi giusti e scopri l'informazione più importante: la gravidanza."],
    [6, "Per gli apparecchi serve il fascicolo di esercizio. Ce l'ha?", "No, cos'è?", "Giusto, ma ti fermi agli apparecchi e non scopri la gravidanza."],
    [3, "Gli apparecchi li ha comprati con il manuale? Allora va bene.", "Sì, il manuale c'è.", "Il manuale non sostituisce il fascicolo di esercizio né la valutazione dei rischi."],
    [0, "Bene, allora le serve solo il corso HACCP.", "HACCP? Non faccio cibo.", "Servizio sbagliato per l'attività: perdi subito credibilità."],
    [6, "Usate prodotti chimici, tinte, solventi per unghie?", "Sì, acetone e gel.", "Rischio chimico pertinente, ma il punto più urgente (la gravidanza) resta nascosto."]] },
  { c: "scoperta", cl: "Quindi con la gravidanza cosa cambia?",
    o: [
    [10, "Va valutato subito se ci sono mansioni o apparecchi da evitare durante la gravidanza, e la valutazione va scritta nel documento dei rischi. È la priorità: tutela lei e la sua collaboratrice.", "Non ci avevo pensato. Facciamolo subito.", "Risposta corretta, tono calmo e la priorità chiara."],
    [3, "Deve mandarla subito a casa, non può lavorare.", "Come? Non me lo posso permettere!", "Non è automatico: prima si valutano i rischi e le mansioni. Una risposta sbagliata spaventa e disinforma."],
    [0, "Niente, la gravidanza riguarda il medico di famiglia, non lei.", "Ah, ok.", "Falso: il datore di lavoro deve valutare i rischi per le lavoratrici in gravidanza."],
    [6, "Bisogna fare una valutazione specifica. Ne parlo con il tecnico.", "Ok, ma è urgente?", "Giusto, ma non trasmetti l'urgenza e non spieghi perché."],
    [3, "Glielo diciamo dopo, adesso pensiamo al fascicolo degli apparecchi.", "Va bene.", "Rimandare l'aspetto più urgente è un errore di priorità."]] },
  { c: "proposta", cl: "Va bene, cosa mi serve in tutto?",
    o: [
    [10, "In ordine: subito il documento dei rischi con la parte gravidanza; poi fascicolo di esercizio e valutazione delle radiazioni ottiche per luce pulsata e UV, e il rischio chimico e biologico; infine il corso sicurezza per la collaboratrice. Il medico competente lo valutiamo in base ai rischi.", "Chiaro. Mi piace avere l'ordine.", "Lista chiara e ordinata per priorità, come chiedeva."],
    [6, "Le servono il DVR, il fascicolo e il corso per la dipendente.", "E basta?", "Corretto ma senza priorità e senza la parte gravidanza esplicita."],
    [3, "Il pacchetto Azienda Sicura copre tutto, glielo preparo.", "Ma cosa c'è dentro?", "Prima i bisogni spiegati, poi la formula."],
    [0, "Per un centro estetico basta il corso online della dipendente.", "Ah, benissimo.", "Lasci fuori DVR, gravidanza e fascicolo: la cliente resta non in regola pensando di esserlo."],
    [6, "Le preparo un preventivo con tutto quello che serve e glielo spiego.", "Ok.", "Bene spiegare il preventivo, ma lei voleva sapere adesso cosa e in che ordine."]] },
  { c: "obiezioni", cl: "Ho appena aperto, ho finito i soldi. Non posso spendere tanto adesso.",
    o: [
    [10, "La capisco benissimo. Facciamo in due tempi: adesso solo la parte urgente, cioè gravidanza e documento dei rischi. Il resto tra qualche mese. Sulle modalità di pagamento le faccio sapere dal mio capo area.", "In due tempi posso farcela.", "Proteggi la priorità vera e rispetti il budget, senza promettere condizioni che non decidi tu."],
    [0, "Allora le faccio tutto gratis il primo anno.", "Davvero? Allora firmo.", "Non puoi promettere servizi gratis: crei un problema all'azienda e una cliente delusa dopo."],
    [3, "Pensi a quanto costerebbe una multa.", "Sì, ma adesso non ho i soldi.", "Non risolve il problema reale: liquidità."],
    [6, "Possiamo dividere il pagamento in rate.", "Quante rate?", "Utile, ma senza separare l'urgente dal resto. Le rate le definisce il capo area."],
    [3, "Ne riparliamo tra sei mesi, quando il centro va meglio.", "Sì, meglio.", "Rimandare lascia scoperta la collaboratrice incinta: non è nel suo interesse."]] },
  { c: "chiusura", cl: "Ok, mi piace. Come procediamo?",
    o: [
    [10, "Compiliamo insieme il modello raccolta dati, 10 minuti. Domani le mando il preventivo della prima fase con acconto del 30% e il tecnico può venire giovedì o venerdì mattina, quando la sua collaboratrice c'è.", "Venerdì mattina. Grazie, davvero.", "Dati raccolti subito, prima fase chiara, data concreta."],
    [3, "Mi faccia sapere lei quando è pronta.", "Va bene.", "Lasci il prossimo passo alla cliente: rischi di perderla."],
    [6, "Le mando il preventivo e la chiamo lunedì.", "Ok.", "C'è un seguito, ma niente dati raccolti e niente data con il tecnico."],
    [0, "Firmi qui per il pacchetto completo, poi vediamo le rate.", "Tutto? Avevamo detto in due tempi.", "Contraddici quanto concordato: la cliente perde fiducia."],
    [6, "Le lascio il nostro biglietto e la brochure.", "Grazie.", "Materiale utile, ma non è un prossimo passo."]] }
  ] },

{ id: "alim", tag: "Commercio alimentare", titolo: "Minimarket con banco gastronomia", nome: "Sig. Ahmed, titolare", diff: 1, modulo: "Moduli 3 e 9",
  brief: "Minimarket aperto a giugno con il fratello socio e 2 commessi. Ha un banco con salumi e formaggi affettati e olive sfuse, e un magazzino con casse pesanti. Visita a freddo.",
  passi: [
  { c: "rapporto", cl: "Buongiorno. Se vende qualcosa, non mi serve niente.",
    o: [
    [10, "Buongiorno! Non vendo prodotti per il negozio: aiuto i negozi alimentari a superare i controlli dell'ASL senza sorprese. Posso farle due domande veloci sul banco gastronomia?", "Due domande sì.", "Spieghi subito il vantaggio per lui (i controlli) e chiedi poco."],
    [3, "Non vendo niente, tranquillo! Sono solo un consulente.", "Consulente di cosa?", "Negare di vendere suona falso e non dice perché sei lì."],
    [0, "Lei deve per forza avere il piano HACCP, altrimenti la chiudono.", "Chi lo dice? In Comune nessuno mi ha detto niente.", "Partire con la minaccia fa chiudere il cliente."],
    [6, "Sono di SI Soluzioni Impresa, ci occupiamo di HACCP e sicurezza. Ha un minuto?", "Un minuto.", "Chiaro, ma non dici cosa ci guadagna lui."],
    [3, "Che bel negozio! Da quanto avete aperto? Le olive le prendete dalla Grecia?", "Da giugno. Ma lei chi è?", "Cordiale, ma ancora non sa chi sei."]] },
  { c: "scoperta", cl: "Il fornitore del frigo mi ha detto che basta tenere le temperature giuste.",
    o: [
    [10, "Le temperature sono importanti, ha ragione. Al controllo però l'ASL chiede anche il piano di autocontrollo scritto, gli attestati di chi affetta e il cartello allergeni sugli sfusi. Voi avete qualcuno di questi?", "Cartello no... attestati no. Piano no.", "Valorizzi quello che sa già e con esempi concreti fai emergere tre mancanze."],
    [0, "Il fornitore del frigo non sa niente, non lo ascolti.", "Lui è un amico.", "Screditare chi gli ha dato un consiglio non fa guadagnare fiducia."],
    [6, "Le temperature non bastano, serve il piano HACCP.", "Cos'è di preciso?", "Corretto ma astratto: gli esempi pratici convincono di più."],
    [3, "Ok, allora parliamo della sicurezza dei commessi.", "Va bene.", "Lasci un punto debole importante (HACCP) senza approfondirlo."],
    [6, "Chi affetta i salumi al banco?", "Io, mio fratello e una ragazza.", "Buona domanda: ti dice chi deve avere l'attestato. Manca però il quadro del controllo."]] },
  { c: "scoperta", cl: "Io sono piccolo. Cosa possono farmi?",
    o: [
    [10, "Le faccio un esempio: in un controllo trovano gli sfusi senza informazioni sugli allergeni e chi affetta senza attestato. Sono sanzioni separate e l'ispettore annota tutto. Nel magazzino spostate casse pesanti a mano?", "Sì, le casse d'acqua. Tutti i giorni.", "Esempio concreto senza terrorismo, poi scopri un altro bisogno: la movimentazione dei carichi."],
    [3, "Possono chiuderla anche domani.", "Non ci credo.", "Esagerare senza esempi non è credibile."],
    [6, "Le sanzioni per gli allergeni non indicati sono pesanti.", "Quanto?", "Giusto, ma rischi di finire su cifre che non conosci con precisione: meglio l'esempio concreto del controllo."],
    [0, "Niente, ai piccoli non fanno niente.", "Allora sto tranquillo.", "Falso, e hai appena eliminato il motivo per comprare."],
    [6, "Quanti siete a lavorare qui?", "Io, mio fratello e due commessi.", "Utile, ma non rispondi alla sua domanda."]] },
  { c: "proposta", cl: "Allora cosa mi serve?",
    o: [
    [10, "Per l'alimentare: piano HACCP con gli allergeni sugli sfusi e i corsi HACCP per chi affetta e per lei. Per i commessi: corso sicurezza, documento dei rischi con la valutazione del magazzino per le casse pesanti.", "Ok, è chiaro. Anche le casse.", "Copri i due fronti (alimenti e sicurezza) con le cose specifiche del suo negozio."],
    [6, "Le serve il piano HACCP e i corsi HACCP.", "E i commessi?", "Corretto per gli alimenti, ma i commessi hanno anche obblighi di sicurezza."],
    [3, "Le serve la pratica antincendio completa.", "Antincendio? Ho un estintore.", "Non è la priorità di questo negozio e non lo hai verificato."],
    [0, "Le faccio fare un corso online HACCP, poi è tutto a posto.", "Solo il corso? Bene.", "Il corso non sostituisce il piano scritto né la sicurezza dei lavoratori."],
    [6, "Le preparo tutto e le mando il preventivo.", "Cosa c'è dentro?", "Spiega a voce, il cliente vuole capire adesso."]] },
  { c: "obiezioni", cl: "Quanto costa? Ditemi la verità, non mi piacciono i consulenti che vendono carta.",
    o: [
    [10, "Giusto chiederlo. Non vendo carta: il piano lo facciamo sul suo banco vero, e le spiego cosa controlla l'ASL così lo sa anche lei. Il prezzo esatto glielo scrivo nel preventivo dopo aver raccolto i dati: lo vedo con lei voce per voce.", "Se mi spiega tutto, va bene.", "Rispondi alla diffidenza con il metodo e la trasparenza, senza buttare cifre a caso."],
    [0, "Costa pochissimo, quasi niente.", "Quanto, quasi niente?", "Promesse vaghe che poi il preventivo smentisce: perdi la fiducia."],
    [3, "Dipende. Le mando il listino.", "Il listino non lo capisco.", "Il listino senza spiegazione non risponde alla sua diffidenza."],
    [6, "I prezzi sono quelli del listino SSI, uguali per tutti.", "Ok, ma quanto?", "Vero e onesto, ma il cliente vuole sentirsi spiegare cosa compra."],
    [3, "Tanto prima o poi deve farlo comunque.", "Allora poi.", "Non risponde alla domanda e invita a rimandare."]] },
  { c: "chiusura", cl: "Va bene, facciamo.",
    o: [
    [10, "Perfetto. Compiliamo ora il modello raccolta dati, poi domani le porto il preventivo con acconto del 30% e fissiamo il sopralluogo del tecnico: va meglio martedì o mercoledì mattina, prima dell'apertura?", "Mercoledì, alle 8.", "Dati subito, preventivo, acconto, data concreta a un orario che non disturba il negozio."],
    [3, "Bene! Mi chiami quando vuole partire.", "Ok.", "Il cliente ha detto sì: non lasciare a lui il prossimo passo."],
    [6, "Le mando il preventivo per mail.", "Ok.", "Va bene, ma senza dati raccolti e senza data."],
    [0, "Allora firmi qui, il prezzo glielo dico dopo.", "Senza prezzo? No.", "Non si firma senza preventivo."],
    [6, "Le faccio chiamare dalla segreteria per l'appuntamento con il tecnico.", "Va bene.", "Delegare l'appuntamento rallenta: fissalo tu adesso."]] }
  ] },

{ id: "off", tag: "Officina", titolo: "Carrozzeria di 400 m²", nome: "Sig. Luca, titolare", diff: 2, modulo: "Modulo 8",
  brief: "Carrozzeria di 400 m² con 4 dipendenti, già cliente SSI per le visite mediche. Il medico ha segnalato che nel DVR manca la valutazione del rumore. Appuntamento fissato.",
  passi: [
  { c: "rapporto", cl: "Il medico mi ha detto di sentirvi per il rumore. Ma io faccio questo lavoro da 30 anni.",
    o: [
    [10, "Si vede, e per questo le chiedo una cosa: mi fa fare un giro in officina? Così vedo come lavorate davvero e le dico solo quello che serve.", "Venga, le faccio vedere.", "Rispetti la sua esperienza e chiedi di vedere: per un pratico vale più di mille parole."],
    [3, "Trent'anni di esperienza non contano, la legge è cambiata.", "Ah, non contano?", "Svalutare la sua esperienza ti mette contro di lui."],
    [6, "Il medico ha ragione, la valutazione del rumore è obbligatoria. Possiamo parlarne?", "Parliamone.", "Corretto, ma parli «da ufficio»: lui si fida di chi guarda l'officina."],
    [0, "Le preparo subito il preventivo per il rumore e siamo a posto.", "Ok.", "Vendi solo quello che ha segnalato il medico e perdi tutto il resto."],
    [3, "Le ho portato una presentazione su tutti i nostri servizi.", "Non ho tempo per le presentazioni.", "Un cliente pratico vuole concretezza, non slide."]] },
  { c: "scoperta", cl: "Questa è la cabina di verniciatura, là le levigatrici e il compressore. In fondo i fusti dell'olio.",
    o: [
    [10, "Grazie. Nel DVR del 2017 ci sono anche il rischio chimico delle vernici e la valutazione delle atmosfere esplosive per la cabina? E i fusti d'olio e i filtri come li gestite, siete iscritti al RENTRI?", "Chimico non credo. Il RENTRI non so cos'è.", "Dal giro emergono i rischi veri: chimico, ATEX, rifiuti. Domande precise, non accuse."],
    [6, "Il rumore delle levigatrici è sicuramente sopra soglia. Avete le cuffie?", "Sì, le cuffie ci sono.", "Giusto ma ti fermi al rumore, mentre la cabina e i rifiuti aprono altri bisogni."],
    [3, "Che bella officina! Molto ordinata.", "Grazie.", "Un complimento va bene, ma il giro serve a scoprire i bisogni."],
    [0, "Questa cabina non è a norma, va rifatta.", "L'ha montata una ditta seria, è a norma.", "Giudizio tecnico che non puoi dare tu: perdi credibilità e crei conflitto."],
    [6, "Quanti metri quadri è l'officina?", "Circa 400.", "Domanda utile (sopra 300 m² c'è la verifica antincendio), ma devi collegarla a cosa comporta."]] },
  { c: "obiezioni", cl: "La cabina è a norma, me l'ha detto chi l'ha montata.",
    o: [
    [10, "Sicuramente la cabina è certificata come macchina. La valutazione delle atmosfere esplosive però riguarda come la usate voi: zone, prodotti, ventilazione. È un documento del datore di lavoro, non di chi l'ha montata.", "Ah, quindi sono due cose diverse.", "Distingui con chiarezza le due cose senza mettere in dubbio il fornitore."],
    [0, "Chi l'ha montata non è responsabile, lo è lei. Se succede qualcosa va in galera lei.", "Mi sta minacciando?", "Il tono minaccioso chiude la conversazione."],
    [3, "Va bene, allora lasciamo perdere la cabina.", "Ok.", "Abbandoni un bisogno reale."],
    [6, "Ha il certificato di conformità? Me lo fa vedere?", "Sì, è in ufficio.", "Utile, ma il punto è un altro: la valutazione del datore di lavoro."],
    [3, "Facciamo controllare la cabina da un nostro tecnico.", "A cosa serve se è a norma?", "Senza spiegare la differenza, sembra un servizio inutile."]] },
  { c: "proposta", cl: "Allora, cosa mi serve davvero?",
    o: [
    [10, "Aggiornare il DVR con rumore, rischio chimico e atmosfere esplosive per la verniciatura. Poi l'iscrizione al RENTRI per i rifiuti dell'officina. E visto che siete sopra i 300 m², un controllo della parte antincendio.", "Così è chiaro. Sono cose che vedo tutti i giorni.", "Tutto quello che è emerso dal giro, in linguaggio concreto."],
    [6, "Le aggiorno il DVR con il rumore come ha detto il medico.", "Solo quello?", "Ti fermi alla richiesta di partenza."],
    [3, "Le serve tutto: DVR, HACCP, privacy, formazione completa.", "HACCP in carrozzeria?", "Servizi fuori contesto."],
    [0, "Le preparo un preventivo per una nuova cabina.", "Una cabina nuova?", "SSI non vende impianti: proposta fuori dal nostro lavoro."],
    [6, "Le serve il DVR completo e la pratica rifiuti.", "Quale pratica?", "Giusto ma vago: per un pratico serve sapere esattamente cosa."]] },
  { c: "obiezioni", cl: "Non è mai successo niente in 30 anni.",
    o: [
    [10, "Meglio così, vuol dire che lavorate con attenzione. I documenti servono a dimostrarlo: se domani arriva un controllo o un infortunio, è la carta che la protegge. E il medico l'ha già segnalato per iscritto.", "Questo è vero, il medico l'ha scritto.", "Riconosci il merito e sposti la conversazione sulla tutela, ricordando la segnalazione scritta del medico."],
    [3, "C'è sempre una prima volta.", "Speriamo di no.", "Frase fatta che non convince."],
    [0, "Allora forse può aspettare ancora un po'.", "Appunto.", "Gli dai ragione e perdi la vendita, lasciandolo scoperto."],
    [6, "Le statistiche degli infortuni nelle officine sono alte.", "Le statistiche non sono la mia officina.", "Numeri generici convincono poco un artigiano esperto."],
    [3, "La legge è uguale per tutti, anche per chi è bravo.", "Lo so.", "Corretto, ma non lo coinvolge."]] },
  { c: "chiusura", cl: "Va bene. Cosa facciamo adesso?",
    o: [
    [10, "Raccolgo adesso i dati sul modello. Domani le porto il preventivo con acconto del 30%: prima il DVR, poi il RENTRI. Il tecnico può venire per le misure del rumore martedì o giovedì?", "Giovedì.", "Dati, preventivo diviso, acconto e data per le misure."],
    [3, "Le mando tutto per mail.", "Ok.", "Nessun passo concreto."],
    [6, "Le preparo il preventivo e la chiamo.", "Va bene.", "Un seguito c'è, ma senza dati e senza data."],
    [0, "Firmiamo subito, poi le dico i prezzi.", "No.", "Non si firma senza preventivo."],
    [6, "Ne parlo con il medico competente e le faccio sapere.", "Ok.", "Coinvolgi la persona sbagliata: il prossimo passo è il preventivo."]] }
  ] },

{ id: "agri", tag: "Ricettivo", titolo: "Agriturismo con piscina", nome: "Sig. Roberto, titolare", diff: 2, modulo: "Modulo 5",
  brief: "Agriturismo sulle colline di Carmignano: 30 posti letto, piscina, colazione, acqua da pozzo, 4 stagionali da aprile a ottobre. È novembre e la struttura è quasi chiusa. Ti ha chiamato lui su consiglio di un amico.",
  passi: [
  { c: "rapporto", cl: "Benvenuto! Un amico mi ha parlato bene di voi. Un caffè?",
    o: [
    [10, "Volentieri, grazie. Il suo amico le ha detto cosa la preoccupava? Mi racconti com'è la struttura, poi vediamo insieme cosa serve per la prossima stagione.", "Mi ha detto di farmi controllare prima dell'estate.", "Accetti il clima cordiale e porti subito la conversazione al bisogno."],
    [3, "No grazie, andiamo al punto: le servono molte cose.", "Ah... va bene.", "Rifiutare l'accoglienza raffredda un cliente ben disposto."],
    [6, "Grazie! Che posto bellissimo. Quante camere avete?", "Camere e appartamenti, 30 posti letto.", "Buona domanda, ma potevi usare il consiglio dell'amico."],
    [0, "Prima di tutto le dico che gli agriturismi sono i più multati.", "Addirittura.", "Partenza allarmistica con un cliente che ti ha chiamato fiducioso."],
    [3, "Mi parli pure di tutto, ho tutto il pomeriggio.", "Bene, le racconto la storia della fattoria...", "Ascoltare va bene, ma devi guidare la conversazione."]] },
  { c: "scoperta", cl: "Abbiamo 30 posti letto. Ma siamo un agriturismo, non un hotel: i Vigili del Fuoco non c'entrano.",
    o: [
    [10, "Capisco perché lo pensa. Per la prevenzione incendi però conta il numero di posti letto: sopra i 25 la struttura è soggetta, anche se è un agriturismo. Ha mai fatto la pratica con i Vigili del Fuoco?", "No. Non lo sapevo, davvero.", "Correggi l'errore con il criterio preciso (oltre 25 posti letto) e una domanda."],
    [0, "Ha ragione, gli agriturismi sono esenti.", "Bene.", "Falso: conta il numero di posti letto."],
    [3, "Si sbaglia completamente.", "Non mi piace sentirmi dire così.", "Il contenuto è giusto, il modo no."],
    [6, "Dipende dai posti letto, le faccio verificare.", "Va bene.", "Corretto ma vago: hai il dato (30) e la soglia (25), dillo."],
    [6, "E la piscina? Chi la gestisce?", "Io, più o meno.", "Altro bisogno vero, ma lasci in sospeso un errore importante."]] },
  { c: "scoperta", cl: "La piscina la gestisco io. Le analisi le faccio... quando mi ricordo. L'acqua è del pozzo.",
    o: [
    [10, "La piscina aperta agli ospiti ha bisogno di un documento di valutazione, di un responsabile nominato e di analisi programmate. Con l'acqua da pozzo servono le analisi di potabilità, e con docce e piscina anche la valutazione della legionella. E la colazione la preparate voi?", "Sì, la colazione la prepara mia moglie.", "Elenchi gli obblighi senza drammatizzare e scopri anche la colazione (HACCP)."],
    [3, "Così è pericolosissimo, gli ospiti possono ammalarsi.", "Non è mai successo niente.", "Allarmismo che genera difesa."],
    [6, "Le analisi vanno fatte regolarmente. Le organizziamo noi.", "Bene.", "Giusto, ma mancano documento, responsabile, legionella e pozzo."],
    [0, "Se le fa lei va bene, non serve altro.", "Ok.", "Falso: servono documento, responsabile e analisi programmate."],
    [6, "Ha mai fatto la valutazione della legionella?", "Mai.", "Bene la legionella, ma lasci fuori la piscina e il pozzo."]] },
  { c: "proposta", cl: "Mi sta dicendo tante cose. Mi faccia un riassunto.",
    o: [
    [10, "Un piano «pronti per la stagione» entro marzo: verifica della prevenzione incendi, piscina con documento e responsabile, legionella e analisi del pozzo, piano HACCP per la colazione, e la formazione dei 4 stagionali ad aprile. Lo facciamo d'inverno, a struttura chiusa.", "Così mi piace: tutto pronto per aprile.", "Riassunto ordinato e legato alla sua stagionalità."],
    [6, "Antincendio, piscina e legionella. Il resto dopo.", "E la colazione?", "Buone priorità, ma lasci fuori HACCP e stagionali."],
    [3, "Le serve il pacchetto Large. Comprende tutto.", "Tutto cosa?", "Il pacchetto senza spiegazione non riassume niente."],
    [0, "Le serve solo la pratica dei Vigili del Fuoco, il resto è facoltativo.", "Ah, meno male.", "Piscina, acqua e HACCP non sono facoltativi."],
    [6, "Le mando un documento con tutto, così lo legge con calma.", "Va bene.", "Utile come promemoria, ma ti aveva chiesto un riassunto adesso."]] },
  { c: "obiezioni", cl: "Ne parlo con mia moglie. A gennaio ci penso.",
    o: [
    [10, "Giustissimo parlarne con sua moglie, anche perché la colazione la segue lei. Posso tornare quando ci siete entrambi? Le dico solo che la pratica incendi ha tempi tecnici: partendo a gennaio rischiamo di non essere pronti per aprile.", "Sì, venga venerdì, c'è anche lei.", "Rispetti la decisione condivisa, la trasformi in un appuntamento e motivi l'urgenza con i tempi reali."],
    [3, "Va bene, ci sentiamo a gennaio.", "A gennaio.", "Accetti il rinvio: probabilmente non sarete pronti per la stagione."],
    [0, "Sua moglie non c'entra, decide lei.", "Come si permette?", "Mancanza di rispetto: vendita persa."],
    [6, "Le lascio il materiale da mostrare a sua moglie.", "Grazie.", "Aiuta, ma senza appuntamento il rinvio resta."],
    [3, "Se aspetta gennaio i prezzi salgono.", "Non mi piacciono queste cose.", "Pressione falsa sui prezzi."]] },
  { c: "chiusura", cl: "Va bene, venga venerdì.",
    o: [
    [10, "Perfetto. Intanto compiliamo il modello raccolta dati, così venerdì porto già il piano con le date e il preventivo con acconto del 30%. Le va bene alle 10?", "Alle 10 va benissimo.", "Usi il tempo fino a venerdì per arrivare con il preventivo pronto."],
    [6, "Venerdì porto il preventivo.", "Ok.", "Bene, ma senza dati raccolti oggi il preventivo sarà impreciso."],
    [3, "Venerdì veniamo a parlarne meglio.", "Ok.", "Un altro incontro per parlare, senza preventivo: rischi di ricominciare da capo."],
    [0, "Firmi oggi, così venerdì partiamo già.", "Prima ne parlo con mia moglie, l'ho detto.", "Ignori quello che ha appena detto."],
    [6, "Venerdì porto anche il tecnico.", "Va bene.", "Utile, ma raccogli i dati oggi."]] }
  ] },

{ id: "comm", tag: "Prescrittore", titolo: "Studio commercialista", nome: "Dott.ssa Elena, commercialista", diff: 3, modulo: "Introduzione",
  brief: "Studio commercialista a Prato con 4 collaboratori e circa 120 aziende clienti, molte confezioni e piccole imprese edili. Obiettivo: una collaborazione con lo studio, non vendere a lei. Hai fissato 20 minuti con lo script 5.",
  passi: [
  { c: "rapporto", cl: "Buongiorno. Ho 20 minuti. Mi dica perché è qui.",
    o: [
    [10, "Grazie. Le aziende che lei segue hanno obblighi di sicurezza che spesso arrivano a lei come domande. Vorrei capire come le gestite oggi e se un riferimento unico, affidabile, può semplificarle il lavoro.", "Interessante. Oggi è un po' un problema, in effetti.", "Parli del suo problema (le domande dei clienti) e dello studio, non di SSI."],
    [3, "Le presento SSI: mille clienti, sei sedi, vent'anni di esperienza.", "Bene. E quindi?", "Parlare di te prima che di lei non crea interesse."],
    [6, "Sono qui per proporle una collaborazione sulla sicurezza dei suoi clienti.", "Che tipo di collaborazione?", "Diretto e corretto, ma non hai ancora scoperto il suo bisogno."],
    [0, "Vorrei l'elenco dei suoi clienti con dipendenti.", "Non do i dati dei miei clienti.", "Chiedere dati dei clienti al primo incontro è un errore grave (anche di privacy)."],
    [3, "Ha qualche cliente che ha bisogno di sicurezza?", "Forse.", "Domanda debole che non apre la conversazione."]] },
  { c: "scoperta", cl: "Oggi giro la sicurezza a un geometra che conosco. Fa i DVR a poco.",
    o: [
    [10, "Bene che abbiate un riferimento. E i clienti come si trovano? Per formazione, visite mediche e scadenze li segue lui oppure devono cercare altri?", "Ecco, quello è il problema: fa solo i DVR. Per il resto i clienti si lamentano con me.", "Non critichi il geometra: con una domanda trovi il buco (servizio parziale) e il suo fastidio."],
    [0, "I DVR a poco prezzo sono sempre fatti male.", "Il geometra è un mio amico.", "Critichi una persona di cui si fida: chiudi la porta."],
    [6, "Il geometra fa anche formazione e visite?", "No, solo i DVR.", "Buona domanda, ma potevi far emergere la lamentela dei clienti."],
    [3, "Allora possiamo affiancarlo per i DVR.", "I DVR li fa già lui.", "Proponi proprio il servizio che ha già."],
    [3, "Noi siamo più completi di un geometra.", "Può darsi.", "Affermazione autoreferenziale: falla emergere da lei."]] },
  { c: "obiezioni", cl: "Il punto è che non voglio problemi con i miei clienti. Se mando qualcuno, ci metto la faccia.",
    o: [
    [10, "È giustissimo, ed è il motivo per cui le proponiamo un referente unico: me, con il capo area Alessandro Raia. Partiamo da pochi clienti, lei vede come lavoriamo e solo dopo decide se allargare.", "Partire da pochi mi piace. Così vedo.", "Rispondi alla paura per la reputazione con una prova graduale e persone precise."],
    [3, "Le garantisco che non avrà mai problemi.", "Le garanzie le danno tutti.", "Promessa assoluta poco credibile."],
    [6, "Abbiamo mille clienti soddisfatti.", "E quelli insoddisfatti?", "Argomento debole per chi si preoccupa della propria reputazione."],
    [0, "I problemi con i clienti non sono affare suo, li gestiamo noi.", "Sono i miei clienti, sono affari miei eccome.", "Sminuisci la sua responsabilità verso i clienti."],
    [6, "Possiamo mandarle un report dopo ogni cliente seguito.", "Utile.", "Buona idea pratica, ma manca la prova graduale e il referente."]] },
  { c: "obiezioni", cl: "E lo studio cosa ci guadagna?",
    o: [
    [10, "Prima di tutto clienti seguiti in modo completo e un servizio in più da offrire. Se preferite una collaborazione con un riconoscimento sulle segnalazioni, c'è anche quella: le condizioni le definisce il capo area, possiamo vederle insieme a lui.", "Va bene, mi interessa sentire entrambe le possibilità.", "Lasci aperte le due strade e non prometti cifre che non decidi tu."],
    [0, "Le diamo il 20% su ogni cliente.", "Il 20%? Me lo mette per iscritto?", "Non puoi promettere percentuali: le condizioni le definisce il capo area."],
    [3, "Niente, lo fa per i suoi clienti.", "Allora ci penso.", "Chiudi la possibilità di una collaborazione con riconoscimento."],
    [6, "Clienti più soddisfatti e meno domande a cui rispondere.", "Questo è vero.", "Buon valore, ma non rispondi alla domanda economica se le interessa."],
    [3, "Ci guadagna una cena!", "Simpatico, ma no.", "Battuta fuori luogo con una professionista."]] },
  { c: "proposta", cl: "E per il mio studio? Anche noi siamo un'azienda, in effetti.",
    o: [
    [10, "Esatto. Con 4 collaboratori servono anche a voi il documento dei rischi, con la parte videoterminali, e la formazione. Possiamo partire da qui: così vede come lavoriamo su di lei, prima che sui suoi clienti.", "Ha senso. Il nostro DVR, a dire il vero, non è aggiornato.", "Trasformi la domanda in una prova pratica del servizio e scopri un bisogno reale."],
    [6, "Certo, le facciamo un preventivo anche per lo studio.", "Per cosa, di preciso?", "Giusto ma vago."],
    [3, "Lo studio è un ufficio, non serve quasi niente.", "Ah, ok.", "Falso: anche un ufficio con dipendenti ha obblighi (DVR, videoterminali, formazione)."],
    [0, "Per lo studio le facciamo tutto gratis se ci manda i clienti.", "Gratis? Interessante.", "Non puoi promettere servizi gratis."],
    [6, "Per lo studio basta il corso videoterminali.", "Solo quello?", "Incompleto: serve il documento dei rischi."]] },
  { c: "chiusura", cl: "Va bene, proviamo. Come iniziamo?",
    o: [
    [10, "Propongo due cose: il check-up del suo studio la settimana prossima, e intanto lei sceglie 3 clienti a cui proporre il check-up gratuito. Ci rivediamo con Alessandro Raia tra 15 giorni per fare il punto. Martedì o giovedì per il check-up?", "Giovedì. E penso già a 3 clienti.", "Due passi concreti, una data, e il capo area coinvolto per la collaborazione."],
    [3, "Mi mandi l'elenco dei clienti e li chiamo io.", "No, l'elenco no.", "Chiedi i dati dei clienti invece di farli presentare da lei."],
    [6, "Le mando una proposta di collaborazione scritta.", "Va bene.", "Utile, ma senza data né primi clienti la collaborazione resta sulla carta."],
    [0, "Firmi qui la convenzione con le percentuali.", "Quali percentuali?", "Le condizioni le definisce il capo area: non hai niente da far firmare."],
    [6, "La richiamo la settimana prossima.", "Ok.", "Seguito vago."]] }
  ] },

{ id: "cdl", tag: "Prescrittore", titolo: "Studio consulente del lavoro", nome: "Dott. Marco, consulente del lavoro", diff: 3, modulo: "Introduzione",
  brief: "Studio di consulenza del lavoro a Prato, segue le paghe di circa 80 aziende, molte con stagionali e assunzioni frequenti. Hai fissato l'incontro con lo script 1 (formazione finanziata). Obiettivo: una collaborazione.",
  passi: [
  { c: "rapporto", cl: "Al telefono mi ha parlato di formazione finanziata. Mi spieghi meglio.",
    o: [
    [10, "Volentieri. Prima però le chiedo: i suoi clienti oggi aderiscono a un fondo interprofessionale? Così le spiego solo la parte che le serve.", "Una parte sì, molti no. Non ci abbiamo mai lavorato molto.", "Una domanda prima della spiegazione: adatti il discorso a lui."],
    [6, "Le aziende versano lo 0,30% delle retribuzioni e possono usarlo per la formazione. Noi organizziamo i corsi.", "Lo so, faccio questo mestiere.", "Corretto, ma spieghi a un esperto quello che conosce meglio di te."],
    [0, "Con noi la formazione per i suoi clienti è completamente gratis.", "Gratis davvero? Senza nessun costo?", "Mai dire «gratis»: la gestione ha un costo. Dì «finanziata con il fondo»."],
    [3, "Prima le racconto chi siamo: mille clienti, sei sedi...", "Ok, ma la formazione?", "Ti aveva chiesto una cosa precisa."],
    [3, "È complicato, gliel'ho detto al telefono.", "Allora perché è qui?", "Non rispondi alla sua domanda."]] },
  { c: "scoperta", cl: "Molti miei clienti non aderiscono a nessun fondo. L'adesione la gestisco io con l'UniEmens.",
    o: [
    [10, "Esatto, è proprio lei il punto di partenza. Con il nuovo Accordo i datori di lavoro devono fare il corso di 16 ore entro maggio 2027. Quanti dei suoi clienti secondo lei sono già in regola con la formazione sicurezza?", "Sinceramente pochi. E i datori di lavoro non sanno niente delle 16 ore.", "Riconosci il suo ruolo e colleghi la scadenza vera a una domanda sui suoi clienti."],
    [6, "Allora potrebbe farli aderire tutti al fondo.", "Ci posso pensare.", "Utile, ma non scopri quanto è grande il bisogno."],
    [3, "Peccato, quei soldi restano allo Stato.", "Lo so.", "Corretto, ma non porta avanti la conversazione."],
    [0, "Se non aderiscono non possiamo fare niente per loro.", "Allora ci sentiamo.", "Falso: la formazione resta obbligatoria e si può comunque fare."],
    [6, "Quante assunzioni gestite al mese?", "Una decina, con i picchi stagionali.", "Buona domanda, ma il tema era il fondo."]] },
  { c: "scoperta", cl: "Le assunzioni le seguo io, e i clienti mi chiedono sempre «cosa devo fare per la sicurezza?».",
    o: [
    [10, "E oggi cosa risponde? A chi li manda?", "A nessuno in particolare. Dico di cercare un consulente. Non è il mio lavoro.", "Domanda semplice che fa emergere il bisogno: non ha nessuno a cui mandarli."],
    [6, "Potrebbe mandarli a noi.", "Forse.", "Giusto ma precipitoso: lascia che sia lui a dire il problema."],
    [3, "Dovrebbe dirgli lei cosa fare.", "Non è il mio mestiere.", "Gli attribuisci un compito che non è suo."],
    [0, "Gli dica di fare il corso online e basta.", "Va bene così?", "Consiglio sbagliato: non basta per tutti i rischi e lo esponi."],
    [6, "Quali settori hanno i suoi clienti?", "Confezioni, ristoranti, imprese di pulizia.", "Utile per preparare l'incontro, ma prima chiudi il bisogno principale."]] },
  { c: "proposta", cl: "Cosa mi propone, in concreto?",
    o: [
    [10, "Tre cose: un riferimento unico a cui girare ogni nuova assunzione; la formazione finanziata con il fondo per i clienti che aderiscono, e seguiamo noi la pratica; un check-up gratuito per i clienti che vuole segnalarci. Più, se vuole, un incontro gratuito con i suoi clienti sul nuovo Accordo.", "Il riferimento unico mi risolve un problema. E l'incontro è un'idea.", "Proposta che risponde ai suoi bisogni, con le offerte giuste e senza promesse sbagliate."],
    [6, "Facciamo la formazione ai suoi clienti con il fondo.", "E per il resto?", "Giusto ma parziale."],
    [3, "Le proponiamo il pacchetto Azienda Sicura per tutti i suoi clienti.", "Per tutti? Ognuno è diverso.", "Proposta indifferenziata."],
    [0, "I suoi clienti ci pagano e lei ci guadagna la metà.", "Non funziona così.", "Non puoi proporre condizioni economiche: le definisce il capo area."],
    [6, "Le lascio la nostra brochure da dare ai clienti.", "Ok.", "Materiale utile, ma non è una proposta."]] },
  { c: "obiezioni", cl: "Abbiamo già chi fa i corsi a un paio di clienti grandi.",
    o: [
    [10, "Bene, quelli sono seguiti. Le altre aziende, quelle piccole con stagionali, oggi non hanno nessuno: possiamo partire da quelle, senza toccare chi è già seguito.", "Sì, le piccole sono il problema.", "Non entri in conflitto con il fornitore esistente: trovi lo spazio libero."],
    [0, "Noi siamo meglio, li spostiamo tutti.", "No, quelli restano dove sono.", "Inutile e rischioso attaccare il fornitore esistente."],
    [3, "Ok, allora non le serviamo.", "Forse.", "Rinunci a un bisogno vero."],
    [6, "Usano il fondo per quei corsi?", "Non lo so.", "Buona domanda, ma il punto sono le aziende scoperte."],
    [6, "Possiamo affiancarli.", "Vediamo.", "Va bene, ma senza indicare dove sei utile."]] },
  { c: "chiusura", cl: "Mi interessa. Come partiamo?",
    o: [
    [10, "Scelga lei 3 clienti con assunzioni recenti: con il loro consenso li contatto io per il check-up gratuito. Tra 15 giorni torniamo con Alessandro Raia per i primi risultati e per le condizioni della collaborazione. Le va bene il 12 o il 14?", "Il 14. Le preparo i 3 nomi.", "Primi passi concreti, consenso dei clienti, data con il capo area."],
    [3, "Mi mandi l'elenco di tutti i clienti.", "No, questo no.", "Chiedi dati che non può darti."],
    [6, "Le mando la proposta via mail.", "Ok.", "Seguito vago."],
    [0, "Firmiamo oggi una convenzione con le percentuali.", "Quali percentuali?", "Le condizioni le definisce il capo area."],
    [6, "La richiamo tra una settimana.", "Va bene.", "Manca un passo concreto."]] }
  ] }
]};
