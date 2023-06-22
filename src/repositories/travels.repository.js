import connection from "../database/database.js";

export async function getTravelsDB(page){
    const offset = (page - 1) * 25;
    
    const result = await connection.query(`
        select p."fullName" as "passenger", COUNT(p) as "travels"  from passengers as p
        JOIN passenger_travels ON passenger_travels."passengerId" = p.id
        JOIN travels ON travels.id = passenger_travels."travelId"
        WHERE p."fullName" like '%Brooke%'
        GROUP BY p."fullName" 
        ORDER BY "travels" desc 
        Limit 25 offset $1;
    `, [offset]);
    return result;
}