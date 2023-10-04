/**\
<div id="parent">
      <div id="child">
        <h1>i'm h1 tag</h1>
        <h2>i'm h2 tag</h2>
       </div>
<div id="child2">
      <div id="child">
        <h1>i'm h1 tag</h1>
        <h2>i'm h2 tag</h2>
       </div>
</div>              
 */

const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"iam h1 tag"),
React.createElement("h2",{id:"heading"},"iam h2 tag")
]),
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"iam h1 tag"),
React.createElement("h2",{id:"heading"},"iam h2 tag")
])
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)