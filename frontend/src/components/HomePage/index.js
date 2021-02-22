import React, { useState, useEffect } from 'react';
import './HomePage.css'

export default function HomePage() {
    const today = new Date();
		console.log(today)
    const [resDate, setResDate] = useState("today");
		const [resTime, setResTime] = useState("7:00 pm")
		const timeOptions = ["7:00 pm", "7:30 pm", "8:00 pm"]

    return (
			<>
				<header className="home-header">
					<h1 className="home-title">
							Find your table for any occasion
					</h1>
					<form
						className="home-res-form"
					>
						<input
							className="date-selector"
							type="dropdown"
							value={resDate}
							onChange={e => e.target.value}
						/>
						<select
						  className="time-selector"
							value={resTime}
							onChange={e => e.target.value}
							>
								{timeOptions.map((time, idx) => (
									<option key={idx} value={time}>{time}</option>
								))}
							</select>
					</form>
				</header>
			</>
    )
}