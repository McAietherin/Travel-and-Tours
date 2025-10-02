const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div
            className="custom-arrow next-arrow"
            onClick={onClick}
            style={{ cursor: "pointer", fontSize: "24px" }}
        >
            <i className="bi bi-chevron-right"></i>
        </div>
    )
}

export default NextArrow
