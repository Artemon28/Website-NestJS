import { Body, Controller, Delete, Get, NotImplementedException, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaClient } from '@prisma/client'
import { User } from '@prisma/client'
import { Ticket } from '@prisma/client'
import { UserService } from "./user.service";
import { ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";

const prisma = new PrismaClient()

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
  @Post()
  public createUser(@Body() creatUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(creatUserDto);
  }


  @ApiOperation({
    summary: 'Get name of user'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get()
  public getUserName(id: number): string{
    return this.userService.getUserName(id);
  }

  @ApiOperation({
    summary: 'Add name of user'
  })
  @ApiParam({ name: 'username', type: 'string' })
  @ApiResponse({
    status: 201,
    description: 'Name had been added successfully'
  })
  @Put()
  public addUserName(id: number, name: string): Promise<User> {
    return this.userService.addUserName(id, name);
  }

  @ApiOperation({
    summary: 'User buying ticket'
  })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: 201,
    description: 'Ticket had been bought successfully'
  })
  @Put()
  public buyTicket(id: number, ticket: Ticket): Promise<User>{
    return this.userService.buyTicket(id, ticket);
  }

  @Delete()
  public removeUser(id: number): Promise<User>{
    return this.userService.removeUser(id);
  }
}