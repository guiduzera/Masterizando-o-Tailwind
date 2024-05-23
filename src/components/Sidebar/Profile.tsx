import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/guiduzera.png"
        alt="imagem de perfil"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Guilherme Carvalho
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          guilherme.carvalho@dnacenter.com.br
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
