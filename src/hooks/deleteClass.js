import axios from "axios";
export const DeleteClassByID = (user) => {
    if(user){
        axios.get(`http://localhost:3000/user/${user}`)
            .then(data => {
                if(data.data.classes.length > 0){
                data.data.classes.forEach(element => {
                    axios.get(`http://localhost:3000/classes/${element}`)
                        .catch(() => {
                            axios.delete(`http://localhost:3000/user/${user}/class/${element}`)
                        })
                    });
                }
            })
    }
}