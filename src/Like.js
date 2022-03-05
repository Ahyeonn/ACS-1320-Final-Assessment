import {useState}  from 'react';
import './Like.css'

function Like() {
    const [likes , setCount] = useState(0)

    return (
        <div className='forlikes'>
            <button onClick={() => setCount(likes - 1)}>-</button>
            <h2>{likes}</h2>
            <button onClick={() => setCount(likes + 1)}>+</button>
        </div>
    )
}

export default Like