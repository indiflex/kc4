import moment from 'moment';
moment.locale('ko');

const m = moment();
console.log('🚀  m:', m.format('llll'));
console.log('🚀  m:', m.format('YY-MM-D HH:mm:ss (dd)'), m.fromNow());

const jan1 = moment().startOf('years');
console.log('🚀  jan1:', jan1);
jan1.add(3, 'days');
console.log('🚀  jan1:', jan1);
jan1.add(-4, 'days');
console.log('🚀  jan1:', jan1, jan1.format('dddd'), jan1.fromNow());
