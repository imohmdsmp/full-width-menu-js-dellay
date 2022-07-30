let i = 1

        function _menu() {
            let _li = document.querySelectorAll('ul>li');
            let menu = document.getElementsByClassName('menu')
            for(q=0;q<_li.length;q++){
                _li[q].style=null
            }

            if (i % 2) {
                menu[0].style.cssText = 'width:100%'
                for (m = 0; m < _li.length; m++) {
                    _li[m].style.transitionDelay = (m / 2) + 's'
                    _li[m].style.transform='translateX(0)'
                }
            } else {
                menu[0].style.cssText = 'width:0'
                menu[0].style.transitionTimingFunction = 'ease-in'
                for (p = 0; p < _li.length; p++) {
                    _li[p].style.transitionDelay = (p /10) + 's'
                    _li[p].style.transitionTimingFunction = 'ease-in'
                    _li[p].style.transform='translateX(150%)'
                }
            }
            i++
        }