import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { FC, useState } from 'react'
import { Button } from './ui/Button'
import { Loader2 } from 'lucide-react'
import { toast } from './ui/Toast'
interface ApiKeyOptionsProps {
  apiKeyId:string,
  apiKeyText:string
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({apiKeyId, apiKeyText}) => {
    const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false)
    const [isRevoking, setIsRevoking] = useState<boolean>(false)

  return( 
    <div>
        <DropdownMenu>
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
            <DropdownMenuItem onClick={() => {
                navigator.clipboard.writeText(apiKeyText)
                toast({
                    title:'Copied',
                    message:'API key copied to clipboard',
                    type:'success'
                })
            }}>

            </DropdownMenuItem>
            <DropdownMenuItem>
                Create new key
            </DropdownMenuItem>
            <DropdownMenuItem>
                Revoke new key
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  </div> 
  )
}

export default ApiKeyOptions






