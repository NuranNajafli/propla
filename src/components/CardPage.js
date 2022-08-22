import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img from "../image/cardLogo.png"

function Card(props) {
  const [card, setCard] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const [searchName, setSearchName] = useState('')


  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = card.slice(firstPostIndex, lastPostIndex)
  const totalPosts = card.length

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i)
  }



  useEffect(() => {
    setIsLoading(true)
    // setTimeout(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => res.data)
      .then(res => {
        setIsLoading(false)
        setCard(res)
      })
    // }, 1000);
  }, [])



  return (
    <div>
      {isLoading && <div className="container-load">
        <div className="flex">
          <div className="loader">
          </div>
        </div>
        <div className="load-text">
          Loading...
        </div>
      </div>
      }
      <div className='container'>
        <input type="text" onChange={(e) => setSearchName(e.target.value)} />
        <div className='row'>
          {
            currentPost.filter((a) => {
              if (searchName == "") {
                return a
              }
              else if (a.title.toLowerCase().includes(searchName.toLowerCase())) {
                return a
              }
            }).map((a, b) => (
              <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center" key={b}>
                <div className='card' >
                  <img src={img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{a.title}</h5>
                    <Link to="projectDetail" className='more-detail'><button className="btn">More Detail</button></Link>
                  </div>
                </div>
              </div>
            ))
          }
          <div className='pagination'>
            {
              pages.map((a, b) => (
                <button key={b} onClick={() => setCurrentPage(a)} className={a == currentPage ? "active" : ''}>
                  {a}
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card