import React, { Component } from "react"
import PropTypes from 'prop-types'
import Board from "@lourenci/react-kanban"
import { Row } from "reactstrap"
import CardTaskBox from "./card-task-box"
import RenderCardTitle from "./render-card-title"

class UncontrolledBoard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const content = this.props.board
    return (
      <React.Fragment>
        <Row>
          <Board
            initialBoard={content}
            renderColumnHeader={({ title }) => (
              <RenderCardTitle title={title} />
            )}
            renderCard={({ data }, { dragging }) => (
              <CardTaskBox dragging={dragging}>{data}</CardTaskBox>
            )}
            allowAddCard={{ on: "bottom" }}
            onNewCardConfirm={draftCard => ({
              id: new Date().getTime(),
              ...draftCard,
            })}
            onCardNew={console.log}
          />
        </Row>
      </React.Fragment>
    )
  }
}

UncontrolledBoard.propTypes = {
  board: PropTypes.any
}

export default UncontrolledBoard
