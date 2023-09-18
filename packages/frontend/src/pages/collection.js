import AppLayout from '@/components/Layouts/AppLayout'
import { useCollection } from '@/hooks/collection'
import Head from 'next/head'

export default function Collection() {
    const {records, isError, isLoading} = useCollection()
    console.log(records)
    return (
        <>
            <Head>
                <title>Collection</title>
            </Head>
            <AppLayout>
                <p></p>
            </AppLayout>
        </>
    )
}
