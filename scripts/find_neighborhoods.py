"""
Script to find popular neighborhoods/suburbs for Australian cities
This will help populate the Neighborhoods component on location pages
"""

import json

# Comprehensive neighborhoods for each city
CITY_NEIGHBORHOODS = {
    "Sydney": [
        "Sydney CBD", "Bondi", "Manly", "Surry Hills",
        "Newtown", "Parramatta", "Chatswood", "North Sydney",
        "Darling Harbour", "The Rocks", "Paddington", "Double Bay",
        "Mosman", "Cronulla", "Randwick", "Bankstown"
    ],
    
    "Melbourne": [
        "Melbourne CBD", "Southbank", "Docklands", "St Kilda",
        "South Yarra", "Richmond", "Fitzroy", "Carlton",
        "Brighton", "Toorak", "Chapel Street", "Brunswick",
        "Collingwood", "Port Melbourne", "Prahran", "Hawthorn"
    ],
    
    "Brisbane": [
        "Brisbane City", "South Bank", "Fortitude Valley", "New Farm",
        "West End", "Teneriffe", "Ascot", "Hamilton",
        "Kangaroo Point", "Spring Hill", "Paddington", "Milton",
        "Woolloongabba", "Newstead", "Bowen Hills", "Kelvin Grove"
    ],
    
    "Adelaide": [
        "Adelaide CBD", "North Adelaide", "Glenelg", "Unley",
        "Prospect", "Norwood", "Henley Beach", "Mawson Lakes",
        "Port Adelaide", "Burnside", "Goodwood", "Parkside",
        "Semaphore", "Brighton", "Grange", "Colonel Light Gardens"
    ],
    
    "Gold Coast": [
        "Surfers Paradise", "Broadbeach", "Burleigh Heads", "Southport",
        "Robina", "Coolangatta", "Main Beach", "Mermaid Waters",
        "Palm Beach", "Currumbin", "Miami", "Varsity Lakes",
        "Bundall", "Benowa", "Ashmore", "Runaway Bay"
    ],
    
    "Hobart": [
        "Hobart CBD", "Battery Point", "Sandy Bay", "North Hobart",
        "South Hobart", "Lenah Valley", "Moonah", "Kingston",
        "New Town", "West Hobart", "Mount Stuart", "Dynnyrne",
        "Bellerive", "Glenorchy", "Rosny", "Lindisfarne"
    ],
    
    "Cairns": [
        "Cairns City", "Port Douglas", "Palm Cove", "Trinity Beach",
        "Smithfield", "Edmonton", "Clifton Beach", "Kewarra Beach",
        "Yorkeys Knob", "Holloways Beach", "Machans Beach", "Ellis Beach",
        "Gordonvale", "Mareeba", "Kuranda", "Mission Beach"
    ],
    
    "Perth": [
        "Perth CBD", "Fremantle", "Subiaco", "Northbridge",
        "Cottesloe", "Scarborough", "Joondalup", "Mandurah",
        "South Perth", "Victoria Park", "Leederville", "Mount Lawley",
        "Claremont", "Nedlands", "Como", "Applecross"
    ],
    
    "Canberra": [
        "Canberra City", "Civic", "Braddon", "Belconnen",
        "Woden", "Tuggeranong", "Gungahlin", "Dickson",
        "Kingston", "Manuka", "Barton", "Fyshwick",
        "Phillip", "Greenway", "Erindale", "Queanbeyan"
    ]
}

# City coordinates for WeatherWidget
CITY_COORDINATES = {
    "Sydney": {"lat": -33.8688, "lng": 151.2093},
    "Melbourne": {"lat": -37.8136, "lng": 144.9631},
    "Brisbane": {"lat": -27.4698, "lng": 153.0251},
    "Adelaide": {"lat": -34.9285, "lng": 138.6007},
    "Perth": {"lat": -31.9505, "lng": 115.8605},
    "Hobart": {"lat": -42.8821, "lng": 147.3272},
    "Gold Coast": {"lat": -28.0167, "lng": 153.4000},
    "Canberra": {"lat": -35.2809, "lng": 149.1300},
    "Cairns": {"lat": -16.9186, "lng": 145.7781}
}

# Map query strings for Google Maps embed
MAP_QUERIES = {
    "Sydney": "Sydney,New+South+Wales",
    "Melbourne": "Melbourne,Victoria",
    "Brisbane": "Brisbane,Queensland",
    "Adelaide": "Adelaide,South+Australia",
    "Perth": "Perth,Western+Australia",
    "Hobart": "Hobart,Tasmania",
    "Gold Coast": "Gold+Coast,Queensland",
    "Canberra": "Canberra,Australian+Capital+Territory",
    "Cairns": "Cairns,Queensland"
}

def get_neighborhoods(city_name):
    """Get neighborhoods for a specific city"""
    return CITY_NEIGHBORHOODS.get(city_name, [])

def get_coordinates(city_name):
    """Get coordinates for a specific city"""
    return CITY_COORDINATES.get(city_name, None)

def get_map_query(city_name):
    """Get Google Maps query string for a city"""
    return MAP_QUERIES.get(city_name, city_name.replace(" ", "+"))

def generate_neighborhood_array(city_name, limit=8):
    """Generate TypeScript array for neighborhoods"""
    neighborhoods = get_neighborhoods(city_name)[:limit]
    formatted = ', '.join([f'"{n}"' for n in neighborhoods])
    return f"const {city_name.lower().replace(' ', '')}Neighborhoods = [{formatted}];"

def generate_all_data():
    """Generate all data in JSON format"""
    data = {
        "neighborhoods": CITY_NEIGHBORHOODS,
        "coordinates": CITY_COORDINATES,
        "map_queries": MAP_QUERIES
    }
    return json.dumps(data, indent=2)

if __name__ == "__main__":
    print("=" * 60)
    print("AUSTRALIAN CITIES - NEIGHBORHOODS DATA")
    print("=" * 60)
    
    for city in CITY_NEIGHBORHOODS.keys():
        print(f"\n{city}:")
        print(f"  Neighborhoods: {len(CITY_NEIGHBORHOODS[city])}")
        print(f"  Top 8: {', '.join(CITY_NEIGHBORHOODS[city][:8])}")
        print(f"  Coordinates: {CITY_COORDINATES.get(city, 'N/A')}")
        print(f"  Map Query: {MAP_QUERIES.get(city, 'N/A')}")
    
    print("\n" + "=" * 60)
    print("TYPESCRIPT CODE SNIPPETS")
    print("=" * 60)
    
    for city in ["Sydney", "Melbourne", "Brisbane", "Adelaide", "Gold Coast", "Hobart", "Cairns"]:
        print(f"\n// {city}")
        print(generate_neighborhood_array(city, 8))
    
    print("\n" + "=" * 60)
    print("JSON OUTPUT")
    print("=" * 60)
    print(generate_all_data())
