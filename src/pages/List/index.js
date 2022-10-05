import { useEffect, useState } from 'react';
import { getUsers } from '../../utils/Database';

export default function Contact() {

    const [list, setList] = useState([]);    

    useEffect(() => {
            setList(getUsers());
    }, []);
    return (
        <>
        <h1>Usuários</h1>
        {
            list.length && list.map(i => (
                <p key={i.email}>{i.name}/{i.email}</p>
            ))
        }
        </>
        
    )
}