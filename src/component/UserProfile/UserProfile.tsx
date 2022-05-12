import axios from 'axios';
import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from '../Types/types';

import './UserProfile.scss';


const UserProfile: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const [editDisable, setEditDisable] = useState<boolean>(true);
    const [comment, setComment] = useState<string>('');
    const { id } = useParams();

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(response.data);
        } catch (e) {
            alert(e)
        }
    }

    const editHadnler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setEditDisable(false);
    }

    const newStateUser = JSON.parse(JSON.stringify(user));
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name) {
            case 'name':
                newStateUser.name = e.target.value;
            break;
            case 'username': 
            newStateUser.username = e.target.value;
            break;
            case 'email': 
            newStateUser.email = e.target.value;
            break;
            case 'street': 
            newStateUser.address.street = e.target.value;
            break;
            case 'city': 
            newStateUser.address.city = e.target.value;
            break;
            case 'zipcode': 
            newStateUser.address.zipcode = e.target.value;
            break;
            case 'phone': 
            newStateUser.phone = e.target.value;
            break;
            case 'website': 
            newStateUser.website = e.target.value;
            break;
            case 'comment': 
            newStateUser.comment = e.target.value;
            break;
        }
        setUser(newStateUser);
    }

    const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            e.target.className += ' required';
        } else {
            e.target.className = 'user-profile__info__label-input__input'
        }
    }

    const submmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        newStateUser.comment = comment;
        console.log(JSON.stringify(newStateUser));
    }

    const changeCommentHadler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    }

    return (
        <div className="user-profile">
            <div className="user-profile__page">
                <div className="user-profile__page__name">Профиль пользователя</div>
                <button onClick={editHadnler} className="user-profile__page__btn">Редактировать</button>
            </div>
            <form action="#"
                    onSubmit={submmitHandler}>
                <div className="user-profile__info">
                    <div className="user-profile__info__label-input">
                        <div className="user-profile__info__label-input__label">Name</div>
                        <input 
                            type="text" 
                            disabled={editDisable} 
                            value={user?.name}
                            required  
                            name="name"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            className="user-profile__info__label-input__input" />
                    </div>
                    <div className="user-profile__info__label-input">
                        <div className="user-profile__info__label-input__label">User name</div>
                        <input 
                            type="text" 
                            disabled={editDisable} 
                            value={user?.username}
                            required 
                            name="username" 
                            onBlur={blurHandler}
                            onChange={changeHandler}
                            className="user-profile__info__label-input__input" />
                    </div>
                    <div className="user-profile__info__label-input">
                        <div className="user-profile__info__label-input__label">E-mail</div>
                        <input 
                            type="text" 
                            disabled={editDisable} 
                            value={user?.email} 
                            required 
                            name="email"
                            onBlur={blurHandler}
                            onChange={changeHandler}
                            className="user-profile__info__label-input__input" />
                    </div>
                    <div className="user-profile__info__label-input">
                        <div className="user-profile__info__label-input__label">Street</div>
                        <input 
                            type="text" 
                            disabled={editDisable} 
                            value={user?.address.street}
                            required  
                            name="street"
                            onBlur={blurHandler}
                            onChange={changeHandler}
                            className="user-profile__info__label-input__input" />
                    </div>
                    <div className="user-profile__info__label-input">
                        <div className="user-profile__info__label-input__label">City</div>
                        <input 
                            type="text" 
                            disabled={editDisable} 
                            value={user?.address.city} 
                            required 
                            name="city"
                            onBlur={blurHandler}
                            onChange={changeHandler}
                            className="user-profile__info__label-input__input" />
                    </div>
                    <div className="user-profile__info__label-input">
                        <div className="user-profile__info__label-input__label">Zip code</div>
                        <input 
                            type="text" 
                            disabled={editDisable} 
                            value={user?.address.zipcode}
                            required  
                            name="zipcode"
                            onBlur={blurHandler}
                            onChange={changeHandler}
                            className="user-profile__info__label-input__input" />
                    </div>
                    <div className="user-profile__info__label-input">
                        <div className="user-profile__info__label-input__label">Phone</div>
                        <input 
                            type="text" 
                            disabled={editDisable} 
                            value={user?.phone} 
                            required 
                            name="phone"
                            onBlur={blurHandler}
                            onChange={changeHandler}
                            className="user-profile__info__label-input__input" />
                    </div>
                    <div className="user-profile__info__label-input">
                        <div className="user-profile__info__label-input__label">Website</div>
                        <input 
                            type="text" 
                            disabled={editDisable} 
                            value={user?.website} 
                            required 
                            name="website"
                            onBlur={blurHandler}
                            onChange={changeHandler}
                            className="user-profile__info__label-input__input" />
                    </div>
                    <div className="user-profile__info__label-input">
                        <div className="user-profile__info__label-input__label">Comment</div>
                        <textarea 
                            disabled={editDisable} 
                            name="comment"
                            value={comment}
                            onChange={changeCommentHadler}
                            className="user-profile__info__label-input__input-comment" ></textarea>
                    </div>
                </div>
                <button 
                    disabled={editDisable} 
                    className="user-profile__submmit" >
                    Отправить
                    </button>
            </form>
        </div>
    );
};

export default UserProfile;
