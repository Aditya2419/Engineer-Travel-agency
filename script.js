@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');

:root{
  --blue:#29a5a3;
}

*{
    font-family: 'Nunito', sans-serif;
    margin: 0; padding: 0;
    box-sizing: border-box;
    outline: none; border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: all .2s linear;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 4rem;
}

html::-webkit-scrollbar{
    width: 1rem;
}

html::-webkit-scrollbar-track{
    background: transparent;
}

html::-webkit-scrollbar-thumb{
    background: var(--blue);
    border-radius: 5rem;
}

section{
    padding: 2rem 7%;
}

.heading{
    text-align: center;
    font-size: 4rem;
    margin: 2rem 0;
    color: var(--blue);
}

.btn{
    display: inline-block;
    margin-top: 1rem;
    background: var(--blue);
    color: #fff;
    padding: .8rem 3rem;
    border: .2rem solid var(--blue);
    cursor: pointer;
    font-size: 1.7rem;
    border-radius: .5rem;
}

.btn:hover{
    color: var(--blue);
    background: rgba(41, 165, 163, .2);
}

/* header */

.header{
    position: fixed;
    top: 0; left: 0; right: 0;
    background: #fff;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 9%;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,0.1);
}

.header .logo{
    font-size: 2.5rem;
    font-weight: bolder;
    color: var(--blue);
    text-transform: uppercase;
}

.header .navbar a{
    color: #333;
    font-size: 2rem;
    margin: 0 .8rem;
}

.header .navbar a:hover{
    color: var(--blue);
}

.header .navbar #close-navbar{
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    font-size: 4rem;
    cursor: pointer;
    color: #444;
    display: none;
}

.header .navbar #close-navbar:hover{
    transform: rotate(90deg);
}

.header .btn{
    margin-top: 0;
}

#menu-btn{
    color: #333;
    border: .1rem solid #333;
    font-size: 3rem;
    padding: .5rem 1.2rem;
    border-radius: .5rem;
    cursor: pointer;
    display: none;
}

/* end */

/* home */

.home{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    position: relative;
}

.home .content{
    text-align: center;
}

.home .content h3{
    font-size: 4.5rem;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0 .3rem .5rem rgba(0,0,0,0.2);
}

.home .content p{
    font-size: 2.5rem;
    color: #fff;
    padding: .5rem 0;
}

.home .video-container video{
    position: absolute;
    top: 0; left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

/* end */

/* about */

.about .container{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    margin-top: 5rem;
}

.about .container .image-container{
    flex: 1 1 42rem;
}

.about .container .image-container .image{
    border-radius: 1rem;
    width: 100%;
}

.about .container .image-container .controls{
    text-align: center;
    padding: 2rem 0;
}

.about .container .image-container .controls span{
    display: inline-block;
    height: 2rem; 
    width: 2rem;
    border-radius: 50%;
    background: var(--blue);
    cursor: pointer;
    margin: .7rem;
}

.about .container .image-container .controls span:hover{
    background: rgba(41, 165, 163, .2);
}

.about .container .content{
    flex: 1 1 42rem;
    margin-bottom: 8rem;
}

.about .container .content span{
    color: var(--blue);
    font-size: 2rem;
}

.about .container .content h3{
    color: #333;
    font-size: 4rem;
    margin-top: .5rem;
}

.about .container .content p{
    font-size: 1.4rem;
    padding: 1rem 0;
    color: #666;
    line-height: 2;
}

/* end */

/* services */

.services .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    gap: 1.5rem;
}

.services .box-container .box{
    text-align: center;
    padding: 3rem 2rem;
}

.services .box-container .box:hover{
    box-shadow: 0 .5rem 1rem rgba(0,0,0,0.1);
    border-radius: 1rem;
}

.services .box-container .box img{
    height: 20rem;
}

.services .box-container .box h3{
    font-size: 2.2rem;
    padding: 1.5rem 0;
}

.services .box-container .box p{
    font-size: 1.7rem;
    line-height: 2;
}

/* end */

/* packages */

.packages .box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.packages .box-container .box{
    flex: 1 1 30rem;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.1);
}

.packages .box-container .box .image{
    height: 25rem;
    overflow: hidden;
    width: 100%;
}

.packages .box-container .box .image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.packages .box-container .box:hover .image img{
    transform: scale(1.1);
}

.packages .box-container .box .content{
    text-align: center;
    padding: 2rem;
}

.packages .box-container .box .content h3{
    font-size: 2rem;
    color: var(--blue);
}

.packages .box-container .box .content .price{
    font-size: 2rem;
    color: #333;
    padding-top: 1rem;
}

.packages .box-container .box .content .price span{
    color: var(--blue);
    font-size: 1.5rem;
    text-decoration: line-through;
}

.packages .box-container .box .content p{
    font-size: 1.7rem;
    color: #666;
    padding: 1rem 0;
}

/* end */

/* gallery */

