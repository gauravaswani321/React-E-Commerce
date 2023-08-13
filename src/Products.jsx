import "./components/styles/Products.css";
import { BsGrid1X2Fill, BsList } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./components/store/slices/productApiSlice";
import ProductGridView from "./components/ProductGridView";
import ProductListView from "./components/ProductListView";
import { updateProducts, sortValue, searchSort, productCategoryFilter, productColorFilter, productCompanyFilter, productPriceFilter, clearProductFilter } from "./components/store/slices/productFilterSlice";
import FormatPrice from "./components/FormatPrice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { toFilterProducts, searchValue, filters } = useSelector((state) => state.productFilter);

  /* -- Getting Filters -- */

  const getFilterData = (data, filtertype) => {
    let filterData = data.map((data) => data[filtertype]);

    if(filtertype === 'colors'){
      filterData = filterData.flat();
    }

    return ['all', ...new Set(filterData)];
  }

  let productCategories = getFilterData(products, 'category');
  let productColors = getFilterData(products, 'colors');
  let productCompany = getFilterData(products, 'company');
  let productPrice = getFilterData(products, 'price').slice(1);

  /* ------------------------------------------------ */

  useEffect(() => {
    dispatch(fetchProducts("https://api.pujakaitem.com/api/products"));
  }, []);

  useEffect(() => {
    dispatch(updateProducts(products));
    dispatch(searchSort(searchValue));
    dispatch(productCategoryFilter(filters.category));
    dispatch(productColorFilter(filters.colors));
    dispatch(productCompanyFilter(filters.company));
    dispatch(productPriceFilter(filters.price));
  }, [products, searchValue, filters.category, filters.colors, filters.company, filters.price]);

  const [productView, setProductView] = useState("grid");

  return (
    <>
      <section className="products">
        <div className="container">
          <div className="row product-filter-head">
            <div className="col-md-3 product-filters">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  className="form-control form-control-sm search"
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => dispatch(searchSort(e.target.value))}
                />
              </form>
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4 product-view-btn">
                  <button onClick={() => setProductView("grid")}>
                    <BsGrid1X2Fill />
                  </button>
                  <button onClick={() => setProductView("list")}>
                    <BsList />
                  </button>
                </div>

                <div className="col-md-4 total-products">
                  {toFilterProducts.length} Products
                </div>

                <div className="col-md-4 product-price-sort">
                  <select
                    className="form-select form-select-sm"
                    aria-label="Small select example"
                    onChange={(e) => dispatch(sortValue(e.target.value))}
                  >
                    <option defaultValue>Open this select menu</option>
                    <option value="lowest">Low to High</option>
                    <option value="highest">High to low</option>
                    <option value="a-z">a-z</option>
                    <option value="z-a">z-a</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 product-filter">
              <div className="categories">
                <h5>Category</h5>
                { productCategories.map((productCat, index) => (
                  <button
                    key={index}
                    className={productCat === filters.category ? 'active' : undefined}
                    value={productCat}
                    onClick={() => dispatch(productCategoryFilter(productCat))}>
                    {productCat}
                  </button>
                )) }
              </div>
              
              <div className="company">
              <h5>Company</h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <select 
                  className="form-select form-select-sm"
                  onChange={(e) => dispatch(productCompanyFilter(e.target.value))}>
                    { productCompany.map((productComp, index) => (
                    <option key={index} value={productComp}>{productComp}</option>
                  ))}
                </select>
              </form>
              </div>
              
              <h5>Colors</h5>
              <div className="colors">
                { productColors.map((productColor, index) => (
                  <button
                    key={index}
                    value={productColor}
                    style={{ backgroundColor : productColor }}
                    className={productColor === filters.colors ? "active" : undefined}
                    onClick={() => dispatch(productColorFilter(productColor))}>
                    {productColor === filters.colors && <TiTick/>}
                  </button>
                )) }
              </div>
              <div className="price">
                <h5><p>Price Range</p></h5>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    id="customRange2"
                    type="range"
                    className="form-range"
                    step='0.5'
                    min={filters.minprice}
                    max={Math.max(...productPrice)}
                    value={filters.price}
                    onChange={(e) => dispatch(productPriceFilter(e.target.value))}/>
                </form>
                {filters.price != 0 && <FormatPrice price={filters.price}/>}
              </div>

              <div className="clear">
                <button onClick={() => dispatch(clearProductFilter())}>Clear Filter</button>
              </div>
            </div>
            <div className="col-md-9 product-view-type">
              {productView === "grid" && (
                <ProductGridView products={toFilterProducts} />
              )}
              {productView === "list" && (
                <ProductListView products={toFilterProducts} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
