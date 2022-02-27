import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Stack, Table} from "react-bootstrap";

function Currencies() {
    return (
        <Container className='w-50'>
            <Stack className='d-flex flex-row justify-content-center align-items-center' gap={3}>
                <Form.Label className="">Base currency:</Form.Label>
                <Form.Select className="w-50">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </Form.Select>
            </Stack>

            <Table>
                <thead>
                <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Currencies

