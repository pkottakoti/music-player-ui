import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { SongService } from './song.service';
import { Song } from './song';

describe('SongService', () => {
  let injector: TestBed;
  let service: SongService;
  let httpMock: HttpTestingController;

  const fakeSongs = [
    new Song("1","Africa","Toto",274),
    new Song("2","Africa","Weezer",243),
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[SongService]

    })
    injector = getTestBed();
    service = injector.get(SongService);
    httpMock = injector.get(HttpTestingController);
  });

  

  it('should be created', () => {
    const service: SongService = TestBed.get(SongService);
    expect(service).toBeTruthy();
  });

  it('findSongsByTitle({title}) should make a GET call to /songs/title/{title}',()=>{
      service.findSongsByTitle('Africa').subscribe((songReponse)=>{ 
      expect(songReponse).toEqual(fakeSongs);
      });
      const req = httpMock.expectOne('/songs/title/Africa');
      expect(req.request.method).toBe("GET");
  });
});


