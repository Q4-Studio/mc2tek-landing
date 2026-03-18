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
      { label: "Servizi", href: "#servizi" },
      { label: "Metodo", href: "#metodo" },
      { label: "Contatti", href: "#contatti" },
    ],
    hero: {
      eyebrow: "MC2 TEK Ingegneria e Servizi",
      title: "Il tuo nuovo partner per una migliore innovazione.",
      intro:
        "Le sfide moderne richiedono soluzioni ingegneristiche avanzate. Innovazione ed efficienza sono la chiave per trasformare le idee in realta sostenibili.",
      primaryCta: {
        label: "Parla con noi",
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
        icon: "/source-assets/media/7d972a139a75d9f7055314fa41515032.png",
      },
      {
        title: "Efficientamento Energetico",
        description:
          "Sviluppiamo soluzioni innovative per ridurre i consumi e migliorare la sostenibilita, aumentando il valore degli immobili.",
        icon: "/source-assets/media/f22f9e6945d6655bde1103160a7e837b.png",
      },
      {
        title: "Prevenzione Incendi",
        description:
          "Offriamo progettazione e consulenza per impianti antincendio, nel rispetto delle normative, per garantire sicurezza e protezione totale.",
        icon: "/source-assets/media/0c877951045031a81ae9c2826a8ddaa3.png",
      },
      {
        title: "Sicurezza e Impianti Elettrici",
        description:
          "Realizziamo impianti elettrici sicuri e tecnologicamente avanzati, per un utilizzo affidabile e conforme agli standard di settore.",
        icon: "/source-assets/media/477a0f2934b19417f9acc2d2ae6a74e1.svg",
      },
      {
        title: "Acustica e Misurazioni",
        description:
          "Analizziamo e gestiamo il comfort acustico degli ambienti attraverso rilievi e soluzioni tecniche mirate.",
        icon: "/source-assets/media/177695e3847fcbf8f7508760755d64e8.png",
      },
      {
        title: "Direzione Lavori",
        description:
          "Coordiniamo e supervisioniamo ogni fase del progetto, assicurando qualita, rispetto delle tempistiche e massima efficienza.",
        icon: "/source-assets/media/2da83fede04a16d535d32249d5bb8628.png",
      },
    ],
    approach: {
      eyebrow: "Metodo",
      title: "Un impianto progettato bene deve essere coerente in ogni dettaglio.",
      intro:
        "Il restyling porta ordine, gerarchia e una voce piu attuale senza perdere il patrimonio tecnico di MC2TEK.",
      pillars: [
        {
          title: "Innovazione",
          text: "Tecnologia e progettazione avanzata applicate a contesti reali.",
        },
        {
          title: "Efficienza",
          text: "Prestazioni elevate, controllo dei consumi e riduzione dei costi di gestione.",
        },
        {
          title: "Sostenibilita",
          text: "Scelte che aumentano il valore degli immobili e sostengono la transizione energetica.",
        },
        {
          title: "Supervisione",
          text: "Direzione lavori e coordinamento costante per garantire esiti affidabili.",
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
