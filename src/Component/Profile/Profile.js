import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
const Profile = () => {
    const history = useHistory()

    const handleLogout = () => {
        localStorage.setItem("test-app-email", "")
        history.push("/")
    }
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h1>Hello, {localStorage.getItem("test-app-email")}</h1>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Profile
