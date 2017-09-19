import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
export function fadeInOut () {
  return trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity:0}),
      animate(500, style({opacity:1}))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(500, style({opacity:0}))
    ])
  ])
}
export function scaleUp (duration, startScale, endScale, startState, endState) {
  return trigger('scaleUp', [
    state('small', style({
      transform: `scale(${startScale})`,
    })),
    state('big', style({
      transform: `scale(${endScale})`,
    })),
    transition(`${startState} <=> ${endState}`, animate(`${duration} 100ms ease-in`))
  ]);
}
export function flyInOut() {
  return trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ]);
}
