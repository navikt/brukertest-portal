# BACKEND

## Innholdsfortegnelse

-   Teknologier
    -   Backend teknologier
    -   Testing teknologier
-   Hvordan utvikle
    -   Utvikling i docker
        -   Krav
        -   Start utvikling
-   Hvordan teste
    -   Krav
    -   Oppsett av docker
    -   Kjøring av tester
-   Deployment
    -   NAIS

## Teknologier

### Backend teknologier

-   TypeScript
-   Node.js
-   Yarn
-   TypeORM
-   Express
-   PostgreSQL
-   Docker/Docker-compose
-   GCP (Google Cloud Platform)
-   Azure
-   NAIS

### Testing teknologier

-   Jest

## Hvordan utvikle

### Utvikling i docker

#### Krav

-   Docker
-   Docker compose
-   Node (Valgfrit)
-   Yarn (Valgfrit)

#### Start utvikling

1. Lag en `.env` fil i roten av "backend" mappen basert på den eksisterende `.env.example`
    1. `DB_HOST` må være "brukertest_portal_database"
    2. `DB_PORT` må være "5432"
2. (Valgfrit) Kjør `yarn install`
    1. Dett er kun for få å typene i din egen IDE, docker containeren har sin egen node_modules mappe, og fikser dette selv.
3. Kjør `docker-compose up --build`
    1. Hvis docker bildene er allerede bygget, trengs kun `docker-compose up` å kjøres.
4. La det svinge, la det kode!
    1. Hot reloading er skrudd på, så serveren restartes på alle endring i `src` mappa i backend.

## Hvordan teste

### Krav

-   Docker
-   Docker compose
-   Node
-   Yarn

### Oppsett av docker

1. Kjør `yarn start-test-db`
    1. Dette vil starte en test database som trengs for å kjøre de forskjellige testene.

### Kjøring av tester

1. Kjør `yarn test:locally`
    1. Dette vil kjøre testene i "watch" modus, som gjør at testene kjøres automatisk på \
       nytt når endringer i testene blir lagret.

## Deployment

### NAIS

Deployment av backende blir gjort på NAV sitt sin sky-tjeneste kalt NAIS. Deploymenten er \
konfigurert slik at NAIS deployer en instanse av backenden til dev-gcp og en instanse til prod-gcp. \
Ved deployment blir også en PostgreSQL database laget i hvert av GCP cluseterene. En Azure tjeneste \
blir også laget ved deployment.

Hver ny deployment skjer når kodendringer blir enten commitet eller merget inn til "main" branchen. \
Da vil en GitHub actions workflow bli trigget og ting vil bli deployet slik beskrivet over.
