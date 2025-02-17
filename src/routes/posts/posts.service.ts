/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/services/prisma.service'

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  getPosts() {
    return this.prismaService.post.findMany()
  }

  getPostDetail(id: string) {
    return `Detail of ${id}`
  }

  createPost(body: any) {
    return this.prismaService.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: 1,
      },
    })
  }

  updatePost(id, body: any) {
    return `Update post ${id} to ${JSON.stringify(body)}`
  }

  deletePost(id: string) {
    return `Delete post ${id}`
  }
}
