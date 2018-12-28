//封装rem响应式布局的方法

export function getRem(pWidth,pRem){
    let html = document.getElementsByTagName('html')[0];
    let oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize  = oWidth / pWidth * pRem + 'px';
}