import React, {useEffect, useState} from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = (props) => {
    const {title, info} = props
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
        console.log(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <h3>{title}</h3>
            <h4>{info}</h4>
            <ul className='users'>
                {users.map((user) => {
                    const {id, login, avatar_url, html_url} = user

                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login}/>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </>
    )

};

export default UseEffectFetchData;
