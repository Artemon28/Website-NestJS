import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from '@prisma/client'
import { Ticket, Tribune } from '@prisma/client'
import { UserService } from "./user.service";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('user and ticket')
@Controller('/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @ApiOperation({
    summary: 'Create user'
  })
  @Post()
  public createUser(@Body() creatUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(creatUserDto);
  }

  @ApiOperation({
    summary: 'Get name of user'
  })
  @Get(':id')
  public getUser(@Param('id') id: string): Promise<User> {
    return this.userService.getUser( { id: Number(id) });
  }

  @ApiOperation({
    summary: 'Add name of user'
  })
  @Put(':id/:name')
  public addUserName(@Param('id') id: string, @Param('name') name: string): Promise<User> {
    return this.userService.addUserName({
      where: { id: Number(id) },
      data: { name: name },
    });
  }

  // @ApiOperation({
  //   summary: 'User buying ticket'
  // })
  // @Put()
  // public buyTicket(tribuneId: number, sectorId: number, rowId: number, seatId: number): Promise<Ticket> {
  //   return this.userService.buyTicket(tribuneId, sectorId, rowId, seatId);
  // }

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
  @Delete(':id')
  public removeUser(@Param('id') id: string): Promise<User>{
    return this.userService.removeUser({ id: Number(id) });
  }
}