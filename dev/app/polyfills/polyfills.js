/*
полифиллы для поддержки старых браузеров
все полифиллы подключены и работают
*/

// импортируем sticky полифилл
import Stickyfill from './stickyfill';
// активируем sticky полифил для класса .sticky-block
const stickyBlock = document.querySelectorAll('.sticky-block');
Stickyfill.add(stickyBlock);

// подключаем forEach полифилл, не требует активации
require('./forEachPolyfill');

// подключаем matches полифил, не требует активации
require('./matchesPolyfill');

// подключаем object.assign полифил, не требует активации
require('./objectAssignPolyfill');
