// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const sitelist = [
  {
    id: 1,
    name: "Bet365",
    location: "international",
    usercount: 4589,
  },
  {
    id: 2,
    name: "SportyBet",
    location: "international",
    usercount: 4553,
  },
  {
    id: 3,
    name: "Hollywoodbets",
    location: "South Africa",
    usercount: 4368,
  },
  {
    id: 4,
    name: "Caliente",
    location: "Betano",
    usercount: 3150,
  },
  {
    id: 5,
    name: "Betano",
    location: "Brazil",
    usercount: 2210,
  },
  {
    id: 6,
    name: "Betking",
    location: "Nigeria",
    usercount: 2116,
  },
  {
    id: 7,
    name: "Bet9ja",
    location: "Nigeria",
    usercount: 2096,
  },
  {
    id: 8,
    name: "Betway",
    location: "South Africa",
    usercount: 1957,
  },
  {
    id: 9,
    name: "Betika",
    location: "international",
    usercount: 1729,
  },
  {
    id: 10,
    name: "Betnacional",
    location: "international",
    usercount: 1633,
  },
  {
    id: 11,
    name: "Stake",
    location: "international",
    usercount: 1509,
  },
  {
    id: 12,
    name: "Sisal",
    location: "Italy",
    usercount: 1050,
  },
  {
    id: 13,
    name: "Betfred",
    location: "UK",
    usercount: 1005,
  },
  {
    id: 14,
    name: "BetPlay",
    location: "Colombia",
    usercount: 966,
  },
  {
    id: 15,
    name: "MELbet",
    location: "international",
    usercount: 859,
  },
  {
    id: 16,
    name: "HKJC",
    location: "Hong Kong",
    usercount: 735,
  },
]

const popularsitelist = [
  {
    id: 1,
    name: "Bet365",
    location: "international",
    usercount: 4589,
  },
  {
    id: 2,
    name: "SportyBet",
    location: "international",
    usercount: 4553,
  },
  {
    id: 3,
    name: "Hollywoodbets",
    location: "South Africa",
    usercount: 4368,
  },
  {
    id: 4,
    name: "Caliente",
    location: "Betano",
    usercount: 3150,
  },
  {
    id: 5,
    name: "Betano",
    location: "Brazil",
    usercount: 2210,
  },
  {
    id: 6,
    name: "Betking",
    location: "Nigeria",
    usercount: 2116,
  },
  {
    id: 7,
    name: "Bet9ja",
    location: "Nigeria",
    usercount: 2096,
  },
  {
    id: 8,
    name: "Betway",
    location: "South Africa",
    usercount: 1957,
  },
  {
    id: 9,
    name: "Betika",
    location: "international",
    usercount: 1729,
  },
  {
    id: 10,
    name: "Betnacional",
    location: "international",
    usercount: 1633,
  },
]

const todayevent =[
  {
    id:1,
    teamlogo1: "/teamlogo/Barcelona.png",
    teamlogo2: "/teamlogo/Real_Madrid.png",
    teamname1: "Barcelona",
    teamname2: "Real Madrid",
    time: "19 : 00",
    amount: "300K"
  },
  {
    id:2,
    teamlogo1: "/teamlogo/AC_Milan.png",
    teamlogo2: "/teamlogo/inter-milan.png",
    teamname1: "AC Milan",
    teamname2: "Inter Milan",
    time: "19 : 20",
    amount: "152K"
  },
  {
    id:3,
    teamlogo1: "/teamlogo/Lyon.png",
    teamlogo2: "/teamlogo/psg.png",
    teamname1: "Lyon",
    teamname2: "Pari SG",
    time: "19 : 30",
    amount: "169K"
  },
  {
    id:4,
    teamlogo1: "/teamlogo/Ajax.png",
    teamlogo2: "/teamlogo/Benfica.png",
    teamname1: "Ajax",
    teamname2: "Benfica",
    time: "20 : 00",
    amount: "201K"
  },
  {
    id:5,
    teamlogo1: "/teamlogo/Villarreal.png",
    teamlogo2: "/teamlogo/Real_Sociedad.png",
    teamname1: "Villarreal",
    teamname2: "Real Sociedad",
    time: "20 : 30",
    amount: "231K"
  },
  {
    id:6,
    teamlogo1: "/teamlogo/Real_Valladolid.png",
    teamlogo2: "/teamlogo/liverpool.png",
    teamname1: "Real Valladolid",
    teamname2: "Liverpool",
    time: "21 : 00",
    amount: "130K"
  },
  {
    id:7,
    teamlogo1: "/teamlogo/Napoli.png",
    teamlogo2: "/teamlogo/Juventus.png",
    teamname1: "Napoli",
    teamname2: "Juventus",
    time: "20 : 30",
    amount: "200K"
  },
  {
    id:8,
    teamlogo1: "/teamlogo/manchester-united.png",
    teamlogo2: "/teamlogo/manchester-city.png",
    teamname1: "Manchester United",
    teamname2: "Manchester City",
    time: "20 : 30",
    amount: "270K"
  },
]

