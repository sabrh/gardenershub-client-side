import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTip = () => {
    const [tip, setTip]=useState(null)
    const {id}=useParams()
    const {user} = useContext(AuthContext)
    //const navigate=useNavigate()

    useEffect(() =>{
        fetch(`http://localhost:3000/sharetips/${id}`)
        .then(res => res.json())
        .then(data => setTip(data))
    }, [id])

    const handleUpdate=e=>{
        e.preventDefault()
        const form=e.target
        const title=form.title.value
        const topic=form.topic.value
        const difficulty=form.difficulty.value
        const description=form.description.value
        const imgUrl=form.imgUrl.value
        const category=form.category.value
        const availability=form.availability.value

        const updatedTip={title, topic, difficulty, description, imgUrl, category, availability}

        fetch(`http://localhost:3000/sharetips/${id}`, {
            method: 'PUT', 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTip)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount > 0) {
                Swal.fire('Success!', 'Tip updated successfully.', 'success');
                //navigate('/my-tips');
            }
        })
        

    }

    return (
        <div className="card bg-base-100 max-w-md mx-auto shrink-0 mt-2">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-green-700">Update Tip Info</h1>
            <div>
                <p className='text-green-600 font-bold'>Tip by: {user?.displayName}</p>
                <p className='text-green-600'>{user?.email}</p>
            </div>
            <form onSubmit={handleUpdate} className="fieldset">
                <input type="text" name="title" defaultValue={tip?.title} placeholder="Title" className="input input-bordered w-full" required />
                <input type="text" name="topic" defaultValue={tip?.topic} placeholder="Plant Type / Topic" className="input input-bordered w-full" required />
        
                <select name="difficulty" defaultValue={tip?.difficulty} className="select select-bordered w-full" required>
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                </select>

                <textarea name="description" defaultValue={tip?.description} placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>

                <input type="text" name="imgUrl" defaultValue={tip?.imgUrl} placeholder="Image URL" className="input input-bordered w-full" required />

                <select name="category" defaultValue={tip?.category} className="select select-bordered w-full" required>
                <option value="">Select Category</option>
                <option value="Composting">Composting</option>
                <option value="Plant Care">Plant Care</option>
                <option value="Vertical Gardening">Vertical Gardening</option>
                </select>

                <select name="availability" defaultValue={tip?.availability} className="select select-bordered w-full" required>
                <option value="">Availability</option>
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
                </select>

                <button type="submit" className="btn rounded-full bg-green-700 text-white w-full">Submit Edit</button>

                
            </form>
            
            </div>
        </div>
    );
};

export default UpdateTip;