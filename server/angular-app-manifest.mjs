
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
    'index.html': {size: 64859, hash: 'ad791fcf6faa6f2c1f5d1f920e2cfd2debd69725a243a70c71bd27817815fc88', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin-miage-2003-directive/index.html': {size: 14515, hash: 'd3738be3a77e34a432034fb7746d8891517d7e19d774ccf9f1c80acf2efb5bc4', text: () => import('./assets-chunks/admin-miage-2003-directive_index_html.mjs').then(m => m.default)},
    'mentions-legales/index.html': {size: 33001, hash: '8948066d56b19be30c01de09c22ba1742a256dad99a5399d561c24c651512bc4', text: () => import('./assets-chunks/mentions-legales_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30130, hash: '083315eca966dfe3ab91d7749594a8a2e9a9b1168f9cc65cea69e9ff4fa004c5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'devis/index.html': {size: 32991, hash: 'b513a2f6e60e1543d33efc2d8f4798ae9ea7405ec6f6fe324774f2d124944e9d', text: () => import('./assets-chunks/devis_index_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 43238, hash: 'c0c7970fc7f8823ba4759362aee13e0ab5071f03155a4372fd8246d36d8ea5ba', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 38231, hash: '058240f96a88772ec0b3cbaaaecd03ae13d4e2a3b91bc468b1e38b9f87d11740', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'styles-HRKHS6S5.css': {size: 232453, hash: 'JhID8aGNPKk', text: () => import('./assets-chunks/styles-HRKHS6S5_css.mjs').then(m => m.default)}
  },
};
