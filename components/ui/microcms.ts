import { createClient } from "microcms-js-sdk"

//API取得のためのクライアントを作成
export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_API_URL ?? "",
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY ?? ""
})