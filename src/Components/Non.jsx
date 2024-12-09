import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Page404.css'
export default function Non() {
    return (
        <>
            <h1>404 Error Page</h1>
            <section class="error-container-404">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
                <Link target="_blank" href="/" class="more-link">Back To Home</Link>
            </div></>
    )
}
