# Redux Notes

Redux = state management

"state" on a component vs. "state" within the entire application

as React applications grow the state can start to be housed all over the place
and utilizing the good ole' props shuttle becomes a bit annoying as the application grows - and sadly this seems to be exponential (I mean I start to bitch after the third child gets tacked on the virtual DOM, so imagine if perhaps there were 30 children tacked on...)

the movement of state across the application starts to create an entirely different perspective of the bigger picture of application state, this idea that the individual states collectively represent the overall state of the application.

it would be nice if perhaps the application had a single location for its state and we had ways to shuttle it around and interact with it using our methods.

and with that thought - enter Redux, stage left.

Now that's out in the open, let's talk about the first major aspect of Redux and how its single source of truth for application state management, the state tree, really just makes it look like one really damn big stateful component, and a pure one at that! (shout out to all the functional programmers that have been stuck in the doldrums of academia and in the shadows too long, because you don't get nearly the credit you deserve most of the time - I know, I know, you told us so...)

## State Tree

### Benefits

- make state more predictable
- shared cache
- state changes are more predictable
- consider a safe in your house with a security camera on it
- actually in this case its more like a security guard
- improved developer tooling
- pure functions
  - app just receives state its like one big pure functions
- server side rendering

### Interactions

- get state tree
- listen for changes in the state tree
- update state tree

### State Tree + Interactions = Store

The state tree and its interactions collectively create the "store" in Redux.
