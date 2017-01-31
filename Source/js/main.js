

/////////////////////////*****************    Global variables  **********************/////////////////////////////////

// array with all current players
var allPlayersArray = [
    {
        id: 1,
        firstName: "Claudio ",
        lastName: "Bravo",
        birthDate: "13/04/1983",
        birthPlace: "Viluco",
        height: "180",
        weight: "70",
        nationality: "Chile",
        formerClubs: ["Barcelona", "Real Sociedad"],
        position: "Goalkeeper",
        active: true
    },
    {
        id: 2,
        firstName: "Willy ",
        lastName: "Caballero",
        birthDate: "28/01/1981",
        birthPlace: "Santa Elena",
        height: "185",
        weight: "83",
        nationality: "Argentina",
        formerClubs: ["Malaga", "Elche"],
        position: "Goalkeeper",
        active: true
    },

    {
         id: 3,
         firstName: "Agnus",
         lastName: "Gunn",
         birthDate: "22/01/1996",
         birthPlace: "Norwich",
         height: "196",
         weight: "72",
         nationality: "Engand",
         formerClubs: ["Norwich"],
         position: "Goalkeeper",
         active: true
    },

    {
        id: 4,
        firstName: "Bacary",
        lastName: "Sagna",
        birthDate: "14/02/1983",
        birthPlace: "Sens",
        height: "176",
        weight: "72",
        nationality: "France",
        formerClubs: ["Arsenal", "Auxerre"],
        position: "Defender",
        active: true
    },

    {
        id: 5,
        firstName: "Aleksandar",
        lastName: "Kolarov",
        birthDate: "10/11/1985",
        birthPlace: "Belgrade",
        height: "187",
        weight: "80",
        nationality: "Serbia",
        formerClubs: ["Lazio", "Cukaricki"],
        position: "Defender",
        active: true
    },

     {
         id: 6,
         firstName: "Vincent",
         lastName: "Kompany",
         birthDate: "10/04/1986",
         birthPlace: "Ukke",
         height: "198",
         weight: "83",
         nationality: "Belgium",
         formerClubs: ["Hamburger SV", "Anderlecht "],
         position: "Defender",
         active: true
     },

     {
         id: 7,
         firstName: "Nicolas",
         lastName: "Otamendi",
         birthDate: "12/02/1988",
         birthPlace: "Buenos Aires",
         height: "178",
         weight: "75",
         nationality: "Argentina",
         formerClubs: ["Atletico MG", "Porto", "Velez Sarsfield", "Valencia"],
         position: "Defender",
         active: true
     },

      {
          id: 8,
          firstName: "John",
          lastName: "Stones",
          birthDate: "28/05/1994",
          birthPlace: "Barnsley ",
          height: "188",
          weight: "71",
          nationality: "England",
          formerClubs: ["Everton", "Barnsley" ],
          position: "Defender",
          active: true
      },

      {
          id: 9,
          firstName: "Pablo",
          lastName: "Zabaleta",
          birthDate: "16/01/1985",
          birthPlace: "Buenos Aires",
          height: "174",
          weight: "74",
          nationality: "Argentina",
          formerClubs: ["Espanyol"],
          position: "Defender",
          active: true
      },

       {
           id: 10,
           firstName: "Gael",
           lastName: "Clichy",
           birthDate: "25/07/1985",
           birthPlace: "Toulouse",
           height: "175",
           weight: "71",
           nationality: "France",
           formerClubs: ["Arsenal", "Cannes"],
           position: "Defender",
           active: true
       },

    {
        id: 11,
        firstName: "David",
        lastName: "Silva",
        birthDate: "08/01/1986",
        birthPlace: "Arguineguin",
        height: "173",
        weight: "67",
        nationality: "Spain",
        formerClubs: ["Valencia", "Eibar", "Celta Vigo"],
        position: "Midfielder",
        active: true
    },

      {
          id: 12,
          firstName: "Fernandinho",
          lastName: "Luiz",
          birthDate: "04/05/1985",
          birthPlace: "Londrina",
          height: "176",
          weight: "67",
          nationality: "Brasil",
          formerClubs: ["Shakhtar Donetsk", "Atletico PR"],
          position: "Midfielder",
          active: true
      },

       {
           id: 13,
           firstName: "Kevin",
           lastName: "De Bruyne",
           birthDate: "28/06/1991",
           birthPlace: "Drongen",
           height: "181",
           weight: "68",
           nationality: "Belgium",
           formerClubs: ["Wolfsburg", "Werder Bremen", "Chelsea ", "Genk"],
           position: "Midfielder",
           active: true
       },

        {
           id: 14,
           firstName: "Fernando",
           lastName: "Mouta",
           birthDate: "25/07/1987",
           birthPlace: "Alto Paraiso",
           height: "185",
           weight: "75",
           nationality: "Brasil",
           formerClubs: ["Amadora", "FC Porto"],
           position: "Midfielder",
           active: true
        },

        {
            id: 15,
            firstName: "Jesus",
            lastName: "Navas",
            birthDate: "21/11/1985",
            birthPlace: "Los Palacios",
            height: "170",
            weight: "60",
            nationality: "Spain",
            formerClubs: ["Sevilla"],
            position: "Midfielder",
            active: true
        },

        {
            id: 16,
            firstName: "Yaya",
            lastName: "Toure",
            birthDate: "13/05/1983",
            birthPlace: "Sekoura Bouake",
            height: "189",
            weight: "89",
            nationality: "Cote d'Ivoire",
            formerClubs: ["Barcelona", "Monaco", "Olympiacos", "Metalurh Donetsk", "Beveren"],
            position: "Midfielder",
            active: true
        },

        {
            id: 17,
            firstName: "Alex",
            lastName: "Grcia",
            birthDate: "28/06/1997",
            birthPlace: "Ulldecona",
            height: "173",
            weight: "74",
            nationality: "Spain",
            formerClubs: ["Villarreal"],
            position: "Midfielder",
            active: true
        },

         {
             id: 18,
             firstName: "Nolito",
             lastName: "Manuel Agudo",
             birthDate: "15/10/1986",
             birthPlace: "Sanlucar de Barrameda",
             height: "175",
             weight: "76",
             nationality: "Spain",
             formerClubs: ["Celta Vigo", "Granada", "Barcelona", "Benfica"],
             position: "Forwarder",
             active: true
         },

          {
              id: 19,
              firstName: "Sergio",
              lastName: "Aguero",
              birthDate: "02/06/1988",
              birthPlace: "Quilma",
              height: "172",
              weight: "74",
              nationality: "Argentina",
              formerClubs: ["Atletico Madrid", "Independiente"],
              position: "Forwarder",
              active: true
          },

           {
               id: 20,
               firstName: "Kelechi",
               lastName: "Iheancho",
               birthDate: "03/10/1996",
               birthPlace: "Imo",
               height: "177",
               weight: "77",
               nationality: "Nigeria",
               formerClubs: [],
               position: "Forwarder",
               active: true
           },




    {
        id: 21,
        firstName: "Branislav",
        lastName: "Ivanovic",
        birthDate: "04/02/1983",
        birthPlace: "Nvanjica",
        height: "185",
        weight: "73",
        nationality: "Serbia",
        formerClubs: ["OFK Beograd", "Zemun"],
        position: "Defense",
        active: false
    },
    {
        id: 22,
        firstName: "Vladimir",
        lastName: "Stojkovic",
        birthDate: "05/08/1985",
        birthPlace: "Loznica",
        height: "193",
        weight: "71",
        nationality: "Serbia",
        formerClubs: ["Hapoel", "Red Star"],
        position: "Goalkeeper",
        active: false
    },
  ];

// array with all current About Match Info
var allMatchesAboutArray = [

    {
        id: 1,
        type: "League",
        rivalTeamName: "Manchester United",
        weAreHomeAway: 1,
        fulltimeResHomeT: 5,
        fulltimeResAwayT: 3,
        halftimeResHomeT: 2,
        halftimeResAwayT: 2,
        place: "Machester",
        arena: "Old traford",
        date: "2016/07/31",
        time: "17:00",
        attendance: "55000"
    },

     {
         id: 2,
         type: "League",
         rivalTeamName: "Liverpool",
         weAreHomeAway: 2,
         fulltimeResHomeT: 0,
         fulltimeResAwayT: 1,
         halftimeResHomeT: 0,
         halftimeResAwayT: 0,
         place: "Liverpool",
         arena: "Enfield",
         date: "2016/05/15",
         time: "15:00",
         attendance: "42000"
     },

      {
          id: 3,
          type: "Champions league",
          rivalTeamName: "Juventus",
          weAreHomeAway: 2,
          fulltimeResHomeT: 3,
          fulltimeResAwayT: 5,
          halftimeResHomeT: 2,
          halftimeResAwayT: 2,
          place: "Torino",
          arena: "Stadio Olimpico di Torino",
          date: "2016/05/01",
          time: "20:45",
          attendance: "47000"
      }


];

