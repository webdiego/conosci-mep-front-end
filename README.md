# Conosci MEP

Ciao, questa piccola applicazione **Symfony** è stata pensata per farti conoscere un po' meglio MEP e gli strumenti con cui lavoriamo maggiormente.

L'obiettivo non è quello di valutare l'esecuzione specifica di un lavoro, ma di trasmetterti (senza disperdere il prezioso tempo di entrambi) quali siano le conoscenze che occorrono per poter collaborare al meglio con noi.

## GitHub
Il nostro lavoro si svolge su questa piattaforma di social coding. Si tratta di uno strumento indispensabile poter automatizzare tantissimi processi e poter impiegare le risorse umane in attività più interessanti e gratificanti.

I vari servizi consentono di ottimizzare alcune attività, tra cui:
- comunicazione tecnica riguardo ai progetti (attraverso issue, PR, etc.)
- automatizzare processi di test/build/deployment
- gestire il flusso di lavoro con risorse esterne in sicurezza
- condividere informazioni, codice, conoscenza anche con la community opensource

È indispensabile che un front end developer abbia un proprio account su GitHub e sappia utilizzare git (e/o la piattaforma web) per le attività più comuni su un repository (pubblicare il proprio codice, lavorare su più branch, gestire PR, gestire issue).

## Symfony (e ambiente di sviluppo in generale)
Noi sviluppiamo i nostri progetti con [questo framework PHP](https://symfony.com/), non è necessario conoscerlo a fondo per poter intervenire sul front end, ma ci sono alcune funzionalità fondamentali per interagire con i nostri progetti.

È importante saper:
- avviare un progetto Symfony sulla propria macchina (non sono richieste configurazioni particolari, qualsiasi sistema con installati [PHP](https://www.php.net/), [Composer](https://getcomposer.org/), [Yarn](https://yarnpkg.com/) e [Symfony-CLI](https://symfony.com/download) dovrebbe andare bene)
- gestire dipendenze front end attraverso [Yarn](https://yarnpkg.com/) (è molto simile ad NPM, ma per ora Yarn è un requisito necessario per compatibilità con il nostro flusso di lavoro)
- utilizzare webpack per compilare gli stili durante lo sviluppo (noi utilizziamo [Webpack Encore](https://symfony.com/doc/current/frontend.html#webpack-encore), un sistema molto semplice e veloce per gestire webpack in progetti moderatamente complessi)
- utilizzare [Twig](https://twig.symfony.com/) per rendere dinamico il markup HTML sviluppato

Come IDE utilizziamo [PHPStorm](https://www.jetbrains.com/phpstorm/) perché è integrato magnificamente con tutti gli strumenti che usiamo e ci permette di risparmiare tantissimo tempo, ma non c'è alcun vincolo da questo punto di vista. In alcune circostanze ci ritroviamo anche ad intervenire su progetti con un "semplice" [Visual Studio Code](https://code.visualstudio.com/) e, benché le funzionalità di supporto non siano paragonabili, è possibile lavorare ai nostri progetti con qualsiasi strumento preferiate.

## Stili e script
Amiamo il codice ben scritto, ordinato e conforme alle regole che concordiamo insieme. In questa nostra missione aiuta molto l'utilizzo di [SASS](https://sass-lang.com/) e [Typescript](https://www.typescriptlang.org/).

Preferiamo l'utilizzo di funzionalità JavaScript Vanilla rispetto a librerie come jQuery, non utilizziamo framework come Bootstrap (ad eccezione del loro resetter), ma cerchiamo di sfruttare il più possibile ciò che l'ecosistema web ha da offrire nativamente.

Questa nostra scelta ci permette di ottenere notevoli vantaggi, ma siamo pronti a valutare qualsiasi strumento che possa migliorare il risultato del nostro lavoro.

**Nota:** in questo progetto, per semplicità, non abbiamo aggiunto configurazioni di linting, ma normalmente tutto il nostro codice viene sottoposto a controlli automatici per verificare che lo stile sia conforme alle linee guida concordate *(spaziature, interruzioni di linea, ordine delle proprietà CSS, visibilità delle proprietà di oggetti, etc.)*.

## Audit e metriche
Prestiamo massima attenzione a tutto ciò che può essere migliorato seguendo suggerimenti e best-practice proposte da fonti autorevoli. Tutti i nostri prodotti puntano ad ottenere risultati di alto livello verificabili con Lighthouse CI (Google mette a disposizione il servizio su [web.dev](https://web.dev/measure/)).

In linea generale, ad eccezione della metrica **Performance** che può oscillare per varie ragioni mantenendosi mediamente entro il range `85-100`, tutte le altre metriche devono puntare al punteggio pieno.

Per questo motivo richiediamo la massima attenzione a tutti i parametri che vengono riconosciuti come indice di buona qualità di un prodotto web.

# Cosa fare con questo repository?
Speriamo di averti trasmesso la nostra filosofia e ti mettiamo a disposizione lo scheletro di un progetto dove potrai verificare ciò che hai letto nei paragrafi precedenti portando a termine alcuni semplici task:
- creare un fork su GitHub di questo repository
- clonare il repository in locale
- installare le dipendenze del progetto (`composer install && yarn`)
- compilare gli asset del progetto (`yarn build` o `yarn watch` per avviare la ricompilazione live)
- avviare il progetto con Symfony CLI (`symfony serve`)
- visualizzare il progetto in locale su `http://127.0.0.1:8000`
- modificare i principali file di front end per implementare qualcosa di personale con gli strumenti messi a disposizione.
  I file principali sono:
  - [`/assets/main.ts`](/assets/main.ts): il file principale degli script
  - [`/assets/main.scss`](/assets/main.scss): il file principale degli stili
  - [`/templates/base.html.twig`](/templates/base.html.twig): il file principale dei template HTML
  - [`/templates/main/index.html.twig`](/templates/main/index.html.twig): il file di template della root del progetto
- pubblicare le modifiche sul tuo repository personale

Se tutte le voci di questa lista ti suonano familiari, allora dovremmo essere sulla stessa lunghezza d'onda. In caso contrario contattaci ugualmente per valutare in che modo collaborare insieme.
