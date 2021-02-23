import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchForm from '../SearchForm';
import Footer from '../Footer';
import ResaurantCard from './RestaurantCard';
import { getRestaurants } from '../../store/restaurants';
import './HomePage.css'

export default function HomePage() {
	const dispatch = useDispatch();

	//gather all the restaurants here then pass each one into the ResaurantCard component
	useEffect(() => {
		dispatch(getRestaurants());
	}, [dispatch])

	const restaurantList = useSelector(state => {
		return state.restaurants.list
	})
	console.log('Home page component restaurant list: ', restaurantList)

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
						{restaurantList.length && restaurantList.map(rest => (
							<ResaurantCard restaurant={rest} />
						))}
					</div>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	)
}