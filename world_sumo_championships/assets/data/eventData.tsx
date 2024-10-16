
const thursdayData = [
    {
        id: 1,
        eventName: 'Accreditation 12:00',
        coordinates: {latitude: 51.6969, longitude: 17.4417}
    },
    {
        id: 2,
        eventName: 'First Weigh-in for Junior & World Competitors 17:00-19:00',
        coordinates: {latitude: 51.65676, longitude: 17.39018}
    },
    {
        id: 3,
        eventName: 'Welcome Party 20:00',
        coordinates: {latitude: 51.84086, longitude: 17.46740}
    },
]

const fridayData =[
    {
        id: 1,
        eventName: 'Second Weigh-in for Junior & World Competitors 8:30-10:00',
        coordinates: {latitude: 51.65676, longitude: 17.39018 }
    },

    {
        id: 2,
        eventName: ' Athlete Committee Meeting 10:30',
        coordinates: {latitude: 51.65676, longitude: 17.39018 }
    },

    {
        id: 3,
        eventName: 'IFS Board of Directors Meeting 10:30',
        coordinates: {latitude: 51.65676, longitude: 17.39018 }
    },

    {
        id: 4,
        eventName: 'IFS General Assembly 11:30',
        coordinates: {latitude: 51.65676, longitude: 17.39018}
    },

    {
        id: 5,
        eventName: 'Coaches Meeting & Draw 15:00',
        coordinates: {latitude: 51.65676, longitude: 17.39018}
    },

    {
        id: 6,
        eventName: 'Referee Meeting',
        coordinates: {latitude: 51.65676, longitude: 17.39018}
    },

]

const saturdayData = [
    {
        id: 1,
        eventName: 'Junior Sumo World Championships 12:00',
        coordinates:{latitude: 51.6969, longitude: 17.4417}
    },

]

const sundayData = [
    {
        id: 1,
        eventName: 'Sumo World Championships 10:00',
        coordinates:{latitude: 51.6969, longitude: 17.4417}
    },
    {
        id: 2,
        eventName: 'Sayanoaea Party - Evening',
        coordinates:{latitude: 51.6969, longitude: 17.4417}
    },

]

export const everyDayData = {
    thursday: thursdayData,
    friday: fridayData,
    saturday: saturdayData,
    sunday: sundayData
}

export const videoLinks = {
    polish: [{link: "5UTErNjISwU"}],
    english: [{link: "3e7YDQdxPGk" }]
}

//man

const m80J ={
    name: "under 80kg",
    competitors: [{id: "1", name: "REBEKA YUMI SAKASHITA DOMINGOS", country: "br", photo: require('@/assets/myImages/women65Senior/1.jpg')},
    {id: "2", name: "MIHAELA HRISTOVA", country: "bg", photo: require('@/assets/myImages/women65Senior/2.jpg')},
    {id: "3", name: "KÄROL TAMSON", country: "ee", photo: require('@/assets/myImages/women65Senior/3.jpg')},
    {id: "4", name: "LUCIE FIEDLER", country: "de", photo: require('@/assets/myImages/women65Senior/4.jpg')},
    {id: "5", name: "KITTI BALJER", country: "hu", photo: require('@/assets/myImages/women65Senior/5.jpg')},
    {id: "6", name: "ROSALIA MUTOLO", country: "it", photo: require('@/assets/myImages/women65Senior/6.jpg')},
    {id: "7", name: "NENE YAMASHITA", country: "jp", photo: require('@/assets/myImages/women65Senior/7.jpg')},
    {id: "8", name: "RIKKE JUELL BUGGE", country: "no", photo: require('@/assets/myImages/women65Senior/8.jpg')},
    {id: "9", name: "ALEKSANDRA	KIERAKOWICZ", country: "pl", photo: require('@/assets/myImages/women65Senior/9.jpg')},
    {id: "10", name: "SZ-HUA WANG", country: "tw", photo: require('@/assets/myImages/women65Senior/10.jpg')},
    {id: "11", name: "MANZURA GADOEVA", country: "tj", photo: require('@/assets/myImages/women65Senior/11.jpg')},
    {id: "12", name: "SOFIIA KUSHNIR", country: "ua", photo: require('@/assets/myImages/women65Senior/12.jpg')},
    {id: "13", name: "MADISON GUIN", country: "us", photo: require('@/assets/myImages/women65Senior/13.jpg')},
    {id: "14", name: "BITALINA CANARIO CUEVAS", country: "do", photo: require('@/assets/myImages/blank.jpg')},
],
    results: []

}

const m100J ={
    name: "under 100kg",
    competitors: [{id: "1", name: "REBEKA YUMI SAKASHITA DOMINGOS", country: "br", photo: require('@/assets/myImages/women65Senior/1.jpg')},
        {id: "2", name: "MIHAELA HRISTOVA", country: "bg", photo: require('@/assets/myImages/women65Senior/2.jpg')},
        {id: "3", name: "KÄROL TAMSON", country: "ee", photo: require('@/assets/myImages/women65Senior/3.jpg')},
        {id: "4", name: "LUCIE FIEDLER", country: "de", photo: require('@/assets/myImages/women65Senior/4.jpg')},
        {id: "5", name: "KITTI BALJER", country: "hu", photo: require('@/assets/myImages/women65Senior/5.jpg')},
        {id: "6", name: "ROSALIA MUTOLO", country: "it", photo: require('@/assets/myImages/women65Senior/6.jpg')},
        {id: "7", name: "NENE YAMASHITA", country: "jp", photo: require('@/assets/myImages/women65Senior/7.jpg')},
        {id: "8", name: "RIKKE JUELL BUGGE", country: "no", photo: require('@/assets/myImages/women65Senior/8.jpg')},
        {id: "9", name: "ALEKSANDRA	KIERAKOWICZ", country: "pl", photo: require('@/assets/myImages/women65Senior/9.jpg')},
        {id: "10", name: "SZ-HUA WANG", country: "tw", photo: require('@/assets/myImages/women65Senior/10.jpg')},
        {id: "11", name: "MANZURA GADOEVA", country: "tj", photo: require('@/assets/myImages/women65Senior/11.jpg')},
        {id: "12", name: "SOFIIA KUSHNIR", country: "ua", photo: require('@/assets/myImages/women65Senior/12.jpg')},
        {id: "13", name: "MADISON GUIN", country: "us", photo: require('@/assets/myImages/women65Senior/13.jpg')},
        {id: "14", name: "BITALINA CANARIO CUEVAS", country: "do", photo: require('@/assets/myImages/blank.jpg')},
    ],
    results: []

}

