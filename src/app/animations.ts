import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

export function fadeInOut (duration, startOpacity, endOpacity) {
  return trigger('fadeInOut', [
    transition('* => void', [
      style({opacity: startOpacity.toString()}),
      animate(duration, style({opacity: endOpacity}))
    ]),
    transition('void => *', [
      style({opacity: endOpacity.toString()}),
      animate(duration, style({opacity: startOpacity}))
    ])
  ]);
}
export function scaleUp (duration, startScale, endScale, startState, endState) {
  return trigger('scaleUp', [
    state(startState, style({
      transform: `scale(${startScale})`,
    })),
    state(endState, style({
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
