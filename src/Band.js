import Like from './Like'
import './Band.css'

function Band (props){
    const {Band_name, formed, origin, fans, split} = props
    if (split === '-') {
        return(
            <div className='Bands'>
                <p className='name'>{ Band_name }</p>
                <p className='formed'>Formed: { formed }</p>
                <p className='formed'>{ origin }</p>
                <p className='formed'>Fans: { fans }</p>
            </div>
        )
    } else {
    return(
        <div className='Bands'>
            <p className='name'>{ Band_name }</p>
            <p className='formed'>Formed: { formed }</p>
            <p className='formed'>{ origin }</p>
            <p className='formed'>Fans: { fans }</p>
            < Like />
        </div>
    )}
}

export default Band