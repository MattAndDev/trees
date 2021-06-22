declare namespace CardCssNamespace {
  export interface ICardCss {
    imgFull: string
    imgLoading: string
    loadingEffect: string
    loadingTitle: string
    small: string
    wrap: string
  }
}

declare const CardCssModule: CardCssNamespace.ICardCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CardCssNamespace.ICardCss
}

export = CardCssModule
