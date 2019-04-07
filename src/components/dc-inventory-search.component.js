import React, { Component } from 'react';

export default class DCInventorySearch extends Component {
    render () {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">DC Inventory Search Generator</h1>
            </div>
            <form>
              <div className="form-row productControl">
                {/* <--DefaultStatus--> */}
              <div className="col">
              <div className="form-group mb-3">
                <label for="defaultStatus">Default Status</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="defaultStatus" id="defaultStatusTrue" value="true" checked=""></input>
                  <label className="form-check-label" for="defaultStatusTrue">
                      True
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="defaultStatus" id="defaultStatusFalse" value="false"></input>
                  <label className="form-check-label" for="defaultStatusFalse">
                      False
                  </label>
                </div>
              </div>
            </div>
          </div>
            {/* <--ProductSKU--> */}
            <div className="form-group mb-3">
              <label for="productSkus">SKUs</label>
              <div className="input-group">
                <textarea className="form-control" name="productSkus"></textarea>
              </div>
              <small className="form-text text-muted">Separate by comma(no spaces) with single quotes: 'DV5057NO','FKL05721'</small>
            </div>
            {/* <--Submit--> */}
            <div className="form-group form-group-submit mb-3">
              <button type="submit" className="btn btn-primary">Generate</button>
            </div>
            </form>
          </main>
        )
    }
}