import {Client} from 'pg'


export const client = new Client({
    connectionString: "postgres://default:9Njr7CnPDIkH@ep-withered-star-a48uq363-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    ssl: {
        rejectUnauthorized: false
    }
});
