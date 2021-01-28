import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { MemberService } from '../../../services/member.service';

@Component({
  selector: 'evodlife-member-dashboard',
  templateUrl: './member-dashboard.component.html',
  styleUrls: ['./member-dashboard.component.scss'],
})
export class MemberDashboardComponent implements OnInit {
  showme = false;

  eulogyNow: string;
  eulogyThen: string;

  constructor(
    public authService: AuthService,
    public memberService: MemberService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.memberService.onSubmit();
  }

  onSubmitV2() {
    this.memberService.onSubmitV2();
  }

  onSubmitTest() {
    this.memberService.onSubmitTest();
  }
}
