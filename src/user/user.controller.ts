import { Body, Controller, Delete, Get, Param, Post, Put, Session, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from '@prisma/client'
import { Ticket } from '@prisma/client'
import { UserService } from "./user.service";
import { ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../auth/auth.guard";
import { SessionContainer } from "supertokens-node/recipe/session";

@ApiTags('User')
@Controller('/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @ApiOperation({
    summary: 'Create user'
  })
  @ApiResponse({
    status: 201,
    description: 'The user have been successfully created.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Post()
  public createUser(@Body() creatUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(creatUserDto);
  }


  @ApiOperation({
    summary: 'Get user'
  })
  @ApiResponse({
    status: 200,
    description: 'user information received successfully'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Get(':id')
  public getUser(@Param('id') id: string): Promise<User> {
    return this.userService.getUser( { id: Number(id) });
  }


  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Add name of user'
  })
  @ApiResponse({
    status: 200,
    description: 'the user name has been successfully updated'
  })
  @ApiResponse({
    status: 404,
    description: 'no user with this id number'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Put(':id')
  public async addUserName(@Session() session: SessionContainer, @Param('id') id: number, @Body() creatUserDto: CreateUserDto): Promise<User> {
    return this.userService.addUserName({ id }, { creatUserDto})
  };


  @ApiOperation({
    summary: 'User buying ticket'
  })
  @ApiResponse({
    status: 200,
    description: 'ticket successfully purchased'
  })
  @ApiResponse({
    status: 404,
    description: 'no user with this id number'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Put('/:id/ticket')
  public addTicket(@Param('id') id: string, ticket: Ticket): Promise<User> {
    return this.userService.buyTicket({ id: Number(id) }, ticket);
  }


  @ApiOperation({
    summary: 'Delete this user'
  })
  @ApiResponse({
    status: 200,
    description: 'user successfully removed'
  })
  @ApiResponse({
    status: 404,
    description: 'no user with this id number'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Delete()
  public removeUser(id: number): Promise<User>{
    return this.userService.removeUser(id);
  }
}