let bigMap = document.querySelector('#bigMap');
let container = document.querySelector('#container');
let main = document.querySelector('main');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
    let foot1 = document.querySelector('#foot1');
    let foot2 = document.querySelector('#foot2');
        let title2 = document.querySelector('#title2');
        let textbox = document.querySelector('#textbox');
    let foot3 = document.querySelector('#foot3');
        let title3 = document.querySelector('#title3');
let blackScr = document.querySelector('#blackScr');
    let titleBox = document.querySelector('#titleBox');
let div = document.querySelectorAll("div");
let h1 =  document.querySelectorAll("h1");
let h2 =  document.querySelectorAll("h2");
let h3 =  document.querySelectorAll("h3");
let ln1 =  document.querySelectorAll("#ln1");
let ln2 =  document.querySelectorAll("#ln2");
let ln3 =  document.querySelectorAll("#ln3");
let body = document.querySelector('body');

let siz_1 = document.querySelectorAll('.siz-1');
let siz_2 = document.querySelectorAll('.siz-2');
let siz_3 = document.querySelectorAll('.siz-3');

let middle = document.querySelector('#middle');

let nav1 = document.querySelector('#nav-1');
let nav2 = document.querySelector('#nav-2');
let nav3 = document.querySelector('#nav-3');

let moveX = 0;
let moveY = 0;

let posX = 0;
let posY = 0;
let targetX = 0;
let targetY = 0;
let pressed = false;
let scene = 0;

let perX = 0;
let perY = 0;

let zoom = 0.3;
let zoomSpd = 0.05;


window.onload = loadFn();

function loadFn(){
    bigMap.classList.add('bg-bi');
    header.classList.add('bg-hd');
    footer.classList.add('bg-ft');
    nav1.innerHTML = '';
    nav2.innerHTML = 'GAMEMAP';
    nav3.innerHTML = '';
    title3.innerHTML = '';
    foot1.innerHTML = 'MORE INFO';
    reduFn();
    bigMap.style.transform = `scale(1)`;
    console.log(h2);
}

function reduFn(){
    for (var i = 0; i < siz_1.length; i++) {
        siz_1[i].style.top = '600px';
        siz_1[i].style.transform = 'rotate(0deg)';
        siz_1[i].style.width = '0px';
        siz_1[i].style.height = '0px';
      }
    for (var i = 0; i < siz_2.length; i++) {
        siz_2[i].style.top = '250px';
        siz_2[i].style.width = '0px';
        siz_2[i].style.height = '0px';
    }
    for (var i = 0; i < siz_3.length; i++) {
        siz_3[i].style.top = '100px';
        siz_3[i].style.width = '0px';
        siz_3[i].style.height = '0px';
        }
    for (var i = 0; i < h1.length; i++) {
        h1[i].style.width = '0px';
        h1[i].style.height = '0px';
        }
    for (var i = 0; i < h2.length; i++) {
        h2[i].style.width = '0px';
        h2[i].style.height = '0px';
        }
    for (var i = 0; i < h3.length; i++) {
        h3[i].style.width = '0px';
        h3[i].style.height = '0px';
        }
    for (var i = 0; i < ln1.length; i++) {
        ln1[i].style.width = '0px';    
    }
    for (var i = 0; i < ln2.length; i++) {
        ln2[i].style.width = '0px';    
    }
    for (var i = 0; i < ln3.length; i++) {
        ln3[i].style.width = '0px';    
    }
    
}
function enlaFn(){
    for (var i = 0; i < siz_1.length; i++) {
        siz_1[i].style.top = '-600px';
        siz_1[i].style.transformOrigin = '250px 800px';
        siz_1[0].style.transform = 'rotate(0deg)';
        siz_1[1].style.transform = 'rotate(72deg)';
        siz_1[2].style.transform = 'rotate(144deg)';
        siz_1[3].style.transform = 'rotate(-144deg)';
        siz_1[4].style.transform = 'rotate(-72deg)';
        siz_1[i].style.width = '500px';
        siz_1[i].style.height = '500px';
      }
    for (var i = 0; i < siz_2.length; i++) {
        siz_2[i].style.top = '-300px';
        siz_2[i].style.transformOrigin = '100px 550px';
        siz_2[i].style.width = '200px';
        siz_2[i].style.height = '200px';
    }
    for (var i = 0; i < siz_3.length; i++) {
        siz_3[i].style.top = '-100px';
        siz_3[i].style.transformOrigin = '25px 200px';
        siz_3[i].style.width = '50px';
        siz_3[i].style.height = '50px';
        }
    for (var i = 0; i < h1.length; i++) {
        h1[i].style.width = '500px';
        h1[i].style.height = '500px';
        }
    for (var i = 0; i < h2.length; i++) {
        h2[i].style.width = '200px';
        h2[i].style.height = '200px';
        }
    for (var i = 0; i < h3.length; i++) {
        h3[i].style.width = '50px';
        h3[i].style.height = '50px';
        }
        for (var i = 0; i < ln1.length; i++) {
            ln1[i].style.width = '500px';    
        }
        for (var i = 0; i < ln2.length; i++) {
            ln2[i].style.width = '300px';    
        }
        for (var i = 0; i < ln3.length; i++) {
            ln3[i].style.width = '200px';    
        }
}

container.addEventListener('wheel', zoomFn);
function zoomFn(event){
    //perXYFn();
    console.log(bigMap.style.transformOrigin);
    if(event.deltaY>0){
        bigMap.style.transform = `scale(${(zoom -= zoomSpd)})`;
    }
    else{
        bigMap.style.transform = `scale(${(zoom += zoomSpd)})`;
    }
}

function perXYFn(){
    perX = moveX + 2500;
    perY = moveY + 2500;
    bigMap.style.transformOrigin = perX + 'px'+ ' ' + perY + 'px';
}

function moveFn(){
    bigMap.style.top = moveY + 'px';
    bigMap.style.left = moveX + 'px';
}




container.addEventListener("mousedown", () => {
    container.style.cursor = "grab";
})

window.addEventListener("mouseup", () => {
    container.style.cursor = "default";
    pressed = false;
})

container.addEventListener('mousedown', dragSttFn);
function dragSttFn(e){
    pressed = true;
    posX = e.clientX - bigMap.offsetLeft;
    posY = e.clientY - bigMap.offsetTop;
    container.style.cussor = 'grabbing';
}

container.addEventListener("mousemove", e => {
    if (!pressed) return;
    targetX = e.clientX;
    targetY = e.clientY;
    moveX = targetX - posX;
    moveY = targetX - posY;
    bigMap.style.left = `${targetX - posX}px`;
    bigMap.style.top = `${targetY - posY}px`;
})












//////////////////////////////////////////////////////////////
ca_h1.addEventListener('click', caGoFn);
function caGoFn(){
    mazmFn();
}
ca_h1.addEventListener('mouseover', caGo3Fn);
function caGo3Fn(){
    scene = 1;
    headFn();
    //ca_img.style.opacity = '0';
    bigMap.classList.add('bg-ca');
    bigMap.classList.remove('bg-bi');
}
ca_h1.addEventListener('mouseout', caGo4Fn);
function caGo4Fn(){
    //ca_img.style.opacity = '0.5';
    bigMap.classList.remove('bg-ca');
    bigMap.classList.add('bg-bi');
}
    ca_pz.addEventListener('click', () => {
        mazmFn();
    })
    ca_pz.addEventListener('mouseover', () => {
        scene = 11;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ca2');
    })
    ca_pz.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ca2');
        bigMap.classList.add('bg-bi');
    })
    ////////////////////////////////////////////////////////
    ca_rt.addEventListener('click', () => {

        mazmFn();

    })
    ca_rt.addEventListener('mouseover', () => {
        scene = 12;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ca2');
    })
    ca_rt.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ca2');
        bigMap.classList.add('bg-bi');
    })
    ////////////////////////////////////////////////////////
    ca_bd.addEventListener('click', () => {
        mazmFn();
    })
    ca_bd.addEventListener('mouseover', () => {
        scene = 13;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ca2');
    })
    ca_bd.addEventListener('mouseout', () => {
        ca_bd.style.fontSize = '3.5rem';
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ca2');
        bigMap.classList.add('bg-bi');
    })
    
    


//////////////////////////////////////////////////////////////
sp_h1.addEventListener('click', spGoFn);
function spGoFn(){
    mazmFn();
}
sp_h1.addEventListener('mouseover', spGo3Fn);
function spGo3Fn(){
    scene = 2;
    headFn();
    //sp_img.style.opacity = '0';
    bigMap.classList.add('bg-sp');
    bigMap.classList.remove('bg-bi');
sp_h1.addEventListener('mouseout', spGo4Fn);
function spGo4Fn(){
    //sp_img.style.opacity = '0.5';
    bigMap.classList.add('bg-bi');
    bigMap.classList.remove('bg-sp');            
}
}
    ////////////////////////////////////////////////////////
    sp_rc.addEventListener('click', () => {
        mazmFn();
    })
    sp_rc.addEventListener('mouseover', () => {
        scene = 21;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-sp2');
    })
    sp_rc.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-sp2');
        bigMap.classList.add('bg-bi');
    })
    ////////////////////////////////////////////////////////
    sp_ba.addEventListener('click', () => {
        mazmFn();
    })
    sp_ba.addEventListener('mouseover', () => {
        scene = 22;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-sp2');
    })
    sp_ba.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-sp2');
        bigMap.classList.add('bg-bi');
    })
    ////////////////////////////////////////////////////////
    sp_ex.addEventListener('click', () => {
        mazmFn();
    })
    sp_ex.addEventListener('mouseover', () => {
        scene = 23;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-sp2');
    })
    sp_ex.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-sp2');
        bigMap.classList.add('bg-bi');
    })        
      
    



//////////////////////////////////////////////////////////////
si_h1.addEventListener('click', siGoFn);
function siGoFn(){
    mazmFn();
}
si_h1.addEventListener('mouseover', siGo3Fn);
function siGo3Fn(){
    scene = 3;
    headFn();
    //si_img.style.opacity = '0';
    bigMap.classList.add('bg-si');
    bigMap.classList.remove('bg-bi');
si_h1.addEventListener('mouseout', siGo4Fn);
function siGo4Fn(){
    //si_img.style.opacity = '0.5';
    bigMap.classList.add('bg-bi');
    bigMap.classList.remove('bg-si');
}
}
    ////////////////////////////////////////////////////////
    h2[8].addEventListener('click', () => {
        mazmFn();
    })
    h2[8].addEventListener('mouseover', () => {
        scene = 31;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-si2');
    })
    h2[8].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-si2');
        bigMap.classList.add('bg-bi');
    })     
    ////////////////////////////////////////////////////////
        h3[4].addEventListener('click', () => {
            mazmFn();
        })
        h3[4].addEventListener('mouseover', () => {
            scene = 311;
            headFn();
            //ca_pz_img.style.opacity = '0';
            bigMap.classList.remove('bg-bi');
            bigMap.classList.add('bg-si3');
        })
        h3[4].addEventListener('mouseout', () => {
            //ca__pz_img.style.opacity = '0.5';
            bigMap.classList.remove('bg-si3');
            bigMap.classList.add('bg-bi');
        })     
        h3[5].addEventListener('click', () => {
            mazmFn();
        })
        h3[5].addEventListener('mouseover', () => {
            scene = 312;
            headFn();
            //ca_pz_img.style.opacity = '0';
            bigMap.classList.remove('bg-bi');
            bigMap.classList.add('bg-si3');
        })
        h3[5].addEventListener('mouseout', () => {
            //ca__pz_img.style.opacity = '0.5';
            bigMap.classList.remove('bg-si3');
            bigMap.classList.add('bg-bi');
        })     
        h3[6].addEventListener('click', () => {
            mazmFn();
        })
        h3[6].addEventListener('mouseover', () => {
            scene = 313;
            headFn();
            //ca_pz_img.style.opacity = '0';
            bigMap.classList.remove('bg-bi');
            bigMap.classList.add('bg-si3');
        })
        h3[6].addEventListener('mouseout', () => {
            //ca__pz_img.style.opacity = '0.5';
            bigMap.classList.remove('bg-si3');
            bigMap.classList.add('bg-bi');
        })     
        h3[7].addEventListener('click', () => {
            mazmFn();
        })
        h3[7].addEventListener('mouseover', () => {
            scene = 314;
            headFn();
            //ca_pz_img.style.opacity = '0';
            bigMap.classList.remove('bg-bi');
            bigMap.classList.add('bg-si3');
        })
        h3[7].addEventListener('mouseout', () => {
            //ca__pz_img.style.opacity = '0.5';
            bigMap.classList.remove('bg-si3');
            bigMap.classList.add('bg-bi');
        })     
    ////////////////////////////////////////////////////////
    si_ex.addEventListener('click', () => {
        mazmFn();
    })
    si_ex.addEventListener('mouseover', () => {
        scene = 32;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-si2');
    })
    si_ex.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-si2');
        bigMap.classList.add('bg-bi');
    })     
    h3[0].addEventListener('click', () => {
        mazmFn();
    })
    h3[0].addEventListener('mouseover', () => {
        scene = 321;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-si3');
    })
    h3[0].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-si3');
        bigMap.classList.add('bg-bi');
    })    
    h3[1].addEventListener('click', () => {
        mazmFn();
    })
    h3[1].addEventListener('mouseover', () => {
        scene = 322;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-si3');
    })
    h3[1].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-si3');
        bigMap.classList.add('bg-bi');
    })    
    h3[2].addEventListener('click', () => {
        mazmFn();
    })
    h3[2].addEventListener('mouseover', () => {
        scene = 323;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-si3');
    })
    h3[2].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-si3');
        bigMap.classList.add('bg-bi');
    })    
    h3[3].addEventListener('click', () => {
        mazmFn();
    })
    h3[3].addEventListener('mouseover', () => {
        scene = 324;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-si3');
    })
    h3[3].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-si3');
        bigMap.classList.add('bg-bi');
    })    
    ////////////////////////////////////////////////////////
    si_sa.addEventListener('click', () => {
        mazmFn();
    })
    si_sa.addEventListener('mouseover', () => {
        scene = 33;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-si2');
    })
    si_sa.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-si2');
        bigMap.classList.add('bg-bi');
    })     


