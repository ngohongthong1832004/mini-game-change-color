import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch("http://localhost:3001/learn")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleClickPost = () => {
        fetch("http://localhost:3001/post", {
            method: "POST"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <ul> 
            <li>{data?.name}</li>
            <li>{data?.status}</li>
            <button onClick={handleClickPost}>POST METHOD</button>
            <Link to="/">HOME</Link>
        </ul>
    )
}

export default Footer;