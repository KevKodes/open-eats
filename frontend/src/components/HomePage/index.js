import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm';
import Footer from '../Footer';
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
			<div className="home-body">
				<div className="restaurant-row">
					<div className="carousel-header">
					<h2>Available for reservation now</h2>
					</div>
					<div className="carousel">
						
					</div>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	)
}