//////////////////////////////////////////////////////////////
ad_h1.addEventListener('click', adGoFn);
function adGoFn(){
    mazmFn();
}
ad_h1.addEventListener('mouseover', adGo3Fn);
function adGo3Fn(){
    scene = 4;
    headFn();
    //ad_img.style.opacity = '0';
    bigMap.classList.add('bg-ad');
    bigMap.classList.remove('bg-bi');
ad_h1.addEventListener('mouseout', adGo4Fn);
function adGo4Fn(){
    //ad_img.style.opacity = '0.5';
    bigMap.classList.add('bg-bi');
    bigMap.classList.remove('bg-ad');
}
}
    ////////////////////////////////////////////////////////
    ad_sv.addEventListener('click', () => {
        mazmFn();
    })
    ad_sv.addEventListener('mouseover', () => {
        scene = 41;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ad2');
    })
    ad_sv.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ad2');
        bigMap.classList.add('bg-bi');
    })     
    ////////////////////////////////////////////////////////
    ad_op.addEventListener('click', () => {
        mazmFn();
    })
    ad_op.addEventListener('mouseover', () => {
        scene = 44;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ad2');
    })
    ad_op.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ad2');
        bigMap.classList.add('bg-bi');
    })     
    ////////////////////////////////////////////////////////
    ad_rpg.addEventListener('click', () => {
        mazmFn();
    })
    ad_rpg.addEventListener('mouseover', () => {
        scene = 43;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ad2');
    })
    ad_rpg.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ad2');
        bigMap.classList.add('bg-bi');
    })     
    h3[11].addEventListener('click', () => {
        mazmFn();
    })
    h3[11].addEventListener('mouseover', () => {
        scene = 431;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ad3');
    })
    h3[11].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ad3');
        bigMap.classList.add('bg-bi');
    })     
    h3[12].addEventListener('click', () => {
        mazmFn();
    })
    h3[12].addEventListener('mouseover', () => {
        scene = 432;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ad3');
    })
    h3[12].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ad3');
        bigMap.classList.add('bg-bi');
    })    
    h3[13].addEventListener('click', () => {
        mazmFn();
    })
    h3[13].addEventListener('mouseover', () => {
        scene = 433;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ad3');
    })
    h3[13].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ad3');
        bigMap.classList.add('bg-bi');
    })    
    ////////////////////////////////////////////////////////
    ad_acad.addEventListener('click', () => {
        mazmFn();
    })
    ad_acad.addEventListener('mouseover', () => {
        scene = 42;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ad2');
    })
    ad_acad.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ad2');
        bigMap.classList.add('bg-bi');
    })     
    h3[8].addEventListener('click', () => {
        mazmFn();
    })
    h3[8].addEventListener('mouseover', () => {
        scene = 421;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ad3');
    })
    h3[8].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ad3');
        bigMap.classList.add('bg-bi');
    })     
    h3[9].addEventListener('click', () => {
        mazmFn();
    })
    h3[9].addEventListener('mouseover', () => {
        scene = 422;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ad3');
    })
    h3[9].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ad3');
        bigMap.classList.add('bg-bi');
    })     
    h3[10].addEventListener('click', () => {
        mazmFn();
    })
    h3[10].addEventListener('mouseover', () => {
        scene = 423;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ad3');
    })
    h3[10].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ad3');
        bigMap.classList.add('bg-bi');
    })     



//////////////////////////////////////////////////////////////
ac_h1.addEventListener('click', acGoFn);
function acGoFn(){
    mazmFn();
}
ac_h1.addEventListener('mouseover', acGo3Fn);
function acGo3Fn(){
    scene = 5;
    //ac_img.style.opacity = '0';
    bigMap.classList.add('bg-ac');
    bigMap.classList.remove('bg-bi');
ac_h1.addEventListener('mouseout', acGo4Fn);
function acGo4Fn(){
    //ac_img.style.opacity = '0.5';
    bigMap.classList.add('bg-bi');
    bigMap.classList.remove('bg-ac');
}}
    ////////////////////////////////////////////////////////
    ac_st.addEventListener('click', () => {
        mazmFn();
    })
    ac_st.addEventListener('mouseover', () => {
        scene = 51;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ac2');
    })
    ac_st.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ac2');
        bigMap.classList.add('bg-bi');
    })     

    ////////////////////////////////////////////////////////
    ac_pt.addEventListener('click', () => {
        mazmFn();
    })
    ac_pt.addEventListener('mouseover', () => {
        scene = 52;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ac2');
    })
    ac_pt.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ac2');
        bigMap.classList.add('bg-bi');
    })     
    h3[16].addEventListener('click', () => {
        mazmFn();
    })
    h3[16].addEventListener('mouseover', () => {
        scene = 521;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ac3');
    })
    h3[16].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ac3');
        bigMap.classList.add('bg-bi');
    })    
    h3[17].addEventListener('click', () => {
        mazmFn();
    })
    h3[17].addEventListener('mouseover', () => {
        scene = 522;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ac3');
    })
    h3[17].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ac3');
        bigMap.classList.add('bg-bi');
    })    
    ////////////////////////////////////////////////////////
    ac_ft.addEventListener('click', () => {
        mazmFn();
    })
    ac_ft.addEventListener('mouseover', () => {
        scene = 53;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ac2');
    })
    ac_ft.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ac2');
        bigMap.classList.add('bg-bi');
    })     
    ////////////////////////////////////////////////////////
    ac_sc.addEventListener('click', () => {
        mazmFn();
    })
    ac_sc.addEventListener('mouseover', () => {
        scene = 54;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ac2');
    })
    ac_sc.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ac2');
        bigMap.classList.add('bg-bi');
    })     
    h3[14].addEventListener('click', () => {
        mazmFn();
    })
    h3[14].addEventListener('mouseover', () => {
        scene = 541;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-si3');
    })
    h3[14].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-si3');
        bigMap.classList.add('bg-bi');
    })    
    h3[15].addEventListener('click', () => {
        mazmFn();
    })
    h3[15].addEventListener('mouseover', () => {
        scene = 542;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-si3');
    })
    h3[15].addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-si3');
        bigMap.classList.add('bg-bi');
    })    
    ////////////////////////////////////////////////////////
    ac_fp.addEventListener('click', () => {
        mazmFn();
    })
    ac_fp.addEventListener('mouseover', () => {
        scene = 55;
        headFn();
        //ca_pz_img.style.opacity = '0';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-ac2');
    })
    ac_fp.addEventListener('mouseout', () => {
        //ca__pz_img.style.opacity = '0.5';
        bigMap.classList.remove('bg-ac2');
        bigMap.classList.add('bg-bi');
    })     
    
let footimg1 = document.querySelector('#footimg1');
let footimg2 = document.querySelector('#footimg2');
let footimg3 = document.querySelector('#footimg3');
let footimg4 = document.querySelector('#footimg4');
let footimg5 = document.querySelector('#footimg5');
let footimg6 = document.querySelector('#footimg6');


