import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Page404.css'
export default function Non() {
    return (
        <>
            <h1>404 Error Page</h1>
            <section className="error-container-404">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <Link target="_blank" href="/" className="more-link">Back To Home</Link>
            </div></>
    )
}

