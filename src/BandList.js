import Band from "./Band";
import data from './metal.json'
import './BandList.css'

function BandList() {
    const bands = data.map(( { band_name, formed, origin, fans, split}) => {
    return(
        <Band
            key={band_name}
            Band_name={band_name}
            formed={formed}
            origin={origin}
            fans={fans}
            split={split}
        />
    )
  })

    return (
        <div className="BandList">
            { bands }
        </div>
    )
}

export default BandList