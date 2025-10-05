import { toast } from 'react-toastify';
const getStoredItems = (key) => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        const newStoredData = JSON.parse(storedData);
        return newStoredData;
    }
    else {
        return [];
    }
}

const addToReadOrWithList = (id, key) => {
    const storedData = getStoredItems(key);
    if (storedData.includes(id)) {
        toast.error("already exist");
    }
    else {
        storedData.push(id);
        const data = JSON.stringify(storedData);
        localStorage.setItem(key, data)
    }
}

export { getStoredItems, addToReadOrWithList };

