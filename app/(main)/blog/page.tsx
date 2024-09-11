import Loading from '@/app/loading'
import Blog from '@/components/blog/Blog'
import LayoutWithSidebar from '@/components/Layout/LayoutWithSidebar'
import { client } from '@/components/ui/microcms'
import { BlogType } from '@/types'
import React, { Suspense } from 'react'

const BlogPage = async () => {
    const allBlog = await client.getList<BlogType>({
        endpoint: "blog",
        queries: {
            orders: "-publishedAt"
        }
    })

  return (
    <Suspense fallback={<Loading/>}>
        <LayoutWithSidebar>
            <Blog blogs={allBlog.contents}/>
        </LayoutWithSidebar>
    </Suspense>
  )
}

export default BlogPage