import Head from 'next/head'
import Layout from "../../components/Layout";



export default function Tasks() {
    return (
        <div>
            <Head>
                <title>taskManager | Tasks</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>
            <Layout>
                tasks
            </Layout>
        </div>
    )
}