const m100upJ ={
    name: "above 100kg",
    competitors: [{id: "1", name: "REBEKA YUMI SAKASHITA DOMINGOS", country: "br", photo: require('@/assets/myImages/women65Senior/1.jpg')},
        {id: "2", name: "MIHAELA HRISTOVA", country: "bg", photo: require('@/assets/myImages/women65Senior/2.jpg')},
        {id: "3", name: "KÄROL TAMSON", country: "ee", photo: require('@/assets/myImages/women65Senior/3.jpg')},
        {id: "4", name: "LUCIE FIEDLER", country: "de", photo: require('@/assets/myImages/women65Senior/4.jpg')},
        {id: "5", name: "KITTI BALJER", country: "hu", photo: require('@/assets/myImages/women65Senior/5.jpg')},
        {id: "6", name: "ROSALIA MUTOLO", country: "it", photo: require('@/assets/myImages/women65Senior/6.jpg')},
        {id: "7", name: "NENE YAMASHITA", country: "jp", photo: require('@/assets/myImages/women65Senior/7.jpg')},
        {id: "8", name: "RIKKE JUELL BUGGE", country: "no", photo: require('@/assets/myImages/women65Senior/8.jpg')},
        {id: "9", name: "ALEKSANDRA	KIERAKOWICZ", country: "pl", photo: require('@/assets/myImages/women65Senior/9.jpg')},
        {id: "10", name: "SZ-HUA WANG", country: "tw", photo: require('@/assets/myImages/women65Senior/10.jpg')},
        {id: "11", name: "MANZURA GADOEVA", country: "tj", photo: require('@/assets/myImages/women65Senior/11.jpg')},
        {id: "12", name: "SOFIIA KUSHNIR", country: "ua", photo: require('@/assets/myImages/women65Senior/12.jpg')},
        {id: "13", name: "MADISON GUIN", country: "us", photo: require('@/assets/myImages/women65Senior/13.jpg')},
        {id: "14", name: "BITALINA CANARIO CUEVAS", country: "do", photo: require('@/assets/myImages/blank.jpg')},
    ],
    results: []

}

const mOpenJ ={
    name: "Open",
    competitors: [{id: "1", name: "REBEKA YUMI SAKASHITA DOMINGOS", country: "br", photo: require('@/assets/myImages/women65Senior/1.jpg')},
        {id: "2", name: "MIHAELA HRISTOVA", country: "bg", photo: require('@/assets/myImages/women65Senior/2.jpg')},
        {id: "3", name: "KÄROL TAMSON", country: "ee", photo: require('@/assets/myImages/women65Senior/3.jpg')},
        {id: "4", name: "LUCIE FIEDLER", country: "de", photo: require('@/assets/myImages/women65Senior/4.jpg')},
        {id: "5", name: "KITTI BALJER", country: "hu", photo: require('@/assets/myImages/women65Senior/5.jpg')},
        {id: "6", name: "ROSALIA MUTOLO", country: "it", photo: require('@/assets/myImages/women65Senior/6.jpg')},
        {id: "7", name: "NENE YAMASHITA", country: "jp", photo: require('@/assets/myImages/women65Senior/7.jpg')},
        {id: "8", name: "RIKKE JUELL BUGGE", country: "no", photo: require('@/assets/myImages/women65Senior/8.jpg')},
        {id: "9", name: "ALEKSANDRA	KIERAKOWICZ", country: "pl", photo: require('@/assets/myImages/women65Senior/9.jpg')},
        {id: "10", name: "SZ-HUA WANG", country: "tw", photo: require('@/assets/myImages/women65Senior/10.jpg')},
        {id: "11", name: "MANZURA GADOEVA", country: "tj", photo: require('@/assets/myImages/women65Senior/11.jpg')},
        {id: "12", name: "SOFIIA KUSHNIR", country: "ua", photo: require('@/assets/myImages/women65Senior/12.jpg')},
        {id: "13", name: "MADISON GUIN", country: "us", photo: require('@/assets/myImages/women65Senior/13.jpg')},
        {id: "14", name: "BITALINA CANARIO CUEVAS", country: "do", photo: require('@/assets/myImages/blank.jpg')},
    ],
    results: []

}

export const mJunior ={
    name: "Junior",
    categories: [m80J, m100J,m100upJ,mOpenJ]
}

const m85S ={
    name: "under 85kg",
    competitors: [
        {id: "1", name: "JOEL KINDRED", country: "au", photo: require('@/assets/myImages/man85Senior/1.jpg')},
        {id: "2", name: "ABDULLAH SHARIF", country: "az", photo: require('@/assets/myImages/man85Senior/2.jpg')},
        {id: "3", name: "FELIPE TETSUYA	ENDO KOSAIHIRA", country: "br", photo: require('@/assets/myImages/man85Senior/3.jpg')},
        {id: "4", name: "SEBASTIAN WRAY", country: "gb", photo: require('@/assets/myImages/man85Senior/4.jpg')},
        {id: "5", name: "PENCHO	DOCHEV", country: "bg", photo: require('@/assets/myImages/man85Senior/5.jpg')},
        {id: "6", name: "SHANE	PECKNOLD", country: "ca", photo: require('@/assets/myImages/man85Senior/6.jpg')},
        {id: "7", name: "STEFAN-LAURI MÖLDER", country: "ee", photo: require('@/assets/myImages/man85Senior/7.jpg')},
        {id: "8", name: "PHUMPANYA MAZUR", country: "de", photo: require('@/assets/myImages/man85Senior/8.jpg')},
        {id: "9", name: "PATRIK	BUZAS", country: "hu", photo: require('@/assets/myImages/man85Senior/9.jpg')},
        {id: "10", name: "RUSLAN NESTERENKO", country: "il", photo: require('@/assets/myImages/man85Senior/10.jpg')},
        {id: "11", name: "LUCA MARCOZZI", country: "it", photo: require('@/assets/myImages/blank.jpg')},
        {id: "12", name: "KAZUKI WAUKE", country: "jp", photo: require('@/assets/myImages/man85Senior/12.jpg')},
        {id: "13", name: "AIAN SEIITBEKOV", country: "kg", photo: require('@/assets/myImages/man85Senior/13.jpg')},
        {id: "14", name: "MYAGMAR BATZORIG", country: "mn", photo: require('@/assets/myImages/blank.jpg')},
        {id: "15", name: "FRODE	MOEN", country: "no", photo: require('@/assets/myImages/man85Senior/15.jpg')},
        {id: "16", name: "PATRYK SWORA", country: "pl", photo: require('@/assets/myImages/man85Senior/16.jpg')},
        {id: "17", name: "PEDRO	RODRIGUES", country: "pt", photo: require('@/assets/myImages/blank.jpg')},
        {id: "18", name: "SHAN-YU LIN", country: "tw", photo: require('@/assets/myImages/man85Senior/18.jpg')},
        {id: "19", name: "TOHIR DARVOZIEV", country: "tj", photo: require('@/assets/myImages/man85Senior/19.jpg')},
        {id: "20", name: "THANAWAT KHAMHAN", country: "th", photo: require('@/assets/myImages/man85Senior/20.jpg')},
        {id: "21", name: "DEMID KARACHENKO", country: "ua", photo: require('@/assets/myImages/man85Senior/21.jpg')},
        {id: "22", name: "EDOBOR KONYEHA", country: "us", photo: require('@/assets/myImages/man85Senior/22.jpg')},
        {id: "23", name: "SOKHIBJON KHASANBOEV", country: "uz", photo: require('@/assets/myImages/man85Senior/23.jpg')},
        {id: "24", name: "CRISTINO LEBRON LAGARES", country: "do", photo: require('@/assets/myImages/blank.jpg')}
    ],
    results: []

}

