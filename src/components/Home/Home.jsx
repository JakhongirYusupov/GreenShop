import './Home.scss';
import categories from '../../data/categories.json';
import size from '../../data/size.json';
import superSale from '../../images/superSale.svg';
import { IoIosArrowDown } from 'react-icons/io';
import data from '../../data/products.json';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeSortCategory, setactiveSortCategory] = useState(0);
  const [activeSortPrice, setactiveSortPrice] = useState(300);
  const [activeSortSize, setactiveSortSize] = useState(0);
  const [sortProductCategory, setsortProductCategory] = useState(1);
  const [products, setproducts] = useState(data);

  // useEffect(() => { setproducts(data) })

  useEffect(() => {
    if (activeSortCategory > 0) {
      const res = data.filter(({ categoryId }) => { return categoryId === activeSortCategory });
      setproducts(res)
      console.log(res)
    } else setproducts(data)

    // if (activeSortSize !== 0) setproducts(products.filter(({ size }) => { return size === activeSortSize }))
  }, [activeSortCategory])

  const activeCategory = {
    "fontWeight": "700",
    "color": "#46A358"
  }

  return (
    <main className='main'>
      <div className="container">
        <div className="main-wrapper">
          <div className="main-hero"></div>
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
                          onClick={(() => setactiveSortSize((e) => e === id ? 0 : id))}
                        >
                          <span style={activeSortSize === id ? activeCategory : null}>{name}</span>
                          <span style={activeSortSize === id ? activeCategory : null}>({
                            products.filter(({ size }) => {
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
                  products ?
                    products.map(({ id, name, categoryId, img, price, size, sale, }) => {
                      return <article key={id} className="main-product-list-item">
                        <div className="main-product-list-item-img">
                          <img src={img} alt="" />
                        </div>
                        <div className="main-product-list-item-desc">
                          <p>{name}</p>
                          <strong>{price}</strong>
                        </div>
                      </article>
                    })
                    : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}