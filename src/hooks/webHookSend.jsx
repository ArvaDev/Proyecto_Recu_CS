import axios from "axios";
import { getClass } from "./getClass";
import { useEffect, useState } from "react";
export const WebHookSend = ({classID}) => {
    const [data, setData] = useState({});
    useEffect(() => {
        setData(getClass(classID));
    }, [classID]);

    return data;
}