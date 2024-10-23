import { useEffect, useState } from "react"

const useFetchProducts = () => {
    const URL = '/data/products.json'

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching products:', error)
            )
    }, [])


    return items;
}

export default useFetchProducts