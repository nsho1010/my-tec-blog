import { client } from '@/components/ui/microcms'
import { BlogType } from '@/types'
import React, { Suspense } from 'react'
import Loading from '../loading'
import TopList from '@/components/top/TopList'
import Top from '@/components/top/Top'
import LayoutWithSidebar from '@/components/Layout/LayoutWithSidebar'

const HomePage = async () => {

  const [ latestBlogs, recommendedBlogs, specialBlogs] = await Promise.all([

    // 最新の記事を10件取得
    client.getList<BlogType>({
      endpoint: "blog",
      queries: {
        orders: "-publishedAt",
        limit: 10,
      }
    }),

    //オススメの記事を取得
    client.getList<BlogType>({
      endpoint: "blog",
      queries: {
        filters: "isRecommended[equals]true"
      }
    }),

    // 特集記事を取得
    client.getList<BlogType>({
      endpoint: "blog",
      queries: {
        filters: "isSpecial[equals]true"
      }
    })

  ])

  return (
    <Suspense fallback={<Loading/>}>
      <div className='space-y-1o mb-10'>
        <Top blogs={recommendedBlogs.contents}/>
      </div>
      <LayoutWithSidebar>
        <TopList
          latestBlogs={latestBlogs.contents}
          recommendedBlogs={recommendedBlogs.contents}
          specialBlogs={specialBlogs.contents}
        />
      </LayoutWithSidebar>
    </Suspense>
  )
}

export default HomePage