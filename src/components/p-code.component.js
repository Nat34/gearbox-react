import React, { Component } from 'react';

export default class PCode extends Component {
    render () {
        return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">P Code Generator</h1>
          </div>
          <form method="POST" action="/p-code">
            {/* <--ProductLevelInput--> */}
            {/* <--ProductSKU--> */}
            <div className="form-group mb-3">
              <label for="productSkus">SKUs</label>
              <div className="input-group">
                <textarea className="form-control" name="productSkus"></textarea>
              </div>
              <small className="form-text text-muted">Separate by comma(no spaces) with single quotes: 'DV5057NO','FKL05721'</small>
            </div>
            {/* <--ProductBanner--> */}
            <div className="form-group mb-3">
              <label for="productBanner">Product Banner</label>
            <select className="form-control form-control-sm" name="productBanner">
              <option value="ChAg">Champs Sports</option>
              <option value="EbAg">East Bay</option>
              <option value="FsAg">Final Score</option>
              <option value="FaAg">Foot Action</option>
              <option value="FlAg">Foot Locker</option>
              <option value="FlcAg">Foot Locker CA</option>
              <option value="KflAg">Kids Foot Locker</option>
              <option value="LflAg">Lady Foot Locker</option>
              <option value="So2Ag">SIX:02</option>
            </select>
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