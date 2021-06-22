declare namespace MasonryCssNamespace {
  export interface IMasonryCss {
    wrap: string
  }
}

declare const MasonryCssModule: MasonryCssNamespace.IMasonryCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MasonryCssNamespace.IMasonryCss
}

export = MasonryCssModule
