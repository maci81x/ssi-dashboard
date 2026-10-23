window.CORSO = {
soglia: 0.8,
moduli: [

/* ========================= 0 — INTRODUZIONE ========================= */
{
id:"m0", n:0, pdf:"pdf/SSI-Start-00-Benvenuto.pdf",
titolo:"Benvenuto in SI Soluzioni Impresa", titoloBreve:"Benvenuto in SSI",
sottotitolo:"Chi siamo, cosa vendiamo, dove trovi le informazioni e le regole del gioco. Il punto di partenza prima di parlare di norme.",
durata:"20 minuti",
chips:[["Introduzione"],["Test: 6 domande"]],
obiettivi:[
 "come è organizzata SSI e a chi fai riferimento",
 "quali servizi vendiamo e quali pesano di più sul fatturato",
 "dove trovare le informazioni su un cliente e sulle norme",
 "le linee guida di comportamento con il cliente"
],
blocchi:[
{tipo:"testo", h:"Chi siamo", html:`
<p>SI Soluzioni Impresa è una società toscana di consulenza su <strong>sicurezza sul lavoro, igiene alimentare (HACCP), formazione obbligatoria, sorveglianza sanitaria, antincendio, ambiente e privacy</strong>. Seguiamo circa 1.000 aziende attive, soprattutto piccole e medie imprese con almeno un dipendente.</p>
<p>Abbiamo sei sedi: <strong>Poggibonsi</strong> (sede principale, Loc. Drove, Centro Direzionale EXIT), <strong>Siena</strong>, <strong>Pontedera</strong>, <strong>Pisa</strong>, <strong>Firenze</strong> e <strong>Grosseto</strong>.</p>
<p>Il nostro scopo, come scritto nel mansionario: <em>ogni lavoratore torni a casa sano e salvo ogni giorno</em>. Il cliente ci sceglie perché gli togliamo un pensiero: scadenze, documenti, corsi e rapporti con ASL e ispettori li gestiamo noi.</p>`},
{tipo:"tabella", h:"Chi fa cosa", cols:["Area","Responsabile","Cosa fa per te"], rows:[
 ["Direzione Commerciale","Roberto Macinai","Tuo riferimento diretto: obiettivi, appuntamenti, riunione del venerdì, report serale"],
 ["Marketing e HR","Marco Macinai","Lead da campagne e newsletter, materiale promozionale"],
 ["Produzione (tecnici)","Giovanna Panti","Esegue quello che vendi: DVR, sopralluoghi, HACCP, misure"],
 ["Formazione","Niccolò Golini","Calendario corsi, aule, attestati"],
 ["Sorveglianza sanitaria (RTO)","Samuele Corti","Medici competenti, visite, protocolli"],
 ["Amministrazione","Francesco Martini","Fatture, incassi, insoluti"],
 ["Segreteria","Gaia Deplano","Smistamento, appuntamenti, documenti"]
], nota:"Riferimento: organigramma SSI Rev. 15 (agosto 2026). Per qualsiasi dubbio tecnico non improvvisare: chiedi al tecnico tramite il direttore commerciale."},
{tipo:"testo", h:"Cosa vendiamo, in numeri", html:`
<p>Dal 1° gennaio 2025 a oggi SSI ha venduto servizi a <strong>oltre 850 clienti</strong>. Ecco come si divide il venduto per area (fonte: dati Securmars nella dashboard commerciale, offerte accettate).</p>`},
{tipo:"barre", h:"Peso di ogni area sul venduto (gen 2025 – ott 2026)", dati:[
 ["Formazione",32.2,"32%"],["DVR e valutazioni",10.8,"11%"],["Sorveglianza sanitaria",10.4,"10%"],["Antincendio",9.0,"9%"],["Incarichi RSPP esterno",9.0,"9%"],["HACCP e igiene",4.0,"4%"],["Ambiente e rifiuti",2.9,"3%"],["Messa a terra",1.9,"2%"],["Privacy",1.1,"1%"]
], nota:"Il resto (circa 14%) sono pacchetti di assistenza, pratiche e voci varie."},
{tipo:"cards", h:"Cosa si chiude più facilmente", dati:[
 ["98%","dei servizi antincendio proposti viene accettato"],
 ["98%","delle verifiche di messa a terra proposte viene accettato"],
 ["96%","dei corsi e dei DVR proposti viene accettato"],
 ["80%","della sorveglianza sanitaria: qui il cliente tratta di più"]
]},
{tipo:"box", stile:"vendita", h:"Cosa ci dicono questi numeri", html:`
<p>La <strong>formazione</strong> è un terzo del fatturato ed è il servizio più facile da far capire: c'è un obbligo, una durata, una scadenza. È la porta d'ingresso perfetta.</p>
<p>I servizi più venduti per numero di clienti sono: nomina del medico competente e visite mediche, corso di primo soccorso, DVR stress lavoro-correlato, aggiornamenti di primo soccorso, DVR, corso HACCP e corsi antincendio.</p>
<p>Le cose che si ripetono ogni anno o ogni pochi anni (corsi, visite, estintori, verifiche) sono il nostro fatturato ricorrente: <strong>uno scadenzario tenuto bene vale più di dieci visite a freddo</strong>.</p>`},
{tipo:"tabella", h:"Dove trovi le informazioni", cols:["Cosa ti serve","Dove lo trovi"], rows:[
 ["Anagrafica, offerte, servizi venduti, fatture, scadenze di un cliente","<b>Securmars</b> (gestionale Promarsis): Anagrafiche → Clienti, Commerciale → Offerte"],
 ["Cosa manca a un cliente, cosa scade, quanto vale","<b>Scheda cliente</b> della dashboard commerciale SSI (sezione “Cosa vendere oggi”)"],
 ["Documenti già fatti (DVR, verbali, attestati)","<b>Server</b> SSI, cartella del cliente: se un dato manca in Securmars, cercalo qui e riallinea"],
 ["Prezzi e codici","<b>Listino SisNew</b> (Securmars → Corporate → Listini, filtro codice “SisNew”)"],
 ["Raccolta dati in sopralluogo","<b>Modello raccolta dati</b> (5 pagine): compilalo a ogni primo appuntamento"],
 ["Livello di rischio di un'attività","<b>Tabella codici ATECO → rischio basso/medio/alto</b>"],
 ["Organizzazione della settimana, script, obiettivi","<b>Mansionario commerciale</b>"],
 ["Norme ufficiali","Ministero del Lavoro (lavoro.gov.it), INAIL (inail.it), Vigili del Fuoco (vigilfuoco.it), Regione Toscana, ASL Toscana"]
]},
{tipo:"box", stile:"norma", h:"Le linee guida SSI con il cliente", html:`
<ul>
<li><strong>Prima ascolta, poi proponi.</strong> Fai raccontare al cliente come gestisce sicurezza, formazione, igiene e visite. Il punto su cui fare leva esce da lui.</li>
<li><strong>Non fare terrorismo sulle multe.</strong> Le sanzioni si citano come fatto, non come minaccia. Funziona di più: “in 15 minuti ti dico cosa ti manca”.</li>
<li><strong>Riconosci quello che ha già fatto bene</strong>, poi mostra cosa serve per completare.</li>
<li><strong>Mai inventare una risposta tecnica.</strong> “Verifico con il tecnico e ti richiamo entro domani” vale più di un dato sbagliato.</li>
<li><strong>Due tipi di cliente:</strong> chi vuole subito la lista completa degli adempimenti e chi preferisce procedere un passo alla volta. Riconoscilo e adeguati.</li>
<li><strong>Acconto minimo 30%</strong> su ogni preventivo; i corsi online si attivano solo se pagati. Formazione e sorveglianza sanitaria meglio in preventivi separati.</li>
<li><strong>Tutto su Securmars:</strong> ogni appuntamento, ogni offerta, con data di accettazione corretta e flag “approvato”.</li>
</ul>`},
{tipo:"testo", h:"Come funziona questo corso", html:`
<p>Dopo questa introduzione trovi <strong>10 moduli</strong>. I primi tre danno le basi valide per tutte le aziende (81/08, scadenze ricorrenti, HACCP). Gli altri sette sono divisi <strong>per tipo di attività</strong>: per ognuna trovi cosa le serve, le domande da fare, cosa proporre con codice e prezzo, e un caso concreto.</p>
<p>Ogni modulo finisce con un <strong>test</strong>: con almeno l'80% si apre il modulo successivo. Puoi rifare il test quando vuoi. Ogni modulo ha anche il suo PDF da scaricare e tenere in macchina.</p>`}
],
proporre:[],
domande:[],
porsi:"",
video:[
 {t:"Napo in... Chi ben comincia... lavora in sicurezza!", canale:"INAIL", url:"https://www.youtube.com/watch?v=sUs3rwCzD_I", durata:"pochi minuti", perche:"per entrare nello spirito, senza parole"}
],
fonti:[
 {t:"Mansionario commerciale SSI (documento interno)", url:"#"}
],
quiz:[
 {q:"Quale area pesa di più sul venduto SSI?", o:["Sorveglianza sanitaria","Formazione","Antincendio","HACCP"], a:1, s:"La formazione vale circa un terzo del venduto ed è la porta d'ingresso più facile."},
 {q:"Un dato del cliente non c'è su Securmars. Cosa fai?", o:["Lo chiedi al cliente al telefono senza controllare altro","Lo cerchi nella cartella del cliente sul server e riallinei Securmars","Lasci il campo vuoto","Lo stimi tu"], a:1, s:"Prima si cerca sul server SSI, poi si riporta l'informazione su Securmars (e viceversa)."},
 {q:"Qual è l'acconto minimo da chiedere su ogni preventivo?", o:["10%","Nessuno","30%","50%"], a:2, s:"Il mansionario prevede sempre un acconto minimo del 30%."},
 {q:"Il cliente ti fa una domanda tecnica di cui non sei sicuro. Cosa rispondi?", o:["Rispondi comunque per non perdere credibilità","Dici che non è importante","Dici che verifichi con il tecnico e lo richiami entro una data precisa","Cambi argomento"], a:2, s:"Un dato sbagliato fa perdere il cliente. Prendersi il tempo di verificare è professionale."},
 {q:"Dove trovi codici e prezzi aggiornati dei servizi?", o:["Nel listino SisNew su Securmars","Nei vecchi preventivi","Su Google","Lo chiedi al cliente"], a:0, s:"Il listino in vigore è SisNew (da febbraio 2026)."},
 {q:"Quale approccio funziona meglio al primo contatto?", o:["Elencare tutte le multe possibili","Offrire chiarezza: “ti dico cosa ti manca”","Mandare subito un preventivo completo","Parlare male del consulente attuale"], a:1, s:"La paura delle multe crea curiosità ma poca azione. L'offerta di chiarezza porta all'appuntamento."}
]
},

/* ========================= 1 — 81/08 BASE ========================= */
{
id:"m1", n:1, pdf:"pdf/SSI-Start-01-Il-kit-base-81-08.pdf",
titolo:"Il kit base del D.Lgs. 81/08", titoloBreve:"Il kit base 81/08",
sottotitolo:"Cosa deve avere qualunque azienda con almeno un lavoratore: le figure, il DVR, le valutazioni specifiche e quanto costa non averle.",
durata:"35 minuti",
chips:[["Tutte le attività"],["Test: 8 domande"]],
obiettivi:[
 "le figure obbligatorie della sicurezza e chi le nomina",
 "cos'è il DVR, entro quando va fatto e quando va aggiornato",
 "quali valutazioni specifiche servono e quando",
 "l'ordine di grandezza delle sanzioni, da citare senza terrorismo"
],
blocchi:[
{tipo:"testo", h:"La regola di partenza", html:`
<p>Il <strong>D.Lgs. 81/2008</strong> (Testo Unico sulla sicurezza) si applica a <strong>tutte le aziende che hanno almeno un lavoratore</strong>: dipendenti, ma anche soci lavoratori, collaboratori, tirocinanti. Il titolare che lavora da solo senza nessuno è fuori da quasi tutti gli obblighi.</p>
<p>Il responsabile di tutto è il <strong>datore di lavoro</strong>. Due cose non può delegare a nessuno (art. 17): <strong>valutare i rischi e scrivere il DVR</strong>, e <strong>nominare l'RSPP</strong>.</p>`},
{tipo:"tabella", h:"Le figure della sicurezza", cols:["Figura","Chi è","Cosa serve sapere per vendere"], rows:[
 ["<b>Datore di lavoro</b>","Il titolare o chi ha i poteri","Dal nuovo Accordo 2025 deve fare anche lui un corso di 16 ore (modulo 2)"],
 ["<b>RSPP</b>","Responsabile del servizio di prevenzione e protezione","Può farlo il datore di lavoro stesso (fino a 30 addetti per artigiani, industria e agricoltura; fino a 200 nelle altre aziende) con apposito corso, oppure un esterno: noi (incarico RSPP esterno)"],
 ["<b>RLS</b>","Rappresentante dei lavoratori per la sicurezza","Eletto dai lavoratori. Se non c'è, si ricorre al rappresentante territoriale (RLST). Corso 32 ore e aggiornamento annuale"],
 ["<b>Medico competente</b>","Il medico che fa la sorveglianza sanitaria","Obbligatorio quando i rischi richiedono visite (rumore, MMC, chimico, VDT oltre 20 ore…)"],
 ["<b>Preposti</b>","Capi squadra, capi turno, chi sovrintende","Dal 2021 il datore deve individuarli per iscritto; devono poter fermare un lavoratore che lavora in modo pericoloso"],
 ["<b>Addetti emergenze</b>","Primo soccorso e antincendio","Designati dal datore di lavoro, con i loro corsi (modulo 2)"]
]},
{tipo:"box", stile:"norma", h:"Il DVR in quattro punti", html:`
<ul>
<li><strong>Cos'è:</strong> il Documento di Valutazione dei Rischi. Descrive i rischi, le misure adottate, i DPI, il programma di miglioramento, chi fa cosa e le mansioni a rischio specifico (art. 28).</li>
<li><strong>Nuova azienda:</strong> la valutazione va fatta subito, il documento va completato <strong>entro 90 giorni</strong> dall'inizio dell'attività.</li>
<li><strong>Aggiornamento:</strong> entro <strong>30 giorni</strong> da cambiamenti importanti (nuove lavorazioni, nuovi macchinari, infortuni significativi, esiti della sorveglianza sanitaria).</li>
<li><strong>Data certa:</strong> basta la firma del datore di lavoro con le firme di RSPP, RLS e medico competente.</li>
</ul>`},
{tipo:"testo", h:"Le valutazioni specifiche", html:`
<p>Il DVR generale non basta: per alcuni rischi la legge chiede una valutazione dedicata. Sono il <strong>cross-selling naturale</strong> del DVR.</p>
<ul>
<li><strong>Stress lavoro-correlato:</strong> obbligatoria per tutti (art. 28). È il secondo DVR più venduto da SSI.</li>
<li><strong>Rumore:</strong> soglie di 80, 85 e 87 dB(A). Sopra 80 scattano informazione e DPI a disposizione, sopra 85 l'obbligo di usarli e la sorveglianza sanitaria. Officine, falegnamerie, cantine, cucine industriali.</li>
<li><strong>Vibrazioni:</strong> attrezzi manuali (mano-braccio) e mezzi come trattori e muletti (corpo intero).</li>
<li><strong>Chimico:</strong> chiunque usi prodotti con scheda di sicurezza: detergenti, tinture, vernici, colle, fitofarmaci.</li>
<li><strong>Movimentazione manuale dei carichi:</strong> magazzini, cucine, edilizia, assistenza.</li>
<li><strong>Videoterminali:</strong> è “videoterminalista” chi usa il PC almeno <strong>20 ore a settimana</strong>: pausa di 15 minuti ogni 2 ore e visite periodiche.</li>
<li><strong>Lavoratrici gestanti:</strong> va valutato quali mansioni sono incompatibili con la gravidanza.</li>
<li><strong>Biologico, cancerogeni, ATEX, campi elettromagnetici, ROA, microclima:</strong> settori specifici, li vediamo nei moduli di settore.</li>
</ul>`},
{tipo:"box", stile:"attenzione", h:"Radon: un obbligo che pochi conoscono", html:`
<p>Il D.Lgs. 101/2020 obbliga a <strong>misurare il radon</strong> nei luoghi di lavoro <strong>sotterranei o seminterrati</strong> (cantine, magazzini interrati, archivi, locali tecnici) e al piano terra nelle aree prioritarie. Livello di riferimento: <strong>300 Bq/m³</strong> di media annua. La misura dura un anno; se si è sotto soglia si ripete ogni 8 anni.</p>
<p>In Toscana le aree prioritarie (DGR 1579/2024) sono 11 comuni: Abbadia San Salvatore, Arcidosso, Castel del Piano, Piancastagnaio, Pitigliano, Roccastrada, Santa Fiora, Sorano, Marciana, Marciana Marina, Isola del Giglio.</p>
<p><strong>Domanda chiave:</strong> “Avete locali sotto il livello della strada dove qualcuno lavora o entra regolarmente?”</p>`},
{tipo:"tabella", h:"Quanto costa non essere in regola (D.Lgs. 81/08, importi 2023)", cols:["Violazione","Chi rischia","Sanzione"], rows:[
 ["DVR mancante o RSPP non nominato","Datore di lavoro","Arresto da 3 a 6 mesi o ammenda da circa 3.560 a 9.110 €"],
 ["Lavoratori non formati","Datore di lavoro e dirigenti","Arresto da 2 a 4 mesi o ammenda da circa 1.710 a 7.400 €"],
 ["Medico competente non nominato","Datore di lavoro e dirigenti","Arresto da 2 a 4 mesi o ammenda da circa 1.740 a 6.950 €"],
 ["Lavoratori non mandati a visita","Datore di lavoro e dirigenti","Ammenda da circa 2.850 a 5.700 €"]
], nota:"Gli importi sono maggiorati del 10% (20% se recidivo negli ultimi 3 anni). Citali come informazione, non come minaccia."}
],
proporre:[
 {cod:"A035", desc:"Check-up sicurezza", quando:"Primo passo con un cliente nuovo o che non vediamo da anni", prezzo:390},
 {cod:"A001A / B / C", desc:"Documento di Valutazione dei Rischi, classe A / B / C", quando:"Nessun DVR, o DVR fatto da altri e non più aggiornabile", prezzo:"550 / 650 / 850"},
 {cod:"A064A / B / C", desc:"Aggiornamento DVR, classe A / B / C", quando:"DVR SSI con cambiamenti (nuove mansioni, macchine, sede)", prezzo:"390 / 470 / 580"},
 {cod:"A004", desc:"DVR stress lavoro-correlato classe A, senza psicologo", quando:"Sempre: è obbligatorio per tutti", prezzo:550},
 {cod:"A008A", desc:"DVR rumore fino a 10 misurazioni", quando:"Macchine rumorose, officine, falegnamerie, cantine", prezzo:600},
 {cod:"A005A", desc:"DVR chimico fino a 20 prodotti, classe A, con SDS", quando:"Uso di detergenti, vernici, colle, tinture, fitofarmaci", prezzo:550},
 {cod:"A010A", desc:"DVR movimentazione manuale carichi fino a 5 attività", quando:"Magazzini, cucine, edilizia, assistenza", prezzo:600},
 {cod:"A006A", desc:"DVR videoterminali fino a 5 postazioni", quando:"Uffici con addetti al PC 20+ ore a settimana", prezzo:550},
 {cod:"A014A", desc:"DVR gestanti classe A", quando:"Presenza di lavoratrici in età fertile", prezzo:450},
 {cod:"A103", desc:"Check-up radon (si scala dal DVR se serve)", quando:"Locali interrati o seminterrati", prezzo:300},
 {cod:"A102a + A102b", desc:"DVR radon con sopralluogo e relazione + coppia di misuratori per stanza", quando:"Dopo il check-up radon, se l'obbligo c'è", prezzo:"550 + 150/stanza"},
 {cod:"Nomine", desc:"Redazione nomine sicurezza (preposti, addetti)", quando:"Preposti non individuati per iscritto", prezzo:50},
 {cod:"P001", desc:"Incarico RSPP esterno", quando:"Il titolare non vuole o non può fare l'RSPP", prezzo:null},
 {cod:"ZSA1 / ZSB1 / ZSC1", desc:"Assistenza Azienda Sicura Light / Medium / Large (annuale)", quando:"Per chi vuole delegarci tutto: scadenzario, aggiornamenti normativi, sopralluogo annuo, supporto con ASL e ispettori. I livelli cambiano per numero di uscite e ore del tecnico", prezzo:"650 / 850 / 1.000"}
],
domande:[
 "Quante persone lavorano con lei, compresi soci e collaboratori?",
 "Chi fa da RSPP oggi? Ha fatto il corso?",
 "Il DVR quando è stato fatto l'ultima volta? Da allora sono cambiate lavorazioni, macchine o sede?",
 "Avete la valutazione dello stress lavoro-correlato?",
 "Chi sono i capi squadra o capi turno? Sono stati nominati preposti per iscritto?",
 "Avete locali interrati o seminterrati dove si lavora?",
 "Chi è il vostro medico competente? Quando sono state fatte le ultime visite?"
],
porsi:`
<p>Il titolare spesso pensa “il DVR ce l'ho, sono a posto”. Non contraddirlo: chiedigli di vederlo e cerca tre cose — <strong>la data</strong>, <strong>le valutazioni specifiche allegate</strong> e <strong>i nomi delle figure</strong>. Quasi sempre manca qualcosa.</p>
<p>Frase utile: <em>“Il documento c'è, ottimo. Vediamo insieme se racconta ancora l'azienda di oggi.”</em></p>`,
caso:{titolo:"Pasticceria con 4 dipendenti", html:`
<p>Il titolare ha un DVR del 2019. Da allora ha comprato un'impastatrice nuova e assunto due ragazze. Lo stress non è mai stato valutato. I due dipendenti più anziani sono capi turno ma nessuno li ha nominati preposti.</p>
<p><strong>Proposta:</strong> aggiornamento DVR A064A (390 €) + DVR stress A004 (550 €) + DVR gestanti A014A (450 €) + nomine preposti (50 € l'una). Totale circa 1.490 € + i corsi preposto (modulo 2). Con l'Assistenza Azienda Sicura Light (650 €/anno) non deve più pensare alle scadenze.</p>`},
video:[
 {t:"Napo in... Valutazione dei rischi on-line", canale:"INAIL", url:"https://www.youtube.com/watch?v=3d9eHukolhA", durata:"circa 2 min", perche:"cos'è la valutazione dei rischi"},
 {t:"Napo in... stop al rumore", canale:"Napo", url:"https://www.youtube.com/watch?v=Q5Ct6zMJe5k", durata:"pochi minuti", perche:"il rischio rumore"},
 {t:"Napo in... alleggerire il carico", canale:"INAIL", url:"https://www.youtube.com/watch?v=56fEI6Cf6Z0", durata:"pochi minuti", perche:"movimentazione manuale carichi"}
],
fonti:[
 {t:"D.Lgs. 81/2008 – testo coordinato (artt. 17, 28, 29, 31-34, 55)", url:"https://tussl.it/"},
 {t:"INL – nota 724/2023 sulla rivalutazione delle sanzioni", url:"https://www.ispettorato.gov.it/files/2023/10/inlavoro.INL-DCVIG.REGISTRO-UFFICIALEU.0000724.30-10-2023.pdf"},
 {t:"Regione Toscana – aree prioritarie radon (DGR 1579/2024)", url:"https://www.certifico.com/sicurezza-lavoro/documenti-sicurezza/individuazione-delle-aree-prioritarie-a-rischio-radon-regione-toscana"}
],
quiz:[
 {q:"Da quando un'azienda è soggetta agli obblighi del D.Lgs. 81/08?", o:["Da 5 dipendenti in su","Da 10 dipendenti in su","Da quando ha almeno un lavoratore","Solo se ha macchinari"], a:2, s:"Basta un lavoratore, anche socio lavoratore o tirocinante."},
 {q:"Quali obblighi il datore di lavoro NON può delegare?", o:["Formazione e visite mediche","Valutazione dei rischi (DVR) e nomina dell'RSPP","Acquisto DPI e estintori","Nomina RLS e preposti"], a:1, s:"Art. 17: DVR e nomina RSPP restano sempre del datore di lavoro."},
 {q:"Un'azienda nuova entro quando deve completare il DVR?", o:["Entro 30 giorni","Entro 90 giorni dall'inizio dell'attività","Entro un anno","Al primo controllo"], a:1, s:"La valutazione va fatta subito, il documento entro 90 giorni."},
 {q:"Dopo un cambiamento importante (nuovo macchinario, nuova lavorazione) il DVR va aggiornato entro:", o:["30 giorni","6 mesi","1 anno","4 anni"], a:0, s:"Art. 29: rielaborazione entro 30 giorni."},
 {q:"Quale valutazione è obbligatoria per tutte le aziende con lavoratori?", o:["Rumore","Radon","Stress lavoro-correlato","ATEX"], a:2, s:"Lo stress lavoro-correlato è richiesto dall'art. 28 per tutti."},
 {q:"Quando un addetto al PC è “videoterminalista”?", o:["Se usa il PC almeno 20 ore a settimana","Se usa il PC tutti i giorni","Se ha più di 2 monitor","Sempre"], a:0, s:"La soglia è 20 ore settimanali, tolte le pause."},
 {q:"Il radon va misurato obbligatoriamente:", o:["In tutti gli uffici","Nei luoghi di lavoro interrati o seminterrati (e al piano terra nelle aree prioritarie)","Solo nelle miniere","Solo se lo chiede l'ASL"], a:1, s:"D.Lgs. 101/2020, livello di riferimento 300 Bq/m³."},
 {q:"Qual è il modo giusto di parlare di sanzioni con il cliente?", o:["Aprire l'incontro con le multe","Non parlarne mai","Citarle come informazione, dopo aver capito cosa gli manca","Esagerarle per chiudere prima"], a:2, s:"La paura non fa firmare. Prima la chiarezza, poi il dato sulla sanzione come conferma."}
]
},

/* ========================= 2 — SCADENZE RICORRENTI ========================= */
{
id:"m2", n:2, pdf:"pdf/SSI-Start-02-Formazione-emergenze-visite.pdf",
titolo:"Formazione, emergenze, visite e impianti", titoloBreve:"Formazione, emergenze, visite",
sottotitolo:"Le cose che scadono e tornano: i corsi del nuovo Accordo Stato-Regioni, primo soccorso, antincendio, sorveglianza sanitaria, estintori e messa a terra.",
durata:"40 minuti",
chips:[["Tutte le attività"],["Il nostro fatturato ricorrente"],["Test: 10 domande"]],
obiettivi:[
 "le durate e le scadenze dei corsi obbligatori secondo l'Accordo del 17 aprile 2025",
 "come si classifica un'azienda per primo soccorso e antincendio",
 "come funziona la sorveglianza sanitaria",
 "cosa serve per estintori, CPI e impianto di messa a terra"
],
blocchi:[
{tipo:"box", stile:"attenzione", h:"La novità più importante del 2025-2026", html:`
<p>L'<strong>Accordo Stato-Regioni del 17 aprile 2025</strong> (in vigore dal 24 maggio 2025) ha riscritto tutta la formazione sulla sicurezza. Il periodo transitorio è finito il <strong>24 maggio 2026</strong>: oggi tutti i corsi seguono le nuove regole.</p>
<ul>
<li><strong>Datore di lavoro:</strong> nuovo obbligo di un corso di <strong>16 ore</strong>, da completare entro il <strong>24 maggio 2027</strong>. Ogni titolare con dipendenti è un cliente potenziale.</li>
<li><strong>Preposti:</strong> il corso passa a <strong>12 ore</strong> e l'aggiornamento diventa <strong>ogni 2 anni</strong> (6 ore). Chi aveva un attestato più vecchio di 2 anni doveva aggiornarsi entro il 24 maggio 2026: molti clienti sono in ritardo.</li>
<li><strong>La formazione dei lavoratori</strong> va fatta all'assunzione (per turismo e somministrazione al massimo entro 30 giorni).</li>
</ul>`},
{tipo:"tabella", h:"I corsi sulla sicurezza oggi", cols:["Chi","Corso","Aggiornamento"], rows:[
 ["Lavoratori","4 ore generale + 4/8/12 ore specifica (rischio basso / medio / alto) = 8/12/16 ore","6 ore ogni 5 anni"],
 ["Preposti","12 ore","6 ore ogni 2 anni"],
 ["Dirigenti","12 ore (+6 ore modulo cantieri)","6 ore ogni 5 anni"],
 ["Datore di lavoro","16 ore (+6 ore per imprese in cantiere)","6 ore ogni 5 anni"],
 ["Datore di lavoro che fa l'RSPP","Corso datore 16 ore + modulo comune 8 ore + moduli di settore","8 ore ogni 5 anni"],
 ["RLS","32 ore","4 ore l'anno (15-50 lavoratori), 8 ore l'anno (oltre 50); sotto 15 decide il contratto collettivo"],
 ["Attrezzature (carrelli, PLE, trattori, gru, movimento terra)","Teoria + pratica, solo in presenza","4 ore ogni 5 anni"],
 ["Ambienti confinati","12 ore","4 ore ogni 5 anni"]
], nota:"Il livello di rischio dei lavoratori dipende dal codice ATECO (tabella in introduzione), ma conta la mansione vera: un impiegato d'ufficio di un'azienda a rischio alto può fare il corso a rischio basso."},
{tipo:"testo", h:"Primo soccorso (DM 388/2003)", html:`
<ul>
<li><strong>Gruppo A:</strong> attività ad alto rischio infortuni, aziende con più di 5 lavoratori in settori INAIL a rischio elevato, aziende agricole con più di 5 lavoratori a tempo indeterminato. Corso <strong>16 ore</strong>.</li>
<li><strong>Gruppo B:</strong> 3 o più lavoratori. Corso <strong>12 ore</strong>.</li>
<li><strong>Gruppo C:</strong> meno di 3 lavoratori. Corso <strong>12 ore</strong>.</li>
<li><strong>Aggiornamento ogni 3 anni</strong> (in pratica 6 ore per il gruppo A, 4 ore per B e C).</li>
<li><strong>Dotazione:</strong> cassetta di pronto soccorso (allegato 1) per i gruppi A e B; pacchetto di medicazione (allegato 2) per il gruppo C.</li>
</ul>`},
{tipo:"testo", h:"Antincendio", html:`
<p><strong>Addetti antincendio (DM 2/9/2021).</strong> Il livello dipende dall'attività:</p>
<ul>
<li><strong>Livello 1</strong> (rischio basso, la maggior parte dei negozi e uffici piccoli): corso 4 ore, aggiornamento 2 ore.</li>
<li><strong>Livello 2</strong> (attività soggette ai Vigili del Fuoco non di livello 3; cantieri con fiamme libere): corso 8 ore, aggiornamento 5 ore.</li>
<li><strong>Livello 3</strong> (es. hotel con più di 100 posti letto, scuole con più di 300 persone, strutture sanitarie, locali di spettacolo con più di 100 posti): corso 16 ore, aggiornamento 8 ore, ed <strong>esame di idoneità dei Vigili del Fuoco</strong>.</li>
<li>Aggiornamento <strong>almeno ogni 5 anni</strong>.</li>
</ul>
<p><strong>Estintori e presidi (DM 1/9/2021 e norma UNI 9994-1).</strong> Controllo <strong>ogni 6 mesi</strong> da un tecnico manutentore qualificato; revisione e collaudo alle scadenze fissate dalla norma per tipo di estintore (le gestisce il nostro ufficio). Porte tagliafuoco, luci di emergenza, idranti e impianti di rilevazione hanno anch'essi controlli semestrali.</p>
<p><strong>CPI (DPR 151/2011).</strong> Alcune attività sono soggette ai controlli dei Vigili del Fuoco (categorie A, B, C): vanno presentate SCIA e progetto, e ogni <strong>5 anni</strong> va attestato il rinnovo della conformità (10 anni per poche attività). Esempi nei moduli di settore.</p>`},
{tipo:"testo", h:"Sorveglianza sanitaria", html:`
<ul>
<li>Serve quando il DVR individua rischi che la richiedono (rumore sopra 85 dB, MMC, chimico, VDT, vibrazioni, notturno…). Il datore nomina il <strong>medico competente</strong>.</li>
<li><strong>Visite:</strong> preventiva (prima di iniziare la mansione), periodica (di norma ogni anno, salvo diversa periodicità decisa dal medico), al cambio mansione, al rientro dopo più di 60 giorni di malattia, su richiesta del lavoratore.</li>
<li><strong>Giudizi:</strong> idoneo, idoneo con prescrizioni, inidoneo temporaneo o permanente. Il lavoratore può ricorrere all'ASL entro 30 giorni.</li>
<li><strong>Alcol e droghe:</strong> per le mansioni a rischio (autisti, carrellisti, edilizia in quota…) alcol zero e test da parte del medico.</li>
<li><strong>Riunione periodica</strong> annuale obbligatoria sopra i 15 lavoratori.</li>
<li><strong>Allegato 3B:</strong> il medico invia ogni anno all'INAIL i dati sanitari aggregati, entro il primo trimestre.</li>
</ul>`},
{tipo:"box", stile:"norma", h:"Impianto di messa a terra (DPR 462/2001)", html:`
<ul>
<li>Alla messa in esercizio l'installatore rilascia la <strong>dichiarazione di conformità</strong> (DM 37/2008); il datore di lavoro la trasmette all'INAIL <strong>entro 30 giorni</strong> tramite il portale <strong>CIVA</strong>.</li>
<li><strong>Verifica periodica ogni 5 anni</strong>, ogni <strong>2 anni</strong> per cantieri, locali medici (anche studi dentistici), ambienti a maggior rischio incendio e luoghi con pericolo di esplosione.</li>
<li>Le verifiche le fanno ASL/ARPA o organismi abilitati. Senza verifica: ammenda da circa 1.420 a 6.830 €.</li>
<li>Il prezzo dipende dai <strong>kW</strong> dell'impianto: chiedi la bolletta elettrica o la dichiarazione di conformità.</li>
</ul>`}
],
proporre:[
 {cod:"F129 / F129F", desc:"Corso Datore di Lavoro 16 ore (e-learning / aula)", quando:"Tutti i titolari con dipendenti, entro il 24/05/2027", prezzo:400},
 {cod:"F018 / F019 / F020", desc:"Corso lavoratori rischio basso 8h / medio 12h / alto 16h", quando:"Nuovi assunti, cambi mansione", prezzo:"180 / 240 / 280"},
 {cod:"C001U", desc:"Corso lavoratori rischio basso e-learning 8h", quando:"Rischio basso, lavoratori dispersi o turnisti", prezzo:180},
 {cod:"F021", desc:"Aggiornamento lavoratori 6 ore (tutti i rischi)", quando:"Ogni 5 anni", prezzo:140},
 {cod:"F014 / F082", desc:"Corso preposto 12 ore / aggiornamento preposto 6 ore", quando:"Capi squadra e capi turno; aggiornamento ogni 2 anni", prezzo:"250 / 180"},
 {cod:"F102 / F084", desc:"Corso dirigenti 12 ore / aggiornamento 6 ore", quando:"Aziende con responsabili di reparto con poteri", prezzo:"350 / 110"},
 {cod:"DLSPP-COM / DLSPP-AGG", desc:"DL-RSPP modulo comune 8h / aggiornamento DL-RSPP 8h", quando:"Il titolare fa da RSPP", prezzo:"280 / 280"},
 {cod:"F011-- / F012 / F013", desc:"Corso RLS 32h / aggiornamento 4h / 8h", quando:"Nuovo RLS; aggiornamento annuale", prezzo:"550 / 160 / 250"},
 {cod:"F001 / F002", desc:"Primo soccorso gruppo A 16h / aggiornamento 6h", quando:"Aziende di gruppo A", prezzo:"260 / 180"},
 {cod:"F003 / F004", desc:"Primo soccorso gruppi B-C 12h / aggiornamento 4h", quando:"Tutte le altre aziende; aggiornamento ogni 3 anni", prezzo:"220 / 150"},
 {cod:"CPS517 / CPS519", desc:"Valigetta pronto soccorso all. 1 / cassetta all. 2", quando:"Gruppi A e B / gruppo C", prezzo:"180 / 70"},
 {cod:"PDM091 / PDM090", desc:"Pacco reintegro all. 1 / all. 2", quando:"Cassetta incompleta o scaduta", prezzo:"95 / 45"},
 {cod:"F103 / F104 / F105", desc:"Corso addetti antincendio livello 1 / 2 / 3", quando:"Nuovi addetti", prezzo:"150 / 220 / 280"},
 {cod:"F106 / F107 / F108", desc:"Aggiornamento antincendio livello 1 / 2 / 3", quando:"Ogni 5 anni", prezzo:"100 / 160 / 270"},
 {cod:"F025 / F026", desc:"Carrelli elevatori 12h / aggiornamento 4h", quando:"Chi usa il muletto", prezzo:"250 / 180"},
 {cod:"F117 / F114", desc:"Corso a domicilio quota fissa 4h / 8h", quando:"Gruppi numerosi in azienda", prezzo:"750 / 1.100"},
 {cod:"F153", desc:"Verifica efficacia della formazione (modulistica)", quando:"Obbligo del nuovo Accordo", prezzo:50},
 {cod:"SS14", desc:"Nomina medico competente", quando:"Rischi che richiedono visite", prezzo:200},
 {cod:"SS02", desc:"Visita medica con certificato di idoneità", quando:"Preventiva e periodica, per lavoratore", prezzo:50},
 {cod:"SS03 / SS04 / SS19", desc:"Spirometria / audiometria / visiotest", quando:"Secondo il protocollo del medico", prezzo:"25 / 25 / 30"},
 {cod:"SS10 / SS18", desc:"Drug test / alcol test", quando:"Mansioni a rischio", prezzo:"50 / 20"},
 {cod:"SS06", desc:"Sopralluogo medico in azienda", quando:"Annuale, previsto dalla legge", prezzo:200},
 {cod:"SME1 … SME10 / SMEX", desc:"Manutenzione estintori, 2 visite l'anno (da 1 a 10 estintori; oltre 10 a estintore)", quando:"Ogni azienda con estintori", prezzo:"45 … 292 / 35 cad."},
 {cod:"LAMPEME / SREI", desc:"Controllo lampade di emergenza / porta tagliafuoco, 2 visite l'anno", quando:"Luci di emergenza e porte REI", prezzo:"12 / 28 cad."},
 {cod:"A002A", desc:"DVR incendio classe A", quando:"Valutazione rischio incendio assente", prezzo:650},
 {cod:"A003A / A003aA", desc:"Piano di emergenza ed evacuazione / prova di evacuazione, classe A", quando:"Oltre 10 addetti o attività con CPI; prova annuale", prezzo:"550 / 350"},
 {cod:"D.2.1", desc:"Denuncia impianto di terra su CIVA", quando:"Impianto mai denunciato", prezzo:450},
 {cod:"VMT1 … VMT5 + VMT1-5UT", desc:"Verifica impianto di terra da 10 a 100 kW + uscita tecnico", quando:"Ogni 5 anni (2 per studi medici, cantieri…)", prezzo:"150 … 500 + 50"}
],
domande:[
 "Il titolare ha già fatto il nuovo corso da datore di lavoro di 16 ore?",
 "Quando hanno fatto l'ultimo corso i suoi capi squadra? Lo sa che ora l'aggiornamento è ogni 2 anni?",
 "Chi sono gli addetti al primo soccorso e all'antincendio? Quando scadono i loro attestati?",
 "La cassetta di pronto soccorso è completa e non scaduta?",
 "Chi vi fa la manutenzione degli estintori? Ogni quanto passa?",
 "Quando è stata fatta l'ultima verifica dell'impianto di terra? Ha il verbale?",
 "Quanti kW ha il contatore? (la bolletta lo dice)"
],
porsi:`
<p>Le scadenze sono il tuo miglior alleato: non devi convincere nessuno, devi solo <strong>ricordare</strong>. Prima di ogni appuntamento con un cliente in database guarda lo scadenzario su Securmars o nella scheda cliente e arriva con l'elenco di cosa scade nei prossimi 6 mesi.</p>
<p>Frase utile: <em>“Le ho portato l'elenco di cosa le scade da qui a giugno. Lo sistemiamo in un unico preventivo così non ci deve più pensare.”</em></p>`,
caso:{titolo:"Negozio di abbigliamento con 6 commesse", html:`
<p>Cliente in database dal 2020. Formazione lavoratori fatta nel 2020 (scade nel 2025: <strong>già scaduta</strong>), una sola addetta antincendio, nessuno al primo soccorso dopo che l'unica addetta si è licenziata, titolare senza corso da datore di lavoro, estintori gestiti da un altro fornitore.</p>
<p><strong>Proposta:</strong> F021 aggiornamento lavoratori × 6 (840 €), F003 primo soccorso × 2 (440 €), F103 antincendio livello 1 × 1 (150 €), F129 datore di lavoro (400 €). Totale 1.830 €. Poi, alla scadenza del contratto dell'altro fornitore, proponi la manutenzione estintori (SME).</p>`},
video:[
 {t:"Napo in... rischio incendio", canale:"INAIL", url:"https://www.youtube.com/watch?v=Aw7s9eevNjg", durata:"pochi minuti", perche:"prevenzione incendi"},
 {t:"Napo in... Chi ben comincia... lavora in sicurezza!", canale:"INAIL", url:"https://www.youtube.com/watch?v=sUs3rwCzD_I", durata:"pochi minuti", perche:"la formazione dei nuovi assunti"}
],
fonti:[
 {t:"Ministero del Lavoro – Accordo Stato-Regioni del 17/04/2025", url:"https://lavoro.gov.it/temi-e-priorita/salute-e-sicurezza/focus/pagine/accordo-stato-regioni-del-17042025-materia-di-formazione"},
 {t:"Gazzetta Ufficiale n. 119 del 24/05/2025 – Accordo 59/CSR", url:"https://www.gazzettaufficiale.it/eli/id/2025/05/24/25A03080/sg"},
 {t:"Vigili del Fuoco – decreti di settembre 2021 (controlli, GSA, minicodice)", url:"https://www.vigilfuoco.it/servizi-le-aziende-e-i-professionisti/formazione-abilitazione-e-aggiornamento-addetti-antincendio-e-docentiformatori/dm-settembre-2021-e-decreto-controlli"},
 {t:"D.Lgs. 81/2008 art. 41 – sorveglianza sanitaria", url:"https://tussl.it/titolo-i-principi-comuni/capo-iii-gestione-della-prevenzione-nei-luoghi-di-lavoro/sezione-v-sorveglianza-sanitaria/art-41"}
],
quiz:[
 {q:"Entro quando il datore di lavoro deve completare il nuovo corso da 16 ore?", o:["Entro il 31/12/2025","Entro il 24/05/2027","Non è obbligatorio","Entro 90 giorni dall'assunzione del primo dipendente"], a:1, s:"L'Accordo del 17/04/2025 dà 24 mesi dall'entrata in vigore: 24 maggio 2027."},
 {q:"Ogni quanto si aggiorna oggi il preposto?", o:["Ogni 5 anni, 6 ore","Ogni 2 anni, 6 ore","Ogni anno, 4 ore","Mai"], a:1, s:"Con il nuovo Accordo l'aggiornamento del preposto è biennale."},
 {q:"Un'azienda a rischio medio: quante ore di formazione per un nuovo lavoratore?", o:["8","12","16","4"], a:1, s:"4 ore generale + 8 ore specifica = 12 ore."},
 {q:"Un'azienda con 2 lavoratori in che gruppo di primo soccorso rientra (se non è in gruppo A)?", o:["Gruppo A","Gruppo B","Gruppo C","Nessuno"], a:2, s:"Meno di 3 lavoratori = gruppo C: corso 12 ore e pacchetto di medicazione."},
 {q:"Ogni quanto si aggiorna il corso di primo soccorso?", o:["Ogni anno","Ogni 3 anni","Ogni 5 anni","Mai"], a:1, s:"DM 388/2003: aggiornamento triennale, almeno per la parte pratica."},
 {q:"Un piccolo negozio a basso rischio incendio: che corso fa l'addetto antincendio?", o:["Livello 1, 4 ore","Livello 2, 8 ore","Livello 3, 16 ore con esame VVF","Nessun corso"], a:0, s:"Rischio basso = livello 1, 4 ore, aggiornamento 2 ore ogni 5 anni."},
 {q:"Ogni quanto vanno controllati gli estintori?", o:["Ogni anno","Ogni 6 mesi","Ogni 3 anni","Solo dopo l'uso"], a:1, s:"Controllo periodico semestrale (UNI 9994-1), da manutentore qualificato."},
 {q:"La verifica dell'impianto di terra di uno studio dentistico si fa ogni:", o:["5 anni","2 anni","10 anni","Non serve"], a:1, s:"I locali medici sono tra i casi con verifica biennale (DPR 462/2001)."},
 {q:"Per fare il preventivo di una verifica di messa a terra quale dato ti serve?", o:["Il numero di dipendenti","I kW dell'impianto (bolletta o dichiarazione di conformità)","Il fatturato","Il codice ATECO"], a:1, s:"Il listino VMT è a scaglioni di kW."},
 {q:"Di norma ogni quanto si fa la visita medica periodica?", o:["Ogni anno, salvo diversa periodicità decisa dal medico","Ogni 5 anni","Solo all'assunzione","Ogni 6 mesi"], a:0, s:"Art. 41: di norma annuale, ma il medico competente può stabilire diversamente."}
]
},

/* ========================= 3 — HACCP ========================= */
{
id:"m3", n:3, pdf:"pdf/SSI-Start-03-HACCP-e-igiene-alimenti.pdf",
titolo:"HACCP e igiene degli alimenti", titoloBreve:"HACCP e igiene alimenti",
sottotitolo:"Tutto quello che serve a chi produce, vende o serve cibo: piano di autocontrollo, formazione degli alimentaristi in Toscana, allergeni, analisi e acqua.",
durata:"35 minuti",
chips:[["Bar, ristoranti, negozi alimentari, produzione, agriturismi, mense"],["Test: 8 domande"]],
obiettivi:[
 "cosa chiede il Regolamento 852/2004 e cosa deve contenere il piano HACCP",
 "i corsi alimentaristi previsti dalla nuova delibera toscana 540/2024",
 "come funzionano allergeni, analisi e acqua da pozzo",
 "le sanzioni HACCP e allergeni"
],
blocchi:[
{tipo:"testo", h:"Chi deve fare l'HACCP", html:`
<p>Chiunque produca, trasformi, conservi, trasporti, venda o somministri alimenti è un <strong>OSA (operatore del settore alimentare)</strong>. Il <strong>Regolamento CE 852/2004</strong> gli chiede tre cose:</p>
<ul>
<li><strong>Registrazione</strong> dell'attività (notifica sanitaria / SCIA al SUAP) prima di iniziare (art. 6).</li>
<li>Un <strong>piano di autocontrollo</strong> basato sui principi HACCP (art. 5): analisi dei pericoli, punti critici, limiti, controlli, azioni correttive, registrazioni.</li>
<li>Personale <strong>formato</strong> in proporzione alla mansione (allegato II, capitolo XII).</li>
</ul>
<p>Dal 2021 (Reg. UE 2021/382) il piano deve dimostrare anche una <strong>cultura della sicurezza alimentare</strong>, gestire gli <strong>allergeni</strong> nella pulizia delle attrezzature e regolare la <strong>donazione</strong> delle eccedenze.</p>`},
{tipo:"tabella", h:"Formazione alimentaristi in Toscana (DGR 540/2024)", cols:["Chi","Percorso","Durata"], rows:[
 ["Addetto livello 1: lavapiatti, pulizie, rider e autisti, sola somministrazione, distributori automatici","Modulo A","2 ore"],
 ["Addetto livello 2: cuochi, pasticceri, panettieri, baristi, macellai, casari","Modulo A + Modulo B","2 + 4 ore"],
 ["Titolare, responsabile del piano HACCP, preposto","Modulo A + Modulo C (due unità da 4 ore)","2 + 8 ore"],
 ["Aggiornamento (titolari, responsabili, addetti livello 2)","Ogni 5 anni","almeno 3 ore"],
 ["Tutti","Addestramento sul posto di lavoro, documentato nel piano HACCP","almeno una volta l'anno"]
], nota:"La DGR 540/2024 ha sostituito la vecchia 559/2008. Chi era formato con le vecchie regole deve completare l'unità 2 del Modulo C (4 ore): molti titolari non lo sanno."},
{tipo:"box", stile:"norma", h:"Allergeni", html:`
<ul>
<li>I <strong>14 allergeni</strong> dell'allegato II del Reg. UE 1169/2011 (glutine, crostacei, uova, pesce, arachidi, soia, latte, frutta a guscio, sedano, senape, sesamo, solfiti, lupini, molluschi).</li>
<li><strong>Nella somministrazione</strong> (bar, ristoranti, mense) vanno indicati per ogni piatto prima che sia servito: menù, registro, cartello o sistema digitale. Se si rimanda al personale, l'informazione deve comunque esistere per iscritto.</li>
<li><strong>Prodotti sfusi:</strong> cartello con denominazione, ingredienti e allergeni evidenziati.</li>
<li><strong>Sanzioni (D.Lgs. 231/2017):</strong> allergeni omessi da 3.000 a 24.000 €; indicati in modo non conforme da 1.000 a 8.000 €. Riduzione fino a un terzo per le microimprese.</li>
</ul>`},
{tipo:"testo", h:"Analisi, acqua e materiali", html:`
<ul>
<li><strong>Analisi microbiologiche (Reg. 2073/2005):</strong> è l'operatore che deve verificare i criteri microbiologici dei suoi prodotti, con la frequenza stabilita nel suo piano. Chi produce cibi pronti a rischio Listeria deve campionare anche superfici e attrezzature (tamponi).</li>
<li><strong>Acqua da pozzo (D.Lgs. 18/2023, corretto dal D.Lgs. 102/2025):</strong> l'impresa alimentare che usa acqua di un pozzo proprio è equiparata a un gestore idrico: l'acqua deve essere potabile e controllata.</li>
<li><strong>MOCA (Reg. 1935/2004):</strong> contenitori, pellicole, vaschette a contatto con il cibo devono avere la dichiarazione di conformità del fornitore.</li>
<li><strong>Etichette:</strong> chi produce e confeziona deve avere etichette corrette, compresa la dichiarazione nutrizionale quando richiesta.</li>
</ul>`},
{tipo:"tabella", h:"Sanzioni HACCP (D.Lgs. 193/2007, art. 6)", cols:["Violazione","Sanzione"], rows:[
 ["Attività non registrata","1.500 – 9.000 €"],
 ["Registrazione non aggiornata","500 – 3.000 €"],
 ["Requisiti di igiene non rispettati (allegato II, compresa la formazione)","500 – 3.000 €"],
 ["Piano HACCP non predisposto","1.000 – 6.000 €"],
 ["Piano HACCP non applicato o applicato male","1.000 – 6.000 €"],
 ["Mancato adeguamento entro il termine dato dall'ASL","1.000 – 6.000 €"]
]}
],
proporre:[
 {cod:"H001 / H002 / H003", desc:"Piano di autocontrollo HACCP classe A / B / C", quando:"Nuova attività o piano assente", prezzo:"550 / 650 / 900"},
 {cod:"H001A / H002B / H003C", desc:"Aggiornamento piano HACCP classe A / B / C", quando:"Piano vecchio, cambiato menù o attrezzature", prezzo:"350 / 450 / 580"},
 {cod:"H015", desc:"Integrazione piano: allergeni e MOCA", quando:"Piano senza gestione allergeni (obbligo 2021/382)", prezzo:420},
 {cod:"H019", desc:"Consulenza etichette e libro ingredienti", quando:"Chi produce e vende confezionato o sfuso", prezzo:450},
 {cod:"H022", desc:"Corso HACCP addetto livello 1 (Modulo A) 2h", quando:"Lavapiatti, camerieri, addetti pulizie", prezzo:90},
 {cod:"H023", desc:"Corso HACCP addetto livello 2 (Modulo A + B) 2h+4h", quando:"Cuochi, baristi, pasticceri, banconisti", prezzo:200},
 {cod:"H025", desc:"Corso HACCP titolari, responsabili e preposti (Modulo A + C) 10h", quando:"Titolare o responsabile del piano", prezzo:280},
 {cod:"H027", desc:"Integrazione Modulo C unità 2 (4h)", quando:"Titolari formati con la vecchia DGR 559/2008", prezzo:90},
 {cod:"H024 / H026", desc:"Aggiornamento livello 2 (Modulo B) 3h / aggiornamento responsabili (Modulo C) 3h", quando:"Ogni 5 anni", prezzo:"120 / 120"},
 {cod:"H012", desc:"Addestramento annuale degli addetti 4h", quando:"Obbligo annuale previsto dalla DGR 540/2024", prezzo:250},
 {cod:"TB001 / TB002 / TB003", desc:"Tamponi superfici: 1 / 2 / 4 tamponi", quando:"Verifica pulizie, previsti dal piano", prezzo:"40 / 60 / 140"},
 {cod:"TB010 / TB011", desc:"Analisi alimento cotto / crudo", quando:"Verifica dei prodotti previsti dal piano", prezzo:"100 / 130"},
 {cod:"TE001- / TE006BIS", desc:"Verifica acqua di approvvigionamento (pozzo) / analisi potabilità", quando:"Attività con pozzo o cisterna", prezzo:"200 / 180"},
 {cod:"A026", desc:"SCIA alimentare (oneri a parte, A026ONERI)", quando:"Apertura o subentro", prezzo:750}
],
domande:[
 "Il piano HACCP di quando è? Da allora avete cambiato menù, attrezzature o locali?",
 "Nel piano c'è la gestione degli allergeni? Come lo comunicate ai clienti?",
 "I suoi cuochi e baristi hanno l'attestato? Con la vecchia delibera o con la nuova?",
 "Lei come titolare ha fatto il corso da responsabile? Quando?",
 "Fate l'addestramento annuale del personale? È scritto da qualche parte?",
 "Fate tamponi o analisi? Ogni quanto?",
 "Usate acqua dell'acquedotto o di un pozzo?",
 "Avete le dichiarazioni di conformità di vaschette e pellicole?"
],
porsi:`
<p>Il ristoratore ha paura dell'ASL più che dell'ispettorato del lavoro: l'ASL entra davvero, spesso dopo una segnalazione. Non serve spaventarlo: chiedigli <strong>com'è andato l'ultimo controllo</strong> e cosa gli hanno chiesto. Da lì parte la proposta.</p>
<p>Frase utile: <em>“Se domani entra l'ASL e chiede il registro allergeni e l'attestato del cuoco, cosa le facciamo vedere?”</em></p>`,
caso:{titolo:"Pizzeria da asporto con 3 dipendenti", html:`
<p>Piano HACCP del 2017 fatto da un altro consulente, nessuna gestione allergeni, il pizzaiolo ha un attestato del 2016, il titolare ne ha uno del 2012 con la vecchia delibera. Nessun tampone mai fatto.</p>
<p><strong>Proposta:</strong> nuovo piano HACCP H001 (550 €) + integrazione allergeni H015 (420 €) + H023 per pizzaiolo e aiuto (400 €) + H025 per il titolare (280 €) + addestramento annuale H012 (250 €) + 2 tamponi TB002 (60 €). Totale 1.960 €. Con l'Assistenza Azienda Sicura il cliente non deve più pensare a scadenze e aggiornamenti.</p>`},
video:[],
fonti:[
 {t:"Regione Toscana – DGR 540 del 6/5/2024 formazione alimentaristi", url:"https://frareg.com/cms/wp-content/uploads/2024/08/Delibera_Toscana_540_06052024.pdf"},
 {t:"FIPE – allergeni e sanzioni (D.Lgs. 231/2017)", url:"https://fipe.it/wp-content/uploads/2021/12/allergici_sanzioni_web.pdf"},
 {t:"D.Lgs. 193/2007 art. 6 – sanzioni igiene alimenti", url:"https://def.finanze.it/DocTribFrontend/executePrintArticolo.do?id=%7B66E40508-4D86-4D85-A31D-9C077497D2BA%7D&codiceOrdinamento=200000600000000&articolo=Articolo+6"}
],
quiz:[
 {q:"Quale regolamento obbliga gli operatori alimentari ad avere un piano basato sui principi HACCP?", o:["Reg. 1169/2011","Reg. CE 852/2004","D.Lgs. 81/2008","DPR 151/2011"], a:1, s:"Art. 5 del Reg. 852/2004."},
 {q:"In Toscana un cuoco che corso alimentarista deve fare?", o:["Solo Modulo A (2 ore)","Modulo A + B (2+4 ore)","Modulo A + C (2+8 ore)","Nessuno"], a:1, s:"I cuochi sono addetti di livello 2: Modulo A + Modulo B."},
 {q:"Il titolare responsabile del piano HACCP che percorso deve fare?", o:["Modulo A","Modulo A + B","Modulo A + C (10 ore)","Corso da 32 ore"], a:2, s:"Titolari, responsabili e preposti: Modulo A + Modulo C, 2+8 ore."},
 {q:"Ogni quanto si aggiorna la formazione alimentarista (livello 2 e responsabili)?", o:["Ogni anno","Ogni 3 anni","Ogni 5 anni, almeno 3 ore","Mai"], a:2, s:"DGR 540/2024: aggiornamento quinquennale. In più c'è l'addestramento annuale sul posto."},
 {q:"Un titolare formato nel 2015 con la vecchia delibera 559/2008 cosa deve fare?", o:["Niente, è valido per sempre","Completare l'unità 2 del Modulo C (4 ore)","Rifare tutto da zero","Un corso antincendio"], a:1, s:"È il regime transitorio della DGR 540/2024. Codice H027."},
 {q:"In un ristorante, come vanno comunicati gli allergeni?", o:["Solo a voce se il cliente chiede","Per ogni piatto, per iscritto (menù, registro, cartello o digitale) prima del servizio","Non serve nella ristorazione","Solo nei prodotti confezionati"], a:1, s:"D.Lgs. 231/2017 art. 19: indicazione per ogni piatto; se si rimanda al personale, deve esistere un documento scritto."},
 {q:"Sanzione per allergeni omessi:", o:["100 – 500 €","3.000 – 24.000 €","Solo un richiamo","50.000 €"], a:1, s:"D.Lgs. 231/2017 art. 23."},
 {q:"Un agriturismo usa l'acqua del suo pozzo per la cucina. Cosa proponi?", o:["Niente, il pozzo è privato","Verifica acqua di approvvigionamento / analisi di potabilità","Solo il corso HACCP","Un DVR rumore"], a:1, s:"Chi usa acqua propria nella produzione alimentare deve garantirne la potabilità (D.Lgs. 18/2023)."}
]
},

/* ========================= 4 — RISTORAZIONE ========================= */
{
id:"m4", n:4, pdf:"pdf/SSI-Start-04-Ristorazione-e-bar.pdf",
titolo:"Ristoranti, bar, pizzerie e mense", titoloBreve:"Ristorazione e bar",
sottotitolo:"Uno dei settori più presenti nel nostro portafoglio: tanti obblighi, tanti dipendenti stagionali, tanto ricambio. Ogni assunzione è una vendita.",
durata:"25 minuti",
chips:[["ATECO 56"],["Rischio basso (formazione)","r-basso"],["Test: 8 domande"]],
obiettivi:[
 "il pacchetto completo di obblighi di un locale di somministrazione",
 "quando una cucina o un locale diventa soggetto ai Vigili del Fuoco",
 "le domande che fanno emergere le carenze",
 "come costruire un preventivo completo"
],
blocchi:[
{tipo:"testo", h:"Il profilo", html:`
<p>Bar, ristoranti, pizzerie, gelaterie, catering e mense (ATECO 56) sono <strong>rischio basso</strong> per la formazione dei lavoratori, ma sommano obblighi di sicurezza e di igiene. Hanno spesso <strong>stagionali e turn-over</strong>: ogni nuovo assunto ha bisogno di corso sicurezza (entro 30 giorni nel settore della somministrazione), corso HACCP e spesso visita medica.</p>
<p>Tra i nostri clienti con codice ATECO registrato, la ristorazione è il secondo settore per numero dopo l'agricoltura.</p>`},
{tipo:"tabella", h:"La lista completa di un locale", cols:["Area","Cosa serve","Modulo"], rows:[
 ["Sicurezza","DVR con stress, chimico (detergenti), MMC, gestanti; nomine; RSPP","1"],
 ["Formazione","Lavoratori 8 ore, datore di lavoro 16 ore, preposto (capo sala, capo cucina), addetti emergenze","2"],
 ["Emergenze","Primo soccorso, antincendio livello 1 o 2, cassetta, estintori ogni 6 mesi","2"],
 ["Sorveglianza sanitaria","Se il DVR la richiede (MMC, calore, turni notturni)","2"],
 ["Igiene alimenti","Registrazione, piano HACCP, allergeni, corsi alimentaristi, addestramento annuale, tamponi","3"],
 ["Antincendio VVF","CPI se la cucina supera i 116 kW o se è un locale di intrattenimento oltre 100 persone o 200 m²","sotto"],
 ["Impianti","Verifica messa a terra ogni 5 anni","2"],
 ["Acqua","Ristorazione pubblica e collettiva è tra gli edifici “prioritari” per la gestione del rischio Legionella (D.Lgs. 18/2023)","sotto"]
]},
{tipo:"box", stile:"norma", h:"Quando arrivano i Vigili del Fuoco", html:`
<ul>
<li><strong>Attività 74 (DPR 151/2011):</strong> impianti di produzione di calore oltre <strong>116 kW</strong>. Nelle cucine si sommano fuochi, forni e friggitrici a gas.</li>
<li><strong>Attività 65:</strong> locali di intrattenimento e spettacolo con <strong>più di 100 persone</strong> o più di <strong>200 m²</strong>. Un ristorante che fa solo cena di solito non rientra; un locale che organizza serate con musica, DJ o spettacoli può rientrare.</li>
<li>Per una serata o un evento c'è la pratica di pubblico spettacolo (codice PubSp).</li>
</ul>`},
{tipo:"box", stile:"attenzione", h:"Legionella", html:`
<p>Il D.Lgs. 18/2023 mette la ristorazione pubblica e collettiva tra gli edifici prioritari: il gestore dell'impianto idrico interno deve valutare il rischio Legionella e adottare un piano di autocontrollo, con caricamento sul portale nazionale entro il 12 gennaio 2029. Codice SSI: DVR Legionella A036.</p>`}
],
proporre:[
 {cod:"A001A + A004", desc:"DVR classe A + DVR stress", quando:"Base per ogni locale", prezzo:"550 + 550"},
 {cod:"A005A", desc:"DVR chimico classe A (detergenti, sgrassatori, igienizzanti)", quando:"Sempre in cucina", prezzo:550},
 {cod:"F018", desc:"Corso lavoratori rischio basso 8h", quando:"Ogni nuovo assunto, anche stagionale", prezzo:180},
 {cod:"H022 / H023 / H025", desc:"Corsi HACCP livello 1 / livello 2 / responsabili", quando:"Camerieri / cuochi e baristi / titolare", prezzo:"90 / 200 / 280"},
 {cod:"H001 + H015", desc:"Piano HACCP classe A + integrazione allergeni e MOCA", quando:"Piano assente o senza allergeni", prezzo:"550 + 420"},
 {cod:"H012", desc:"Addestramento annuale addetti 4h", quando:"Ogni anno", prezzo:250},
 {cod:"TB002 / TB010", desc:"2 tamponi / analisi alimento cotto", quando:"Verifiche previste dal piano", prezzo:"60 / 100"},
 {cod:"F103 / F104", desc:"Antincendio livello 1 / livello 2", quando:"Livello 2 se l'attività è soggetta VVF", prezzo:"150 / 220"},
 {cod:"F003", desc:"Primo soccorso gruppo B 12h", quando:"3 o più lavoratori", prezzo:220},
 {cod:"A036", desc:"DVR Legionella classe A e B", quando:"Ristorazione, mense, hotel con ristorante", prezzo:680},
 {cod:"CPIVERNORTEC", desc:"Verifica di rispondenza alla normativa verticale antincendio", quando:"Dubbio su attività 74 o 65", prezzo:400},
 {cod:"PubSp", desc:"Relazione tecnica evento – pratica di pubblico spettacolo", quando:"Serate, eventi, concerti", prezzo:750}
],
domande:[
 "Quanti dipendenti avete d'inverno e quanti in estate?",
 "Chi assume i nuovi fa subito il corso sicurezza e HACCP? Entro quanti giorni?",
 "Quanti fuochi, forni e friggitrici avete a gas? Sapete la potenza totale?",
 "Fate serate con musica, DJ o eventi?",
 "Come comunicate gli allergeni ai clienti?",
 "Com'è andato l'ultimo controllo ASL? Cosa vi hanno chiesto?",
 "Chi è il capo cucina? È stato nominato preposto?"
],
porsi:`
<p>Il ristoratore ha poco tempo e lo trovi solo in certi orari: <strong>mai tra le 12 e le 14:30 né la sera</strong>. Metà mattina o metà pomeriggio. Sii concreto e veloce, porta un foglio con la lista dei suoi obblighi già spuntata.</p>
<p>Leva forte: <strong>i nuovi assunti</strong>. Proponi un accordo semplice: “ogni volta che assumi, mi mandi un messaggio e in una settimana è formato”.</p>`,
caso:{titolo:"Ristorante con 8 dipendenti e serate musicali", html:`
<p>Cucina con 6 fuochi, forno e 2 friggitrici a gas. Il sabato fanno musica dal vivo con circa 120 persone. DVR del 2018 senza stress e chimico, nessun piano allergeni, 3 camerieri stagionali senza alcun corso.</p>
<p><strong>Proposta:</strong> verifica normativa antincendio CPIVERNORTEC (400 €) per capire se rientrano nelle attività 74 e 65 + DVR A001A + A004 + A005A (1.650 €) + F018 × 3 (540 €) + H022 × 3 (270 €) + H015 integrazione allergeni (420 €). Totale 3.280 €. Poi i corsi antincendio di livello corretto e il DVR Legionella.</p>`},
video:[
 {t:"INAIL – Rischio chimico", canale:"INAIL", url:"https://www.youtube.com/watch?v=2dm0kxZOKG4", durata:"pochi minuti", perche:"il rischio chimico nel terziario e nel turismo"},
 {t:"Napo in... rischio incendio", canale:"INAIL", url:"https://www.youtube.com/watch?v=Aw7s9eevNjg", durata:"pochi minuti", perche:"incendio"}
],
fonti:[
 {t:"Prevenzione incendi – attività soggette e non soggette (FAQ)", url:"https://certifico.com/prevenzione-incendi/f-a-q-di-prevenzione-incendi-attivita-soggette-e-attivita-non-soggette"},
 {t:"D.Lgs. 18/2023 – edifici prioritari e Legionella", url:"https://www.foodtimes.eu/it/sistemi-alimentari/qualita-delle-acque-i-doveri-dei-gestori-di-strutture-pubbliche-e-private/"}
],
quiz:[
 {q:"Per la formazione dei lavoratori, un ristorante è a rischio:", o:["Basso","Medio","Alto","Dipende dal fatturato"], a:0, s:"ATECO 56 = rischio basso: 8 ore."},
 {q:"Entro quanto deve essere formato un nuovo assunto nella somministrazione?", o:["60 giorni","30 giorni al massimo","1 anno","Non serve se stagionale"], a:1, s:"Dal 2025 per turismo e somministrazione il limite è 30 giorni; negli altri settori la formazione va fatta all'assunzione."},
 {q:"Una cucina diventa attività soggetta VVF (attività 74) quando:", o:["Ha più di 5 dipendenti","Supera 116 kW di potenza degli apparecchi a gas","Ha più di 50 coperti","Sempre"], a:1, s:"Attività 74 del DPR 151/2011: impianti di produzione di calore oltre 116 kW."},
 {q:"Un locale con serate musicali per 150 persone:", o:["Non ha obblighi antincendio particolari","Può rientrare nell'attività 65 (intrattenimento oltre 100 persone)","Serve solo la SIAE","Serve solo il corso HACCP"], a:1, s:"Locali di intrattenimento oltre 100 persone o 200 m² sono soggetti ai VVF."},
 {q:"Il cameriere che serve ai tavoli che corso HACCP fa?", o:["Livello 1 (Modulo A, 2 ore)","Livello 2 (A+B)","Responsabile (A+C)","Nessuno"], a:0, s:"Chi fa sola somministrazione è addetto di livello 1."},
 {q:"Quale DVR specifico serve praticamente sempre in cucina?", o:["Rumore","Chimico (detergenti e sgrassatori)","Campi elettromagnetici","ATEX"], a:1, s:"I prodotti di pulizia hanno schede di sicurezza: rischio chimico da valutare."},
 {q:"Qual è il momento migliore per incontrare un ristoratore?", o:["Alle 13","Alle 20:30","Metà mattina o metà pomeriggio","Sabato sera"], a:2, s:"Mai durante i servizi."},
 {q:"Qual è la leva commerciale più forte nella ristorazione?", o:["Le multe dell'ispettorato","Il turn-over: ogni nuovo assunto ha bisogno di corsi","Il prezzo più basso","Il radon"], a:1, s:"Formazione dei nuovi assunti, HACCP e visite: vendite ricorrenti a ogni stagione."}
]
},

/* ========================= 5 — RICETTIVO ========================= */
{
id:"m5", n:5, pdf:"pdf/SSI-Start-05-Hotel-agriturismi-piscine.pdf",
titolo:"Hotel, agriturismi, B&B e piscine", titoloBreve:"Ricettivo e piscine",
sottotitolo:"La Toscana vive di turismo. Posti letto, piscine, colazioni e acqua calda portano obblighi specifici che molti gestori non conoscono.",
durata:"25 minuti",
chips:[["ATECO 55 e agriturismi"],["Rischio basso (formazione)","r-basso"],["Test: 8 domande"]],
obiettivi:[
 "quando una struttura ricettiva è soggetta al CPI",
 "gli obblighi della legge toscana sulle piscine",
 "il rischio Legionella nelle strutture ricettive",
 "cosa proporre a una struttura stagionale"
],
blocchi:[
{tipo:"testo", h:"Il profilo", html:`
<p>Alberghi, B&B, affittacamere, campeggi, case vacanza (ATECO 55) e agriturismi. Per la formazione sono <strong>rischio basso</strong>. Hanno personale stagionale (reception, pulizie, cucina, manutenzione) e quasi sempre una <strong>piscina</strong>. Tra i nostri clienti sono circa trenta, ma molti agriturismi sono registrati con il codice dell'agricoltura.</p>`},
{tipo:"box", stile:"norma", h:"Antincendio: la soglia dei 25 posti letto", html:`
<ul>
<li><strong>Attività 66 del DPR 151/2011:</strong> alberghi, B&B, <strong>alloggi agrituristici</strong>, case per ferie con <strong>più di 25 posti letto</strong>; campeggi oltre 400 persone.</li>
<li>Categoria A fino a 50 posti letto, B da 51 a 100, C oltre 100.</li>
<li>Regole tecniche: DM 9/4/1994, DM 14/7/2015 per le strutture da 26 a 50 posti letto, oppure la regola tecnica verticale del 2016.</li>
<li>Oltre <strong>100 posti letto</strong> gli addetti antincendio fanno il corso di <strong>livello 3</strong> (16 ore) con esame dei Vigili del Fuoco.</li>
<li>Ogni 5 anni va attestato il rinnovo della conformità antincendio.</li>
</ul>
<p>Domanda chiave: <em>“Quanti posti letto avete in tutto, contando anche gli appartamenti e i divani letto?”</em></p>`},
{tipo:"box", stile:"norma", h:"Piscine in Toscana (LR 8/2006 e regolamento 23/R/2010)", html:`
<ul>
<li>Servono due figure: il <strong>responsabile della piscina</strong> e l'<strong>addetto agli impianti tecnologici</strong>.</li>
<li>Nelle piscine riservate agli ospiti di hotel, campeggi e agriturismi l'<strong>assistente bagnanti non è obbligatorio</strong>, ma servono informazione agli utenti e protezione dall'accesso dei minori di 14 anni non accompagnati.</li>
<li>Per le piscine ad uso collettivo serve la <strong>SCIA al SUAP</strong>: senza, sanzione da 500 a 6.000 € e chiusura.</li>
<li>Obbligatori il <strong>documento di valutazione del rischio</strong> della piscina, gli autocontrolli, il registro delle manutenzioni e dei controlli dell'acqua, la lettura giornaliera del contatore. I registri si conservano 2 anni.</li>
</ul>`},
{tipo:"box", stile:"attenzione", h:"Legionella", html:`
<p>Le strutture ricettive sono il primo esempio di rischio Legionella: docce poco usate, boiler, acqua calda stagnante, idromassaggi. Le Linee guida nazionali del 2015 chiedono valutazione e gestione del rischio; il D.Lgs. 18/2023 mette alberghi e campeggi tra gli edifici prioritari, con piano di autocontrollo da caricare sul portale nazionale entro il 12 gennaio 2029.</p>`},
{tipo:"testo", h:"Il resto della lista", html:`
<ul>
<li>Tutto il kit base (moduli 1 e 2): DVR con stress, chimico per le pulizie, MMC per le cameriere ai piani.</li>
<li>Se c'è colazione o ristorazione: HACCP completo (modulo 3).</li>
<li>Se c'è acqua da pozzo: analisi di potabilità.</li>
<li>Formazione degli stagionali entro 30 giorni dall'assunzione (settore turistico-ricettivo).</li>
</ul>`}
],
proporre:[
 {cod:"A022", desc:"Piscine: documento di valutazione del rischio, manuale di autocontrollo, registro dei controlli e regolamento", quando:"Ogni struttura con piscina", prezzo:750},
 {cod:"A080", desc:"Aggiornamento DVR piscine", quando:"Documento piscina esistente da aggiornare", prezzo:450},
 {cod:"P006 / P005", desc:"Incarico esterno responsabile / addetto piscina", quando:"Il gestore non vuole assumersi la responsabilità", prezzo:null},
 {cod:"A036", desc:"DVR Legionella classe A e B", quando:"Tutte le strutture ricettive", prezzo:680},
 {cod:"A065", desc:"Aggiornamento DVR Legionella", quando:"Valutazione esistente", prezzo:450},
 {cod:"TE003BIS-", desc:"Analisi Legionella (per campione)", quando:"Campionamenti previsti dal piano", prezzo:55},
 {cod:"CPICHECKUP", desc:"Check-up incendio", quando:"Strutture vicine o oltre i 25 posti letto", prezzo:null},
 {cod:"CPIRINCONF", desc:"Rinnovo conformità antincendio", quando:"Ogni 5 anni per chi ha il CPI", prezzo:null},
 {cod:"F104 / F105", desc:"Antincendio livello 2 / livello 3", quando:"Strutture soggette VVF / oltre 100 posti letto", prezzo:"220 / 280"},
 {cod:"A003A + A003aA", desc:"Piano di emergenza + prova di evacuazione", quando:"Strutture con CPI", prezzo:"550 + 350"},
 {cod:"A010A", desc:"DVR movimentazione manuale carichi", quando:"Personale ai piani e lavanderia", prezzo:600},
 {cod:"H001 / H022", desc:"Piano HACCP classe A / corso HACCP livello 1", quando:"Se si serve la colazione", prezzo:"550 / 90"},
 {cod:"TE006BIS", desc:"Analisi di potabilità", quando:"Acqua da pozzo", prezzo:180}
],
domande:[
 "Quanti posti letto avete in totale, compresi appartamenti e letti aggiunti?",
 "Avete il CPI? Quando avete fatto l'ultimo rinnovo?",
 "La piscina ha il responsabile nominato? Dov'è il documento di valutazione del rischio?",
 "Chi fa le analisi dell'acqua della piscina e chi compila i registri?",
 "Avete mai fatto la valutazione o le analisi Legionella? Soprattutto sulle docce delle camere poco usate?",
 "Servite colazione o cene? Chi la prepara?",
 "Quanti stagionali assumete e in che periodo?"
],
porsi:`
<p>Il gestore di una struttura ricettiva pensa alle recensioni. Parla di <strong>ospiti e reputazione</strong>: un caso di Legionella o un incidente in piscina finiscono sui giornali e su TripAdvisor prima che in tribunale.</p>
<p>Il momento giusto è <strong>l'autunno e l'inverno</strong>, quando la struttura è chiusa o lavora poco e si prepara la stagione: proponi un pacchetto “pronti per la stagione” da chiudere entro marzo.</p>`,
caso:{titolo:"Agriturismo con 32 posti letto e piscina", html:`
<p>Agriturismo in Chianti, 32 posti letto tra camere e appartamenti, piscina per gli ospiti, colazione servita, 4 stagionali da aprile a ottobre. Nessuna pratica antincendio (“siamo un agriturismo”), piscina senza documentazione, acqua da pozzo per la cucina.</p>
<p><strong>Proposta:</strong> check-up incendio CPICHECKUP (a preventivo): con oltre 25 posti letto è attività 66 categoria A. Poi A022 piscina (750 €), A036 Legionella (680 €), TE006BIS potabilità (180 €), H001 HACCP (550 €). A marzo: formazione degli stagionali.</p>`},
video:[
 {t:"Napo in... rischio incendio", canale:"INAIL", url:"https://www.youtube.com/watch?v=Aw7s9eevNjg", durata:"pochi minuti", perche:"incendio e vie di esodo"}
],
fonti:[
 {t:"Prevenzione incendi nelle strutture ricettive (Ordine Ingegneri)", url:"https://benevento.ordingegneri.it/wp-content/uploads/sites/74/2026/03/Prevenzione-incendi-Alberghi-slide-ppt-finale.pdf"},
 {t:"Legge Regione Toscana 8/2006 sulle piscine", url:"https://www.assopiscine.it/wp-content/uploads/2020/12/LR-TOSCANA-1.pdf"},
 {t:"Linee guida Legionella 2015 (Conferenza Stato-Regioni)", url:"https://www.unipr.it/sites/default/files/2024-07/Accordo%20Stato%20Regioni%2007%20maggio%202015.pdf"}
],
quiz:[
 {q:"Oltre quanti posti letto una struttura ricettiva è soggetta ai Vigili del Fuoco (attività 66)?", o:["10","25","50","100"], a:1, s:"Più di 25 posti letto, compresi gli alloggi agrituristici."},
 {q:"Un agriturismo con 40 posti letto:", o:["È escluso perché agricolo","È attività 66 categoria A","È categoria C","Ha solo l'obbligo degli estintori"], a:1, s:"Gli alloggi agrituristici rientrano. Fino a 50 posti letto è categoria A."},
 {q:"Oltre 100 posti letto, gli addetti antincendio:", o:["Fanno il livello 1","Fanno il livello 3 (16 ore) con esame VVF","Non servono","Fanno il livello 2 online"], a:1, s:"Gli alberghi oltre 100 posti letto sono nell'allegato IV del DM 2/9/2021."},
 {q:"In una piscina riservata agli ospiti di un agriturismo, l'assistente bagnanti:", o:["È sempre obbligatorio","Non è obbligatorio, ma servono informazione e protezione dei minori di 14 anni","È obbligatorio solo d'estate","Lo sceglie il Comune"], a:1, s:"LR Toscana 8/2006, art. 12."},
 {q:"Quali figure servono sempre per una piscina in Toscana?", o:["Medico e infermiere","Responsabile della piscina e addetto agli impianti tecnologici","Solo il bagnino","Nessuna"], a:1, s:"Artt. 11 e 12 della LR 8/2006."},
 {q:"Perché le strutture ricettive sono esposte al rischio Legionella?", o:["Per i cibi crudi","Per l'acqua calda stagnante in docce poco usate, boiler e idromassaggi","Per il rumore","Non lo sono"], a:1, s:"Le Linee guida 2015 le indicano come primo ambito di attenzione."},
 {q:"Qual è il periodo migliore per vendere a una struttura stagionale?", o:["Agosto","Autunno-inverno, preparando la stagione","Il giorno di apertura","Mai"], a:1, s:"Fuori stagione il gestore ha tempo e pianifica."},
 {q:"Quale codice SSI copre documento di rischio, manuale di autocontrollo e registro della piscina?", o:["A036","A022","H001","A001A"], a:1, s:"A022, 750 €."}
]
},

/* ========================= 6 — AGRICOLTURA ========================= */
{
id:"m6", n:6, pdf:"pdf/SSI-Start-06-Agricoltura-cantine-frantoi.pdf",
titolo:"Aziende agricole, cantine e frantoi", titoloBreve:"Agricoltura e cantine",
sottotitolo:"Il primo settore tra i nostri clienti. Trattori, fitofarmaci, stagionali, vasche di fermentazione e cantine interrate: rischi seri e obblighi precisi.",
durata:"30 minuti",
chips:[["ATECO 01, 11, 10.4"],["Rischio medio (agricoltura) / alto (trasformazione)","r-medio"],["Test: 8 domande"]],
obiettivi:[
 "i rischi principali in agricoltura e in cantina",
 "abilitazioni per trattori e fitofarmaci",
 "le semplificazioni per i lavoratori stagionali",
 "ambienti confinati, CO₂ e radon in cantina"
],
blocchi:[
{tipo:"testo", h:"Il profilo", html:`
<p>Le aziende agricole (ATECO 01) sono il <strong>primo settore</strong> tra i nostri clienti con codice ATECO registrato. Per la formazione sono <strong>rischio medio</strong> (12 ore). Chi produce vino, olio o altri alimenti (ATECO 10 e 11) è <strong>rischio alto</strong> (16 ore) ed è anche un'impresa alimentare.</p>
<p>Il trattore è la prima causa di infortuni mortali in agricoltura: è il cuore della conversazione.</p>`},
{tipo:"tabella", h:"Cosa serve in un'azienda agricola", cols:["Tema","Obbligo"], rows:[
 ["Trattori","Abilitazione alla guida (corso teorico-pratico in presenza) e aggiornamento di 4 ore ogni 5 anni"],
 ["Fitofarmaci","Certificato di abilitazione all'acquisto e all'uso (D.Lgs. 150/2012), da rinnovare ogni 5 anni"],
 ["Rumore e vibrazioni","Trattori, decespugliatori, motoseghe, macchine da cantina"],
 ["Chimico","Fitofarmaci, prodotti enologici, detergenti"],
 ["Stagionali","Fino a 50 giornate l'anno in lavori generici: informazione e formazione assolte consegnando materiali validati da ASL o enti bilaterali; visita medica valida per più aziende, ogni anno (DI 27/3/2013)"],
 ["Primo soccorso","Gruppo A se più di 5 lavoratori a tempo indeterminato"],
 ["Rifiuti","Gli imprenditori agricoli produttori di rifiuti pericolosi sono esclusi dal RENTRI dal 2026"]
]},
{tipo:"box", stile:"attenzione", h:"Cantine: ambienti confinati, CO₂ e radon", html:`
<ul>
<li><strong>Vasche, silos, autoclavi</strong> sono ambienti confinati (DPR 177/2011). Durante la fermentazione si forma anidride carbonica che può uccidere in pochi minuti. Chi entra per pulire deve avere il corso di <strong>12 ore</strong> (aggiornamento 4 ore ogni 5 anni), procedure scritte e strumenti di rilevazione.</li>
<li><strong>Cantine interrate:</strong> se ci lavora qualcuno va misurato il <strong>radon</strong> (modulo 1). Dal 12/1/2025 per usare locali interrati non serve più la deroga ASL: basta una comunicazione all'Ispettorato del lavoro e dopo 30 giorni si possono usare.</li>
<li><strong>HACCP:</strong> cantine e frantoi producono alimenti: piano di autocontrollo, corsi, tracciabilità, etichette.</li>
</ul>`},
{tipo:"box", stile:"vendita", h:"Il calendario agricolo è il tuo calendario", html:`
<p>Gennaio-marzo: potature e pianificazione, momento ideale per corsi trattori e aggiornamenti. Primavera: trattamenti, controlla i patentini fitofarmaci. Agosto: prima della vendemmia, formazione degli stagionali e corso ambienti confinati. Novembre: frantoi.</p>`}
],
proporre:[
 {cod:"F030", desc:"Corso conduzione trattori agricoli o forestali a ruote e a cingoli (13 ore)", quando:"Chi guida il trattore", prezzo:350},
 {cod:"F058", desc:"Aggiornamento trattori 4 ore", quando:"Ogni 5 anni", prezzo:190},
 {cod:"F019 / F020", desc:"Corso lavoratori rischio medio 12h / alto 16h", quando:"Agricoltura / cantine e frantoi", prezzo:"240 / 280"},
 {cod:"F057 / F081", desc:"Corso ambienti confinati 12h / aggiornamento 4h", quando:"Chi entra in vasche, silos, cisterne", prezzo:"350 / 190"},
 {cod:"A043A", desc:"DVR spazi confinati classe A", quando:"Cantine con vasche e silos", prezzo:550},
 {cod:"A008A + A009A", desc:"DVR rumore + DVR vibrazioni fino a 10 misurazioni", quando:"Trattori, motoseghe, macchine da cantina", prezzo:"600 + 600"},
 {cod:"A005A", desc:"DVR chimico classe A con SDS", quando:"Uso di fitofarmaci e prodotti enologici", prezzo:550},
 {cod:"F001", desc:"Primo soccorso gruppo A 16h", quando:"Più di 5 lavoratori a tempo indeterminato", prezzo:260},
 {cod:"F086", desc:"Corso attrezzature da giardinaggio", quando:"Decespugliatori, motoseghe, tosaerba", prezzo:380},
 {cod:"DLSPP-AGR", desc:"DL-RSPP modulo tecnico integrativo agricoltura 16h", quando:"Titolare che fa l'RSPP", prezzo:400},
 {cod:"A103 / A102a", desc:"Check-up radon / DVR radon", quando:"Cantine e locali interrati", prezzo:"300 / 550"},
 {cod:"H001 / H025", desc:"Piano HACCP classe A / corso responsabile HACCP", quando:"Cantine, frantoi, trasformazione", prezzo:"550 / 280"},
 {cod:"TE007", desc:"Analisi acque ad uso irriguo", quando:"Irrigazione con acqua di pozzo o invaso", prezzo:150}
],
domande:[
 "Chi guida i trattori? Hanno l'abilitazione? Quando scade l'aggiornamento?",
 "Chi fa i trattamenti? Ha il patentino fitofarmaci in corso di validità?",
 "Quanti stagionali prendete e per quante giornate? Che documenti gli consegnate?",
 "Chi entra nelle vasche per pulirle dopo la svinatura? Con quale procedura? Avete un rilevatore di CO₂?",
 "La cantina è interrata? Qualcuno ci lavora tutti i giorni?",
 "Vendete vino o olio imbottigliato con la vostra etichetta?",
 "Quanti lavoratori a tempo indeterminato avete? (per il gruppo di primo soccorso)"
],
porsi:`
<p>L'agricoltore diffida dei “cittadini con la cartella”. Parla il suo linguaggio: <strong>trattore, vendemmia, potatura, frantoio</strong>. Chiedi di vedere l'azienda, la cantina, il parco macchine: lì nascono le domande giuste.</p>
<p>Leva umana più che legale: <em>“Quanti incidenti con il trattore conosce qui in zona?”</em>. Quasi tutti ne conoscono uno.</p>`,
caso:{titolo:"Azienda vitivinicola con cantina e 3 fissi + 10 vendemmiatori", html:`
<p>3 operai fissi che guidano i trattori, nessuno con l'abilitazione. Cantina seminterrata con vasche in acciaio pulite a mano. 10 stagionali per la vendemmia. Vende vino imbottigliato. DVR generico senza rumore, vibrazioni né spazi confinati.</p>
<p><strong>Proposta:</strong> F030 × 3 (1.050 €), A043A spazi confinati (550 €), F057 × 2 per chi pulisce le vasche (700 €), A008A + A009A (1.200 €), A103 check-up radon (300 €). Totale 3.800 €. Poi HACCP della cantina e formazione stagionali ad agosto.</p>`},
video:[
 {t:"La trattrice – La sicurezza in agricoltura", canale:"INAIL", url:"https://www.youtube.com/watch?v=iBrR01cLuIo", durata:"pochi minuti", perche:"i rischi del trattore"},
 {t:"L'attività Inail per la riduzione dei rischi nell'uso dei trattori e delle macchine agricole", canale:"INAIL", url:"https://www.youtube.com/watch?v=DNNHN912B8M", durata:"pochi minuti", perche:"dati e prevenzione in agricoltura"},
 {t:"Il simulatore Inail per ambienti confinati o con sospetti di inquinamento", canale:"INAIL", url:"https://www.youtube.com/watch?v=eTuZv_cxCYw", durata:"pochi minuti", perche:"cosa succede in vasche e silos"}
],
fonti:[
 {t:"Decreto interministeriale 27/3/2013 – semplificazioni per i lavoratori stagionali in agricoltura", url:"https://www.certifico.com/sicurezza-lavoro/legislazione-sicurezza/decreti-sicurezza-lavoro/decreto-interministeriale-27-marzo-2013"},
 {t:"INL – locali interrati e seminterrati, nota 811/2025", url:"https://www.ispettorato.gov.it/files/2025/01/inlavoro.INL-DCVIG.REGISTRO-UFFICIALEU.0000811.29-01-2025.pdf"}
],
quiz:[
 {q:"Per la formazione dei lavoratori un'azienda agricola (ATECO 01) è a rischio:", o:["Basso","Medio","Alto","Nessuno"], a:1, s:"Agricoltura = rischio medio, 12 ore."},
 {q:"Una cantina che produce e imbottiglia vino (ATECO 11) è a rischio:", o:["Basso","Medio","Alto","Basso se piccola"], a:2, s:"Le industrie alimentari e delle bevande sono a rischio alto: 16 ore."},
 {q:"Chi guida il trattore in azienda:", o:["Basta la patente B","Deve avere l'abilitazione con corso teorico-pratico e aggiornamento ogni 5 anni","Non ha obblighi","Basta l'esperienza"], a:1, s:"Le attrezzature richiedono abilitazione in presenza, aggiornamento 4 ore ogni 5 anni."},
 {q:"Pulire una vasca di fermentazione è pericoloso perché:", o:["Il vino è infiammabile","Si accumula anidride carbonica: è un ambiente confinato","C'è troppo rumore","Non è pericoloso"], a:1, s:"DPR 177/2011, corso ambienti confinati 12 ore."},
 {q:"Un lavoratore stagionale per 30 giornate in vendemmia (lavori generici):", o:["Non ha bisogno di nulla","Può ricevere informazione e formazione con documenti validati da ASL o enti bilaterali","Deve fare il corso RSPP","Deve fare 16 ore in aula"], a:1, s:"DI 27/3/2013, fino a 50 giornate l'anno in lavori generici e semplici."},
 {q:"Un'azienda agricola con 7 operai a tempo indeterminato per il primo soccorso è:", o:["Gruppo A","Gruppo B","Gruppo C","Esente"], a:0, s:"Aziende agricole con più di 5 lavoratori a tempo indeterminato = gruppo A, corso 16 ore."},
 {q:"In una cantina interrata dove si lavora ogni giorno serve:", o:["La misura del radon","Solo l'estintore","Il CPI","Niente"], a:0, s:"D.Lgs. 101/2020: luoghi di lavoro interrati."},
 {q:"Quando è il momento migliore per proporre il corso ambienti confinati a una cantina?", o:["Durante la vendemmia","Prima della vendemmia, in estate","A Natale","Mai"], a:1, s:"Prima che inizino fermentazioni e pulizie delle vasche."}
]
},

/* ========================= 7 — EDILIZIA ========================= */
{
id:"m7", n:7, pdf:"pdf/SSI-Start-07-Edilizia-e-impiantisti.pdf",
titolo:"Imprese edili e impiantisti", titoloBreve:"Edilizia e impiantisti",
sottotitolo:"Il settore più controllato e con gli infortuni più gravi. Cantieri, patente a crediti, POS e lavori in quota: qui la documentazione è la condizione per lavorare.",
durata:"30 minuti",
chips:[["ATECO 41, 42, 43"],["Rischio alto","r-alto"],["Test: 8 domande"]],
obiettivi:[
 "i documenti del cantiere e chi li deve fare",
 "come funziona la patente a crediti",
 "la formazione specifica dell'edilizia",
 "le domande che aprono la vendita"
],
blocchi:[
{tipo:"testo", h:"Il profilo", html:`
<p>Imprese edili, demolizioni, elettricisti, idraulici, termotecnici, cartongessisti, pittori, posatori (ATECO 41-43). Sono <strong>rischio alto</strong>: 16 ore di formazione lavoratori. Il cantiere è disciplinato dal <strong>Titolo IV del D.Lgs. 81/08</strong>.</p>
<p>L'impresa edile senza documenti <strong>non lavora</strong>: il committente e l'impresa principale glieli chiedono prima di entrare. È una vendita di necessità.</p>`},
{tipo:"tabella", h:"I documenti del cantiere", cols:["Documento","Chi lo fa","Nota per l'agente"], rows:[
 ["<b>POS</b> – Piano operativo di sicurezza","Ogni impresa esecutrice, per ogni cantiere","Si vende a ripetizione: un POS per cantiere"],
 ["<b>PSC</b> – Piano di sicurezza e coordinamento","Il coordinatore in progettazione (CSP)","Quando in cantiere ci sono più imprese"],
 ["<b>CSP / CSE</b>","Coordinatori nominati dal committente (corso 120 ore)","Incarichi P003 / P004 a preventivo"],
 ["<b>Idoneità tecnico-professionale</b>","L'impresa la dimostra al committente (allegato XVII)","DVR, formazione, visite, DURC, nomine"],
 ["<b>PiMUS</b>","Chi monta il ponteggio","Montatori con corso 28 ore e aggiornamento"]
]},
{tipo:"box", stile:"norma", h:"La patente a crediti", html:`
<ul>
<li>Obbligatoria dal <strong>1° ottobre 2024</strong> per imprese e lavoratori autonomi che lavorano fisicamente nei cantieri. Escluse le imprese con attestazione SOA dalla classe III e chi fa solo forniture o prestazioni intellettuali.</li>
<li>Parte da <strong>30 crediti</strong>; servono almeno <strong>15</strong> per lavorare. Le violazioni e gli infortuni tolgono crediti; dal 2026 il lavoro nero toglie 5 crediti per lavoratore.</li>
<li>Chi lavora senza: sanzione del 10% del valore dei lavori, <strong>minimo 12.000 €</strong> (DL 159/2025). Il committente che non controlla rischia da 711 a 2.563 €.</li>
<li>Formazione, DVR e sorveglianza in regola servono a non perdere crediti.</li>
</ul>`},
{tipo:"box", stile:"attenzione", h:"Nel 2026 più controlli", html:`
<p>Il piano 2026 del Ministero del Lavoro prevede campagne di vigilanza straordinarie su edilizia, agricoltura, manifattura e logistica. Per un'impresa edile non è un'ipotesi: è probabile che un ispettore entri in uno dei suoi cantieri.</p>`},
{tipo:"testo", h:"La formazione dell'edilizia", html:`
<ul>
<li>Lavoratori rischio alto 16 ore; preposto 12 ore + 6 ore modulo cantieri; datore di lavoro 16 ore + 6 ore modulo cantieri; dirigenti + modulo cantieri.</li>
<li>DPI di terza categoria (imbracature anticaduta): corso specifico.</li>
<li>Montaggio ponteggi: corso 28 ore, aggiornamento 4 ore.</li>
<li>PLE, escavatori, terne, gru: abilitazioni in presenza.</li>
<li>Elettricisti: PES / PAV / PEI per lavori elettrici.</li>
<li>Rischio rumore, vibrazioni, polveri, amianto nelle ristrutturazioni.</li>
</ul>`}
],
proporre:[
 {cod:"E003", desc:"Piano operativo di sicurezza (POS)", quando:"Per ogni nuovo cantiere", prezzo:150},
 {cod:"A051", desc:"Verifica e compilazione documentazione per entrata in cantiere", quando:"Prima di iniziare un lavoro per un'impresa principale", prezzo:450},
 {cod:"P003 / P004", desc:"Incarico coordinatore in progettazione / esecuzione", quando:"Committenti con più imprese in cantiere", prezzo:null},
 {cod:"F020", desc:"Corso lavoratori rischio alto 16h", quando:"Ogni operaio", prezzo:280},
 {cod:"F151 / F157 / F138", desc:"Modulo aggiuntivo cantieri 6h per preposto / datore di lavoro / dirigenti", quando:"Imprese che lavorano in cantiere", prezzo:"200 / 200 / 200"},
 {cod:"F024 / F118", desc:"Corso DPI di terza categoria 8h / aggiornamento 4h", quando:"Lavori in quota con imbracatura", prezzo:"250 / 160"},
 {cod:"F022 / F023", desc:"Corso montaggio e smontaggio ponteggi 28h / aggiornamento 4h", quando:"Chi monta ponteggi", prezzo:"400 / 250"},
 {cod:"F060", desc:"Corso conduzione PLE senza stabilizzatori 8h", quando:"Uso di piattaforme (verifica con la formazione il tipo di PLE)", prezzo:200},
 {cod:"F032 / F063", desc:"Movimento terra: escavatori 10h / terne 10h", quando:"Chi usa i mezzi", prezzo:"300 / 300"},
 {cod:"F036 / F037", desc:"Corso PES PAV PEI 16h / corso PAV", quando:"Elettricisti", prezzo:"350 / 350"},
 {cod:"A008A + A009A", desc:"DVR rumore + vibrazioni", quando:"Demolizioni, martelli, flessibili", prezzo:"600 + 600"},
 {cod:"A018", desc:"DVR amianto", quando:"Ristrutturazioni e rimozioni", prezzo:700},
 {cod:"SS10 / SS18", desc:"Drug test / alcol test", quando:"Lavori in quota, mezzi", prezzo:"50 / 20"},
 {cod:"VMT…", desc:"Verifica impianto di terra di cantiere (ogni 2 anni)", quando:"Cantieri con impianto elettrico", prezzo:"da 150"}
],
domande:[
 "Quanti cantieri aprite in un anno? Chi vi fa i POS?",
 "Avete la patente a crediti? Quanti crediti avete oggi?",
 "I vostri operai hanno il corso a rischio alto da 16 ore?",
 "Il capocantiere ha fatto il corso preposto con il modulo cantieri?",
 "Lavorate in quota? Con ponteggi, PLE o imbracature?",
 "Chi monta i ponteggi? Quando ha fatto l'ultimo aggiornamento?",
 "Fate ristrutturazioni con possibile amianto?"
],
porsi:`
<p>L'imprenditore edile vuole <strong>velocità</strong>: il POS gli serve per domani. Promettigli un canale diretto e tempi certi; diventa cliente fisso perché ogni cantiere è un nuovo documento.</p>
<p>Leva: <em>“Con la patente a crediti, un'irregolarità oggi può fermarti tutti i cantieri. Mettiamo in ordine formazione e documenti una volta per tutte.”</em></p>`,
caso:{titolo:"Impresa edile con 6 operai", html:`
<p>Lavora in subappalto per due imprese principali. I POS li scrive il titolare copiando quelli vecchi. 2 operai senza corso rischio alto, nessuno con il corso DPI anticaduta, il capocantiere non ha il corso preposto aggiornato.</p>
<p><strong>Proposta:</strong> A051 documentazione cantiere (450 €), POS E003 a cantiere (150 € l'uno, stima 10 l'anno = 1.500 €), F020 × 2 (560 €), F024 × 6 (1.500 €), F014 + F151 al capocantiere (450 €), F129 + F157 al titolare (600 €). Oltre 5.000 € il primo anno, poi ricorrente.</p>`},
video:[
 {t:"Tutorial – Cantieri più sicuri: protezione individuale dalle cadute", canale:"INAIL", url:"https://www.youtube.com/watch?v=xJBB3ODzMv4", durata:"pochi minuti", perche:"lavori in quota e DPI anticaduta"},
 {t:"Napo in... stop al rumore", canale:"Napo", url:"https://www.youtube.com/watch?v=Q5Ct6zMJe5k", durata:"pochi minuti", perche:"rumore"}
],
fonti:[
 {t:"Patente a crediti: riepilogo e novità del DL 159/2025", url:"https://www.ecnews.it/lavoro/rapporto-di-lavoro/salute-e-sicurezza/patente-a-crediti-riepilogo-e-novita-dopo-la-conversione-in-legge-del-decreto-sicurezza/"},
 {t:"INL circolare 1/2026 – novità del DL 159/2025", url:"https://www.certifico.com/component/acym/archive/2014-circolare-inl-n-1-del-23-febbraio-2026-novita-dl-n-159-2025-misure-urgenti-tutela-ssl-e-protezione-civile"}
],
quiz:[
 {q:"Per la formazione dei lavoratori l'edilizia è a rischio:", o:["Basso","Medio","Alto","Dipende dal cantiere"], a:2, s:"ATECO 41-43 = rischio alto, 16 ore."},
 {q:"Il POS va fatto:", o:["Una volta nella vita dell'impresa","Per ogni cantiere, da ogni impresa esecutrice","Solo dal committente","Solo sopra 10 operai"], a:1, s:"Il POS è specifico del cantiere."},
 {q:"Quanti crediti servono almeno per lavorare con la patente a crediti?", o:["5","15","30","100"], a:1, s:"Si parte da 30, sotto 15 non si lavora."},
 {q:"Sanzione minima per chi lavora in cantiere senza patente a crediti:", o:["500 €","12.000 €","Nessuna","1.000 €"], a:1, s:"10% del valore dei lavori, minimo 12.000 € dal DL 159/2025."},
 {q:"Un capocantiere preposto che formazione deve avere?", o:["Solo il corso lavoratori","Preposto 12 ore + modulo cantieri 6 ore, aggiornamento ogni 2 anni","Corso RSPP","Nessuna"], a:1, s:"Nuovo Accordo 2025."},
 {q:"Chi lavora con l'imbracatura anticaduta deve fare:", o:["Il corso DPI di terza categoria","Il corso HACCP","Il corso RLS","Nulla"], a:0, s:"I DPI di terza categoria richiedono formazione e addestramento."},
 {q:"Ogni quanto si verifica l'impianto di terra di un cantiere?", o:["Ogni 5 anni","Ogni 2 anni","Mai","Ogni 10 anni"], a:1, s:"DPR 462/2001: i cantieri sono tra i casi a verifica biennale."},
 {q:"Qual è la leva più forte con un'impresa edile?", o:["Il prezzo più basso","Velocità e documenti pronti per entrare in cantiere senza rischiare la patente","Il radon","La privacy"], a:1, s:"Senza documenti l'impresa non lavora."}
]
},

/* ========================= 8 — OFFICINE E MANIFATTURA ========================= */
{
id:"m8", n:8, pdf:"pdf/SSI-Start-08-Officine-e-manifattura.pdf",
titolo:"Officine, falegnamerie e piccola manifattura", titoloBreve:"Officine e manifattura",
sottotitolo:"Autoriparazioni, carpenterie, falegnamerie, pelletterie e confezioni: macchine, rumore, sostanze chimiche, polveri e rifiuti.",
durata:"30 minuti",
chips:[["ATECO 45, 16, 25, 13-15, 31"],["Rischio alto (manifattura) / basso (autoriparazioni)","r-alto"],["Test: 8 domande"]],
obiettivi:[
 "i rischi tipici di officine e laboratori",
 "macchine, nuovo Regolamento macchine e verifiche",
 "rifiuti e RENTRI",
 "le domande da fare in reparto"
],
blocchi:[
{tipo:"testo", h:"Il profilo", html:`
<p>Qui c'è il <strong>reparto</strong>: macchine, polveri, prodotti chimici, rumore. La manifattura (ATECO 10-33: metalmeccanica, legno, tessile, pelletteria, mobili) è <strong>rischio alto</strong>. Attenzione: nella tabella dell'Accordo le <strong>autoriparazioni (ATECO 45)</strong> risultano a rischio basso, ma il DVR può portare il rischio reale più in alto: decide la mansione vera.</p>
<p>In Toscana pelletteria, tessile e mobili sono distretti interi: un cliente porta spesso altri clienti dello stesso distretto.</p>`},
{tipo:"tabella", h:"I rischi e cosa serve", cols:["Rischio","Dove","Cosa serve"], rows:[
 ["Rumore e vibrazioni","Carrozzerie, carpenterie, falegnamerie","DVR rumore e vibrazioni, audiometrie, DPI"],
 ["Chimico","Vernici, solventi, colle (pelletteria), oli","DVR chimico con schede di sicurezza, spirometrie"],
 ["Cancerogeni","Polveri di legno duro (valore limite 2 mg/m³ dal 2023), alcune vernici","DVR cancerogeni, misure delle polveri, registro esposti"],
 ["Esplosione (ATEX)","Verniciatura, polveri di legno e alluminio, carica batterie dei muletti","DVR ATEX"],
 ["Macchine","Presse, seghe, piegatrici, macchine da cucire","Verifica macchine, schede e procedure, addestramento"],
 ["Movimenti ripetitivi e MMC","Confezione, pelletteria, magazzino","DVR movimenti ripetitivi e MMC"],
 ["Carrelli e carriponte","Magazzini e reparti","Corsi abilitanti e verifiche periodiche"]
]},
{tipo:"box", stile:"norma", h:"Macchine: cosa cambia nel 2027", html:`
<p>Dal <strong>20 gennaio 2027</strong> si applica il nuovo <strong>Regolamento UE 2023/1230</strong> sulle macchine, che sostituisce la direttiva 2006/42/CE. Le macchine già sul mercato restano utilizzabili; quelle nuove dovranno rispettare il regolamento. Chi compra macchine nuove o modifica quelle vecchie ha bisogno di verifiche, procedure e addestramento.</p>
<p>Gli apparecchi di sollevamento oltre 200 kg (carriponte, gru) hanno verifiche periodiche obbligatorie (allegato VII D.Lgs. 81/08); la prima la fa l'INAIL.</p>`},
{tipo:"box", stile:"norma", h:"Rifiuti: il RENTRI", html:`
<ul>
<li>Il Registro elettronico nazionale per la tracciabilità dei rifiuti riguarda i produttori di <strong>rifiuti pericolosi</strong> (oli esausti, batterie, solventi, filtri) e i produttori di rifiuti non pericolosi industriali o artigianali con <strong>più di 10 dipendenti</strong>.</li>
<li>L'ultima finestra di iscrizione si è chiusa il <strong>13 febbraio 2026</strong>; chi inizia dopo si iscrive prima della prima annotazione. Registro digitale con trasmissione mensile.</li>
<li>Officine e carrozzerie sono il caso tipico. Sono invece esclusi dal 2026 acconciatori, estetisti, tatuatori e imprenditori agricoli.</li>
</ul>`},
{tipo:"box", stile:"attenzione", h:"Antincendio", html:`
<p>Officine e carrozzerie con <strong>più di 300 m²</strong> coperti sono attività soggette ai Vigili del Fuoco (attività 53). Le lavorazioni del legno sono soggette sopra certe quantità di materiale. Verniciatura, saldatura e falegnameria non si possono fare in locali interrati.</p>`}
],
proporre:[
 {cod:"F020", desc:"Corso lavoratori rischio alto 16h", quando:"Operai di reparto nella manifattura", prezzo:280},
 {cod:"A008A / A009A", desc:"DVR rumore / DVR vibrazioni fino a 10 misurazioni", quando:"Reparti con macchine", prezzo:"600 / 600"},
 {cod:"A005A / A061A", desc:"DVR chimico classe A / aggiornamento", quando:"Vernici, colle, solventi, oli", prezzo:"550 / 420"},
 {cod:"A012A + A012BIS", desc:"DVR cancerogeno classe A + registro degli esposti", quando:"Polveri di legno duro, alcune vernici", prezzo:"580 + 490"},
 {cod:"TR003B", desc:"Misura polveri di legno (frazione inalabile)", quando:"Falegnamerie", prezzo:350},
 {cod:"A013", desc:"DVR esplosione (ATEX): carica batterie, aspirazione polveri, verniciatura", quando:"Verniciatura, polveri, muletti elettrici", prezzo:750},
 {cod:"A066Check / A066 + A066sm", desc:"Check-up macchine / DVR macchine + schede per macchina", quando:"Parco macchine, macchine vecchie o nuove", prezzo:"400 / 600 + 120 a macchina"},
 {cod:"A011", desc:"DVR movimenti ripetitivi (fino a 2)", quando:"Confezione, pelletteria, assemblaggio", prezzo:550},
 {cod:"F025 / F097- / F109", desc:"Corso carrelli 12h / carroponte 10h / gru a bandiera 4h", quando:"Chi usa mezzi di sollevamento", prezzo:"250 / 220 / 250"},
 {cod:"F140", desc:"Addestramento all'utilizzo di macchine e attrezzature", quando:"Nuove macchine, nuovi addetti", prezzo:400},
 {cod:"R036 / R040", desc:"Iscrizione RENTRI / assistenza RENTRI annuale con sopralluogo", quando:"Produttori di rifiuti pericolosi", prezzo:"150 / 500"},
 {cod:"R017", desc:"MUD (dichiarazione ambientale annuale)", quando:"Produttori di rifiuti obbligati", prezzo:250},
 {cod:"A024", desc:"Autorizzazione emissioni in atmosfera in via generale", quando:"Verniciatura, aspirazioni", prezzo:1200}
],
domande:[
 "Posso vedere il reparto? Quali sono le macchine più rumorose?",
 "Che prodotti usate: vernici, colle, solventi? Avete le schede di sicurezza aggiornate?",
 "Avete comprato o pensate di comprare macchine nuove nel 2026-2027?",
 "Chi usa muletto, carroponte o gru? Hanno l'abilitazione?",
 "Lavorate legno duro? Avete mai misurato le polveri?",
 "Siete iscritti al RENTRI? Chi tiene il registro dei rifiuti?",
 "Quanti metri quadri è il capannone?"
],
porsi:`
<p>Chiedi sempre di <strong>vedere il reparto</strong>: in cinque minuti tra le macchine trovi più opportunità che in un'ora in ufficio. Osserva: cuffie, mascherine, aspirazioni, cartelli, estintori, carrelli, fusti di oli.</p>
<p>Frase utile: <em>“Mi fa fare un giro? Le dico subito cosa vedo, gratis, e poi decide lei.”</em></p>`,
caso:{titolo:"Carrozzeria con 5 dipendenti, 420 m²", html:`
<p>Verniciatura in cabina, levigatrici, compressore, ponte sollevatore. Oli esausti e filtri stoccati in un angolo. Nessun DVR rumore né ATEX, il RENTRI non sanno cos'è.</p>
<p><strong>Proposta:</strong> CPIVERNORTEC (400 €) perché oltre 300 m² è attività 53, A008A rumore (600 €), A005A chimico (550 €), A013 ATEX (750 €), R036 + R040 RENTRI (650 €). Totale 2.950 €. Poi sorveglianza sanitaria con audiometrie e spirometrie.</p>`},
video:[
 {t:"Napo in... stop al rumore", canale:"Napo", url:"https://www.youtube.com/watch?v=Q5Ct6zMJe5k", durata:"pochi minuti", perche:"rumore in reparto"},
 {t:"INAIL – Rischio chimico", canale:"INAIL", url:"https://www.youtube.com/watch?v=2dm0kxZOKG4", durata:"pochi minuti", perche:"sostanze pericolose"}
],
fonti:[
 {t:"Regolamento UE 2023/1230 macchine", url:"https://certifico.com/macchine/regolamento-ue-2023-1230"},
 {t:"Prevenzione incendi: carrozzerie e officine", url:"https://certifico.com/sicurezza-lavoro/documenti-sicurezza/documenti-riservati-sicurezza/prevenzione-incendi-carrozzerie-e-officine-autoveicoli"},
 {t:"RENTRI – obblighi e scadenze", url:"https://www.pmi.it/?p=481990"}
],
quiz:[
 {q:"Una falegnameria (ATECO 16) per la formazione dei lavoratori è a rischio:", o:["Basso","Medio","Alto","Esente"], a:2, s:"La manifattura è rischio alto: 16 ore."},
 {q:"Perché le polveri di legno duro sono un tema importante?", o:["Sono cancerogene: valore limite 2 mg/m³","Sporcano","Fanno rumore","Non lo sono"], a:0, s:"Sono agenti cancerogeni: DVR cancerogeni e misure delle polveri."},
 {q:"Una carrozzeria con verniciatura ha bisogno di:", o:["DVR ATEX","Solo HACCP","Solo corso RLS","Niente di specifico"], a:0, s:"La verniciatura crea atmosfere potenzialmente esplosive."},
 {q:"Dal 20 gennaio 2027 cosa cambia per le macchine?", o:["Si applica il Regolamento UE 2023/1230","Vanno buttate quelle vecchie","Niente","Servono 2 RSPP"], a:0, s:"Sostituisce la direttiva macchine 2006/42/CE."},
 {q:"Chi deve iscriversi al RENTRI?", o:["Tutte le aziende","I produttori di rifiuti pericolosi e i produttori di rifiuti non pericolosi industriali/artigianali con più di 10 dipendenti","Solo i trasportatori","Nessuno"], a:1, s:"Le officine sono il caso tipico."},
 {q:"Un'officina diventa attività soggetta VVF (attività 53) oltre:", o:["100 m²","300 m² coperti","1.000 m²","Sempre"], a:1, s:"Officine e carrozzerie oltre 300 m²."},
 {q:"Qual è la prima cosa da chiedere in un'azienda manifatturiera?", o:["Lo sconto","Di vedere il reparto","Il bilancio","Il codice fiscale"], a:1, s:"Le opportunità si vedono tra le macchine."},
 {q:"Chi usa il carroponte deve avere:", o:["Nessun corso","Il corso carroponte e l'apparecchio deve avere le verifiche periodiche","Solo la patente C","Il corso HACCP"], a:1, s:"Formazione dell'operatore e verifiche dell'allegato VII."}
]
},

/* ========================= 9 — COMMERCIO E UFFICI ========================= */
{
id:"m9", n:9, pdf:"pdf/SSI-Start-09-Commercio-uffici-servizi.pdf",
titolo:"Negozi, magazzini, uffici e servizi", titoloBreve:"Commercio, uffici, servizi",
sottotitolo:"Rischio basso non vuol dire niente da fare: negozi, alimentari, magazzini, studi professionali, imprese di pulizia e trasporti.",
durata:"25 minuti",
chips:[["ATECO 46, 47, 69-74, 81, 49-52"],["Rischio basso / medio (trasporti)","r-basso"],["Test: 8 domande"]],
obiettivi:[
 "il kit minimo di un negozio o di un ufficio",
 "magazzini e carrelli elevatori",
 "appalti, DUVRI e imprese di pulizia",
 "alcol e droghe per autisti e carrellisti"
],
blocchi:[
{tipo:"testo", h:"Il profilo", html:`
<p>Commercio all'ingrosso e al dettaglio (ATECO 46-47), studi professionali e uffici (69-74), imprese di pulizia (81) sono <strong>rischio basso</strong>; trasporti e magazzinaggio (49-52) sono <strong>rischio medio</strong>. Sono tante aziende piccole: ticket medio più basso, ma tantissime e facili da chiudere.</p>`},
{tipo:"tabella", h:"Cosa serve, per tipo di attività", cols:["Attività","In più rispetto al kit base"], rows:[
 ["Negozio non alimentare","Formazione 8 ore, addetti emergenze livello 1, estintori, cassetta, stress, eventuale MMC"],
 ["Negozio alimentare, macelleria, forno","Tutto il modulo 3: HACCP, corsi alimentaristi, allergeni sugli sfusi, tamponi"],
 ["Magazzino e ingrosso","MMC, carrelli elevatori, scaffalature; attività 70 VVF se il deposito supera 1.000 m² con oltre 5.000 kg di materiale combustibile"],
 ["Ufficio e studio professionale","VDT (20 ore a settimana), microclima, stress, emergenze; privacy e videosorveglianza"],
 ["Impresa di pulizie","Chimico, MMC, lavori presso clienti: DUVRI e coordinamento (art. 26)"],
 ["Trasporti e logistica","Rischio medio 12 ore, alcol e droghe per gli autisti, MMC, carrelli"]
]},
{tipo:"box", stile:"norma", h:"Appalti e DUVRI (art. 26)", html:`
<p>Quando un'azienda fa lavorare un'altra impresa nei propri locali (pulizie, manutenzioni, mensa), il committente deve verificarne l'idoneità e, nei casi previsti, redigere il <strong>DUVRI</strong>, il documento sui rischi da interferenza. Per l'impresa di pulizie è il contrario: è lei che deve essere pronta a dimostrare di essere in regola.</p>`},
{tipo:"box", stile:"norma", h:"Alcol e droghe", html:`
<p>Per le mansioni a rischio (autisti con patente superiore alla B, carrellisti, chi lavora in quota) vige il <strong>tasso alcolemico zero</strong>; i controlli li fa il medico competente. Il DL 159/2025 prevede un nuovo accordo sulle modalità di accertamento entro il 31 dicembre 2026.</p>`},
{tipo:"box", stile:"vendita", h:"Privacy: il complemento naturale", html:`
<p>Negozi e studi hanno spesso <strong>telecamere</strong>: l'impianto di videosorveglianza che inquadra i lavoratori richiede accordo sindacale o autorizzazione dell'Ispettorato. Uffici e studi trattano dati di clienti e dipendenti: il modello organizzativo privacy è una proposta facile da affiancare.</p>`}
],
proporre:[
 {cod:"A001A + A004", desc:"DVR classe A + stress", quando:"Base per negozi e uffici", prezzo:"550 + 550"},
 {cod:"A006A", desc:"DVR videoterminali fino a 5 postazioni", quando:"Uffici e studi", prezzo:550},
 {cod:"F018 / C001U", desc:"Corso lavoratori rischio basso 8h (aula / e-learning)", quando:"Commercio, uffici, pulizie", prezzo:"180 / 180"},
 {cod:"F019", desc:"Corso lavoratori rischio medio 12h", quando:"Trasporti e magazzinaggio", prezzo:240},
 {cod:"F103 / F003", desc:"Antincendio livello 1 / primo soccorso B-C", quando:"Ogni negozio e ufficio", prezzo:"150 / 220"},
 {cod:"A010A / A104", desc:"DVR MMC fino a 5 attività / check-up MMC", quando:"Magazzini, consegne, pulizie", prezzo:"600 / 390"},
 {cod:"F025 / F026", desc:"Carrelli elevatori 12h / aggiornamento 4h", quando:"Magazzini", prezzo:"250 / 180"},
 {cod:"A016", desc:"DUVRI", quando:"Aziende che affidano lavori in appalto nei propri locali", prezzo:550},
 {cod:"A077", desc:"Assistenza idoneità appalti", quando:"Imprese di pulizia e servizi che lavorano presso clienti", prezzo:90},
 {cod:"A038", desc:"DVR alcol (patenti superiori alla B e abilitazioni)", quando:"Autisti e carrellisti", prezzo:550},
 {cod:"SS18 / SS10", desc:"Alcol test / drug test", quando:"Mansioni a rischio", prezzo:"20 / 50"},
 {cod:"Y001", desc:"Modello organizzativo privacy (MPO)", quando:"Uffici, studi, negozi", prezzo:500},
 {cod:"Y003", desc:"Videosorveglianza: pratica e invio all'Ispettorato", quando:"Telecamere che inquadrano i lavoratori", prezzo:450},
 {cod:"A101", desc:"Verbale di informazione per lavoro agile", quando:"Dipendenti in smart working", prezzo:150}
],
domande:[
 "Quanti dipendenti, e quanti lavorano al computer più di 20 ore a settimana?",
 "Avete un magazzino? Chi usa il muletto?",
 "Fate lavorare imprese esterne nei vostri locali (pulizie, manutenzioni)?",
 "Avete telecamere? Inquadrano i dipendenti?",
 "Qualcuno lavora in smart working?",
 "Avete autisti o fate consegne?",
 "Vendete alimenti sfusi o preparati da voi?"
],
porsi:`
<p>Con il piccolo commercio <strong>conta la semplicità</strong>: un preventivo su una pagina, tutto compreso, con la rata o l'addebito SDD. Valuta l'Assistenza Azienda Sicura Light: il commerciante non vuole pensarci.</p>
<p>Con gli studi professionali (commercialisti, consulenti del lavoro) c'è un'opportunità doppia: sono clienti, ma anche <strong>prescrittori</strong> che possono presentarti decine di aziende (vedi mansionario: convenzioni con gli studi).</p>`,
caso:{titolo:"Studio commercialista con 9 dipendenti", html:`
<p>9 impiegati al PC tutto il giorno, una persona in smart working, 2 telecamere all'ingresso che inquadrano la segreteria. DVR del 2016, nessun DVR videoterminali, nessuna visita medica.</p>
<p><strong>Proposta:</strong> aggiornamento DVR A064A (390 €), A006B videoterminali 6-10 postazioni (650 €), nomina medico SS14 (200 €) + visite SS02 × 9 (450 €), Y003 videosorveglianza (450 €), A101 lavoro agile (150 €). Totale 2.290 €. Poi proponi la convenzione: lo studio segue 120 aziende.</p>`},
video:[
 {t:"Napo in... alleggerire il carico", canale:"INAIL", url:"https://www.youtube.com/watch?v=56fEI6Cf6Z0", durata:"pochi minuti", perche:"movimentazione manuale nei magazzini"}
],
fonti:[
 {t:"D.Lgs. 81/2008 art. 26 – contratti d'appalto", url:"https://tussl.it/"},
 {t:"Alcol e droghe nei luoghi di lavoro (ASL CN2)", url:"https://www.aslcn2.it/media/2018/12/02-Alcol-e-Droga-Medico-Competente.pdf"}
],
quiz:[
 {q:"Un negozio di abbigliamento è a rischio:", o:["Basso","Medio","Alto","Esente"], a:0, s:"Commercio = rischio basso, 8 ore."},
 {q:"Un'azienda di trasporto merci (ATECO 49) è a rischio:", o:["Basso","Medio","Alto","Esente"], a:1, s:"Trasporti e magazzinaggio = rischio medio, 12 ore."},
 {q:"Un'azienda fa entrare un'impresa di pulizie nei suoi uffici. Quale documento può servire?", o:["POS","DUVRI","Piano HACCP","CPI"], a:1, s:"Art. 26: documento di valutazione dei rischi da interferenza."},
 {q:"Per un autista con patente C vale:", o:["Tasso alcolemico zero e controlli del medico competente","Nessuna regola","Solo il codice della strada","Basta un'autocertificazione"], a:0, s:"Mansioni a rischio: alcol zero."},
 {q:"Telecamere che inquadrano i dipendenti:", o:["Sono sempre libere","Richiedono accordo sindacale o autorizzazione dell'Ispettorato","Basta un cartello","Sono vietate"], a:1, s:"Codice SSI Y003."},
 {q:"Un deposito diventa attività VVF (attività 70) quando:", o:["Ha un muletto","Supera 1.000 m² con oltre 5.000 kg di materiale combustibile","Ha 3 dipendenti","Sempre"], a:1, s:"DPR 151/2011, attività 70."},
 {q:"Perché gli studi professionali sono clienti strategici?", o:["Pagano di più","Sono anche prescrittori che possono presentarti molte aziende","Non hanno obblighi","Fanno da RSPP"], a:1, s:"Commercialisti e consulenti del lavoro seguono decine di aziende."},
 {q:"Uno studio con 9 impiegati al PC tutto il giorno, che DVR specifico serve?", o:["Rumore","Videoterminali","ATEX","Amianto"], a:1, s:"Oltre 20 ore settimanali al PC = videoterminalisti."}
]
},

/* ========================= 10 — PERSONA E SALUTE ========================= */
{
id:"m10", n:10, pdf:"pdf/SSI-Start-10-Persona-e-salute.pdf",
titolo:"Parrucchieri, estetisti, studi medici e palestre", titoloBreve:"Persona e salute",
sottotitolo:"Servizi alla persona e sanità privata: rischio biologico e chimico, apparecchi estetici, radioprotezione e rifiuti sanitari. L'ultimo modulo, poi sei pronto.",
durata:"25 minuti",
chips:[["ATECO 96, 86, 93"],["Rischio basso (96, 93) / alto (86)","r-alto"],["Test: 8 domande"]],
obiettivi:[
 "gli obblighi di acconciatori, estetisti e tatuatori in Toscana",
 "studi medici e dentistici: biologico, radioprotezione, rifiuti",
 "palestre e centri benessere",
 "il fascicolo di esercizio, servizio esclusivo SSI"
],
blocchi:[
{tipo:"testo", h:"Il profilo", html:`
<p>Parrucchieri, estetisti, tatuatori (ATECO 96) e palestre (93) sono <strong>rischio basso</strong> per la formazione. Studi medici, dentistici, fisioterapisti e poliambulatori (ATECO 86) sono <strong>rischio alto</strong>. Tante attività piccole, spesso con titolare e 1-3 collaboratori: decide tutto il titolare, in fretta.</p>`},
{tipo:"tabella", h:"Acconciatori, estetisti, tatuatori", cols:["Tema","Cosa serve"], rows:[
 ["Chimico","Tinture, decoloranti, prodotti per unghie e trattamenti: DVR chimico con schede di sicurezza, guanti adatti"],
 ["Biologico","Tatuaggi, piercing, manicure e pedicure: strumenti sterili o monouso, procedure"],
 ["Apparecchi estetici (DM 206/2015)","23 schede tecniche per tipo di apparecchio (laser, luce pulsata, radiofrequenza…), consenso informato del cliente, controlli periodici; per alcuni apparecchi personale addestrato e primo soccorso"],
 ["Tatuatori e piercer in Toscana","Qualifica con corso di 600 ore; vietati tatuaggi e piercing sotto i 14 anni (salvo piercing all'orecchio con consenso), consenso dei genitori sotto i 18; informativa e consenso firmato"],
 ["Fascicolo di esercizio","Il fascicolo SSI che raccoglie la documentazione igienico-sanitaria dell'esercizio di estetiste e tatuatori in Toscana: codice A007"],
 ["Rifiuti","Acconciatori, estetisti e tatuatori sono esclusi dal RENTRI dal 2026"]
]},
{tipo:"tabella", h:"Studi medici, dentistici e fisioterapia", cols:["Tema","Cosa serve"], rows:[
 ["Biologico","DVR biologico (sangue, aerosol, strumenti), vaccinazioni, sorveglianza sanitaria"],
 ["Radioprotezione (D.Lgs. 101/2020)","Chi ha un apparecchio RX (anche endorale dentale) nomina l'<b>esperto di radioprotezione</b>, che redige una relazione periodica"],
 ["Rifiuti sanitari (DPR 254/2003)","Rifiuti a rischio infettivo: deposito massimo 5 giorni, 30 se si producono meno di 200 litri"],
 ["Impianto elettrico","Locali medici: verifica dell'impianto di terra ogni 2 anni"],
 ["Privacy","Dati sanitari: valutazione specifica"],
 ["Formazione","Lavoratori rischio alto 16 ore; BLSD (defibrillatore) per il personale"]
]},
{tipo:"box", stile:"norma", h:"Palestre e centri benessere", html:`
<p>Palestre e centri fitness/benessere sono tra gli edifici <strong>prioritari</strong> per il rischio Legionella (D.Lgs. 18/2023): docce, idromassaggi, saune. Se hanno una piscina valgono le regole toscane del modulo 5. Spesso hanno un defibrillatore: serve il personale formato BLSD.</p>`}
],
proporre:[
 {cod:"A007 / A007A", desc:"Fascicolo di esercizio estetiste e tatuatori in Toscana, fino a 3 / oltre 3 addetti", quando:"Ogni centro estetico e studio di tatuaggio", prezzo:"420 / 650"},
 {cod:"A005A", desc:"DVR chimico classe A con SDS", quando:"Parrucchieri, estetisti, nail center", prezzo:550},
 {cod:"A017", desc:"DVR biologico", quando:"Studi medici, dentistici, tatuatori, estetisti", prezzo:700},
 {cod:"A072 / A0ROA", desc:"DVR rischio ultravioletti / valutazione ROA (radiazioni ottiche artificiali)", quando:"Lampade UV, laser, luce pulsata", prezzo:"650 / 690"},
 {cod:"A014A", desc:"DVR gestanti classe A", quando:"Personale quasi sempre femminile", prezzo:450},
 {cod:"F018 / F020", desc:"Corso lavoratori rischio basso 8h / alto 16h", quando:"Servizi alla persona / sanità", prezzo:"180 / 280"},
 {cod:"F034 / F078", desc:"Corso BLSD laico 5h / aggiornamento 3h (ogni 2 anni)", quando:"Palestre, studi con defibrillatore", prezzo:"100 / 90"},
 {cod:"F100 / F101", desc:"Corso BLSD sanitario 6h / aggiornamento 4h", quando:"Personale sanitario", prezzo:"100 / 90"},
 {cod:"DAEY", desc:"Defibrillatore DAE Primedic HeartSave Y", quando:"Palestre, studi, strutture aperte al pubblico", prezzo:1350},
 {cod:"VMTDENT3-", desc:"Verifica terra studi dentistici fino a 5 riuniti", quando:"Ogni 2 anni", prezzo:50},
 {cod:"Y006", desc:"Privacy: valutazione del rischio dati sanitari", quando:"Studi medici e case di cura", prezzo:1050},
 {cod:"A036", desc:"DVR Legionella classe A e B", quando:"Palestre, centri benessere, studi con docce", prezzo:680},
 {cod:"SS14 + SS02", desc:"Nomina medico competente + visite", quando:"Rischio biologico o chimico", prezzo:"200 + 50"}
],
domande:[
 "Che apparecchi usate (laser, luce pulsata, radiofrequenza, lampade UV)? Avete schede e registro manutenzioni?",
 "Avete il fascicolo di esercizio? Di quando è?",
 "Le schede di sicurezza delle tinture e dei prodotti sono aggiornate?",
 "Per gli studi: avete un apparecchio RX? Chi è l'esperto di radioprotezione?",
 "Chi vi ritira i rifiuti sanitari? Ogni quanto?",
 "Avete un defibrillatore? Chi è formato a usarlo?",
 "Avete docce, saune o idromassaggi?"
],
porsi:`
<p>Il titolare di un centro estetico o di un salone è quasi sempre <strong>anche chi lavora sul cliente</strong>: ha poco tempo e nessuno a cui delegare. Proponi un unico interlocutore per tutto e scadenze ricordate da noi.</p>
<p>Con lo studio medico parla da pari: il medico conosce il rischio biologico meglio di te, ma non conosce gli adempimenti. Frase utile: <em>“Lei pensa ai pazienti, noi ai documenti che le chiedono ASL e Ispettorato.”</em></p>`,
caso:{titolo:"Centro estetico con 2 dipendenti", html:`
<p>Titolare + 2 estetiste. Luce pulsata e radiofrequenza, lampada UV per unghie, ceretta e pedicure. Nessun fascicolo di esercizio, DVR generico del 2020, nessuna valutazione ROA né biologico.</p>
<p><strong>Proposta:</strong> A007 fascicolo di esercizio (420 €), A005A chimico (550 €), A017 biologico (700 €), A0ROA valutazione ROA (690 €), A014A gestanti (450 €), F018 × 2 (360 €). Totale 3.170 €, da proporre anche in due tempi se la cliente preferisce procedere un passo alla volta.</p>`},
video:[
 {t:"INAIL – Rischio chimico", canale:"INAIL", url:"https://www.youtube.com/watch?v=2dm0kxZOKG4", durata:"pochi minuti", perche:"prodotti chimici nei servizi"}
],
fonti:[
 {t:"DM 206/2015 – apparecchi elettromeccanici per uso estetico", url:"https://www.testo-unico-sicurezza.com/decreto-15-ottobre-2015-n-206-apparecchiature-utilizzabili-nellattivita-di-estetista.html"},
 {t:"Regione Toscana – piercing e tatuaggi", url:"https://www.regione.toscana.it/-/piercing-e-tatuaggi"},
 {t:"Esperto di radioprotezione negli studi dentistici (FNOMCeO)", url:"https://www.quotidianosanita.it/lavoro-e-professioni/il-dentista-che-esegue-radiografie-come-collaboratore-non-deve-nominare-un-esperto-di-radioprotezione-il-parere-della-fnomceo-all-aio/"}
],
quiz:[
 {q:"Un parrucchiere (ATECO 96.02) per la formazione dei lavoratori è a rischio:", o:["Basso","Medio","Alto","Esente"], a:0, s:"Servizi alla persona = rischio basso."},
 {q:"Uno studio dentistico (ATECO 86) è a rischio:", o:["Basso","Medio","Alto","Esente"], a:2, s:"La sanità è rischio alto: 16 ore."},
 {q:"Il dentista con apparecchio RX deve nominare:", o:["Un geometra","L'esperto di radioprotezione","Un avvocato","Nessuno"], a:1, s:"D.Lgs. 101/2020."},
 {q:"Quale norma disciplina gli apparecchi elettromeccanici per l'estetica?", o:["DM 206/2015","DPR 151/2011","Reg. 852/2004","DM 388/2003"], a:0, s:"23 schede tecniche per tipo di apparecchio."},
 {q:"In Toscana i tatuaggi sono vietati sotto i:", o:["12 anni","14 anni","16 anni","21 anni"], a:1, s:"Sotto i 14 anni vietati; sotto i 18 serve il consenso dei genitori."},
 {q:"Qual è il servizio SSI specifico per estetiste e tatuatori in Toscana?", o:["Fascicolo di esercizio A007","POS","Piano HACCP","DVR amianto"], a:0, s:"420 € fino a 3 addetti, 650 € oltre."},
 {q:"Ogni quanto si verifica l'impianto di terra di uno studio dentistico?", o:["5 anni","2 anni","10 anni","Mai"], a:1, s:"Locali medici: verifica biennale."},
 {q:"Perché le palestre sono interessate dal rischio Legionella?", o:["Per i pesi","Per docce, saune e idromassaggi: sono edifici prioritari","Per il rumore della musica","Non lo sono"], a:1, s:"D.Lgs. 18/2023, edifici prioritari."}
]
}

]};
