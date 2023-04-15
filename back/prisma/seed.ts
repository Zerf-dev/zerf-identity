import { PrismaClient } from '@prisma/client'
import { batchedPromiseAll } from 'batched-promise-all'
const prisma = new PrismaClient()

export const users = [{
    email: 'leonardo.guerberg@zerf.tech',
},
{
    email: 'lucas.cheistwer@zerf.tech',
},
{
    email: 'carolina.teper@zerf.tech',
},
{
    email: 'javier.valese@zerf.tech',
},{
    email: 'maximiliano.kallenbach@zerf.tech',
},{
    email: 'pablo.revale@zerf.tech',
},{
    email: 'santiago.nucera@zerf.tech',
},{
    email: 'gonzalo.escandarani@zerf.tech',
}]

async function main() {
    await batchedPromiseAll(users, u => {
        return prisma.user.upsert({
            where: {
                email: u.email,
            }, 
            update: {
                name: `${u.email.split('.')[0].toUpperCase()} ${u.email.split('.')[1].toUpperCase()}`,
                email: u.email,
                avatarUrl: '',
                password: u.email,
            },
            create: {
                name: `${u.email.split('.')[0].toUpperCase()} ${u.email.split('.')[1].toUpperCase()}`,
                email: u.email,
                avatarUrl: '',
                password: u.email,
            }
        })
    }, 1)
}
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })