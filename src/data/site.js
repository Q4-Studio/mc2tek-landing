export function createSiteConfig(webhookUrl = "") {
  return {
    brand: {
      name: "MC2 TEK",
      legalName: "MC2 TEK Ingegneria e Servizi",
      description:
        "Ingegneria e progettazione di impianti elettrici, termotecnici e riscaldamento in Veneto. Efficienza, innovazione, sostenibilita e transizione energetica a Padova.",
      location: "Vigonza (PD)",
      email: "info@mc2tek.com",
      phone: "049/8935842",
      mobile: "327-2624437",
      vat: "03936810286",
      address: "Viale del Lavoro 2 - 35010 Vigonza (PD)",
      mapsUrl:
        "https://www.google.com/maps/place/Viale+del+Lavoro,+2,+35010+Vigonza+PD/@45.435452,11.956512,17z/data=!3m1!4b1!4m6!3m5!1s0x477ecffa8cf55b1b:0x393f84656ab6c660!8m2!3d45.435452!4d11.9590869!16s%2Fg%2F11d_6lmnvh?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
    },
    nav: [
      { label: "Home", href: "#top" },
      { label: "Servizi", href: "#servizi" },
      { label: "Metodo", href: "#metodo" },
      { label: "Contatti", href: "#contatti" },
    ],
    hero: {
      eyebrow: "MC2 TEK Ingegneria e Servizi",
      title: "Il tuo nuovo partner per una migliore innovazione.",
      intro:
        "Progettiamo impianti meccanici, elettrici, speciali, antincendio ed energetici per edifici civili, industriali e del terziario.",
      primaryCta: {
        label: "Richiedi una Consulenza",
        href: "#contatti",
      },
      secondaryCta: {
        label: "Esplora i servizi",
        href: "#servizi",
      },
      video: "/source-assets/video/85821d495392c913b676d90626c03971.mp4",
      poster: "/source-assets/video/d36175f4549276e09bf8bac02ef5958f.jpg",
    },
    services: [
      {
        title: "Impianti Meccanici",
        description:
          "Progettiamo e realizziamo sistemi affidabili ed efficienti, garantendo comfort, prestazioni elevate e riduzione dei costi di gestione.",
        icon: "/source-assets/media/icon-impianti-meccanici.svg",
      },
      {
        title: "Efficientamento Energetico",
        description:
          "Sviluppiamo interventi per ridurre i consumi energetici e migliorare le prestazioni degli edifici, attraverso diagnosi, simulazioni, riqualificazioni e integrazione delle fonti rinnovabili.",
        icon: "/source-assets/media/icon-efficientamento-energetico.svg",
      },
      {
        title: "Prevenzione Incendi",
        description:
          "Progettiamo le misure di prevenzione e protezione antincendio e gestiamo le pratiche autorizzative presso i Vigili del Fuoco, nel rispetto della normativa vigente.",
        icon: "/source-assets/media/icon-prevenzione-incendi.svg",
      },
      {
        title: "Sicurezza e Impianti Elettrici",
        description:
          "Progettiamo impianti elettrici, illuminotecnici, fotovoltaici, domotici, antintrusione, trasmissione dati e supervisione, coordinandoli con le altre discipline progettuali.",
        icon: "/source-assets/media/icon-sicurezza-elettrica.svg",
      },
      {
        title: "Acustica e Misurazioni",
        description:
          "Analizziamo e gestiamo il comfort acustico degli ambienti attraverso rilievi e soluzioni tecniche mirate.",
        icon: "/source-assets/media/icon-acustica.svg",
      },
      {
        title: "Direzione Lavori",
        description:
          "Coordiniamo e verifichiamo l’esecuzione degli impianti, controllando conformità al progetto, qualità delle lavorazioni, tempi, costi, prove funzionali e documentazione finale.",
        icon: "/source-assets/media/icon-direzione-lavori.svg",
      },
    ],
    approach: {
      eyebrow: "Metodo",
      title: "Un impianto progettato bene deve essere coerente in ogni dettaglio.",
      intro:
        "Dall’idea al collaudo: un processo coordinato per impianti affidabili e realizzabili.",
      pillars: [
        {
          step: "01",
          title: "Analisi e rilievo",
          text: "Esaminiamo lo stato dei luoghi, le esigenze funzionali, i vincoli normativi e gli obiettivi energetici ed economici dell’intervento.",
        },
        {
          step: "02",
          title: "Progettazione integrata e BIM",
          text: "Sviluppiamo gli impianti meccanici, elettrici, speciali e antincendio, anche mediante modellazione BIM con Autodesk Revit.",
        },
        {
          step: "03",
          title: "Coordinamento e verifica",
          text: "Coordiniamo impianti, architettura e strutture, verificando interferenze, prestazioni, quantità e coerenza degli elaborati progettuali.",
        },
        {
          step: "04",
          title: "Direzione lavori e collaudo",
          text: "Seguiamo l’esecuzione delle opere, controllando conformità, qualità, tempi, prove funzionali e documentazione finale degli impianti.",
        },
      ],
      image: "/source-assets/video/8a3721d7bdc28b2f072074060941bf78.jpg",
    },
    contact: {
      eyebrow: "Contatti",
      title: "Raccontaci il progetto.",
      intro:
        "Il form e pronto per essere collegato al tuo webhook. Intanto restano visibili tutti i riferimenti diretti di MC2TEK.",
      webhookUrl,
      fields: ["name", "email", "phone", "company", "message", "privacyAccepted", "pageUrl"],
    },
    footer: {
      notes: ["Privacy policy", "Informativa sui cookie"],
    },
  };
}
