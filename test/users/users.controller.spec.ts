import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../src/entrypoint/http/users.controller';
import { UsersService } from '../../src/domain/usecase/users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
