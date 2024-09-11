import Loading from '@/app/loading'
import Archive from '@/components/archive/Archive'
import LayoutWithSidebar from '@/components/Layout/LayoutWithSidebar'
import { client } from '@/components/ui/microcms'
import { BlogType } from '@/types'
import React, { Suspense } from 'react'

export const revalidate = 0

interface ArchivePageProps {
    params: {
        year: string
        month: string
    }
}

const ArchivePage = async ({params}: ArchivePageProps) => {
    const { year, month } = params

    const formattedMonth = `${year}-${month.padStart(2, "0")}`

    const archiveBlogs = await client.getList<BlogType>({
        endpoint: "blog",
        queries: {
            filters: `publishedAt[begins_with]${formattedMonth}`,
            orders: "-publishedAt",
        }
    })

  return (
    <Suspense fallback={<Loading />}>
      <LayoutWithSidebar>
        <Archive blogs={archiveBlogs.contents} />
      </LayoutWithSidebar>
    </Suspense>
  )
}

export default ArchivePage