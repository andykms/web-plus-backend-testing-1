import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  const expectedPost: Post = {
    text: "Mocked post",
    id: "2",
    date: new Date('2020-01-01').toISOString()
  }

  beforeEach(async () => {
    postsService = new PostsService();
    jest.useFakeTimers()
      .setSystemTime(new Date('2020-01-01'));
    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    jest.spyOn(postsService, "create");

    postsService.create(post);
    expect(postsService.create).toHaveBeenCalledWith(post);
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    jest.spyOn(postsService, "find");
    postsService.create(post);
    const findedPost = postsService.find("2");
    expect(postsService.find).toHaveBeenCalledWith("2");
    expect(findedPost).toEqual(expectedPost);
  });
})