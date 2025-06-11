import React from 'react'
import "./enemiesStyle.scss"
import zombie from "../../assets/zombie.png"
const Enemies = () => {
    return (
        <div>
            <div className='enemies_container'>
                <img className='zombie-image' src={zombie} alt="" />
            </div>
        </div>
    )
}

export default Enemies