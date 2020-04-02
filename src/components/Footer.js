import React from 'react'
import Link from './Link';
import {LinkEx, LinkDelete} from './Link';
import {VisibilityFilters} from "../reducers/showTodosReducer";

function handleClick(e) {
    console.log(e);
    alert("hello");
}
  
function Footer() {
    return (
        <div>
            <span>Show</span>
            <Link onClick={handleClick} active={false}>All</Link>
            <Link onClick={handleClick} active={false}>Active</Link>
            <Link onClick={handleClick} active={false}>Completed</Link>
            <Link onClick={handleClick} active={false}>Delete</Link>
        </div>
    )
}

export default Footer;


export function FooterEx() {
    return (
        <div>
            <span>Show</span>
            <LinkEx filter={VisibilityFilters.SHOW_ALL_TODOS}>All</LinkEx>
            <LinkEx filter={VisibilityFilters.SHOW_ACTIVE_TODOS}>Active</LinkEx>
            <LinkEx filter={VisibilityFilters.SHOW_COMPLETED_TODOS}>Completed</LinkEx>
            <LinkDelete active={false}>Delete</LinkDelete>
        </div>
    )
}
