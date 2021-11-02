import { useState, useEffect } from 'react';

export const useDatabase = () => {
    const [service, setService] = useState([]);
    const [blog, setBlog] = useState([]);
    const [order, setOrder] = useState([]);
    const [isDataLoading, setDataLoading] = useState(true);
    // https://damp-chamber-98224.herokuapp.com/
    useEffect(() => {
        const loadService = async () => {
            setDataLoading(true);
            fetch('https://damp-chamber-98224.herokuapp.com/services')
                .then(res => res.json())
                .then(data => {
                    setService(data)
                    setDataLoading(false);
                })
        }
        const loadBlog = async () => {
            setDataLoading(true);
            const res = await fetch('https://damp-chamber-98224.herokuapp.com/blog');
            const data = await res.json();
            setBlog(data);
            setDataLoading(false);
        }
        const loadOrder = async () => {
            setDataLoading(true);
            const res = await fetch('https://damp-chamber-98224.herokuapp.com/order');
            const data = await res.json();
            setOrder(data);
            setDataLoading(false);
        }
        loadService();
        loadBlog();
        loadOrder();
    }, [])
    return {
        service,
        blog,
        order,
        setService,
        setBlog,
        setOrder,
        isDataLoading
    }
}