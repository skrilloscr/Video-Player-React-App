import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';
import { deleteHistory, getAllHistory } from '../services/allAPI';

function WatchHistory() {
  const [history, setHistory] = useState([])
  const handleHistory = async () => {
    const { data } = await getAllHistory()
    setHistory(data);
  }
  console.log(history);
  useEffect(() => {
    handleHistory()
  }, [])

  const handleDeleteHistory = async (id)=>{
    // make api call
    await deleteHistory(id)
    // get remaining history
    handleHistory()
  }

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="add-videos">
          <h1>Watch History</h1>
        </div>
        <Link to={'/home'} className='text-decoration-none text-white'>Back to Home</Link>
      </div>

      <div className="container w-100 mt-5 mb-5">

        <Table striped bordered hover>
          <thead>

            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              history?.length>0? history?.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item?.caption}</td>
                  <td><a href={item?.embedLink} target='_black'>{item?.embedLink}</a></td>
                  <td>{item?.timeStamp}</td>
                  <td><button className='btn' onClick={()=>handleDeleteHistory(item?.id)}><i className='fa-solid fa-trash text-danger'></i></button></td>
                </tr>
              )):<p className='fw-bolder fs-5 text-danger'>Nothing to Display!!!!!</p>
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}
export default WatchHistory
