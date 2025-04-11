import { useEffect, useState } from "react";
import {updateData } from "../Api/PostApi";

export const EditUser=({setData,updateApi,setUpdateApi})=>{
    const [AddData,setAddData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        avatar:"",
    });
    useEffect(()=>{
        updateApi && setAddData({
            first_name:updateApi.first_name,
            last_name:updateApi.last_name,
            email:updateApi.email,
            avatar:updateApi.avatar,
        });
    },[updateApi]);
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setAddData((prev)=>{
            return {
                ...prev,[name]:value,
            }
        })
    };
    const updatePostData=async ()=>{
        const res=await updateData(updateApi.id,AddData);
        // console.log(res);
        // console.log(data);
        // if(res.status===200){
        setData((prev)=>{
            return prev.map((currElem)=>{
                return currElem.id===updateApi.id ?res.data:currElem;
            });
        });
        setAddData({
            first_name:"",
            last_name:"",
            email:"",
            avatar:"",
        });
        setUpdateApi({});
        // }

    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        updatePostData();
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="first_name"></label>
                <input type="text" autoComplete="off" id="first_name" name="first_name" 
                placeholder="Edit_first_name" value={AddData.first_name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="last_name">
                </label>
                <input type="text" autoComplete="off" placeholder="Edit_last_name"  
                id="last_name" name="last_name" value={AddData.last_name} onChange={handleChange}/>    
            </div>
            <div>
                <label htmlFor="email">
                </label>
                <input type="email" autoComplete="off" placeholder="Edit_Email"  
                id="email" name="email" value={AddData.email} onChange={handleChange}/>    
            </div> 
            <button type="submit" value={"Edit"} disabled={!AddData.first_name?.trim() ||!AddData.last_name?.trim() || !AddData.email?.trim() }>Update</button>
        </form>
    );
}