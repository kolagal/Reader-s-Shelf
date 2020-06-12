import React from 'react'
import styled from 'styled-components';
// import "./search.css"
function GenreTitle({title}) {
    return (
        <div className = "row">
            <div className = "col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    <strong className="text-blue">{title}
                    </strong>
                </h1>
            </div>
        </div>
    )
}

export default GenreTitle
