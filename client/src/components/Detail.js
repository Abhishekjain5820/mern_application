import React, { useEffect,useState } from "react";
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {NavLink, useParams,useNavigate} from 'react-router-dom'

const Detail = () => {
  //to get the id from the url
  const [getuserdata, setUserdata] = useState([]);
  const navigate=useNavigate();
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    

    const getdata = async () => {

        const res = await fetch(`https://mern-site-backend-v1.onrender.com/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteUser=async(id)=>{
        const res2=await fetch(`https://mern-site-backend-v1.onrender.com/deleteuser/${id}`,{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const deletedata=await res2.json();
        //console.log(deletedata);
    
        if (res2.status === 422 || !deletedata) {
          console.log("error ");
        } else {
          
          
          navigate('/');
    
        }
    
      }
    
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.name}</h1>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
                    <div className="add_btn">
                        <NavLink to={`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={()=>deleteUser(getuserdata._id)} ><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >{getuserdata.name}</span></h3>
                            <h3 className="mt-3">Age: <span >{getuserdata.age}</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserdata.email}</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>{getuserdata.work}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91{getuserdata.mobile} </span></p>
                            <p className="mt-3"><LocationOnIcon />location: <span>{getuserdata.add}</span></p>
                            <p className="mt-3">Description: <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
      </Card>
    </div>
  );
};

export default Detail;
