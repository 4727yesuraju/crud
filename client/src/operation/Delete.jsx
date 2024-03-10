import React, { useState } from 'react'
import useRemoveUser from '../hooks/useRemoveUser';

export default function Delete() {
  const [id,setId] = useState("");
    const removeUser = useRemoveUser();

    function handleSubmit(e){
         e.preventDefault();
         removeUser(id);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" id="id" placeholder="paste id to remove emp" value={id} onChange={e=>setId(e.target.value)}/>
          <button>submit</button>
      </form>
    </div>
  )
}
