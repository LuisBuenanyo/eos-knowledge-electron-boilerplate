import { connect } from 'react-redux'
import SearchResults from '../components/searchresults'

const mapStateToProps = (state) => {
  return {
    query: state.query,
    state: state.searchState,
    results: state.searchResults,
    selected: state.articleModel ? state.articleModel.ekn_id : ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResultClick: (model) => {
      dispatch({
        type: 'ARTICLE_CLICKED',
        model
      })
    }
  }
}

const AppSearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)

export default AppSearchResults
