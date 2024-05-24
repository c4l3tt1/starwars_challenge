import { cn } from '@/utils/classes'
import Image from 'next/image'
import logoStarwars from '../../public/starwars-logo.png'
export const Loading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <div
      className={cn(
        'min-h-screen bg-galaxy object-cover bg-cover bg-center bg-no-repeat bg-opacity-90  fixed top-0 left-0 w-full flex items-center justify-center'
      )}
    >
      <div className="animate-bounce">
        <Image
          src={logoStarwars}
          width={300}
          height={300}
          loading="eager"
          alt="Logo Starwars"
          className="w-full h-auto max-w-52 mb-8 sm:max-w-40"
        />
      </div>
    </div>
  )
}

export default Loading
