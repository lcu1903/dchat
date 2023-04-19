import { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
function ListItem() {
    const {
        fetchData,
        response: { categories },
        loading,
    } = useAxios('categories');
    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="animate-pulse my-5 inline-block text-center">
                {[...Array(35).keys()].map((num) => (
                    <div key={num} className="h-7 w-20 bg-gray-300 m-1 rounded-sm inline-block"></div>
                ))}
            </div>
        );
    }

    return <div>{categories && categories.map((button) => <button>{button}</button>)}</div>;
}

export default ListItem;
