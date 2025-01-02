import React, { useEffect, useState } from 'react';

const UseCategoryFilter = () => {

    const [menuFilter, setMenuFilter] = useState([])
    useEffect(() => {
         fetch('http://localhost:5000/menu')
         .then(res => res.json())
         .then(data => {
            setMenuFilter(data)
         })
    },[])

    return [menuFilter];
};

export default UseCategoryFilter;