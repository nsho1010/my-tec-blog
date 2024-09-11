import Loading from '@/app/loading'
import Category from '@/components/category/Category'
import LayoutWithSidebar from '@/components/Layout/LayoutWithSidebar'
import { client } from '@/components/ui/microcms'
import { BlogType } from '@/types'
import React, { Suspense } from 'react'

interface CategoryPageProps {
    params: {
        categoryId: string
    }
}

const CategoryPage = async ({params}: CategoryPageProps) => {
    const {categoryId} = params

    const categoryBlogs = await client.getList<BlogType>({
        endpoint: "blog",
        queries: {
            filters: `category[equals]${categoryId}`,
            orders: `-publishedAt`
        }
    })
  return (
    <Suspense fallback={<Loading/>}>
        <LayoutWithSidebar>
            <Category blogs={categoryBlogs.contents}/>
        </LayoutWithSidebar>
    </Suspense>
  )
}

export default CategoryPage