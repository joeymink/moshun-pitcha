## moshun-pitch

A simply giphy browser using React, Redux, and some TypeScript

### If I spent more time on this, I would ...

Improve the TypeScript usage. This was my first foray into TypeScript.
Some `interface`s were created solely to serve TypeScript's desire for
being explicit.

Use `PropTypes` more widely. I removed them after collisions with TypeScript.
I didn't fully understand some of the inconsistencies I ran into between the two
different typing systems.

Dig deeper into Giphy's Grid react component, and potentially rewrite it. Because
it takes a function as a property, React isn't convinced a change in state need a
re-render for the Giphy component. I got around this by forcing a fabricated
"loading" state for one second. But that was just to force a re-render of Giphy
grid component.

Improve testing. Only the absolute base-cases are covered, and only for the
lead-node components.

The search form's text input should be a managed component (capture state with
every character typed).

Replace the modal with a better experience. Either use a separate view entirely
or change the embedded content within the modal. It's a bit challenging as a
user with the current iframed content.

Straighten out camelCase and snake_case usage. Python and JavaScript are fighting
in my brain!

Come up with a logo and a better name. Everyone loves some branding!


### Credit

- 45.svg is from https://icons8.com/preloaders/
