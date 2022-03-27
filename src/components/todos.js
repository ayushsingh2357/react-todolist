import React from 'react'
import { Todoitem } from './todoitem'

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className='text-center my-3'>
                Todos List
            </h3>
            {props.todos.map((a) => {
                return <Todoitem todo={a} key = {a.sno} onDelete={props.onDelete} />
            }
            )}

        </div>
    )
}
