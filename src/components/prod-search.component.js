import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class ProdSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      skus: '',
      copied: false
    }

    this.handleChange = this.handleChange.bind(this);

  }
  
  handleChange(event) {
    this.setState({
      skus: event.target.value
    });
  }

  returnString() {
    let query = {
      select: "select {paa2.onlineDate} as styleOnline,{paa2.offlineDate} as styleOffline,{paa.onlineDate} as sizeOnline,{paa.offlineDate} as sizeOffline,{ca.pk},{ct.code},{sz.sku},{sz.size},{sz.code}, {ca.display}, {ca.realTimeDCInventory},{ca.sizeAvailableInstores}, {ca.bossFulfilled}, {ca.singleStoreInventory}, {st.launchProduct}, {st.skuLaunchDate},{st.pdpActivationDate} ,{sz.pk},{st.pk},{paa.pk},{paa2.pk},{ct.pk},{pag.pk} from {SizeVariantProduct as sz join StyleVariantProduct! as st on {sz.baseProduct}={st.pk} join ContextualAttributeValue as ca on {ca.product}={sz.pk} join ContextualAttributesContext as ct on {ca.context}={ct.pk} join ProductAvailabilityAssignment as paa on {paa.product}={sz.pk} join ProductAvailabilityAssignment as paa2 on {paa2.product}={st.pk} join ProductAvailabilityGroup as pag on ({pag.pk}={paa.availabilityGroup} and {pag.pk}={paa2.availabilityGroup}) join BaseStore as s on {s.contextualAttributesContext}={ct.pk} join ProductAvailabilityGroup2BaseStoreRel as ",
      where: function() {
        return "paabsr on ({paabsr.target}={s.pk} and {paabsr.source}={pag.pk}) } where {st.sku} IN ("+ this.skus +") and {sz.catalogversion}=({{ select {cv.pk} from { CatalogVersion as cv join Catalog as c on {cv.catalog}={c.pk}} where {c.id}='flProductCatalog' and {cv.version}='Online' }}) and {sz.catalogversion} = {ca.catalogversion} and {sz.catalogversion} = {st.catalogversion} and {sz.catalogversion} = {paa.catalogversion} and {sz.catalogversion} = {paa2.catalogversion} order by {ct.code},{sz.sku},{sz.size}";
      },
    
    };
    query.skus = this.state.skus;
    let string = query.select + query.where();
    return string;
  }

  renderImpex() {
    return (
      <div className="card mb-3">
        <div className="card-body">{ this.returnString() }</div>
      </div>
    );
  }

  renderCopyBtn() {
    if (this.state.skus !== '') {
      return (
        <CopyToClipboard text={ this.returnString() } onCopy={() => this.setState({copied: true})}>
          <button type="button" className="btn btn-outline-primary">Copy</button>
        </CopyToClipboard>
      );
    } else {
      return (null);
    }
    
  }

  render () {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Product Search Generator</h1>
        </div>
        <form>
          {/* <--ProductSKU--> */}
          <div className="form-group mb-3">
            <label htmlFor="productSkus">SKUs</label>
            <div className="input-group">
              <textarea 
                className="form-control" 
                name="productSkus"
                value={this.state.skus}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <small className="form-text text-muted">Separate by comma(no spaces) with single quotes: 'DV5057NO','FKL05721'</small>
          </div>
          {this.renderImpex()}
          {this.renderCopyBtn()}
        </form>
      </main>
    )
  }
}
