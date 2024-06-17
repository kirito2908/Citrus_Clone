import React from 'react'

const FactsIcon = (dets) => {
  return (
    <>
      <div className="facts">
        <img src={dets.icon} alt={dets.name} />
        <h5>{dets.name}</h5>
      </div>
    </>
  )
}

export default FactsIcon
