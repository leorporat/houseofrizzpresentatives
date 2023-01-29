function Card({image, name}) {
    return (
        <div className='card-container'>
            <div className='card-image-container'>
                <img className='card-image'>{image}</img>
            </div>
            <div className='card-name-container'>
                <p className='card-name'>{name}</p>
            </div>
        </div>
    )
}

export default Card