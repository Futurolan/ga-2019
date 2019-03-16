const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'tickets' },
  { type: 'config', id: 'tournaments' },
  { type: 'config',
    id: 'info',
    children: [
      { type: 'config', id: 'infosGA' },
      { type: 'page', title: 'Grand Poitiers', id: 1246, link: '/grand-poitiers' }
    ] },
  { type: 'config', id: 'partners' }
]

module.exports = menu