// array with all current Lineups
var allMatchesLineupArray = [
    ///////////////*****************  vs Manchester United *************///////////////////////
    {
        playerId: 1,
        matchId: 1,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 34,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists:[]
    },

    {
        playerId: 4,
        matchId: 1,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 12,
        secondYellow: 75,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: []
    },

    {
    playerId: 5,
    matchId: 1,
    start11: true,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 55,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 89,
    goals: [21],
    assists: []
    },

    {
    playerId: 6,
    matchId: 1,
    start11: true,
    captain: true,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 0,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 0,
    goals: [],
    assists: []
    },

    {
    playerId: 7,
    matchId: 1,
    start11: true,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 0,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 0,
    goals: [],
    assists: []
    },

    {
    playerId: 11,
    matchId: 1,
    start11: true,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 0,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 0,
    goals: [42],
    assists: []
    },

    {
    playerId: 12,
    matchId: 1,
    start11: true,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 0,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 0,
    goals: [],
    assists: [42]
    },

    {
    playerId: 13,
    matchId: 1,
    start11: true,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 33,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 46,
    goals: [],
    assists: []
    },

    {
    playerId: 14,
    matchId: 1,
    start11: true,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 78,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 0,
    goals: [],
    assists: [33]
    },

    {
    playerId: 18,
    matchId: 1,
    start11: true,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 0,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 62,
    goals: [],
    assists: [44]
    },

    {
    playerId: 19,
    matchId: 1,
    start11: true,
    captain: false,
    manOfTheMatch: true,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 0,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 0,
    goals: [33, 44],
    assists: [75]
    },

    {
    playerId: 2,
    matchId: 1,
    start11: false,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 0,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 0,
    goals: [],
    assists: []
    },

    {
    playerId: 8,
    matchId: 1,
    start11: false,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 0,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 0,
    goals: [],
    assists: []
    },

    {
    playerId: 9,
    matchId: 1,
    start11: false,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 0,
    secondYellow: 0,
    red: 0,
    inGame: 0,
    outGame: 0,
    goals: [],
    assists: []
    },

    {
    playerId: 15,
    matchId: 1,
    start11: false,
    captain: false,
    manOfTheMatch: false,
    playerGoals: 0,
    playersAssist: 0,
    yellow: 0,
    secondYellow: 0,
    red: 0,
    inGame: 79,
    outGame: 0,
    goals: [],
    assists: [83]
    },

    {
        playerId: 16,
        matchId: 1,
        start11: false,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 72,
        secondYellow: 0,
        red: 0,
        inGame: 46,
        outGame: 0,
        goals: [],
        assists: []
    },

    {
        playerId: 17,
        matchId: 1,
        start11: false,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 90,
        inGame: 75,
        outGame: 0,
        goals: [85],
        assists: []
    },

    {
        playerId: 20,
        matchId: 1,
        start11: false,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: []
    },

 //////////////////*************** vs Liverpool ********************//////////////////////
        {
            playerId: 1,
            matchId: 2,
            start11: true,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 34,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 4,
            matchId: 2,
            start11: true,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 12,
            secondYellow: 75,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 5,
            matchId: 2,
            start11: true,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 55,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 89,
            goals: [77],
            assists: []
        },

        {
            playerId: 6,
            matchId: 2,
            start11: true,
            captain: true,
            manOfTheMatch: true,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: [77]
        },

        {
            playerId: 7,
            matchId: 2,
            start11: true,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 11,
            matchId: 2,
            start11: true,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 12,
            matchId: 2,
            start11: true,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 13,
            matchId: 2,
            start11: true,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 33,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 46,
            goals: [],
            assists: []
        },

        {
            playerId: 14,
            matchId: 2,
            start11: true,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 78,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 18,
            matchId: 2,
            start11: true,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 62,
            goals: [],
            assists: []
        },

        {
            playerId: 19,
            matchId: 2,
            start11: true,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 2,
            matchId: 2,
            start11: false,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 8,
            matchId: 2,
            start11: false,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 9,
            matchId: 2,
            start11: false,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 15,
            matchId: 2,
            start11: false,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 79,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 16,
            matchId: 2,
            start11: false,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 72,
            secondYellow: 0,
            red: 0,
            inGame: 46,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 17,
            matchId: 2,
            start11: false,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 90,
            inGame: 75,
            outGame: 0,
            goals: [],
            assists: []
        },

        {
            playerId: 20,
            matchId: 2,
            start11: false,
            captain: false,
            manOfTheMatch: false,
            playerGoals: 0,
            playersAssist: 0,
            yellow: 0,
            secondYellow: 0,
            red: 0,
            inGame: 0,
            outGame: 0,
            goals: [],
            assists: []
        },

          ///////////////*****************  vs Manchester United *************///////////////////////
    {
        playerId: 1,
        matchId: 1,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 34,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: []
    },

    {
        playerId: 4,
        matchId: 3,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 12,
        secondYellow: 75,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: []
    },

    {
        playerId: 5,
        matchId: 3,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 55,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 89,
        goals: [21],
        assists: []
    },

    {
        playerId: 6,
        matchId: 3,
        start11: true,
        captain: true,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: []
    },

    {
        playerId: 7,
        matchId: 3,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: []
    },

    {
        playerId: 11,
        matchId: 3,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [42],
        assists: []
    },

    {
        playerId: 12,
        matchId: 3,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: [42]
    },

    {
        playerId: 13,
        matchId: 3,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 33,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 46,
        goals: [],
        assists: []
    },

    {
        playerId: 14,
        matchId: 3,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 78,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: [33]
    },

    {
        playerId: 18,
        matchId: 3,
        start11: true,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 62,
        goals: [],
        assists: [44]
    },

    {
        playerId: 19,
        matchId: 3,
        start11: true,
        captain: false,
        manOfTheMatch: true,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [33, 44],
        assists: [75]
    },

    {
        playerId: 2,
        matchId: 3,
        start11: false,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: []
    },

    {
        playerId: 8,
        matchId: 3,
        start11: false,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: []
    },

    {
        playerId: 9,
        matchId: 3,
        start11: false,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: []
    },

    {
        playerId: 15,
        matchId: 3,
        start11: false,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 79,
        outGame: 0,
        goals: [],
        assists: [83]
    },

    {
        playerId: 16,
        matchId: 3,
        start11: false,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 72,
        secondYellow: 0,
        red: 0,
        inGame: 46,
        outGame: 0,
        goals: [],
        assists: []
    },

    {
        playerId: 17,
        matchId: 3,
        start11: false,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 90,
        inGame: 75,
        outGame: 0,
        goals: [85],
        assists: []
    },

    {
        playerId: 20,
        matchId: 3,
        start11: false,
        captain: false,
        manOfTheMatch: false,
        playerGoals: 0,
        playersAssist: 0,
        yellow: 0,
        secondYellow: 0,
        red: 0,
        inGame: 0,
        outGame: 0,
        goals: [],
        assists: []
    },
];

var allScoresByMin = [
    {
        myTeam: true,
        matchId: 1,
        playerId: 5,
        assistById: 12,
        minut: 21
    },

    {
        myTeam: true,
        matchId: 1,
        playerId: 11,
        assistById: 14,
        minut: 34
    },
   {
       myTeam: true,
       matchId: 1,
       playerId: 19,
       assistById: 18,
       minut: 43
   },

    {
        myTeam: true,
        matchId: 1,
        playerId: 19,
        assistById: 15,
        minut: 77
    },
    {
        myTeam: true,
        matchId: 1,
        playerId: 17,
        assistById: 19,
        minut: 89
    },

    {
        myTeam: false,
        matchId: 1,
        playerId: "Zlatan ibrahimovic",
        assistById: 0,
        minut: 33
    },

    {
        myTeam: false,
        matchId: 1,
        playerId: "Zlatan ibrahimovic",
        assistById: 0,
        minut: 52
    },

    {
        myTeam: false,
        matchId: 1,
        playerId: "Wayne Mark Rooney",
        assistById: 0,
        minut: 70
    },

     {
         myTeam: true,
         matchId: 3,
         playerId: 5,
         assistById: 6,
         minut: 77
     },
      {
          myTeam: true,
          matchId: 3,
          playerId: 5,
          assistById: 12,
          minut: 21
      },

    {
        myTeam: true,
        matchId: 3,
        playerId: 11,
        assistById: 14,
        minut: 34
    },
   {
       myTeam: true,
       matchId: 3,
       playerId: 19,
       assistById: 18,
       minut: 43
   },

    {
        myTeam: true,
        matchId: 3,
        playerId: 19,
        assistById: 15,
        minut: 77
    },
    {
        myTeam: true,
        matchId: 3,
        playerId: 17,
        assistById: 19,
        minut: 89
    },

    {
        myTeam: false,
        matchId: 3,
        playerId: "Higuain",
        assistById: 0,
        minut: 21
    },

    {
        myTeam: false,
        matchId: 3,
        playerId: "Mario Mandzukic",
        assistById: 0,
        minut: 61
    },

    {
        myTeam: false,
        matchId: 3,
        playerId: "Andrea Barzagli",
        assistById: 0,
        minut: 70
    },
];



var currentMatchAboutArray = [];
var currentMatchLineupArray = [];

var lastMatchID = 3;
var currentPlayerId = 0;
var lastPlayerID = 23;
var myteam = "Man City";

// load javascript files depending on the current page
function start() {
    var location = window.location.pathname;
    var pageName = location.substring(location.lastIndexOf('/') + 1); //Get page name without patch "/"

    if (pageName == "index.html") {


    }

    else if (pageName == "players.html") {

        loadAllPlayers();
     

    }

    else if (pageName == "matches.html") {
        
        getTableMatches();
        $("#tabelMatchesUser").tablesorter();

    }

    else if (pageName == "addlineup.html") {
       

        loadLineupForm();
        addEventAddlineup();
        
    }

    else if (pageName == "addAboutMatch.html") {
        

        document.getElementById("btnAboutMatchSave").addEventListener("click",
            goToNextStep, false
        );

        updateMatchID();
        updateAllArrays();

        //disable all keyboard keys input
        $(".timeDateInput").keydown(false);

        $('#inpMatchDate').datepicker({ dateformat: 'yy-mm-dd'});
        $('#inpMatchTime').timepicker({ timeFormat: 'hh:mm' });
    }

    else if (pageName == "matchReport.html") {

       

       fillMatchInfo();
    }


    else if (pageName == "matchReportList.html") {

        document.getElementById("btnAddMatchReport").addEventListener("click",
            openFormAddMatch, false
        );

        document.getElementById("btnRemoveMatchReport").addEventListener("click",
            removeMatchReport, false
        );

        getTableMatches();

        //  $("#tabelMatchesAdmin").tablesorter({ sortInitialOrder: "desc" });
       
            $("#tabelMatchesAdmin").tablesorter();

    }

    else if (pageName == "playersList.html") {

        updateAllArrays();
        loadPlayerList();

        //load functions to Add new player
        document.getElementById("btnAddPlayer").addEventListener("click",
            goToAddPlayerPage, false
        );

        //load functions to remove player
        document.getElementById("btnRemovePlayer").addEventListener("click",
            removePlayer, false
        );

        $("#tabelPlayersAdmin").tablesorter();

        $(".bodyTabelPlayersAdmin tr").each(function (index) {
            index += 1;
            if (index % 2 == 0) {
                $(this).addClass("color");
            }
        });

    }

    else if (pageName == "addPlayer.html") {

        //load functions to Add new former club
        document.getElementById("btnAddFormerClub").addEventListener("click",
            addNewFormerClub, false
        );

        //disable all keyboard keys input
        $(".timeDateInput").keydown(false);

        $('#inpPlayerBirthDate').datepicker({ dateformat: 'yy-mm-dd' });

        //on click at Save button
        document.getElementById("btnSavePlayer").addEventListener("click",
            saveNewPlayer, false
        );

        document.getElementById("btnRemoveFormerClub").addEventListener("click",
            removeClub, false );

    }

    else if (pageName == "statistics.html") {
       
        loadPlayerStats();
        $("#tabelStatistics").tablesorter();
    }
}

