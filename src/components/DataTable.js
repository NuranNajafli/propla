import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const rows = [
    { id: 1, image: "https://upload.wikimedia.org/wikipedia/commons/5/55/%C4%B0qtisadiyyat_Nazirliyinin_loqosu.png", projectName: 'Snow' },
    { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/5/55/%C4%B0qtisadiyyat_Nazirliyinin_loqosu.png", projectName: 'Lannister' },
    { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/5/55/%C4%B0qtisadiyyat_Nazirliyinin_loqosu.png", projectName: 'Lannister' },
    { id: 4, image: "https://upload.wikimedia.org/wikipedia/commons/5/55/%C4%B0qtisadiyyat_Nazirliyinin_loqosu.png", projectName: 'Stark' },
    { id: 5, image: "https://upload.wikimedia.org/wikipedia/commons/5/55/%C4%B0qtisadiyyat_Nazirliyinin_loqosu.png", projectName: 'Targaryen' },
    { id: 6, image: "https://upload.wikimedia.org/wikipedia/commons/5/55/%C4%B0qtisadiyyat_Nazirliyinin_loqosu.png", projectName: 'Melisandre' },
    { id: 7, image: "https://upload.wikimedia.org/wikipedia/commons/5/55/%C4%B0qtisadiyyat_Nazirliyinin_loqosu.png", projectName: 'Clifford' },
    { id: 8, image: "https://upload.wikimedia.org/wikipedia/commons/5/55/%C4%B0qtisadiyyat_Nazirliyinin_loqosu.png", projectName: 'Frances' },
    { id: 9, image: "https://upload.wikimedia.org/wikipedia/commons/5/55/%C4%B0qtisadiyyat_Nazirliyinin_loqosu.png", projectName: 'Roxie' },
];


function DataTable() {
    const [data, setData] = useState(rows);
    const [modal, setModal] = useState(false);
    const [inputValue, setInputValue] = useState([
        {
            id: "",
            image: "",
            projectName: ""
        }
    ])




    const handleDelete = (e) => {
        setData(data.filter((a) => a.id !== e));

    };

    const handleInput = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }
    const handleAdd = (e) => {
        e.preventDefault()
        setData([...data, inputValue])

    }
    const handleEdit = () => {


    }

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = data.slice(firstPostIndex, lastPostIndex)
    const totalPosts = data.length

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }

    return (
        <>
            <div className='dataTable'>
              <div className="Table">
              <div className="datatableTitle">
                    Add New User
                    <span className="link" onClick={() => setModal(!modal)}>
                        Add New
                    </span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Project logo</th>
                            <th>Project Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentPost.map((a, b) => (
                                <tr key={b}>
                                    <td>{a.id}</td>
                                    <td><img className='cellImg' src={a.image} /></td>
                                    <td><Link to="adminForm">{a.projectName}</Link></td>
                                    <td><button className='editButton' onClick={() => handleEdit(a.id)}>Edit</button> <button className='deleteButton' onClick={() => handleDelete(a.id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
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
            <div className={modal ? 'popUp activePopUp' : "popUP"}>
                <div className="table-modal">
                    <form>
                        <label>Project Name</label>
                        <input type="text" placeholder='Write the project Name' name="projectName" onChange={(e) => handleInput(e)} />
                        <label>Project Logo</label>
                        <input type="url" placeholder='Paste the image url' name="image" onChange={(e) => handleInput(e)} />
                        <button onClick={(e) => handleAdd(e)}>Add</button>
                    </form>
                    <span onClick={() => setModal(modal => !modal)}>x</span>
                </div>
            </div>

        </>
    )
}

export default DataTable