//////////////////////////////////////////////////////////////
function footFn(){
    console.log(scene);
    switch (scene){
        case 0 :
        title2.innerHTML = 'VIDEO GAME, 비디오 게임에 대해';
        footimg1.src = '';
        footimg2.src = '';
        footimg3.src = '';
        footimg4.src = '';
        footimg5.src = '';
        footimg6.src = '';
        textbox.innerHTML = ''
        break;
        case 1 : 
        title2.innerHTML = 'CASUAL, 캐주얼 게임';
        footimg1.src = 'img/casual1.jpg';
        footimg2.src = 'img/casual2.jpg';
        footimg3.src = 'img/casual3.jpg';
        footimg4.src = 'img/casual4.jpeg';
        footimg5.src = 'img/casual5.png';
        footimg6.src = 'img/casual6.jpg';
        textbox.innerHTML = '매뉴얼이나 튜토리얼조차도 필요없습니다. 말초적인 재미와 중독성, 낮은 장벽. 마음이 이끄는 대로 이리저리 움직이면 한 판정도는 가볍죠. <br><br> 캐주얼 게임은 마치 캐주얼 옷과 같이 누구나, 언제나, 어디서나 편하게 즐길 수 있는 게임입니다. 몰아치는 업무와 공부에 지치셨나요? 집중따위 필요없이 빠르고 간단한 즐거움을 원하시나요? 그렇다면 캐주얼 게임입니다. 몰입감 있는 네러티브, 시선을 채가는 뛰어난 그래픽, 언제 당할 지 모른다는 극한의 긴장감. 이런 요소는 물론 재밌고 쫄깃하지만, 피곤하잖아요? 캐주얼 게임은 바쁜 현대인을 배려합니다. 일과 중 쉬는 시간에, 혹은 이동하는 사이사이에 남녀노소 누구나 즐길 수 있는 쉬움과 간단함, 그리고 편함. 마치 후드티와 츄리닝같죠. <br><br> 마음 먹을 필요 없습니다. 일단 키고 보세요!';
        break;
        case 11 : 
        title2.innerHTML = 'PUZZLE, 퍼즐 게임';
        footimg1.src = 'img/puzzle1.png';
        footimg2.src = 'img/puzzle2.png';
        footimg3.src = 'img/puzzle3.jpg';
        footimg4.src = 'img/puzzle4.jpg';
        footimg5.src = 'img/puzzle5.png';
        footimg6.src = 'img/puzzle6.jpg';
        textbox.innerHTML = '마치 수수께끼를 푸는 것처럼, 제작자가 던져준 환경과 클리어 조건을 빠르게 파악하고 해결해야 합니다! 하지만 걱정마세요. 일단 재밌을 겁니다! <br><br> 퍼즐 게임은 어떠한 규칙 내에서 정해진 행위를 통해 주어진 조건을 완료, 클리어하는 단순한 게임입니다. 말이야 그렇다는 거지, 이 규칙의 복잡함에 따라 난이도는 천차만별이죠. 때문에 변수가 거의 없습니다. 계속 머리 싸매다 보면 무조건 풀린다는 거죠. 배우는 것은 쉽지만, 숙련하기는 어렵다.(Easy to Learn, Hard to Master.) 변수가 없다는 점에서 공평함이 생기고, 그 공평함은 초보자와 프로게이머급 실력자를 판가름합니다. <br><br>자신의 똑똑함에 한계를 경험해보시겠습니까?'
        break;        
        case 12 : 
        title2.innerHTML = 'RHYTHM, 리듬 게임';
        footimg1.src = 'img/rhythm1.jpg';
        footimg2.src = 'img/rhythm2.jpg';
        footimg3.src = 'img/rhythm3.jpg';
        footimg4.src = 'img/rhythm4.jpg';
        footimg5.src = 'img/rhythm5.jpg';
        footimg6.src = 'img/rhythm6.png';
        textbox.innerHTML = '흥겨운 게임 음악에 맞춰 버튼을 누르세요. 마치 당신이 연주자가 된 것처럼, 이 판에 들리는 음악을 버튼으로 즐기는 겁니다! <br> <br> 리듬게임은 그 말마따나 리듬과 음악에 딱딱 맞춰 조작해야 진행되는 게임입니다. 노래를 듣다보면 몸을 까딱까딱 흔들게 되지 않나요? 화면에 뜨는 버튼을 까딱까딱 누르면서 노래와 하나가 되는 경험을 해보십시오. 하지만 막 누르는 것으론 부족합니다. 정확성, 리듬게임의 가장 중요한 요소 중 하나죠. 화면의 한 켠에는 방금 누른 버튼이 얼마나 정확했는지가 뜹니다. 이런, 틀리셨나요? 그럼 어떱니까! 리듬게임의 본질은 음악을 즐기는 것, 틀리면서 배워나가면 됩니다. 정확하게 누를 수록 더 큰 쾌감이 함께하죠. <br> <br>이번 판은 완벽한 연주를 할 수 있을까요?'
        break;     
        case 13 : 
        title2.innerHTML = 'BOARD, 보드 게임';
        footimg1.src = 'img/board1.jpg';
        footimg2.src = 'img/board2.png';
        footimg3.src = 'img/board3.jpg';
        footimg4.src = 'img/board4.jpg';
        footimg5.src = 'img/board5.jpg';
        footimg6.src = 'img/board6.jpeg';
        textbox.innerHTML = '아주 어릴 때 가족과 함께, 혹은 학교에서 친구들과 함께 즐겼던 보드 게임 그대로입니다! 체스, 장기, 바둑, 프리셀, 포커, 화투 등 없는 게 없습니다!<br><br>보드게임은 최소 두 명 이상의 사람들이 직접 대면하여 보드(board), 카드(card), 타일(tile)등 유형의 물리적인 도구를 이용하여 정해진 규칙에 따라 승패를 가리는 모든 놀이를 통칭합니다. 특이한 점은, 컴퓨터로 조작한다는 점이죠. 상대는 인공지능이 될 수도, 다른 사람이 될 수도 있습니다. 퍼즐게임과 비슷하지만서도 다른 것이, 대전을 통해 승패를 가린다는 점, 변수가 많이 존재한다는 점입니다. 주사위, 이 정육면체가 보드 게임을 대표합니다. 어떤 카드를 받을 지, 몇 칸이나 갈 수 있을 지는 대개 운에 달려있죠. 그판 그판 풀어나가야 하는 퍼즐은 상대방에 의해 결정됩니다. 한 턴 한 턴을 신중히 생각해야 합니다.<br><br>이번 주사위는 몇이 나올까요?'
        break;     

        case 2 : 
        title2.innerHTML = 'SPORT, 스포츠 게임';
        footimg1.src = 'img/sport1.jpeg';
        footimg2.src = 'img/sport2.jpg';
        footimg3.src = 'img/sport3.jpg';
        footimg4.src = 'img/sport4.jpg';
        footimg5.src = 'img/sport5.jpg';
        footimg6.src = 'img/sport6.jpg';
        textbox.innerHTML = '스포츠 게임은 비디오 게임의 태동기부터 있어왔습니다. 차세대에 들어오면서 가장 인기 있는 장르 중의 하나입니다. 1972년작 퐁도 스포츠 게임이었던 것을 생각하면 역시 가장 오래된 게임 장르들 중 하나입니다. 스포츠 게임 장르를 넓게 보면 모터스포츠를 소재로 하는 레이싱 게임도 포함될 수 있지만, 레이싱 게임이 충분히 독립적인 유저층과 게임성을 가지고 있기 때문에 일반적으로 따로 분류합니다.<br><br>유명 스포츠 스타들과 팀들이 실제 스포츠에서 차지하는 비중이 많은 만큼 타이거 우즈와 같이 실존 유명 스타들의 이름으로 많은 게임이 발매되기도 합니다. 하드웨어가 발달하고 그래픽이 정교해지면서 실제 선수의 모습과 점점 똑같아져가는 중입니다. 또, 실제 스포츠계의 데이터를 토대로 선수들의 능력치를 설정하고 팀 간의 이적을 반영하는 등 꾸준한 업데이트를 하는 것이 정착화되었고, 이런 현실의 반영은 실제 스포츠를 다루는 게임에서 매우 중요한 요소로 작용하고 있습니다.<br><br>';

        break;
        case 21 : 
        title2.innerHTML = 'RACE, 레이싱 게임';
        footimg1.src = 'img/race1.avif';
        footimg2.src = 'img/race2.jpg';
        footimg3.src = 'img/race3.jpg';
        footimg4.src = 'img/race4.webp';
        footimg5.src = 'img/race5.webp';
        footimg6.src = 'img/race6.jpg';
        textbox.innerHTML = '현실에서 수억원을 호가하는 멋진 디자인의 차를 타고 숨막히는 속도로 질주하십시오. 1등을 차지할 수 있을까요?<br><br>레이싱 게임은 자동차, 바이크, 자전거 등 경쟁상대와 스피드를 겨루는 게임입니다. 그중에서도 레이싱하면 역시 자동차죠. 과거에는 유사 3D 눈속임에 불과했던 그래픽이 기술의 발전과 함께 실제와 혼동될 정도의 현실감으로 돌아왔습니다. 부딪히고, 깨지고, 박살나는 물리엔진, 아지랑이가 피어날 정도로 쏜살같이 달리는 자동차들이 눈을 즐겁게 할 겁니다. 하지만 그저 달리기만 해선 1등을 할 수 없죠. 그립주행, 드리프트, 슬립 스트림, 기어변속 등 현실에서 적용되는 온갖 기술들이 가능한만큼 적재적소에 이들을 잘 활용해야 합니다. <br><br>맞춰 서십시오. 곧 파란 불이 켜집니다!'
        break;        
        case 22 : 
        title2.innerHTML = 'BALL, 구기종목 게임';
        footimg1.src = 'img/ball1.jpg';
        footimg2.src = 'img/ball2.jpg';
        footimg3.src = 'img/ball3.jpeg';
        footimg4.src = 'img/ball4.webp';
        footimg5.src = 'img/ball5.jpg';
        footimg6.src = 'img/ball6.jpeg';
        textbox.innerHTML = '익스트림 스포츠라는 이름에서 알 수 있듯이 위험, 극한을 추구하는 스포츠를 의미합니다. 주로 위험성에서 나오는 스릴과 속도감을 즐기기 위해 즐기는 스포츠입니다. 이렇게 위험한 스포츠를 즐기기 위해서는 장비나 보호구가 반드시 필요합니다. 충분히 장비를 갖춘 상태임에도 불구하고 착용한 장비가 잘못되거나 아니면 장비를 잘 못 착용해서 다치거나 최악이면 목숨을 잃을 수도 있습니다.<br><br>익스트림 스포츠만을 다루는 스포츠 대회인 X Games(X게임)도 존재하며, 이 대회로 익스트림 스포츠의 인지도가 상당히 상승했다고 볼 수 있습니다. 이 외의 대회로는 액션스포츠챔피언십, 그래비티 게임 등이 존재합니다. 레드불에서 마케팅을 위해 익스트림 스포츠에 많은 지원을 하는 것으로 유명합니다. 몬스터 에너지, 락스타 에너지도 마찬가지입니다. 북미에서는 아드레날린을 어떻게든 분비시키려고 익스트림 스포츠에 몰두하는 이들을 아드레날린 정키라고 부른다고 합니다.<br><br>'
        break;     
        case 23 : 
        title2.innerHTML = 'EXTREME, 익스트림 스포츠 게임';
        footimg1.src = 'img/extr1.png';
        footimg2.src = 'img/extr2.jpg';
        footimg3.src = 'img/extr3.webp';
        footimg4.src = 'img/extr4.jpg';
        footimg5.src = 'img/extr5.jpg';
        footimg6.src = 'img/extr6.jpg';
        textbox.innerHTML = '익스트림 스포츠라는 이름에서 알 수 있듯이 위험, 극한을 추구하는 스포츠를 의미합니다. 주로 위험성에서 나오는 스릴과 속도감을 즐기기 위해 즐기는 스포츠입니다. 이렇게 위험한 스포츠를 즐기기 위해서는 장비나 보호구가 반드시 필요합니다. 충분히 장비를 갖춘 상태임에도 불구하고 착용한 장비가 잘못되거나 아니면 장비를 잘 못 착용해서 다치거나 최악이면 목숨을 잃을 수도 있습니다.<br><br>익스트림 스포츠만을 다루는 스포츠 대회인 X Games(X게임)도 존재하며, 이 대회로 익스트림 스포츠의 인지도가 상당히 상승했다고 볼 수 있습니다. 이 외의 대회로는 액션스포츠챔피언십, 그래비티 게임 등이 존재합니다. 레드불에서 마케팅을 위해 익스트림 스포츠에 많은 지원을 하는 것으로 유명합니다. 몬스터 에너지, 락스타 에너지도 마찬가지입니다. 북미에서는 아드레날린을 어떻게든 분비시키려고 익스트림 스포츠에 몰두하는 이들을 아드레날린 정키라고 부른다고 합니다.<br><br>'
        break;    
        
        case 3 : 
        title2.innerHTML = 'SIMULATOR, 시뮬레이터';
        footimg1.src = 'img/simul1.jpg';
        footimg2.src = 'img/simul2.jpg';
        footimg3.src = 'img/simul3.jpg';
        footimg4.src = 'img/simul4.jpg';
        footimg5.src = 'img/simul5.jpg';
        footimg6.src = 'img/simul1.jpg';
        textbox.innerHTML = '시뮬레이션 게임은 모의시험 게임이라는 뜻입니다. 더 정확하게는 복잡한 문제를 해석하기 위하여 모델에 의한 실험, 또는 사회현상 등을 해결하는 데서 실제와 비슷한 상태를 수식 등으로 만들어 모의적으로 연산을 되풀이하여 그 특성을 파악하는 일입니다. 즉 하나의 모델을 이용하여 실제와 비슷한 일을 재현하여 시험, 또는 체험한다는 뜻입니다.<br><br>게임으로서의 의미로 더 간단히 말하자면 정해진 함숫값 내에 변화를 줬을 때 계의 변화를 관측하는 것. 또는 그러한 장르를 말합니다. 일반적으로 RPG, FPS 등 게임 업계에서 만들어진 단어가 아닌, 본래 과학 쪽에서 사용되던 단어인 만큼 게임 장르로 서는 명확한 정의를 내리기 힘든 편입니다.<br><br>전반적으로는 현실의 무언가를 비슷하게 따라 하고 재현하는 데 중심을 맞춘 게임이라고 볼 수 있습니다. 광의적으로는 모든 비디오 게임이 시뮬레이션이라 껴 맞출 수는 있으나, 현실적인 요소를 얼마나 충실히 반영하는가에 따라 시뮬레이션이냐 보다 게임적인가 갈립니다.'
        break;
        case 31 : 
        title2.innerHTML = 'TACTICAL, 전략 게임';
        footimg1.src = 'img/tact1.jpg';
        footimg2.src = 'img/tact2.jpg';
        footimg3.src = 'img/tact3.jpg';
        footimg4.src = 'img/tact4.jpg';
        footimg5.src = 'img/tact5.jpg';
        footimg6.src = 'img/tact6.jpg';
        textbox.innerHTML = '게임상에서 주어진 모든 전략적 요소를 활용하여 적을 없애고 목적을 달성해야 하는 방식의 게임입니다. 일반적으로 전략 시뮬레이션은 전략이 게임의 승패를 가리는데 큰 역할을 수행하는 게임을 통칭합니다. 주의할 점으로, 단순히 주어진 유닛 몇 개를 가지고 정해진 좁은 맵 상에서 싸우는 정도의 게임에 전략 시뮬레이션이란 단어를 붙이는 것은 부적절합니다. 이런 게임에는 전술 시뮬레이션 또는 전술 게임이란 단어가 더 어울립니다. 전술이 단순히 개별 유닛을 어떻게 운용해서 싸울 것인가를 결정하는 개념이라면, 전략은 국지 단위의 전술적인 면을 포함해서 광역단위의 외교, 생산, 행정 등의 더 큰 개념까지 포함하는 개념입니다.'
        break;        
            case 311 : 
            title2.innerHTML = 'TURN BASED, 턴제 전략 게임';
            footimg1.src = 'img/turn1.png';
            footimg2.src = 'img/turn2.jpg';
            footimg3.src = 'img/turn3.jpg';
            footimg4.src = 'img/turn4.jpg';
            footimg5.src = 'img/turn5.jpg';
            footimg6.src = 'img/turn6.jpg';
            textbox.innerHTML = '상대의 턴이 끝났습니다. 병력을 더 뽑을까요? 돈을 더 생산할까요? 어느 유닛을 어느 타일로 배치할까요? 천천히 생각하셔도 괜찮습니다. 다만, 한번 정한 일은 바꿀 수 없다는 것 명심해야 합니다.<br><br>턴제 전략 게임은 플레이어들이 차례대로 돌아가면서 명령을 수행하며 거시적인 전략을 다루는 전쟁 게임입니다. 플레이어들이 동시에 게임을 진행하는 실시간 전략 게임과는 다르게 한 플레이어가 차례를 끝내야 다음 플레이어의 차례가 돌아가죠. 때문에 빠른 손놀림과 같은 피지컬보다 훨씬 전황을 멀리서, 크게 바라볼 줄 아는 것이 중요합니다. 관리해야 하는 요소도 상대적으로 많죠. 이런 요소들을 하나하나 철저하게, 계획적으로 관리해 상대방을 압도했을 때의 쾌감은 피지컬로 이겼을 때와는 결이 다른 쾌감을 선사할 겁니다.<br><br>이제 당신의 턴입니다!'
            break;        
            case 312 : 
            title2.innerHTML = 'Real Time Stradgy, 실시간 전략 게임';
            footimg1.src = 'img/rts1.jpg';
            footimg2.src = 'img/rts2.jpg';
            footimg3.src = 'img/rts3.jpg';
            footimg4.src = 'img/rts4.jpg';
            footimg5.src = 'img/rts5.jpg';
            footimg6.src = 'img/rts6.jpg';
            textbox.innerHTML = '자원을 캐서 기지를 짓고 병력을 뽑아내 적을 공격하십시오! 이런, 도중에 적이 쳐들어왔군요. 방어해야 합니다, 사령관님! 두고 볼 수 만은 없죠. 적의 기지를 침략해 점령하여 우리 진영을 승리로 이끄셔야 합니다!<br><br>실시간 전략 게임은 자원, 유닛, 상성, 시간 등 게임상에서 주어진 모든 전략적 요소를 활용하여 적을 없애고 목적을 달성해야 하는 방식의 게임입니다. 턴제 게임과 달리 전략을 게울 여유와 시간조차도 당신이 쓸 수 있는 자원중 하나입니다. 이런 자원들은 모두 한정되어 있어 효율을 가장 중요시 해야하죠. 적과의 상성또한 묘미입니다. 태생적으로 우리 진영이 적보다 유리할 수도, 불리할 수도 있습니다. 하지만 걱정마십시오. 기본적으로 당신의 운영에 모든 것이 달려있습니다. 매 판마다 무한한 경우의 수가 존재하죠.<br><br>이런 혹독한 전장으로 뛰어들 준비가 되셨습니까?'
            break;        
            case 313 : 
            title2.innerHTML = 'Aeon Of Strife, 다중 사용자 온라인 전투 아레나';
            footimg1.src = 'img/aos1.jpg';
            footimg2.src = 'img/aos2jpg';
            footimg3.src = 'img/aos3.jpg';
            footimg4.src = 'img/aos4.jpg';
            footimg5.src = 'img/aos5.jpg';
            footimg6.src = 'img/aos6.jpg';
            textbox.innerHTML = '레벨과 스킬을 올려 영웅을 강화시키고 상대방의 진영을 파괴하십시오! 매 순간순간 무엇을 할지 제대로 결정해야 합니다. 이번 한타는 승리할 수 있을까요?<br><br>스타크래프트의 유즈맵, Aeon od Strife의 게임 이름이자 그곳에서 시작된 장르 AOS에서는 거의 모든 장르의 인기 요소를 맛볼 수 있습니다. 몬스터를 잡아 트리를 올리는 육성, 매 초 운영을 강제하는 전략, 시원시원하고 번쩍이는 스킬의 액션, 좋은 아이템을 골라 사는 자원 관리와 한 끗 차이로 전투의 승패가 갈리는 세심한 컨트롤. 그만큼 배우기도 잘하기도 어렵지만 한번 익숙해지면 바로 다음 판을 시작하는 당신을 발견할 겁니다. 아직도 세상의 수많은 유저들이 AOS를 플레이하고 있죠. 한국의 pc방을 10년 넘게 점거하고 있는 LOL로 AOS 장르입니다.<br><br>당신의 영웅을 선택하셨나요?'
            break;        
            case 314 : 
            title2.innerHTML = 'Battle Royal, 배틀로얄 게임';
            footimg1.src = 'img/bt1.jpg';
            footimg2.src = 'img/bt2.jpg';
            footimg3.src = 'img/bt3.jpg';
            footimg4.src = 'img/bt4.jpg';
            footimg5.src = 'img/bt5.jpg';
            footimg6.src = 'img/bt6.jpg';
            textbox.innerHTML = '수많은 사람과 경쟁하는 전장, 좋은 곳에 떨어지셨나요? 무기와 탄약, 보급품을 챙기십시오. 자기장이 좁혀옵니다. 다른 팀을 죽이고 살아남아 최후의 생존자가 되십시오!<br><br>배틀로얄 게임은 넓은 맵에서 한 사람, 혹은 한 팀만이 살아남을 때까지 싸워 승자를 가리는 게임입니다. 어떤 보급품이 어디 있을지, 자기장은 어디로 향할지, 사람들과 언제 마주칠 지와 같은 운적인 요소와 어디로 떨어질 지, 어디로 향할 지, 어떻게 갈 지 등등과 같은 전략적 요소들이 절묘하게 밸런스를 갖춰 차원이 다른 긴장감이 됩니다. 괜히 유사 공포게임이라고 부르는 게 아니죠.  이런 긴장감에 익숙하지 않다면 첫판에 손을 덜덜 떨게 될 겁니다. 같은 맵이라도 매 판이 다른 경험을 선사하죠.<br><br>그럼 낙하산들 단단히 불들어 매셨습니까?'
            break;        
        case 32 : 
        title2.innerHTML = 'EXPERIENCE, 체험 게임';
        footimg1.src = 'img/simul1.jpg';
        footimg2.src = 'img/simul2.jpg';
        footimg3.src = 'img/simul3.jpg';
        footimg4.src = 'img/simul4.jpg';
        footimg5.src = 'img/simul5.jpg';
        footimg6.src = 'img/simul1.jpg';
        textbox.innerHTML = '원래 비디오 게임에서 일컫는 샌드박스는, 플레이어의 창조적 욕구에 대한 발현을 중시하는 일부 시뮬레이션 장르의 게임들을 가리키는 단어였습니다. 이후 21세기 들어서 변경 된 내용으로 단어의 의미가 확장되었습니다. 기존에는 자유도 높은 게임은 그냥 뭉뚱그려서 오픈월드로 불렀지만, 기술의 발전 및 트렌드의 변화로 인해 과거 오픈월드라고 칭하던 게임들 수준의 자유도는 요즘 나오는 웬만한 게임들은 전부 구현하고 있습니다.<br><br>샌드박스 게임은 막강한 자유도를 기반으로 하여, 특정한 목표가 없거나, 목표가 존재하더라도 그 목표를 유저가 능동적으로 조절할 수 있게 하거나 최소한으로 줄여 사용자가 하고 싶은 대로 플레이할 수 있게 하는 게임입니다. 목표를 달성해 성취감을 얻는 전통적인 게임의 전개보다는, 자신의 아바타로 가상의 세계를 탐험하는 가상 체험을 중요시합니다.<br><br>'
        break;   
            case 321 : 
            title2.innerHTML = 'DRIVE, 운전 게임';
            footimg1.src = 'img/simul1.jpg';
            footimg2.src = 'img/simul2.jpg';
            footimg3.src = 'img/simul3.jpg';
            footimg4.src = 'img/simul4.jpg';
            footimg5.src = 'img/simul5.jpg';
            footimg6.src = 'img/simul1.jpg';
            textbox.innerHTML = '원래 비디오 게임에서 일컫는 샌드박스는, 플레이어의 창조적 욕구에 대한 발현을 중시하는 일부 시뮬레이션 장르의 게임들을 가리키는 단어였습니다. 이후 21세기 들어서 변경 된 내용으로 단어의 의미가 확장되었습니다. 기존에는 자유도 높은 게임은 그냥 뭉뚱그려서 오픈월드로 불렀지만, 기술의 발전 및 트렌드의 변화로 인해 과거 오픈월드라고 칭하던 게임들 수준의 자유도는 요즘 나오는 웬만한 게임들은 전부 구현하고 있습니다.<br><br>샌드박스 게임은 막강한 자유도를 기반으로 하여, 특정한 목표가 없거나, 목표가 존재하더라도 그 목표를 유저가 능동적으로 조절할 수 있게 하거나 최소한으로 줄여 사용자가 하고 싶은 대로 플레이할 수 있게 하는 게임입니다. 목표를 달성해 성취감을 얻는 전통적인 게임의 전개보다는, 자신의 아바타로 가상의 세계를 탐험하는 가상 체험을 중요시합니다.<br><br>'
            break;        
            case 322 : 
            title2.innerHTML = 'TICOON, 경영 게임';
            footimg1.src = 'img/simul1.jpg';
            footimg2.src = 'img/simul2.jpg';
            footimg3.src = 'img/simul3.jpg';
            footimg4.src = 'img/simul4.jpg';
            footimg5.src = 'img/simul5.jpg';
            footimg6.src = 'img/simul1.jpg';
            textbox.innerHTML = ' 당신의 가게를 차려보세요! 당신이 꾸미는 모든것이 매출로 이어질 것입니다. 식자재는 얼마나? 인테리어는 어떻게? 하는지에 따라서 당신의 가게는 스타가게가 될 수도 있고 망한 가게가 될 수도 있습니다'
            break;        
            case 323 : 
            title2.innerHTML = 'DATING, 연애 게임';
            footimg1.src = 'img/simul1.jpg';
            footimg2.src = 'img/simul2.jpg';
            footimg3.src = 'img/simul3.jpg';
            footimg4.src = 'img/simul4.jpg';
            footimg5.src = 'img/simul5.jpg';
            footimg6.src = 'img/simul1.jpg';
            textbox.innerHTML = '사랑이 뭔지 궁금하신가요? 당신의 취향에 맞는 캐릭터와 사랑에 빠져보세요! 그녀의 취향, 취미, 관심사를 찾아내서 그녀의 마음을 공략해보세요. 그녀는 당신에게 푹 빠져서 헤어나오지 못할겁니다.<br><br>연애시뮬레이션 게임은 캐릭터마다 각기 다른 공략법을 가지고 선택지에 따라 호감도가 달라집니다. 잘못된 선택을 하면 그녀는 당신을 미워하거나 화를 내거나, 혹은 이별을 맞이할 수도 있지요. 당신이 생각하는 연애는 어떤가요? 당신이 생각하는 연애를 시뮬레이션해보세요! 로맨틱한 연애가 될 지, 으스스한 연애가 될 지는 당신의 선택에 따라 달라집니다.<br><br>사랑스러운 연인을 만날 준비가 다 되셨나요?'
            break;        
            case 324 : 
            title2.innerHTML = 'STUPID, 막장 게임';
            footimg1.src = 'img/simul1.jpg';
            footimg2.src = 'img/simul2.jpg';
            footimg3.src = 'img/simul3.jpg';
            footimg4.src = 'img/simul4.jpg';
            footimg5.src = 'img/simul5.jpg';
            footimg6.src = 'img/simul1.jpg';
            textbox.innerHTML = '원래 비디오 게임에서 일컫는 샌드박스는, 플레이어의 창조적 욕구에 대한 발현을 중시하는 일부 시뮬레이션 장르의 게임들을 가리키는 단어였습니다. 이후 21세기 들어서 변경 된 내용으로 단어의 의미가 확장되었습니다. 기존에는 자유도 높은 게임은 그냥 뭉뚱그려서 오픈월드로 불렀지만, 기술의 발전 및 트렌드의 변화로 인해 과거 오픈월드라고 칭하던 게임들 수준의 자유도는 요즘 나오는 웬만한 게임들은 전부 구현하고 있습니다.<br><br>샌드박스 게임은 막강한 자유도를 기반으로 하여, 특정한 목표가 없거나, 목표가 존재하더라도 그 목표를 유저가 능동적으로 조절할 수 있게 하거나 최소한으로 줄여 사용자가 하고 싶은 대로 플레이할 수 있게 하는 게임입니다. 목표를 달성해 성취감을 얻는 전통적인 게임의 전개보다는, 자신의 아바타로 가상의 세계를 탐험하는 가상 체험을 중요시합니다.<br><br>'
            break;          
        case 33 : 
        title2.innerHTML = 'SANDBOX, 샌드박스 게임';
        footimg1.src = 'img/sand1.jpeg';
        footimg2.src = 'img/sand2.jpg';
        footimg3.src = 'img/sand3.jpg';
        footimg4.src = 'img/sand4.jpg';
        footimg5.src = 'img/sand5.png';
        footimg6.src = 'img/sand6.jpg';
        textbox.innerHTML = '원래 비디오 게임에서 일컫는 샌드박스는, 플레이어의 창조적 욕구에 대한 발현을 중시하는 일부 시뮬레이션 장르의 게임들을 가리키는 단어였습니다. 이후 21세기 들어서 변경 된 내용으로 단어의 의미가 확장되었습니다. 기존에는 자유도 높은 게임은 그냥 뭉뚱그려서 오픈월드로 불렀지만, 기술의 발전 및 트렌드의 변화로 인해 과거 오픈월드라고 칭하던 게임들 수준의 자유도는 요즘 나오는 웬만한 게임들은 전부 구현하고 있습니다.<br><br>샌드박스 게임은 막강한 자유도를 기반으로 하여, 특정한 목표가 없거나, 목표가 존재하더라도 그 목표를 유저가 능동적으로 조절할 수 있게 하거나 최소한으로 줄여 사용자가 하고 싶은 대로 플레이할 수 있게 하는 게임입니다. 목표를 달성해 성취감을 얻는 전통적인 게임의 전개보다는, 자신의 아바타로 가상의 세계를 탐험하는 가상 체험을 중요시합니다.<br><br>'
        break;     

        case 4 : 
        title2.innerHTML = 'ADVENTURE, 어드벤쳐 게임';
        footimg1.src = 'img/adven1.jpg';
        footimg2.src = 'img/adven2.jpg';
        footimg3.src = 'img/adven3.jpg';
        footimg4.src = 'img/adven4.webp';
        footimg5.src = 'img/adven5.jpg';
        footimg6.src = 'img/adven6.jpg';
        textbox.innerHTML = '원래 비디오 게임에서 일컫는 샌드박스는, 플레이어의 창조적 욕구에 대한 발현을 중시하는 일부 시뮬레이션 장르의 게임들을 가리키는 단어였습니다. 이후 21세기 들어서 후술된 내용으로 단어의 의미가 확장되었습니다. 기존에는 자유도 높은 게임은 그냥 뭉뚱그려서 오픈월드로 불렀지만, 기술의 발전 및 트렌드의 변화로 인해 과거 오픈월드라고 칭하던 게임들 수준의 자유도는 요즘 나오는 웬만한 게임들은 전부 구현하고 있습니다.<br><br>샌드박스 게임은 막강한 자유도를 기반으로 하여, 특정한 목표가 없거나, 목표가 존재하더라도 그 목표를 유저가 능동적으로 조절할 수 있게 하거나 최소한으로 줄여 사용자가 하고 싶은 대로 플레이할 수 있게 하는 게임입니다. 목표를 달성해 성취감을 얻는 전통적인 게임의 전개보다는, 자신의 아바타로 가상의 세계를 탐험하는 가상 체험을 중요시합니다.'
        break;
        case 41 : 
        title2.innerHTML = 'SURVIVAL, 생존 게임';
        footimg1.src = 'img/surv1.jpg';
        footimg2.src = 'img/surv2.jpg';
        footimg3.src = 'img/surv3.webp';
        footimg4.src = 'img/surv4.jpg';
        footimg5.src = 'img/surv5.jpg';
        footimg6.src = 'img/surv6.jpg';
        textbox.innerHTML = '원래 비디오 게임에서 일컫는 샌드박스는, 플레이어의 창조적 욕구에 대한 발현을 중시하는 일부 시뮬레이션 장르의 게임들을 가리키는 단어였습니다. 이후 21세기 들어서 후술된 내용으로 단어의 의미가 확장되었습니다. 기존에는 자유도 높은 게임은 그냥 뭉뚱그려서 오픈월드로 불렀지만, 기술의 발전 및 트렌드의 변화로 인해 과거 오픈월드라고 칭하던 게임들 수준의 자유도는 요즘 나오는 웬만한 게임들은 전부 구현하고 있습니다.<br><br>샌드박스 게임은 막강한 자유도를 기반으로 하여, 특정한 목표가 없거나, 목표가 존재하더라도 그 목표를 유저가 능동적으로 조절할 수 있게 하거나 최소한으로 줄여 사용자가 하고 싶은 대로 플레이할 수 있게 하는 게임입니다. 목표를 달성해 성취감을 얻는 전통적인 게임의 전개보다는, 자신의 아바타로 가상의 세계를 탐험하는 가상 체험을 중요시합니다.<br><br>'
        break;        
        case 44 : 
        title2.innerHTML = 'OPEN WORLD, 오픈 월드 게임';
        footimg1.src = 'img/surv1.jpg';
        footimg2.src = 'img/surv2.jpg';
        footimg3.src = 'img/surv3.webp';
        footimg4.src = 'img/surv4.jpg';
        footimg5.src = 'img/surv5.jpg';
        footimg6.src = 'img/surv6.jpg';
        textbox.innerHTML = '원래 비디오 게임에서 일컫는 샌드박스는, 플레이어의 창조적 욕구에 대한 발현을 중시하는 일부 시뮬레이션 장르의 게임들을 가리키는 단어였습니다. 이후 21세기 들어서 후술된 내용으로 단어의 의미가 확장되었습니다. 기존에는 자유도 높은 게임은 그냥 뭉뚱그려서 오픈월드로 불렀지만, 기술의 발전 및 트렌드의 변화로 인해 과거 오픈월드라고 칭하던 게임들 수준의 자유도는 요즘 나오는 웬만한 게임들은 전부 구현하고 있습니다.<br><br>샌드박스 게임은 막강한 자유도를 기반으로 하여, 특정한 목표가 없거나, 목표가 존재하더라도 그 목표를 유저가 능동적으로 조절할 수 있게 하거나 최소한으로 줄여 사용자가 하고 싶은 대로 플레이할 수 있게 하는 게임입니다. 목표를 달성해 성취감을 얻는 전통적인 게임의 전개보다는, 자신의 아바타로 가상의 세계를 탐험하는 가상 체험을 중요시합니다.'
        break;     
 
        case 43 : 
        title2.innerHTML = 'Role Playing Game, 롤 플레잉 게임';
        footimg1.src = 'img/rpg1.jpg';
        footimg2.src = 'img/rpg2.jpg';
        footimg3.src = 'img/rpg3.jpg';
        footimg4.src = 'img/rpg4.jpg';
        footimg5.src = 'img/rpg5.jpg';
        footimg6.src = 'img/rpg6.jpg';
        textbox.innerHTML = '원래 롤플레잉 게임은 주로 게임 마스터의 주관아래 플레이어들이 각각 캐릭터들을 맡아 연기하면서 즐기는 보드 게임, 즉 TRPG를 뜻했다. 완전히 게임 마스터 맘대로는 아니고 상황과 규칙에 따라 주사위를 굴려 결과를 내는 등 복잡한 게임 룰이 쓰이기도 한다. 다른 어떤 파티 게임보다도 마스터(=게임 관리자)의 역량이 중시되는 엔터테인먼트로, 멤버들을 적절히 몰입시키는 입담과 공정한 룰 준수 기준, 한명 한명에게 신경 써주는 섬세함, 적절한 시나리오 제작 능력 등이 받쳐주지 않으면 게임이 성립되기 힘들다. 그리고 훌륭한 던전 마스터에 의하여 유도된 플레이어의 적극적인 참여, 이로 인한 창발적 전개라는 요소는 새로운 엔터테인먼트 양식을 탄생시켰기 때문에 RPG계에는 이런 말도 있을 정도다.'
        break;     
            case 431 : 
            title2.innerHTML = 'JRPG, 일본식 롤 플레잉 게임';
            footimg1.src = 'img/rpg1.jpg';
            footimg2.src = 'img/rpg2.jpg';
            footimg3.src = 'img/rpg3.jpg';
            footimg4.src = 'img/rpg4.jpg';
            footimg5.src = 'img/rpg5.jpg';
            footimg6.src = 'img/rpg6.jpg';
            textbox.innerHTML = '일본 특유의 모에함을 느껴보고싶지않으신가요? 도트, 2D, 3D.. 당신의 입맛에 맞는 귀여운 캐릭터들과 함께 여행을 떠나보세요!<br><br>일본식 RPG게임은 우리에게 친근합니다.  정해진 레벨을 따라가면서 몇가지 정해진 행동만을 플레이하면서 스토리를 즐겨보세요. 주인공 역시 플레이어의 분신이라기보다는 가치관이 정해져 있는 경우가 많아, 플레이어가 스스로 모험을 한다는 느낌보다 주인공의 이야기를 따라가면서 주인공이 성장하는 스토리를 눈으로 확인하세요! <br><br>주인공이 어떻게 성장할 지 궁금하지않나요?'
            break;        
            case 432 : 
            title2.innerHTML = 'WRPG, 서양식 롤 플레잉 게임';
            footimg1.src = 'img/rpg1.jpg';
            footimg2.src = 'img/rpg2.jpg';
            footimg3.src = 'img/rpg3.jpg';
            footimg4.src = 'img/rpg4.jpg';
            footimg5.src = 'img/rpg5.jpg';
            footimg6.src = 'img/rpg6.jpg';
            textbox.innerHTML = '서구권 감성을 느껴보세요. 직접 커스터마이징한 캐릭터들을 움직이면서 자유도 높은 게임방식과 다소 불친절한 NPC들을 만나며 당신의 캐릭터를 입맛에 맞게 키워보세요.<br><br>전통적으로 WRPG는 게임이 제공한 세상에서 자신을 표현하는 것을 중시여깁니다. 따라서 미리 정해진 주인공들보다는 본인이 직접 커스터마이징하며 퀘스트와 대화 선택을 매우 중요하게 여기고 동선을 따라 정해진 경로로 퀘스트를 진행하는게 아니라 오픈월드로서 플레이어가 해당 세상을 즐기며 자유롭게 게임을 풀어가는 형태가 많습니다. 이는 오픈월드라는 용어가 사용되기 전부터 WRPG가 가지고 있던 특징이죠.<br><br>당신의 분신을 키워보세요.'
            break;        
            case 433 : 
            title2.innerHTML = 'MMORPG, 대규모 멀티 롤 플레잉 게임';
            footimg1.src = 'img/rpg1.jpg';
            footimg2.src = 'img/rpg2.jpg';
            footimg3.src = 'img/rpg3.jpg';
            footimg4.src = 'img/rpg4.jpg';
            footimg5.src = 'img/rpg5.jpg';
            footimg6.src = 'img/rpg6.jpg';
            textbox.innerHTML = '혼자하는 RPG가 이젠 지겹지 않으시나요? 다른 유저와 함께 퀘스트를 깨고 당신의 캐릭터를 더욱 강하게 성장시켜보세요.<br><br>수십만명의 유저들이 각기 다른 역할을 가지고 게임을 진행할 것입니다. 당신과 맞는 모험가를 찾아서 몬스터를 무찌르고 보상을 받으십시오. 더이상 혼자하는 게임이 아닌 협동심을 가지고 게임을 진행해보세요. 혼자 하는 RPG는 이제 그만, 게임 속 세계에서 여행을 떠나며 협력하며 살아가보시죠!<br><br>당신은 더이상 혼자가 아닙니다. 함께 떠나보세요!'
            break;       
        case 42 : 
        title2.innerHTML = 'Action-Adventure, 액션 어드벤쳐 게임';
        footimg1.src = 'img/acad1.jpg';
        footimg2.src = 'img/acad2.jpg';
        footimg3.src = 'img/acad3.jpg';
        footimg4.src = 'img/acad4.jpg';
        footimg5.src = 'img/acad5.jpg';
        footimg6.src = 'img/acad6.jpg';
        textbox.innerHTML = '액션 게임은 일자 진행이 거의 대부분이었기에 적절한 레벨 디자인이 아니고서야 후반에 갈수록 단조로워지는 단점이 있었습니다. 어드벤처 게임들은 당시 CD-ROM의 시대가 오면서 강점이었던 스토리텔링이 타 장르가 용량 문제를 해결하면서 하나둘씩 모두 차용하는 등 장점이 약화되었으며, 그래픽에서는 2D 시절부터 업계에서는 프로그래머의 비중이 적었던 탓에 후에 3D로의 그래픽 전환이 더뎌졌습니다.<br><br>어드벤처 게임 장르의 특성상 큰 사양을 요구하지 않았기에 프로그래밍보다는 미술 디자인에 치중하였습니다. 결국 가장 대중적이고 직감적인 조작성과 함께 적을 쓰러트리는 재미 등으로 스트레스 해소에 일가견이 있었던 액션 게임의 장점과 어드벤처 게임 본연의 탐색(길 찾기), 퍼즐, 스토리텔링 등을 더해서 새로운 돌파구로 나오게 된 혼합 장르입니다.<br><br>'
        break;     
            case 421 : 
            title2.innerHTML = 'STYLISH, 스타일리쉬 액션 게임';
            footimg1.src = 'img/styl1.jpg';
            footimg2.src = 'img/styl2.webp';
            footimg3.src = 'img/styl3.jpg';
            footimg4.src = 'img/styl4.jpg';
            footimg5.src = 'img/styl5.png';
            footimg6.src = 'img/styl6.jpg';
            textbox.innerHTML = '타 장르 액션 어드벤처 게임들과 비교해 눈에 띄게 반사적이고 빠른 액션이 핵심으로, 2D 액션 게임에서 볼법한 타이트한 호흡을 3D로 옮겨온 것이라 보면 됩니다. 따라서 방어적인 측면이 상당히 약화되는 대신 회피, 콤보, 파워업, 반격을 살려 액션의 깊이를 강조합니다. 이중 콤보 개념이 매우 중요시되는데, 대부분 콤보에 랭크 시스템이 부가되며 유저들이 자신의 콤보를 녹화해 인터넷에 공유하는 경우가 많으며 파고들면 파고들수록 온갖 고수들의 창의적인 콤보를 감상할 수 있습니다.<br><br>기본적으로 캐릭터의 액션을 감상할 수 있는 3인칭으로 제작된다. 또한 장르 특성상 캐릭터가 쉴 새 없이 빠르게 움직이기 때문에 캐릭터가 중앙에 위치한 자유 시점이 아닌 고정 시점으로 제작되는 경우가 많아서 초창기 스타일리시 게임들이 시점으로 인해 개발과 게임성에 차질이 생기는 경우가 많았습니다. 여기에 장르적 특성상 주인공의 강력함을 어필하거나 쉽사리 굴복하지 않는 모습을 보여줘야 하는데 이 때문에 컷신이나 작중 연출로서 주인공의 강력함을 어필하는 경우가 매우 많습니다.<br><br>'
            break;        
            case 422 : 
            title2.innerHTML = 'INTERACTIVE MOVIE, 인터렉티브 무비';
            footimg1.src = 'img/int1.jpg';
            footimg2.src = 'img/int2.jpg';
            footimg3.src = 'img/int3.jpg';
            footimg4.src = 'img/int4.jpg';
            footimg5.src = 'img/int5.jpg';
            footimg6.src = 'img/int6.jpg';
            textbox.innerHTML = '최초의 인터랙티브 무비 형식 게임은 1982년에 나온 롤러코스터(Rollercoaster)인데, 놀랍게 베이식(BASIC) 언어로 만들어진 텍스트 어드벤처 게임입니다. 최초의 상업적 인터랙티브 무비 형식 게임은 1983년에 나왔는데, 일본의 세가에서 낸 아스트로 벨트, 미국의 시네마 트로닉스에서 유통한 드래곤즈 레어(Dragons Lair) 등이 있습니다. 상업적으로 보면 용의 굴의 압승. 또, 1992년에 나온 나이트 트랩도 있습니다. 하지만 1990년대 중후반부터 쇠퇴하면서 차후에는 거의 멸종된 장르입니다. 다만, 꾸준히 출시되기는 하며, 21세기에 출시된 대표작이라면 워킹 데드와 헤비 레인 등이 있습니다.'
            break;        
            case 423 : 
            title2.innerHTML = 'HORROR, 공포 게임';
            footimg1.src = 'img/horr1.jpg';
            footimg2.src = 'img/horr2.jpg';
            footimg3.src = 'img/horr3.jpg';
            footimg4.src = 'img/horr4.jpg';
            footimg5.src = 'img/horr5.jpg';
            footimg6.src = 'img/horr6.jpg';
            textbox.innerHTML = '호러 게임은 일반적으로 호러물이 제작되는 여러 매체들 중에서도 사용자에게 주는 자극과 공포의 강도가 제일 큰 편입니다. 그 이유는 간단히 말하면 몰입감이 다르기 때문이며, 더 자세히 이야기하면 상호 작용의 깊이가 다르기 때문입니다. 예를 들어 저 문 뒤에 뭔가가 있고 거기로 가야 할 때, 공포 영화나 공포 소설은 주인공이나 다른 등장인물이 그 문을 엽니다. 하지만 호러 게임은 내가 직접 조작해서 저 문을 열어야 합니다. 괴물에게서 도망칠 때에도 내가 조작해 도망쳐야 하며, 괴물과 싸울 때에도 내가 조작해서 싸워야 합니다. 점프 스케어 이벤트가 일어났을 때 영화의 경우 가만히 있으면 다음 장면으로 넘어가지만 게임은 공포감을 추스를 새도 없이 손을 움직여 캐릭터를 조작해야 하며, 제대로 조작하지 못하면 캐릭터가 죽게 됩니다.'
            break;    

        case 5 : 
        title2.innerHTML = 'ACTION, 액션 게임';
        footimg1.src = 'img/stel1.jpg';
        footimg2.src = 'img/stel2.jpg';
        footimg3.src = 'img/stel3.jpg';
        footimg4.src = 'img/stel4.jpg';
        footimg5.src = 'img/stel5.jpg';
        footimg6.src = 'img/stel6.jpg';
        textbox.innerHTML = '일정한 스토리/배경에 따라 실시간으로 캐릭터의 행동을 버튼 등을 통해 직접 조작하는 비디오 게임의 총칭.<br><br>기본적으로는 버튼을 조작하여 캐릭터를 움직이는 게임 전반을 가리키므로 매우 폭넓은 장르를 포함하는 분류다. 초기 게임 역사에는 게임 장르의 한축을 맡았지만 아주 기본적인 요소인지라 후기로 갈수록 다양한 장르와 결합되어 발전해나갔다. 따라서 현재 시판되는 게임들 중에서 순수 액션 게임은 거의 없지만 액션 게임 자체가 사라진 것은 아니다. 너무나 당연한 요소인지라 거의 모든 게임들이 기본적으로 탑재하고 있을 뿐이다.'
        break;
        case 51 : 
        title2.innerHTML = 'STEALTH, 잠입 게임';
        footimg1.src = 'img/stel1.jpg';
        footimg2.src = 'img/stel2.jpg';
        footimg3.src = 'img/stel3.jpg';
        footimg4.src = 'img/stel4.jpg';
        footimg5.src = 'img/stel5.jpg';
        footimg6.src = 'img/stel6.jpg';
        textbox.innerHTML = '잠입 액션 게임은 적에게 들키지 않고 목표를 완수(적의 본거지에 잠입하여 비밀 공작, 암살 등)하는 것이 목적인 액션 게임/액션 어드벤처 게임의 하위 장르. 메탈기어 시리즈의 유명세로 인해 액션 게임의 하위 장르로 인식되지만 사실 잠입이라는 요소가 꼭 액션 게임의 방법론으로만 묘사될 필요는 없기에, 영문 위키피디아에서는 단순히 Stealth game이라는 범주 내에서 다루고 있다.<br><br>캐릭터를 직접 움직인다는 점에서 액션 게임이지만 대부분의 액션 게임들이 적과 직접 마주보며 싸우는 것을 전제로 하는 데 비해 잠입 액션 게임은 기본적으로 적에게 인지되는 것을 피하는 것을 기본으로 한다. 이는 단순 시야를 피하는 것뿐 아니라 어둠 속에 숨거나 변장을 하는 것도 포함된다. 일단 적이 주인공을 적으로 인지하거나 경계하지 않는 것이 골자.'
        break;        
        case 52 : 
        title2.innerHTML = 'PLATFORM, 플랫폼 게임';
        footimg1.src = 'img/plat1.avif';
        footimg2.src = 'img/plat2.avif';
        footimg3.src = 'img/plat3.jpg';
        footimg4.src = 'img/plat4.png';
        footimg5.src = 'img/plat5.jpg';
        footimg6.src = 'img/plat6.jpg';
        textbox.innerHTML = '플랫폼 게임이란 게임의 형식 또는 장르. 플랫포머나 점프 앤 런이라고도 한다. 플랫폼이란 발판을 의미한다. 따라서 플랫포머 게임이란 발판이 등장하는 게임을 뜻한다. 어떤 장르와 결합되었든 기본적으로 액션 게임의 하위 부류다.<br><br>구체적으로는 플레이어가 캐릭터를 조종할 때 발판 위를 뛰어다니는 점프 컨트롤이 중요한 게임 장르를 의미한다.<br><br>용어 자체는 늦어도 1983년부터 쓰여왔다고 알려져있으나, 적어도 일본이나 한국에서는 전혀 쓰이지 않았던 용어로 보통 벨트스크롤 액션 게임과 묶어서 액션 게임 혹은 횡으로 스크롤 할 경우에는 횡스크롤 액션 게임 정도로만 부른다. 적어도 동양권은 이런식으로 장르를 세세하고 구분하고 부르는 문화 자체가 없다. 간혹 플랫폼 게임이라는 말을 듣고 횡스크롤 혹은 사이드뷰 게임을 플랫폼 게임 이라고 오해할 수도 있으나 플랫폼 게임 자체에는 단순히 2D게임 이외에도 3D 액션 게임도 포함하고 있다.'
        break;     
            case 521 : 
            title2.innerHTML = 'METROBANIA, 메트로배니아 게임';
            footimg1.src = 'img/plat1.avif';
            footimg2.src = 'img/plat2.avif';
            footimg3.src = 'img/plat3.jpg';
            footimg4.src = 'img/plat4.png';
            footimg5.src = 'img/plat5.jpg';
            footimg6.src = 'img/plat6.jpg';
            textbox.innerHTML = '액션 게임의 하위 장르. 다만 세이브와 다양한 아이템이 존재하기 때문에 원래는 액션 RPG쪽에 더 가깝게 분류되었다. 메트로이드 + 캐슬배니아가 어원으로 대표적인 like 장르의 하나이다. 이전에도 던전 탐색이 위주인 게임은 있었으나 그 기틀이 제대로 잡히고 대중의 인식에 각인된 것이 메트로이드와 악마성 시리즈이기에 이렇게 불린다. 메트로이드 시리즈(특히 슈퍼 메트로이드)가 장르를 창시하였고, 캐슬배니아 시리즈가 월하의 야상곡부터 메트로이드의 스타일을 이어받아 장르를 확립시켰기 때문이다.<br><br>정작 이 장르의 창시자인 메트로이드 시리즈는 2004년에 메트로이드 제로 미션이 출시된 이후 2017년까지 13년이라는 긴 세월 동안 2D 횡스크롤 장르의 메트로이드는 출시되지 않았었다.장르의 이름이 로그라이크나 소울라이크와 같은 메트로라이크가 아니라 메트로배니아가 된 것에는 이 영향도 어느 정도 있으며, 이후에 발매된 동장르의 게임도 메트로이드보단 월하의 야상곡의 영향이 강하다.'
            break;        
            case 522 : 
            title2.innerHTML = 'PRICISION, 정밀 플랫포머 게임';
            footimg1.src = 'img/plat1.avif';
            footimg2.src = 'img/plat2.avif';
            footimg3.src = 'img/plat3.jpg';
            footimg4.src = 'img/plat4.png';
            footimg5.src = 'img/plat5.jpg';
            footimg6.src = 'img/plat6.jpg';
            textbox.innerHTML = '액션 게임의 하위 장르. 다만 세이브와 다양한 아이템이 존재하기 때문에 원래는 액션 RPG쪽에 더 가깝게 분류되었다. 메트로이드 + 캐슬배니아가 어원으로 대표적인 like 장르의 하나이다. 이전에도 던전 탐색이 위주인 게임은 있었으나 그 기틀이 제대로 잡히고 대중의 인식에 각인된 것이 메트로이드와 악마성 시리즈이기에 이렇게 불린다. 메트로이드 시리즈(특히 슈퍼 메트로이드)가 장르를 창시하였고, 캐슬배니아 시리즈가 월하의 야상곡부터 메트로이드의 스타일을 이어받아 장르를 확립시켰기 때문이다.<br><br>정작 이 장르의 창시자인 메트로이드 시리즈는 2004년에 메트로이드 제로 미션이 출시된 이후 2017년까지 13년이라는 긴 세월 동안 2D 횡스크롤 장르의 메트로이드는 출시되지 않았었다.장르의 이름이 로그라이크나 소울라이크와 같은 메트로라이크가 아니라 메트로배니아가 된 것에는 이 영향도 어느 정도 있으며, 이후에 발매된 동장르의 게임도 메트로이드보단 월하의 야상곡의 영향이 강하다.'
            break;        
        case 53 : 
        title2.innerHTML = 'FIGHT, 대전 게임';
        footimg1.src = 'img/plat1.avif';
        footimg2.src = 'img/plat2.avif';
        footimg3.src = 'img/plat3.jpg';
        footimg4.src = 'img/plat4.png';
        footimg5.src = 'img/plat5.jpg';
        footimg6.src = 'img/plat6.jpg';
        textbox.innerHTML = '플레이어 간의 대전이라는 요소는 사실 게임의 근원에 가까운 요소이며 최초의 비디오 게임으로 알려진 PONG을 비롯한 게임계의 1세대 조상님들은 다들 대전 게임이었다. 유전자 레벨로 각인된 경쟁을 모사하는 미디어이기에 거의 대부분의 인간에게 잘 먹힌다고 할 수 있다. 더군다나 체스나 장기처럼 추상화되지 않고 캐릭터끼리 치고박는 원초적인 싸움의 형태가 시각적으로 다가오니 자극이 매우 강하다.<br><br>초창기에는 단순한 그래픽 출력조차도 매우 제한적이어서 그래픽은 시궁창이고 패키지에 포함된 장황한 설명서를 보고 뇌내보정을 해야하는 수준이었기에 대전 형식의 게임밖에 못 만드는 것에 가까웠다. 그 후 사정이 나아진 컴퓨터 게임(비디오 게임) 초기의 슈팅 게임이나 아케이드 게임에서도 핵심 컨텐츠는 PvE라 하더라도 게임의 지속성 등을 더하기 위해 스코어라는 요소를 통해 간접적인 대전을 지원했다.<br><br>'
        break;     
        case 54 : 
        title2.innerHTML = 'SCROLL, 스크롤 게임';
        footimg1.src = 'img/surv1.jpg';
        footimg2.src = 'img/surv2.jpg';
        footimg3.src = 'img/surv3.webp';
        footimg4.src = 'img/surv4.jpg';
        footimg5.src = 'img/surv5.jpg';
        footimg6.src = 'img/surv6.jpg';
        textbox.innerHTML = '시점을 자유롭게 구분할 수 없는 측면 고정 시점을 뜻하기 때문에, 몇몇 예외를 제외하면 거의 2D 게임에서 쓰이는 용어다. 3D 횡스크롤 게임도 존재는 한다.<br><br>모든 횡스크롤 슈팅 게임은 사이드뷰를 채택. 덕분에 서양권에선 그냥 사이드-스크롤링이라고 부른다. 런앤건, 벨트스크롤 액션 게임이나 메트로배니아, 대전 액션 게임 등의 장르에 사용되고 있다.<br><br>단조롭지 않은 진행을 위해 대부분 플랫폼 점프 액션이 필수요소이기 때문에 점프 액션을 싫어하는 사람들에겐 좀 고역일 수가 있다. 게임보다 먼저 상용화됐던, TV출력에 최적화된 방식이다.'
        break;     
            case 541 : 
            title2.innerHTML = 'BULLET SHOOTING, 탄막 슈팅 게임';
            footimg1.src = 'img/plat1.avif';
            footimg2.src = 'img/plat2.avif';
            footimg3.src = 'img/plat3.jpg';
            footimg4.src = 'img/plat4.png';
            footimg5.src = 'img/plat5.jpg';
            footimg6.src = 'img/plat6.jpg';
            textbox.innerHTML = '탄막 게임의 하위분류이자 종·횡 스크롤 슈팅 게임의 하위분류. 탄막 슈팅 게임이란 총알이 커튼처럼 빽빽히 화면을 채워나가는, 즉 탄막을 형성한다고 하여 지어진 장르명이다. 탄알이 막장이다 외국에서는 탄막에 해당하는 일본어를 발음대로 음역한 Danmaku나 Bullet Hell(총알 지옥)이라고도 불린다. 동방 프로젝트에서는 한자를 직역해 Curtain fire라는 단어를 쓰기도 했다.<br><br>이미 2차 대전 태평양 전선에서 일본군이 미군을 상대로 직접 체험(?)한 장르이기도 하다. 함선을 격침시키려는 일본군의 자살특공기와 이를 막으려는 미 함대의 방공전은 탄막 슈팅의 실사판을 제대로 보여줬다. '
            break;        
            case 542 : 
            title2.innerHTML = 'BELT SCROLL, 벨트 스크롤 게임';
            footimg1.src = 'img/surv1.jpg';
            footimg2.src = 'img/surv2.jpg';
            footimg3.src = 'img/surv3.webp';
            footimg4.src = 'img/surv4.jpg';
            footimg5.src = 'img/surv5.jpg';
            footimg6.src = 'img/surv6.jpg';
            textbox.innerHTML = '사이드뷰처럼 보이지만 필드에는 위아래가 있고, 등장하는 적을 차례차례 섬멸하며 전진하는 패턴을 반복하는 게임 구성에서, 가로로 긴 벨트를 좌우 스크롤 시키기를 반복하며 게임이 진행된다.<br><br>필드가 스크롤하는 액션이나 슈팅 게임은 예전부터 많이 있었지만, 사이드뷰의 X축 + Y축, 혹은 탑뷰의 X축 + Z축 만이 아니라 앞뒤 + 옆 + 높이 의 3축 전방향 이동이 가능하게 한 점이 가장 큰 특징[4]이며 이러한 특징이 장르를 성립시키는 계기가 되었다. 그렇기 때문에 위에서 2D에만 적합한 횡스크롤 액션게임이라고는 하나 실제 플레이는 3축을 다쓰는 3D이며, 이런 류를 2.5D라고 부르기도 한다.<br><br>캐릭터 스프라이트가 좌우 이동만 묘사되어 있기 때문에, 상하 이동의 조작을 하게 되면 캐릭터는 게걸음을 하면서 상하 이동을 하게 되어 어색해 보일 수 있다. 예를 들면, 오른쪽으로 걸어가는 모션을 취하고 있지만 실제로 캐릭터의 위치는 아래로 쭉 내려가고 있는 모습이 되겠다.'
            break;    
        case 55 : 
        title2.innerHTML = 'First Person Shooting, 1인칭 슈팅 게임';
        footimg1.src = 'img/plat1.avif';
        footimg2.src = 'img/plat2.avif';
        footimg3.src = 'img/plat3.jpg';
        footimg4.src = 'img/plat4.png';
        footimg5.src = 'img/plat5.jpg';
        footimg6.src = 'img/plat6.jpg';
        textbox.innerHTML = '프레임 측정은 자기가 하는 게임이 옵션에 따라 어느 정도로 랙이 걸리는지 객관적으로 알아볼 수 있게 하기 때문에 자기 컴퓨터나 폰이 이 게임을 돌리는 데에 적절한 사양인지 알아보는 데에 중요하다. 스팀 게임으로 프레임을 보려면 게임 내에서 설정하는 것이 아니라 게임을 나와서 스팀 창에서 설정하는 것도 가능하다. 스팀 게임이라면 게임에서 지원하지 않아도 프레임을 표시할 수 있어 유용.[20] 설정-게임 중-in game FPS counter에서 프레임을 볼 수 있게 설정할 수 있다. 삼성 갤럭시 시리즈 스마트폰도 몇몇 기종은 게임 튜너라 하는 삼성에서 만든 앱으로 게임의 프레임을 볼 수 있다.'
        break;     
    }
}



