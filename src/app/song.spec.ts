import { Song } from './song';

describe('Song', () => {
  it('should create an instance', () => {
    expect(new Song("1","Africa","Toto",274)).toBeTruthy();
  });
});
