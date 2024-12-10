import React from 'react'

const Breadcrumb = ({ title }) => {
  return (
    <>
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="breadcrumb custom-cont">
        {/* <div className="container" bis_skin_checked={1}>

        </div> */}
        {/* <div className="row" bis_skin_checked={1}>
          <div className="col-12" bis_skin_checked={1}>
            <div className="breadcrumb_text" bis_skin_checked={1}>
              <div>
                <h1>{title}</h1>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
<div className="breadcrumb_text" bis_skin_checked={1}>
              <div>
                <h1>{title}</h1>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>{title}</li>
                </ul>
              </div>
            </div>
      </section>

    </>
  )
}

export default Breadcrumb