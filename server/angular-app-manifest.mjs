
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/presentation"
  },
  {
    "renderMode": 2,
    "route": "/devis"
  },
  {
    "renderMode": 2,
    "route": "/projets"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/mentions-legales"
  },
  {
    "renderMode": 2,
    "route": "/admin-miage-2003-directive"
  },
  {
    "renderMode": 2,
    "route": "/admin"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5690, hash: 'beffa05808d06ae6763a6406291c837ecb5991392494b16821917f5ab9017cb9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1554, hash: '1f8ba9300db339aa71e40d1b0df327617b15e6e8df5526c8fd332bd033b703fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'presentation/index.html': {size: 40929, hash: 'a05244e2e8f1959cfea3fd9d42b526111beb4c68f2af7665e509e0c9516ae8b1', text: () => import('./assets-chunks/presentation_index_html.mjs').then(m => m.default)},
    'mentions-legales/index.html': {size: 33001, hash: '8948066d56b19be30c01de09c22ba1742a256dad99a5399d561c24c651512bc4', text: () => import('./assets-chunks/mentions-legales_index_html.mjs').then(m => m.default)},
    'index.html': {size: 64859, hash: 'ad791fcf6faa6f2c1f5d1f920e2cfd2debd69725a243a70c71bd27817815fc88', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30130, hash: '083315eca966dfe3ab91d7749594a8a2e9a9b1168f9cc65cea69e9ff4fa004c5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'devis/index.html': {size: 32991, hash: 'b5d0166170bcdd653e1467525f9d05be1224798f8627165bc380f4093b070c12', text: () => import('./assets-chunks/devis_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 38233, hash: 'dcb6fd67713b7847849e0bf2e8a9a485046b3fd1775b558061526e5894b5f482', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 43238, hash: '81bf1010ddf7b32e1c4a758f2b105be0877c14299433f3a439b7c80607d5a4ff', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'admin-miage-2003-directive/index.html': {size: 14515, hash: 'd3738be3a77e34a432034fb7746d8891517d7e19d774ccf9f1c80acf2efb5bc4', text: () => import('./assets-chunks/admin-miage-2003-directive_index_html.mjs').then(m => m.default)},
    'styles-HRKHS6S5.css': {size: 232453, hash: 'JhID8aGNPKk', text: () => import('./assets-chunks/styles-HRKHS6S5_css.mjs').then(m => m.default)}
  },
};
