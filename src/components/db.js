export const currencies = [
    {"id": "USD", "name": "US Dollar"},
    {"id": "EUR", "name": "Euro"},
    {"id": "RUB", "name": "Russian Ruble"},
    {"id": "JPY", "name": "Japanese Yen"},
    {"id": "CHF", "name": "Swiss Franc"},
    {"id": "CNY", "name": "Chinese Yuan"}
]

export const rates = [
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

const Option = (props) => {
    return (
        <option>
            {props.name}({props.id})
        </option>
    )
}


const Rate = (props) => {
    return (
        <tr>
            <td>
                {props.id}/#
                {/*сравнить 2 db и подключить redux / state*/}
            </td>
        </tr>
    )
}

export default (Rate, Option)

