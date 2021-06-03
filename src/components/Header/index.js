import React from 'react';
import PropTypes from 'prop-types';
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
  ClearRefinements,
} from 'react-instantsearch-dom';


class Header extends React.Component {
  static propTypes = {
    searchState: PropTypes.object,
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSearchStateChange: PropTypes.func,
    createURL: PropTypes.func,
    indexName: PropTypes.string,
    searchClient: PropTypes.object,
  };

  render() {
    return (
      <InstantSearch
        searchClient={this.props.searchClient}
        resultsState={this.props.resultsState}
        onSearchStateChange={this.props.onSearchStateChange}
        searchState={this.props.searchState}
        createURL={this.props.createURL}
        indexName={this.props.indexName}
        onSearchParameters={this.props.onSearchParameters}
        {...this.props}
      >
        <Configure hitsPerPage={8} />
        <header>
          <h1>InstantSearch + Next.Js</h1>
          <SearchBox />
        </header>
        <main>
          <div className="">
          <ClearRefinements />
            <RefinementList attribute="categories" />
          </div>
          <div className="results">
          </div>
        </main>
        <footer>
          <Pagination />
          </footer>
      </InstantSearch>
    );
  }
}
export default Header;