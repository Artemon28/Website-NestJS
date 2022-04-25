import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from '@prisma/client'
import { Ticket } from '@prisma/client'
import { UserService } from "./user.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

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
  @Put(':id/name')
  public addUserName(@Param('id') id: string, @Param('name') name: string): Promise<User> {
    return this.userService.addUserName({ id: Number(id) }, name);
  }


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
  @Put(':id')
  public addTicket(@Param('id') id: string, ticket: Ticket): Promise<User> {
    return this.userService.buyTicket({ id: Number(id) }, ticket);
  }


  @ApiOperation({
    summary: 'Remove ticket from user'
  })
  @ApiResponse({
    status: 200,
    description: 'ticket successfully removed from user'
  })
  @ApiResponse({
    status: 404,
    description: 'no user with this id number or ticket is incorrect'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Put(':id')
  public removeTicket(@Param('id') id: string, ticket: Ticket): Promise<User> {
    return this.userService.removeTicket({ id: Number(id) }, ticket);
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