import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import * as postService from "./services/postService";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import style from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            selectedPost: null,
        }
    };

    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({ posts })
            })
    };

    onMenuItemClick(id) {
        this.setState({ selectedPost: id })
    };

    getPosts() {
        if (!this.state.selectedPost) {
            return this.state.posts;
        } else {
            return [this.state.posts.find(x => x.id == this.state.selectedPost)]
        }
    }

    render() {
        return (
            <div className={style.app}>
                <Header />

                <div className={style.container}>
                    <Menu
                        onMenuItemClick={this.onMenuItemClick.bind(this)}
                    />
                    <Switch>
                        <Route path="/" exact>
                            <Main posts={this.getPosts()} />
                        </Route>
                        <Route path="/about/:name/" component={About} />
                        <Route path="/about" component={About} />
                        <Route path="/contact-us" component={ContactUs} />  
                        {/* <Route path="/contact-us" render={ContactUs} />   */}
                        {/* <Route path="/contact-us" render={(props) => <h1>Custom Contact Us Page</h1>} />  with render we can make component in this moment */}
                        <Route render={()=><h1>Error page</h1>}/>  {/* default case - if nothing matches */}
                    </Switch>

                </div>

            </div>
        );

    };
};

export default App;

// with function component
// function App() {
//     return (
//         <div className={style.app}>
//             <Header />

//             <div className={style.container}>
//                 <Menu />

//                 <Main />
//             </div>

//         </div>
//     );
// }

