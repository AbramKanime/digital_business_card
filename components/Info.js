import React from "react"

export default function Info() {
    return (
        <div className="info-container">
            <img className="profile-img" src="./image/me-4.jpg"/>
            <div className="info-details">
                <h2 className="name">Abraham Kanime</h2>
                <p className="title">Frontend Developer</p>
                <a href="https://github.com/AbramKanime/"className="website">
                https://github.com/AbramKanime/
                </a>
            </div>
            <div className="buttons">
                <a href="#" className="email">
                    <img src="./image/mail.png"/>
                    Email
                </a>
                <a href="https://www.linkedin.com/in/abraham-kanime-acca-1053b2a4/" className="linkedIn">
                    <img src="./image/linkedin.png"/>
                    LinkedIn
                </a>
            </div>
        </div>
    )
}