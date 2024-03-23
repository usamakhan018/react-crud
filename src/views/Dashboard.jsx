import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axiosClient from '../axios'

function Dashboard() {
    const [posts, setPosts] = useState([{}])

    useEffect(() => {
        getPosts()
    }, [])

    
    
    async function getPosts() {
        const res = await axiosClient.post('api/posts')
        console.log(res.data.posts)
        setPosts(res.data.posts)
    }
    


    const onDelete = async (id) => {
        console.log(id)
        const res = await axiosClient.post(`api/posts/${id}/delete`)
        console.log(res)
        getPosts()
    }

    return <div>
        <Link to="/post/create" className="btn btn-secondary">Add New Post</Link>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Contents</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            
            {posts.map((post, index)=> (
                <tr key={index}>
                    <td key={index}>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td>
                        <Link to={`/post/${post.id}/update/`} className="btn btn-success m-2">Update</Link>
                        <button onClick={() => onDelete(post.id)} key={post.id} className="btn btn-info">Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>

    </div>
}

export default Dashboard