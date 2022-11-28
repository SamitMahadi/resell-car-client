import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data
        }



    })
    const handleDeleteUsers = users => {
        fetch(`http://localhost:5000/users/${users._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(` ${users.name} deleted successfully`)
                }
            })
    }

    return (
        <div>
            <h3 className="text-4xl p-5">All Buyers & Sellers</h3>
            <div>
                <h2 className='text-3xl'>All Users</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>

                                <th>Role</th>
                                <th>Delete</th>


                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>

                                    <td>
                                        <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
                {
                    deletingUser && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingUser.name}. It cannot be undone.`}
                        successAction={handleDeleteUsers}
                        successButtonName="Delete"
                        modalData={deletingUser}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default AllUsers;