declare namespace HomeCssNamespace {
  export interface IHomeCss {
    wrap: string
  }
}

declare const HomeCssModule: HomeCssNamespace.IHomeCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeCssNamespace.IHomeCss
}

export = HomeCssModule
