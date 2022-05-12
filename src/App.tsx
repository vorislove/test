import React, { useEffect } from 'react';
import Sorts from './component/Sorts/Sorts';
import UsersListPage from './component/UsersListPage/UsersListPage';
import { useState } from 'react';
import { IUser } from './component/Types/types';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import UserProfile from './component/UserProfile/UserProfile';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [load, setLoad] = useState<boolean>(true);

    useEffect(() => {
        fetchUser();
    }, []);

    
    const sortUsers = (selectedSort: string) => {
        if (selectedSort === 'name') {
          setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
        } else {
          setUsers([...users].sort((a, b) => a.address.city.localeCompare(b.address.city)));
        }
    }

    const onClickSort = (sort: string) => {
      sortUsers(sort);
    }

    async function fetchUser() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
            if (response) {
                setLoad(false);
            }
        } catch (e) {
            alert(e)
        }
    }

  return (
    <div className="App">
      <Sorts
        onClickSort={onClickSort}  
      />
      <div className="contnet">
        <Routes>
          <Route path={'/'} element={<UsersListPage users={users} load={load}/>} />
          <Route path={'/:id'} element={<UserProfile/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
