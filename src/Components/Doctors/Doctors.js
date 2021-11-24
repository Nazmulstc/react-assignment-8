import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [cart, setCart] = useState([])

    // Load API
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])

    // Data send to even handle
    const handleAddToCart = (doctor) => {
        const newCart = [...cart, doctor];
        setCart(newCart)

    }
    return (
        <div className="container">
            {/* Return Doctors */}
            <div className="doctors-container">
                {
                    doctors.map(doctor => <Doctor doctor={doctor}
                        handleAddToCart={handleAddToCart}
                    ></Doctor>)

                }
            </div>
            {/* Return Cart */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Doctors;