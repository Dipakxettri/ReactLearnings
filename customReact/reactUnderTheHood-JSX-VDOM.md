When you write:

<a href="https://google.com" target="_blank">
  Click me!
</a>


It looks like HTML…

…but it is NOT HTML.

🧠 React converts JSX into a JavaScript object (a tree)

React changes your JSX into something like:

{
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me!"
}


This is called a React Element.

React builds these objects in memory, not DOM nodes yet.

🌳 React builds a whole tree of these objects

This tree is called the:

⭐ Virtual DOM (VDOM)

Every component becomes a node in this virtual tree.

Example:

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button>Click</button>
    </div>
  );
}


React turns it into a tree of objects:

App
 └── div
      ├── h1 ("Hello")
      └── button ("Click")


Each node is basically this structure:

{
  type: "div",  
  props: { ... },
  children: [ ... ]
}

⚙️ React understands this tree, not JSX or HTML

React works with:

JavaScript objects

Trees

Nodes

Props

Children

Functions

React does not work directly with HTML strings.

This is why React is:

faster

predictable

declarative

able to diff and update only small parts

able to skip unnecessary DOM changes

🧩 Then ReactDOM converts the object tree into real DOM

The real browser DOM only happens at the final step.

Your customRender example is a super simplified version of this.

ReactDOM does:

Look at the virtual tree

Compare it to the previous tree

Make minimal DOM operations