const m100S ={
    name: "under 100kg",
    competitors: [
        {id: "1", name: "CHINGIZ SAMADOV", country: "az", photo: require('@/assets/myImages/man100Senior/1.jpg')},
        {id: "2", name: "ROGERIO DOS REIS BINOTO FILHO", country: "br", photo: require('@/assets/myImages/man100Senior/2.jpg')},
        {id: "3", name: "JOSEPH	O’NEILL", country: "gb", photo: require('@/assets/myImages/man100Senior/3.jpg')},
        {id: "4", name: "IVAN BLAGOEV", country: "bg", photo: require('@/assets/myImages/man100Senior/4.jpg')},
        {id: "5", name: "RYAN TETSUHIKO	KIMOTO", country: "ca", photo: require('@/assets/myImages/man100Senior/5.jpg')},
        {id: "6", name: "ROBYN PAULBERG", country: "ee", photo: require('@/assets/myImages/man100Senior/6.jpg')},
        {id: "7", name: "MARKUS	LATVALA", country: "FINLAND", photo: require('@/assets/myImages/man100Senior/7.jpg')},
        {id: "8", name: "SABA GAMTENADZE", country: "ge", photo: require('@/assets/myImages/man100Senior/8.jpg')},
        {id: "9", name: "DARIUS	MAYEK", country: "de", photo: require('@/assets/myImages/man100Senior/9.jpg')},
        {id: "10", name: "JOZSEF LEVENTE DELCEG", country: "hu", photo: require('@/assets/myImages/man100Senior/10.jpg')},
        {id: "11", name: "KAZUHIKO RYUYAMA", country: "jp", photo: require('@/assets/myImages/man100Senior/11.jpg')},
        {id: "12", name: "DANIEL TEMIRBEKOV", country: "kg", photo: require('@/assets/myImages/man100Senior/12.jpg')},
        {id: "13", name: "GANBOLD EREDENESUREN", country: "mn", photo: require('@/assets/myImages/man100Senior/13.jpg')},
        {id: "14", name: "KIM ERIK VALENTIN	SVENSSON", country: "no", photo: require('@/assets/myImages/man100Senior/14.jpg')},
        {id: "15", name: "RAFAŁ	GŁODEK", country: "pl", photo: require('@/assets/myImages/man100Senior/15.jpg')},
        {id: "16", name: "MIGUEL SEREJO", country: "pt", photo: require('@/assets/myImages/blank.jpg')},
        {id: "17", name: "HAO-CHENG KAO", country: "tw", photo: require('@/assets/myImages/man100Senior/17.jpg')},
        {id: "18", name: "JAHONGIR ABDULLOEV", country: "tj", photo: require('@/assets/myImages/man100Senior/18.jpg')},
        {id: "19", name: "JETSADAKORN NISHIZAKI", country: "th", photo: require('@/assets/myImages/man100Senior/19.jpg')},
        {id: "20", name: "YEHOR KRUPSKYI", country: "ua", photo: require('@/assets/myImages/man100Senior/20.jpg')},
        {id: "21", name: "JARED FAULK", country: "us", photo: require('@/assets/myImages/blank.jpg')},
        {id: "22", name: "MUKHAMMADALI MUKHTOROV", country: "uz", photo: require('@/assets/myImages/man100Senior/22.jpg')},
        {id: "23", name: "ERCILIO RODRIGUEZ MARTINEZ", country: "do", photo: require('@/assets/myImages/blank.jpg')},
],
    results: []

}
const m115S ={
    name: "under 115kg",
    competitors: [
        {id: "1", name: "ALBERTO OSCAR MAIBACH", country: "ar", photo: require('@/assets/myImages/man115Senior/1.jpg')},
        {id: "2", name: "SADIQ AGHAMALIYEV", country: "az", photo: require('@/assets/myImages/man115Senior/2.jpg')},
        {id: "3", name: "RAFAEL SHOITI	TOGASHI", country: "br", photo: require('@/assets/myImages/man115Senior/3.jpg')},
        {id: "4", name: "CHAY HEXT", country: "gb", photo: require('@/assets/myImages/man115Senior/4.jpg')},
        {id: "5", name: "SIMEON	STANKOVICH", country: "bg", photo: require('@/assets/myImages/man115Senior/5.jpg')},
        {id: "6", name: "AGUSTIN GIMENEZ COMAS", country: "ca", photo: require('@/assets/myImages/blank.jpg')},
        {id: "7", name: "ANATOLI ZADOROŽNÕI", country: "ee", photo: require('@/assets/myImages/man115Senior/7.jpg')},
        {id: "8", name: "DAMIEN	LÉCOLE", country: "FRANCE", photo: require('@/assets/myImages/man115Senior/8.jpg')},
        {id: "9", name: "LORENZ MOOR", country: "de", photo: require('@/assets/myImages/man115Senior/9.jpg')},
        {id: "10", name: "DAVID MATE KOTRICZ", country: "hu", photo: require('@/assets/myImages/man115Senior/10.jpg')},
        {id: "11", name: "HAYATO MIWA", country: "jp", photo: require('@/assets/myImages/man115Senior/11.jpg')},
        {id: "12", name: "SULDE	DONGAK", country: "kg", photo: require('@/assets/myImages/man115Senior/12.jpg')},
        {id: "13", name: "BADRAL BAASANDORJ", country: "mn", photo: require('@/assets/myImages/man115Senior/13.jpg')},
        {id: "14", name: "KAROL	KὌNIG", country: "pl", photo: require('@/assets/myImages/man115Senior/14.jpg')},
        {id: "15", name: "CHENG-HAO CHEN", country: "tw", photo: require('@/assets/myImages/man115Senior/15.jpg')},
        {id: "16", name: "NEMATULLO ASRANKULOV", country: "tj", photo: require('@/assets/myImages/blank.jpg')},
        {id: "17", name: "VAZHA DAIAURI", country: "ua", photo: require('@/assets/myImages/man115Senior/17.jpg')},
        {id: "18", name: "SETH ADAMS", country: "us", photo: require('@/assets/myImages/man115Senior/18.jpg')},
        {id: "19", name: "BAKHODIR ASLONOV", country: "uz", photo: require('@/assets/myImages/man115Senior/19.jpg')},
        {id: "20", name: "FRANCISCO	MEDINA HERNANDEZ", country: "do", photo: require('@/assets/myImages/blank.jpg')},
    ],
    results: []

}

