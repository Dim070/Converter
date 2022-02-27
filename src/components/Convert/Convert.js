import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap";

function Convert() {
    return (
        <Container className='w-75'>
            <Form className="flex-column">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formFrom">
                        <Form.Label>From</Form.Label>
                        <Form.Select size='lg'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formTo">
                        <Form.Label>To</Form.Label>
                        <Form.Select size='lg'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Stack direction='horizontal' className='justify-content-end'>
                    <Button className="mb-3">Convert</Button>
                </Stack>
                <p>1.000.000 Amount From = To 1.000.000</p>
            </Form>
        </Container>
    )
}

export default Convert

