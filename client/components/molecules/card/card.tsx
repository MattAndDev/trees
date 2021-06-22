import { h, FunctionalComponent, JSX } from 'preact'
import s from './card.css'
import cn from 'classnames'
import { Button, Heading } from '../../atoms'
import { useState } from 'preact/hooks'

export type CardProps = JSX.HTMLAttributes<HTMLDivElement> & {
  title: string
  subTitle: string
  img: string
  btnText?: {
    showImg: string
    hideImg: string
  }
  imgErrorText?: string
}

export const Card: FunctionalComponent<CardProps> = ({
  className,
  title,
  subTitle,
  img,
  btnText = {
    showImg: 'Show image',
    hideImg: 'Hide image'
  },
  ...rest
}) => {
  const [imgVisible, setImgVisible] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgLoadError, setImgLoadError] = useState(false)
  return (
    <div className={cn(s.wrap, className, {})} {...rest}>
      <Heading level={2}>{title}</Heading>
      <Heading level={3}>{subTitle}</Heading>
      {imgVisible && (
        <img
          onLoad={() => setImgLoaded(true)}
          className={cn(s.imgFull, { [s.imgLoading]: !imgLoaded })}
          onError={() => setImgLoadError(true)}
          src={img}
        />
      )}
      {!imgLoadError && (
        <Button
          isLoading={imgVisible && !imgLoaded}
          onClick={() => setImgVisible(!imgVisible)}
        >
          {imgVisible && imgLoaded ? btnText.hideImg : btnText.showImg}
        </Button>
      )}
      {imgLoadError && <span>{imgLoadError}</span>}
    </div>
  )
}
