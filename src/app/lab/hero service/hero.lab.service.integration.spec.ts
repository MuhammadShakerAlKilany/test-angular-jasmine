import { TestBed } from '@angular/core/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { HttpClient } from '@angular/common/http';
import { Hero } from 'src/app/hero';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';

describe('3-hero service (http) integration testing:', () => {
  let heroService: HeroServiceForLab;
  let httpClientSpyObj: jasmine.SpyObj<HttpClient>;
  const heroArray: Hero[] = [{ id: 123, name: 'string', strength: 123 }];
  beforeEach(() => {
    // httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get', 'put']);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [HeroServiceForLab],
    });
    heroService = TestBed.inject(HeroServiceForLab);
  });

  it('getHeroes function: send request and receive response successfully', () => {
        // httpClientSpyObj.get.and.returnValue(of(heroArray));
    heroService.getHeroes().subscribe((hero) => {
      expect(hero).toBe(heroArray);
    });
  });
  it('updateHero function: send request and receive response successfully', () => {
    // httpClientSpyObj.put.and.returnValue(of(heroArray));
    heroService
      .updateHero({ id: 5, name: 'abc', strength: 12 })
      .subscribe((hero) => {
        expect(hero).toBe(heroArray);
      });
  });
});
