import Loading from '@/app/loading'
import About from '@/components/about/About'
import LayoutWithSidebar from '@/components/Layout/LayoutWithSidebar'
import { client } from '@/components/ui/microcms'
import { AboutTypes } from '@/types'
import React, { Suspense } from 'react'


export const revalidate = 0

const AboutPage = async () => {
    const about = await client.getList<AboutTypes>({
        endpoint: "about",
        queries: {
            orders: "publishedAt",
            limit: 1
        }
    })

  return (
    <Suspense fallback={<Loading/>}>
        <LayoutWithSidebar>
            <About content={about.contents[0].content}/>
        </LayoutWithSidebar>
    </Suspense>
  )
}

export default AboutPage