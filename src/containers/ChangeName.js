import { connect } from 'react-redux'
import Name from '../components/Name'
import { update } from '../actions'


const mapStateToProps = ({ name }) => {
  return {
    name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      dispatch(update(value))
    }
  }
}

const ChangeName = connect(
  mapStateToProps,
  mapDispatchToProps
)(Name)

export default ChangeName