/////////////////////////*****************    Page addAboutMatch.html  **********************/////////////////////////////////


// add info about match (step 1) to session
function addAboutMatchToSession() {
    var rivalTeamName = document.getElementById("inpRivalTeam").value;
    var weAreHomeAway = document.getElementById("radioBtnHomeAway").value;
    var fulltimeResHomeT = document.getElementById("inpFullTimeHome").value;
    var fulltimeResAwayT = document.getElementById("inpFullTimeAway").value;
    var halftimeResHomeT = document.getElementById("inpHalfTimeHome").value;
    var halftimeResAwayT = document.getElementById("inpHalfTimeAway").value;
    var type = document.getElementById("inpMatchType").value;
    var place = document.getElementById("inpMatchPlace").value;
    var date = document.getElementById("inpMatchDate").value;
    var time = document.getElementById("inpMatchTime").value;
    var arena = document.getElementById("inpArena").value;
    var attendance = document.getElementById("inpAttendance").value;
    currentMatchId = Number(lastMatchID) + 1;
    
    
    var totalMatchesNum = allMatchesAboutArray.length;
    //create object and add it to the array "allMatchesAboutMatch"
    currentMatchAboutArray.push({
        id: currentMatchId,
        rivalTeamName: rivalTeamName,
        weAreHomeAway: weAreHomeAway,
        fulltimeResHomeT: fulltimeResHomeT,
        fulltimeResAwayT: fulltimeResAwayT,
        halftimeResHomeT: halftimeResHomeT,
        halftimeResAwayT: halftimeResAwayT,
        type: type,
        date: date,
        time: time,
        place: place,
        arena: arena,
        attendance: attendance
    });

    //alert("Step 1. Current: " + currentMatchId + " Last:" + lastMatchID);
    if (typeof (Storage) !== "undefined") { // check if session Storage is supported by the browser

         sessionStorage.setItem("sessionCurrentMatchAbout", JSON.stringify(currentMatchAboutArray)); //add arrayen to session
        sessionStorage.setItem("sessionCurrentMatchID", JSON.stringify(currentMatchId)); //add ID to session
    }

    else {
        document.getElementById('result').innerHTML = "Sorry, your browser does not support web storage...";
    }

}


//click on Save at step 1 addAboutMatch
function goToNextStep() {

    

    var rivalTeamName = document.getElementById("inpRivalTeam").value.trim();
    var fulltimeResHomeT = document.getElementById("inpFullTimeHome").value.trim();
    var fulltimeResAwayT = document.getElementById("inpFullTimeAway").value.trim();
    var matchDate = document.getElementById("inpMatchDate").value;
    var matchTime = document.getElementById("inpMatchTime").value;

    
    // check if required textboxes are not emtpty
    var $myForm = $('#addAboutMatch')
    //if the form is not valid
    if (!$myForm[0].checkValidity()) {
      
        //fake summit button
        $('<input type="submit">').hide().appendTo($myForm).click().remove();

        //submit the form
        $myForm.find(':submit').click()
        return false;
    }


   addAboutMatchToSession();
   location.href = "addlineup.html";
   
}


/////////////////////////*****************    Page addlineup.html  **********************/////////////////////////////////

//load funtions
function addEventAddlineup() {

    var dropdown = document.getElementsByClassName("dropdownPlayersName");
   
    var scores = document.getElementsByClassName("dropdownAddWhoScoredHome");
    var assists = document.getElementsByClassName("dropdownAddWhoAssistHome");
    
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click",
           function clickDropdownMtcRp(e) {
               changeDropdownMtcRpColor(e);
           });
    }

    for (i = 0; i < scores.length; i++) {
        scores[i].addEventListener("click",
           function clickDropdownMtcRp(e) {
               changeDropdownMtcRpColor(e);
           });

        assists[i].addEventListener("click",
           function clickDropdownMtcRp(e) {
               changeDropdownMtcRpColor(e);
           });
    }

    document.getElementById("dropdownManOfTheMatch").addEventListener("click",
     function clickDropdownMtcRp(e) {
         changeDropdownMtcRpColor(e);
     });

    document.getElementById("btnAddLineupSave").addEventListener("click",
        goToMatchReport, false
    );
}


//on click on dropdown menu change color
function changeDropdownMtcRpColor(e) {

    var curMenu = e.target;
    curMenu.style.backgroundColor = "white";
}

// load form in step 2
function loadLineupForm() {

    var sectionPlayersStart11 = document.getElementById('addPlayersFormStar11');
    var sectionPlayersReserves = document.getElementById('addPlayersFormReserves');

    updateMatchID();
    updateAllArrays();
    

    for (i = 0; i < 18; i++) {
        //create div for each player inn start 11
        var newPlayerDiv = document.createElement("div");
        newPlayerDiv.setAttribute('class', "addPlayersRowDiv");


        //create dropdown menu
        var dropdown = document.createElement("select");
        
        if (i < 11) {
            dropdown.setAttribute('class', "dropdownPlayersName");
        }
        else {
            dropdown.setAttribute('class', "dropdownPlayersName inpPlayersNameReserves");
        }

        var dropdownTitle = document.createElement("option");
        dropdownTitle.setAttribute('class', "inpPlayersName");
        dropdownTitle.setAttribute('value', -1)
        dropdownTitle.innerHTML = "Choose one player";

        dropdown.appendChild(dropdownTitle);

        //create textbox yellow card
        var inputYellow = document.createElement("input");
        inputYellow.setAttribute('class', "inpYellow");
        inputYellow.setAttribute('type', "number");
        inputYellow.setAttribute('min', "1");
        inputYellow.setAttribute('max', "130");
        inputYellow.setAttribute('name', "yellowCard");

        var divYellow = document.createElement("div");
        divYellow.setAttribute("class", "inpDivSmall")

        divYellow.appendChild(inputYellow);

        //create textbox second yellow card
        var inputSecondYellow = document.createElement("input");
        inputSecondYellow.setAttribute('class', "inpSecondYellow");
        inputSecondYellow.setAttribute('type', "number");
        inputSecondYellow.setAttribute('min', "1");
        inputSecondYellow.setAttribute('max', "130");
        inputSecondYellow.setAttribute('name', "secondYellowCard");

        var divSecondYellow = document.createElement("div");
        divSecondYellow.setAttribute("class", "inpDivSmall")

        divSecondYellow.appendChild(inputSecondYellow);

        //create textbox red card
        var inputRed = document.createElement("input");
        inputRed.setAttribute('class', "inpRed");
        inputRed.setAttribute('type', "number");
        inputRed.setAttribute('min', "1");
        inputRed.setAttribute('max', "130");
        inputRed.setAttribute('name', "redCard");

        var divRed = document.createElement("div");
        divRed.setAttribute("class", "inpDivSmall")

        divRed.appendChild(inputRed);

        //create textbox in
        var inputIn = document.createElement("input");
        inputIn.setAttribute('class', "inpIn");
        inputIn.setAttribute('type', "number");
        inputIn.setAttribute('min', "1");
        inputIn.setAttribute('max', "130");
        inputIn.setAttribute('name', "in");

        var divIn = document.createElement("div");
        divIn.setAttribute("class", "inpDivSmall")

        divIn.appendChild(inputIn);

        //create textbox out
        var inputOut = document.createElement("input");
        inputOut.setAttribute('class', "inpOut");
        inputOut.setAttribute('type', "number");
        inputOut.setAttribute('min', "1");
        inputOut.setAttribute('max', "130");
        inputOut.setAttribute('name', "out");

        var divOut = document.createElement("div");
        divOut.setAttribute("class", "inpDivSmall")

        divOut.appendChild(inputOut);

        //create radio button
        var inputCaptain = document.createElement("input");
        inputCaptain.setAttribute('class', "inpCaptain");
        inputCaptain.setAttribute('type', "radio");
        inputCaptain.setAttribute('name', "captain");

        var divRadio = document.createElement("div");
        divRadio.setAttribute("class", "inpDivSmall")

        divRadio.appendChild(inputCaptain);

        //fill dropdown menu with player names 
        for (x = 0; x < allPlayersArray.length; x++) {
            // just for active players
            if (allPlayersArray[x].active == true) {
                //create options for dropdown menu
                var option = document.createElement("option");
                option.setAttribute('value', allPlayersArray[x].id);
                option.innerHTML = allPlayersArray[x].firstName + " " + allPlayersArray[x].lastName;
                dropdown.appendChild(option);
            }
          
        }



        var divName = document.createElement("div");
        divName.setAttribute("class", "inpDivName")

        divName.appendChild(dropdown);

        newPlayerDiv.appendChild(divName);
        newPlayerDiv.appendChild(divRadio);
        newPlayerDiv.appendChild(divYellow);
        newPlayerDiv.appendChild(divSecondYellow);
        newPlayerDiv.appendChild(divRed);
        newPlayerDiv.appendChild(divIn);
        newPlayerDiv.appendChild(divOut);

        //Adding newPlayer to our section "All players" 
        if (i < 11) {
            // start11
            sectionPlayersStart11.appendChild(newPlayerDiv); 
        }
        else {
            // substitutes
            sectionPlayersReserves.appendChild(newPlayerDiv); 
        }
    }

    whoScored();
    fillBestPlayerDropdown();
}

