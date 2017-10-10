// import {trigger, state, style,
//   transition,
//   animate,
//   keyframes,
//   group} from '@angular/animations';
export const ANIMATIONS_STATES = {
  ACTIVE: 'active',
  MIDDLE: 'middle',
  INACTIVE: 'inactive'
};
// const outputTimeAnim = (units: number,
//                         animationType: string = '',
//                         isSeconds: boolean = false) => {
//   return `${units}${isSeconds ? 's' : 'ms'} ${animationType}`;
// };
// export function scaleUp (duration, startScale, endScale) {
//   return trigger('scaleUp', [
//     state(ANIMATIONS_STATES.INACTIVE, style({
//       transform: `scale(${startScale})`
//     })),
//     state(ANIMATIONS_STATES.MIDDLE, style({
//       transform: `scale(${startScale + endScale / 2})`,
//     })),
//     state(ANIMATIONS_STATES.ACTIVE, style({
//       transform: `scale(${endScale})`,
//     })),
//     transition(`${ANIMATIONS_STATES.ACTIVE} <=> ${ANIMATIONS_STATES.MIDDLE}`,
//       animate(outputTimeAnim(duration, 'linear'))),
//     transition(`${ANIMATIONS_STATES.MIDDLE} <=> ${ANIMATIONS_STATES.INACTIVE}`,
//       animate(outputTimeAnim(duration, 'ease-in-out'))),
//     transition(`${ANIMATIONS_STATES.ACTIVE} <=> ${ANIMATIONS_STATES.INACTIVE}`,
//       animate(outputTimeAnim(duration, 'ease-in-out'))),
//   ]);
// }
// export const fadeInOut = (fadeTime: number, isSeconds: boolean = false) => {
//   const animationType = 'linear';
//   return trigger('fadeInOut', [
//     transition(':enter', [   // :enter is alias to 'void => *'
//       style({opacity: 0}),
//       animate(outputTimeAnim(fadeTime, animationType, isSeconds),
//         style({opacity: 1}))
//     ]),
//     transition(':leave', [   // :leave is alias to '* => void'
//       style({opacity: 1}),
//       animate(outputTimeAnim(fadeTime, animationType, isSeconds),
//         style({opacity: 0}))
//     ])
//   ]);
// }
// export function slideInOutAnimation () {
//   return trigger('slideInOutAnimation', [
//     transition(':enter', [
//       style({ transform: 'translateX(-400%)'
//       }),
//       animate('.5s ease-in-out', style({
//         transform: 'translateX(0)'
//       }))
//     ]),
//     transition(':leave', [
//       style({ transform: 'translateX(0)'
//       }),
//       animate('.5s ease-in-out', style({
//         transform: 'translateX(400%)'
//       }))
//     ])
//   ]);
// }
// export function flyInOutKEY() {
//   return trigger('flyInOutKEY', [
//     transition('void => *', [
//       animate(3000, keyframes([
//         style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
//         style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
//         style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
//       ]))
//     ]),
//     transition('* => void', [
//       animate(3000, keyframes([
//         style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
//         style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
//         style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
//       ]))
//     ])
//   ]);
// }
// export function flyInOut() {
//   return trigger('flyInOut', [
//     transition('void => *', [
//       style({width: 10, transform: 'translateX(50px)', opacity: 0}),
//       group([
//         animate('1s ease', style({
//           transform: 'translateX(0)',
//           width: 120
//         })),
//         animate('1s ease', style({
//           opacity: 1
//         }))
//       ])
//     ]),
//     transition('* => void', [
//       style({width: 120, transform: 'translateX(0px)', opacity: 1}),
//       group([
//         animate('1s ease', style({
//           transform: 'translateX(50px)',
//           width: 10
//         })),
//         animate('1s ease', style({
//           opacity: 0
//         }))
//       ])
//     ])
//   ]);
// }
