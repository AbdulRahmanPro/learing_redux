import React ,{ useState } from 'react'
import {  useDispatch , useSelector } from 'react-redux'
import { addcount , removecount ,incremenByAmount } from '../redux/reducers/reducers'
function Counter() {
    const count = useSelector((stata)=> stata.counter.count)
    const dipsatch = useDispatch()
    // const count = useSelector((stata)=> stata.counter.count)
    // const dipsatch = useDispatch()
    // const [valuenumber , setvaluenumber] = useState(0)
    // const handleAdd = ()=>{
    //     setvaluenumber(valuenumber + 1)
    // }
    // const handleremove = ()=>{
    //     setvaluenumber(valuenumber - 1)
    // }
    return (
        <div className='Counter'>
            <p>{count}</p>
            <div className='grub_but'>
                <button onClick={()=> dipsatch(addcount())}>Add</button>
                <button onClick={()=> dipsatch(removecount())}>remove</button>
                <button onClick={()=> dipsatch(incremenByAmount(5))}>remove</button>

            </div>
        </div>
    )
}

export default Counter