import { Test } from '@nestjs/testing';
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserModule } from "./user.module";
import { Ticket } from "@prisma/client";


describe('UserModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    expect(module).toBeDefined();
    expect(module.get(UserService)).toBeInstanceOf(UserService);
  });
});


describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  const mockUserService = {
    create: jest.fn((dto) => {
      return {
        name: dto.name,
        id: dto.id,
        email: dto.email,
        ...dto
      }
    }),

    addName: jest.fn((id, dto) => {
      return {
        name: dto.name,
        id: id,
        email: "artemon26@mail.ru",
        ...dto
      }
    }),

    addTicket: jest.fn((id, ticketId) => {
      return {
        name: 'Artemon',
        id: id,
        email: "artemon26@mail.ru",
      }
    }),

    getUser: jest.fn((id) => {
      return {
        id: id,
        name: 'Artemon',
        email: "artemon26@mail.ru",
      }
    }),

    removeUser: jest.fn((id) => {
      return {
        id: id,
        name: 'Artemon',
        email: "artemon26@mail.ru",
      }
    }),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    userService = moduleRef.get<UserService>(UserService);
    userController = moduleRef.get<UserController>(UserController);
  });

  it('should create and return user', () =>{
    const dto = {
      name: null,
      email: 'artemon26@mail.ru',
      id: 'userId'
    };
    expect(userController.createUser(dto)).toEqual({
      name: null,
      id: dto.id,
      email: dto.email,
    })

    expect(mockUserService.create).toHaveBeenCalledWith(dto);
  });

  it('should return user by id', () =>{
    expect(userController.getUser('userId')).toEqual({
      id: {id: 'userId'},
      name: expect.any(String),
      email: expect.any(String),
    })

    expect(mockUserService.getUser).toHaveBeenCalledWith({id: 'userId'});
  });

  it( 'it should update name of user', () => {
    const dto = {name: 'Artemon'};
    expect(userController.addUserName('userId', dto)).toEqual({
      id: {id: 'userId'},
      name: dto.name,
      email: expect.any(String),
    })

    expect(mockUserService.addName).toHaveBeenCalledWith({id: 'userId'}, dto);
  })



  it('should delete user and return its', () =>{
    expect(userController.removeUser('userId')).toEqual({
      id: {id: 'userId'},
      name: expect.any(String),
      email: expect.any(String),
    })

    expect(mockUserService.removeUser).toHaveBeenCalledWith({id: 'userId'});
  });

});