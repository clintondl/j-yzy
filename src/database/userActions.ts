// import { sql } from "@vercel/postgres"
// import { client } from "./connection";

//export async function addNewStake(address:string,_id:string){
    // const query=`DO
    // $$
    // BEGIN
    //     IF NOT EXISTS (SELECT 1 FROM users WHERE address = '${address}') THEN
    //         INSERT INTO users (address, stake_ids) VALUES ('${address}', ARRAY['${_id}']);
    //     ELSE
    //         UPDATE users SET stake_ids = array_append(stake_ids, '${_id}') WHERE address = '${address}';
    //     END IF;
    // END
    // $$;`

    // try{
    //     console.log("adding stake to db")
    //     await client.query(query);
    //     console.log("successfully added")
    //     return true;
    // }catch(err){
    //     console.log("Error in inserting staked token",err);
    //     return Error(err);
    // }
//}

// export async function deleteStake(address:string,_id:string){
//     const query=`DO
//     $$
//     BEGIN
//         IF (SELECT array_length(stake_ids, 1) FROM users WHERE address = 'target_address') = 1 THEN
//             DELETE FROM users WHERE address = 'target_address';
//         ELSE
//             UPDATE users SET stake_ids = array_remove(stake_ids, 'id_to_remove') WHERE address = 'target_address';
//         END IF;
//     END
//     $$;
//     `

//     try{
//         console.log("deleting stake from db")
//         await client.query(query);
//         console.log("successfully deleted")
//         return true
//     }catch(err){
//         console.log("Erro in deleting stake ...",err)
//         return Error(err);
//     }
// }

const apiUrl="http://localhost:8000"

export async function getStakes(address:string){
    const api=await fetch(apiUrl+"/stakes/"+address,{
    headers: {
        'Content-Type': 'application/json'
    }})
    if(api.ok){
        const res=await api.json();
        return res
    }else{
        return Error(api.statusText)
    }
}
export async function deleteAStake(address:string,id:string){
    console.log("deleting stake from db", address, id)
    const api=await fetch(apiUrl+"/unstake",{
    headers: {
        'Content-Type': 'application/json'
    },
    method:"POST",
    body: JSON.stringify({address: address, id: id})
    // body: JSON.stringify({address: wallet.address, stake: {id:uid,stake:amount,reward:10,duration:pool.duration,stakedAt:"now"}})
    })

    return api;
}

export async function addStake(address:string,id:string){
    console.log("Adding stake to db" ,address,id)
    const api=await fetch(apiUrl+"/stake",{
            headers: {
              'Content-Type': 'application/json'
            },
            method:"POST",
            body: JSON.stringify({address: address, id: id})
            // body: JSON.stringify({address: wallet.address, stake: {id:uid,stake:amount,reward:10,duration:pool.duration,stakedAt:"now"}})
    })

    return api;
}