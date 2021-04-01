import { useEffect, useState } from 'react';
import SimpleSider from '../../Siders/SimpleSider'
import ProductCard from '../../ProductCard/ProductCard';
import { Col, Row, Spinner } from 'react-bootstrap';
import { getUserWishlist } from '../../../services/productService';

import './Wishlist.css';
import '../../ProductCard/DisabledProductCard/DisabledCard.css'
function Wishlist() {
    const [products, setProduct] = useState([])
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserWishlist()
            .then(res => {
                setProduct(res.wishlist.filter(x => x.active == true));
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [setProduct, setLoading])

    return (
        <>
            {!loading ?
                (<>
                    <h1 className="heading">Wishlist</h1>
                    {products.length > 0 ? (
                        <Row>
                            {products
                               
                                .map(x =>
                                    <Col xs={12} md={6} lg={4} key={x._id.toString()}>
                                        <ProductCard params={x} />
                                    </Col>
                                )
                            }
                        </Row>
                    ) : (
                            <p className="nothing-to-show">Nothing to show</p>
                        )}

                </>) :
                <Spinner animation="border" />}

        </>
    )
}

export default Wishlist;