import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
const Example = () => {
    const [data, setData] = useState([])
    const baseUrl = "https://northwind.vercel.app/api/products"

    const datalar = async () => {
        try {
            const response = await axios(baseUrl)

            setData(response.data);
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        datalar()
    },)


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>categoryId</th>
                        <th>unitsInStock</th>
                        <th>unitPrice</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.categoryId}</td>
                            <td>{item.unitsInStock}</td>
                            <td>{item.unitPrice}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}


export default Example
