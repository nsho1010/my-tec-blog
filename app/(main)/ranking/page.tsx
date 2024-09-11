import Loading from '@/app/loading'
import LayoutWithSidebar from '@/components/Layout/LayoutWithSidebar'
import Ranking from '@/components/ranking/Ranking'
import { client } from '@/components/ui/microcms'
import { BlogType } from '@/types'
import React, { Suspense } from 'react'

const RankingPage = async () => {
    const rankingBlogs = await client.getList<BlogType>({
        endpoint: "blog",
        queries: {
            filters: "ranking[exists]",
            orders: "ranking"
        }
    })
  return (
    <Suspense fallback={<Loading/>}>
        <LayoutWithSidebar>
            <Ranking blogs={rankingBlogs.contents}/>
        </LayoutWithSidebar>
    </Suspense>
  )
}

export default RankingPage