// fill dropdown menu Man Of The Match with player names 
function fillBestPlayerDropdown()
{
    var dropdown = document.getElementById("dropdownManOfTheMatch");

    var dropdownTitle = document.createElement("option");
    dropdownTitle.setAttribute('value', 0)
    dropdownTitle.innerHTML = "Choose one player";
    dropdown.appendChild(dropdownTitle);

    var dropdownOptionNobody = document.createElement("option");
    dropdownOptionNobody.setAttribute('value', 0)
    dropdownOptionNobody.innerHTML = "Nobody";
    dropdown.appendChild(dropdownOptionNobody);

    for (x = 0; x < allPlayersArray.length; x++) {
        if (allPlayersArray[x].active == true) {
            //create options for dropdown menu
            var option = document.createElement("option");
            option.setAttribute('value', allPlayersArray[x].id);
            option.innerHTML = allPlayersArray[x].firstName + " " + allPlayersArray[x].lastName;
            dropdown.appendChild(option);
        }
    }
}

// create dropdown with goals
function whoScored() {

    var CurrentMatchesAbout = sessionStorage.getItem("sessionCurrentMatchAbout");
    var parsed = JSON.parse(CurrentMatchesAbout);


    if (sessionStorage.getItem("sessionCurrentMatchAbout") != null) { //if session i not empty
        var myTeamGoals = 0;
        var rivalTeamGoals = 0;

        // if we are Home team
        if (parsed[0].weAreHomeAway == 1) {
            myTeamGoals = Number(parsed[0].fulltimeResHomeT);
            rivalTeamGoals = Number(parsed[0].fulltimeResAwayT);
        }

            // if we are Awway team
        else {
            myTeamGoals = Number(parsed[0].fulltimeResAwayT);
            rivalTeamGoals = Number(parsed[0].fulltimeResHomeT);
        }

        var sectionAddLineup = document.getElementById('addWhoScored');

        var headline = document.createElement("legend");
        headline.setAttribute('id', 'addWhoScoresLegend');
        headline.innerHTML = "Scores"

        //create div whoScoredHome
        var divHomeScores = document.createElement("div");
        divHomeScores.setAttribute('id', 'addWhoScoresHome');

        //create div whoScoredAway
        var divAwayScores = document.createElement("div");
        divAwayScores.setAttribute('id', 'addWhoScoresAway');

        // if my team scored min 1 goal on the match
        if (myTeamGoals != 0) {
            //create H2 who scored for Home team
            var headlineWhoScoredMyTeam = document.createElement("h2");
            headlineWhoScoredMyTeam.innerHTML = "Who scored for " + myteam + "?";
            divHomeScores.appendChild(headlineWhoScoredMyTeam);
        }

        if (rivalTeamGoals != 0) {
            //create H2 who scored for Home team
            var headlineWhoScoredRival = document.createElement("h2");
            headlineWhoScoredRival.innerHTML = "Who scored for " + parsed[0].rivalTeamName + "?";
            divAwayScores.appendChild(headlineWhoScoredRival);
        }
        //create selection whoScored
        var selWhoScored = document.createElement("selection");
        selWhoScored.setAttribute('id', 'addWhoScored');



        //create row for each GOAL and ASSIST for MY TEAM
        for (i = 0; i < myTeamGoals; i++) {

           
            var newRow = document.createElement("div");
            newRow.setAttribute("class", "formRow")

            //create p for Goals
            var pScored = document.createElement("p");
            pScored.innerHTML = "Scored by:";

            //create p for Assists
            var pAssist = document.createElement("p");
            pAssist.innerHTML = "Assist by:";

            //create p for Minut
            var pMin = document.createElement("p");
            pMin.innerHTML = "Minute:";

            //create dropdown menu for Scores
            var dropdownScored = document.createElement("select");
            dropdownScored.setAttribute('class', "dropdownAddWhoScoredHome");

            var dropdownTitle = document.createElement("option");
            dropdownTitle.setAttribute('class', "inpWhoScoredPlayerName");
            dropdownTitle.setAttribute('value', 0)
            dropdownTitle.innerHTML = "Choose one player";
            dropdownScored.appendChild(dropdownTitle);

            //create dropdown menu for Assists
            var dropdownAssist = document.createElement("select");
            dropdownAssist.setAttribute('class', "dropdownAddWhoAssistHome");

            var dropdownTitleA = document.createElement("option");
            dropdownTitleA.setAttribute('class', "inpWhoAssitPlayerName");
            dropdownTitleA.setAttribute('value', -1)
            dropdownTitleA.innerHTML = "Nobody";
            dropdownAssist.appendChild(dropdownTitleA);

            //create textbox for Minutes
            var textboxMin = document.createElement("input");
            textboxMin.setAttribute('type', "number");
            textboxMin.setAttribute('min', "1");
            textboxMin.setAttribute('max', "130");
            textboxMin.setAttribute('class', "inptMyTeamGoalMin");

            //create dropdown for Score 
            for (x = 0; x < allPlayersArray.length; x++) {
                if (allPlayersArray[x].active == true) {
                    var optionG = document.createElement("option");
                    optionG.setAttribute('value', allPlayersArray[x].id);
                    optionG.innerHTML = allPlayersArray[x].firstName + " " + allPlayersArray[x].lastName;
                    dropdownScored.appendChild(optionG);
                }
            }

            //create dropdown for Assists 
            for (x = 0; x < allPlayersArray.length; x++) {
                if (allPlayersArray[x].active == true) {

                 

                    //create options for dropdown menu
                    var optionA = document.createElement("option");
                    optionA.setAttribute('value', allPlayersArray[x].id);
                    optionA.innerHTML = allPlayersArray[x].firstName + " " + allPlayersArray[x].lastName;
                    dropdownAssist.appendChild(optionA);
                }
            }



            newRow.appendChild(pScored);
            newRow.appendChild(dropdownScored);
            newRow.appendChild(pAssist);
            newRow.appendChild(dropdownAssist);
            newRow.appendChild(pMin);
            newRow.appendChild(textboxMin);

            divHomeScores.appendChild(newRow);
        }

        //create row for each goal for RIVAL TEAM
        for (i = 0; i < rivalTeamGoals; i++) {

            var newRowRival = document.createElement("div");
            newRowRival.setAttribute("class", "formRow")

            //create textbox menu
            var textboxScoredR = document.createElement("input");
            textboxScoredR.setAttribute('class', 'inptRivalGoalName');
            textboxScoredR.setAttribute('placeholder', 'players name');
            textboxScoredR.setAttribute('type', "text");

            //create p for Goals
            var pScoredR = document.createElement("p");
            pScoredR.innerHTML = "Scored by:";

            //create p for Minut
            var pMinR = document.createElement("p");
            pMinR.innerHTML = "Minute:";

            //create textbox for Minutes
            var textboxMinR = document.createElement("input");
            textboxMinR.setAttribute('type', "number");
            textboxMinR.setAttribute('min', "1");
            textboxMinR.setAttribute('max', "130");
            textboxMinR.setAttribute('class', "inptRivalGoalMin");


            newRowRival.appendChild(pScoredR);
            newRowRival.appendChild(textboxScoredR);
            newRowRival.appendChild(pMinR);
            newRowRival.appendChild(textboxMinR);

            divAwayScores.appendChild(newRowRival);
        }

        selWhoScored.appendChild(divHomeScores);
        selWhoScored.appendChild(divAwayScores);

        sectionAddLineup.appendChild(headline);
        sectionAddLineup.appendChild(selWhoScored);

     
    }
}


