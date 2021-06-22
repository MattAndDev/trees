type EnvKey =
  | 'NODE_ENV'
  | 'BUNDLE_MODE'
  | 'SERVER_PORT'
  | 'BODY_ASSETS'
  | 'HMR_ENABLED'
  | 'OUT_DIR'
  | 'WATCH'
  | 'DEV_SERVER'

type Env = {
  NODE_ENV: 'development' | 'production'
  BUNDLE_MODE: 'debug' | 'production'
  SERVER_PORT: string
  BODY_ASSETS: string
  HMR_ENABLED: boolean
  DEV_SERVER: boolean
  WATCH: boolean
  OUT_DIR: string
  SCRIPTS: string
  STYLES: string
  MANIFEST: string
}

const basePath =
  process.env.HMR_ENABLED === 'true' ? 'http://localhost:4141' : ''

const env: Env = {
  NODE_ENV: (process.env.NODE_ENV as Env['NODE_ENV']) || 'production',
  SERVER_PORT: process.env.SERVER_PORT as string,
  HMR_ENABLED: process.env.HMR_ENABLED === 'true',
  DEV_SERVER: process.env.DEV_SERVER === 'true',
  WATCH: process.env.WATCH === 'true',
  BUNDLE_MODE: process.env.BUNDLE_MODE as Env['BUNDLE_MODE'],
  BODY_ASSETS: process.env.BODY_ASSETS || '',
  OUT_DIR: process.env.OUT_DIR || './app',
  STYLES: process.env.HMR_ENABLED
    ? ''
    : `<link href="${basePath}/css/styles.css" rel="stylesheet">`,
  MANIFEST: `<link rel="manifest" href="${basePath}/static/manifest.json" />`,
  SCRIPTS: `
    <script type="text/javascript" src="${basePath}/js/lib.js"></script>
    <script type="text/javascript" src="${basePath}/js/app.js"></script>
    `
}

export default env
