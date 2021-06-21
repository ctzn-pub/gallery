import React,{useState} from 'react';
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
  SortBy,
} from 'react-instantsearch-dom';

// const SearchResults = ({
//   hit: {
//     objectID,
//     title,
//     id,
//     data_source,
//     geography,
//     definition,
//     topic,
//     type,
//   },


function Hit (props) {
  return (
    <div>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="id" hit={props.hit} />
      </div>
      <div className="hit-objectID">
        <Highlight attribute="objectID" hit={props.hit} />
      </div>
      <div className="hit-data-source">
        <Highlight attribute="data_source" hit={props.hit} />
      </div>
      <div className="hit-geography">
        <Highlight attribute="geography" hit={props.hit} />
      </div>
      <div className="hit-definition">
        <Highlight attribute="definition" hit={props.hit} />
      </div>
      <div className="hit-title">
        <Highlight attribute="title" hit={props.hit} />
      </div>
      <div className="hit-topic">
        <Highlight attribute="topic" hit={props.hit} />
      </div>
      <div className="hit-type">
        <Highlight attribute="type" hit={props.hit} />
      </div>
    </div>
  );
}

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
        </header>
        <main>
          <div className="left-panel">
          <ClearRefinements />
          <h2>Categories</h2>
            <RefinementList attribute="geography" />
          <h2>Hierarchical Menu</h2>
            <RefinementList attribute="data_source" />
          <h2>Refinement List</h2>
            <RefinementList attribute="refinmentList" />
          <h2>Topic</h2>
            <RefinementList attribute="topic" />
          </div>
          <div className="right-panel">
            <SearchBox />
            {/* <SortBy
              defaultRefinement="instant_search"
                items={[
                  { value: 'instant_search', label: 'Featured' },
                  { value: 'instant_search_price_asc', label: 'topic' },
                  { value: 'instant_search_price_desc', label: 'title' },
              ]}
            /> */}
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </main>
      </InstantSearch>
    );
  }
}
export default Header;