// add all info from page in sessions 
function addLineupToSession() {

    updateMatchID();
    updateAllArrays();
    
    var playersOnMatch = document.getElementsByClassName("dropdownPlayersName");

    var playerNames = document.getElementsByClassName("dropdownPlayersName"); // players who played the match
    var allScores = document.getElementsByClassName("dropdownAddWhoScoredHome"); // players who did goal
    var allAssists = document.getElementsByClassName("dropdownAddWhoAssistHome"); // players who did assist
    var allYellow = document.getElementsByClassName("inpYellow");
    var allSecondYellow = document.getElementsByClassName("inpSecondYellow");
    var allRed = document.getElementsByClassName("inpRed");
    var allIn = document.getElementsByClassName("inpIn");
    var allOut = document.getElementsByClassName("inpOut");
    var myTeamGoalsMinutes = document.getElementsByClassName("inptMyTeamGoalMin");
    var myTeamGoalsNames = document.getElementsByClassName("dropdownAddWhoScoredHome");
    var myTeamAssistsNames = document.getElementsByClassName("dropdownAddWhoAssistHome");
    var rivalGoalsNames = document.getElementsByClassName("inptRivalGoalName");
    var rivalGoalsMin = document.getElementsByClassName("inptRivalGoalMin");
    var captain = document.getElementsByClassName("inpCaptain");
    var manOfTheMatch = document.getElementById("dropdownManOfTheMatch");
  
    //create object for each player on the match and add it to the array "currentMatchLineup"
    for (i = 0; i < playerNames.length; i++) {
        if (playerNames[i].value > 0) {
            var starter = true;
            var bestPlayer = false;

            if (i > 11) {
                starter = false;
            }

            if (manOfTheMatch.value == playerNames[i].value) {
                bestPlayer = true;
            }

            currentMatchLineupArray.push({
                playerId: playerNames[i].value,
                matchId: currentMatchId,
                start11: starter,
                captain: false,
                manOfTheMatch: bestPlayer,
                playerGoals: 0,
                playersAssist: 0,
                yellow: allYellow[i].value,
                secondYellow: allSecondYellow[i].value,
                red: allRed[i].value,
                inGame: allIn[i].value,
                outGame: allOut[i].value,
                goals: [],
                assists: []
            });

           
        }
    }



    // adding total goals and assists
    for (i = 0; i < currentMatchLineupArray.length; i++) {

        for (x = 0; x < allScores.length; x++) {

            // adding number of GOALS 
            if (allScores[x].value == currentMatchLineupArray[i].playerId) {
                // currentMatchLineupArray[i].playerGoals += 1;
                currentMatchLineupArray[i].goals.push(myTeamGoalsMinutes[x].value);
            }

            // adding number of ASSISTS 
            if (allAssists[x].value == currentMatchLineupArray[i].playerId) {
                // currentMatchLineupArray[i].playersAssist += 1;
                currentMatchLineupArray[i].assists.push(myTeamGoalsMinutes[x].value);
            }
        }

        // adding captain
        for (x = 1; x < captain.length; x++) {
            if (captain[x].checked && x == i) {
                currentMatchLineupArray[i].captain = true;
            }
        }

    }

    // add scores by minutes in array for Home team
    for (i = 0; i < myTeamGoalsNames.length; i++) {
       
        allScoresByMin.push({
            myTeam: true,
            matchId: currentMatchId,
            playerId: myTeamGoalsNames[i].value,
            assistById: myTeamAssistsNames[i].value,
            minut: myTeamGoalsMinutes[i].value
        });
    }

    // add scores by minutes in array for Rival team
    for (i = 0; i < rivalGoalsNames.length; i++) {
        allScoresByMin.push({
            myTeam: false,
            matchId: currentMatchId,
            playerId: rivalGoalsNames[i].value,
            minut: rivalGoalsMin[i].value
        });
    }

    lastMatchID = Number(currentMatchId); //update last match ID

    // move current lineup to all lineup array
    for (i = 0; i < currentMatchLineupArray.length; i++) {
        allMatchesLineupArray.push({
            playerId: currentMatchLineupArray[i].playerId,
            matchId: currentMatchLineupArray[i].matchId,
            start11: currentMatchLineupArray[i].start11,
            captain: currentMatchLineupArray[i].captain,
            manOfTheMatch: currentMatchLineupArray[i].manOfTheMatch,
            playerGoals: currentMatchLineupArray[i].playerGoals,
            playersAssist: currentMatchLineupArray[i].playersAssist,
            yellow: currentMatchLineupArray[i].yellow,
            secondYellow: currentMatchLineupArray[i].secondYellow,
            red: currentMatchLineupArray[i].red,
            inGame: currentMatchLineupArray[i].inGame,
            outGame: currentMatchLineupArray[i].outGame,
            goals: currentMatchLineupArray[i].goals,
            assists: currentMatchLineupArray[i].assists
        });
    }
    
    // move current match info to all match info array
    var curMatchInfo = sessionStorage.getItem("sessionCurrentMatchAbout");
    var parsed = JSON.parse(curMatchInfo);

    for (i = 0; i < parsed.length; i++) {
        allMatchesAboutArray.push({
            id: parsed[i].id,
            rivalTeamName: parsed[i].rivalTeamName,
            weAreHomeAway: parsed[i].weAreHomeAway,
            fulltimeResHomeT: parsed[i].fulltimeResHomeT,
            fulltimeResAwayT: parsed[i].fulltimeResAwayT,
            halftimeResHomeT: parsed[i].halftimeResHomeT,
            halftimeResAwayT: parsed[i].halftimeResAwayT,
            place: parsed[i].place,
            date: parsed[i].date,
            time: parsed[i].time,
            arena: parsed[i].arena,
            type: parsed[i].type,
            attendance: parsed[i].attendance
        });
    }

    if (typeof (Storage) !== "undefined") { 

        sessionStorage.setItem("sessionAllMatchAbout", JSON.stringify(allMatchesAboutArray));
        sessionStorage.setItem("sessionAllLineup", JSON.stringify(allMatchesLineupArray)); 
        sessionStorage.setItem("sessionAllScoreByMin", JSON.stringify(allScoresByMin));
        sessionStorage.setItem("sessionLastMatchID", JSON.stringify(lastMatchID));
    }

    else {
        document.getElementById('result').innerHTML = "Sorry, your browser does not support web storage...";
    }
}


//change color to white for all textboxes
function textboxToWhite() {
    var dropdown = document.getElementsByClassName("dropdownPlayersName");
    var scores = document.getElementsByClassName("dropdownAddWhoScoredHome");
    var assists = document.getElementsByClassName("dropdownAddWhoAssistHome");
    var manOfTheMatch = document.getElementById("dropdownManOfTheMatch");

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].style.backgroundColor = "#FFFFFF";
    }

    for (i = 0; i < scores.length; i++) {
        scores[i].style.backgroundColor = "#FFFFFF";
        assists[i].style.backgroundColor = "#FFFFFF";
    }
    
    manOfTheMatch.style.backgroundColor = "#FFFFFF";


}

//click on Save at step 2 
function goToMatchReport() {

    textboxToWhite();

    var errorDiv = document.getElementById("error_message_addAboutMatch");
    var manOfTheMatch = document.getElementById("dropdownManOfTheMatch");
    var scoreBy = document.getElementsByClassName("dropdownAddWhoScoredHome");
    var assistBy = document.getElementsByClassName("dropdownAddWhoAssistHome");
    var p = document.getElementById("pErrorMatch");
    var playerNames = document.getElementsByClassName("dropdownPlayersName"); // players who played the match

    var errorCounter = 0;
    var errorMesage = document.createElement("ul")
    var curentLinupArray = [];
    var must11 = 0;

    // check if there is 11 players in start 11
    for (i = 0; i < 11; i++) {
        if (playerNames[i].value < 1) {
            errorCounter += 1;
            must11 = 1;
        }
    }

    //addin players to array
    for (i = 0; i < playerNames.length; i++) {
        if (playerNames[i].value > 0) {
            curentLinupArray.push(playerNames[i].value)

        }
    }

    var errorDupicatePlayer = 0;
    var manOfTheMatchNoInTeam = 0;
    var scoredByError = 0;
    var assistByError = 0;

    //check if some player is in the team more than once
    for (i = 0; i < curentLinupArray.length; i++) {
       
        var countDuplicate = 0;
        for (x = 0; x < playerNames.length; x++) {
            if (curentLinupArray[i] == playerNames[x].value) {
                countDuplicate += 1;
                if (countDuplicate > 1) {
                    playerNames[x].style.backgroundColor = "#FF3333";
                    errorDupicatePlayer += 1;
                }
            }
        }
    }

        
    //check if the man of the match is in the lineup
    if (curentLinupArray.includes(manOfTheMatch.value) == false && manOfTheMatch.value > 0) {
        manOfTheMatchNoInTeam += 1;
    }

    

    //check if the player who scored is in the team 
    for (x = 0; x < scoreBy.length; x++) {

        if (scoreBy[x].value > 0) {
            if (curentLinupArray.includes(scoreBy[x].value) == false) {
                scoredByError += 1;
                scoreBy[x].style.backgroundColor = "#FF3333";
            }
        }

        if (assistBy[x].value > 0) {
            if (curentLinupArray.includes(assistBy[x].value) == false) {
                assistByError += 1;
                assistBy[x].style.backgroundColor = "#FF3333";
            }
        }
        
    }

    //check if the player who assisted is in the team 
        
    if (must11 == 1) {
        var liDuplicate = document.createElement("li");
        liDuplicate.innerHTML = "It must be <b> 11 players </b> in starting lineup";

        errorMesage.appendChild(liDuplicate);
        errorCounter += 1;
    }

    if (errorDupicatePlayer > 0) {
   
        errorCounter += 1;
        var li11 = document.createElement("li");
        li11.innerHTML = "Some players are <b> more than once </b> in the lineup";

        errorMesage.appendChild(li11);
    }

    if (manOfTheMatchNoInTeam == 1) {
        manOfTheMatch.style.backgroundColor = "#FF3333";
        errorCounter += 1;

        var liManOfMatch = document.createElement("li");
        liManOfMatch.innerHTML = "The <b> man on the match </b> is not in the lineup";

        errorMesage.appendChild(liManOfMatch);
    }

    if (scoredByError != 0) {
        errorCounter += 1;

        var liScore = document.createElement("li");
        liScore.innerHTML = "The player who <b> scored </b> is not in the lineup";

        errorMesage.appendChild(liScore);
    }

    if (assistByError != 0) {
      
        errorCounter += 1;
        var liAssist = document.createElement("li");
        liAssist.innerHTML = "The player who <b> assisted </b> is not in the lineup";

        errorMesage.appendChild(liAssist);
    }

    if (errorCounter > 0) {
        p.innerHTML = "Please correct the following errors: ";
        p.appendChild(errorMesage);

        errorDiv.style.display = "block";
        
        window.scrollTo(0, 0);
        return false;
    }


  
   
   addLineupToSession();
   location.href = "matchReport.html" + "?id=" + currentMatchId;
}

/////////////////////////*****************    Page MatchReport.html  **********************/////////////////////////////////


function getMatchID(variable) {

    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);


}

