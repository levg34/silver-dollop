import Head from 'next/head'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import { getUserList } from '../data/utils'

function HomePage() {
    const users = getUserList()

    return <>
        <Head>
            <title>Silver dollop</title>
        </Head>
        <Container>
            <h1>Silver dollop</h1>
            {users && users.map(user => <><Link href={'/users/'+user}>{`View ${user}'s data`}</Link><br/></>)}
        </Container>
    </>
}

export default HomePage