function headFn(){
    hdfrFn();
    switch (scene){
        default :
        nav1.innerHTML = 'GAMEMAP';
        nav2.innerHTML = '';
        nav3.innerHTML = '';
        break;
        case 1 : 
        nav1.innerHTML = 'CASUAL';
        nav2.innerHTML = '';
        nav3.innerHTML = '';
        break;
        case 11 : 
        nav1.innerHTML = 'CASUAL';
        nav2.innerHTML = 'PUZZLE';
        nav3.innerHTML = '';
        break;        
        case 12 : 
        nav1.innerHTML = 'CASUAL';
        nav2.innerHTML = 'RHYTHM';
        nav3.innerHTML = '';
        break;     
        case 13 : 
        nav1.innerHTML = 'CASUAL';
        nav2.innerHTML = 'BOARD';
        nav3.innerHTML = '';
        break;     

        case 2 : 
        nav1.innerHTML = 'SPORT';
        nav2.innerHTML = '';
        nav3.innerHTML = '';
        break;
        case 21 : 
        nav1.innerHTML = 'SPORT';
        nav2.innerHTML = 'RACE';
        nav3.innerHTML = '';
        break;        
        case 22 : 
        nav1.innerHTML = 'SPORT';
        nav2.innerHTML = 'BALL';
        nav3.innerHTML = '';
        break;     
        case 23 : 
        nav1.innerHTML = 'SPORT';
        nav2.innerHTML = 'EXTREME';
        nav3.innerHTML = '';
        break;    
        
        case 3 : 
        nav1.innerHTML = 'SIMULATOR';
        nav2.innerHTML = '';
        nav3.innerHTML = '';
        break;
        case 31 : 
        nav1.innerHTML = 'SIMULATOR';
        nav2.innerHTML = 'TACTICAL';
        nav3.innerHTML = '';
        break;        
            case 311 : 
            nav1.innerHTML = 'SIMULATOR';
            nav2.innerHTML = 'TACTICAL';
            nav3.innerHTML = 'TURN BASED';
            break;   
            case 312 : 
            nav1.innerHTML = 'SIMULATOR';
            nav2.innerHTML = 'TACTICAL';
            nav3.innerHTML = 'RTS';
            break;   
            case 313 : 
            nav1.innerHTML = 'SIMULATOR';
            nav2.innerHTML = 'TACTICAL';
            nav3.innerHTML = 'AOS';
            break;  
            case 314 : 
            nav1.innerHTML = 'SIMULATOR';
            nav2.innerHTML = 'TACTICAL';
            nav3.innerHTML = 'BATTLE ROYAL';
            break;  
        case 32 : 
        nav1.innerHTML = 'SIMULATOR';
        nav2.innerHTML = 'EXPERIENCE';
        nav3.innerHTML = '';
        break;     
            case 321 : 
            nav1.innerHTML = 'SIMULATOR';
            nav2.innerHTML = 'EXPERIENCE';
            nav3.innerHTML = 'DRIVE';
            break;   
            case 322 : 
            nav1.innerHTML = 'SIMULATOR';
            nav2.innerHTML = 'EXPERIENCE';
            nav3.innerHTML = 'TICOON';
            break;   
            case 323 : 
            nav1.innerHTML = 'SIMULATOR';
            nav2.innerHTML = 'EXPERIENCE';
            nav3.innerHTML = 'DATING';
            break;  
            case 324 : 
            nav1.innerHTML = 'SIMULATOR';
            nav2.innerHTML = 'EXPERIENCE';
            nav3.innerHTML = 'STUPID';
            break;  
        case 33 : 
        nav1.innerHTML = 'SIMULATOR';
        nav2.innerHTML = 'SANDBOX';
        nav3.innerHTML = '';
        break;     

        case 4 : 
        nav1.innerHTML = 'ADVENTURE';
        nav2.innerHTML = '';
        nav3.innerHTML = '';
        break;
        case 41 : 
        nav1.innerHTML = 'ADVENTURE';
        nav2.innerHTML = 'SURVIVAL';
        nav3.innerHTML = '';
        break;        
        case 44 : 
        nav1.innerHTML = 'ADVENTURE';
        nav2.innerHTML = 'OPEN WORLD';
        nav3.innerHTML = '';
        break;     
        case 43 : 
        nav1.innerHTML = 'ADVENTURE';
        nav2.innerHTML = 'RPG';
        nav3.innerHTML = '';
        break;    
            case 431 : 
            nav1.innerHTML = 'ADVENTURE';
            nav2.innerHTML = 'RPG';
            nav3.innerHTML = 'JRPG';
            break;     
            case 432 : 
            nav1.innerHTML = 'ADVENTURE';
            nav2.innerHTML = 'RPG';
            nav3.innerHTML = 'WRPG';
            break;     
            case 433 : 
            nav1.innerHTML = 'ADVENTURE';
            nav2.innerHTML = 'RPG';
            nav3.innerHTML = 'MMORPG';
            break;      
        case 42 : 
        nav1.innerHTML = 'ADVENTURE';
        nav2.innerHTML = 'ACTION|ADVENTURE';
        nav3.innerHTML = '';
        break;     
            case 421 : 
            nav1.innerHTML = 'ADVENTURE';
            nav2.innerHTML = 'ACTION|ADVENTURE';
            nav3.innerHTML = 'STYRISH';
            break;     
            case 422 : 
            nav1.innerHTML = 'ADVENTURE';
            nav2.innerHTML = 'ACTION|ADVENTURE';
            nav3.innerHTML = 'INTTRACTIVE MOVIE';
            break;     
            case 423 : 
            nav1.innerHTML = 'ADVENTURE';
            nav2.innerHTML = 'ACTION|ADVENTURE';
            nav3.innerHTML = 'HORROR';
            break;   

        case 5 : 
        nav1.innerHTML = 'ACTION';
        nav2.innerHTML = '';
        nav3.innerHTML = '';
        break;
        case 51 : 
        nav1.innerHTML = 'ACTION';
        nav2.innerHTML = 'STELTH';
        nav3.innerHTML = '';
        break;        
        case 52 : 
        nav1.innerHTML = 'ACTION';
        nav2.innerHTML = 'PLATFORM';
        nav3.innerHTML = '';
        break;     
            case 521 : 
            nav1.innerHTML = 'ACTION';
            nav2.innerHTML = 'PLATFORM';
            nav3.innerHTML = 'METROBANIA';
            break;             
            case 522 : 
            nav1.innerHTML = 'ACTION';
            nav2.innerHTML = 'PLATFORM';
            nav3.innerHTML = 'PRECISION';
            break;     
        case 53 : 
        nav1.innerHTML = 'ACTION';
        nav2.innerHTML = 'FIGHT';
        nav3.innerHTML = '';
        break;     
        case 54 : 
        nav1.innerHTML = 'ACTION';
        nav2.innerHTML = 'SCROLL';
        nav3.innerHTML = '';
        break;     
            case 541 : 
            nav1.innerHTML = 'ACTION';
            nav2.innerHTML = 'SCROLL';
            nav3.innerHTML = 'BULLET SHOOTING';
            break;             
            case 542 : 
            nav1.innerHTML = 'ACTION';
            nav2.innerHTML = 'SCROLL';
            nav3.innerHTML = 'BELT SCROLL';
            break;     
        case 55 : 
        nav1.innerHTML = 'ACTION';
        nav2.innerHTML = 'FPS';
        nav3.innerHTML = '';
        break;     

    }
}