const m115upS ={
    name: "above 115kg",
    competitors: [
        {id: "1", name: "KHASAY YUSIFOV", country: "az", photo: require('@/assets/myImages/manHeavySenior/1.jpg')},
        {id: "2", name: "JOAREZ	SCHNEIDER", country: "br", photo: require('@/assets/myImages/manHeavySenior/2.jpg')},
        {id: "3", name: "GEORGE	YOUNG", country: "gb", photo: require('@/assets/myImages/manHeavySenior/3.jpg')},
        {id: "4", name: "FELIPE	CASTRO", country: "cl", photo: require('@/assets/myImages/manHeavySenior/4.jpg')},
        {id: "5", name: "LASHA	JELADZE", country: "ge", photo: require('@/assets/myImages/manHeavySenior/5.jpg')},
        {id: "6", name: "ALI ALEXANDROS	ISMAIL", country: "gr", photo: require('@/assets/myImages/manHeavySenior/6.jpg')},
        {id: "7", name: "ARTUR	VEGH", country: "hu", photo: require('@/assets/myImages/manHeavySenior/7.jpg')},
        {id: "8", name: "KOSEI	TAKEUCHI", country: "jp", photo: require('@/assets/myImages/blank.jpg')},
        {id: "9", name: "RASUL	ATAKUEV", country: "kg", photo: require('@/assets/myImages/manHeavySenior/9.jpg')},
        {id: "10", name: "AUGUSTINAS SENIAUSKAS", country: "lt", photo: require('@/assets/myImages/manHeavySenior/10.jpg')},
        {id: "11", name: "NARANBAYAR KHANGAI", country: "mn", photo: require('@/assets/myImages/manHeavySenior/11.jpg')},
        {id: "12", name: "MATEUSZ LINKA", country: "pl", photo: require('@/assets/myImages/manHeavySenior/12.jpg')},
        {id: "13", name: "CHENG-AN YANG", country: "tw", photo: require('@/assets/myImages/manHeavySenior/13.jpg')},
        {id: "14", name: "FOTEH	MUKHTOROV", country: "tj", photo: require('@/assets/myImages/manHeavySenior/14.jpg')},
        {id: "15", name: "WEERAPAT NISHIZAKI", country: "th", photo: require('@/assets/myImages/manHeavySenior/15.jpg')},
        {id: "16", name: "MYKHAILO SHAPOVALOV", country: "ua", photo: require('@/assets/myImages/manHeavySenior/16.jpg')},
        {id: "17", name: "JERREL	SCRIVEN", country: "us", photo: require('@/assets/myImages/manHeavySenior/17.jpg')},
        {id: "18", name: "MAKHMUDJON	MAKHSUDOV", country: "uz", photo: require('@/assets/myImages/manHeavySenior/18.jpg')},
        {id: "19", name: "ROBERTO DELIEN BATISTA", country: "do", photo: require('@/assets/myImages/blank.jpg')},
    ],
    results: []

}

const mOpenS ={
    name: "Open",
    competitors: [
        {id: "1", name: "JAVID	YUSIFOV", country: "az", photo: require('@/assets/myImages/manOpenSenior/1.jpg')},
        {id: "2", name: "KAIO	RUIZ DOS SANTOS SOARES", country: "br", photo: require('@/assets/myImages/manOpenSenior/2.jpg')},
        {id: "3", name: "JONATHAN	TEMPLETON", country: "gb", photo: require('@/assets/myImages/manOpenSenior/3.jpg')},
        {id: "4", name: "BADRI	KHATISKATSI", country: "ge", photo: require('@/assets/myImages/manOpenSenior/4.jpg')},
        {id: "5", name: "THOMAS	KRIEGEL", country: "de", photo: require('@/assets/myImages/manOpenSenior/5.jpg')},
        {id: "6", name: "ARNOLD	PAP", country: "hu", photo: require('@/assets/myImages/manOpenSenior/6.jpg')},
        {id: "7", name: "SHUN	IKEDA", country: "jp", photo: require('@/assets/myImages/manOpenSenior/7.jpg')},
        {id: "8", name: "NADYR	RASSUEV", country: "kg", photo: require('@/assets/myImages/manOpenSenior/8.jpg')},
        {id: "9", name: "SANCHIR ERDENEZAYA", country: "mn", photo: require('@/assets/myImages/blank.jpg')},
        {id: "10", name: "SIMEN	RAMSLAND", country: "no", photo: require('@/assets/myImages/manOpenSenior/10.jpg')},
        {id: "11", name: "JACEK	PIERSIAK", country: "pl", photo: require('@/assets/myImages/manOpenSenior/11.jpg')},
        {id: "12", name: "WEI-LUN TSAI", country: "tw", photo: require('@/assets/myImages/manOpenSenior/12.jpg')},
        {id: "13", name: "MUHAMMAD SAFAROV", country: "tj", photo: require('@/assets/myImages/blank.jpg')},
        {id: "14", name: "OLEKSANDR VERESIUK", country: "ua", photo: require('@/assets/myImages/manOpenSenior/14.jpg')},
        {id: "15", name: "ANGEL DE LA TORRE", country: "us", photo: require('@/assets/myImages/manOpenSenior/15.jpg')},
        {id: "16", name: "ELYOR	MASHARIPOV", country: "uz", photo: require('@/assets/myImages/manOpenSenior/16.jpg')},
    ],
    results: []

}

const mSenior ={
    name: "Senior",
    categories: [m85S, m100S,m115S,m115upS,mOpenS]
}

//women

const w60J ={
    name: "under 60kg",
    competitors: [{id: "1", name: "REBEKA YUMI SAKASHITA DOMINGOS", country: "br", photo: require('@/assets/myImages/women65Senior/1.jpg')},
    {id: "2", name: "MIHAELA HRISTOVA", country: "bg", photo: require('@/assets/myImages/women65Senior/2.jpg')},
    {id: "3", name: "KÄROL TAMSON", country: "ee", photo: require('@/assets/myImages/women65Senior/3.jpg')},
    {id: "4", name: "LUCIE FIEDLER", country: "de", photo: require('@/assets/myImages/women65Senior/4.jpg')},
    {id: "5", name: "KITTI BALJER", country: "hu", photo: require('@/assets/myImages/women65Senior/5.jpg')},
    {id: "6", name: "ROSALIA MUTOLO", country: "it", photo: require('@/assets/myImages/women65Senior/6.jpg')},
    {id: "7", name: "NENE YAMASHITA", country: "jp", photo: require('@/assets/myImages/women65Senior/7.jpg')},
    {id: "8", name: "RIKKE JUELL BUGGE", country: "no", photo: require('@/assets/myImages/women65Senior/8.jpg')},
    {id: "9", name: "ALEKSANDRA	KIERAKOWICZ", country: "pl", photo: require('@/assets/myImages/women65Senior/9.jpg')},
    {id: "10", name: "SZ-HUA WANG", country: "tw", photo: require('@/assets/myImages/women65Senior/10.jpg')},
    {id: "11", name: "MANZURA GADOEVA", country: "tj", photo: require('@/assets/myImages/women65Senior/11.jpg')},
    {id: "12", name: "SOFIIA KUSHNIR", country: "ua", photo: require('@/assets/myImages/women65Senior/12.jpg')},
    {id: "13", name: "MADISON GUIN", country: "us", photo: require('@/assets/myImages/women65Senior/13.jpg')},
    {id: "14", name: "BITALINA CANARIO CUEVAS", country: "do", photo: require('@/assets/myImages/blank.jpg')},
],
    results: []

}

const w75J ={
    name: "under 75kg",
    competitors: [{id: "1", name: "REBEKA YUMI SAKASHITA DOMINGOS", country: "br", photo: require('@/assets/myImages/women65Senior/1.jpg')},
        {id: "2", name: "MIHAELA HRISTOVA", country: "bg", photo: require('@/assets/myImages/women65Senior/2.jpg')},
        {id: "3", name: "KÄROL TAMSON", country: "ee", photo: require('@/assets/myImages/women65Senior/3.jpg')},
        {id: "4", name: "LUCIE FIEDLER", country: "de", photo: require('@/assets/myImages/women65Senior/4.jpg')},
        {id: "5", name: "KITTI BALJER", country: "hu", photo: require('@/assets/myImages/women65Senior/5.jpg')},
        {id: "6", name: "ROSALIA MUTOLO", country: "it", photo: require('@/assets/myImages/women65Senior/6.jpg')},
        {id: "7", name: "NENE YAMASHITA", country: "jp", photo: require('@/assets/myImages/women65Senior/7.jpg')},
        {id: "8", name: "RIKKE JUELL BUGGE", country: "no", photo: require('@/assets/myImages/women65Senior/8.jpg')},
        {id: "9", name: "ALEKSANDRA	KIERAKOWICZ", country: "pl", photo: require('@/assets/myImages/women65Senior/9.jpg')},
        {id: "10", name: "SZ-HUA WANG", country: "tw", photo: require('@/assets/myImages/women65Senior/10.jpg')},
        {id: "11", name: "MANZURA GADOEVA", country: "tj", photo: require('@/assets/myImages/women65Senior/11.jpg')},
        {id: "12", name: "SOFIIA KUSHNIR", country: "ua", photo: require('@/assets/myImages/women65Senior/12.jpg')},
        {id: "13", name: "MADISON GUIN", country: "us", photo: require('@/assets/myImages/women65Senior/13.jpg')},
        {id: "14", name: "BITALINA CANARIO CUEVAS", country: "do", photo: require('@/assets/myImages/blank.jpg')},
    ],
    results: []

}

