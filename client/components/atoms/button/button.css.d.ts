declare namespace ButtonCssNamespace {
  export interface IButtonCss {
    appear: string
    spinner: string
    wrap: string
  }
}

declare const ButtonCssModule: ButtonCssNamespace.IButtonCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonCssNamespace.IButtonCss
}

export = ButtonCssModule