const matchlist =[
  {
    id:1,
    teamlogo1: "/teamlogo/AC_Milan.png",
    teamlogo2: "/teamlogo/Real_Madrid.png",
    teamname1: "AC Milan",
    teamname2: "Real Madrid",
    time: "19 : 00",
  },
  {
    id:2,
    teamlogo1: "/teamlogo/Barcelona.png",
    teamlogo2: "/teamlogo/inter-milan.png",
    teamname1: "Barcelona",
    teamname2: "Inter Milan",
    time: "19 : 20",
  },
  {
    id:3,
    teamlogo1: "/teamlogo/Lyon.png",
    teamlogo2: "/teamlogo/psg.png",
    teamname1: "Lyon",
    teamname2: "Pari SG",
    time: "19 : 30",
  },
  {
    id:4,
    teamlogo1: "/teamlogo/Ajax.png",
    teamlogo2: "/teamlogo/Benfica.png",
    teamname1: "Ajax",
    teamname2: "Benfica",
    time: "20 : 00",
  },
  {
    id:5,
    teamlogo1: "/teamlogo/Villarreal.png",
    teamlogo2: "/teamlogo/Real_Sociedad.png",
    teamname1: "Villarreal",
    teamname2: "Real Sociedad",
    time: "20 : 30",
  },
  {
    id:6,
    teamlogo1: "/teamlogo/Real_Valladolid.png",
    teamlogo2: "/teamlogo/liverpool.png",
    teamname1: "Real Valladolid",
    teamname2: "Liverpool",
    time: "21 : 00",
  },
  {
    id:7,
    teamlogo1: "/teamlogo/Napoli.png",
    teamlogo2: "/teamlogo/Juventus.png",
    teamname1: "Napoli",
    teamname2: "Juventus",
    time: "20 : 30",
  },
  {
    id:13,
    teamlogo1: "/teamlogo/Real_Valladolid.png",
    teamlogo2: "/teamlogo/liverpool.png",
    teamname1: "Real Valladolid",
    teamname2: "Liverpool",
    time: "21 : 00",
  },
  {
    id:8,
    teamlogo1: "/teamlogo/manchester-united.png",
    teamlogo2: "/teamlogo/manchester-city.png",
    teamname1: "Manchester United",
    teamname2: "Manchester City",
    time: "20 : 30",
  },
  {
    id:9,
    teamlogo1: "/teamlogo/Villarreal.png",
    teamlogo2: "/teamlogo/Real_Sociedad.png",
    teamname1: "Villarreal",
    teamname2: "Real Sociedad",
    time: "20 : 30",
  },
  {
    id:10,
    teamlogo1: "/teamlogo/Real_Valladolid.png",
    teamlogo2: "/teamlogo/liverpool.png",
    teamname1: "Real Valladolid",
    teamname2: "Liverpool",
    time: "21 : 00",
  },
  {
    id:11,
    teamlogo1: "/teamlogo/Napoli.png",
    teamlogo2: "/teamlogo/Juventus.png",
    teamname1: "Napoli",
    teamname2: "Juventus",
    time: "20 : 30",
  },
  {
    id:12,
    teamlogo1: "/teamlogo/manchester-united.png",
    teamlogo2: "/teamlogo/manchester-city.png",
    teamname1: "Manchester United",
    teamname2: "Manchester City",
    time: "20 : 30",
  },
]

module.exports = {
  users,
  customers,
  invoices,
  revenue,
  sitelist,
  popularsitelist,
  todayevent,
  matchlist
};