function mamvFn(){
    switch (scene){
        default :
        moveX = 0;
        moveY = 0;
        moveFn();
        break;

        case 1 : 
        moveX = 0;
        moveY = 427;
        scene = 1;
        moveFn();
        break;
        case 11 : 
        moveX = 436;
        moveY = 876;
        scene = 11;
        moveFn();
        break;        
        case 12 : 
        moveX = 19;
        moveY = 951;
        scene = 12;
        moveFn();
        break;     
        case 13 : 
        moveX = -414;
        moveY = 902;
        moveFn();
        break;     

        case 2 : 
        moveX = -472;
        moveY = 242;
        moveFn();
        break;
        case 21 : 
        moveX = -677;
        moveY = 658;
        moveFn();
        break;        
        case 22 : 
        moveX = -898;
        moveY = 300;
        moveFn();
        break;     
        case 23 : 
        moveX = -997;
        moveY = 0;
        moveFn();
        break;    
        
        case 3 : 
        moveX = -381;
        moveY = -320;
        moveFn();
        break;
        case 31 : 
        moveX = -997;
        moveY = -400;
        moveFn();
        break;        
            case 311 : 
            moveX = -2414;
            moveY = -846;
            moveFn();
            break;    
            case 312 : 
            moveX = -2504;
            moveY = -1027;
            moveFn();
            break;    
            case 313 : 
            moveX = -2534;
            moveY = -1260;
            moveFn();
            break;    
            case 314 : 
            moveX = -2457;
            moveY = -1455;
            moveFn();
            break;    
        case 32 : 
        moveX = -600;
        moveY = -700;
        moveFn();
        break;     
            case 321 : 
            moveX = -1975;
            moveY = -2156;
            moveFn();
            break;    
            case 322 : 
            moveX = -1932;
            moveY = -2312;
            moveFn();
            break;    
            case 323 : 
            moveX = -1802;
            moveY = -2438;
            moveFn();
            break;    
            case 324 : 
            moveX = -1515;
            moveY = -2546;
            moveFn();
            break;    
        case 33 : 
        moveX = -447;
        moveY = -839;
        moveFn();
        break;     

        case 4 : 
        moveX = 386;
        moveY = -320;
        moveFn();
        break;
        case 41 : 
        moveX = 295;
        moveY = -839;
        moveFn();
        break;        
        case 42 : 
        moveX = 664;
        moveY = -856;
        moveFn();
        break;     
            case 421 : 
            moveX = 889;
            moveY = -2711;
            moveFn();
            break;    
            case 422 : 
            moveX = 1111;
            moveY = -2727;
            moveFn();
            break;    
            case 423 : 
            moveX = 1409;
            moveY = -2603;
            moveFn();
            break;    
        case 43 : 
        moveX = 836;
        moveY = -706;
        moveFn();
        break;     
            case 431 : 
            moveX = 1911;
            moveY = -2267;
            moveFn();
            break;    
            case 432 : 
            moveX = 2229;
            moveY = -1992;
            moveFn();
            break;    
            case 433 : 
            moveX = 2368;
            moveY = -1759;
            moveFn();
            break;    
        case 44 : 
        moveX = 960;
        moveY = -555;
        moveFn();
        break;     

        case 5 : 
        moveX = 524;
        moveY = 242;
        moveFn();
        break;
        case 51 : 
        moveX = 957;
        moveY = -157;
        moveFn();
        break;        
        case 52 : 
        moveX = 1043;
        moveY = -135;
        moveFn();
        break;     
            case 521 : 
            moveX = 2852;
            moveY = 0;
            moveFn();
            break;    
            case 522 : 
            moveX = 2960;
            moveY = 234;
            moveFn();
            break;    
        case 53 : 
        moveX = 1094;
        moveY = 228;
        moveFn();
        break;     
        case 54 : 
        moveX = 1105;
        moveY = 474;
        moveFn();
        break;
            case 541 : 
            moveX = 2593;
            moveY = 1573;
            moveFn();
            break;    
            case 542 : 
            moveX = 2411;
            moveY = 1762;
            moveFn();
            break;    
        case 55 : 
        moveX = 700;
        moveY = 745;
        moveFn();
        break;     
    }
}

