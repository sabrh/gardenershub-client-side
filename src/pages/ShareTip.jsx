import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext'

const ShareTip = () => {
    const {user} = useContext(AuthContext)

    const handleSubmit=async(e) => {
        e.preventDefault()

        const form=e.target
        const formData=new FormData(form)
        const shareTipData = Object.fromEntries(formData.entries())

        shareTipData.userName=user?.displayName
        shareTipData.userEmail=user?.email

        // send tips data to the db
        fetch('http://localhost:3000/sharetips', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(shareTipData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: "Tip Submitted!",
                icon: "success",
                draggable: true
            });
            form.reset()
        })
        
    }

    return (
        <div className="card bg-base-100 max-w-md mx-auto shrink-0 mt-2">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-green-700">Share a Garden Tip with us!</h1>
            <div>
                <p className='text-green-600 font-bold'>Tip by: {user?.displayName}</p>
                <p className='text-green-600'>{user?.email}</p>
            </div>
            <form onSubmit={handleSubmit} className="fieldset">
                <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
                <input type="text" name="topic" placeholder="Plant Type / Topic" className="input input-bordered w-full" required />
        
                <select name="difficulty" className="select select-bordered w-full" required>
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                </select>

                <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>

                <input type="text" name="imgUrl" placeholder="Image URL" className="input input-bordered w-full" required />

                <select name="category" className="select select-bordered w-full" required>
                <option value="">Select Category</option>
                <option value="Composting">Composting</option>
                <option value="Plant Care">Plant Care</option>
                <option value="Vertical Gardening">Vertical Gardening</option>
                </select>

                <select name="availability" className="select select-bordered w-full" required>
                <option value="">Availability</option>
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
                </select>

                {/*<div className="grid grid-cols-2 gap-4">
                <input type="text" value={user?.displayName || ""} readOnly className="input input-bordered w-full" />
                <input type="email" value={user?.email || ""} readOnly className="input input-bordered w-full" />
                </div>*/}

                <button type="submit" className="btn rounded-full bg-green-700 text-white w-full">Submit Tip</button>

                
            </form>
            
            </div>
        </div>   
    );
};

export default ShareTip;