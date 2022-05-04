import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./dto/create-user.dto";
import { User } from '@prisma/client'
import { UserService } from "./user.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../role/role.decorator";
import { RolesGuard } from "../role/role.guard";

@ApiTags('User')
@UseGuards(RolesGuard)
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
  @Roles('admin')
  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.getUser({ id });
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
  @Roles('AuthUser')
  @Put(':id')
  public addUserName(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.addUserName({ id }, updateUserDto);
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
  @Roles('AuthUser')
  @Put('/:id/ticket/:ticketId')
  public addTicket(@Param('id', ParseIntPipe) id: number, @Param('ticketId') ticket: string): Promise<User> {
    return this.userService.addTicket({ id }, { id: Number(ticket) });
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
  @Roles('AuthUser')
  @Delete(':id')
  public removeUser(@Param('id', ParseIntPipe) id: number): Promise<User>{
    return this.userService.removeUser({ id });
  }
}