# MC2TEK Landing

Landing one-page in Astro per il restyling di `mc2tek.com`, pubblicata in forma statica su GitHub Pages.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Contact Form

Il form invia un `POST` JSON a un webhook configurabile tramite variabile ambiente:

```bash
PUBLIC_CONTACT_WEBHOOK_URL=https://example.com/webhook
```

Payload inviato:

```json
{
  "name": "Mario Rossi",
  "email": "mario@example.com",
  "phone": "3271234567",
  "company": "Azienda",
  "message": "Richiesta informazioni",
  "privacyAccepted": true,
  "pageUrl": "https://q4-studio.github.io/mc2tek-landing/"
}
```