const w75upJ ={
    name: "above 75kg",
    competitors: [{id: "1", name: "REBEKA YUMI SAKASHITA DOMINGOS", country: "br", photo: require('@/assets/myImages/women65Senior/1.jpg')},
        {id: "2", name: "MIHAELA HRISTOVA", country: "bg", photo: require('@/assets/myImages/women65Senior/2.jpg')},
        {id: "3", name: "KÄROL TAMSON", country: "ee", photo: require('@/assets/myImages/women65Senior/3.jpg')},
        {id: "4", name: "LUCIE FIEDLER", country: "de", photo: require('@/assets/myImages/women65Senior/4.jpg')},
        {id: "5", name: "KITTI BALJER", country: "hu", photo: require('@/assets/myImages/women65Senior/5.jpg')},
        {id: "6", name: "ROSALIA MUTOLO", country: "it", photo: require('@/assets/myImages/women65Senior/6.jpg')},
        {id: "7", name: "NENE YAMASHITA", country: "jp", photo: require('@/assets/myImages/women65Senior/7.jpg')},
        {id: "8", name: "RIKKE JUELL BUGGE", country: "no", photo: require('@/assets/myImages/women65Senior/8.jpg')},
        {id: "9", name: "ALEKSANDRA	KIERAKOWICZ", country: "pl", photo: require('@/assets/myImages/women65Senior/9.jpg')},
        {id: "10", name: "SZ-HUA WANG", country: "tw", photo: require('@/assets/myImages/women65Senior/10.jpg')},
        {id: "11", name: "MANZURA GADOEVA", country: "tj", photo: require('@/assets/myImages/women65Senior/11.jpg')},
        {id: "12", name: "SOFIIA KUSHNIR", country: "ua", photo: require('@/assets/myImages/women65Senior/12.jpg')},
        {id: "13", name: "MADISON GUIN", country: "us", photo: require('@/assets/myImages/women65Senior/13.jpg')},
        {id: "14", name: "BITALINA CANARIO CUEVAS", country: "do", photo: require('@/assets/myImages/blank.jpg')},
    ],
    results: []

}

const wOpenJ ={
    name: "Open",
    competitors: [{id: "1", name: "REBEKA YUMI SAKASHITA DOMINGOS", country: "br", photo: require('@/assets/myImages/women65Senior/1.jpg')},
        {id: "2", name: "MIHAELA HRISTOVA", country: "bg", photo: require('@/assets/myImages/women65Senior/2.jpg')},
        {id: "3", name: "KÄROL TAMSON", country: "ee", photo: require('@/assets/myImages/women65Senior/3.jpg')},
        {id: "4", name: "LUCIE FIEDLER", country: "de", photo: require('@/assets/myImages/women65Senior/4.jpg')},
        {id: "5", name: "KITTI BALJER", country: "hu", photo: require('@/assets/myImages/women65Senior/5.jpg')},
        {id: "6", name: "ROSALIA MUTOLO", country: "it", photo: require('@/assets/myImages/women65Senior/6.jpg')},
        {id: "7", name: "NENE YAMASHITA", country: "jp", photo: require('@/assets/myImages/women65Senior/7.jpg')},
        {id: "8", name: "RIKKE JUELL BUGGE", country: "no", photo: require('@/assets/myImages/women65Senior/8.jpg')},
        {id: "9", name: "ALEKSANDRA	KIERAKOWICZ", country: "pl", photo: require('@/assets/myImages/women65Senior/9.jpg')},
        {id: "10", name: "SZ-HUA WANG", country: "tw", photo: require('@/assets/myImages/women65Senior/10.jpg')},
        {id: "11", name: "MANZURA GADOEVA", country: "tj", photo: require('@/assets/myImages/women65Senior/11.jpg')},
        {id: "12", name: "SOFIIA KUSHNIR", country: "ua", photo: require('@/assets/myImages/women65Senior/12.jpg')},
        {id: "13", name: "MADISON GUIN", country: "us", photo: require('@/assets/myImages/women65Senior/13.jpg')},
        {id: "14", name: "BITALINA CANARIO CUEVAS", country: "do", photo: require('@/assets/myImages/blank.jpg')},
    ],
    results: []

}

const wJunior ={
    name: "Junior",
    categories: [w60J, w75J,w75upJ,wOpenJ]
}

const w65S ={
    name: "under 65kg",
    competitors: [{id: "1", name: "REBEKA YUMI SAKASHITA DOMINGOS", country: "br", photo: require('@/assets/myImages/women65Senior/1.jpg')},
        {id: "2", name: "MIHAELA HRISTOVA", country: "bg", photo: require('@/assets/myImages/women65Senior/2.jpg')},
        {id: "3", name: "KÄROL TAMSON", country: "ee", photo: require('@/assets/myImages/women65Senior/3.jpg')},
        {id: "4", name: "LUCIE FIEDLER", country: "de", photo: require('@/assets/myImages/women65Senior/4.jpg')},
        {id: "5", name: "KITTI BALJER", country: "hu", photo: require('@/assets/myImages/women65Senior/5.jpg')},
        {id: "6", name: "ROSALIA MUTOLO", country: "it", photo: require('@/assets/myImages/women65Senior/6.jpg')},
        {id: "7", name: "NENE YAMASHITA", country: "jp", photo: require('@/assets/myImages/women65Senior/7.jpg')},
        {id: "8", name: "RIKKE JUELL BUGGE", country: "no", photo: require('@/assets/myImages/women65Senior/8.jpg')},
        {id: "9", name: "ALEKSANDRA	KIERAKOWICZ", country: "pl", photo: require('@/assets/myImages/women65Senior/9.jpg')},
        {id: "10", name: "SZ-HUA WANG", country: "tw", photo: require('@/assets/myImages/women65Senior/10.jpg')},
        {id: "11", name: "MANZURA GADOEVA", country: "tj", photo: require('@/assets/myImages/women65Senior/11.jpg')},
        {id: "12", name: "SOFIIA KUSHNIR", country: "ua", photo: require('@/assets/myImages/women65Senior/12.jpg')},
        {id: "13", name: "MADISON GUIN", country: "us", photo: require('@/assets/myImages/women65Senior/13.jpg')},
        {id: "14", name: "BITALINA CANARIO CUEVAS", country: "do", photo: require('@/assets/myImages/blank.jpg')},
    ],
    results: []

}

