import React, { useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';

const MyTipCard = ({tip}) => {
    const [tips, setTips] = useState([])

    const handleDelete = id =>{
      Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/sharetips/${id}`, {
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            if (data.deletedCount > 0){
                Swal.fire('Deleted!', 'Your tip has been deleted.', 'success');
                setTips(tips.filter(t => t._id !== id));
            }
        })
    }
    })
}
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
                            <NavLink to={`/update-tip/${tip._id}`}><button className='cursor-pointer mx-3'><MdEdit size={20} /></button></NavLink>
                            <button onClick={() => handleDelete(tip._id)} className='cursor-pointer'><MdDeleteForever size={20} /></button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    );
};

export default MyTipCard;