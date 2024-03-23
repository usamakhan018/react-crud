import {useState, useEffect, useRef} from 'react'
import axiosClient from '../../axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

function UpdatePost() {
    const {id} = useParams()
	const titleRef = useRef()
    const contentRef = useRef()
	const navigate = useNavigate()

	useEffect(() => {
		getPost()
	}, [])

	async function getPost() {	
        const res = await axiosClient.post(`api/post/${id}`)
        console.log(res.data)
		titleRef.current.value = res.data.title
		contentRef.current.value = res.data.content
    }

    const onSubmit = async (e) => {
    	const payload = {
            title: titleRef.current.value,
            content: contentRef.current.value
        }
        const res = await axiosClient.post(`api/posts/${id}/update`, payload)
		console.log(res.data)
		navigate('/dashboard')
    }

    return <div>
        <div className="card">
            <div className="card-header">Create Post</div>
            <div className="card-body">
                <input ref={titleRef} type="text" className="form-control mb-2" placeholder="title" />
                <textarea ref={contentRef} className="form-control mb-2" cols="30" rows="10" placeholder="content"></textarea>
                <button onClick={onSubmit} className="btn btn-secondary">Update Post</button>
            </div>
            
        </div>
    </div>
}

export default UpdatePost