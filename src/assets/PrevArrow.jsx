import React from 'react'
const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div
            className="custom-arrow prev-arrow"
            onClick={onClick}
            style={{ cursor: "pointer", fontSize: "24px" }}
        >
            <i className="bi bi-chevron-left"></i>
        </div>
    )
}

export default PrevArrow