//create match report
function fillMatchInfo() {
    updateMatchID();
    updateAllArrays();
    var matchID = getMatchID('id');

    
    

    var homeTeamName = document.getElementById("matchRpHomeName");
    var awayTeamName = document.getElementById("matchRpAwayName");
    var finalRes = document.getElementById("matchRpFinalResult");
    var halfTimeRes = document.getElementById("matchRpHalfTimeResult");
    var homeScores = document.getElementById("matchRpHomeScores");
    var awayScores = document.getElementById("matchRpAwayScores");


   
    
    var wePlayAs;

    // fill div Match Info
    for (i = 0; i < allMatchesAboutArray.length; i++) {

        if (allMatchesAboutArray[i].id == matchID) {
            var divMatchFacts = document.getElementById("matchRpFacts");

            var divType = document.createElement("div");
            divType.setAttribute("class", "matchFacts");
            divType.innerHTML = allMatchesAboutArray[i].type;

            var divDate = document.createElement("div");
            divDate.setAttribute("class", "matchFacts");
            divDate.innerHTML = allMatchesAboutArray[i].date;

            var divTime = document.createElement("div");
            divTime.setAttribute("class", "matchFacts");
            divTime.innerHTML = allMatchesAboutArray[i].time;

            var divPlace = document.createElement("div");
            divPlace.setAttribute("class", "matchFacts");
            divPlace.innerHTML = allMatchesAboutArray[i].place;

            var divArena = document.createElement("div");
            divArena.setAttribute("class", "matchFacts");
            divArena.innerHTML = allMatchesAboutArray[i].arena;

            var divAttendance = document.createElement("div");
            divAttendance.setAttribute("class", "matchFacts");
            divAttendance.innerHTML = allMatchesAboutArray[i].attendance;

            divMatchFacts.appendChild(divType);
            divMatchFacts.appendChild(divDate);
            divMatchFacts.appendChild(divTime);
            divMatchFacts.appendChild(divPlace);
            divMatchFacts.appendChild(divArena);
            divMatchFacts.appendChild(divAttendance);

            // if we are home team
            if (allMatchesAboutArray[i].weAreHomeAway == 1) {
                homeTeamName.innerHTML = myteam;
                awayTeamName.innerHTML = allMatchesAboutArray[i].rivalTeamName;
                wePlayAs = 1;
            }
 
            // if we are away team
            else {
                homeTeamName.innerHTML = allMatchesAboutArray[i].rivalTeamName;
                awayTeamName.innerHTML = myteam;
                wePlayAs = 2;
            }

            finalRes.innerHTML = allMatchesAboutArray[i].fulltimeResHomeT + ":" + allMatchesAboutArray[i].fulltimeResAwayT;
            halfTimeRes.innerHTML = "HT " + allMatchesAboutArray[i].halftimeResHomeT + ":" + allMatchesAboutArray[i].halftimeResAwayT;
        }
    }
   
   
    // fill div Match Info with Scores
    for (i = 0; i < allScoresByMin.length; i++) {
       
        // find all my team player that played current match
        if (allScoresByMin[i].myTeam == true && allScoresByMin[i].matchId == matchID) {
           
            var myGoals = document.getElementById("matchRpHomeScores");

            var newLine = document.createElement("div");
            newLine.setAttribute("class", "newScoreLine");

            var curId = allScoresByMin[i].playerId;
            var nameGoal = getPlayersInfo(curId, "name");

            var newGoal = document.createElement("label");
            newGoal.setAttribute("class", "newGoalPlayer");

            newGoal.innerHTML = nameGoal + " " + allScoresByMin[i].minut + "'";

            newLine.appendChild(newGoal);
          
            if (allScoresByMin[i].assistById > 0) {
                

                var nameAssist = getPlayersInfo(allScoresByMin[i].assistById, "name");
                var newAssist = document.createElement("label");
                newAssist.setAttribute("class", "newAssistPlayer");
                newAssist.innerHTML = "Assist by: " + nameAssist;
                newLine.appendChild(newAssist);
            }

            
            if (wePlayAs == 1) {
                homeScores.appendChild(newLine);

            }
            else {
                awayScores.appendChild(newLine);
            }


        }
       
        // find all my team player that played current match Rival team
        if (allScoresByMin[i].myTeam != true && allScoresByMin[i].matchId == matchID)
        {


            var newLineRival = document.createElement("div");
            newLineRival.setAttribute("class", "newScoreLine");

            var lableRival = document.createElement("label");
            lableRival.innerHTML = allScoresByMin[i].playerId + " " + allScoresByMin[i].minut + "'";

            newLineRival.appendChild(lableRival);

            if (wePlayAs == 1) {
                awayScores.appendChild(newLineRival);

            }
            else {
                homeScores.appendChild(newLineRival);
            }
         
            
        }
    }


    // create table Lineup
    var table = document.getElementById("bodyTabelLineup");
    var count11 = 0;

    for (i = 0; i < allMatchesLineupArray.length; i++) {

        // for current match
        if (allMatchesLineupArray[i].matchId == matchID) {

            count11 += 1;

            if (count11 == 12) {
                var rowSubstitutes = document.createElement("th");
                rowSubstitutes.setAttribute('id', "rowSubstitutes");
                rowSubstitutes.setAttribute('colspan', "9");
                rowSubstitutes.innerHTML = "Substitutes";
                table.appendChild(rowSubstitutes);
            }
                var row = document.createElement("tr");
                row.setAttribute('class', "tabelPlayerRow");

                var pName = getPlayersInfo( allMatchesLineupArray[i].playerId, "name")

                // add players name
                var name = document.createElement("td");
                name.innerHTML = pName;
                
                // add captain icon ih he is the captain
                var captain = document.createElement("td");
                if (allMatchesLineupArray[i].captain == true) {
                    var iconCaptain = document.createElement("img");
                    iconCaptain.setAttribute("src", "img/icons/icon-captain.png");
                    iconCaptain.setAttribute("alt", "captain");
                    iconCaptain.setAttribute("title", "Captain");
                    captain.appendChild(iconCaptain);
                }

                // add total goals
                var goals = document.createElement("td");
                if (allMatchesLineupArray[i].goals.length > 0) {
                    var iconGoals = document.createElement("img");
                    iconGoals.setAttribute("src", "img/icons/icon-goal.png");
                    iconGoals.setAttribute("alt", "goal");
                    iconGoals.setAttribute("title", "Number of goals");
                    goals.appendChild(iconGoals);

                    var minGoal = document.createElement("sup");
                    minGoal.innerHTML = allMatchesLineupArray[i].goals.length;
                    goals.appendChild(minGoal);
                }

            // add total assist
                var assist = document.createElement("td");
                if (allMatchesLineupArray[i].assists.length > 0) {
                    var iconAssist = document.createElement("img");
                    iconAssist.setAttribute("src", "img/icons/icon-assist.png");
                    iconAssist.setAttribute("alt", "assist");
                    iconAssist.setAttribute("title", "Total assists");
                    assist.appendChild(iconAssist);

                    var minAssist = document.createElement("sup");
                    minAssist.innerHTML = allMatchesLineupArray[i].assists.length;
                    assist.appendChild(minAssist);
                }

               // add yellow card 
                var yellow = document.createElement("td");
                if (allMatchesLineupArray[i].yellow > 0) {
                    var iconYellow = document.createElement("img");
                    iconYellow.setAttribute("src", "img/icons/icon-yellow.png");
                    iconYellow.setAttribute("alt", "yellow card");
                    iconYellow.setAttribute("title", "Yellow card by minute");
                    yellow.appendChild(iconYellow);

                    var minY = document.createElement("sup");
                    minY.innerHTML = allMatchesLineupArray[i].yellow;
                    yellow.appendChild(minY);
                }

            // add second yellow card 
                var secondYellow = document.createElement("td");
                if (allMatchesLineupArray[i].secondYellow > 0) {
                    var iconSecondYellow = document.createElement("img");
                    iconSecondYellow.setAttribute("src", "img/icons/icon-second-yellow.png");
                    iconSecondYellow.setAttribute("alt", "second yellow card");
                    iconSecondYellow.setAttribute("title", "Second yellow card by minute");
                    secondYellow.appendChild(iconSecondYellow);

                    var min2Y = document.createElement("sup");
                    min2Y.innerHTML = allMatchesLineupArray[i].secondYellow;
                    secondYellow.appendChild(min2Y);
                }

            // add red card 
                var red = document.createElement("td");
                if (allMatchesLineupArray[i].red > 0) {
                    var iconRed = document.createElement("img");
                    iconRed.setAttribute("src", "img/icons/icon-red.png");
                    iconRed.setAttribute("alt", "Red card");
                    iconRed.setAttribute("title", "Red card by minute");
                    red.appendChild(iconRed);

                    var minRed = document.createElement("sup");
                    minRed.innerHTML = allMatchesLineupArray[i].red;
                    red.appendChild(minRed);
                }

            // add in game
                var inGame = document.createElement("td");
                if (allMatchesLineupArray[i].inGame > 0) {
                    var iconIn = document.createElement("img");
                    iconIn.setAttribute("src", "img/icons/icon-in.png");
                    iconIn.setAttribute("alt", "in");
                    iconIn.setAttribute("title", "In game");
                    inGame.appendChild(iconIn);

                    var minIn = document.createElement("sup");
                    minIn.innerHTML = allMatchesLineupArray[i].inGame;
                    inGame.appendChild(minIn);
                }

            // add out game
                var outGame = document.createElement("td");
                if (allMatchesLineupArray[i].outGame > 0) {
                    var iconOut = document.createElement("img");
                    iconOut.setAttribute("src", "img/icons/icon-out.png");
                    iconOut.setAttribute("alt", "out");
                    iconOut.setAttribute("title", "Out of game");
                    outGame.appendChild(iconOut);

                    var minOut = document.createElement("sup");
                    minOut.innerHTML = allMatchesLineupArray[i].outGame;
                    outGame.appendChild(minOut);
                }

                row.appendChild(name);
                row.appendChild(captain);
                row.appendChild(goals);
                row.appendChild(assist);
                row.appendChild(yellow);
                row.appendChild(secondYellow);
                row.appendChild(red);
                row.appendChild(inGame);
                row.appendChild(outGame);

                table.appendChild(row);

            // create Man Of The Match
                if (allMatchesLineupArray[i].manOfTheMatch == true) {

                    var pName = getPlayersInfo(allMatchesLineupArray[i].playerId, "name");

                    var divHeadline = document.createElement("h2");
                    divHeadline.innerHTML = "The man of the match"
                    // div with image
                    var divImgBest = document.createElement("div");
                    divImgBest.setAttribute("id","imgBestPlayer")

                    var figure = document.createElement("figure");

                    var imgBest = document.createElement("img");

                    if (allMatchesLineupArray[i].playerId <= 22) {
                        imgBest.setAttribute("src", "img/players/" + allMatchesLineupArray[i].playerId + ".png");
                    }

                    else {
                        imgBest.setAttribute("src", "img/players/noImage.jpg");
                    }
                   
                    imgBest.setAttribute("alt", pName);
                    imgBest.setAttribute("title", pName);

                    figure.appendChild(imgBest);
                    divImgBest.appendChild(figure);

                    

                    // div players info
                    var divAboutBest = document.createElement("div");
                    divAboutBest.setAttribute("id", "aboutBestPlayer")

                    

                    var nameBest = document.createElement("h4");
                    nameBest.innerHTML = pName;

                    // div left within divAboutBest 
                    var divLeftPlayerInfo = document.createElement("div");
                    divLeftPlayerInfo.setAttribute("id", "divLeftPlayerInfo");

                    var leftUl = document.createElement("ul");
                    var rightUl = document.createElement("ul");

                    var pDate = getPlayersInfo(allMatchesLineupArray[i].playerId, "birthDate")
                    var birthDate = document.createElement("li");
                    birthDate.innerHTML = "<span> Date of birth: </span>" + pDate;

                    var pPlace = getPlayersInfo(allMatchesLineupArray[i].playerId, "birthPlace")
                    var birthPlace = document.createElement("li");
                    birthPlace.innerHTML = "<span> Place of birth: </span>" + pPlace;

                    var pHeight = getPlayersInfo(allMatchesLineupArray[i].playerId, "height")
                    var height = document.createElement("li");
                    height.innerHTML = "<span> Height: </span>" + pHeight;

                    var pWeight = getPlayersInfo(allMatchesLineupArray[i].playerId, "weight")
                    var weight = document.createElement("li");
                    weight.innerHTML = "<span> Weight: </span>" + pWeight;

                    var pPosition = getPlayersInfo(allMatchesLineupArray[i].playerId, "position")
                    var position = document.createElement("li");
                    position.innerHTML = "<span> Position: </span>" + pPosition;

                    var pNationality = getPlayersInfo(allMatchesLineupArray[i].playerId, "nationality")
                    var nationality = document.createElement("li");
                    nationality.innerHTML = "<span> Nationality: </span>" + pNationality;

                    var clubs = getPlayersInfo(allMatchesLineupArray[i].playerId, "formerClubs")
                    var formeClubs = document.createElement("li");
                    formeClubs.innerHTML = "<span> Former clubs: </span>" + clubs;
                   
                    leftUl.appendChild(position);
                    leftUl.appendChild(birthDate);
                    leftUl.appendChild(height);
                    leftUl.appendChild(weight);
                    rightUl.appendChild(nationality);
                    rightUl.appendChild(birthPlace);
                    rightUl.appendChild(formeClubs);
                    
                    

                    // div right within divAboutBest 
                    var divRightPlayerInfo = document.createElement("div");
                    divRightPlayerInfo.setAttribute("id", "divRightPlayerInfo");



                    divLeftPlayerInfo.appendChild(leftUl);
                    divRightPlayerInfo.appendChild(rightUl);

                    divAboutBest.appendChild(nameBest);
                    divAboutBest.appendChild(divLeftPlayerInfo);
                    divAboutBest.appendChild(divRightPlayerInfo);

                    var divBest = document.getElementById("matchRpManOfTheMatch");
                    divBest.setAttribute

                    divBest.appendChild(divHeadline);
                    divBest.appendChild(divImgBest);
                    divBest.appendChild(divAboutBest);
                }
        }
    }


}


