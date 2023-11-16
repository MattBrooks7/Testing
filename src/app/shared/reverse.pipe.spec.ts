import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReversePipe } from './reverse.pipe';

describe('Component: User', () => {
  it('should reverse the word', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello', [])).toEqual('olleh')
  });

});
