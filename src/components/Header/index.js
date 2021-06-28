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
  HierarchicalMenu,
  Menu,
  Panel,
  ToggleRefinement,
  Ratings,
} from 'react-instantsearch-dom';


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
          <h1>InstantSearch Gallery</h1>
        </header>
        <main>
          <div className="left-panel">
          
          <ClearRefinements />
          <div>
            <RefinementList attribute="geography" />
            </div>
          <h2>Data Source</h2>
            <RefinementList 
            attribute="data_source" />
          <h2>Hierarchical Menu</h2>
          <Menu
              attribute="objectID"
          />
          <h2>Topic</h2>
            <RefinementList attribute="topic" />
          </div>
          <div className="right-panel">
            <SearchBox />
            <div className="results">
            <Hits hitComponent={Hit} />
            </div>
            <Pagination />
          </div>
        </main>
      </InstantSearch>
    );
  }
}
export default Header;