import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import "./Login.css"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router-dom'
const Login = () => {
    const history = useHistory()
    const [show, setShow] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowSidebar = () => setShowSidebar(true);
    const handleLogin = () => {
        if (email === "user@email.com" && password === "iamuser") {
            localStorage.setItem("test-app-email", email)
            history.push("/profile")
        } else {
            alert("Wrong credentials!")
        }
    }
    return (
        <div>
            {<Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
            <div className="login_top_bar">
                <Button variant="primary" onClick={handleShowSidebar}>
                    Sidebar
                </Button>
                <div className="login_search_bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <Button variant="primary" onClick={handleShow}>
                    Login
                </Button>
            </div>
            <div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control style={{ marginBottom: "3px" }} value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Control style={{ marginBottom: "3px" }} value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <Button variant="primary" type="submit" onClick={handleLogin}>
                        Submit
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Login;

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    return (
        <div className={showSidebar ? "sidebar-visible" : "sidebar"}>
            <Button variant="primary" onClick={
                () => { setShowSidebar(false) }
            }>
                Close
                </Button>
            <div>
                <h4>Menu 1</h4>
                <p>Sub-Menu-Item</p>
                <p>Sub-Menu-Item</p>
                <p>Sub-Menu-Item</p>
                <h4>Menu 2</h4>
                <p>Sub-Menu-Item</p>
                <p>Sub-Menu-Item</p>
                <p>Sub-Menu-Item</p>
            </div>
        </div>
    )
}