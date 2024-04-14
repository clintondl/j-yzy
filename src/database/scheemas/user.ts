import { json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";


export const user=pgTable("user",{
    address:text("address").notNull().primaryKey(),
    stake_ids:json('stake_ids').$type<string[]>()
})