const w73S ={
    name: "under 73kg",
    competitors: [{id: "1", name: "LUCIANA MONTGOMEY WATANABE HIGUCHI", country: "br", photo: require('@/assets/myImages/women73Senior/1.jpg')},
        {id: "2", name: "MERILY	VÄSTER", country: "ee", photo: require('@/assets/myImages/women73Senior/2.jpg')},
        {id: "3", name: "DROSOULA TZIANAKOPOULOU", country: "gr", photo: require('@/assets/myImages/women73Senior/3.jpg')},
        {id: "4", name: "LILLA KASZAS", country: "hu", photo: require('@/assets/myImages/women73Senior/4.jpg')},
        {id: "5", name: "ARIANNA VETTORI", country: "it", photo: require('@/assets/myImages/women73Senior/5.jpg')},
        {id: "6", name: "RIO HASEGAWA", country: "jp", photo: require('@/assets/myImages/women73Senior/6.jpg')},
        {id: "7", name: "MONIKA	SKIBA", country: "pl", photo: require('@/assets/myImages/women73Senior/7.jpg')},
        {id: "8", name: "HSIN-YEN KUO", country: "tw", photo: require('@/assets/myImages/women73Senior/8.jpg')},
        {id: "9", name: "RATA CHAORUNGMETEE", country: "th", photo: require('@/assets/myImages/women73Senior/9.jpg')},
        {id: "10", name: "TETIANA KARACHENKO", country: "ua", photo: require('@/assets/myImages/women73Senior/10.jpg')},
        {id: "11", name: "ASHLEY SMALLWOOD", country: "us", photo: require('@/assets/myImages/women73Senior/11.jpg')},
        {id: "12", name: "FARIDAKHON TULASHOVA", country: "uz", photo: require('@/assets/myImages/women73Senior/12.jpg')},
        {id: "13", name: "ALBANIA RODRIGUEZ PEREZ", country: "do", photo: require('@/assets/myImages/blank.jpg')}
    ],
    results: []

}
const w80S ={
    name: "under 80kg",
    competitors: [{id: "1", name: "GABRIELA GIGOVA", country: "bg", photo: require('@/assets/myImages/women80Senior/1.jpg')},
        {id: "2", name: "ROXANA	BALJER", country: "hu", photo: require('@/assets/myImages/women80Senior/2.jpg')},
        {id: "3", name: "SAKURA	ISHII", country: "jp", photo: require('@/assets/myImages/women80Senior/3.jpg')},
        {id: "4", name: "PERNILLE ROJAHN ODDLIEN", country: "no", photo: require('@/assets/myImages/women80Senior/4.jpg')},
        {id: "5", name: "OLIWIA	GLEGOLSKA", country: "pl", photo: require('@/assets/myImages/women80Senior/5.jpg')},
        {id: "6", name: "TING-YUN KUO", country: "tw", photo: require('@/assets/myImages/women80Senior/6.jpg')},
        {id: "7", name: "RATTANAPORN NOOKHWANKAEW", country: "th", photo: require('@/assets/myImages/women80Senior/7.jpg')},
        {id: "8", name: "DARIA KONSTANTYNOVA", country: "ua", photo: require('@/assets/myImages/women80Senior/8.jpg')},
        {id: "9", name: "LEAH MANCILLAS", country: "us", photo: require('@/assets/myImages/women80Senior/9.jpg')},
        {id: "10", name: "GULASALKHON KHAYDAROVA", country: "uz", photo: require('@/assets/myImages/women80Senior/10.jpg')},
        {id: "11", name: "ARGENTINA MARTINEZ RODRIGUEZ", country: "do", photo: require('@/assets/myImages/blank.jpg')},
        {id: "12", name: "SABRINA ZARIFZODA", country: "tj", photo: require('@/assets/myImages/blank.jpg')}
    ],
    results: []

}

export const w80upS ={
    name: "above 80kg",
    competitors: [{id: "1", name: "KAUANY RUIZ DOS SANTOS SOARES", country: "br", photo: require('@/assets/myImages/womenHeavySenior/1.jpg')},
        {id: "2", name: "MAERELIS LOPEZ ROSARIO", country: "do", photo: require('@/assets/myImages/blank.jpg')},
        {id: "3", name: "KAI KLIIMAN", country: "ee", photo: require('@/assets/myImages/womenHeavySenior/2.jpg')},
        {id: "4", name: "MARIA BERTOLA",	country: "it", photo: require('@/assets/myImages/womenHeavySenior/3.jpg')},
        {id: "5", name: "SHION OKURA", country: "jp", photo: require('@/assets/myImages/womenHeavySenior/4.jpg')},
        {id: "6", name: "NANDIN-ERDENE NYAMSUREN", country:"mn", photo: require('@/assets/myImages/womenHeavySenior/5.jpg')},
        {id: "7", name: "KARIN ALIDA BOINE",	country: "no", photo: require('@/assets/myImages/womenHeavySenior/6.jpg')},
        {id: "8", name: "WIOLETA ZAJĄC",	country: "pl", photo: require('@/assets/myImages/womenHeavySenior/7.jpg')},
        {id: "9", name: "SHU-CHING HSU", country: "tw", photo:require('@/assets/myImages/womenHeavySenior/8.jpg')},
        {id: "10", name: "VIRACHADA GONGGAEW", country: "th", photo:require('@/assets/myImages/womenHeavySenior/9.jpg')},
        {id: "11", name: "IVANNA BEREZOVSKA",	country: "ua", photo:require('@/assets/myImages/womenHeavySenior/10.jpg')},
        {id: "12", name: "KELLYANN BALL", country: "us", photo:require('@/assets/myImages/womenHeavySenior/11.jpg')}],
    results: []

}

const wOpenS ={
    name: "Open",
    competitors: [{id: "1", name: "VICTORIA	DEEJUA", country: "gb", photo: require('@/assets/myImages/womenOpenSenior/1.jpg')},
        {id: "2", name: "MARIETTE LIIGEND", country: "ee", photo: require('@/assets/myImages/womenOpenSenior/2.jpg')},
        {id: "3", name: "AIRI HISANO", country: "jp", photo: require('@/assets/myImages/womenOpenSenior/3.jpg')},
        {id: "4", name: "CATHRINE ALIDA	FRILSETH", country: "no", photo: require('@/assets/myImages/womenOpenSenior/4.jpg')},
        {id: "5", name: "ZUZANNA KRYSTEK", country: "pl", photo: require('@/assets/myImages/womenOpenSenior/5.jpg')},
        {id: "6", name: "LIN JIANG", country: "tw", photo: require('@/assets/myImages/womenOpenSenior/6.jpg')},
        {id: "7", name: "IRYNA PASICHNYK", country: "ua", photo: require('@/assets/myImages/womenOpenSenior/7.jpg')},
        {id: "8", name: "ETAN PEREZ", country: "us", photo: require('@/assets/myImages/womenOpenSenior/8.jpg')},
        {id: "9", name: "DURDONA ADUJABBOROVA", country: "uz", photo: require('@/assets/myImages/womenOpenSenior/9.jpg')}
],
    results: []

}

const wSenior ={
    name: "Senior",
    categories: [w65S, w73S,w80S,w80upS,wOpenS]
}

export const gender ={
    man: [mJunior, mSenior],
    woman: [wJunior, wSenior]
}

