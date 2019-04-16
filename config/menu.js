const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'tickets' },
  { type: 'page', title: 'Pass\'Bar', id: 2822, link: '/passbar' },
  { type: 'config', id: 'tournaments' },
  { type: 'nolink',
    title: 'Infos',
    children: [
      { type: 'config', id: 'info' },
      { type: 'page', title: 'Location', id: 3078, link: '/location' },
      { type: 'page', title: 'Plan', id: 3307, link: '/plan' },
      { type: 'config', id: 'schedule' },
      { type: 'config', id: 'exhibitors' },
      { type: 'config', id: 'family' },
      { type: 'config', id: 'influencers' },
      { type: 'page', title: 'Cosplay', id: 2673, link: '/cosplay' },
      { type: 'page', title: 'Les Offs', id: 2727, link: '/offs' },
      { type: 'page', title: 'Grand Poitiers', id: 1246, link: '/grand-poitiers' }
    ] },
  { type: 'page', title: 'Concours', id: 3175, link: '/concours' },
  { type: 'config', id: 'partners' }
]

module.exports = menu
