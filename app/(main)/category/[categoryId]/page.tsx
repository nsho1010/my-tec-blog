import Loading from '@/app/loading'
import Category from '@/components/category/Category'
import LayoutWithSidebar from '@/components/Layout/LayoutWithSidebar'
import { client } from '@/components/ui/microcms'
import { BlogType } from '@/types'
import { blogPerPage } from "@/lib/utils"
import React, { Suspense } from 'react'

interface CategoryPageProps {
    params: {
        categoryId: string
    }

    searchParams: {
        [key: string]: string | undefined
    }
}

const CategoryPage = async ({params, searchParams}: CategoryPageProps) => {
    const {categoryId} = params
    const { page, perPage } = searchParams

    const limit = typeof perPage === "string" ? parseInt(perPage) : blogPerPage
    const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0

    const categoryBlogs = await client.getList<BlogType>({
        endpoint: "blog",
        queries: {
            limit: limit,
            offset: offset,
            filters: `category[equals]${categoryId}`,
            orders: `-publishedAt`
        }
    })

    const pageCount = Math.ceil(categoryBlogs.totalCount / limit)
    return (
        <Suspense fallback={<Loading/>}>
            <LayoutWithSidebar>
            <Category blogs={categoryBlogs.contents} pageCount={pageCount} />            </LayoutWithSidebar>
        </Suspense>
    )
}

export default CategoryPage