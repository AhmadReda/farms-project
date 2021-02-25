import { Component, OnInit, Injectable, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Injectable()

@Component({
  selector: '[component-loader]',
  template: `
      <div class="loading-component" *ngIf="componentLoading && !componentError">
          <div class="text-center">
              <div class="maly-line-loader">
                  <div class="loading-bar">

                      <i class="loading-icon fa fa-spinner"></i>
                  </div>
              </div>
              <!-- <p class="text-line" *ngIf="loadingMessage?.length > 0">
                  {{loadingMessage}}
              </p> -->
          </div>
      </div>
      <div class="ptb-4 flex flex-center width-100 plr-4" *ngIf="componentError">
          <div class="text-center">
              <p class="text-line text-error pointer" (click)="errorMessageClick()">
                  <i class="fa fa-refresh size-lead" aria-hidden="true"></i>
                  <br />
                  <span class="text-underlined">{{errorMessage}}</span>
              </p>
          </div>
      </div>
      <div [hidden]="componentLoading || componentError">
          <ng-content></ng-content>
      </div>
  `,
  styles: [`
      .text-center{
          text-align: center;
      }
      .loading-component{
          width: 100%;
          min-height: 200px;
          top: 0;
          left: 0;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          font-size: 1.4rem;
      }
      .loading-component p{
          max-width: 500px;
          width: 100%;
          display: inline-block;
      }
      .loading-component img{
          display: inline-block;
          width: 25px;
          object-fit: contain;
          padding: 0;
      }
      .loading-component img{
          animation: rotate360 2.5s linear 0s infinite none;
          transform-style: preserve-3d;
      }
      @keyframes rotate360{
          100%{
              transform: rotate(360deg)
          }
      }
      @keyframes initial-loading {
          0%, 100% {
              transform: translate(-34px, 0);
          }
          50% {
              transform: translate(96px, 0);
          }
      }
      .maly-line-loader {
          max-width: 200px;
          margin: 0 auto;
          transform: scale(1);
          transition: transform 0.5s ease;
      }
      .maly-line-loader .loading-bar {
          width: 130px;
          height: 30px;
          margin: 0 auto;
          border-radius: 200px;
          position: relative;
          font-size: 28px;
          overflow: hidden;
          z-index: 1;
          transform: rotateY(0);
          transition: transform 0.3s ease-in;
          color: #574edc;
      }

      .maly-line-loader.fade-load .linkedin-image {
          transform: translate(0, 10px);
          opacity: 0;
      }
      .maly-line-loader.fade-load .loading-bar {
          transform: rotateY(90deg);
      }
  `]
})

export class  LoaderComponent  implements OnInit {

    @Input() loadingMessage = [];
    @Input() componentLoading: boolean = true;
    @Input() componentError: boolean = false;
    @Input() errorMessage: string = '';
    @Output() errorCallback = new EventEmitter;

    constructor(

    ) { }
    ngOnInit() {

     }
    errorMessageClick() {
        this.errorCallback.emit();
    }
}

