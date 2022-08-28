import React, { useState } from 'react'

function AdminForm() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    const [tags, setTags] = useState([])

    const handleInput = (e) => {
        if (e.key !== 'Enter') return
        const val = e.target.value

        if (!val.trim()) return
        setTags([...tags, val])
        e.target.value = ""
    }
    const handleRemove = (b) => {
        setTags(tags.filter((a, index) => index !== b))
    }




    return (
        <div className='admin-form'>
            <div className='container main-projectDetail'>
                <div className='row project-header'>
                    <div className='col-lg-2 col-md-2 col-sm-2 links-div'>
                        <span className={toggleState === 1 ? "tabs hover-underline-animation" : "tabs"} onClick={() => toggleTab(1)}>General Info</span>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 links-div'>
                        <span className={toggleState === 2 ? "tabs hover-underline-animation" : "tabs"} onClick={() => toggleTab(2)}>Server Links</span>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 links-div'>
                        <span className={toggleState === 3 ? "tabs hover-underline-animation" : "tabs"} onClick={() => toggleTab(3)}>GitRepo Links</span>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 links-div'>
                        <span className={toggleState === 4 ? "tabs hover-underline-animation" : "tabs"} onClick={() => toggleTab(4)}>Project Users</span>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 links-div'>
                        <span className={toggleState === 5 ? "tabs hover-underline-animation" : "tabs"} onClick={() => toggleTab(5)}>Tech Stack</span>
                    </div>
                </div>
            </div>
            <div className='content-tabs'>
                <div className={toggleState === 1 ? "content  active-content " : "content"}>
                    <div className="limiter-admin">
                        <div className="container-table100-admin">
                            <div className="wrap-table100-admin">
                                <div className="table100-admin">
                                    <table>
                                        <thead>
                                            <tr className="table100-head">
                                                <th className="column1">Project Full Name</th>
                                                <th className="column2">Project Description</th>
                                                <th className="column3">Created by</th>
                                                <th className="column4">Production Date</th>
                                                <th className="column5">Project User Count</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="column1"><input type="text" /></td>
                                                <td className="column2"><input type="text" /></td>
                                                <td className="column3"><input type="text" /></td>
                                                <td className="column4"><input type="date" /></td>
                                                <td className="column5"><input type="number" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "content  active-content " : "content"}>
                    <div className="limiter-admin">
                        <div className="container-table100-admin">
                            <div className="wrap-table100-admin">
                                <div className="table100-admin">
                                    <table>
                                        <thead>
                                            <tr className="table100-head">
                                                <th className="column1">Server IP</th>
                                                <th className="column2">Server Port</th>
                                                <th className="column3">Server Type Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="column1"><input type="text" placeholder=' Server Ip' /></td>
                                                <td className="column2"><input type="text" placeholder=' Server Port' /></td>
                                                <td className="column3"><input type="text" placeholder=' Type of server name' /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 3 ? "content  active-content " : "content"}>
                    <div className="limiter-admin">
                        <div className="container-table100-admin">
                            <div className="wrap-table100-admin">
                                <div className="table100-admin">
                                    <table>
                                        <thead>
                                            <tr className="table100-head">
                                                <th className="column1">Repo Name</th>
                                                <th className="column2">Repo Url</th>
                                                <th className="column3">Repo Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="column1"><input type="text" placeholder=' Repo Name' /></td>
                                                <td className="column2"><input type="url" placeholder=' Repo Url' /></td>
                                                <td className="column3"><input type="text" placeholder=' Repo descriptiom' /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 4 ? "content  active-content " : "content"}>
                    <div className="limiter-admin">
                        <div className="container-table100-admin">
                            <div className="wrap-table100-admin">
                                <div className="table100-admin">
                                    <table>
                                        <thead>
                                            <tr className="table100-head">
                                                <th className="column1">Name</th>
                                                <th className="column2">Surname</th>
                                                <th className="column3">Mail</th>
                                                <th className="column4">Office Number</th>
                                                <th className="column5">Personal Number</th>
                                                <th className="column6">Position Name</th>
                                                <th className="column7">Dev Type Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="column1"><input type="text" placeholder=' Name' /></td>
                                                <td className="column2"><input type="text" placeholder=' Surname' /></td>
                                                <td className="column3"><input type="email" placeholder='Email' /></td>
                                                <td className="column4"><input type="text" placeholder='Office Number' /></td>
                                                <td className="column5"><input type="text" placeholder='Personal Number' /></td>
                                                <td className="column4"><input type="text" placeholder='Position Name' /></td>
                                                <td className="column5"><input type="text" placeholder='Dev type name' /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 5 ? "content  active-content " : "content"}>
                    <div className="limiter-admin">
                        <div className="container-table100-admin">
                            <div className="wrap-table100-last-admin">
                                <div className="table100-admin">
                                    <table>
                                        <thead>
                                            <tr className="table100-head">
                                                <th className="column1">Tools' Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="column1">
                                                    <div className='tags-input-container'>
                                                        {
                                                            tags.map((a, b) => (
                                                                <div className="tag-item" key={b}>
                                                                    <span className="text">{a}</span>
                                                                    <span className="close" onClick={() => handleRemove(b)}>&times;</span>
                                                                </div>
                                                            ))
                                                        }
                                                        <input type="text" placeholder="write the tools' name" className="tag-input" onKeyDown={(e) => handleInput(e)} />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AdminForm