/////////////////////////*****************    Page statistics.html  **********************/////////////////////////////////

// load individual statistics
function loadPlayerStats() {
    updateAllArrays();

    var tabelPlayerStats = document.getElementById("bodyTabelStatistics");

    //for each active player in team
    for (i = 0; i < allPlayersArray.length; i++) {
        if (allPlayersArray.length > 0 && allPlayersArray[i].active == true) {

            var totalMatches = 0,
                totalStart11 = 0,
                totalGoals = 0,
                totalAssist = 0,
                totalYellow = 0,
                totalRed = 0,
                totalManOfTheMatch = 0;

            for (x = 0; x < allMatchesLineupArray.length; x++) {
                if (allMatchesLineupArray[x].playerId == allPlayersArray[i].id) {
                    totalMatches += 1;

                    if (allMatchesLineupArray[x].start11 == true) {
                        totalStart11 += 1;
                    }

                    if( allMatchesLineupArray[x].manOfTheMatch == true)  {
                        totalManOfTheMatch += 1;
                    }

                    totalGoals += allMatchesLineupArray[x].goals.length;
                    totalAssist += allMatchesLineupArray[x].assists.length;

                    if (allMatchesLineupArray[x].yellow > 0) {
                        totalYellow += 1;
                    }

                    if (allMatchesLineupArray[x].secondYellow > 0) {
                        totalYellow += 1;
                        totalRed += 1;
                    }

                    if (allMatchesLineupArray[x].red > 0) {
                        totalRed += 1;
                    }
                   
                }
            }


            var newRow = document.createElement("tr");

            var pName = document.createElement("td");
            pName.innerHTML = allPlayersArray[i].firstName + " " + allPlayersArray[i].lastName;

            var pMatches = document.createElement("td");
            pMatches.innerHTML = totalMatches;

            var pStart11 = document.createElement("td");
            pStart11.innerHTML = totalStart11;

            var pGoals = document.createElement("td");
            pGoals.innerHTML = totalGoals;

            var pAssist = document.createElement("td");
            pAssist.innerHTML = totalAssist;

            var pYellow = document.createElement("td");
            pYellow.innerHTML = totalYellow;

            var pRed = document.createElement("td");
            pRed.innerHTML = totalRed;

            var pManOfTheMatch = document.createElement("td");
            pManOfTheMatch.innerHTML = totalManOfTheMatch;

           
            newRow.appendChild(pName);
            newRow.appendChild(pMatches);
            newRow.appendChild(pStart11);
            newRow.appendChild(pGoals);
            newRow.appendChild(pAssist);
            newRow.appendChild(pYellow);
            newRow.appendChild(pRed);
            newRow.appendChild(pManOfTheMatch);

            tabelPlayerStats.appendChild(newRow);

        }
    }
}

/////////////////////////*****************    Page players.html  **********************/////////////////////////////////
// load all current players
function loadAllPlayers() {
    
    updateAllArrays();

    var sectionPlayers = document.getElementById('allPlayers');

    
    for (i = 0; i < allPlayersArray.length; i++)
    {
        if (allPlayersArray[i].active == true) {


            var newPlayer = document.createElement("article");
            newPlayer.setAttribute('class', "player");

            //Create players Name
            var nameTag = document.createElement("h3");
            nameTag.innerHTML = allPlayersArray[i].firstName + " " + allPlayersArray[i].lastName;


            var figure = document.createElement("figure");
            var imageP = document.createElement("img");

            if (allPlayersArray[i].id <= 22) {
                imageP.setAttribute("src", "img/players/" + allPlayersArray[i].id + ".png");
            imageP.setAttribute("alt", allPlayersArray[i].firstName + " " + allPlayersArray[i].lastName);
        }

        else{
                imageP.setAttribute("src", "img/players/noImage.jpg");
                imageP.setAttribute("alt", allPlayersArray[i].firstName + " " + allPlayersArray[i].lastName);
        }
            

            figure.appendChild(imageP);
            //Create players Age
            var ageP = document.createElement("li");
            ageP.innerHTML = "<span>Born: </span>" + allPlayersArray[i].birthDate;

            //Create players Position
            var positionP = document.createElement("li");
            positionP.innerHTML = "<span>Position: </span>" + allPlayersArray[i].position;

            //Create players height
            var height = document.createElement("li");
            height.innerHTML = "<span>Height: </span>" + allPlayersArray[i].height + " cm";

            //Create players weight
            var weight = document.createElement("li");
            weight.innerHTML = "<span>Weight: </span>" + allPlayersArray[i].weight + " kg";

            //Create players nationality
            var nationality = document.createElement("li");
            nationality.innerHTML = "<span>Nationality: </span>" + allPlayersArray[i].nationality;

            //Create players place of birth
            var place = document.createElement("li");
            place.innerHTML = "<span>Place: </span> " + allPlayersArray[i].birthPlace;

            //Create players list withformer clubs
            var formerClubs = document.createElement("li");
            formerClubs.innerHTML = "<span>Former clubs: </span> ";
            for (z = 0; z < allPlayersArray[i].formerClubs.length; z++) {
                
                formerClubs.innerHTML += allPlayersArray[i].formerClubs[z] +", "
            }

            newPlayer.appendChild(nameTag);
            newPlayer.appendChild(figure);
            newPlayer.appendChild(ageP);
            newPlayer.appendChild(positionP);
            newPlayer.appendChild(height);
            newPlayer.appendChild(weight);
            newPlayer.appendChild(nationality);
            newPlayer.appendChild(place);
            newPlayer.appendChild(formerClubs);

            //Adding newPlayer to our section "All players"
            sectionPlayers.appendChild(newPlayer);
        }
    }
}

/////////////////////////*****************    Page playersList.html  **********************/////////////////////////////////

function loadPlayerList() {
    
    var tabelPlayer = document.getElementById("bodyTabelPlayersAdmin");

    for (i = 0; i < allPlayersArray.length; i++) {
        if (allPlayersArray.length > 0 && allPlayersArray[i].active == true) {

            var newRow = document.createElement("tr");

            var pNameTD = document.createElement("td");
            pNameTD.innerHTML = allPlayersArray[i].firstName + " " + allPlayersArray[i].lastName;

            var pPositionTD = document.createElement("td");
            pPositionTD.innerHTML = allPlayersArray[i].position;

            var pCheckbox = document.createElement("input");
            pCheckbox.setAttribute("type", "checkbox");
            pCheckbox.setAttribute("class", "checkboxPlayerList");
            pCheckbox.setAttribute("value", allPlayersArray[i].id);
            newRow.appendChild(pNameTD);
            newRow.appendChild(pPositionTD);
            newRow.appendChild(pCheckbox);
            tabelPlayer.appendChild(newRow);
        }
    }
}

//click on Save at step 1 addAboutMatch
function goToAddPlayerPage() {
    location.href = "addPlayer.html";
}

// remove all marked match reports
function removePlayer() {

    var checkbox = document.getElementsByClassName("checkboxPlayerList");

    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {

            for (var x = 0; x < allPlayersArray.length; x++) {
                if (allPlayersArray[x].id == checkbox[i].value) {
                    allPlayersArray[x].active = false;

                }
            }

        }
    }


    // add to session
    if (typeof (Storage) !== "undefined") { 

        sessionStorage.setItem("sessionAllPlayers", JSON.stringify(allPlayersArray)); 
    }

    else {
        document.getElementById('result').innerHTML = "Sorry, your browser does not support web storage...";
    }


    location.reload();
}


/////////////////////////*****************    Page addPlayers.html  **********************/////////////////////////////////
var countClub = 0;

