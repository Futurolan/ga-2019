let config = {
  title: 'Gamers Assembly 2019',
  logo: `/static/img/logo.png`,
  description: 'Retrouvez la Gamers Assembly 2019 très prochainement',
  metaImage: `${process.env.BASE_URL}/static/img/logo.png`,
  gaTrackingId: 'UA-128777022-5',
  // mainPartner: {
  //   logo: '/static/img/logo_st_benoit.jpg',
  //   url: 'http://www.ville-saint-benoit.fr/'
  // },
  home: {
    banner: '/static/img/bg-blue-area.jpg',
    //hero: {
    //  background: '/static/img/bg-grey-area.jpg',
    //  title: 'Gamers Assembly',
    //  subtitle: 'Edition 2019'
    //},
    twitterAccount: 'GamersAssembly'
  },
  news: {
    active: true,
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly 2019'
  },
  recruit: {
    active: false,
    title: 'Recrutement',
    description: 'Devenir bénévole pour la Gamers Assembly, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/84pHQfSp50RcuUel2'
  },
  partners: {
    active: true,
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires'
  },
  tournaments: {
    active: false,
    title: 'Tournois',
    description: 'Tous les tournois de la Gamers Assembly 2019'
  },
  info: {
    active: true,
    title: 'Informations pratiques',
    description: 'Toutes les informations sur la Gamers Assembly 2019'
  },
  live: {
    title: 'Live',
    description: 'Tous les streams et résultats en direct'
  },
  tickets: {
    title: 'Billetterie',
    description: 'Achetez vos places pour la Gamers Assembly 2019'
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
  social: {
    twitter: 'https://twitter.com/GamersAssembly',
    facebook: 'https://www.facebook.com/GamersAssembly',
    twitch: 'https://twitch.tv/gamers_assembly',
    youtube: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    flickr: 'https://www.flickr.com/photos/futurolan'
  }
}

module.exports = config
