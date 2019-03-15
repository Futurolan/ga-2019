let config = {
  title: 'Gamers Assembly 2019',
  logo: `/static/img/logo.png`,
  description: 'Retrouvez la Gamers Assembly 2019 du 20 au 22 avril 2019 pour une 20e édition de folie !',
  metaImagePath: `/static/img/logo.png`,
  gaTrackingId: 'UA-128777022-5',
  mainPartner: {
    logo: '/static/img/logo_gp.png',
    url: 'https://www.grandpoitiers.fr/'
  },
  home: {
    banner: '/static/img/banner.jpg',
    // hero: {
    //   background: '/static/img/bg-grey-area.jpg',
    //   title: 'Gamers Assembly',
    //   subtitle: 'Edition 2019'
    // },
    twitterAccount: 'GamersAssembly',
    partners: {
      active: true,
      delay: 10,
      count: 4
    }
  },
  news: {
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly 2019',
    link: '/news'
  },
  partners: {
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires',
    link: '/partenaires'
  },
  tournaments: {
    title: 'Tournois',
    description: 'Tous les tournois de la Gamers Assembly 2019',
    link: '/tournois'
  },
  info: {
    title: 'Infos',
    description: 'Toutes les informations sur la Gamers Assembly 2019',
    link: '/infos'
  },
  infosGA: {
    title: 'Venir à la GA',
    description: 'Toutes les informations sur la Gamers Assembly 2019',
    link: '/infos'
  },
  live: {
    title: 'Live',
    description: 'Tous les streams et résultats en direct',
    link: '/live'
  },
  tickets: {
    title: 'Billetterie',
    description: 'Achetez vos places pour la Gamers Assembly 2019',
    link: '/billetterie',
    pass: {
      title: 'Pass "Manager/Accompagnateur"',
      text: 'Pour obtenir des pass "Manager/Accompagnateur", les équipes inscrites aux tournois peuvent réaliser une demande via le lien ci-dessous.',
      button: 'Obtenir un pass'
    },
    minor: {
      title: 'Informations pour les mineurs',
      text: 'Vous devez télécharger l\'autorisation parentale, l\'imprimer, la remplir et l\'apporter le jour de votre venue avec votre billet.',
      button: 'Télécharger l\'autorisation parentale (format pdf)'
    },
    rules: {
      title: 'Règlement intérieur',
      text: 'L\'acquisition d\'un ticket entraîne l\'adhésion au règlement intérieur disponible ci-dessous.',
      button: 'Télécharger le règlement intérieur (format pdf)'
    }
  },
  exhibitors: {
    title: 'Exposants',
    description: 'Les exposants que vous pourrez retrouver à la Gamers Assembly',
    link: '/exposants'
  },
  family: {
    title: 'Espace Famille',
    description: 'Les activités à faire en famille durant la Gamers Assembly',
    link: '/espace-famille'
  },
  influencers: {
    title: 'Influenceurs',
    description: 'Les personnalités qui seront présentes pour la Gamers Assembly',
    link: '/influenceurs'
  },
  contact: {
    active: true,
    pageId: 6
  },
  press: {
    active: true,
    pageId: 7
  },
  legals: {
    active: true,
    pageId: 8
  },
  recruit: {
    active: true,
    title: 'Recrutement',
    description: 'Devenir bénévole pour la Gamers Assembly, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/xMUWgVAxaTTVNDbu1'
  },
  social: {
    twitter: 'https://twitter.com/GamersAssembly',
    facebook: 'https://www.facebook.com/GamersAssembly',
    twitch: 'https://twitch.tv/gamers_assembly',
    youtube: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    flickr: 'https://www.flickr.com/photos/futurolan',
    discord: 'https://discordapp.com/invite/gamersassembly'
  }
}

module.exports = config
