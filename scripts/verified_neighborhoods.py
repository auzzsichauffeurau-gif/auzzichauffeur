"""
VERIFIED NEIGHBORHOODS DATA - Based on 2024 Research
Real suburbs and neighborhoods for Australian cities
"""

# Research-verified neighborhoods for each city (2024)
VERIFIED_NEIGHBORHOODS = {
    "Sydney": {
        "top_8": [
            "Sydney CBD",
            "Bondi Beach", 
            "Surry Hills",
            "Newtown",
            "Paddington",
            "Manly",
            "The Rocks",
            "Circular Quay"
        ],
        "extended": [
            "Darlinghurst", "North Sydney", "Parramatta", "Chatswood",
            "Cronulla", "Coogee", "Marrickville", "Leichhardt"
        ]
    },
    
    "Melbourne": {
        "top_8": [
            "Melbourne CBD",
            "Southbank",
            "Fitzroy",
            "St Kilda",
            "South Yarra",
            "Richmond",
            "Carlton",
            "Collingwood"
        ],
        "extended": [
            "Brighton", "Toorak", "Brunswick", "Docklands",
            "Port Melbourne", "Prahran", "Northcote", "Albert Park"
        ]
    },
    
    "Brisbane": {
        "top_8": [
            "Brisbane City",
            "South Bank",
            "Fortitude Valley",
            "New Farm",
            "West End",
            "Paddington",
            "Ascot",
            "Bulimba"
        ],
        "extended": [
            "Teneriffe", "Kangaroo Point", "Chermside", "Coorparoo",
            "Camp Hill", "Hawthorne", "Nundah", "North Lakes"
        ]
    },
    
    "Adelaide": {
        "top_8": [
            "Adelaide CBD",
            "North Adelaide",
            "Glenelg",
            "Unley",
            "Norwood",
            "Henley Beach",
            "Black Forest",
            "Walkerville"
        ],
        "extended": [
            "Prospect", "Port Adelaide", "Semaphore", "Mawson Lakes",
            "Burnside", "Goodwood", "Brighton", "Aldgate"
        ]
    },
    
    "Gold Coast": {
        "top_8": [
            "Surfers Paradise",
            "Broadbeach",
            "Burleigh Heads",
            "Southport",
            "Palm Beach",
            "Coolangatta",
            "Main Beach",
            "Robina"
        ],
        "extended": [
            "Mermaid Waters", "Broadbeach Waters", "Varsity Lakes", "Coomera",
            "Helensvale", "Labrador", "Currumbin", "Miami"
        ]
    },
    
    "Hobart": {
        "top_8": [
            "Hobart CBD",
            "Battery Point",
            "Sandy Bay",
            "North Hobart",
            "Bellerive",
            "Newtown",
            "Glebe",
            "Moonah"
        ],
        "extended": [
            "South Hobart", "West Hobart", "Lenah Valley", "Kingston",
            "Lindisfarne", "Howrah", "Glenorchy", "Taroona"
        ]
    },
    
    "Cairns": {
        "top_8": [
            "Cairns City",
            "Port Douglas",
            "Palm Cove",
            "Trinity Beach",
            "Cairns North",
            "Edge Hill",
            "Whitfield",
            "Freshwater"
        ],
        "extended": [
            "Smithfield", "Kewarra Beach", "Yorkeys Knob", "Holloways Beach",
            "Redlynch", "Brinsmead", "Edmonton", "Machans Beach"
        ]
    }
}

def print_typescript_arrays():
    """Generate TypeScript arrays for each city"""
    print("\n" + "="*60)
    print("TYPESCRIPT NEIGHBORHOOD ARRAYS")
    print("="*60)
    
    for city, data in VERIFIED_NEIGHBORHOODS.items():
        neighborhoods = data["top_8"]
        var_name = city.lower().replace(" ", "") + "Neighborhoods"
        formatted = ', '.join([f'"{n}"' for n in neighborhoods])
        print(f"\n// {city} - Verified 2024 Data")
        print(f"const {var_name} = [{formatted}];")

if __name__ == "__main__":
    print_typescript_arrays()
    
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    for city in VERIFIED_NEIGHBORHOODS.keys():
        print(f"{city}: {len(VERIFIED_NEIGHBORHOODS[city]['top_8'])} top neighborhoods")
