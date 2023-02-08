import './Home.scss';
import categories from '../../data/categories.json';
import size from '../../data/size.json';
import superSale from '../../images/superSale.svg';
import { IoIosArrowDown, IoIosArrowRoundForward } from 'react-icons/io';
import data from '../../data/products.json';
import { useEffect, useState } from 'react';
import cartIcon from '../../images/cart.svg';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { CiHeart } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import bromeliad from '../../images/bromeliad.svg';
import violed from '../../images/violet.jpg';
import { Link } from 'react-router-dom';
import cactus from '../../images/cactus.jpg';
import palm from '../../images/palm.jpg';
import cacti from '../../images/cacti.jpg';
import houseplant from '../../images/houseplant.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import heroBackground from '../../images/hero-background.jpg';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Home() {
  const [activeSortCategory, setactiveSortCategory] = useState(0);
  const [activeSortPrice, setactiveSortPrice] = useState(300);
  const [activeSortSize, setactiveSortSize] = useState(0);
  const [sortProductCategory, setsortProductCategory] = useState(1);
  const [products, setproducts] = useState(data);
  const [sortedCategory, setsortedCategory] = useState(false);
  const [activePagination, setactivePagination] = useState(0);

  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);

  const dispatchProduct = (data) => {
    const action = {
      type: "ADD_TO_INITIALCART",
      data: data
    }

    dispatch(action);
  }

  useEffect(() => {
    let res = false
    if (activeSortSize !== 0) {
      res = data.filter(({ size }) => { return size === activeSortSize });
    }
    if (activeSortCategory !== 0) {
      if (res) res = res.filter(({ categoryId }) => { return categoryId === activeSortCategory })
      else res = data.filter(({ categoryId }) => { return categoryId === activeSortCategory })
      setsortedCategory(data.filter(({ categoryId }) => { return categoryId === activeSortCategory }))
    } else {
      setsortedCategory(false);
    }
    if (res === false) res = data;
    setproducts(res);

    if (!res) res = data
  }, [activeSortSize, activeSortCategory]);

  useEffect(() => {
    let res = false;
    if (sortProductCategory === 3) res = data.filter((el) => { return el.sale ? el : null });
    if (sortProductCategory === 2) res = data.filter((el) => { return el.sale ? el : null });
    if (sortProductCategory === 1) res = data;
    setproducts(res);

  }, [sortProductCategory]);

  const activeCategory = {
    "fontWeight": "700",
    "color": "#46A358"
  };

  return (
    <main className='main'>
      <div className="container">
        <div className="main-wrapper">
          <div className="main-hero">
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="main-hero-wrapper">
                  <div className="main-hero-wrapper-desc">
                    <h3>Welcome to GreenShop</h3>
                    <h1>Let’s Make a
                      Better <b>Planet</b>
                    </h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <Link to="/">SHOP NOW</Link>
                  </div>
                  <div className="main-hero-wrapper-img">
                    <img className="main-hero-wrapper-img-little" src={heroBackground} alt="" />
                    <img className="main-hero-wrapper-img-big" src={heroBackground} alt="" />
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main-hero-wrapper">
                  <div className="main-hero-wrapper-desc">
                    <h3>Welcome to GreenShop</h3>
                    <h1>Let’s Make a
                      Better <b>Planet</b>
                    </h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <Link to="/">SHOP NOW</Link>
                  </div>
                  <div className="main-hero-wrapper-img">
                    <img className="main-hero-wrapper-img-little" src={heroBackground} alt="" />
                    <img className="main-hero-wrapper-img-big" src={heroBackground} alt="" />
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main-hero-wrapper">
                  <div className="main-hero-wrapper-desc">
                    <h3>Welcome to GreenShop</h3>
                    <h1>Let’s Make a
                      Better <b>Planet</b>
                    </h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <Link to="/">SHOP NOW</Link>
                  </div>
                  <div className="main-hero-wrapper-img">
                    <img className="main-hero-wrapper-img-little" src={heroBackground} alt="" />
                    <img className="main-hero-wrapper-img-big" src={heroBackground} alt="" />
                  </div>

                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="main-product">
            <div className="main-product-sorting">
              <div className="main-product-sorting-items">
                <div className="main-product-sorting-category">
                  <h3>Categories</h3>
                  <ul className="main-product-sorting-category-list">
                    {
                      categories.map(({ id, name }) => {
                        return <li key={id} className='main-product-sorting-category-list-item'
                          onClick={(() => setactiveSortCategory((e) => e === id ? 0 : id))}
                        >
                          <span style={activeSortCategory === id ? activeCategory : null}>{name}</span>
                          <span style={activeSortCategory === id ? activeCategory : null}>({
                            data.filter(({ categoryId }) => {
                              return categoryId === id
                            }).length
                          })</span>
                        </li>
                      })
                    }
                  </ul>
                </div>
                <div className="main-product-sorting-priceRange">
                  <h3>Price Range</h3>
                  <div className="main-product-sorting-priceRange-price">
                    <span>Price: </span><strong>$0 - ${activeSortPrice}</strong>
                  </div>
                  <button>Filter</button>
                </div>
                <div className="main-product-sorting-size">
                  <h3>Size</h3>
                  <ul className="main-product-sorting-size-list">
                    {
                      size.map(({ id, name }) => {
                        return <li key={id} className='main-product-sorting-category-list-item'
                          onClick={(() => setactiveSortSize((e) => e === name.toLowerCase() ? 0 : name.toLowerCase()))}
                        >
                          <span style={activeSortSize === name.toLowerCase() ? activeCategory : null}>{name}</span>
                          <span style={activeSortSize === name.toLowerCase() ? activeCategory : null}>({
                            sortedCategory ? sortedCategory.filter(({ size }) => {
                              return size === name.toLowerCase()
                            }).length
                              : data.filter(({ size }) => {
                                return size === name.toLowerCase()
                              }).length
                          })</span>
                        </li>
                      })
                    }
                  </ul>
                </div>
              </div>
              <div className="main-product-sorting-superSale">
                <img src={superSale} alt="" />
              </div>
            </div>
            <div className="main-product-list">
              <div className="main-product-list-category">
                <div className="main-product-list-category-list">
                  <span onClick={(() => setsortProductCategory(1))}
                    style={sortProductCategory === 1 ? activeCategory : null}
                  >All Plants</span>
                  <span onClick={(() => setsortProductCategory(2))}
                    style={sortProductCategory === 2 ? activeCategory : null}
                  >New Arrivals</span>
                  <span onClick={(() => setsortProductCategory(3))}
                    style={sortProductCategory === 3 ? activeCategory : null}
                  >Sale</span>
                </div>
                <div className="main-product-list-category-sortBy">
                  <span>Short by: Default sorting</span>
                  <IoIosArrowDown />
                </div>
              </div>
              <div className="main-product-list-items">
                {
                  products.slice(activePagination * 9, 9)?.map(({ id, name, img, price, sale, }) => {
                    return <article key={id} className="main-product-list-item">
                      <div className="main-product-list-item-img">
                        <img src={img} alt="" />
                        {
                          sale ?
                            <div className='main-product-list-item-img-sale'>13% OFF</div>
                            : null
                        }
                        <div className="main-product-list-item-img-actions">
                          <div onClick={() => dispatchProduct({ id, name, img, price, sale })}>
                            <FiShoppingCart style={cart.data.find((e) => e.id === id) ? { color: "#46A358" } : null} className="main-product-list-item-img-actions-cart" src={cartIcon} alt="error" />
                          </div>
                          <div>
                            <CiHeart className="main-product-list-item-img-actions-like" />
                          </div>
                          <div>
                            <FiSearch className="main-product-list-item-img-actions-search" />
                          </div>
                        </div>
                      </div>
                      <div className="main-product-list-item-desc">
                        <p>{name}</p>
                        <strong>{price}</strong>
                        {
                          sale ?
                            <span>{sale}</span>
                            : null
                        }
                      </div>
                    </article>
                  })
                }
              </div>
              <div className="main-product-list-pagination">
                <div className="main-product-list-pagination-wrapper">
                  {
                    [...Array(Math.ceil(products.length / 9))]?.map((el, i, arr) => {
                      if (arr.length > 1) return <div key={i} className="main-product-list-pagination-item"
                        onClick={() => setactivePagination(i)}
                        style={activePagination === i ? { "backgroundColor": "#46A358" } : null}>
                        <span style={activePagination === i ? { "color": "#FFFFFF" } : null}>{i + 1}</span>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="main-findMore">
            <div className="main-findMore-item">
              <div className="main-findMore-item-img">
                <img src={bromeliad} alt="error" />
              </div>
              <div className="main-findMore-item-desc">
                <h2>SUMMER CACTUS & SUCCULENTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, possimus</p>
                <p className="main-findMore-item-desc-hidden">lorem ipsum dolor sit amet ahurg hgueh consectetur.</p>
                <Link to="/">Find More <IoIosArrowRoundForward className="main-findMore-item-desc-icon" /></Link>
              </div>
            </div>
            <div className="main-findMore-item">
              <div className="main-findMore-item-img">
                <img src={violed} alt="error" />
              </div>
              <div className="main-findMore-item-desc">
                <h2>SUMMER CACTUS & SUCCULENTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, possimus.</p>
                <p className="main-findMore-item-desc-hidden">Lorem ipsum dolor sit amet.</p>
                <Link to="/">Find More <IoIosArrowRoundForward className="main-findMore-item-desc-icon" /></Link>
              </div>
            </div>
          </div>
          <div className="main-ourBlog">
            <div className="main-ourBlog-title">
              <h2>Our Blog Posts</h2>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            </div>
            <div className="main-ourBlog-products">
              <div className="main-ourBlog-products-item">
                <div className="main-ourBlog-products-item-img">
                  <img src={cactus} alt="error" />
                </div>
                <div className="main-ourBlog-products-item-desc">
                  <span>September 12  I Read in 6 minutes</span>
                  <h3>Cactus & Succulent
                    Care Tips</h3>
                  <p>Cacti are succulents are easy care plants for any home or patio. </p>
                  <Link to="/">Read More <IoIosArrowRoundForward /></Link>
                </div>
              </div>
              <div className="main-ourBlog-products-item">
                <div className="main-ourBlog-products-item-img">
                  <img src={palm} alt="error" />
                </div>
                <div className="main-ourBlog-products-item-desc">
                  <span>September 12  I Read in 6 minutes</span>
                  <h3>Cactus & Succulent
                    Care Tips</h3>
                  <p>Cacti are succulents are easy care plants for any home or patio. </p>
                  <Link to="/">Read More <IoIosArrowRoundForward /></Link>
                </div>
              </div>
              <div className="main-ourBlog-products-item">
                <div className="main-ourBlog-products-item-img">
                  <img src={cacti} alt="error" />
                </div>
                <div className="main-ourBlog-products-item-desc">
                  <span>September 12  I Read in 6 minutes</span>
                  <h3>Cactus & Succulent
                    Care Tips</h3>
                  <p>Cacti are succulents are easy care plants for any home or patio. </p>
                  <Link to="/">Read More <IoIosArrowRoundForward /></Link>
                </div>
              </div>
              <div className="main-ourBlog-products-item">
                <div className="main-ourBlog-products-item-img">
                  <img src={houseplant} alt="error" />
                </div>
                <div className="main-ourBlog-products-item-desc">
                  <span>September 12  I Read in 6 minutes</span>
                  <h3>Cactus & Succulent
                    Care Tips</h3>
                  <p>Cacti are succulents are easy care plants for any home or patio. </p>
                  <Link to="/">Read More <IoIosArrowRoundForward /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}