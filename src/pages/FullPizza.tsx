import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
    const [pizza, setPizza] = React.useState<{ imageUrl: string; title: string; price: number }>();
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchPizza() {
            try {
                const data = await axios.get('https://65a6cd2474cf4207b4f0d63a.mockapi.io/items/' + id);
                setPizza(data.data);
            } catch (error) {
                alert('Ошибка при получении пиццы');
                navigate('/');
            }
        }
        fetchPizza();
    }, []);

    if (!pizza) {
        return <>Загрузка...</>;
    }

    return (
        <div className="container">
            <img src={pizza.imageUrl} alt="pizza image" />
            <h2>{pizza.title}</h2>
            <h4>{pizza.price}</h4>
        </div>
    );
};

export default FullPizza;