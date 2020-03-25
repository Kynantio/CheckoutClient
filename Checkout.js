import React, {Component, Fragment} from 'react'

class Checkout extends Component {
   render(){
     return(
       <Fragment>
         <div>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico" />
  <title>Checkout example for Bootstrap</title>
  <link
    rel="canonical"
    href="https://getbootstrap.com/docs/4.0/examples/checkout/"
  />
  {/* Bootstrap core CSS */}
  <link href="../../dist/css/bootstrap.min.css" rel="stylesheet" />
  {/* Custom styles for this template */}
  <link href="form-validation.css" rel="stylesheet" />
  <div className="container">
    <div className="py-5 text-center">
      <h2>Checkout</h2>
    </div>
    <div className="row">
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge badge-secondary badge-pill">1</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Mouse</h6>
              <small className="text-muted">Rp. 200.000</small>
            </div>
            <span className="text-muted">$Rp. 200.000</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total</span>
            <strong>Rp. 200.000</strong>
          </li>
        </ul>
        <form className="card p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Promo code"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-secondary">
                Redeem
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-8 order-md-1">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="address">Alamat</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              required
            />
            <div className="invalid-feedback">
              Masukkan alamat anda
            </div>
          </div>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
       </Fragment>
     )
   }
}
export default Checkout;