"""
VERIFIED AUSTRALIAN POSTCODES - Real Data
Postcodes for major cities and their key suburbs
"""

CITY_POSTCODES = {
    "Sydney": {
        "primary": ["2000", "2001", "2007", "2008", "2009", "2010", "2011", "2015", "2016", "2017", "2018", "2021", "2022", "2026", "2027", "2028", "2030", "2095", "2060", "2150"],
        "description": "Sydney CBD, Eastern Suburbs, Inner West, North Shore"
    },
    
    "Melbourne": {
        "primary": ["3000", "3001", "3002", "3003", "3004", "3006", "3008", "3011", "3051", "3052", "3053", "3054", "3056", "3065", "3066", "3141", "3142", "3182", "3183", "3186"],
        "description": "Melbourne CBD, Inner City, Bayside, Inner North"
    },
    
    "Brisbane": {
        "primary": ["4000", "4001", "4005", "4006", "4007", "4009", "4010", "4011", "4012", "4030", "4051", "4059", "4060", "4064", "4066", "4101", "4102", "4120", "4151", "4170"],
        "description": "Brisbane City, Inner North, Inner South, Eastern Suburbs"
    },
    
    "Adelaide": {
        "primary": ["5000", "5001", "5005", "5006", "5007", "5008", "5009", "5010", "5011", "5012", "5013", "5014", "5031", "5032", "5033", "5034", "5035", "5037", "5045", "5082"],
        "description": "Adelaide CBD, Inner Suburbs, Coastal Areas, Eastern Suburbs"
    },
    
    "Gold Coast": {
        "primary": ["4215", "4216", "4217", "4218", "4219", "4220", "4221", "4222", "4223", "4225", "4226", "4227", "4228", "4229", "4230", "4209", "4210", "4211", "4212", "4214"],
        "description": "Surfers Paradise, Broadbeach, Southport, Northern Suburbs"
    },
    
    "Hobart": {
        "primary": ["7000", "7001", "7004", "7005", "7008", "7009", "7010", "7011", "7015", "7016", "7017", "7018", "7050", "7053", "7054", "7055", "7109", "7170", "7248", "7249"],
        "description": "Hobart CBD, Eastern Shore, Northern Suburbs, Southern Areas"
    },
    
    "Cairns": {
        "primary": ["4870", "4868", "4869", "4871", "4877", "4878", "4879", "4880", "4881", "4882", "4883", "4884", "4885", "4886", "4873", "4874", "4875", "4876", "4888", "4892"],
        "description": "Cairns City, Northern Beaches, Port Douglas, Tablelands"
    }
}

def print_typescript_arrays():
    """Generate TypeScript arrays for postcodes"""
    print("\n" + "="*60)
    print("TYPESCRIPT POSTCODE ARRAYS")
    print("="*60)
    
    for city, data in CITY_POSTCODES.items():
        postcodes = data["primary"][:20]  # Top 20 postcodes
        var_name = city.lower().replace(" ", "") + "Postcodes"
        formatted = ', '.join([f'"{p}"' for p in postcodes])
        print(f"\n// {city} - {data['description']}")
        print(f"const {var_name} = [{formatted}];")

if __name__ == "__main__":
    print_typescript_arrays()
    
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    for city, data in CITY_POSTCODES.items():
        print(f"{city}: {len(data['primary'])} postcodes - {data['description']}")
