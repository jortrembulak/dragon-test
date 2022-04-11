/* tslint:disable:no-unused-variable */
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { Dragon } from '../models/dragons';
import { DragonsService } from './dragons.service';

describe('Service: Dragons', () => {
  let httpMock: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DragonsService],
    });

    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create service', inject(
    [DragonsService],
    (service: DragonsService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return values from api', inject(
    [DragonsService],
    (service: DragonsService) => {
      const dragons = [
        {
          createdAt: '2022-04-10T15:32:52.087Z',
          name: 'bb',
          type: 'bb',
          histories: [],
          id: '2',
        },
        {
          createdAt: '2022-04-11T01:53:36.735Z',
          name: 'aa',
          type: 'aa',
          histories: [],
          id: '3',
        },
        {
          createdAt: '2022-04-11T10:16:18.271Z',
          name: 'cccc',
          type: 'cccc',
          histories: [],
          id: '4',
        },
      ];

      service.getAll().subscribe((res) => {
        expect(res).not.toBeNull();
      });

      const req = httpMock.expectOne(
        'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
      );
      req.flush(dragons);

      expect(req.request.method).toBe('GET');
    }
  ));

  it('should return value by id from api', inject(
    [DragonsService],
    (service: DragonsService) => {
      const dragon = [
        {
          createdAt: '2022-04-10T15:32:52.087Z',
          name: 'bb',
          type: 'bb',
          histories: [],
          id: '2',
        },
      ];

      service.getById('2').subscribe((res) => {
        expect(res).not.toBeNull();
      });

      const req = httpMock.expectOne(
        'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/2'
      );
      req.flush(dragon);

      expect(req.request.method).toBe('GET');
    }
  ));

  it('should throw error', inject(
    [DragonsService],
    (service: DragonsService) => {
      service.getAll().subscribe({
        next: () => {},
        error: (error) => {
          expect(error).toThrowError();
        },
      });
    }
  ));

  it('should create new register', inject(
    [DragonsService],
    (service: DragonsService) => {
      const dragon: Dragon = {
        name: 'ee',
        type: 'ee',
        createdAt: new Date(),
        id: '',
        histories: [],
      };
      service.insert(dragon).subscribe((res) => {
        expect(res).not.toBeNull();
      });

      const req = httpMock.expectOne(
        'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
      );
      req.flush(dragon);

      expect(req.request.method).toBe('POST');
    }
  ));

  it('should delete a register', inject(
    [DragonsService],
    (service: DragonsService) => {
      const id = '1';
      service.delete(id).subscribe((res) => {
        expect(res).not.toBeNull();
      });

      const req = httpMock.expectOne(
        'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/1'
      );
      req.flush(id);

      expect(req.request.method).toBe('DELETE');
    }
  ));
});
