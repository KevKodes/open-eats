import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm';
import './HomePage.css'

export default function HomePage() {


	return (
		<>
			<header className="home-header">
				<h1 className="home-title">
						Find your table for any occasion
				</h1>
				<SearchForm />
			</header>
		</>
	)
}