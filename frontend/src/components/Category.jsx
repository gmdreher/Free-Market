import React from 'react';


export default function Category() {

    const onRegionChange = () => {

    }

    return (
        <select onChange={onRegionChange} /*value={filterByCategory}*/>
            <option value="">Filtrar por categoria</option>
            <option value="Muebles para el Hogar">Muebles para el Hogar</option>
            <option value="Libros">Libros</option>
            <option value="Computación">Computación</option>
            <option value="Jardines y Exteriores">Jardines y Exteriores</option>
            <option value="Ropa y Accesorios">Ropa y Accesorios</option>
            <option value="Bazar y Cocina">Bazar y Cocina</option>
            <option value="Accesorios para Vehículos">Accesorios para Vehículos</option>
            <option value="Iluminación para el Hogar">Iluminación para el Hogar</option>
            <option value="Cuidado del Hogar y Lavandería">Cuidado del Hogar y Lavandería</option>
            <option value="Electrónica, Audio y Video">Electrónica, Audio y Video</option>
            <option value="BJuegos y Juguetes">Juegos y Juguetes</option>
            <option value="Música, Películas y Series">Música, Películas y Series</option>
            <option value="Animales y Mascotas">Animales y Mascotas</option>
            <option value="Baños">Baños</option>
            <option value="Industrias y Oficinas">Industrias y Oficinas</option>
            <option value="Souvenirs, Cotillón y Fiestas">Souvenirs, Cotillón y Fiestas</option>
            <option value="Arte, Librería y Mercería">Arte, Librería y Mercería</option>
            <option value="Celulares y Teléfonos">Celulares y Teléfonos</option>
            <option value="Deportes y Fitness">Deportes y Fitness</option>

        </select>
    )
} 