import data from './metal.json'
import './MetalMeta.css'

function MetalMeta() {
    return(
        <p className='forband'>Total Bands: {data.length}</p>
    )
}

export default MetalMeta