import React from 'react';

const MainPanel = () => {
    return (
        <div className="main-panel" style={{height: '100vh'}}>
            {/*NAVBAR*/}
            <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <div className="navbar-toggle">
                            <button type="button" className="navbar-toggler">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <a className="navbar-brand" href="a">Title</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                        <form>
                            <div className="input-group no-border">
                                <input type="text" value="" className="form-control"
                                       placeholder="Search..."/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <i className="nc-icon nc-zoom-split"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item btn-rotate dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com"
                                   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">
                                    <i className="nc-icon nc-bell-55"></i>
                                    <p>
                                        <span className="d-lg-none d-md-block">Some Actions</span>
                                    </p>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right"
                                     aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="a">Action</a>
                                    <a className="dropdown-item" href="a">Another action</a>
                                    <a className="dropdown-item" href="a">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*End Navba*/}
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="description">Your content here</h3>
                    </div>
                </div>
            </div>
            <footer
                className="footer"
                // style="position: absolute; bottom: 0; width: -webkit-fill-available;"
                style={{position: 'absolute', bottom: 0, width: '-webkit-fill-available'}}
            >
                <div className="container-fluid">
                    <div className="row">
                        <nav className="footer-nav">
                            <ul>
                                <li><a href="https://www.creative-tim.com">Creative Tim</a>
                                </li>
                                <li><a href="https://www.creative-tim.com/blog">Blog</a>
                                </li>
                                <li><a href="https://www.creative-tim.com/license"
                                >Licenses</a></li>
                            </ul>
                        </nav>
                        <div className="credits ml-auto">
                            <span className="copyright">
                                © 2020, made with <i className="fa fa-heart heart"></i> by Creative Tim
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainPanel;