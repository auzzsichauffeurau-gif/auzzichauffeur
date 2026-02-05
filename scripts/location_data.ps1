# Script to generate all location pages properly

$locations = @{
    "melbourne"           = @{
        title         = "Chauffeur Service Melbourne | Airport Transfers & Corporate Cars"
        description   = "Melbourne's premier chauffeur service. Luxury airport transfers (MEL), corporate transport, and tours of Victoria's cultural capital."
        subtitle      = "Explore Melbourne's laneways, culture, and surrounding wine regions in style."
        sectionTitle  = "The Cultural Capital"
        intro         = "From the CBD to the Yarra Valley, Melbourne demands sophistication. Auzzsi Chauffeur provides seamless transport for business, leisure, and special events. Experience Melbourne with a professional chauffeur who knows every laneway and shortcut."
        neighborhoods = @("Melbourne CBD", "South Yarra", "St Kilda", "Fitzroy", "Carlton", "Richmond", "Docklands", "Southbank")
        postcodes     = @("3000", "3001", "3002", "3003", "3004", "3005", "3006", "3008", "3031", "3051", "3052", "3053", "3054", "3056", "3065", "3066", "3067", "3068", "3121", "3141")
        latitude      = "-37.8136"
        longitude     = "144.9631"
        state         = "Victoria"
        mapText       = "Melbourne's grid system is straightforward, but our chauffeurs know the best routes to avoid traffic. Whether you're heading to the airport, Yarra Valley, or the Great Ocean Road, we ensure a smooth journey."
    }
    "brisbane"            = @{
        title         = "Chauffeur Service Brisbane | Airport Transfers & Gold Coast"
        description   = "Brisbane's premier chauffeur service. Luxury airport transfers (BNE), corporate transport, and transfers to the Gold Coast and Sunshine Coast."
        subtitle      = "Experience Queensland's River City with professional chauffeur service."
        sectionTitle  = "The River City"
        intro         = "From Brisbane CBD to the Gold Coast, our chauffeurs provide reliable, luxurious transport. Perfect for airport transfers, corporate events, and exploring South East Queensland in comfort."
        neighborhoods = @("Brisbane CBD", "Fortitude Valley", "South Bank", "New Farm", "Paddington", "West End", "Kangaroo Point", "Spring Hill")
        postcodes     = @("4000", "4001", "4005", "4006", "4007", "4009", "4010", "4011", "4012", "4051", "4059", "4060", "4064", "4065", "4066", "4067", "4068", "4101")
        latitude      = "-27.4698"
        longitude     = "153.0251"
        state         = "Queensland"
        mapText       = "Brisbane's river and bridges create unique traffic patterns. Our experienced chauffeurs navigate efficiently whether you're heading to the airport, Gold Coast, or Sunshine Coast."
    }
    "gold-coast"          = @{
        title         = "Chauffeur Service Gold Coast | Beach Transfers & Airport"
        description   = "Gold Coast's premier chauffeur service. Luxury airport transfers, theme park transport, and beach-to-airport transfers along the Gold Coast."
        subtitle      = "Travel the Gold Coast in luxury - from Surfers Paradise to Coolangatta."
        sectionTitle  = "The Glitter Strip"
        intro         = "From Surfers Paradise to Coolangatta, the Gold Coast deserves premium transport. Our chauffeurs provide seamless airport transfers, theme park visits, and coastal tours with style and professionalism."
        neighborhoods = @("Surfers Paradise", "Broadbeach", "Burleigh Heads", "Coolangatta", "Main Beach", "Southport", "Robina", "Palm Beach")
        postcodes     = @("4217", "4218", "4220", "4221", "4222", "4223", "4225", "4226", "4227", "4228", "4229", "4230")
        latitude      = "-28.0167"
        longitude     = "153.4000"
        state         = "Queensland"
        mapText       = "The Gold Coast Highway connects all major destinations. Our chauffeurs know the best routes to avoid peak traffic, ensuring timely arrivals for flights and events."
    }
    "hobart"              = @{
        title         = "Chauffeur Service Hobart | Tasmania Airport Transfers & Tours"
        description   = "Hobart's premier chauffeur service. Luxury airport transfers (HBA), MONA tours, and exploration of Tasmania's capital in comfort."
        subtitle      = "Discover Tasmania's heritage city with professional chauffeur service."
        sectionTitle  = "Gateway to Tasmania"
        intro         = "From the waterfront to Mount Wellington, Hobart offers unique experiences. Our chauffeurs provide premium transport for airport transfers, MONA visits, and tours of Tasmania's stunning landscapes."
        neighborhoods = @("Hobart CBD", "Battery Point", "Sandy Bay", "North Hobart", "West Hobart", "South Hobart", "Bellerive", "Glenorchy")
        postcodes     = @("7000", "7001", "7004", "7005", "7008", "7009", "7010", "7011", "7015", "7018", "7050")
        latitude      = "-42.8821"
        longitude     = "147.3272"
        state         = "Tasmania"
        mapText       = "Hobart's compact size makes navigation easy, but our chauffeurs know the scenic routes. Whether visiting MONA, Mount Wellington, or the airport, travel in comfort."
    }
    "cairns-port-douglas" = @{
        title         = "Chauffeur Service Cairns & Port Douglas | Reef Transfers"
        description   = "Cairns and Port Douglas premier chauffeur service. Luxury airport transfers (CNS), reef tours, and Daintree Rainforest exploration."
        subtitle      = "Explore Tropical North Queensland in luxury and comfort."
        sectionTitle  = "Gateway to the Reef"
        intro         = "From Cairns to Port Douglas and the Daintree, Tropical North Queensland deserves premium transport. Our chauffeurs provide seamless transfers for reef tours, rainforest adventures, and airport connections."
        neighborhoods = @("Cairns CBD", "Palm Cove", "Port Douglas", "Trinity Beach", "Clifton Beach", "Kewarra Beach", "Yorkeys Knob", "Smithfield")
        postcodes     = @("4870", "4871", "4877", "4878", "4879", "4880")
        latitude      = "-16.9186"
        longitude     = "145.7781"
        state         = "Queensland"
        mapText       = "The Captain Cook Highway offers stunning coastal views between Cairns and Port Douglas. Our chauffeurs ensure safe, comfortable travel along this scenic route."
    }
}

Write-Host "Generating location pages..." -ForegroundColor Cyan

foreach ($city in $locations.Keys) {
    $data = $locations[$city]
    $cityName = (Get-Culture).TextInfo.ToTitleCase($city.Replace("-", " "))
    
    Write-Host "Creating $cityName page..." -ForegroundColor Yellow
    
    # Note: This script just shows the structure
    # The actual file creation will be done via write_to_file tool
    Write-Host "  - Title: $($data.title)" -ForegroundColor Green
    Write-Host "  - Postcodes: $($data.postcodes.Count)" -ForegroundColor Green
}

Write-Host "`nAll pages ready to generate!" -ForegroundColor Cyan
