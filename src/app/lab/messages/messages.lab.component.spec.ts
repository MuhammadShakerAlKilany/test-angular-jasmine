import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from 'src/app/services/message/message.service';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('2-message component integration testing:', () => {
  let component: MessagesComponentForLab;
  let fixtur: ComponentFixture<MessagesComponentForLab>;

    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponentForLab],
      providers: [MessageService],
    })
    fixtur = TestBed.createComponent(MessagesComponentForLab);
    component = fixtur.componentInstance;
    component.messageService.clear()
    fixtur.detectChanges();
  });
  it('expect comp. created successfully', () => {
    expect(component).toBeTruthy();
  });
  //Note: there is *ngIf="messageService.messages.length" in line 1 in template
  it('expect component template to be empty', () => {
    expect(fixtur.debugElement.queryAll(By.all()).length).toBe(0);
  });
  it('then expect div.msg to have the messages after setting it', () => {
    component.messageService.add('messages');
    fixtur.detectChanges()
    let div = fixtur.debugElement.query(By.css("div.msg"))
    expect(div?.nativeElement.textContent).toBe('messages');
  });
});
