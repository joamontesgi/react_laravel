import React, { useEffect, useState } from 'react'

export default function Tabla() {
    const [libros, setLibros] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/books')
            .then(response => response.json())
            .then(data => setLibros(data))
            .catch(error => console.error('Error fetching libros:', error));
    }, []);

    return (
        <div>
            <h1>Libros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map(libro => (
                        <tr key={libro.id}>
                            <td>{libro.name}</td>
                            <td>{libro.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