function mazmFn(){
    console.log(scene);
    switch (scene){
    default : 
        bigMap.style.transform = `scale(0.3)`;
        zoom = 0.3;
        mamvFn();
        break;
    case 1: case 2: case 3: case 4: case 5:
        bigMap.style.transform = `scale(0.6)`;
        zoom = 0.6;
        mamvFn();
        ftGo3Fn();
        break;
    case 11: case 21: case 31: case 41: case 51:
    case 12: case 22: case 32: case 42: case 52:
    case 13: case 23: case 33: case 43: case 53:
    case 14: case 24: case 34: case 44: case 54:
    case 15: case 25: case 35: case 45: case 55:
        bigMap.style.transform = `scale(1)`;
        zoom = 1;
        mamvFn();
        ftGo3Fn();
        break;
    case 311: case 312: case 313: case 314: 
    case 321: case 322: case 323: case 324: 
    case 421: case 422: case 423: 
    case 431: case 432: case 433: 
    case 521: case 522:
    case 541: case 542:
        bigMap.style.transform = `scale(2.5)`;
        zoom = 2.5;
        mamvFn();
        ftGo3Fn();
    break;
}}

function hdfrFn(){
    switch (scene){
    default : 
        hdaln1Fn();
        break;
    case 1: case 2: case 3: case 4: case 5:
        hdaln1Fn();
        break;
    case 11: case 21: case 31: case 41: case 51:
    case 12: case 22: case 32: case 42: case 52:
    case 13: case 23: case 33: case 43: case 53:
    case 14: case 24: case 34: case 44: case 54:
    case 15: case 25: case 35: case 45: case 55:
        hdaln2Fn();
        break;
        case 311: case 312: case 313: case 314: 
        case 321: case 322: case 323: case 324: 
        case 421: case 422: case 423: 
        case 431: case 432: case 433: 
        case 521: case 522:
        case 541: case 542:
            hdaln3Fn();
            break;
    }
}

