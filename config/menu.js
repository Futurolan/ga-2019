const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'tickets' },
  { type: 'config', id: 'tournaments' },
  { type: 'nolink',
    title: 'Infos',
    children: [
      { type: 'config', id: 'info' },
      { type: 'page', title: 'Grand Poitiers', id: 1246, link: '/grand-poitiers' }
    ] },
  { type: 'config', id: 'partners' }
]

module.exports = menu
