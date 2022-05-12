import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../Types/types';
import './UserItem.scss';

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
    return (
        <div className='user-item'>
            <div className="user-item__info">
                <span className="user-item__info__gray">ФИО:</span>
                <span className="user-item__info__black">{user.name}</span>
            </div>
            <div className="user-item__info">
                <span className="user-item__info__gray">город:</span>
                <span className="user-item__info__black">{user.address.city}</span>
            </div>
            <div className="user-item__info">
                <div>    
                    <span className="user-item__info__gray">Компания:</span>
                    <span className="user-item__info__black">{user.company.name}</span>
                </div>
                <Link className='user-item__info__button-more' to={`/${user.id}`}>Подробнее</Link>
            </div>
        </div>
    );
}

export default UserItem;