import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from '../../features/products/productsApi';
import { addProducts, resetProducts } from '../../features/products/productsSlice';
import './BestSellerProducts.css';

const BestSellerProducts = () => {
  const dispatch = useDispatch();
  const { products, page, hasMore } = useSelector((state) => state.products);
  const { data, error, isLoading } = useGetProductsQuery({ limit: 10, skip: page * 10 }, { skip: !hasMore });

  useEffect(() => {
    if (data) {
      if (page === 0) {
        dispatch(resetProducts());
      }
      dispatch(addProducts({
        products: data.products,
        page: page + 1,
        hasMore: data.products.length === 10,
      }));
    }
  }, [data, dispatch, page]);

  const handleLoadMore = () => {
    if (hasMore && !isLoading) {
      dispatch(
        useGetProductsQuery({
          limit: 10,
          skip: (page + 1) * 10,
        })
      );
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="best-seller-products">
      <h2>Best Seller Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p className="description">{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <button className="load-more" onClick={handleLoadMore}>
          Load More Products
        </button>
      )}
    </div>
  );
};

export default BestSellerProducts;
