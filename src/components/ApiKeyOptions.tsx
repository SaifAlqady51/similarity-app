import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { FC, useState } from 'react'
import { Button } from './ui/Button'
import { Loader2 } from 'lucide-react'

interface ApiKeyOptionsProps {
  
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({}) => {
    const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false)
    const [isRevoking, setIsRevoking] = useState<boolean>(false)

  return <DropdownMenu>
    <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
        <Button variant='ghost' className='flex gap-2 items-center'>
            <p>
                {isCreatingNew? 'Creating new Key': isRevoking? 'Revoking key': 'Options'}
            </p>
            {
                isCreatingNew || isRevoking? (
                    <Loader2 className='animate-spin h-4 w-4' />
                ) : null
            }
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuItem></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
}

export default ApiKeyOptions