//////////////////////////////////////////////////////////////
middle.addEventListener('click', () => {
    scene = 0;
    blackScr.style.height = '100vh';
    setTimeout(function(){titleBox.style.display = '';}, 500);
    miGoFn();
    reduFn();
    bigMap.style.transform = `scale(1)`;

});
bigMap.addEventListener('click', ()=>{
    headFn();
});
bigMap.addEventListener('dblclick', miGoFn);
function miGoFn(){
    scene = 0;
    headFn();
    mazmFn();
    //setTimeout(reloadFn, 500);
    //function reloadFn(){
    //    window.location.reload();
    //}
}
    middle.addEventListener('mouseover', miGo3Fn);
    function miGo3Fn(){
        middle.style.fontSize = '7rem';
        bigMap.classList.remove('bg-bi');
        bigMap.classList.add('bg-mi');
        headFn();
        middle.addEventListener('mouseout', miGo4Fn);
        function miGo4Fn(){
            middle.style.fontSize = '5rem';
            bigMap.classList.add('bg-bi');
            bigMap.classList.remove('bg-mi');
        }
    }
blackScr.addEventListener('click', () => {
    blackScr.style.height = '0vh';
    titleBox.style.display = 'none';
    enlaFn();
    bigMap.style.transform = `scale(0.3)`;
})







