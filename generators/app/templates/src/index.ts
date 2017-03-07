import xs, {Stream} from 'xstream';
import {run} from '@cycle/run';
import {div, makeDOMDriver, DOMSource, VNode} from '@cycle/dom';


export type Sources = {
    DOM: DOMSource
}

export type Sinks = {
    DOM: Stream<VNode>
}

function main(sources: Sources): Sinks {
    return {
        DOM: xs.of(null).map(_ => div([
            '<%= name %>'
        ]))
    }
}

run(main, {
    DOM: makeDOMDriver('#app')
})