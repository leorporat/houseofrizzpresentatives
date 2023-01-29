function Card({image, name}) {
    return (
        <div className='card-container'>
            <div className='card-image-container'>
                <img className='card-image' alt='N/A' src={image}/>
            </div>
            <div className='card-name-container'>
                <p className='card-name'>{name}</p>
            </div>
        </div>
    )
}

export default Card