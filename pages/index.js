import Head from 'next/head'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'

function HomePage() {
    return <>
        <Head>
            <title>Silver dollop</title>
        </Head>
        <Container>
            <h1>Silver dollop</h1>
            <Link href="/users/luc">Luc</Link>
        </Container>
    </>
}

export default HomePage
