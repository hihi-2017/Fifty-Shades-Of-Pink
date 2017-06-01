import React from 'react'
import {Link} from 'react-router-dom'

export default class StoryLibraryItem extends React.Component {
  //you only need the constructor if you are setting an initial state, if you leave these three lines out it will do exactly the same thing
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="story-library-item">
        <div className="bookcover">
          <Link to={this.props.story.firstchapUrl}><img src={this.props.story.image} alt="a book cover"></img></Link>
        </div>
        <h3>{this.props.story.title}</h3>
        <p className="story-description">{this.props.story.description}</p>
      </div>
    )
  }
}
