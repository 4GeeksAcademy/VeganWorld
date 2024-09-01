import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarImg from "../../img/avatarImg.png";
// import JorgePic from "/workspaces/VeganWorld/src/front/img/redonda_jorge.png";
import "/workspaces/VeganWorld/src/front/styles/profileuser.css";
import { Footer } from './Footer';
import { EditProfileModal } from './EditProfileModal';
import { Context } from "../store/appContext";

export const SearchUserInfo = ({ email, name, address, phone }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getUserInfo();
    }, [])


    return (
        <div className="container-fluid">

            <h1 className="profile_h1-free text-center col-12">{name}</h1>

            <div className="profile_header-user d-flex-row pt-4">
                <div className="d-flex flex-row">
                    <img src={AvatarImg} alt="" className="profile_free_img" />
                    {/* <img className="profile-pic" src={JorgePic} alt=''></img> */}
                </div>
                <div className="card-header-user">
                    <p className="card-text">Address: {address}</p>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Phone: {phone}</p>
                    <EditProfileModal />
                </div>
                <a href="#" className="btn btnCards" onClick={() => navigate('/shop_client')}>Buy now</a>
            </div>

        </div>

    );
}