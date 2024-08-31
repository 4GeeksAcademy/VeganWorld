import React, { useState } from 'react';
import { Form } from '/workspaces/VeganWorld/src/front/js/component/Form.js';
import "/src/front/styles/editprofilemodal.css";
import { FaUserEdit } from "react-icons/fa";

export function EditProfileModal() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            <button className="botonEdit" onClick={toggleModal} style={{ cursor: 'pointer' }}>
                <FaUserEdit />  Edit Profile
            </button>


            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={toggleModal}>&times;</span>
                        <div className="profile_form">
                            <Form />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}