# FRONTEND

## Innholdsfortegnelse

-   Teknologier
    -   Frontend teknologier
    -   Testing teknologier
-   Hvordan utvikle
    -   Krav
    -   Start utvikling
-   Hvordan teste
    -   Krav
    -   Kjøring av tester
-   Deployment
    -   NAIS

## Teknologier

### Frontend teknologier

-   TypeScript
-   Node.js
-   Yarn
-   React
-   NAV's designbibliotek
-   Express
-   Docker
-   GCP (Google Cloud Platform)
-   Azure
-   NAIS

### Testing teknologier

-   Jest

## Hvordan utvikle

### Krav

-   Node
-   Yarn

### Start utvikling

1. Kjør `yarn`
2. Kjør `yarn start`
    1. Dette vil starte en lokal utviklings server, og vil automatisk åpne en nettside der frontenden vil bli vist
3. La det svinge, la det kode!
    1. Hot reloading er skrudd på, så serveren restartes på alle endring i `src` mappa i frontend.

## Hvordan teste

### Krav

-   Node
-   Yarn

### Kjøring av tester

1. Kjør ` yarn test`
    1. Dette vil kjøre testene i "watch" modus, som gjør at testene kjøres automatisk på nytt når endringer i testene blir lagret.

## Deployment

### NAIS

Deployment av frontend'en blir gjort på NAV sin sky-tjeneste kalt NAIS. Deploymenten er konfigurer \
slik at NAIS deployer en instanse av frontenden til dev-gcp og en instanse til prod-gcp. Ved \
deployment blir frontenden bygget og servert fra `server.js` fila.

Hver ny deployment skjer når kodeendringer blir enten commitet eller merget inn til "main" branchen. \
Da vil en GitHub actions workflow bli trigget og ting vli bli deployet slikt beskrivet over.
