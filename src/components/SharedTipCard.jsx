import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { NavLink } from 'react-router';

const SharedTipCard = ({tip}) => {
    const {imgUrl, title, category} = tip
    return (
        <>
        <table className="table table-zebra w-full">
                <thead className="bg-green-100">
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>{title}</td>
                        <td>{category}</td>
                        <td>
                            <img src={imgUrl} alt={title} className="w-16 h-16 rounded object-cover" />
                        </td>
                        <td>
                            <NavLink to={`/details/${tip._id}`}><button className='cursor-pointer'><FaRegEye size={20} /></button></NavLink>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    );
};

export default SharedTipCard;