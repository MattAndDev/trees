declare namespace HeadingCssNamespace {
  export interface IHeadingCss {
    common: string
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
  }
}

declare const HeadingCssModule: HeadingCssNamespace.IHeadingCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeadingCssNamespace.IHeadingCss
}

export = HeadingCssModule
