import axios from "axios";
import { FC, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { IUser } from "../Types/types";
import UserItem from "../UserItem/UserItem";
import './UsersListPage.scss';

interface UserListPageProps {
    users: IUser[];
    load: boolean;
}

const UsersListPage: FC<UserListPageProps> = ({users, load}) => {

    const elements: React.ReactNode = users.map(user => {
        return (
            <UserItem  user={user} key={user.id}/>
        )
    })


    return (
        <div className="users-list">
            <div className="users-list__name">Список пользователей</div>
            {load ? <Loader/> : elements}
            <div className="count-users">Найдено {load ? 0 : users.length} пользователей</div>
        </div>
    );
}

export default UsersListPage;