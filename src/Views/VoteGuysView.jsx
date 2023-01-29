import Card from '../Components/Card.jsx'
import a000055_200 from '../congressmembers1_files/a000055_200.jpg'
import a000148_200 from '../congressmembers1_files/a000148_200.jpg'

function VoteGuysView() {
    return (
        <div className='guys-selections'>
            <Card
            image={a000055_200}
            name='Fuckface Mcgee'/>
            <Card
            image={a000148_200}
            name='Other Fuckface' />
        </div>
    )
}

 export default VoteGuysView