function addNewFormerClub() {


    countClub ++;

    var lastClub = document.getElementById("oneFormerClubID");

    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "oneFormerClub");
    rowDiv.setAttribute("id", "divClub" + countClub);


    var newClub = document.createElement("input");
    newClub.setAttribute("class", "formerClubs");
    newClub.setAttribute("type", "text");
    newClub.setAttribute("placeholder", "name of the club");
  

  

    rowDiv.appendChild(newClub);
    lastClub.appendChild(rowDiv);
}



function removeClub() {
    if (0 < countClub) {
        document.getElementById('oneFormerClubID').removeChild(document.getElementById("divClub" + countClub));
        countClub--;
        
    } 
}

function saveNewPlayer() {

    var $myForm = $('#addPlayerForm')
    if (!$myForm[0].checkValidity()) {

        //fake summit button
        $('<input type="submit">').hide().appendTo($myForm).click().remove();

        //submit the form
        $myForm.find(':submit').click()
        return false;
    }

    updateAllArrays();
    updateLastPlayerID();
    
    var firstName = document.getElementById("inpPlayerFirstName").value;
    var lastName = document.getElementById("inpPlayerLastName").value;
    var position = document.getElementById("radioBtnPosition").value;
    var date = document.getElementById("inpPlayerBirthDate").value;
    var place = document.getElementById("inpPlayerPlaceBirth").value;
    var nationality = document.getElementById("inpPlayerNationality").value;
    var height = document.getElementById("inpPlayerHeight").value;
    var weight = document.getElementById("inpPlayerweight").value;
    var clubs = document.getElementsByClassName("formerClubs");
    var currentPlayerId = Number(lastPlayerID) + 1;
    var formerClubs = [];

    // add clubs to object 
    for (i = 0; i < clubs.length; i++) {
        formerClubs.push(clubs[i].value);
    }

    allPlayersArray.push({
        id: currentPlayerId,
        firstName: firstName,
        lastName: lastName,
        birthDate: date,
        birthPlace: place,
        height: height,
        weight: weight,
        nationality: nationality,
        position: position,
        formerClubs: formerClubs,
        active: true
    });

    lastPlayerID = Number(currentPlayerId);
    
    if (typeof (Storage) !== "undefined") { // check if session Storage is supported by the browser

        sessionStorage.setItem("sessionAllPlayers", JSON.stringify(allPlayersArray));
        sessionStorage.setItem("sessionLastPlayerId", JSON.stringify(lastPlayerID));
    }

    else {
        document.getElementById('result').innerHTML = "Sorry, your browser does not support web storage...";
    }

   
   
    location.href = "playersList.html";
}



/////////////////////////*****************    Pages matches.html + matchReportList **********************/////////////////////////////////

// remove all marked match reports
function removeMatchReport() {

    var checkbox = document.getElementsByClassName("checkboxMatchList");
    var forDeletingArray = [];

    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {

            // delete all checked matches from array allMatchesAboutArray
            for (var x = allMatchesAboutArray.length - 1; x >= 0; x--) {
           
                if (allMatchesAboutArray[x].id == checkbox[i].value) {

                    allMatchesAboutArray.splice(x, 1);  

                }
            }

            // delete all checked matches from array allMatchesLineupArray
            for (var x = allMatchesLineupArray.length - 1; x >= 0; x--) {
                 if (allMatchesLineupArray[x].matchId == checkbox[i].value) {
                    allMatchesLineupArray.splice(x, 1);
                 
                }
            }

        }
    }

    
    // add to session
    if (typeof (Storage) !== "undefined") { // check if session Storage is supported by the browser

        sessionStorage.setItem("sessionAllMatchAbout", JSON.stringify(allMatchesAboutArray)); //add arrayen to session
        sessionStorage.setItem("sessionAllLineup", JSON.stringify(allMatchesLineupArray)); //add arrayen to session
      }

    else {
        document.getElementById('result').innerHTML = "Sorry, your browser does not support web storage...";
    }

   

    location.reload();
}

// create and fill table with all matches
function getTableMatches() {
    updateAllArrays();
    
    var tableMatchList = document.getElementById("bodyTabelMatchesUser");
    var tabelAdmin = document.getElementById("bodyTabelMatchesAdmin");

    for (var i = allMatchesAboutArray.length - 1; i >= 0; i--) {
        if (allMatchesAboutArray.length > 0) {
            
            var homeTeam;
            var awayTeam;
            

            if (allMatchesAboutArray[i].weAreHomeAway == 1){
                homeTeam = myteam;
                awayTeam = allMatchesAboutArray[i].rivalTeamName;
            }

            else {
                homeTeam = allMatchesAboutArray[i].rivalTeamName;
                awayTeam = myteam;
            }

            var newRow = document.createElement("tr")

            var matchDateTD = document.createElement("td");
            matchDateTD.innerHTML = allMatchesAboutArray[i].date;

            var matchNameTD = document.createElement("td");
            var matchResultTD = document.createElement("td");
            
            var linkMatchNameA = document.createElement("a");
            linkMatchNameA.setAttribute("href", "matchReport.html?id=" + allMatchesAboutArray[i].id);
            linkMatchNameA.innerHTML = homeTeam + " - " + awayTeam;


            var linkMatchResultA = document.createElement("a");
            linkMatchResultA.setAttribute("href", "matchReport.html?id=" + allMatchesAboutArray[i].id);
            linkMatchResultA.innerHTML = allMatchesAboutArray[i].fulltimeResHomeT + ":" + allMatchesAboutArray[i].fulltimeResAwayT;
          

            var location = window.location.pathname;
            var pageName = location.substring(location.lastIndexOf('/') + 1); 

            if (pageName == "matchReportList.html") {

               
                var newRowAdmin = document.createElement("tr");
                var markTD = document.createElement("td");
                var checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("class", "checkboxMatchList");
                checkbox.setAttribute("value", allMatchesAboutArray[i].id);

                matchNameTD.appendChild(linkMatchNameA);
                matchResultTD.appendChild(linkMatchResultA);

                markTD.appendChild(checkbox);

                newRowAdmin.appendChild(matchDateTD);
                newRowAdmin.appendChild(matchNameTD);
                newRowAdmin.appendChild(matchResultTD);
                newRowAdmin.appendChild(markTD);

                tabelAdmin.appendChild(newRowAdmin);
            }

            else if (pageName == "matches.html") {
                matchNameTD.appendChild(linkMatchNameA);
                matchResultTD.appendChild(linkMatchResultA);

                newRow.appendChild(matchDateTD);
                newRow.appendChild(matchNameTD);
                newRow.appendChild(matchResultTD);
                tableMatchList.appendChild(newRow);
            }
        }
    }
}

// open new page to create matchreport
function openFormAddMatch() {
    location.href = "addAboutMatch.html";
}


//get matchID from session
function updateMatchID() {

    if (sessionStorage.getItem("sessionCurrentMatchID") != null) {
        currentMatchId = sessionStorage.getItem("sessionCurrentMatchID");
    }

    if (sessionStorage.getItem("sessionLastMatchID") != null) {
        lastMatchID = sessionStorage.getItem("sessionLastMatchID");
    }

}

//get matchID from session
function updateLastPlayerID() {

    if (sessionStorage.getItem("sessionLastPlayerId") != null) {
        lastPlayerID = sessionStorage.getItem("sessionLastPlayerId");
    }

}

function updateAllArrays() {

    if (sessionStorage.getItem("sessionAllMatchAbout") != null) {

        allMatchesAboutArray = [];

        var sesAllMatchesAboutArray = sessionStorage.getItem("sessionAllMatchAbout");
        var parsed = JSON.parse(sesAllMatchesAboutArray);

        for (i = 0; i < parsed.length; i++) {
            allMatchesAboutArray.push(parsed[i]);
        }
    }

    if (sessionStorage.getItem("sessionAllLineup") != null) {

        allMatchesLineupArray = [];

        var sesAllLineup = sessionStorage.getItem("sessionAllLineup");
        var parsed = JSON.parse(sesAllLineup);

        for (i = 0; i < parsed.length; i++) {
            allMatchesLineupArray.push(parsed[i]);
        }
    }

    if (sessionStorage.getItem("sessionAllScoreByMin") != null) {

        allScoresByMin = [];

        var sesAllScoreByMin = sessionStorage.getItem("sessionAllScoreByMin");
        var parsed = JSON.parse(sesAllScoreByMin);

        for (i = 0; i < parsed.length; i++) {
            allScoresByMin.push(parsed[i]);
        }
    }

    if (sessionStorage.getItem("sessionAllPlayers") != null) {

        allPlayersArray = [];

        var sesPlayers = sessionStorage.getItem("sessionAllPlayers");
        var parsed = JSON.parse(sesPlayers);

        for (i = 0; i < parsed.length; i++) {
            allPlayersArray.push(parsed[i]);
        }
    }
}

// get info about current player
function getPlayersInfo(id, type) {

    var curID = id;
    var typeOfInfo = type;

    var result;
    for (x = 0; x < allPlayersArray.length; x++) {

        if (allPlayersArray[x].id == curID) {

            if (typeOfInfo == "name") {
                result = allPlayersArray[x].firstName + " " + allPlayersArray[x].lastName;
            }

            else if (typeOfInfo == "birthDate") {
                result = allPlayersArray[x].birthDate;
            }

            else if (typeOfInfo == "birthPlace") {
                result = allPlayersArray[x].birthPlace;
            }

            else if (typeOfInfo == "height") {
                result = allPlayersArray[x].height;
            }

            else if (typeOfInfo == "weight") {
                result = allPlayersArray[x].weight;
            }

            else if (typeOfInfo == "nationality") {
                result = allPlayersArray[x].nationality;
            }

            else if (typeOfInfo == "position") {
                result = allPlayersArray[x].position;
            }

            else if (typeOfInfo == "formerClubs") {
               
                var myClubs = "";
                for (p = 0; p < allPlayersArray[x].formerClubs.length; p++) {
                    myClubs += allPlayersArray[x].formerClubs[p] + "<br/>";
                }

                result = myClubs;
            }
        }
    }
    return result;
    
    
}


window.addEventListener("load", start, false);