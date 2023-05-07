import { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
function ListItem() {
    const {
        fetchData,
        response: { items },
        loading,
    } = useAxios('categories');
    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            
            <div className="my-5 inline-block animate-pulse text-center">
                {[...Array(35).keys()].map((num) => (
                    <div key={num} className="m-1 inline-block h-7 w-20 rounded-sm bg-gray-300"></div>
                ))}
            </div>
        );
    }

    return <div>{items && items.map((button) => <button>{button}</button>)}</div>;
}

export default ListItem;
