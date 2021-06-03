// import {useState, useEffect} from 'react';  Refactored See seeStats.js

// function useStats() {
//     const [stats, setStats] = useState();
//     useEffect(()=> {
//     async function fetchData() {
//         console.log('Fetching the Data');
//         const data = await fetch('https://covid19.mathdro.id/api').then(res => res.json()
//             );
//             setStats(data);
//         }
//         fetchData();
//     }, []);
//     return stats; /*Return the Stats from the Hook */
// }


// REFACTORED FOR COMPONENT
import useStats from '../utils/useStats';
import Stats from '../components/Stats';

// function Stats() {
//     const stats = useStats('https://covid19.mathdro.id/api');
//     if(!stats)return<p>Loading...</p>;
//     console.log(stats);
//     return (
//         <div>
//             {/* <p>Stats</p> */}
//             <div className="statBlock">
//                 <h3>Confirmed</h3>
//                 <span>{stats.confirmed.value}</span>
//             </div>
//             <div className="statBlock">
//                 <h3>Deaths</h3>
//                 <span>{stats.deaths.value}</span>
//             </div>
//             <div className="statBlock">
//                 <h3>Recovered</h3>
//                 <span>{stats.recovered.value}</span>
//             </div>
//         </div>
//     );
// }



export default function IndexPage(){
    return (
        <div>
            <Stats></Stats>
        </div>
    );
}

