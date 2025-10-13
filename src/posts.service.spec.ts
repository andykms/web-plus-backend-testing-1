import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

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
    const findedPost = postsService.find("1");

    expect(findedPost).toEqual({
      text: 'Some pre-existing post', 
      id: "1",
      date: new Date('2020-01-01').toISOString()});
  });
});