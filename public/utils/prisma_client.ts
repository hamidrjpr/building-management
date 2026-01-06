import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connection_string = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg(connection_string);
const prisma = new PrismaClient({ adapter, log: ["query"] });

export default prisma;

