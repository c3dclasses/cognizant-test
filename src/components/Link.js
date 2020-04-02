import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setVisibilityFilter} from "../reducers/showTodosReducer";
import {delTodoAction} from "../reducers/todosReducer";

function Link({active, children, onClick}) {
    return (
        <button onClick={onClick} disabled={active} style={{
            marginLeft: '4px'
        }}>
            {children}
        </button>
    );
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Link;


// LinkEx
function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.filter
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}

export const LinkEx = connect(mapStateToProps, mapDispatchToProps)(Link)


function mapDeleteDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(delTodoAction())
    }
}

export const LinkDelete = connect(null,mapDeleteDispatchToProps)(Link) 