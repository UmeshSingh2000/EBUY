import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Product Card/ProductCard';
import axios from 'axios';
import { setAllProduct } from '../../../Redux/features/product/allproductSlice';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

const ProductPage = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.allProduct.value);
  const product = products.find((prod) => prod._id === productId);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!product) {
      const fetchProduct = async () => {
        setLoading(true);
        try {
          const response = await axios.get('http://localhost:3000/product/allProduct');
          const fetchData = response.data;
          dispatch(setAllProduct(fetchData));
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [dispatch]);

  const simProd = product ? products.filter((prod) => prod.tags === product.tags && prod._id !== productId) : [];

  useEffect(() => {
    if(!product) return;
    window.scrollTo(0,0);
    document.title = `BUY || ${product.productName} ${product.productDescription}`
  }, [product, simProd]);

  if (!product) return <div><Loader /></div>;
  return (
    <div className='productPage'>
      <Navbar />
      <div className="container">
        <div className="left">
          <img src={`data:${product.imageType};base64,${product.image}`} alt="img" />
        </div>
        <div className="right">
          <div className="productName"><h1>{product.productName}</h1></div>
          <div className="productDescription">
            <p>{product.productDescription}</p>
          </div>
          <div className="price">
            <h1>{`₹${product.price}`}</h1>
            <h2>MRP ₹ <span>{product.price + product.discount}</span></h2>
            <h3>({Math.round((product.discount / (product.price + product.discount)) * 100)}% OFF)</h3>
          </div>
          <p>Inclusive of all taxes</p>
          <div className="sizes">
            <input type="radio" id='xs' />
            <label htmlFor="xs">Xs</label>
            <input type="radio" id='s' />
            <label htmlFor="s">S</label>
            <input type="radio" id='m' />
            <label htmlFor="m">M</label>
            <input type="radio" id='l' />
            <label htmlFor="l">L</label>
          </div>
          <div className="buttons">
            <button className='addToCart'><i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
            <button><i className="fa-regular fa-heart"></i>Wishlist</button>
          </div>
        </div>
      </div>
      <div className="similarProd">
        <h1>Similar Product</h1>
        <div className="container">
          {simProd.map((prod, index) => (
            <div key={index}>
              <ProductCard details={prod} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductPage;