header.addEventListener('click', hemvFn);
function hemvFn(){
    he1Fn();
    setTimeout(he2Fn, 1);
    scene;
    mazmFn();
    headFn();
}
function he1Fn(){
    header.style.transitionDuration = '0s';
    header.classList.add('bg-hd2');
    header.classList.remove('bg-hd');
}
function he2Fn(){
    header.style.transitionDuration = '0.5s';
    header.classList.add('bg-hd');
    header.classList.remove('bg-hd2');
}

function ftBg1Fn(){
    switch (scene){
        case 1: case 11: case 12: case 13: 
            title2.classList.add('cr-ca');
            title3.classList.add('cr-ca');
            header.classList.add('cr-ca');
        break;
        case 2: case 21: case 22: case 23:
            title2.classList.add('cr-sp');
            title3.classList.add('cr-sp');
            header.classList.add('cr-sp');
        break;
        case 3: case 31: case 32: case 33:
        case 311: case 312: case 313: case 314: 
        case 321: case 322: case 323: case 324: 
            title2.classList.add('cr-si');
            title3.classList.add('cr-si');
            header.classList.add('cr-si');
        break;
        case 4: case 41: case 42: case 43: case 44:
            case 421: case 422: case 423: 
            case 431: case 432: case 433: 
            title2.classList.add('cr-ad');
            title3.classList.add('cr-ad');
            header.classList.add('cr-ad');
        break;
        case 5: case 51: case 52: case 53: case 54: case 55:
            case 521: case 522:
                case 541: case 542:
            title2.classList.add('cr-ac');
            title3.classList.add('cr-ac');
            header.classList.add('cr-ac');
            break;
        default:        
            title2.classList.add('cr-ti');
            title3.classList.add('cr-ti');
            header.classList.add('cr-ti');
            break;
    }
}

function ftBg2Fn(){
    switch (scene){
        case 1: case 11: case 12: case 13: 
            title2.classList.remove('cr-ca');
            title3.classList.remove('cr-ca');
            header.classList.remove('cr-ca');
        break;
        case 2: case 21: case 22: case 23:
            title2.classList.remove('cr-sp');
            title3.classList.remove('cr-sp');
            header.classList.remove('cr-sp');
        break;
        case 3: case 31: case 32: case 33:
            case 311: case 312: case 313: case 314: 
            case 321: case 322: case 323: case 324: 
            title2.classList.remove('cr-si');
            title3.classList.remove('cr-si');
            header.classList.remove('cr-si');
        break;
        case 4: case 41: case 42: case 43: case 44:
            case 421: case 422: case 423: 
            case 431: case 432: case 433: 
            title2.classList.remove('cr-ad');
            title3.classList.remove('cr-ad');
            header.classList.remove('cr-ad');
        break;
        case 5: case 51: case 52: case 53: case 54: case 55:
            case 521: case 522:
                case 541: case 542:
            title2.classList.remove('cr-ac');
            title3.classList.remove('cr-ac');
            header.classList.remove('cr-ac');
        break;
        default:
            title2.classList.remove('cr-ti');
            title3.classList.remove('cr-ti');
            header.classList.remove('cr-ti');
        break;
    }
}

footer.addEventListener('mouseover', ftGoFn);
function ftGoFn(){
    headFn();
}
let ftscene = 0;
footer.addEventListener('click', ftdsFn);
function ftdsFn(){
    switch(ftscene){
        case 1:
            mazmFn();
            ftGo2Fn();
            break;
        case 0:
            ftGo3Fn();
            mazmFn();
            break;
    }

}
//header.addEventListener('mouseover', ftGo2Fn);
//title2.addEventListener('click', ftGo2Fn);
//title3.addEventListener('click', ftGo2Fn);
function ftGo2Fn(){
    footer.style.width = '10%';
    footer.style.left = '90%';
    footer.classList.add('bg-ft');
    foot1.style.width = '100%';
    foot2.style.width = '0%';
    foot3.style.width = '0%';
    ftscene = 0;
    foot1.innerHTML = 'MORE INFO';
    title2.innerHTML = '';
    setTimeout(function(){title3.innerHTML = '';ftBg2Fn();}, 200);}

function ftGo3Fn(){
    footer.style.width = '90%';
    footer.style.left = '10%';
    foot1.style.width = '0%';
    foot2.style.width = '65%';
    foot3.style.width = '35%';
    setTimeout(function(){title3.innerHTML = '추천 게임 목록';}, 200);
    footFn();
    headFn();
    ftBg1Fn();
    ftscene = 1;
    foot1.innerHTML = '';
}

function hdaln1Fn(){
    nav1.style.display = 'flex';
    nav2.style.display = 'none';
    nav3.style.display = 'none';
}
function hdaln2Fn(){
    nav1.style.display = 'flex';
    nav2.style.display = 'flex';
    nav3.style.display = 'none';
}
function hdaln3Fn(){
    nav1.style.display = 'flex';
    nav2.style.display = 'flex';
    nav3.style.display = 'flex';
}