const chapterOneTitle ="Chapter 1 The Judges\n"

const chapterOneText ="Article 1 The judges of sumó matches shall be certified judges, selected by the Organizing Committee of the International Sumó Federation.\n" +
    "Article 2 1. A team of judges shall consist of a head judge, a gyóji (referee), and four judges, making a total of six judges. \n" +
    "2. The head judge shall take full responsibility for all decisions made pertaining to a match. \n" +
    "3. The gyóji assumes control of the match from the time the athletes enter the dohyó (ring) to the end of the match when they exit the \n" +
    "dohyó. \n" +
    "4. The responsibilities of the judges are to assist the head judge and to ensure that there are no errors in the decision. \n" +
    "5. The judge in the shómen (front) shall also function as the timekeeper. \n" +
    "Article 3 The manager of judges is responsible for executing all matters pertaining to general affairs in judging including assignment of \n" +
    "judges and referees. \n" +
    "Article 4. The dressing of the judges is as follows: \n" +
    "(1) The head judge and judges shall wear suits, white shirts and ties. (If the International Sumó Federation designates a particular jacket, \n" +
    "pants, or a tie, they shall be worn.) \n" +
    "(2) The gyóji shall wear white pants, white shirt and a black bow tie. \n" +
    "Article 5. When the head judge deems a judge or a referee to be unqualified he shall report the individual to the Competition Committee. \n" +
    "The Committee shall evaluate the individual and come to a decision which will be announced by the Committee's chairman. \n"

const chapterTwoTitle = "Chapter 2 Refereeing Rules\n"

const chapterTwoText="Article 6 1. The gyóji shall start a match by calling out \"Hakkeyoi\" the moment after each athlete simultaneously places his hands on the \n" +
    "dohyó and takes a breath. \n" +
    "2. The hands of the athletes shall be placed behind the shikirisen (starting lines). \n" +
    "3. When an athlete jumps off without waiting for the call, the gyóji shall call out \"Matta (Wait.)\" and re-do the tachiai (initial charge). \n" +
    "Article 7 1. When the head judge observes a false tachiai, he shall raise his right hand immediately and stop the match. \n" +
    "2. In the case of the above the tachiai shall be repeated immediately. \n" +
    "3. The decision on whether a tachiai was correctly or incorrectly carried out shall be left to the judgment of the head judge. \n" +
    "Article 8 With the exception of special rules, the following determines who is the winner of a match: \n" +
    "(1) The athlete who pushes his opponent out of the shobu-dawara (rice-bale boundary circle). \n" +
    "(2) The athlete who forces any part of his opponent's body, other than the soles of his feet, to touch the dohyó. \n" +
    "Article 9 1. When the opposing athlete is in shinitai (completely lost his center of balance), it is not a loss even if the following applies: \n" +
    "(1) An athlete touches the dohyó with his hand slightly before the opposing athlete. \n" +
    "(2) An athlete steps out of the dohyó slightly before the opposing athlete. 2. Above items (1) and (2) are referred to as kabaite and kabaiashi \n" +
    "respectively. \n" +
    "Article 10 It is okuriashi, which is not a loss, when an athlete steps out of the dohyó while lifting his opponent out of the dohyó with his legs \n" +
    "suspended in the air and puts him down outside of the shobu-dawara. However, he loses the match if he carries out the move by stepping \n" +
    "out of the dohyó backward. \n" +
    "Article II It is not a loss, if the orikomi (front fold) of a mawashi (loincloth belt) touches the dohyó. \n" +
    "Article 12 When a match is won using a throwing technique, etc., it is not a loss if the instep of the athlete who does the throwing curls in \n" +
    "and touches the dohyó. \n" +
    "Article 13 An athlete may be determined the loser of a match according to deliberations by the judges, if the following apply: \n" +
    "(1) If it has been determined that the athlete is no longer able to continue in the match due to injury. \n" +
    "(2) If it has been determined that the athlete has used kinjite (prohibited moves). \n" +
    "(3) If the athlete arbitrarily ends a match. \n" +
    "(4) If the judges have determined the athlete did not jump-off deliberately. \n" +
    "(5) If the athlete does not abide by the judges' instructions. \n" +
    "(6) If the maebukuro (front pouch part) of a mawashi becomes loosened and comes off during the match. \n" +
    "(7) If the athlete does not appear in dohyó-damari (waiting area) after being called twice by the broadcasting staff. \n" +
    "Article 14 When an athlete is injured during a match, the gyóji shall immediately stop the match and the judges must consult the medical \n" +
    "staff to decide whether or not the match may go on.\n" +
    "Article 15 The following moves are kinjite: \n" +
    "(1) Punching an opponent with a 6st or poking an opponent with a finger. \n" +
    "(2) Kicking an opponent in the chest or abdominal area. \n" +
    "(3) Grabbing an opponent's hair. \n" +
    "(4) Grabbing an opponent's throat \n" +
    "(5) Grabbing at the maebukuro or maetatemitsu (front part) of an opponent's mawashi or sticking a finger in through the side and pulling it \n" +
    "down. \n" +
    "(6) Bending back one or more fingers of an opponent. \n" +
    "(7) Biting an opponent \n" +
    "(8) Slapping the opponent's face with an arm outstretched more than a shoulder width \n" +
    "2. The gyóji shall stop the match immediately when kinjite are used in a match. \n" +
    "Article 16 The gyóji shall determine the winner at the instant a match is over no matter what unexpected way the match has finished or even \n" +
    "if it is difficult to give a decision. \n" +
    "Article 17 1. If the head judge or judges have an objection to the gyóji's decision, they shall raise their right hand immediately to lodge a \n" +
    "formal objection. \n" +
    "2. A judge may lodge an objection when he has been unable to confirm the gyóji's decision, due to the poor view of the match from his \n" +
    "viewing position. \n" +
    "3. The objections shall be made plainly and concisely and based on a clear kimarite (winning move). \n" +
    "4. No further objections may be raised once the gyóji has given the kachinanori (announced the winner) and the decision has been passed.\n" +
    "Article 18 1. When an objection has been raised, the judges shall immediately stand in the center of the dohyó to carry out their \n" +
    "deliberations. \n" +
    "2. The gyóji shall clearly explain his reasons for the decision as a point of reference for the deliberations . \n" +
    "3. A judge may exclude himself from the deliberations due to a poor viewing location or for other legitimate reasons. \n" +
    "4. A judge shall be careful not to advocate his decision too strongly, so as not to impede deliberations. \n" +
    "Article 19 1. The head judge shall make the final judgement on a decision following the deliberations.\n" +
    "2. In principle, the deliberations shall be decided by a majority vote of the judges (excluding the gyóji). \n" +
    "3. The head judge shall try to convince the minority vote of the validity of the decision. \n" +
    "Article 20 When the head judge and judges believe that a match has been won, but the gyóji allows the match to continue without calling out \n" +
    "a decision, the following measures shall, be taken:\n" +
    "(1) In the event of a fumikoshi (stepping over the dohyó) where there is a positive mark evidencing that a match has been won, a judge must \n" +
    "raise their right hand to express his objection. In this case, the head judge shall instruct the gyóji to stop the match and a decision shall be \n" +
    "made through deliberations. \n" +
    "(2) If there is no positive mark on the janome (sand around the dohyó) etc. indicating that a match has been won, an objection shall be \n" +
    "lodged at the end of the match and a decision shall be reached through deliberations. \n" +
    "Article 21 If a gyóji mistakenly calls out \"Shóbu atta (The match is won.)\" during the match, the head judge and judges shall lodge an \n" +
    "objection and a tori-naoshi (rematch) shall be called following deliberations. \n" +
    "Article 22 1. If a match continues for three minutes and there is no winner, it is stopped and a rematch shall be carried out.\n" +
    "2. At the signal of the judge keeping the time, the head judge shall instruct the gyóji to stop the match. \n"

