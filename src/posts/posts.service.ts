import { Injectable } from '@nestjs/common'

@Injectable()
export class PostsService {
  getPosts() {
    return 'All Posts'
  }

  getPostDetail(id: string) {
    return `Detail of ${id}`
  }

  createPost(body: any) {
    return `Create post with ${JSON.stringify(body)}`
  }

  updatePost(id, body: any) {
    return `Update post ${id} to ${JSON.stringify(body)}`
  }

  deletePost(id: string) {
    return `Delete post ${id}`
  }
}
