import React, { useState } from 'react'
import Header from './Header'



function ProjectDetail() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className='project-detail-main'>
            <Header/>
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
            <div className='content-tabs container'>
                <div className={toggleState === 1 ? "content  active-content " : "content"}>
                    <div className="limiter">
                        <div className="container-table100">
                            <div className="wrap-table100">
                                <div className="table100">
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
                                                <td className="column1">2017-09-29 01:22</td>
                                                <td className="column2">200398</td>
                                                <td className="column3">iPhone X 64Gb Grey</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                            </tr>
                                            <tr>
                                                <td className="column1">2017-09-21 05:57</td>
                                                <td className="column2">200388</td>
                                                <td className="column3">Game Console Controller</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                            </tr>
                                            <tr>
                                                <td className="column1">2017-09-19 05:57</td>
                                                <td className="column2">200387</td>
                                                <td className="column3">iPhone X 64Gb Grey</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <div className="limiter">
                        <div className="container-table100">
                            <div className="wrap-table100">
                                <div className="table100">
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
                                                <td className="column1">2017-09-29 01:22</td>
                                                <td className="column2">200398</td>
                                                <td className="column3">iPhone X 64Gb Grey</td>
                                            </tr>
                                            <tr>
                                                <td className="column1">2017-09-21 05:57</td>
                                                <td className="column2">200388</td>
                                                <td className="column3">Game Console Controller</td>
                                            </tr>
                                            <tr>
                                                <td className="column1">2017-09-19 05:57</td>
                                                <td className="column2">200387</td>
                                                <td className="column3">iPhone X 64Gb Grey</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <div className="limiter">
                        <div className="container-table100">
                            <div className="wrap-table100">
                                <div className="table100">
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
                                                <td className="column1">2017-09-29 01:22</td>
                                                <td className="column2">200398</td>
                                                <td className="column3">iPhone X 64Gb Grey</td>
                                            </tr>
                                            <tr>
                                                <td className="column1">2017-09-21 05:57</td>
                                                <td className="column2">200388</td>
                                                <td className="column3">Game Console Controller</td>
                                            </tr>
                                            <tr>
                                                <td className="column1">2017-09-19 05:57</td>
                                                <td className="column2">200387</td>
                                                <td className="column3">iPhone X 64Gb Grey</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                    <div className="limiter">
                        <div className="container-table100">
                            <div className="wrap-table100">
                                <div className="table100">
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
                                                <td className="column1">2017-09-29 01:22</td>
                                                <td className="column2">200398</td>
                                                <td className="column3">iPhone X 64Gb Grey</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                            </tr>

                                            <tr>
                                                <td className="column1">2017-09-21 05:57</td>
                                                <td className="column2">200388</td>
                                                <td className="column3">Game Console Controller</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                            </tr>
                                            <tr>
                                                <td className="column1">2017-09-19 05:57</td>
                                                <td className="column2">200387</td>
                                                <td className="column3">iPhone X 64Gb Grey</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                            </tr>
                                            <tr>
                                                <td className="column1">2017-09-18 05:57</td>
                                                <td className="column2">200386</td>
                                                <td className="column3">iPhone X 64Gb Grey</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                                <td className="column4">$999.00</td>
                                                <td className="column5">1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 5 ? "content  active-content" : "content"}>
                    <div className="limiter">
                        <div className="container-table100">
                            <div className="wrap-table100-last">
                                <div className="table100">
                                    <table>
                                        <thead>
                                            <tr className="table100-head">
                                                <th className="column1">Name</th>
                                                <th className="column2">Surname</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="column1">2017-09-29 01:22</td>
                                                <td className="column2">200398</td>

                                            </tr>

                                            <tr>
                                                <td className="column1">2017-09-21 05:57</td>
                                                <td className="column2">200388</td>
                                            </tr>
                                            <tr>
                                                <td className="column1">2017-09-19 05:57</td>
                                                <td className="column2">200386</td>

                                            </tr>
                                            <tr>
                                                <td className="column1">2017-09-18 05:57</td>
                                                <td className="column2">200386</td>
                                               
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

export default ProjectDetail