import { Redirect, useHistory, withRouter, Switch, Route } from "react-router-dom";

const About = ({
    match,
    location,
    history
}) => {

    // if (Math.random() > 0.5) {
    //     history.push('/');
    //     return null;
    // }

    // if (Math.random() > 0.5) {
    //     return <Redirect to="/" />
    // }

    return (
        <main className="main-container">
            <h1>About {match.params.name} Page</h1>
            <Switch>
                <Route path="/about/pesho">
                    <h2>Pesho is the Best!!!</h2>
                </Route>
            </Switch>

        </main>
    );
};

export default About;