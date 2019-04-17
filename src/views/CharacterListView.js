import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacter } from "../actions";
import Loader from "react-loader-spinner";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    // console.log(this.props);

    this.props.getCharacter();
  }

  render() {
    console.log(this.props.characters);
    console.log(this.props.fething);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />;
      <h1>One Moment....</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
};
export default connect(
  mapStateToProps,
  {
    getCharacter
  }
)(CharacterListView);
