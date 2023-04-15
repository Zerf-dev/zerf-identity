import { Body, Controller, Get, NotFoundException, Post, Put } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Post('login')
  async login(@Body('email') email: string, @Body('pass') pass: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    })
    if(!user) {
      throw new NotFoundException()
    }
    if(user.password !== pass) {
      throw new NotFoundException()
    }
    return user
  }

  @Post('avatar/generate')
  async generateAvatar(@Body('email') email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      },
      include: {
        data: true
      }
    }
    )
    if(!user) {
      throw new NotFoundException()
    }
  
    // const avatar = generateAvatar(user.data)
    // const uploadedAvatar = upload(avatar)
    const avatar = 'avatar.jpg'
    await this.prisma.user.update({
      where: {
        email
      },
      data: {
        avatarUrl: avatar
      }
    })
    return avatar
  }

  @Put('user/data')
  async updateUserData(@Body('email') email: string, @Body('data') data: any) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: {
        email
      }
    })
    return this.prisma.userData.update({
      where: {
        id: user.userDataId,
      },
      data
    })
  }

  @Get('avatars')
  async getAll() {
    const users = await this.prisma.user.findMany()
    return users.map(u => u.avatarUrl)
  }
}
