import React from 'react'
import { useDataContext } from '../context/DataContext';
import {BrowserRouter, Link, Route,Routes} from 'react-router-dom';
import Create from '../operation/Create';
import { Read } from '../operation/Read';
import Delete from '../operation/Delete';
import Update from '../operation/Update';

export default function Operations() {

  return (
    <div className="operation">
        <BrowserRouter>
              <div className="links">
                    <Link style={{textDecoration:"none"}} to="/create">create</Link>
                    <Link style={{textDecoration:"none"}} to="/update">update</Link>
                    <Link style={{textDecoration:"none"}} to="/read">read</Link>
                    <Link style={{textDecoration:"none"}}to="/delete">delete</Link>
              </div>
             <div style={{height:"100%",display:"grid",placeItems:"center"}}>
             <Routes>
                <Route path="/create" element={<Create />} />
                <Route path="/update" element={<Update />} />
                <Route path="/read" element={<Read />} />
                <Route path="/delete" element={<Delete />} />
              </Routes>
             </div>
        </BrowserRouter>
    </div>
  )
}