const chapterThreeTitle="Chapter 3 Judges' Duties\n"

const chapterThreeText= "Article 23 Bearing in mind the great influence which their advice has on athlete and the general audience, judges shall strive to be fair and \n" +
    "neutral in their decisions and they shall never show any sign of oscillation or wavering. \n" +
    "Article 24 1. Judges shall also instruct athletes, in addition to judging and passing decisions on matches. \n" +
    "2. If any inappropriate speech or behavior are exhibited on the dohyó or in the dohyó-damari (waiting area), the judge shall immediately \n" +
    "warn the athlete. \n" +
    "Article 25 The judges are responsible for maintaining the condition of the dohyó in order to ensure that matches are carried out safely and \n" +
    "they shall take immediate corrective measures when needed. \n" +
    "Article 26 The gyóji shall be responsible for bringing the spirit of the two athletes and himself together at the tachiai. \n" +
    "Article 27 1. When a mawashi is loosened during the match, the referee shall call out \"Matta\" and stop the match temporarily, having the \n" +
    "athlete maintain the kumite (their positions) as is until the match is restarted. \n" +
    "2. The temporary stopping of the match shall be ordered when the athlete's offensive moves have stopped. \n" +
    "3. After tightening the mawashi and confirming with the judges that neither athlete moved the kumite, the gyóji shall place his hands on the \n" +
    "backs of both athletes, call out \"Hikimasuyo, Hikimasuyo,\" and resume the match by lightly hitting their backs with the call \"Hakkeyoi.\" \n" +
    "Article 28 When an athlete's move falls under either of the following, the gyóji shall instruct the athlete to let go. However, if it is difficult to \n" +
    "give the instruction at that time, he may forgo it.\n" +
    "(1) When an athlete grabs a tatemawashi (vertical part of mawashi), orikomi, a bandage or supporter,etc. \n" +
    "(2) When an athlete has a hold on his opponent in gassho (both arms wrapped around the opponent with hands gripped), the gyóji shall \n" +
    "instruct the athlete to unlock his hands. \n" +
    "Article 29 The responsibilities of the gyóji are as follows: \n" +
    "(1) When an athlete goes onto the dohyó and carries out the chirichózu (water purification) ritual, the gyóji shall position himself inside the \n" +
    "toku-dawara (privilege bale) in the muko-jomen (back) of the dohyó (henceforth referred to as the basic position). \n" +
    "(2) When the athletes move to the center of the dohyó, the gyóji shall simultaneously move two steps forward from the basic position. \n" +
    "(3) When the athletes take the sonkyo (squatting) position, the gyóji shall confirm that they have synchronized their breathing and call out \n" +
    "\"Kamaete (On your mark.)\" and move back one and a half steps to stand with legs apart. He shall then call out \"Te o tsuite. Mattanashi \n" +
    "(Hands down. Waiting time is over.)\" and slightly bend his knees, with both palms facing inward and slightly stretching the arms, he shall \n" +
    "urge on the tachiai and start the match with the call, \"Hakkeyoi.\" \n" +
    "(4) When the tachiai is not accomplished, the above procedure shall be repeated. \n" +
    "(5) The gyóji shall call out \"Madayo, Madayo (Not yet. Not yet.)\" to an athlete who places his hands on the dohyó before his opponent, to \n" +
    "insure he does not start the match unfairly. The gyóji shall indicate to the other athlete to put his hands on the dohyó by calling out \n" +
    "\"Hikimasuyo, Hikimasuyo (Get ready. Get ready.)\" and starting the match by calling \"Hakkeyoi\" after confirming that the athlete's hands are \n" +
    "on the dohyó. \n" +
    "(6) When both athletes begin the bout, the gyóji shall urge on the performance with the call, \"Nokotta\" or \"Hakkeyoi.\" \"Nokotta\" shall be \n" +
    "called out when an athlete puts a move on his opponent and \"Hakkeyoi\" is called out when both athletes are not moving. \n" +
    "(7) When a match is won,, the gyóji shall call out \"Shobu atta\"and he shall indicate the winner by pointing to the east or west side of the \n" +
    "dohyó with his hand. \n" +
    "(8) Prior to delivering the kachinanori, the gyóji shall return to the basic position and after both athletes have bowed to each other, he shall \n" +
    "call out, \"Higashi (or Nishi) no kachi (The winner is east (or west.))\" while pointing his hand at the winner who remains in the sonkyo \n" +
    "position. However, if a deliberation of judges is held, kachinanori shall be given after each judge has taken his seat after the deliberation. \n" +
    "Article 30 The gyóji shall observe the following when the match is in progress: \n" +
    "(1) The gyóji shall ensure that he does not step on the shobu-dawara or the janome. \n" +
    "(2) The gyóji shall see to it that he does not turn his back to the shómen. \n" +
    "(3) The actions of the gyóji shall be swift and nimble, in order not to obstruct the movements of the athlete. \n" +
    "(4) The gyóji shall be in a position, angle, or form where a decision can be clearly made. \n" +
    "Article 31 At the beginning and end of the team competition, the gyóji shall line up the athlete of the east and west and the athlete shall bow \n" +
    "at the command, \"Rei (Bow).\" The gyóji shall stand in the basic position during these standing courtesies. \n" +
    "Article 32 The judges shall line up in their designated places in the dohyó-damari and bow standing at the command of the gyóji when they \n" +
    "enter or exit. \n" +
    "Article 33 The judges shall rotate their positions according to the following rules: \n" +
    "(1) The judges for the first match shall stand and bow at their respective seats at the command of the gyóji. They shall then move to their \n" +
    "designated places in the dohyó-damari and line up there. \n" +
    "(2) The judges for the next match shall line up at the designated place in the dohyó-damari and shall stand and bow at the command of the \n" +
    "gyóji and move to their respective refereeing seat.\n" +
    "(3) When all judges have moved to their proper locations the gyóji for the next match shall give the command for standing courtesies and \n" +
    "the rotation is completed. \n" +
    "(4) The gyóji shall stand in the basic position when he gives the commands for standing courtesies as described in (1) and (3). \n"

const chapterFourTitle="Chapter 4 Revisions to the Regulations of Refereeing\n"
const chapterFourText="Article 34 Revisions to the refereeing regulations are made by the Competitions Committee and their recommendations are sent to the \n" +
    "Board of Directors of the International Sumó Federation for further deliberation and 6nal approval. \n" +
    "Supplementary Rules \n" +
    "These regulations shall take effect from April 1, 1997. \n" +
    "Supplementary Rules \n" +
    "These regulations shall take effect from October 22, 1998. "
export const rules ={
    chapterOneTitle,
    chapterOneText,
    chapterTwoTitle,
    chapterTwoText,
    chapterThreeTitle,
    chapterThreeText,
    chapterFourTitle,
    chapterFourText
}