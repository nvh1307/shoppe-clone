console.log("Hello")

var home = document.querySelector('.row .sm-gutter')
async function fillProducts() {
    let fet = fetch('http://localhost:8080/getallproduct')
        .then(respon => {
            console.log("hello")
            return respon.json()
        })
    let data = await fet.then(result => {
        console.log(result)

        return result

    })


    var htmls = data.map(function (item){

        var image = new Image();
        image.src = 'data:image/png;base64,'+item.p.productImgs[0].productImg;
        return `
        <div class="col l-2-4 m-4 c-6">
        <a class="app-product" href="product.html">
        <div class="home-product-item">
            
                                                 <img class = "home-product-item-img" src='data:image/png;base64,${item.p.productImgs[0].productImg}'></img>

           
                                                    <h5 class="home-product-item__name">${item.p.productDetail}</h5>
                                                    <div class="home-product-item__price">
                                                        <span class="home-product-item__price-old hide-on-mobile">2.000.000$</span>
                                                        <span class="home-product-item__price-new">${item.gia}</span>
                                                    </div>
                                                    <div class="home-product-item__action ">
                                                        <span class="home-product-item__like home-product-item__like--liked">
                                                            <i class="heart-icon-mt ti-heart"></i>
                                                            <i class="heart-icon-fill fa fa-heart" aria-hidden="true"></i>
                                                        </span>
                                                        <div class="home-product-item__rating">
                                                            <i class="home-product-items--gold fa fa-star" aria-hidden="true"></i>
                                                            <i class="home-product-items--gold fa fa-star" aria-hidden="true"></i>
                                                            <i class="home-product-items--gold fa fa-star" aria-hidden="true"></i>
                                                            <i class="home-product-items--gold fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </div>
                                                        <span class="home-item__sold">90 Đã bán</span>
                                                    </div>
                                                    <div class="home-product-item__origin">
                                                        <span class="home-product-item__brand">${item.s.shopName}</span>
                                                        <span class="home-product-item__origin-name">${item.p.producer}</span>
                                                    </div>
                                                    <div class="home-product-item__farvorite">
                                                        <i class="ti-check"></i>
                                                        <span>Yêu thích</span>
                                                    </div>
                                                    <div class="home-product-item__sale">
                                                        <span class="home-product-item_sale-percent">10%</span>
                                                        <span class="home-product-item_sale-label">Giảm</span>
                                                    </div>
                                                </div>
                                                </a>
                                                </div>
        
        `
    })

    home.innerHTML = htmls.join(' ')
}


fillProducts()
