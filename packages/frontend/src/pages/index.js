import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>
            <AppLayout>
                <Link href='/collection'>Collection</Link>
            </AppLayout>
        </>
    )
}
