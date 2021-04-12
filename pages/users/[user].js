import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Container, ListGroup, Form } from 'react-bootstrap'
import { getNotesForUser } from '../../data/utils'

function User(params) {
    const router = useRouter()
    const { user } = router.query
    const items = getNotesForUser(user)

    const [selectedItem, setSelectedItem] = useState()

    function displayContent(itemTitle) {
        setSelectedItem(items.find(item => item.title === itemTitle))
    }

    function handleChange(e) {
        const updatedItem = {
            title: selectedItem.title,
            content: e.target.value
        }

        setSelectedItem(updatedItem)
        // items[items.findIndex(item => item.title === selectedItem.title)] = updatedItem
    }

    return <Container>
        <h1>User {user}</h1>
        <br/>
        {selectedItem && <Form.Control as="textarea" rows={3} value={selectedItem.content} onChange={e =>handleChange(e)}/>}
        <br/>
        <ListGroup>
            {items.map(item => <ListGroup.Item onClick={displayContent.bind(null,item.title)} key={item.title} active={selectedItem && selectedItem.title === item.title}>{item.title}</ListGroup.Item>)}
        </ListGroup>
        <br/><br/>
        <Link href="/">Home</Link>
    </Container>
}

export default User