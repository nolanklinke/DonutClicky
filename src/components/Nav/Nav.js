import React from "react";

class Nav extends React.Component {
    render() {
        return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="Donut" />
                Donut Clicky Game
            </a>
        </nav>
        );
    }
};

export default Nav;