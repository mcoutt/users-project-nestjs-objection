import { Body, Controller, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {
  }

  @Post()
  async create(@Body() props) {
    const propsUser = props.nickName
    const propsComment = { "comment": props.comment }
    return this.commentsService.create(propsUser, propsComment);
  }
}
