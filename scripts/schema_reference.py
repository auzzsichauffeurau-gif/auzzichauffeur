"""
Schema data for all Australian cities
"""

CITY_SCHEMA_DATA = {
    "Melbourne": {
        "state": "Victoria",
        "lat": -37.8136,
        "lng": 144.9631,
        "description": "Melbourne's premier chauffeur service. Luxury airport transfers (MEL), corporate transport, and private tours of Australia's cultural capital."
    },
    "Brisbane": {
        "state": "Queensland",
        "lat": -27.4698,
        "lng": 153.0251,
        "description": "Brisbane's premier chauffeur service. Luxury airport transfers (BNE), corporate cars, and private tours of the River City."
    },
    "Adelaide": {
        "state": "South Australia",
        "lat": -34.9285,
        "lng": 138.6007,
        "description": "Adelaide's premier chauffeur service. Luxury airport transfers (ADL), Barossa Valley tours, and corporate transport."
    },
    "Gold Coast": {
        "state": "Queensland",
        "lat": -28.0167,
        "lng": 153.4000,
        "description": "Gold Coast's premier chauffeur service. Luxury airport transfers (OOL), theme park transport, and beachside transfers."
    },
    "Hobart": {
        "state": "Tasmania",
        "lat": -42.8821,
        "lng": 147.3272,
        "description": "Hobart's premier chauffeur service. Luxury airport transfers (HBA), MONA tours, and Tasmania private transport."
    },
    "Cairns": {
        "state": "Queensland",
        "lat": -16.9186,
        "lng": 145.7781,
        "description": "Cairns & Port Douglas premier chauffeur service. Luxury airport transfers (CNS), Great Barrier Reef tours, and tropical transport."
    }
}

# Print schema code for each city
for city, data in CITY_SCHEMA_DATA.items():
    print(f"\n// {city}")
    print(f"""{{generateLocalBusinessSchema({{
    city: "{city}",
    state: "{data['state']}",
    description: "{data['description']}",
    latitude: {data['lat']},
    longitude: {data['lng']},
    postalCodes: {city.lower().replace(' ', '')}Postcodes,
    neighborhoods: {city.lower().replace(' ', '')}Neighborhoods
}})}}""")
