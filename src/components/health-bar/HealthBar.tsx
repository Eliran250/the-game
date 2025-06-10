import './healthBarStyle.scss'
import heart from "../../assets/heart_healthBar.webp"
import { useGame } from '../../context/GameProvider'

const HealthBar = () => {

    const { health } = useGame()

    const healthColor = () => {
        if (health >= 90) return "green";
        if (health >= 70) return "orange";
        if (health >= 40) return "pink";
        if (health >= 0) return "red";
    }

    return (
        <div className="health-bar-container">
            <div>
                <div className="health-bar-wrapper">
                    <img className='heart-image' src={heart} alt="" />
                    <div className='health-bar'>
                        <div className='health-fill' style={{ background: healthColor(), width: `${health}%` }}>{health}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthBar