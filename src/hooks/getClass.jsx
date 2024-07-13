import axios from "axios";
import { useState, useEffect } from "react";
export const getClass = (classID) => {
    const [clase, setClase] = useState(null)
    useEffect(() => {
    axios.get(`http://localhost:3000/classes/${classID}`)
        .then((res) => { setClase(res.data)})
        .catch((err) => console.error(err));
    },[classID])
    return clase;
}