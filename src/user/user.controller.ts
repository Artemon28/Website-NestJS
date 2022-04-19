import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from '@prisma/client'
import { Ticket, Tribune } from '@prisma/client'
import { UserService } from "./user.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('user and ticket')
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
  @Get(':id')
  public getUserName(@Param('id') id: number): string{
    return this.userService.getUserName(id);
  }

  @ApiOperation({
    summary: 'Add name of user'
  })
  @ApiResponse({
    status: 201,
    description: 'Name had been added successfully'
  })
  @Put(':name')
  public addUserName(@Param('name') name: string): Promise<User> {
    return this.userService.addUserName(name);
  }

  @ApiOperation({
    summary: 'User buying ticket'
  })
  @ApiResponse({
    status: 201,
    description: 'Ticket had been bought successfully'
  })
  @Put()
  public buyTicket(tribuneId: number, sectorId: number, rowId: number, seatId: number): Promise<Ticket> {
    return this.userService.buyTicket(tribuneId, sectorId, rowId, seatId);
  }

  @ApiOperation({
    summary: 'Remove ticket from user'
  })
  @Put()
  public removeTicket(ticketId: number): Promise<Ticket> {
    return this.userService.removeTicket(ticketId);
  }

  @ApiOperation({
    summary: 'Delete this user'
  })
  @Delete()
  public removeUser(id: number): Promise<User>{
    return this.userService.removeUser(id);
  }
}