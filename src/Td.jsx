import React from 'react'

function Td(props) {
  function h(){
    props.onSelect(props.id)
  }
  return (
    <div>
       <div className="hj"> <li>
        {props.text}
        <button className='btn' onClick={h}>-</button>
      </li>
      </div>
    </div>
  )
}

export default Td