.gallery .box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.gallery .box-container .box{
    flex: 1 1 36rem;
    height: 28rem;
    overflow: hidden;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.1);
    border: 1rem solid #fff;
    border-radius: .5rem;
}

.gallery .box-container .box img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.gallery .box-container .box:hover img{
    transform: scale(1.1);
}

/* end */

/* book */

.book .row{
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
}

.book .row form{
    flex: 1 1 40rem;
    padding: 2rem;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,0.1);
    border-radius: .5rem;
}

.book .row form .inputBox{
    padding: .5rem 0;
}

.book .row form .inputBox input{
    width: 100%;
    padding: 1rem;
    border: .1rem solid rgba(0,0,0,0.1);
    font-size: 1.7rem;
    color: #666;
    text-transform: none;
}

.book .row form .inputBox h3{
    font-size: 2rem;
    padding: 1rem 0;
    color: #333;
}

.book .row .container .slide-container{
    flex: 1 1 40rem;
    max-width: 60rem;
}

.book .row .container .slide-container .slide{
    text-align: center;
    padding: 2rem;
    display: none;
}

.book .row .container .slide-container .slide.active{
    display: block;
}

.book .row .container .slide-container .slide .quote{
    padding-bottom: 3rem;
}

.book .row .container .slide-container .slide p{
    padding: 1.4rem 0;
    font-size: 2rem;
    line-height: 2;
    color: #666;
    animation: fadeUp .2s linear backwards;
}

.book .row .container .slide-container .slide .images{
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    animation: fadeUp .2s linear .4s backwards;
}

.book .row .container .slide-container .slide h3{
    padding: 1rem 0;
    font-size: 2rem;
    color: var(--blue);
    animation: fadeUp .2s linear .6s backwards;
}

.book .row .container .slide-container .slide .stars i{
    font-size: 1.5rem;
    color: gold;
    animation: fadeUp .2s linear .8s backwards;
}

.book .controls{
    text-align: center;
}

.book .controls div{
    font-size: 5rem;
    cursor: pointer;
    margin: 0 1rem;
    color: var(--blue);
}

.book .controls div:hover{
    transform: scale(1.1);
}

@keyframes fadeUp{
    0%{
        opacity: 0;
        transform: translateY(4rem);
    }
}

/* end */

/* newsletter */

.newsletter{
    background: rgba(41, 165, 163, .1);
}

.newsletter .content{
    text-align: center;
    max-width: 60rem;
    margin: 1rem auto;
}

.newsletter .content h3{
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--blue);
}

.newsletter .content p{
    font-size: 1.7rem;
    padding: 1rem 0;
    color: #666;
    line-height: 2;
}

.newsletter .content p a {
    color: var(--blue);
}

.newsletter .content p a:hover{
    text-decoration: underline;
}

.newsletter .content form{
    display: flex;
    border: .1rem solid var(--blue);
    border-radius: .5rem;
    padding: .5rem;
    margin: 1rem 0;
}

.newsletter .content form .email{
    width: 100%;
    padding: 1rem 1.4rem;
    font-size: 1.7rem;
    text-transform: none;
}

.newsletter .content form .btn{
    margin-top: 0;
}

/* end */

/* footer */

.footer .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 3rem;
}

.footer .box-container .box{
    padding: 1rem 0;
}

.footer .box-container .box h3{
    font-size: 2.2rem;
    color: var(--blue);
    padding: 1rem 0;
}

.footer .box-container .box a{
    font-size: 1.4rem;
    color: #666;
    padding: 1rem 0;
    line-height: 2;
    cursor: pointer;
    display: block;
}

.footer .box-container .box a:hover{
    color: var(--blue);
}

.footer .box-container .box a i{
    padding-right: .5rem;
    color: var(--blue);
}

.footer .credit{
    font-size: 2rem;
    text-align: center;
    border-top: .1rem solid #666;
    padding: 1rem;
    padding-top: 2rem;
    margin-top: 2rem;
    color: #666;
}

.footer .credit span{
    color: var(--blue);
}

/* end */






/* media query */

@media(max-width:991px){
    html{
        font-size: 55%;
    }
    .header{
        padding: 2rem;
    }
    section{
        padding: 2rem;
    }
    .book .row .container .slide-container{
        max-width: 100rem;
        justify-content: center;
    }
}

@media(max-width:768px){
    #menu-btn{
        display: inline-block;
    }
    .header .navbar{
        position: fixed;
        top: 0; left: -105%;
        width: 30rem;
        background: #fff;
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        z-index: 1200;
    }
    .header .navbar.active{
        left: 0;
        box-shadow: 0 0 0 100vw rgba(0,0,0,0.8);
    }
    .header .navbar #close-navbar{
        display: block;
    }
    .header .navbar a{
        display: block;
        margin: 1rem 0;
        text-align: center;
        font-size: 3rem;
    }
}

@media(max-width:450px){
    html{
        font-size: 50%;
    }
}
