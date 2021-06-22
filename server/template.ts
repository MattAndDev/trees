import env from '@env'

export const template = (head = '', html: string): string =>
  `
    <head>      
      ${head}
      ${env.STYLES}
      ${env.MANIFEST}
    </head>
    <body>
      ${html}
      ${env.SCRIPTS}
    </body>
  `
