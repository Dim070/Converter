import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Stack, Table} from "react-bootstrap";
import Option from "../db";
import Rate from "../db";

const currencies = [
    {"id": "USD", "name": "US Dollar"},
    {"id": "EUR", "name": "Euro"},
    {"id": "RUB", "name": "Russian Ruble"},
    {"id": "JPY", "name": "Japanese Yen"},
    {"id": "CHF", "name": "Swiss Franc"},
    {"id": "CNY", "name": "Chinese Yuan"}
]
const rates = [
    {
        "id": "USD",
        "rates": {
            "EUR": 0.8812,
            "RUB": 76.7962,
            "JPY": 115.36,
            "CHF": 0.9255,
            "CNY": 6.3606
        }
    },
    {
        "id": "EUR",
        "rates": {
            "USD": 1.1343,
            "RUB": 86.9245,
            "JPY": 130.85,
            "CHF": 1.0492,
            "CNY": 7.2170
        }
    },
    {
        "id": "RUB",
        "rates": {
            "USD": 0.01308,
            "EUR": 0.01151,
            "JPY": 1.5072,
            "CHF": 0.01208,
            "CNY": 0.0831
        }
    }
]

function Currencies() {

    console.log()
    return (
        <Container className='w-50'>
            <Stack className='d-flex flex-row justify-content-center align-items-center' gap={3}>
                <Form.Label className="">Base currency:</Form.Label>
                <Form.Select className="w-50">
                    {currencies.map(cur => (
                        <Option
                            key = {cur.id}
                            id={cur.id}
                            name={cur.name}
                        />
                    ))}
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
                {rates.map(rat => (
                    <Rate
                    id={rat.id}
                    rates={rat.rates}/>
                ))}
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

