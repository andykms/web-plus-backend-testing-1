import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

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

    const findedPost = postsService.find("1");

    expect(postsService.find).toHaveBeenCalledWith("1");
    expect(findedPost?.text).toEqual('Some pre-existing post');
    expect(findedPost?.id).toEqual("1");
  });
});