import { IPageIntro } from './interface'

export const PageIntroBox = ({ title, subtitle }: IPageIntro) => {
  const hasTitle = title && title.length
  const hasSubtitle = subtitle && subtitle.length

  return (
    <section className="w-full mb-[3.125rem]">
      {hasTitle && <h1 className="text-3xl leading-[4rem] text-grayStarWars-300 mb-[1.563rem]">{title}</h1>}
      {hasSubtitle && <h2 className=" text-1xl m-0 max-w-[52%] lg:max-w-full">{subtitle}</h2>}
    </section>
  )
}
