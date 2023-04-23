'use client'
import { FC } from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/Tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import SimpleBar from 'simplebar-react'
import Code from '@/components/Code'
import { nodejs, python } from '@/helpers/documentation-code'


const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue='nodejs' className='max-w-2xl w-full '>
        <TabsList>
            <TabsTrigger value='nodejs'>NodeJs</TabsTrigger>
            <TabsTrigger value='python'>Python</TabsTrigger>
        </TabsList>
        <TabsContent value='nodejs' className='p-6 mt-4 mb-6 border rounded-md border-slate-600 '>
            {/* <SimpleBar></SimpleBar> */}
            <Code language='javascript' code={nodejs} show animated ></Code>
        </TabsContent>
        <TabsContent value='python' className='p-6 mt-4 mb-6 border rounded-md border-slate-600 '>
            {/* <SimpleBar></SimpleBar> */}
            <Code language='javascript' code={python} show animated ></Code>
        </TabsContent>

        <TabsContent value='python'></TabsContent>

    </Tabs>
  )
}

export default DocumentationTabs