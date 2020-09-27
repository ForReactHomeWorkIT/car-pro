export default class Scroll {
    constructor() {
        this.animItems = document.querySelectorAll('section')
    }
   animOnScroll() {
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
       for (let i = 0; i < this.animItems.length; i++) {
           const animItem = this.animItems[i]
           const animItemHeight = animItem.offsetHeight
           const animItemOffset = offset(animItem).top
           const animStart = 4

           let animItemPoint = window.innerHeight - animItemHeight / animStart

           if(animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart
           }

           if((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
               animItem.classList.add('_active')
           }else {
               animItem.classList.remove('_active')
           }
       }
   }
}