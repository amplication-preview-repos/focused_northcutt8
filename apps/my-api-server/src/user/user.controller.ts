import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserService } from "./user.service";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController {
  constructor(protected readonly service: UserService) {}

  @common.Post("/:id/send-msg")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendMsg(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SendMsg(body);
      }
}
