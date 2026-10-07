# KAVERN – čišćenje i održavanje (sajt)

Jednostrani, responzivni sajt (HTML5 + CSS3 + vanilla JavaScript, bez frameworka).

## Struktura

```
kavern-sajt/
├── index.html        – sadržaj sajta
├── style.css         – izgled (mobile-first)
├── script.js         – sva logika + PODEŠAVANJA na vrhu fajla
├── favicon.svg       – ikonica (logo)
└── images/
    ├── portali-hero.jpg       – hero pozadina + galerija
    ├── portali-luk.jpg        – galerija
    ├── restoran-dizalica.jpg  – kartica „Pranje portala na visini“ + galerija
    ├── kauc-prepost-1.jpg     – Pre/Posle 1 (levo pre, desno posle) + galerija
    ├── kauc-prepost-2.jpg     – Pre/Posle 2 (levo pre, desno posle) + galerija
    ├── kauc-prepost-3.jpg     – Pre/Posle 3 (gore pre, dole posle)
    ├── kauc-prepost-4.jpg     – Pre/Posle 4 (gore pre, dole posle)
    └── o-nama-radnik.jpg      – sekcija „O nama“
```

Referentne slike (mockup, letci sa cenama, liste majstorskih usluga) namerno **nisu** na sajtu, kako je i traženo.

## Objavljivanje

**Netlify (najlakše):** otvorite <https://app.netlify.com/drop> i prevucite ceo folder `kavern-sajt`. Dobićete adresu odmah, a kasnije možete povezati svoj domen.

**GitHub Pages:** u repozitorijumu otvorite *Settings → Pages*, za *Source* izaberite granu (npr. `main`) i folder `/ (root)`, pa sačuvajte. Sajt će biti na `https://<korisnik>.github.io/kavern-sajt/`.

Putanje do slika su relativne (`images/naziv.jpg`), pa sajt radi i na Netlify-ju i na GitHub Pages podadresi.

Kada dobijete domen, u `index.html` upišite punu adresu slike u `og:image` (radi lepšeg prikaza linka na Viber-u, Facebook-u i drugde).

## Izmene (sve na vrhu `script.js`)

- **Telefon / WhatsApp / e-mail / radno vreme:** objekat `CONFIG`. Broj se menja na celom sajtu odjednom. (Broj je zbog Google-a upisan i u `index.html`, u bloku `application/ld+json`. Ako promenite broj, promenite ga i tamo.)
- **Cene nameštaja:** objekat `PRICES`. Cena može biti broj (`1200`), raspon (`[200, 300]`) ili tekst (`'po dogovoru'`).
- **Cene majstorskih usluga:** objekat `HANDYMAN_PRICES` (kategorije i stavke).
- **Uključi/isključi „Majstorske usluge“:** `const SHOW_HANDYMAN = true;` → `false` uklanja i sekciju i stavku u meniju.

## Intro animacija

Prvo prskanje vode po staklu, pa ga skidač briše jednim potezom, pa se pojavi logo. Traje oko 3,2 s i crta se na `<canvas>`, bez slika.
Prikazuje se jednom po sesiji, ima dugme „Preskoči“ (radi i taster Esc) i ne prikazuje se korisnicima koji su uključili *smanjeno kretanje*.
Za ponovno gledanje zatvorite karticu ili u konzoli pokrenite `sessionStorage.clear()`.
