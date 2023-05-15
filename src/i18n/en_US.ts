const modules = {
    appstore: {
        save: 'Save',
        reset: 'Reset',
        noMapkit:
            'This module does not work with the map type "Mapkit" due to limitations of Mapkit!',
        dev: 'This module is currently still under development. Activating it can lead to incomplete and faulty functions!',
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You made changes in the AppStore that have not yet been saved. Reset them or save them to close the AppStore.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
    },
    settings: {
        name: 'Settings',
        save: 'Save',
        discard: 'Discard changes',
        reset: 'Reset',
        export: 'Export',
        import: 'Import',
        donate: 'donate voluntarily',
        appendableList: {
            unique: {
                title: 'double value',
                text: 'There must be no duplicate values in the **{title}** column. The value **{value}** already exists!',
                confirm: 'OK',
            },
        },
        resetWarning: {
            title: 'Reset the settings',
            text: 'Do you really want to reset settings to their default values? This cannot be undone!',
            close: 'Cancel',
            total: 'All settings',
            module: 'Only from this module',
        },
        resetWarningSetting: {
            title: 'Reset settings',
            text: 'Do you really want to reset this one setting <b>{setting}</b> of the module <b>{module}</b> to its default value?',
            close: 'Cancel',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You have made changes in the settings that are not yet saved. Reset them, discard them or save them to close the settings.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
        locationSelect: {
            location: 'Select position',
            zoom: 'Select position and zoom',
            sync: 'use current position',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    buildingCategories: {
        'Fire Department': {
            buildings: [0, 4, 11, 13, 17, 22],
            color: '#ff2d2d',
        },
        'Rescue Stations': {
            buildings: [3, 6, 12, 16, 19],
            color: '#ffa500',
        },
        'Police Stations': {
            buildings: [5, 7, 8, 15, 18],
            color: '#00ac00',
        },
        'Lifeguard Stations': {
            buildings: [23, 25, 26],
            color: '#00ac00',
        },
        'Other': {
            buildings: [1, 2, 9, 14, 20, 21, 24],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Firefighters': {
            vehicles: {
                'Fire trucks': [0, 1, 13, 18],
                'Water Tanker': [7, 33, 77, 78],
                'Special vehicles': [2, 3, 4, 6, 8, 9, 12, 62, 63, 64, 65],
                'Wildland vehicles': [30, 31, 32, 34, 38, 39, 40, 41, 74],
                'Airport Vehicles': [17],
                'Boats': [21, 22, 24],
                'Fire Aviation': [35, 36, 37, 75, 76],
            },
            color: '#ff2d2d',
        },
        'Rescue Vehicles': {
            vehicles: {
                'Ambulances': [5, 27, 48, 49, 50, 57, 58, 61],
                'HEMS': [11],
                'First Responder': [15],
                'Rescue Boat': [25],
                'Other EMS Vehicle': [20, 28, 29, 59, 60],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Patrol Car': [10, 86, 87, 88],
                'SWAT': [16, 26, 90],
                'Police Motorcycle': [23],
                'Police helicopter': [14],
                'K-9 Unit': [19, 81, 82],
                'Riot': [83,84,85],
                'FBI': [42, 43, 44, 45, 46],
                'DEA': [51, 52],
                'ATF': [53, 54],
                'Boat': [55],
                'Game Warden': [56],
                'Police Supervisor / Sheriff': [47, 89],
            },
            color: '#00ac00',
        },
        'Lifeguard Vehicles': {
            vehicles: {
                'Cars': [66, 67, 68],
                'Boats': [69, 70, 73],
                'Helicopter and Planes': [71, 72],
            },
            color: '#58b658',
        },
    },
    small_buildings: {
        0: 13,
        3: 16,
        5: 15,
    },
    amount: 'Quantity',
    search: 'Search',
    mapSearch: 'Location search',
    alliance: 'Alliance',
    premiumNotice:
        'This feature extends a premium feature of the game and is therefore only available for players with a Missionchief game premium account!',
    credits: 'Credits',
    coins: 'Coins',
    close: 'Close',
    fullscreen: {
        expand: 'Activate full screen mode',
        compress: 'Disable full screen mode',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Buildings',
    station: 'Stations | Station | Stations',
    distance: 'Distance | Distances',
    vehicleType: 'Vehicle type',
    noOptions: 'Sorry, no matching options.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        'Park',
        'Lake',
        'Hospital',
        'Forest',
        'Bus stop',
        'Tram stop',
        'Train station (regional traffic)',
        'Train station (regional traffic and long-distance travel)',
        'Goods station',
        'Supermarket (small)',
        'Supermarket (big)',
        'Gas station',
        'School',
        'Museum',
        'Mall',
        'Car workshop',
        'Highway exit',
        'Christmas market',
        'Storehouse',
        'Discotheque',
        'Stadium',
        'Farm',
        'Office Building',
        'Swimming bath',
        'Railroad Crossing',
        'Theater',
        'Fairground',
        'River',
        'Small Airport (Runway)',
        'Large Airport (Runway)',
        'Airport Terminal',
        'Bank',
        'Warehouse',
        'Bridge',
        'Fast Food Restaurant',
        'Cargo port',
        'Recycling Centre',
        'High Rise',
        'Cruise ship dock',
        'Marina',
        'Rail Crossing',
        'Tunnel',
        'Cold Storage Warehouse',
        'Power Plant',
        'Factory',
        'Scrap yard',
        'Subway station',
        'Small chemical storage tank',
        'Large chemical storage tank',
        'Hotel',
        'Bar',
        'Landfill site',
        'Parking Garage',
        'Propane depot',
        'Large Ferry Dock',
        'Forest Cabin',
        'Campsite',
        'Bus Terminal',
        'Pier',
        'Fault line',
        'Carpentry Workshop',
        'Playground',
        'Restaurant',
        'City centre',
        'Hill',
        'Laboratory',
        'Dirt Race Track',
        'Sheltered housing facility',
        'Village',
        'Valley',
        'Coast Line',
        'Construction site',
        'Ranch',
        'Beach',
        'Oil Rig',
        'Library',
        'Launderette',
        'Pipeline',
    ],
    only_alliance_missions: [41, 61, 62, 112],
    transfer_missions: [246],
    ranks: {
        missionchief: {
            0: 'Probie',
            200: 'Firefighter',
            10_000: 'Senior Firefighter',
            100_000: 'Fire Apparatus Operator',
            1_000_000: 'Lieutenant',
            5_000_000: 'Captain',
            20_000_000: 'Staff Captain',
            50_000_000: 'Battalion Chief',
            1_000_000_000: 'Division Chief',
            2_000_000_000: 'Deputy Chief',
            5_000_000_000: 'Fire Chief',
        },
        policechief: {
            0: 'Police recruit',
            200: 'Police cadet',
            10_000: 'Police officer',
            100_000: 'Police detective',
            1_000_000: 'Police corporal',
            5_000_000: 'Police sergeant',
            20_000_000: 'Police lieutenant',
            50_000_000: 'Police captain',
            1_000_000_000: 'Police commander',
            2_000_000_000: 'Deputy chief',
            5_000_000_000: 'Chief of police',
        },
    },
};
