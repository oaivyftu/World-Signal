"use client";

import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
	const mapRef = useRef<mapboxgl.Map | null>(null);
	const mapContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current!,
			style: "mapbox://styles/mapbox/dark-v11",
			center: [0, 0],
			zoom: 2.5,
			projection: "mercator",
		});

		return () => {
			mapRef.current?.remove();
		};
	}, []);

	return (
		<>
			<div
				id="map-container"
				ref={mapContainerRef}
				style={{ width: "100%", height: "100vh" }}
			/>
		</>
	);
}

export default Map;
