const characters = () => {

    const heroes = document.querySelector('.heroes');


    const getData = () => {
        const promise = fetch('./dbHeroes.json');

        promise
            .then(response => response.json())
            .then(data => {
                let result = data;
                console.log(data)

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
                            <div class="tit">Актер: </div>
                            <div class="descr">
                                <p>${result[index].actors}</p>
                            </div>
                        </div>
                        <div class="line">
                            <div class="tit">Год рождения: </div>
                            <div class="descr">
                                <p>${(result[index].birthDay ? result[index].birthDay : 'не известен')}</p>
                            </div>
                        </div>
                        <div class="line">
                            <div class="tit">Год смерти: </div>
                            <div class="descr">
                                <p>${result[index].status !== 'alive' ? result[index].deathDay : 'Персонаж жив'}</p>
                            </div>
                        </div>
                        <div class="line">
                            <div class="tit">Пол: </div>
                            <div class="descr">
                                <p>${result[index].gender}</p>
                            </div>
                        </div>
                        
                        <div class="line">
                            <div class="tit">Имя: </div>
                            <div class="descr">
                                <p>${result[index].name}</p>
                            </div>
                        </div>
                        <div class="line">
                            <div class="tit">Разновидность: </div>
                            <div class="descr">
                                <p>${result[index].species}</p>
                            </div>
                        </div>
                        <div class="line">
                            <div class="tit">Гражданство: </div>
                            <div class="descr">
                                <p>${(result[index].citizenship ? result[index].citizenship : 'не известно')}</p>
                            </div>
                        </div>
                        <div class="line">
                            <div class="tit">Статус: </div>
                            <div class="descr">
                                <p>${result[index].status}</p>
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