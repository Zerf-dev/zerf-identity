import { Body, Controller, Get, NotFoundException, Post, Put } from '@nestjs/common';
import { User } from '@prisma/client';
import { generateAvatar, mapUserDataToString } from './avatar.service';
import { PrismaService } from './prisma';
import { uploadImage } from './upload.service';

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

  @Put('prompt')
  async setPrompt(@Body('email') email: string, @Body('prompt') prompt: string) {
    return this.prisma.user.update({
      where: {
        email
      },
      data: {
        promp: prompt
      }
    })
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
  
    await generateAvatar(user.promp)
    const uploadedAvatar = await uploadImage('avatar.jpg', user.name)

    await this.prisma.user.update({
      where: {
        email
      },
      data: {
        avatarUrl: uploadedAvatar
      }
    })
    return uploadedAvatar
  }

  @Put('user/data')
  async updateUserData(@Body('email') email: string, @Body('data') data: any) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: {
        email
      }
    })
    if(!user.userDataId) {
      const createdData = await this.prisma.userData.create({
        data
      })
      await this.prisma.user.update({
        where: {
          email
        },
        data: {
          userDataId: createdData.id
        }
      })
      return createdData
    } else {
    return this.prisma.userData.update({
      where: {
        id: user.userDataId,
      },
      data
    })}
  }

  @Get('avatars')
  async getAll() {
    const users = await this.prisma.user.findMany()
    return users.map(u => ({avatar:u.avatarUrl, name: u.name, email: u.email}))
  }
}
