import { useEffect } from "react";
import { deleteUser, getMethod } from "../Api/PostApi";
import { useState } from "react";
import { EditUser} from "./EditUser";


export const Users=()=>{
    // console.log(getMethod());
    const[data,setData]=useState([]);
    const [updateApi,setUpdateApi]=useState({});
    const [page,setPage]=useState(1);

    const getPostData=async()=>{
        const res=await getMethod(page);

        console.log(res.data.data);
        setData(res.data.data);
    }
    useEffect(()=>{
    getPostData();
    },[page]);

    const handleDeleteUser=async (id)=>{
        try {
            const res=await deleteUser(id);
            if(res.status===204)
            {
                const newUpdatedPosts=data.filter((curr)=>{
                    return curr.id!==id;
                });
                setData(newUpdatedPosts);
            }
        } catch (error) {
            console.log(error);
        }
        const res=await deleteUser(id);
        console.log(res);
    }

    const handleUpdatePost=(curr)=>setUpdateApi(curr);
    return (
        <>        
        <section className="section-form">
            <EditUser  setData={setData} updateApi={updateApi} setUpdateApi={setUpdateApi}/>
        </section>
        <section className="section-post">
            <ol>
                {data.map((curr)=>{
                    const { id, avatar, first_name, last_name, email } = curr;
                    return (
                        <li className="user-item" key={id}>
                            <div className="user-card">
                                <img src={avatar} className="user-avatar" alt="avatar" />
                                <h3 className="user-name">{first_name} {last_name}</h3>
                                <p className="user-email">{email}</p>
                                <div className="user-buttons">
                                    <button onClick={()=>handleUpdatePost(curr)}>Edit</button>
                                    <button className="btn-delete" onClick={()=>{handleDeleteUser(id)}}>Delete</button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ol>
            
        </section>
        <div className="pagination-controls">
            <button onClick={() => setPage((p) => Math.max(p - 1, 1))} className="pagination-button">
            Prev
            </button>
            <button onClick={() => setPage((p) => p + 1)} className="pagination-button">
            Next
            </button>
         </div>
        </>
    );
}