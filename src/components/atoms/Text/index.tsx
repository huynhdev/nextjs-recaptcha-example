import React from 'react'

export enum TextTypeEnum {
  Link = 'Link',
  Text = 'Text',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  B = 'B',
  I = 'I',
  Em = 'Em',
  U = 'U',
  S = 'S',
  Del = 'Del',
  Pre = 'Pre',
  Code = 'Code',
  Blockquote = 'Blockquote',
  Figcaption = 'Figcaption',
  Cite = 'Cite'
}

export type BaseTextProps = React.HTMLAttributes<HTMLSpanElement>

const BaseText = ({ children, ...props }: BaseTextProps) => {
  return <span {...props}>{children}</span>
}

export type BaseLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const BaseLink = ({ children, ...props }: BaseLinkProps) => {
  return <a {...props}>{children}</a>
}

export type BaseH1Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH1 = ({ children, ...props }: BaseH1Props) => {
  return <h1 {...props}>{children}</h1>
}

export type BaseH2Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH2 = ({ children, ...props }: BaseH2Props) => {
  return <h2 {...props}>{children}</h2>
}

export type BaseH3Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH3 = ({ children, ...props }: BaseH3Props) => {
  return <h3 {...props}>{children}</h3>
}

export type BaseH4Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH4 = ({ children, ...props }: BaseH4Props) => {
  return <h4 {...props}>{children}</h4>
}

export type BaseH5Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH5 = ({ children, ...props }: BaseH5Props) => {
  return <h5 {...props}>{children}</h5>
}

export type BaseH6Props = React.HTMLAttributes<HTMLHeadingElement>

const BaseH6 = ({ children, ...props }: BaseH6Props) => {
  return <h6 {...props}>{children}</h6>
}

export type BaseBProps = React.HTMLAttributes<HTMLElement>

const BaseB = ({ children, ...props }: BaseBProps) => {
  return <b {...props}>{children}</b>
}

export type BaseIProps = React.HTMLAttributes<HTMLElement>

const BaseI = ({ children, ...props }: BaseIProps) => {
  return <i {...props}>{children}</i>
}

export type BaseEmProps = React.HTMLAttributes<HTMLElement>

const BaseEm = ({ children, ...props }: BaseEmProps) => {
  return <em {...props}>{children}</em>
}

export type BaseUProps = React.HTMLAttributes<HTMLElement>

const BaseU = ({ children, ...props }: BaseUProps) => {
  return <u {...props}>{children}</u>
}

export type BaseSProps = React.HTMLAttributes<HTMLElement>

const BaseS = ({ children, ...props }: BaseSProps) => {
  return <s {...props}>{children}</s>
}

export type BaseDelProps = React.HTMLAttributes<HTMLModElement>

const BaseDel = ({ children, ...props }: BaseDelProps) => {
  return <del {...props}>{children}</del>
}

export type BasePreProps = React.HTMLAttributes<HTMLPreElement>

const BasePre = ({ children, ...props }: BasePreProps) => {
  return <pre {...props}>{children}</pre>
}

export type BaseCodeProps = React.HTMLAttributes<HTMLElement>

const BaseCode = ({ children, ...props }: BaseCodeProps) => {
  return <code {...props}>{children}</code>
}

export type BaseBlockquoteProps = React.HTMLAttributes<HTMLQuoteElement>

const BaseBlockquote = ({ children, ...props }: BaseBlockquoteProps) => {
  return <blockquote {...props}>{children}</blockquote>
}

export type BaseFigcaptionProps = React.HTMLAttributes<HTMLElement>

const BaseFigcaption = ({ children, ...props }: BaseFigcaptionProps) => {
  return <figcaption {...props}>{children}</figcaption>
}

export type BaseCiteProps = React.HTMLAttributes<HTMLElement>

const BaseCite = ({ children, ...props }: BaseCiteProps) => {
  return <cite {...props}>{children}</cite>
}

const ComponentMapping = {
  [TextTypeEnum.Text]: BaseText,
  [TextTypeEnum.Link]: BaseLink,
  [TextTypeEnum.H1]: BaseH1,
  [TextTypeEnum.H2]: BaseH2,
  [TextTypeEnum.H3]: BaseH3,
  [TextTypeEnum.H4]: BaseH4,
  [TextTypeEnum.H5]: BaseH5,
  [TextTypeEnum.H6]: BaseH6,
  [TextTypeEnum.B]: BaseB,
  [TextTypeEnum.I]: BaseI,
  [TextTypeEnum.Em]: BaseEm,
  [TextTypeEnum.U]: BaseU,
  [TextTypeEnum.S]: BaseS,
  [TextTypeEnum.Del]: BaseDel,
  [TextTypeEnum.Pre]: BasePre,
  [TextTypeEnum.Code]: BaseCode,
  [TextTypeEnum.Blockquote]: BaseBlockquote,
  [TextTypeEnum.Figcaption]: BaseFigcaption,
  [TextTypeEnum.Cite]: BaseCite
}

export type TextProps = BaseTextProps &
  BaseLinkProps &
  BaseH1Props &
  BaseH2Props &
  BaseH3Props &
  BaseH4Props &
  BaseH5Props &
  BaseH6Props &
  BaseBProps &
  BaseIProps &
  BaseEmProps &
  BaseUProps &
  BaseSProps &
  BaseDelProps &
  BasePreProps &
  BaseCodeProps &
  BaseBlockquoteProps &
  BaseFigcaptionProps &
  BaseCiteProps & {
    textType?: `${TextTypeEnum}`
  }

const Text = (props: TextProps) => {
  const { textType = TextTypeEnum.Text, className, ...rest } = props

  const Component = ComponentMapping[textType]

  return <Component {...rest} className={className} />
}

export { Text }
