"use client";

import { useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Wind } from "lucide-react";

interface WeatherWidgetProps {
    location: string;
    lat?: number;
    lng?: number;
}

const cityCoords: Record<string, { lat: number; lng: number }> = {
    sydney: { lat: -33.8688, lng: 151.2093 },
    melbourne: { lat: -37.8136, lng: 144.9631 },
    brisbane: { lat: -27.4698, lng: 153.0251 },
    adelaide: { lat: -34.9285, lng: 138.6007 },
    perth: { lat: -31.9505, lng: 115.8605 },
    hobart: { lat: -42.8821, lng: 147.3272 },
    goldcoast: { lat: -28.0167, lng: 153.4 },
    canberra: { lat: -35.2809, lng: 149.13 },
    cairns: { lat: -16.9186, lng: 145.7781 },
};

export default function WeatherWidget({ location, lat, lng }: WeatherWidgetProps) {
    const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const cityKey = location.toLowerCase().replace(/\s+/g, "");
    const coords = lat && lng ? { lat, lng } : cityCoords[cityKey];

    useEffect(() => {
        if (!coords) {
            setLoading(false);
            return;
        }

        async function fetchWeather() {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

                const res = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&current_weather=true`,
                    { signal: controller.signal }
                );

                clearTimeout(timeoutId);

                if (!res.ok) {
                    throw new Error('Weather API request failed');
                }

                const data = await res.json();
                setWeather({
                    temp: data.current_weather.temperature,
                    code: data.current_weather.weathercode,
                });
                setError(false);
            } catch (err) {
                // Only log in development
                if (process.env.NODE_ENV === 'development') {
                    console.warn("Weather widget: API unavailable", err);
                }
                setError(true);
                // Silently fail - widget won't render
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
    }, [coords]);

    // Don't render anything if loading, error, or no coords
    if (!coords || loading || error || !weather) return null;

    const getWeatherIcon = (code: number) => {
        if (code <= 1) return <Sun className="text-yellow-500" size={24} />;
        if (code <= 3) return <Cloud className="text-gray-500" size={24} />;
        if (code <= 67) return <CloudRain className="text-blue-500" size={24} />;
        if (code <= 77) return <CloudSnow className="text-blue-300" size={24} />;
        if (code <= 99) return <CloudLightning className="text-purple-500" size={24} />;
        return <Sun className="text-yellow-500" size={24} />;
    };

    return (
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-gray-100 w-fit">
            {getWeatherIcon(weather.code)}
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">{location}</span>
                <span className="text-xs text-gray-600">{Math.round(weather.temp)}°C</span>
            </div>
        </div>
    );
}
