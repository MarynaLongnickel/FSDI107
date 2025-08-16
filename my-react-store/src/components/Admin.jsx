import "./Admin.css";
import { useState } from 'react';

function Admin() {

    const [coupon, setCoupon] = useState({
        code: "",
        discount: ""
    });

    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: ""
    });

    function save() {
        console.log(coupon);
    }

    function handleEvent(e) {
        const value = e.target.value;
        const name = e.target.name;

        let copy = { ...coupon };
        if (name === 'discount') {
            copy[name] = Number(value);
        } else {
            copy[name] = value;
        }
        setCoupon(copy);
    }

    function handleProductEvent(e) {
        const value = e.target.value;
        const name = e.target.name;

        let copy = { ...product };
        if (name === 'price') {
            copy[name] = Number(value);
        } else {
            copy[name] = value;
        }
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
    }

    return (
        <div className="admin">
            <div className="parent">
                <section>
                    {/* Product Section */}
                    <div className="products">
                        <h3>Product Section</h3>
                        <div className="form-field">
                            <label className="form-label">Title: </label>
                            <input
                                className="form-control"
                                type="text"
                                name="title"
                                onBlur={handleProductEvent}/>
                        </div>
                        <div className="form-field">
                            <label className="form-label">Price: </label>
                            <input
                                className="form-control"
                                type="number"
                                name="price"
                                onBlur={handleProductEvent}/>
                        </div>
                        <div className="form-field">
                            <label className="form-label">Image: </label>
                            <input
                                className="form-control"
                                type="text"
                                name="image"
                                onBlur={handleProductEvent} />
                        </div>

                        <button
                            className="btn btn-sm btn-primary"
                            onClick={saveProduct}>Save
                        </button>
                    </div>
                </section>

                <section>
                    {/* Discounts */}
                    <div className="discounts">
                        <h3>Discount Codes</h3>
                        <div className="form-field">
                            <label className="form-label">Code: </label>
                            <input
                                className="form-control"
                                type="text"
                                name="code"
                                onBlur={handleEvent}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">Discount: </label>
                            <input
                                className="form-control"
                                type="number"
                                name="discount"
                                onBlur={handleEvent}
                            />
                        </div>

                        <button
                            className="btn btn-sm btn-primary"
                            onClick={save}
                        >
                            Save
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Admin;
