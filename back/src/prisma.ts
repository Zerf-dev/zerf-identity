import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: [{ level: 'query', emit: 'event' }],
    })
  }
  async onModuleInit() {
    this.$on('query' as any, (event: any) => {
      console.log(`Query ${event.query} took ${event.duration}ms`)
    })
    /***********************************/
    /* SOFT DELETE MIDDLEWARE */
    // TODO REVISIT THIS
    /***********************************/

    //   this.$use(async (params, next) => {
    //     if (params.action === 'findUnique' || params.action === 'findFirst') {
    //       // Change to findFirst - you cannot filter
    //       // by anything except ID / unique with findUnique
    //       params.action = 'findFirst'
    //       // Add 'deleted' filter
    //       // ID filter maintained
    //       params.args.where['deletedAt'] = null
    //     }
    //     if (params.action === 'findMany') {
    //       // Find many queries
    //       if (params.args?.where?.withDeleted) {
    //         // Exclude deleted records if they have not been explicitly requested
    //         params.args.where['deletedAt'] = null
    //       } else {
    //         if (!params.args) {
    //           params.args = { where: { deletedAt: null } }
    //         } else if (!params.args.where) {
    //           params.args.where = { deletedAt: null }
    //         } else {
    //           params.args.where = { ...params.args.where, deletedAt: null }
    //         }
    //       }
    //     }
    //     return next(params)
    //   })

    //   this.$use(async (params, next) => {
    //     if (params.action == 'update') {
    //       // Change to updateMany - you cannot filter
    //       // by anything except ID / unique with findUnique
    //       params.action = 'updateMany'
    //       // Add 'deleted' filter
    //       // ID filter maintained
    //       params.args.where['deletedAt'] = null
    //     }
    //     if (params.action == 'updateMany') {
    //       if (!params.args) {
    //         params.args = { where: { deletedAt: null } }
    //       } else if (!params.args?.where) {
    //         params.args.where = { deletedAt: null }
    //       } else {
    //         params.args.where = { ...params.args.where, deletedAt: null }
    //       }
    //     }
    //     return next(params)
    //   })

    //   this.$use(async (params, next) => {
    //     if (params.action === 'delete' && !params.args.hardDelete) {
    //       params.action = 'update'
    //       params.args['data'] = { deletedAt: new Date() }
    //     }
    //     if (params.action == 'deleteMany' && !params.args.hardDelete) {
    //       params.action = 'updateMany'
    //       if (params.args?.data != undefined) {
    //         params.args.data['deletedAt'] = new Date()
    //       } else {
    //         params.args['data'] = { deletedAt: new Date() }
    //       }
    //     }
    //     return next(params)
    //   })

    await this.$connect()
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }
}
