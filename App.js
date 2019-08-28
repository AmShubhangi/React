import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    "id": 1,
                    "name": 'Shubhangi',
                    "age": 22
                },
                {
                    "id": 2,
                    "name": 'Dilip',
                    "age": 45
                },
                {
                    "id": 3,
                    "name": 'Ambade',
                    "age": 20
                },
            ]
        }
    }
    render() {
        var tableStyle = {
            width: 300,
            height: 200
        }
        return (

            <div>
                <Content />
                <Demo />
                <Header />
                <table border='1' align='center' style={tableStyle}>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
            </div>
        );
    }

}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td align="center">{this.props.data.id}
                </td>
                <td align="center">{this.props.data.name}
                </td>
                <td align="center">{this.props.data.age}
                </td>
            </tr>

        );
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: 'Header From State',
            content: 'Content From State'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h1>{this.state.content}</h1>
            </div>
        )

    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header Component</h1>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        const somevalue = "Shubhangi";
        var i = 1;
        var myStyle = {
            fontSize: 16,
            color: 'blue'
        }
        return (
            <div>
                <h1>Props Example</h1>
                <PropsExample />
                <p data-myattribute="somevalue">This is the content!!! {somevalue}</p>
                <div>
                    <h1>{1 * 1}</h1>
                    <h1>{1 + 1}</h1>
                    <h1 style={myStyle}>{i == 2 ? 'True' : 'False'} because i is {i}</h1>

                </div>
            </div>
        );
    }
}

class PropsExample extends React.Component {
    render() {
        return (
            <div>
                <h2>setStateHandler
                <App2 />
                </h2>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Boolean:{this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Function:{this.props.propFunc(3)}</h3>
                <h3>Number:{this.props.propNumber}</h3>
                <h3>String:{this.props.propString}</h3>
                <h3>Object:{this.props.propObject.object1}</h3>
                <h3>Object:{this.props.propObject.object2}</h3>
                <h3>Object:{this.props.propObject.object3}</h3>

            </div>
        );
    }
}

PropsExample.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object
}

PropsExample.defaultProps = {
    propArray: [1, 2, 3, 4],
    propBool: true,
    propFunc: function (e) { return e },
    propNumber: 1,
    propString: 'shubhangi',
    propObject: {
        object1: 'Obj1',
        object2: 'Obj2',
        object3: 'Obj3',
    }
}

class App2 extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler() {
        var item = "setState...";
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({ data: myArray })
    };
    render() {
        return (
            <div>
                <h3>ForceUpdateExample: <ForceUpdateComp /></h3>
                <button onClick={this.setStateHandler}>Set State</button>
                <h3>State Array:{this.state.data}</h3>
            </div>
        )
    }
}

class ForceUpdateComp extends React.Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };
    forceUpdateHandler() {
        this.forceUpdate();
    };
    render() {
        return (
            <div>
                <h4>RactDomExmaple==><ReactDomExample /></h4>
                <button onClick={this.forceUpdateHandler}>Force Update</button>
                <h3>Random Number:{Math.random()}</h3>
            </div>
        )
    }
}

class ReactDomExample extends React.Component {
    constructor() {
        super();
        this.findDOMNodHandler = this.findDOMNodHandler.bind(this);
    };
    findDOMNodHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'blue';
    }
    render() {
        return (
            <div>
                <button onClick={this.findDOMNodHandler}>Find DOM Node</button>
                <div id="myDiv">Node</div>
            </div>

        );
    }
}
export default App;

// class App extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          header: "Header from props...",
//          content: "Content from props..."
//       }
//    }
//    render() {
//       return (
//          <div>
//             <Header headerProp = {this.state.header}/>
//             <Content contentProp = {this.state.content}/>
//          </div>
//       );
//    }
// }
// class Header extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{this.props.headerProp}</h1>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <h2>{this.props.contentProp}</h2>
//          </div>
//       );
//    }
// }