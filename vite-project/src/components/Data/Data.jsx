import './Data.css'
export default function Data() {
    const now = new Date();
    return (
        <div class="time">
          <img src="{'vite.svg'}" alt="" />
          <span>time {now.toLocaleTimeString()} </span>
        </div>
            
    )
}