"use client"

import { useState } from 'react';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import Image from 'next/image';

export default function UpdateProfile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updateField, setUpdateField] = useState('');
    const [twitter, setTwitter] = useState('@sem.eth');
    const [instagram, setInstagram] = useState('@sem_insta');
    const [discord, setDiscord] = useState('@discord_sem');
    const [bio, setBio] = useState('Life Goes on...');

    const handleOpenModal = (field) => {
        setUpdateField(field);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedValue = e.target.elements.updateInput.value;

        if (updateField === 'twitter') setTwitter(updatedValue);
        if (updateField === 'instagram') setInstagram(updatedValue);
        if (updateField === 'discord') setDiscord(updatedValue);
        if (updateField === 'bio') setBio(updatedValue);

        handleCloseModal();
    };

    return (
        <div className='bg-[#252B36] min-h-screen'>
            <div className="flex flex-col lg:flex-row items-center py-40 justify-between lg:justify-center gap-12 lg:gap-64 px-16 lg:px-24">
                {/* Left Section */}
                <div className="flex h-fit items-center">
                    <Image
                        src="/avatar-example.svg" // Replace with actual profile picture URL
                        alt="Profile"
                        width={200}
                        height={200}
                        className="rounded-full border mr-4"
                    />
                    <div>
                        <h2 className="text-4xl font-bold my-4">Sem.eth</h2>
                        <p className="text-gray-300">{bio}</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="text-center">
                    <div className="text-4xl border w-fit px-8 py-4 rounded-2xl text-black bg-white font-semibold">
                        123
                        <span className="text-lg text-gray-500 block">
                            NFTs Minted
                        </span>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <FaTwitter size={20} />
                                <span className="ml-2">{twitter}</span>
                            </div>
                            <button
                                onClick={() => handleOpenModal('twitter')}
                                className="flex items-center bg-[#333945] text-white px-2 py-1 rounded"
                            >
                                <span className="ml-1 text-sm text-[#8e97a7]">Update</span>
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <FaInstagram size={20} />
                                <span className="ml-2">{instagram}</span>
                            </div>
                            <button
                                onClick={() => handleOpenModal('instagram')}
                                className="flex items-center bg-[#333945] text-white px-2 py-1 rounded"
                            >
                                <span className="ml-1 text-sm text-[#8e97a7]">Update</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-12 justify-between">
                            <div className="flex items-center">
                                <FaDiscord size={20} />
                                <span className="ml-2">{discord}</span>
                            </div>
                            <button
                                onClick={() => handleOpenModal('discord')}
                                className="flex items-center bg-[#333945] text-white px-2 py-1 rounded"
                            >
                                <span className="ml-1 text-sm text-[#8e97a7]">Update</span>
                            </button>
                        </div>
                        <div className="flex items-center bg-[#333945] text-[#fff] w-fit px-4 py-2 rounded-xl justify-between">
                            <button
                                onClick={() => handleOpenModal('bio')}
                                className="flex items-center"
                            >
                                <MdEdit size={20} />
                                <span className="ml-2">Update Profile Bio</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                <div className="bg-[#333945] p-8 rounded-xl w-96">
                    <h2 className="text-xl text-white mb-4">
                        Update {updateField === 'bio' ? 'Profile Bio' : updateField.charAt(0).toUpperCase() + updateField.slice(1)}
                    </h2>
                    <form onSubmit={handleUpdate}>
                        <input
                            type="text"
                            name="updateInput"
                            placeholder={`Enter new ${updateField}`}
                            className="w-full rounded-md border border-[#505050] hover:bg-[#3c4151] bg-[#333945] focus:outline-none focus:border-transparent placeholder:text-[#717A8C] placeholder:text-base py-2.5 px-10 shadow-sm sm:text-sm"
                        />
                        <div className="flex mt-8 justify-end">
                            <button
                                type="button"
                                onClick={handleCloseModal}
                                className="bg-[#505050] text-white px-4 py-2 rounded mr-2 hover:bg-[#3c4151]"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-[#505050] text-white px-4 py-2 rounded hover:bg-[#3c4151]"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            )}
        </div>
    );
}
