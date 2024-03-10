import { useDataContext } from "../context/DataContext";

export default function useCreateUser() {
    const {setData} = useDataContext();
    const createUser = async (formData,id=null)=>{
        let method = "POST";
        let url = "/api/user/create";
        if(id){
            method = "PUT",
            url = `/api/user/update/${id}`
        }
        try {
            const res = await fetch(url,{
                method,
                headers:{
                    "Content-Type":"application/json"
                },
                body : JSON.stringify(formData)
            })
            const data = await res.json();
            setData([data]);
        } catch (error) {
            console.log("in useCreateUser : ",error.message);
        }
    }
  return createUser;
}
