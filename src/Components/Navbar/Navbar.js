import React from 'react'
import logo from '../../assets/logo.jpg'
import { Nav } from './Nav/Nav';


const Navbar = ({ nombre, apellido, id, children }) => {

    const categorias = [
        { id: 0, nombre: 'Categoria 1' },
        { id: 1, nombre: 'Categoria 2' },
        { id: 2, nombre: 'Categoria 3' },
        { id: 3, nombre: 'Categoria 4' },
    ]

    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="logo" />
            <Nav categorias={categorias}/>
        </header>
    )
}


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagen: {
        width: '10%',
    },
}

export default Navbar