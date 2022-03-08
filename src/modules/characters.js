const characters = () => {

    const heroes = document.querySelector('.heroes');
    let links = document.querySelector('.links');
    let refers;


    const getData = () => {
        const promise = fetch('./dbHeroes.json');

        promise
            .then(response => response.json())
            .then(data => {
                let result = data;
                console.log(data)

                //films-set
                const arrMovies = [];
                data.forEach(item => {
                    if(!item.movies) {
                        console.log('no films')
                    } else {
                        item.movies.forEach(el => {
                            arrMovies.push(el)
                        })
                    }
                })

                let moviesSet = new Set(arrMovies)
                moviesSet = Array.from(moviesSet);
                console.log(moviesSet)


                moviesSet.forEach(el => {
                    const link = document.createElement('li');

                    link.innerHTML = `<a href="#">${el}</a>`

                    links.append(link);
                })







                //choise film
                refers = document.querySelectorAll('.links li a');
                refers.forEach(refer => {
                    refer.addEventListener('click',(e) => {
                        e.preventDefault();
                        refers.forEach(refer =>  refer.classList.remove('active'));
                        refer.classList.add('active');



                        heroes.innerHTML = ``;
                        data.forEach((el, index) => {
                            if(el.movies){
                                el.movies.forEach(item => {
                                    if(item == refer.innerText) {
                                        const cart = document.createElement('div');
                                        cart.classList.add('item');
                                        heroes.append(cart);

                                        cart.innerHTML = `
                                            <div class="image">
                                                <img src="${result[index].photo}" alt="">
                                            </div>
                                            <div class="info_block">
                                                <div class="line">
                                                    <div class="tit">Имя: </div>
                                                    <div class="descr">
                                <p>${result[index].name}</p>
                            </div>
                                                </div>
                                                <div class="line">
                            <div class="tit">Реальное имя: </div>
                            <div class="descr">
                                <p>${result[index].realName}</p>
                            </div>
                        </div>
                                                <div class="line">
                            <div class="tit">Пол: </div>
                            <div class="descr">
                                <p>${result[index].gender}</p>
                            </div>
                        </div>
                                                <div class="line">
                            <div class="tit">Год рождения: </div>
                            <div class="descr">
                                <p>${(result[index].birthDay ? result[index].birthDay : 'не известен')}</p>
                            </div>
                        </div>
                                                <div class="line">
                            <div class="tit">Статус: </div>
                            <div class="descr">
                                <p>${result[index].status}</p>
                            </div>
                        </div>
                                                <div class="line">
                            <div class="tit">Год смерти: </div>
                            <div class="descr">
                                <p>${result[index].status !== 'alive' ? result[index].deathDay : 'Персонаж жив'}</p>
                            </div>
                        </div>
                                                <div class="line">
                            <div class="tit">Разновидность: </div>
                            <div class="descr">
                                <p>${result[index].species}</p>
                            </div>
                        </div>
                                                <div class="line">
                            <div class="tit">Актер: </div>
                            <div class="descr">
                                <p>${result[index].actors}</p>
                            </div>
                        </div>
                                                <div class="line">
                            <div class="tit">Гражданство: </div>
                            <div class="descr">
                                <p>${(result[index].citizenship ? result[index].citizenship : 'не известно')}</p>
                            </div>
                        </div>
                                                <div class="line films">
                                                    <div class="tit">Фильмы</div>
                                                        <div class="descr">
                                                             <p>${result[index].movies ? result[index].movies.toString() : "Нет фильмов" }</p>                                                          
                                                        </div>
                                                    </div>
                                            </div>
                                         `
                                    }
                                })
                            }
                        })



                    })
                })


                //carts
                data.forEach((item, index) => {
                    const cart = document.createElement('div');
                    cart.classList.add('item');
                    heroes.append(cart);

                    cart.innerHTML = `
                    <div class="image">
                        <img src="${result[index].photo}" alt="">
                    </div>
                    <div class="info_block">
                         <div class="line">
                            <div class="tit">Имя: </div>
                            <div class="descr">
                                <p>${result[index].name}</p>
                            </div>
                        </div>
                         <div class="line">
                            <div class="tit">Реальное имя: </div>
                            <div class="descr">
                                <p>${result[index].realName}</p>
                            </div>
                        </div>
                         <div class="line">
                            <div class="tit">Пол: </div>
                            <div class="descr">
                                <p>${result[index].gender}</p>
                            </div>
                        </div>
                         <div class="line">
                            <div class="tit">Год рождения: </div>
                            <div class="descr">
                                <p>${(result[index].birthDay ? result[index].birthDay : 'не известен')}</p>
                            </div>
                        </div>
                         <div class="line">
                            <div class="tit">Статус: </div>
                            <div class="descr">
                                <p>${result[index].status}</p>
                            </div>
                        </div>
                         <div class="line">
                            <div class="tit">Год смерти: </div>
                            <div class="descr">
                                <p>${result[index].status !== 'alive' ? result[index].deathDay : 'Персонаж жив'}</p>
                            </div>
                        </div>
                         <div class="line">
                            <div class="tit">Разновидность: </div>
                            <div class="descr">
                                <p>${result[index].species}</p>
                            </div>
                        </div>
                         <div class="line">
                            <div class="tit">Актер: </div>
                            <div class="descr">
                                <p>${result[index].actors}</p>
                            </div>
                        </div>
                         <div class="line">
                            <div class="tit">Гражданство: </div>
                            <div class="descr">
                                <p>${(result[index].citizenship ? result[index].citizenship : 'не известно')}</p>
                            </div>
                        </div>
                         <div class="line films">
                            <div class="tit">Фильмы</div>
                            <div class="descr">
                                <p>${result[index].movies ? result[index].movies.toString() : "Нет фильмов" }</p>
                            </div>
                        </div>
                    </div>
            `
                })


            })
    }


    getData();



}

export default characters;

