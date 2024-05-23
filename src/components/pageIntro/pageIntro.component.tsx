import { cn } from '@/utils/classes'
import { IPageIntro } from './interface'

export const PageIntroBox = ({ className, title, subtitle, ...props }: IPageIntro) => {
  const hasTitle = title && title.length
  const hasSubtitle = subtitle && subtitle.length

  const responsiveClassesTitle = 'sm:text-2xl sm:leading-10 sm:mb-2 md:text-3xl md:leading-10 md:mb-2'
  const responsiveClassesSubtitle = 'sm:text-lg sm:leading-6 md:text-xl md:leading-8 md:max-w-full xl:max-w-[80%]'

  return (
    <section className={cn('w-full mb-[3.125rem] lg:mb-6 md:mb-8', className)} {...props}>
      {hasTitle && (
        <h1 className={cn('text-4xl leading-[4rem] text-grayStarWars-300 mb-[1.563rem]', responsiveClassesTitle)}>
          {title}
        </h1>
      )}
      {hasSubtitle && (
        <h2 className={cn('text-1xl m-0 leading-8 max-w-[52%] tracking-[0.056rem]', responsiveClassesSubtitle)}>
          {subtitle}
        </h2>
      )}
    </section>
  )
}
