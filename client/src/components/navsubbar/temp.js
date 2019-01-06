<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="robots" content="noindex">
        <title>Elements - Web UI Components Collection</title>
        <link href="./media/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
        <link href="./media/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png">
        <link href="./media/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png">
        <link rel="manifest" href="./media/favicon/manifest.json">
        <link color="#5bbad5" href="./media/favicon/safari-pinned-tab.svg" rel="mask-icon">
        <link rel="shortcut icon" href="./media/favicon/favicon.ico">
        <meta name="msapplication-config" content="./media/favicon/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
        <link href="./static/css/main.f9e10bd9.css" rel="stylesheet">
        <style type="text/css">
             /* Chart.js */
            @-webkit-keyframes chartjs-render-animation {
                from {
                    opacity: 0.99
                }
                to {
                    opacity: 1
                }
            }
            @keyframes chartjs-render-animation {
                from {
                    opacity: 0.99
                }
                to {
                    opacity: 1
                }
            }
            .chartjs-render-monitor {
                -webkit-animation: chartjs-render-animation 0.001s;
                animation: chartjs-render-animation 0.001s;
            }
        </style>
        <style data-emotion=""></style>
    </head>
    <body style="">
        <div id="root">
            <div>
                <div class="demo-tabs">
                    <div class="container">
                        <div class="px-sm-3">
                            <ul class="nav nav-tabs flex-nowrap">
                                <li class="nav-item position-relative">
                                    <a aria-current="page" class="nav-link px-2 pr-3 px-sm-3 py-1 py-sm-2 active" href="#/pages">
                                        <span class="pr-2">Pages</span>
                                    </a>
                                    <div class="demo-tabs-dropdown dropdown">
                                        <div aria-expanded="false" aria-haspopup="true" class="my-1 my-sm-2 px-1 dropdown-toggle">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </div>
                                        <div aria-hidden="true" class="dropdown-menu" role="menu" tabindex="-1">
                                            <div class="dropdown-header">Pages List:</div>
                                            <a aria-current="page" class="dropdown-item active" href="#/pages/overview">Overview</a>
                                            <a class="dropdown-item" href="#/pages/users">Users</a>
                                            <a class="dropdown-item" href="#/pages/settings">Profile</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-2 px-sm-3 py-1 py-sm-2" href="#/elements">Components</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-2 px-sm-3 py-1 py-sm-2" href="#/bootstrap">Bootstrap</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="container">
                        <div class="e-content">
                            <div class="row">
                                <div class="col">
                                    <nav class="e-navbar navbar navbar-expand-md card my-3 px-lg-4">
                                        <div class="e-navbar__cont flex-md-nowrap py-2">
                                            <button class="navbar-toggler btn" type="button">
                                                <span class="fa fa-bars"></span>
                                            </button>
                                            <div class="navbar-brand d-none d-md-block">
                                                <a aria-current="page" class="e-logo mx-4 active" href="#/pages/overview">
                                                    <span>Elements
                                                        <small>stay simple</small>
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="e-navbar__title navbar-text d-md-none my-2">Overview</div>
                                            <div class="e-navbar__nav navbar-collapse order-4 order-md-2 collapse navbar-collapse">
                                                <ul class="navbar-nav pt-3 pt-md-0">
                                                    <li class="nav-item">
                                                        <a aria-current="page" class="nav-link active" href="#/pages/overview">Overview</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#/pages/users">CRUD</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#/pages/settings">Settings</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="e-navbar__actions ml-3">
                                                <div>
                                                    <a class="btn btn-success d-md-none" href="#/pages/settings">
                                                        <i class="fa fa-user-circle"></i>
                                                    </a>
                                                    <div class="btn-group d-none d-md-block">
                                                        <button class="btn btn-success">
                                                            <i class="fa fa-bell"></i>
                                                        </button>
                                                        <a class="btn btn-success" href="#/pages/settings">
                                                            <span class="mx-1">John Smith</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div class="row flex-lg-nowrap">
                                <div class="col-12 col-lg-auto mb-3" style="width: 200px;">
                                    <div class="card p-3">
                                        <div class="e-navlist e-navlist--active-bg">
                                            <ul class="nav">
                                                <li class="nav-item">
                                                    <a aria-current="page" class="nav-link px-2 active" href="#/pages/overview">
                                                        <i class="fa fa-fw fa-bar-chart mr-1"></i>
                                                        <span>Overview</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link px-2" href="#/pages/users">
                                                        <i class="fa fa-fw fa-clone mr-1"></i>
                                                        <span>CRUD</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link px-2" href="#/pages/settings">
                                                        <i class="fa fa-fw fa-cog mr-1"></i>
                                                        <span>Settings</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row flex-column-reverse flex-lg-row">
                                        <div class="col-12 col-lg-9 col-xl-10 mb-3">
                                            <div class="e-panel card">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <h6 class="mr-2">
                                                            <span>Area Chart</span>
                                                            <small class="px-1">Visual Data</small>
                                                        </h6>
                                                    </div>
                                                    <div class="mt-3">
                                                        <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                            <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                            </div>
                                                            <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                            </div>
                                                        </div>
                                                        <canvas class="chartjs-render-monitor" height="190" style="display: block; width: 705px; height: 190px;" width="705"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-3 col-xl-2">
                                            <div class="row">
                                                <div class="col col-lg-12">
                                                    <div class="e-metric card mb-3">
                                                        <div class="card-body">
                                                            <div class="e-metric__main">
                                                                <span class="e-metric__ico fa-stack">
                                                                    <i class="fa fa-circle fa-stack-2x text-light"></i>
                                                                    <i class="fa fa-stack-1x fa-user"></i>
                                                                </span>
                                                                <div class="e-metric__text px-2">
                                                                    <span class="e-metric__value h5 m-0">3,200</span>
                                                                    <div class="e-metric__title">
                                                                        <small class="text-muted">Users</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col col-lg-12">
                                                    <div class="e-metric card mb-3">
                                                        <div class="card-body">
                                                            <div class="e-metric__main">
                                                                <span class="e-metric__ico fa-stack">
                                                                    <i class="fa fa-circle fa-stack-2x text-light"></i>
                                                                    <i class="fa fa-stack-1x fa-tag"></i>
                                                                </span>
                                                                <div class="e-metric__text px-2">
                                                                    <span class="e-metric__value h5 m-0">1,300</span>
                                                                    <div class="e-metric__title">
                                                                        <small class="text-muted">Tickets</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col col-lg-12">
                                                    <div class="e-metric card mb-3">
                                                        <div class="card-body">
                                                            <div class="e-metric__main">
                                                                <span class="e-metric__ico fa-stack">
                                                                    <i class="fa fa-circle fa-stack-2x text-light"></i>
                                                                    <i class="fa fa-stack-1x fa-usd"></i>
                                                                </span>
                                                                <div class="e-metric__text px-2">
                                                                    <span class="e-metric__value h5 m-0">8,400</span>
                                                                    <div class="e-metric__title">
                                                                        <small class="text-muted">Income</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-sm-6 col-xl-4 mb-3">
                                            <div class="e-panel card">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <h6 class="mr-2">
                                                            <span>Horizontal Bar</span>
                                                            <small class="px-1"></small>
                                                        </h6>
                                                    </div>
                                                    <div class="mt-3">
                                                        <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                            <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                            </div>
                                                            <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                            </div>
                                                        </div>
                                                        <canvas class="chartjs-render-monitor" height="200" style="display: block; width: 245px; height: 200px;" width="245"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col col-sm-6 col-xl-4 mb-3">
                                            <div class="e-panel card">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <h6 class="mr-2">
                                                            <span>Line Chart</span>
                                                            <small class="px-1"></small>
                                                        </h6>
                                                    </div>
                                                    <div class="mt-3">
                                                        <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                            <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                            </div>
                                                            <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                            </div>
                                                        </div>
                                                        <canvas class="chartjs-render-monitor" height="200" style="display: block; width: 245px; height: 200px;" width="245"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col col-sm-12 col-xl-4 mb-3">
                                            <div class="e-panel card">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <h6 class="mr-2">
                                                            <span>Donut Chart</span>
                                                            <small class="px-1"></small>
                                                        </h6>
                                                    </div>
                                                    <div class="mt-3">
                                                        <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                            <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                            </div>
                                                            <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                            </div>
                                                        </div>
                                                        <canvas class="chartjs-render-monitor" height="200" style="display: block; width: 245px; height: 200px;" width="245"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <div class="e-panel card">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <h6 class="mr-2">
                                                            <span>New Users</span>
                                                            <small class="px-1">For the week</small>
                                                        </h6>
                                                        <small class="text-muted">1 - 3 of 32</small>
                                                    </div>
                                                    <div class="mt-3">
                                                        <div class="table-responsive">
                                                            <div class="react-bootstrap-table">
                                                                <table class="table table-bordered">
                                                                    <thead>
                                                                        <tr>
                                                                            <th class="text-center">#</th>
                                                                            <th class="max-width">Name</th>
                                                                            <th class="sortable">Date<span class="order">
                                                                                    <span class="dropdown">
                                                                                        <span class="caret"></span>
                                                                                    </span>
                                                                                    <span class="dropup">
                                                                                        <span class="caret"></span>
                                                                                    </span>
                                                                                </span>
                                                                            </th>
                                                                            <th>Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="text-center">
                                                                                <b>1</b>
                                                                            </td>
                                                                            <td class="text-nowrap">Adam Cotter</td>
                                                                            <td class="text-nowrap">
                                                                                <span>09 Dec 2017</span>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <span class="badge badge-light">true</span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="text-center">
                                                                                <b>2</b>
                                                                            </td>
                                                                            <td class="text-nowrap">Pauline Noble</td>
                                                                            <td class="text-nowrap">
                                                                                <span>27 Jan 2018</span>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <span class="badge badge-secondary">false</span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="text-center">
                                                                                <b>3</b>
                                                                            </td>
                                                                            <td class="text-nowrap">Sherilyn Metzel</td>
                                                                            <td class="text-nowrap">
                                                                                <span>27 Jan 2018</span>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <span class="badge badge-light">true</span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div class="row react-bootstrap-table-pagination">
                                                                <div class="col-md-6 col-xs-6 col-sm-6 col-lg-6"></div>
                                                                <div class="react-bootstrap-table-pagination-list col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                                                    <ul class="pagination react-bootstrap-table-page-btns-ul">
                                                                        <li class="disabled page-item" title="previous page">
                                                                            <a href="#" class="page-link">‹</a>
                                                                        </li>
                                                                        <li class="active page-item" title="1">
                                                                            <a href="#" class="page-link">1</a>
                                                                        </li>
                                                                        <li class="page-item" title="2">
                                                                            <a href="#" class="page-link">2</a>
                                                                        </li>
                                                                        <li class="page-item" title="3">
                                                                            <a href="#" class="page-link">3</a>
                                                                        </li>
                                                                        <li class="page-item" title="4">
                                                                            <a href="#" class="page-link">4</a>
                                                                        </li>
                                                                        <li class="page-item" title="5">
                                                                            <a href="#" class="page-link">5</a>
                                                                        </li>
                                                                        <li class="page-item" title="next page">
                                                                            <a href="#" class="page-link">›</a>
                                                                        </li>
                                                                        <li class="page-item" title="last page">
                                                                            <a href="#" class="page-link">»</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="./static/js/main.6cd4743b.js"></script>
        <script src="chrome-extension://hhojmcideegachlhfgfdhailpfhgknjm/web_accessible_resources/index.js"></script>
    </body>
</html>

/*!
 * Original Bootstrap file with overrided
 * variables, mixins, functions and components
 */@media print {
    *,
    :after,
    :before {
        text-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important
    }
    a:not(.btn) {
        text-decoration: underline
    }
    abbr[title]:after {
        content: " (" attr(title) ")"
    }
    pre {
        white-space: pre-wrap !important
    }
    blockquote,
    pre {
        border: 1px solid #adb5bd;
        page-break-inside: avoid
    }
    thead {
        display: table-header-group
    }
    img,
    tr {
        page-break-inside: avoid
    }
    h2,
    h3,
    p {
        orphans: 3;
        widows: 3
    }
    h2,
    h3 {
        page-break-after: avoid
    }
    @page {
        size: a3
    }
    .container,
    body {
        min-width: 992px !important
    }
    .navbar {
        display: none
    }
    .badge {
        border: 1px solid #000
    }
    .table {
        border-collapse: collapse !important
    }
    .table td,
    .table th {
        background-color: #fff !important
    }
    .table-bordered td,
    .table-bordered th {
        border: 1px solid #dee2e6 !important
    }
    .table-dark {
        color: inherit
    }
    .table-dark tbody+tbody,
    .table-dark td,
    .table-dark th,
    .table-dark thead th {
        border-color: #e9ecef
    }
    .table .thead-dark th {
        color: inherit;
        border-color: #e9ecef
    }
}
*,
:after,
:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}
html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}
@-ms-viewport {
    width: device-width
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
    display: block
}
body {
    margin: 0;
    font-family: Open Sans, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #686e71;
    text-align: left;
    background-color: #f2f5f7
}
[tabindex="-1"]:focus {
    outline: 0 !important
}
hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
    overflow: visible
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 0;
    margin-bottom: 0.715rem
}
p {
    margin-top: 0;
    margin-bottom: 1rem
}
abbr[data-original-title],
abbr[title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0
}
address {
    font-style: normal;
    line-height: inherit
}
address,
dl,
ol,
ul {
    margin-bottom: 1rem
}
dl,
ol,
ul {
    margin-top: 0
}
ol ol,
ol ul,
ul ol,
ul ul {
    margin-bottom: 0
}
dt {
    font-weight: 700
}
dd {
    margin-bottom: 0.5rem;
    margin-left: 0
}
blockquote {
    margin: 0 0 1rem
}
dfn {
    font-style: italic
}
b,
strong {
    font-weight: bolder
}
small {
    font-size: 80%
}
sub,
sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline
}
sub {
    bottom: -0.25em
}
sup {
    top: -0.5em
}
a {
    color: #3c91da;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}
a:hover {
    color: #206aa9;
    text-decoration: underline
}
a:not([href]):not([tabindex]),
a:not([href]):not([tabindex]):focus,
a:not([href]):not([tabindex]):hover {
    color: inherit;
    text-decoration: none
}
a:not([href]):not([tabindex]):focus {
    outline: 0
}
code,
kbd,
pre,
samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    font-size: 1em
}
pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar
}
figure {
    margin: 0 0 1rem
}
img {
    vertical-align: middle;
    border-style: none
}
svg:not(:root) {
    overflow: hidden
}
table {
    border-collapse: collapse
}
caption {
    padding-top: 0.5rem 0.85rem;
    padding-bottom: 0.5rem 0.85rem;
    color: #868e96;
    text-align: left;
    caption-side: bottom
}
th {
    text-align: inherit
}
label {
    display: inline-block;
    margin-bottom: 0.5rem
}
button {
    border-radius: 0
}
button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color
}
button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}
button,
input {
    overflow: visible
}
button,
select {
    text-transform: none
}
[type=reset],
[type=submit],
button,
html [type=button] {
    -webkit-appearance: button
}
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
    padding: 0;
    border-style: none
}
input[type=checkbox],
input[type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0
}
input[type=date],
input[type=datetime-local],
input[type=month],
input[type=time] {
    -webkit-appearance: listbox
}
textarea {
    overflow: auto;
    resize: vertical
}
fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0
}
legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal
}
progress {
    vertical-align: baseline
}
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
    height: auto
}
[type=search] {
    outline-offset: -2px;
    -webkit-appearance: none
}
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}
::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button
}
output {
    display: inline-block
}
summary {
    display: list-item;
    cursor: pointer
}
template {
    display: none
}
[hidden] {
    display: none !important
}
html {
    height: 100%;
    font-size: 14px
}
body {
    min-height: 100%
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 0.715rem;
    font-family: inherit;
    font-weight: 600;
    line-height: 1.2;
    color: inherit
}
.h1,
h1 {
    font-size: 2.5rem
}
.h2,
h2 {
    font-size: 2rem
}
.h3,
h3 {
    font-size: 1.75rem
}
.h4,
h4 {
    font-size: 1.5rem
}
.h5,
h5 {
    font-size: 1.2rem
}
.h6,
h6 {
    font-size: 1rem
}
.lead {
    font-size: 1.25rem;
    font-weight: 300
}
.display-1 {
    font-size: 6rem
}
.display-1,
.display-2 {
    font-weight: 300;
    line-height: 1.2
}
.display-2 {
    font-size: 5.5rem
}
.display-3 {
    font-size: 4.5rem
}
.display-3,
.display-4 {
    font-weight: 300;
    line-height: 1.2
}
.display-4 {
    font-size: 3.5rem
}
hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, .1)
}
.small,
small {
    font-size: 80%;
    font-weight: 400
}
.mark,
mark {
    padding: 0.2em;
    background-color: #fcf8e3
}
.list-inline,
.list-unstyled {
    padding-left: 0;
    list-style: none
}
.list-inline-item {
    display: inline-block
}
.list-inline-item:not(:last-child) {
    margin-right: 0.5rem
}
.initialism {
    font-size: 90%;
    text-transform: uppercase
}
.blockquote {
    margin-bottom: 1.43rem;
    font-size: 1.25rem
}
.blockquote-footer {
    display: block;
    font-size: 80%;
    color: #868e96
}
.blockquote-footer:before {
    content: "\2014 \A0"
}
.img-fluid,
.img-thumbnail {
    max-width: 100%;
    height: auto
}
.img-thumbnail {
    padding: 0.25rem;
    background-color: #f2f5f7;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem
}
.figure {
    display: inline-block
}
.figure-img {
    margin-bottom: 0.715rem;
    line-height: 1
}
.figure-caption {
    font-size: 90%;
    color: #868e96
}
code {
    color: #c7254e;
    word-break: break-word
}
a > code {
    color: inherit
}
kbd {
    padding: 0.2rem 0.4rem;
    font-size: 90%;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem
}
kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: 700
}
pre {
    display: block;
    font-size: 90%;
    color: #212529
}
pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal
}
.pre-scrollable {
    max-height: 340px;
    overflow-y: scroll
}
code {
    background: #f9f2f4;
    padding: 0.2rem 0.4rem;
    font-size: 90%
}
pre code {
    background: none;
    padding: 0
}
.container {
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%
}
@media (min-width:576px) {
    .container {
        max-width: 540px
    }
}
@media (min-width:768px) {
    .container {
        max-width: 720px
    }
}
@media (min-width:992px) {
    .container {
        max-width: 960px
    }
}
@media (min-width:1200px) {
    .container {
        max-width: 1140px
    }
}
.container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px
}
.no-gutters {
    margin-right: 0;
    margin-left: 0
}
.no-gutters > .col,
.no-gutters > [class*=col-] {
    padding-right: 0;
    padding-left: 0
}
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px
}
.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%
}
.col-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: none
}
.col-1 {
    -ms-flex: 0 0 8.33333%;
    flex: 0 0 8.33333%;
    max-width: 8.33333%
}
.col-2 {
    -ms-flex: 0 0 16.66667%;
    flex: 0 0 16.66667%;
    max-width: 16.66667%
}
.col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
}
.col-4 {
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%
}
.col-5 {
    -ms-flex: 0 0 41.66667%;
    flex: 0 0 41.66667%;
    max-width: 41.66667%
}
.col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
}
.col-7 {
    -ms-flex: 0 0 58.33333%;
    flex: 0 0 58.33333%;
    max-width: 58.33333%
}
.col-8 {
    -ms-flex: 0 0 66.66667%;
    flex: 0 0 66.66667%;
    max-width: 66.66667%
}
.col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
}
.col-10 {
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%
}
.col-11 {
    -ms-flex: 0 0 91.66667%;
    flex: 0 0 91.66667%;
    max-width: 91.66667%
}
.col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
}
.order-first {
    -ms-flex-order: -1;
    order: -1
}
.order-last {
    -ms-flex-order: 13;
    order: 13
}
.order-0 {
    -ms-flex-order: 0;
    order: 0
}
.order-1 {
    -ms-flex-order: 1;
    order: 1
}
.order-2 {
    -ms-flex-order: 2;
    order: 2
}
.order-3 {
    -ms-flex-order: 3;
    order: 3
}
.order-4 {
    -ms-flex-order: 4;
    order: 4
}
.order-5 {
    -ms-flex-order: 5;
    order: 5
}
.order-6 {
    -ms-flex-order: 6;
    order: 6
}
.order-7 {
    -ms-flex-order: 7;
    order: 7
}
.order-8 {
    -ms-flex-order: 8;
    order: 8
}
.order-9 {
    -ms-flex-order: 9;
    order: 9
}
.order-10 {
    -ms-flex-order: 10;
    order: 10
}
.order-11 {
    -ms-flex-order: 11;
    order: 11
}
.order-12 {
    -ms-flex-order: 12;
    order: 12
}
.offset-1 {
    margin-left: 8.33333%
}
.offset-2 {
    margin-left: 16.66667%
}
.offset-3 {
    margin-left: 25%
}
.offset-4 {
    margin-left: 33.33333%
}
.offset-5 {
    margin-left: 41.66667%
}
.offset-6 {
    margin-left: 50%
}
.offset-7 {
    margin-left: 58.33333%
}
.offset-8 {
    margin-left: 66.66667%
}
.offset-9 {
    margin-left: 75%
}
.offset-10 {
    margin-left: 83.33333%
}
.offset-11 {
    margin-left: 91.66667%
}
@media (min-width:576px) {
    .col-sm {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%
    }
    .col-sm-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }
    .col-sm-1 {
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }
    .col-sm-2 {
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }
    .col-sm-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }
    .col-sm-4 {
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }
    .col-sm-5 {
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }
    .col-sm-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }
    .col-sm-7 {
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }
    .col-sm-8 {
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }
    .col-sm-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }
    .col-sm-10 {
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }
    .col-sm-11 {
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }
    .col-sm-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }
    .order-sm-first {
        -ms-flex-order: -1;
        order: -1
    }
    .order-sm-last {
        -ms-flex-order: 13;
        order: 13
    }
    .order-sm-0 {
        -ms-flex-order: 0;
        order: 0
    }
    .order-sm-1 {
        -ms-flex-order: 1;
        order: 1
    }
    .order-sm-2 {
        -ms-flex-order: 2;
        order: 2
    }
    .order-sm-3 {
        -ms-flex-order: 3;
        order: 3
    }
    .order-sm-4 {
        -ms-flex-order: 4;
        order: 4
    }
    .order-sm-5 {
        -ms-flex-order: 5;
        order: 5
    }
    .order-sm-6 {
        -ms-flex-order: 6;
        order: 6
    }
    .order-sm-7 {
        -ms-flex-order: 7;
        order: 7
    }
    .order-sm-8 {
        -ms-flex-order: 8;
        order: 8
    }
    .order-sm-9 {
        -ms-flex-order: 9;
        order: 9
    }
    .order-sm-10 {
        -ms-flex-order: 10;
        order: 10
    }
    .order-sm-11 {
        -ms-flex-order: 11;
        order: 11
    }
    .order-sm-12 {
        -ms-flex-order: 12;
        order: 12
    }
    .offset-sm-0 {
        margin-left: 0
    }
    .offset-sm-1 {
        margin-left: 8.33333%
    }
    .offset-sm-2 {
        margin-left: 16.66667%
    }
    .offset-sm-3 {
        margin-left: 25%
    }
    .offset-sm-4 {
        margin-left: 33.33333%
    }
    .offset-sm-5 {
        margin-left: 41.66667%
    }
    .offset-sm-6 {
        margin-left: 50%
    }
    .offset-sm-7 {
        margin-left: 58.33333%
    }
    .offset-sm-8 {
        margin-left: 66.66667%
    }
    .offset-sm-9 {
        margin-left: 75%
    }
    .offset-sm-10 {
        margin-left: 83.33333%
    }
    .offset-sm-11 {
        margin-left: 91.66667%
    }
}
@media (min-width:768px) {
    .col-md {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%
    }
    .col-md-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }
    .col-md-1 {
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }
    .col-md-2 {
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }
    .col-md-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }
    .col-md-4 {
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }
    .col-md-5 {
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }
    .col-md-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }
    .col-md-7 {
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }
    .col-md-8 {
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }
    .col-md-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }
    .col-md-10 {
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }
    .col-md-11 {
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }
    .col-md-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }
    .order-md-first {
        -ms-flex-order: -1;
        order: -1
    }
    .order-md-last {
        -ms-flex-order: 13;
        order: 13
    }
    .order-md-0 {
        -ms-flex-order: 0;
        order: 0
    }
    .order-md-1 {
        -ms-flex-order: 1;
        order: 1
    }
    .order-md-2 {
        -ms-flex-order: 2;
        order: 2
    }
    .order-md-3 {
        -ms-flex-order: 3;
        order: 3
    }
    .order-md-4 {
        -ms-flex-order: 4;
        order: 4
    }
    .order-md-5 {
        -ms-flex-order: 5;
        order: 5
    }
    .order-md-6 {
        -ms-flex-order: 6;
        order: 6
    }
    .order-md-7 {
        -ms-flex-order: 7;
        order: 7
    }
    .order-md-8 {
        -ms-flex-order: 8;
        order: 8
    }
    .order-md-9 {
        -ms-flex-order: 9;
        order: 9
    }
    .order-md-10 {
        -ms-flex-order: 10;
        order: 10
    }
    .order-md-11 {
        -ms-flex-order: 11;
        order: 11
    }
    .order-md-12 {
        -ms-flex-order: 12;
        order: 12
    }
    .offset-md-0 {
        margin-left: 0
    }
    .offset-md-1 {
        margin-left: 8.33333%
    }
    .offset-md-2 {
        margin-left: 16.66667%
    }
    .offset-md-3 {
        margin-left: 25%
    }
    .offset-md-4 {
        margin-left: 33.33333%
    }
    .offset-md-5 {
        margin-left: 41.66667%
    }
    .offset-md-6 {
        margin-left: 50%
    }
    .offset-md-7 {
        margin-left: 58.33333%
    }
    .offset-md-8 {
        margin-left: 66.66667%
    }
    .offset-md-9 {
        margin-left: 75%
    }
    .offset-md-10 {
        margin-left: 83.33333%
    }
    .offset-md-11 {
        margin-left: 91.66667%
    }
}
@media (min-width:992px) {
    .col-lg {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%
    }
    .col-lg-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }
    .col-lg-1 {
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }
    .col-lg-2 {
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }
    .col-lg-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }
    .col-lg-4 {
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }
    .col-lg-5 {
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }
    .col-lg-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }
    .col-lg-7 {
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }
    .col-lg-8 {
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }
    .col-lg-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }
    .col-lg-10 {
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }
    .col-lg-11 {
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }
    .col-lg-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }
    .order-lg-first {
        -ms-flex-order: -1;
        order: -1
    }
    .order-lg-last {
        -ms-flex-order: 13;
        order: 13
    }
    .order-lg-0 {
        -ms-flex-order: 0;
        order: 0
    }
    .order-lg-1 {
        -ms-flex-order: 1;
        order: 1
    }
    .order-lg-2 {
        -ms-flex-order: 2;
        order: 2
    }
    .order-lg-3 {
        -ms-flex-order: 3;
        order: 3
    }
    .order-lg-4 {
        -ms-flex-order: 4;
        order: 4
    }
    .order-lg-5 {
        -ms-flex-order: 5;
        order: 5
    }
    .order-lg-6 {
        -ms-flex-order: 6;
        order: 6
    }
    .order-lg-7 {
        -ms-flex-order: 7;
        order: 7
    }
    .order-lg-8 {
        -ms-flex-order: 8;
        order: 8
    }
    .order-lg-9 {
        -ms-flex-order: 9;
        order: 9
    }
    .order-lg-10 {
        -ms-flex-order: 10;
        order: 10
    }
    .order-lg-11 {
        -ms-flex-order: 11;
        order: 11
    }
    .order-lg-12 {
        -ms-flex-order: 12;
        order: 12
    }
    .offset-lg-0 {
        margin-left: 0
    }
    .offset-lg-1 {
        margin-left: 8.33333%
    }
    .offset-lg-2 {
        margin-left: 16.66667%
    }
    .offset-lg-3 {
        margin-left: 25%
    }
    .offset-lg-4 {
        margin-left: 33.33333%
    }
    .offset-lg-5 {
        margin-left: 41.66667%
    }
    .offset-lg-6 {
        margin-left: 50%
    }
    .offset-lg-7 {
        margin-left: 58.33333%
    }
    .offset-lg-8 {
        margin-left: 66.66667%
    }
    .offset-lg-9 {
        margin-left: 75%
    }
    .offset-lg-10 {
        margin-left: 83.33333%
    }
    .offset-lg-11 {
        margin-left: 91.66667%
    }
}
@media (min-width:1200px) {
    .col-xl {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%
    }
    .col-xl-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none
    }
    .col-xl-1 {
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%
    }
    .col-xl-2 {
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }
    .col-xl-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }
    .col-xl-4 {
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%
    }
    .col-xl-5 {
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }
    .col-xl-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }
    .col-xl-7 {
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%
    }
    .col-xl-8 {
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%
    }
    .col-xl-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }
    .col-xl-10 {
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%
    }
    .col-xl-11 {
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%
    }
    .col-xl-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }
    .order-xl-first {
        -ms-flex-order: -1;
        order: -1
    }
    .order-xl-last {
        -ms-flex-order: 13;
        order: 13
    }
    .order-xl-0 {
        -ms-flex-order: 0;
        order: 0
    }
    .order-xl-1 {
        -ms-flex-order: 1;
        order: 1
    }
    .order-xl-2 {
        -ms-flex-order: 2;
        order: 2
    }
    .order-xl-3 {
        -ms-flex-order: 3;
        order: 3
    }
    .order-xl-4 {
        -ms-flex-order: 4;
        order: 4
    }
    .order-xl-5 {
        -ms-flex-order: 5;
        order: 5
    }
    .order-xl-6 {
        -ms-flex-order: 6;
        order: 6
    }
    .order-xl-7 {
        -ms-flex-order: 7;
        order: 7
    }
    .order-xl-8 {
        -ms-flex-order: 8;
        order: 8
    }
    .order-xl-9 {
        -ms-flex-order: 9;
        order: 9
    }
    .order-xl-10 {
        -ms-flex-order: 10;
        order: 10
    }
    .order-xl-11 {
        -ms-flex-order: 11;
        order: 11
    }
    .order-xl-12 {
        -ms-flex-order: 12;
        order: 12
    }
    .offset-xl-0 {
        margin-left: 0
    }
    .offset-xl-1 {
        margin-left: 8.33333%
    }
    .offset-xl-2 {
        margin-left: 16.66667%
    }
    .offset-xl-3 {
        margin-left: 25%
    }
    .offset-xl-4 {
        margin-left: 33.33333%
    }
    .offset-xl-5 {
        margin-left: 41.66667%
    }
    .offset-xl-6 {
        margin-left: 50%
    }
    .offset-xl-7 {
        margin-left: 58.33333%
    }
    .offset-xl-8 {
        margin-left: 66.66667%
    }
    .offset-xl-9 {
        margin-left: 75%
    }
    .offset-xl-10 {
        margin-left: 83.33333%
    }
    .offset-xl-11 {
        margin-left: 91.66667%
    }
}
.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1.43rem;
    background-color: transparent
}
.table td,
.table th {
    padding: 0.5rem 0.85rem;
    vertical-align: top;
    border-top: 1px solid #e9ecef
}
.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #e9ecef
}
.table tbody+tbody {
    border-top: 2px solid #e9ecef
}
.table .table {
    background-color: #f2f5f7
}
.table-sm td,
.table-sm th {
    padding: 0.3rem
}
.table-bordered,
.table-bordered td,
.table-bordered th {
    border: 1px solid #e9ecef
}
.table-bordered thead td,
.table-bordered thead th {
    border-bottom-width: 2px
}
.table-borderless tbody+tbody,
.table-borderless td,
.table-borderless th,
.table-borderless thead th {
    border: 0
}
.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .05)
}
.table-hover tbody tr:hover {
    background-color: rgba(0, 0, 0, .075)
}
.table-primary,
.table-primary > td,
.table-primary > th {
    background-color: #c8e0f5
}
.table-hover .table-primary:hover,
.table-hover .table-primary:hover > td,
.table-hover .table-primary:hover > th {
    background-color: #b2d4f1
}
.table-secondary,
.table-secondary > td,
.table-secondary > th {
    background-color: #e8eaed
}
.table-hover .table-secondary:hover,
.table-hover .table-secondary:hover > td,
.table-hover .table-secondary:hover > th {
    background-color: #dadde2
}
.table-success,
.table-success > td,
.table-success > th {
    background-color: #d1f1e0
}
.table-hover .table-success:hover,
.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
    background-color: #bdebd3
}
.table-info,
.table-info > td,
.table-info > th {
    background-color: #cbedf5
}
.table-hover .table-info:hover,
.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
    background-color: #b6e6f1
}
.table-warning,
.table-warning > td,
.table-warning > th {
    background-color: #fde9d4
}
.table-hover .table-warning:hover,
.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
    background-color: #fcddbc
}
.table-danger,
.table-danger > td,
.table-danger > th {
    background-color: #fad3cf
}
.table-hover .table-danger:hover,
.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
    background-color: #f8beb8
}
.table-light,
.table-light > td,
.table-light > th {
    background-color: #fcfdfd
}
.table-hover .table-light:hover,
.table-hover .table-light:hover > td,
.table-hover .table-light:hover > th {
    background-color: #edf3f3
}
.table-dark,
.table-dark > td,
.table-dark > th {
    background-color: #c6c8ca
}
.table-hover .table-dark:hover,
.table-hover .table-dark:hover > td,
.table-hover .table-dark:hover > th {
    background-color: #b9bbbe
}
.table-active,
.table-active > td,
.table-active > th,
.table-hover .table-active:hover,
.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
    background-color: rgba(0, 0, 0, .075)
}
.table .thead-dark th {
    color: #f2f5f7;
    background-color: #212529;
    border-color: #32383e
}
.table .thead-light th {
    color: #495057;
    background-color: #e9ecef;
    border-color: #e9ecef
}
.table-dark {
    color: #f2f5f7;
    background-color: #212529
}
.table-dark td,
.table-dark th,
.table-dark thead th {
    border-color: #32383e
}
.table-dark.table-bordered {
    border: 0
}
.table-dark.table-striped tbody tr:nth-of-type(odd) {
    background-color: hsla(0, 0%, 100%, 0.05)
}
.table-dark.table-hover tbody tr:hover {
    background-color: hsla(0, 0%, 100%, 0.075)
}
@media (max-width:575.98px) {
    .table-responsive-sm {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }
    .table-responsive-sm > .table-bordered {
        border: 0
    }
}
@media (max-width:767.98px) {
    .table-responsive-md {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }
    .table-responsive-md > .table-bordered {
        border: 0
    }
}
@media (max-width:991.98px) {
    .table-responsive-lg {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }
    .table-responsive-lg > .table-bordered {
        border: 0
    }
}
@media (max-width:1199.98px) {
    .table-responsive-xl {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }
    .table-responsive-xl > .table-bordered {
        border: 0
    }
}
.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
}
.table-responsive > .table-bordered {
    border: 0
}
table.table tfoot td,
table.table tfoot th,
table.table thead td,
table.table thead th {
    white-space: nowrap
}
table.table td.min-width,
table.table th.min-width {
    width: 0
}
table.table td.max-width,
table.table th.max-width {
    width: 100%
}
.table-rounded {
    border: 1px solid #e9ecef;
    border-radius: 3px
}
.table-rounded > table,
.table-rounded > table td,
.table-rounded > table th {
    border-color: transparent
}
.table-rounded > table.table-bordered tbody tr:not(:last-child) td,
.table-rounded > table.table-bordered thead tr td,
.table-rounded > table.table-bordered thead tr th {
    border-bottom-color: #e9ecef
}
.table-rounded > table.table-bordered tr td:not(:last-child),
.table-rounded > table.table-bordered tr th:not(:last-child) {
    border-right-color: #e9ecef
}
.table-bordered thead td,
.table-bordered thead th {
    border-bottom-width: 1px
}
.table-lg td,
.table-lg th {
    padding: 0.5rem 1rem
}
.table-responsive > table {
    margin-bottom: 0
}
.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out
}
@media screen and (prefers-reduced-motion:reduce) {
    .form-control {
        -webkit-transition: none;
        -o-transition: none;
        transition: none
    }
}
.form-control::-ms-expand {
    background-color: transparent;
    border: 0
}
.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #a7cdee;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .25);
    box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .25)
}
.form-control::-webkit-input-placeholder {
    color: #868e96;
    opacity: 1
}
.form-control:-ms-input-placeholder,
.form-control::-ms-input-placeholder {
    color: #868e96;
    opacity: 1
}
.form-control::placeholder {
    color: #868e96;
    opacity: 1
}
.form-control:disabled,
.form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1
}
select.form-control:not([size]):not([multiple]) {
    height: calc(2.25rem + 2px)
}
select.form-control:focus::-ms-value {
    color: #495057;
    background-color: #fff
}
.form-control-file,
.form-control-range {
    display: block;
    width: 100%
}
.col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5
}
.col-form-label-lg {
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.25rem;
    line-height: 1.5
}
.col-form-label-sm {
    padding-top: calc(0.35rem + 1px);
    padding-bottom: calc(0.35rem + 1px);
    font-size: 0.9rem;
    line-height: 1.3
}
.form-control-plaintext {
    display: block;
    width: 100%;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    margin-bottom: 0;
    line-height: 1.5;
    color: #686e71;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0
}
.form-control-plaintext.form-control-lg,
.form-control-plaintext.form-control-sm,
.input-group-lg > .form-control-plaintext.form-control,
.input-group-lg > .input-group-append > .form-control-plaintext.btn,
.input-group-lg > .input-group-append > .form-control-plaintext.input-group-text,
.input-group-lg > .input-group-prepend > .form-control-plaintext.btn,
.input-group-lg > .input-group-prepend > .form-control-plaintext.input-group-text,
.input-group-sm > .form-control-plaintext.form-control,
.input-group-sm > .input-group-append > .form-control-plaintext.btn,
.input-group-sm > .input-group-append > .form-control-plaintext.input-group-text,
.input-group-sm > .input-group-prepend > .form-control-plaintext.btn,
.input-group-sm > .input-group-prepend > .form-control-plaintext.input-group-text {
    padding-right: 0;
    padding-left: 0
}
.form-control-sm,
.input-group-sm > .form-control,
.input-group-sm > .input-group-append > .btn,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-prepend > .input-group-text {
    padding: 0.35rem 0.7rem;
    font-size: 0.9rem;
    line-height: 1.3;
    border-radius: 0.2rem
}
.input-group-sm > .input-group-append > select.btn:not([size]):not([multiple]),
.input-group-sm > .input-group-append > select.input-group-text:not([size]):not([multiple]),
.input-group-sm > .input-group-prepend > select.btn:not([size]):not([multiple]),
.input-group-sm > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),
.input-group-sm > select.form-control:not([size]):not([multiple]),
select.form-control-sm:not([size]):not([multiple]) {
    height: calc(1.87rem + 2px)
}
.form-control-lg,
.input-group-lg > .form-control,
.input-group-lg > .input-group-append > .btn,
.input-group-lg > .input-group-append > .input-group-text,
.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-prepend > .input-group-text {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem
}
.input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]),
.input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]),
.input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]),
.input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),
.input-group-lg > select.form-control:not([size]):not([multiple]),
select.form-control-lg:not([size]):not([multiple]) {
    height: calc(2.875rem + 2px)
}
.form-group {
    margin-bottom: 1rem
}
.form-text {
    display: block;
    margin-top: 0.25rem
}
.form-row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px
}
.form-row > .col,
.form-row > [class*=col-] {
    padding-right: 5px;
    padding-left: 5px
}
.form-check {
    position: relative;
    display: block;
    padding-left: 1.5rem
}
.form-check-input {
    position: absolute;
    margin-top: 0.34rem;
    margin-left: -1.5rem
}
.form-check-input:disabled~.form-check-label {
    color: #868e96
}
.form-check-label {
    margin-bottom: 0
}
.form-check-inline {
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 0;
    margin-right: 0.75rem
}
.form-check-inline .form-check-input {
    position: static;
    margin-top: 0;
    margin-right: 0.3125rem;
    margin-left: 0
}
.valid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #59cd90
}
.valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    line-height: 1;
    color: #fff;
    background-color: rgba(89, 205, 144, .8);
    border-radius: 0.2rem
}
.custom-select.is-valid,
.form-control.is-valid,
.was-validated .custom-select:valid,
.was-validated .form-control:valid {
    border-color: #59cd90
}
.custom-select.is-valid:focus,
.form-control.is-valid:focus,
.was-validated .custom-select:valid:focus,
.was-validated .form-control:valid:focus {
    border-color: #59cd90;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .25);
    box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .25)
}
.custom-select.is-valid~.valid-feedback,
.custom-select.is-valid~.valid-tooltip,
.form-control-file.is-valid~.valid-feedback,
.form-control-file.is-valid~.valid-tooltip,
.form-control.is-valid~.valid-feedback,
.form-control.is-valid~.valid-tooltip,
.was-validated .custom-select:valid~.valid-feedback,
.was-validated .custom-select:valid~.valid-tooltip,
.was-validated .form-control-file:valid~.valid-feedback,
.was-validated .form-control-file:valid~.valid-tooltip,
.was-validated .form-control:valid~.valid-feedback,
.was-validated .form-control:valid~.valid-tooltip {
    display: block
}
.form-check-input.is-valid~.form-check-label,
.was-validated .form-check-input:valid~.form-check-label {
    color: #59cd90
}
.form-check-input.is-valid~.valid-feedback,
.form-check-input.is-valid~.valid-tooltip,
.was-validated .form-check-input:valid~.valid-feedback,
.was-validated .form-check-input:valid~.valid-tooltip {
    display: block
}
.custom-control-input.is-valid~.custom-control-label,
.was-validated .custom-control-input:valid~.custom-control-label {
    color: #59cd90
}
.custom-control-input.is-valid~.custom-control-label:before,
.was-validated .custom-control-input:valid~.custom-control-label:before {
    background-color: #bbebd2
}
.custom-control-input.is-valid~.valid-feedback,
.custom-control-input.is-valid~.valid-tooltip,
.was-validated .custom-control-input:valid~.valid-feedback,
.was-validated .custom-control-input:valid~.valid-tooltip {
    display: block
}
.custom-control-input.is-valid:checked~.custom-control-label:before,
.was-validated .custom-control-input:valid:checked~.custom-control-label:before {
    background-color: #80d9aa
}
.custom-control-input.is-valid:focus~.custom-control-label:before,
.was-validated .custom-control-input:valid:focus~.custom-control-label:before {
    -webkit-box-shadow: 0 0 0 1px #f2f5f7, 0 0 0 0.2rem rgba(89, 205, 144, .25);
    box-shadow: 0 0 0 1px #f2f5f7, 0 0 0 0.2rem rgba(89, 205, 144, .25)
}
.custom-file-input.is-valid~.custom-file-label,
.was-validated .custom-file-input:valid~.custom-file-label {
    border-color: #59cd90
}
.custom-file-input.is-valid~.custom-file-label:before,
.was-validated .custom-file-input:valid~.custom-file-label:before {
    border-color: inherit
}
.custom-file-input.is-valid~.valid-feedback,
.custom-file-input.is-valid~.valid-tooltip,
.was-validated .custom-file-input:valid~.valid-feedback,
.was-validated .custom-file-input:valid~.valid-tooltip {
    display: block
}
.custom-file-input.is-valid:focus~.custom-file-label,
.was-validated .custom-file-input:valid:focus~.custom-file-label {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .25);
    box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .25)
}
.invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #ee6352
}
.invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    line-height: 1;
    color: #fff;
    background-color: rgba(238, 99, 82, .8);
    border-radius: 0.2rem
}
.custom-select.is-invalid,
.form-control.is-invalid,
.was-validated .custom-select:invalid,
.was-validated .form-control:invalid {
    border-color: #ee6352
}
.custom-select.is-invalid:focus,
.form-control.is-invalid:focus,
.was-validated .custom-select:invalid:focus,
.was-validated .form-control:invalid:focus {
    border-color: #ee6352;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .25);
    box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .25)
}
.custom-select.is-invalid~.invalid-feedback,
.custom-select.is-invalid~.invalid-tooltip,
.form-control-file.is-invalid~.invalid-feedback,
.form-control-file.is-invalid~.invalid-tooltip,
.form-control.is-invalid~.invalid-feedback,
.form-control.is-invalid~.invalid-tooltip,
.was-validated .custom-select:invalid~.invalid-feedback,
.was-validated .custom-select:invalid~.invalid-tooltip,
.was-validated .form-control-file:invalid~.invalid-feedback,
.was-validated .form-control-file:invalid~.invalid-tooltip,
.was-validated .form-control:invalid~.invalid-feedback,
.was-validated .form-control:invalid~.invalid-tooltip {
    display: block
}
.form-check-input.is-invalid~.form-check-label,
.was-validated .form-check-input:invalid~.form-check-label {
    color: #ee6352
}
.form-check-input.is-invalid~.invalid-feedback,
.form-check-input.is-invalid~.invalid-tooltip,
.was-validated .form-check-input:invalid~.invalid-feedback,
.was-validated .form-check-input:invalid~.invalid-tooltip {
    display: block
}
.custom-control-input.is-invalid~.custom-control-label,
.was-validated .custom-control-input:invalid~.custom-control-label {
    color: #ee6352
}
.custom-control-input.is-invalid~.custom-control-label:before,
.was-validated .custom-control-input:invalid~.custom-control-label:before {
    background-color: #f9ccc6
}
.custom-control-input.is-invalid~.invalid-feedback,
.custom-control-input.is-invalid~.invalid-tooltip,
.was-validated .custom-control-input:invalid~.invalid-feedback,
.was-validated .custom-control-input:invalid~.invalid-tooltip {
    display: block
}
.custom-control-input.is-invalid:checked~.custom-control-label:before,
.was-validated .custom-control-input:invalid:checked~.custom-control-label:before {
    background-color: #f38d80
}
.custom-control-input.is-invalid:focus~.custom-control-label:before,
.was-validated .custom-control-input:invalid:focus~.custom-control-label:before {
    -webkit-box-shadow: 0 0 0 1px #f2f5f7, 0 0 0 0.2rem rgba(238, 99, 82, .25);
    box-shadow: 0 0 0 1px #f2f5f7, 0 0 0 0.2rem rgba(238, 99, 82, .25)
}
.custom-file-input.is-invalid~.custom-file-label,
.was-validated .custom-file-input:invalid~.custom-file-label {
    border-color: #ee6352
}
.custom-file-input.is-invalid~.custom-file-label:before,
.was-validated .custom-file-input:invalid~.custom-file-label:before {
    border-color: inherit
}
.custom-file-input.is-invalid~.invalid-feedback,
.custom-file-input.is-invalid~.invalid-tooltip,
.was-validated .custom-file-input:invalid~.invalid-feedback,
.was-validated .custom-file-input:invalid~.invalid-tooltip {
    display: block
}
.custom-file-input.is-invalid:focus~.custom-file-label,
.was-validated .custom-file-input:invalid:focus~.custom-file-label {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .25);
    box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .25)
}
.form-inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center
}
.form-inline .form-check {
    width: 100%
}
@media (min-width:576px) {
    .form-inline label {
        -ms-flex-align: center;
        -ms-flex-pack: center;
        justify-content: center
    }
    .form-inline .form-group,
    .form-inline label {
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        margin-bottom: 0
    }
    .form-inline .form-group {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -ms-flex-align: center
    }
    .form-inline .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle
    }
    .form-inline .form-control-plaintext {
        display: inline-block
    }
    .form-inline .custom-select,
    .form-inline .input-group {
        width: auto
    }
    .form-inline .form-check {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: auto;
        padding-left: 0
    }
    .form-inline .form-check-input {
        position: relative;
        margin-top: 0;
        margin-right: 0.25rem;
        margin-left: 0
    }
    .form-inline .custom-control {
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center
    }
    .form-inline .custom-control-label {
        margin-bottom: 0
    }
}
.form-check-input {
    width: 1rem;
    height: 1rem;
    margin-top: 0.25rem
}
.form-group .custom-checkbox,
.form-group .custom-radio,
.form-group .form-check {
    padding-top: 1px;
    padding-bottom: 1px
}
.input-with-ico {
    position: relative
}
.input-with-ico .input-ico {
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 10px 10px 10px 15px;
    z-index: 5;
    color: #868e96;
    opacity: .9
}
.input-with-ico .form-control {
    padding-left: 35px
}
.form-control-rounded {
    border-radius: 1.125rem
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out
}
@media screen and (prefers-reduced-motion:reduce) {
    .btn {
        -webkit-transition: none;
        -o-transition: none;
        transition: none
    }
}
.btn:focus,
.btn:hover {
    text-decoration: none
}
.btn.focus,
.btn:focus {
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .25);
    box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .25)
}
.btn.disabled,
.btn:disabled {
    opacity: .65
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer
}
.btn:not(:disabled):not(.disabled).active,
.btn:not(:disabled):not(.disabled):active {
    background-image: none
}
a.btn.disabled,
fieldset:disabled a.btn {
    pointer-events: none
}
.btn-primary {
    color: #fff;
    background-color: #3c91da;
    border-color: #3c91da
}
.btn-primary:hover {
    color: #fff;
    background-color: #267eca;
    border-color: #2477bf
}
.btn-primary.focus,
.btn-primary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .5);
    box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .5)
}
.btn-primary.disabled,
.btn-primary:disabled {
    color: #fff;
    background-color: #3c91da;
    border-color: #3c91da
}
.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #2477bf;
    border-color: #2271b4
}
.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .5);
    box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .5)
}
.btn-secondary {
    color: #fff;
    background-color: #adb5bd;
    border-color: #adb5bd
}
.btn-secondary:hover {
    color: #fff;
    background-color: #98a2ac;
    border-color: #919ca6
}
.btn-secondary.focus,
.btn-secondary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, .5);
    box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, .5)
}
.btn-secondary.disabled,
.btn-secondary:disabled {
    color: #fff;
    background-color: #adb5bd;
    border-color: #adb5bd
}
.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #919ca6;
    border-color: #8a95a1
}
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, .5);
    box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, .5)
}
.btn-success {
    color: #fff;
    background-color: #59cd90;
    border-color: #59cd90
}
.btn-success:hover {
    color: #fff;
    background-color: #3cc47c;
    border-color: #38bb76
}
.btn-success.focus,
.btn-success:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .5);
    box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .5)
}
.btn-success.disabled,
.btn-success:disabled {
    color: #fff;
    background-color: #59cd90;
    border-color: #59cd90
}
.btn-success:not(:disabled):not(.disabled).active,
.btn-success:not(:disabled):not(.disabled):active,
.show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #38bb76;
    border-color: #35b170
}
.btn-success:not(:disabled):not(.disabled).active:focus,
.btn-success:not(:disabled):not(.disabled):active:focus,
.show > .btn-success.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .5);
    box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .5)
}
.btn-info {
    color: #fff;
    background-color: #45bddc;
    border-color: #45bddc
}
.btn-info:hover {
    color: #fff;
    background-color: #28b0d3;
    border-color: #26a7c8
}
.btn-info.focus,
.btn-info:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(69, 189, 220, .5);
    box-shadow: 0 0 0 0.2rem rgba(69, 189, 220, .5)
}
.btn-info.disabled,
.btn-info:disabled {
    color: #fff;
    background-color: #45bddc;
    border-color: #45bddc
}
.btn-info:not(:disabled):not(.disabled).active,
.btn-info:not(:disabled):not(.disabled):active,
.show > .btn-info.dropdown-toggle {
    color: #fff;
    background-color: #26a7c8;
    border-color: #249ebe
}
.btn-info:not(:disabled):not(.disabled).active:focus,
.btn-info:not(:disabled):not(.disabled):active:focus,
.show > .btn-info.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(69, 189, 220, .5);
    box-shadow: 0 0 0 0.2rem rgba(69, 189, 220, .5)
}
.btn-warning {
    color: #fff;
    background-color: #f7b267;
    border-color: #f7b267
}
.btn-warning:hover {
    color: #fff;
    background-color: #f5a043;
    border-color: #f49937
}
.btn-warning.focus,
.btn-warning:focus {
    -webkit-box-shadow: 0 0 0 0.2rem hsla(31, 90%, 69%, 0.5);
    box-shadow: 0 0 0 0.2rem hsla(31, 90%, 69%, 0.5)
}
.btn-warning.disabled,
.btn-warning:disabled {
    color: #fff;
    background-color: #f7b267;
    border-color: #f7b267
}
.btn-warning:not(:disabled):not(.disabled).active,
.btn-warning:not(:disabled):not(.disabled):active,
.show > .btn-warning.dropdown-toggle {
    color: #fff;
    background-color: #f49937;
    border-color: #f4932a
}
.btn-warning:not(:disabled):not(.disabled).active:focus,
.btn-warning:not(:disabled):not(.disabled):active:focus,
.show > .btn-warning.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem hsla(31, 90%, 69%, 0.5);
    box-shadow: 0 0 0 0.2rem hsla(31, 90%, 69%, 0.5)
}
.btn-danger {
    color: #fff;
    background-color: #ee6352;
    border-color: #ee6352
}
.btn-danger:hover {
    color: #fff;
    background-color: #eb442f;
    border-color: #e93924
}
.btn-danger.focus,
.btn-danger:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .5);
    box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .5)
}
.btn-danger.disabled,
.btn-danger:disabled {
    color: #fff;
    background-color: #ee6352;
    border-color: #ee6352
}
.btn-danger:not(:disabled):not(.disabled).active,
.btn-danger:not(:disabled):not(.disabled):active,
.show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #e93924;
    border-color: #e82f18
}
.btn-danger:not(:disabled):not(.disabled).active:focus,
.btn-danger:not(:disabled):not(.disabled):active:focus,
.show > .btn-danger.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .5);
    box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .5)
}
.btn-light {
    color: #868e96;
    background-color: #f5f6f8;
    border-color: #f5f6f8
}
.btn-light:hover {
    color: #fff;
    background-color: #dfe3e8;
    border-color: #d7dde3
}
.btn-light.focus,
.btn-light:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(245, 246, 248, .5);
    box-shadow: 0 0 0 0.2rem rgba(245, 246, 248, .5)
}
.btn-light.disabled,
.btn-light:disabled {
    color: #868e96;
    background-color: #f5f6f8;
    border-color: #f5f6f8
}
.btn-light:not(:disabled):not(.disabled).active,
.btn-light:not(:disabled):not(.disabled):active,
.show > .btn-light.dropdown-toggle {
    color: #fff;
    background-color: #d7dde3;
    border-color: #d0d7dd
}
.btn-light:not(:disabled):not(.disabled).active:focus,
.btn-light:not(:disabled):not(.disabled):active:focus,
.show > .btn-light.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(245, 246, 248, .5);
    box-shadow: 0 0 0 0.2rem rgba(245, 246, 248, .5)
}
.btn-dark {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40
}
.btn-dark:hover {
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124
}
.btn-dark.focus,
.btn-dark:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, .5);
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, .5)
}
.btn-dark.disabled,
.btn-dark:disabled {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40
}
.btn-dark:not(:disabled):not(.disabled).active,
.btn-dark:not(:disabled):not(.disabled):active,
.show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #1d2124;
    border-color: #171a1d
}
.btn-dark:not(:disabled):not(.disabled).active:focus,
.btn-dark:not(:disabled):not(.disabled):active:focus,
.show > .btn-dark.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, .5);
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, .5)
}
.btn-outline-primary {
    color: #3c91da;
    background-color: transparent;
    background-image: none;
    border-color: #3c91da
}
.btn-outline-primary:hover {
    color: #fff;
    background-color: #3c91da;
    border-color: #3c91da
}
.btn-outline-primary.focus,
.btn-outline-primary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .5);
    box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .5)
}
.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
    color: #3c91da;
    background-color: transparent
}
.btn-outline-primary:not([disabled]):not(.disabled).active,
.btn-outline-primary:not([disabled]):not(.disabled):active,
.show > .btn-outline-primary.dropdown-toggle {
    color: #fff;
    background-color: #3c91da;
    border-color: #3c91da;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .5);
    box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .5)
}
.btn-outline-secondary {
    color: #adb5bd;
    background-color: transparent;
    background-image: none;
    border-color: #adb5bd
}
.btn-outline-secondary:hover {
    color: #fff;
    background-color: #adb5bd;
    border-color: #adb5bd
}
.btn-outline-secondary.focus,
.btn-outline-secondary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, .5);
    box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, .5)
}
.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
    color: #adb5bd;
    background-color: transparent
}
.btn-outline-secondary:not([disabled]):not(.disabled).active,
.btn-outline-secondary:not([disabled]):not(.disabled):active,
.show > .btn-outline-secondary.dropdown-toggle {
    color: #fff;
    background-color: #adb5bd;
    border-color: #adb5bd;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, .5);
    box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, .5)
}
.btn-outline-success {
    color: #59cd90;
    background-color: transparent;
    background-image: none;
    border-color: #59cd90
}
.btn-outline-success:hover {
    color: #fff;
    background-color: #59cd90;
    border-color: #59cd90
}
.btn-outline-success.focus,
.btn-outline-success:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .5);
    box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .5)
}
.btn-outline-success.disabled,
.btn-outline-success:disabled {
    color: #59cd90;
    background-color: transparent
}
.btn-outline-success:not([disabled]):not(.disabled).active,
.btn-outline-success:not([disabled]):not(.disabled):active,
.show > .btn-outline-success.dropdown-toggle {
    color: #fff;
    background-color: #59cd90;
    border-color: #59cd90;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .5);
    box-shadow: 0 0 0 0.2rem rgba(89, 205, 144, .5)
}
.btn-outline-info {
    color: #45bddc;
    background-color: transparent;
    background-image: none;
    border-color: #45bddc
}
.btn-outline-info:hover {
    color: #fff;
    background-color: #45bddc;
    border-color: #45bddc
}
.btn-outline-info.focus,
.btn-outline-info:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(69, 189, 220, .5);
    box-shadow: 0 0 0 0.2rem rgba(69, 189, 220, .5)
}
.btn-outline-info.disabled,
.btn-outline-info:disabled {
    color: #45bddc;
    background-color: transparent
}
.btn-outline-info:not([disabled]):not(.disabled).active,
.btn-outline-info:not([disabled]):not(.disabled):active,
.show > .btn-outline-info.dropdown-toggle {
    color: #fff;
    background-color: #45bddc;
    border-color: #45bddc;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(69, 189, 220, .5);
    box-shadow: 0 0 0 0.2rem rgba(69, 189, 220, .5)
}
.btn-outline-warning {
    color: #f7b267;
    background-color: transparent;
    background-image: none;
    border-color: #f7b267
}
.btn-outline-warning:hover {
    color: #fff;
    background-color: #f7b267;
    border-color: #f7b267
}
.btn-outline-warning.focus,
.btn-outline-warning:focus {
    -webkit-box-shadow: 0 0 0 0.2rem hsla(31, 90%, 69%, 0.5);
    box-shadow: 0 0 0 0.2rem hsla(31, 90%, 69%, 0.5)
}
.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
    color: #f7b267;
    background-color: transparent
}
.btn-outline-warning:not([disabled]):not(.disabled).active,
.btn-outline-warning:not([disabled]):not(.disabled):active,
.show > .btn-outline-warning.dropdown-toggle {
    color: #fff;
    background-color: #f7b267;
    border-color: #f7b267;
    -webkit-box-shadow: 0 0 0 0.2rem hsla(31, 90%, 69%, 0.5);
    box-shadow: 0 0 0 0.2rem hsla(31, 90%, 69%, 0.5)
}
.btn-outline-danger {
    color: #ee6352;
    background-color: transparent;
    background-image: none;
    border-color: #ee6352
}
.btn-outline-danger:hover {
    color: #fff;
    background-color: #ee6352;
    border-color: #ee6352
}
.btn-outline-danger.focus,
.btn-outline-danger:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .5);
    box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .5)
}
.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
    color: #ee6352;
    background-color: transparent
}
.btn-outline-danger:not([disabled]):not(.disabled).active,
.btn-outline-danger:not([disabled]):not(.disabled):active,
.show > .btn-outline-danger.dropdown-toggle {
    color: #fff;
    background-color: #ee6352;
    border-color: #ee6352;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .5);
    box-shadow: 0 0 0 0.2rem rgba(238, 99, 82, .5)
}
.btn-outline-light {
    color: #f5f6f8;
    background-color: transparent;
    background-image: none;
    border-color: #f5f6f8
}
.btn-outline-light:hover {
    color: #868e96;
    background-color: #f5f6f8;
    border-color: #f5f6f8
}
.btn-outline-light.focus,
.btn-outline-light:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(245, 246, 248, .5);
    box-shadow: 0 0 0 0.2rem rgba(245, 246, 248, .5)
}
.btn-outline-light.disabled,
.btn-outline-light:disabled {
    color: #f5f6f8;
    background-color: transparent
}
.btn-outline-light:not([disabled]):not(.disabled).active,
.btn-outline-light:not([disabled]):not(.disabled):active,
.show > .btn-outline-light.dropdown-toggle {
    color: #fff;
    background-color: #f5f6f8;
    border-color: #f5f6f8;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(245, 246, 248, .5);
    box-shadow: 0 0 0 0.2rem rgba(245, 246, 248, .5)
}
.btn-outline-dark {
    color: #343a40;
    background-color: transparent;
    background-image: none;
    border-color: #343a40
}
.btn-outline-dark:hover {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40
}
.btn-outline-dark.focus,
.btn-outline-dark:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, .5);
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, .5)
}
.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
    color: #343a40;
    background-color: transparent
}
.btn-outline-dark:not([disabled]):not(.disabled).active,
.btn-outline-dark:not([disabled]):not(.disabled):active,
.show > .btn-outline-dark.dropdown-toggle {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, .5);
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, .5)
}
.btn-link {
    font-weight: 400;
    color: #3c91da;
    background-color: transparent
}
.btn-link:hover {
    color: #206aa9;
    background-color: transparent
}
.btn-link.focus,
.btn-link:focus,
.btn-link:hover {
    text-decoration: underline;
    border-color: transparent
}
.btn-link.focus,
.btn-link:focus {
    -webkit-box-shadow: none;
    box-shadow: none
}
.btn-link.disabled,
.btn-link:disabled {
    color: #868e96;
    pointer-events: none
}
.btn-group-lg > .btn,
.btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem
}
.btn-group-sm > .btn,
.btn-sm {
    padding: 0.35rem 0.7rem;
    font-size: 0.9rem;
    line-height: 1.3;
    border-radius: 0.2rem
}
.btn-block {
    display: block;
    width: 100%
}
.btn-block+.btn-block {
    margin-top: 0.5rem
}
input[type=button].btn-block,
input[type=reset].btn-block,
input[type=submit].btn-block {
    width: 100%
}
.btn.active,
.btn:not(.disabled):not([disabled]).active {
    -webkit-box-shadow: none;
    box-shadow: none
}
.btn-outline-secondary {
    color: #868e96
}
.btn > i+span:not(:empty) {
    padding-left: 0.3575rem
}
.fade {
    -webkit-transition: opacity 0.15s linear;
    -o-transition: opacity 0.15s linear;
    transition: opacity 0.15s linear
}
@media screen and (prefers-reduced-motion:reduce) {
    .fade {
        -webkit-transition: none;
        -o-transition: none;
        transition: none
    }
}
.fade:not(.show) {
    opacity: 0
}
.collapse:not(.show) {
    display: none
}
.collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition: height 0.35s ease;
    -o-transition: height 0.35s ease;
    transition: height 0.35s ease
}
@media screen and (prefers-reduced-motion:reduce) {
    .collapsing {
        -webkit-transition: none;
        -o-transition: none;
        transition: none
    }
}
.dropdown,
.dropleft,
.dropright,
.dropup {
    position: relative
}
.dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent
}
.dropdown-toggle:empty:after {
    margin-left: 0
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #686e71;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 0.25rem
}
.dropdown-menu-right {
    right: 0;
    left: auto
}
.dropup .dropdown-menu {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: 0.125rem
}
.dropup .dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0;
    border-right: 0.3em solid transparent;
    border-bottom: 0.3em solid;
    border-left: 0.3em solid transparent
}
.dropup .dropdown-toggle:empty:after {
    margin-left: 0
}
.dropright .dropdown-menu {
    top: 0;
    right: auto;
    left: 100%;
    margin-top: 0;
    margin-left: 0.125rem
}
.dropright .dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0;
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid
}
.dropright .dropdown-toggle:empty:after {
    margin-left: 0
}
.dropright .dropdown-toggle:after {
    vertical-align: 0
}
.dropleft .dropdown-menu {
    top: 0;
    right: 100%;
    left: auto;
    margin-top: 0;
    margin-right: 0.125rem
}
.dropleft .dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    display: none
}
.dropleft .dropdown-toggle:before {
    display: inline-block;
    width: 0;
    height: 0;
    margin-right: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0.3em solid;
    border-bottom: 0.3em solid transparent
}
.dropleft .dropdown-toggle:empty:after {
    margin-left: 0
}
.dropleft .dropdown-toggle:before {
    vertical-align: 0
}
.dropdown-menu[x-placement^=bottom],
.dropdown-menu[x-placement^=left],
.dropdown-menu[x-placement^=right],
.dropdown-menu[x-placement^=top] {
    right: auto;
    bottom: auto
}
.dropdown-divider {
    height: 0;
    margin: 0.715rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef
}
.dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #495057;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0
}
.dropdown-item:focus,
.dropdown-item:hover {
    color: #3d4349;
    text-decoration: none;
    background-color: #f2f4f6
}
.dropdown-item.active,
.dropdown-item:active {
    color: #16181b;
    text-decoration: none;
    background-color: #dee2e6
}
.dropdown-item.disabled,
.dropdown-item:disabled {
    color: #adb5bd;
    background-color: transparent
}
.dropdown-menu.show {
    display: block
}
.dropdown-header {
    display: block;
    padding: 0.5rem 1.5rem;
    margin-bottom: 0;
    font-size: 0.9rem;
    color: #868e96;
    white-space: nowrap
}
.dropdown-item-text {
    display: block;
    padding: 0.25rem 1.5rem;
    color: #495057
}
.show > a {
    outline: 0
}
.dropdown-header {
    font-weight: 400;
    font-size: 80%
}
.btn-group,
.btn-group-vertical {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle
}
.btn-group > .btn,
.btn-group-vertical > .btn {
    position: relative;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto
}
.btn-group > .btn.active,
.btn-group > .btn:active,
.btn-group > .btn:focus,
.btn-group > .btn:hover,
.btn-group-vertical > .btn.active,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:hover {
    z-index: 1
}
.btn-group .btn+.btn,
.btn-group .btn+.btn-group,
.btn-group .btn-group+.btn,
.btn-group .btn-group+.btn-group,
.btn-group-vertical .btn+.btn,
.btn-group-vertical .btn+.btn-group,
.btn-group-vertical .btn-group+.btn,
.btn-group-vertical .btn-group+.btn-group {
    margin-left: -1px
}
.btn-toolbar {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: start;
    justify-content: flex-start
}
.btn-toolbar .input-group {
    width: auto
}
.btn-group > .btn:first-child {
    margin-left: 0
}
.btn-group > .btn-group:not(:last-child) > .btn,
.btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}
.btn-group > .btn-group:not(:first-child) > .btn,
.btn-group > .btn:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}
.dropdown-toggle-split {
    padding-right: 0.5625rem;
    padding-left: 0.5625rem
}
.dropdown-toggle-split:after,
.dropright .dropdown-toggle-split:after,
.dropup .dropdown-toggle-split:after {
    margin-left: 0
}
.dropleft .dropdown-toggle-split:before {
    margin-right: 0
}
.btn-group-sm > .btn+.dropdown-toggle-split,
.btn-sm+.dropdown-toggle-split {
    padding-right: 0.525rem;
    padding-left: 0.525rem
}
.btn-group-lg > .btn+.dropdown-toggle-split,
.btn-lg+.dropdown-toggle-split {
    padding-right: 0.75rem;
    padding-left: 0.75rem
}
.btn-group-vertical {
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-pack: center;
    justify-content: center
}
.btn-group-vertical .btn,
.btn-group-vertical .btn-group {
    width: 100%
}
.btn-group-vertical > .btn+.btn,
.btn-group-vertical > .btn+.btn-group,
.btn-group-vertical > .btn-group+.btn,
.btn-group-vertical > .btn-group+.btn-group {
    margin-top: -1px;
    margin-left: 0
}
.btn-group-vertical > .btn-group:not(:last-child) > .btn,
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0
}
.btn-group-vertical > .btn-group:not(:first-child) > .btn,
.btn-group-vertical > .btn:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}
.btn-group-toggle > .btn,
.btn-group-toggle > .btn-group > .btn {
    margin-bottom: 0
}
.btn-group-toggle > .btn input[type=checkbox],
.btn-group-toggle > .btn input[type=radio],
.btn-group-toggle > .btn-group > .btn input[type=checkbox],
.btn-group-toggle > .btn-group > .btn input[type=radio] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none
}
.btn-group .btn-group:not(:first-child) > .btn:not([class*=btn-outline]),
.btn-group .btn:not(:first-child):not([class*=btn-outline]) {
    border-left-color: rgba(0, 0, 0, .05)
}
.btn-group .btn-group:not(:last-child) > .btn:not([class*=btn-outline]),
.btn-group .btn:not(:last-child):not([class*=btn-outline]) {
    border-right-color: rgba(0, 0, 0, .05)
}
.input-group {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%
}
.input-group > .custom-file,
.input-group > .custom-select,
.input-group > .form-control {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0
}
.input-group > .custom-file:focus,
.input-group > .custom-select:focus,
.input-group > .form-control:focus {
    z-index: 3
}
.input-group > .custom-file+.custom-file,
.input-group > .custom-file+.custom-select,
.input-group > .custom-file+.form-control,
.input-group > .custom-select+.custom-file,
.input-group > .custom-select+.custom-select,
.input-group > .custom-select+.form-control,
.input-group > .form-control+.custom-file,
.input-group > .form-control+.custom-select,
.input-group > .form-control+.form-control {
    margin-left: -1px
}
.input-group > .custom-select:not(:last-child),
.input-group > .form-control:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}
.input-group > .custom-select:not(:first-child),
.input-group > .form-control:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}
.input-group > .custom-file {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center
}
.input-group > .custom-file:not(:last-child) .custom-file-label,
.input-group > .custom-file:not(:last-child) .custom-file-label:after {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}
.input-group > .custom-file:not(:first-child) .custom-file-label {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}
.input-group-append,
.input-group-prepend {
    display: -ms-flexbox;
    display: flex
}
.input-group-append .btn,
.input-group-prepend .btn {
    position: relative;
    z-index: 2
}
.input-group-append .btn+.btn,
.input-group-append .btn+.input-group-text,
.input-group-append .input-group-text+.btn,
.input-group-append .input-group-text+.input-group-text,
.input-group-prepend .btn+.btn,
.input-group-prepend .btn+.input-group-text,
.input-group-prepend .input-group-text+.btn,
.input-group-prepend .input-group-text+.input-group-text {
    margin-left: -1px
}
.input-group-prepend {
    margin-right: -1px
}
.input-group-append {
    margin-left: -1px
}
.input-group-text {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0.25rem
}
.input-group-text input[type=checkbox],
.input-group-text input[type=radio] {
    margin-top: 0
}
.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group > .input-group-append:last-child > .input-group-text:not(:last-child),
.input-group > .input-group-append:not(:last-child) > .btn,
.input-group > .input-group-append:not(:last-child) > .input-group-text,
.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}
.input-group > .input-group-append > .btn,
.input-group > .input-group-append > .input-group-text,
.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child),
.input-group > .input-group-prepend:not(:first-child) > .btn,
.input-group > .input-group-prepend:not(:first-child) > .input-group-text {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}
.custom-control {
    position: relative;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem
}
.custom-control-inline {
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-right: 1rem
}
.custom-control-input {
    position: absolute;
    z-index: -1;
    opacity: 0
}
.custom-control-input:checked~.custom-control-label:before {
    color: #fff;
    background-color: #adb5bd
}
.custom-control-input:focus~.custom-control-label:before {
    -webkit-box-shadow: 0 0 0 2px rgba(173, 181, 189, .5);
    box-shadow: 0 0 0 2px rgba(173, 181, 189, .5)
}
.custom-control-input:active~.custom-control-label:before {
    color: #fff;
    background-color: #c9cfd4
}
.custom-control-input:disabled~.custom-control-label {
    color: #868e96
}
.custom-control-input:disabled~.custom-control-label:before {
    background-color: #e9ecef
}
.custom-control-label {
    position: relative;
    margin-bottom: 0
}
.custom-control-label:before {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #e9ecef
}
.custom-control-label:after,
.custom-control-label:before {
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: ""
}
.custom-control-label:after {
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 60% 60%
}
.custom-checkbox .custom-control-label:before {
    border-radius: 0.25rem
}
.custom-checkbox .custom-control-input:checked~.custom-control-label:before {
    background-color: #adb5bd
}
.custom-checkbox .custom-control-input:checked~.custom-control-label:after {
    background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E")
}
.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before {
    background-color: #3c91da
}
.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after {
    background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E")
}
.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before {
    background-color: rgba(60, 145, 218, .5)
}
.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before {
    background-color: rgba(60, 145, 218, .5)
}
.custom-radio .custom-control-label:before {
    border-radius: 50%
}
.custom-radio .custom-control-input:checked~.custom-control-label:before {
    background-color: #adb5bd
}
.custom-radio .custom-control-input:checked~.custom-control-label:after {
    background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E")
}
.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before {
    background-color: rgba(60, 145, 218, .5)
}
.custom-select {
    display: inline-block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    line-height: 1.5;
    color: #495057;
    vertical-align: middle;
    background: #fff url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.75rem center;
    background-size: 8px 10px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}
.custom-select:focus {
    border-color: #a7cdee;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .075), 0 0 5px rgba(167, 205, 238, .5);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .075), 0 0 5px rgba(167, 205, 238, .5)
}
.custom-select:focus::-ms-value {
    color: #495057;
    background-color: #fff
}
.custom-select[multiple],
.custom-select[size]:not([size="1"]) {
    height: auto;
    padding-right: 0.75rem;
    background-image: none
}
.custom-select:disabled {
    color: #868e96;
    background-color: #e9ecef
}
.custom-select::-ms-expand {
    opacity: 0
}
.custom-select-sm {
    height: calc(1.87rem + 2px);
    font-size: 75%
}
.custom-select-lg,
.custom-select-sm {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem
}
.custom-select-lg {
    height: calc(2.875rem + 2px);
    font-size: 125%
}
.custom-file {
    display: inline-block;
    width: 100%;
    margin-bottom: 0
}
.custom-file,
.custom-file-input {
    position: relative;
    height: calc(2.25rem + 2px)
}
.custom-file-input {
    z-index: 2;
    margin: 0;
    opacity: 0
}
.custom-file-input:focus~.custom-file-label {
    border-color: #a7cdee;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .25);
    box-shadow: 0 0 0 0.2rem rgba(60, 145, 218, .25)
}
.custom-file-input:focus~.custom-file-label:after {
    border-color: #a7cdee
}
.custom-file-input:lang(en)~.custom-file-label:after {
    content: "Browse"
}
.custom-file-label {
    left: 0;
    z-index: 1;
    height: calc(2.25rem + 2px);
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem
}
.custom-file-label,
.custom-file-label:after {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: #495057
}
.custom-file-label:after {
    bottom: 0;
    z-index: 3;
    display: block;
    height: 2.25rem;
    content: "Browse";
    background-color: #e9ecef;
    border-left: 1px solid #ced4da;
    border-radius: 0 0.25rem 0.25rem 0
}
.custom-range {
    width: 100%;
    padding-left: 0;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}
.custom-range:focus {
    outline: none
}
.custom-range::-moz-focus-outer {
    border: 0
}
.custom-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: #3c91da;
    border: 0;
    border-radius: 1rem;
    -webkit-appearance: none;
    appearance: none
}
.custom-range::-webkit-slider-thumb:focus {
    outline: none;
    -webkit-box-shadow: 0 0 0 1px #f2f5f7, 0 0 0 0.2rem rgba(60, 145, 218, .25);
    box-shadow: 0 0 0 1px #f2f5f7, 0 0 0 0.2rem rgba(60, 145, 218, .25)
}
.custom-range::-webkit-slider-thumb:active {
    background-color: #d2e6f6
}
.custom-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem
}
.custom-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #3c91da;
    border: 0;
    border-radius: 1rem;
    -moz-appearance: none;
    appearance: none
}
.custom-range::-moz-range-thumb:focus {
    outline: none;
    box-shadow: 0 0 0 1px #f2f5f7, 0 0 0 0.2rem rgba(60, 145, 218, .25)
}
.custom-range::-moz-range-thumb:active {
    background-color: #d2e6f6
}
.custom-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem
}
.custom-range::-ms-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #3c91da;
    border: 0;
    border-radius: 1rem;
    appearance: none
}
.custom-range::-ms-thumb:focus {
    outline: none;
    box-shadow: 0 0 0 1px #f2f5f7, 0 0 0 0.2rem rgba(60, 145, 218, .25)
}
.custom-range::-ms-thumb:active {
    background-color: #d2e6f6
}
.custom-range::-ms-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: transparent;
    border-color: transparent;
    border-width: 0.5rem
}
.custom-range::-ms-fill-lower,
.custom-range::-ms-fill-upper {
    background-color: #dee2e6;
    border-radius: 1rem
}
.custom-range::-ms-fill-upper {
    margin-right: 15px
}
.custom-file-input {
    width: 100%
}
.custom-control-nameless {
    min-height: 1rem;
    padding-left: 1rem;
    margin-right: 0
}
.custom-control-nameless .custom-control-label:after,
.custom-control-nameless .custom-control-label:before {
    left: -1rem
}
.custom-control .custom-control-label {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}
.nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}
.nav-link {
    display: block;
    padding: 0.5rem 1rem
}
.nav-link:focus,
.nav-link:hover {
    text-decoration: none
}
.nav-tabs {
    border-bottom: 1px solid #e9ecef
}
.nav-tabs .nav-item {
    margin-bottom: -1px
}
.nav-tabs .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem
}
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
    border-color: #e9ecef
}
.nav-tabs .nav-link.disabled {
    color: #ced4da;
    background-color: transparent;
    border-color: transparent
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #686e71;
    background-color: #fff;
    border-color: #e9ecef #e9ecef #fff
}
.nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0
}
.nav-pills .nav-link {
    border-radius: 0.25rem
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
    color: #fff;
    background-color: #868e96
}
.nav-fill .nav-item {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    text-align: center
}
.nav-justified .nav-item {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: center
}
.tab-content > .tab-pane {
    display: none
}
.tab-content > .active {
    display: block
}
.nav-link {
    color: #a5adb6
}
.active > .nav-link,
.nav-link.active,
.nav-link.show,
.nav-link:focus,
.nav-link:hover,
.show > .nav-link {
    color: #686e71
}
.nav-link.disabled {
    color: #ced4da
}
.navbar {
    position: relative;
    padding: 0.715rem 1.43rem
}
.navbar,
.navbar > .container,
.navbar > .container-fluid {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between
}
.navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1.43rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap
}
.navbar-brand:focus,
.navbar-brand:hover {
    text-decoration: none
}
.navbar-nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}
.navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0
}
.navbar-nav .dropdown-menu {
    position: static;
    float: none
}
.navbar-text {
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}
.navbar-collapse {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center
}
.navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem
}
.navbar-toggler:focus,
.navbar-toggler:hover {
    text-decoration: none
}
.navbar-toggler:not(:disabled):not(.disabled) {
    cursor: pointer
}
.navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat 50%;
    background-size: 100% 100%
}
@media (max-width:575.98px) {
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid {
        padding-right: 0;
        padding-left: 0
    }
}
@media (min-width:576px) {
    .navbar-expand-sm {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -ms-flex-pack: start;
        justify-content: flex-start
    }
    .navbar-expand-sm .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
        position: absolute
    }
    .navbar-expand-sm .navbar-nav .nav-link {
        padding-right: 0.5rem;
        padding-left: 0.5rem
    }
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }
    .navbar-expand-sm .navbar-collapse {
        display: -ms-flexbox !important;
        display: flex !important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
    .navbar-expand-sm .navbar-toggler {
        display: none
    }
}
@media (max-width:767.98px) {
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid {
        padding-right: 0;
        padding-left: 0
    }
}
@media (min-width:768px) {
    .navbar-expand-md {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -ms-flex-pack: start;
        justify-content: flex-start
    }
    .navbar-expand-md .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
        position: absolute
    }
    .navbar-expand-md .navbar-nav .nav-link {
        padding-right: 0.5rem;
        padding-left: 0.5rem
    }
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }
    .navbar-expand-md .navbar-collapse {
        display: -ms-flexbox !important;
        display: flex !important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
    .navbar-expand-md .navbar-toggler {
        display: none
    }
}
@media (max-width:991.98px) {
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid {
        padding-right: 0;
        padding-left: 0
    }
}
@media (min-width:992px) {
    .navbar-expand-lg {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -ms-flex-pack: start;
        justify-content: flex-start
    }
    .navbar-expand-lg .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute
    }
    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: 0.5rem;
        padding-left: 0.5rem
    }
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }
    .navbar-expand-lg .navbar-collapse {
        display: -ms-flexbox !important;
        display: flex !important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
    .navbar-expand-lg .navbar-toggler {
        display: none
    }
}
@media (max-width:1199.98px) {
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid {
        padding-right: 0;
        padding-left: 0
    }
}
@media (min-width:1200px) {
    .navbar-expand-xl {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -ms-flex-pack: start;
        justify-content: flex-start
    }
    .navbar-expand-xl .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
        position: absolute
    }
    .navbar-expand-xl .navbar-nav .nav-link {
        padding-right: 0.5rem;
        padding-left: 0.5rem
    }
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }
    .navbar-expand-xl .navbar-collapse {
        display: -ms-flexbox !important;
        display: flex !important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }
    .navbar-expand-xl .navbar-toggler {
        display: none
    }
}
.navbar-expand {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start
}
.navbar-expand > .container,
.navbar-expand > .container-fluid {
    padding-right: 0;
    padding-left: 0
}
.navbar-expand .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row
}
.navbar-expand .navbar-nav .dropdown-menu {
    position: absolute
}
.navbar-expand .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem
}
.navbar-expand > .container,
.navbar-expand > .container-fluid {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap
}
.navbar-expand .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto
}
.navbar-expand .navbar-toggler {
    display: none
}
.navbar-light .navbar-brand,
.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
    color: rgba(0, 0, 0, .9)
}
.navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, .5)
}
.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
    color: rgba(0, 0, 0, .7)
}
.navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, .3)
}
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show > .nav-link {
    color: rgba(0, 0, 0, .9)
}
.navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, .5);
    border-color: rgba(0, 0, 0, .1)
}
.navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8, %3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}
.navbar-light .navbar-text {
    color: rgba(0, 0, 0, .5)
}
.navbar-light .navbar-text a,
.navbar-light .navbar-text a:focus,
.navbar-light .navbar-text a:hover {
    color: rgba(0, 0, 0, .9)
}
.navbar-dark .navbar-brand,
.navbar-dark .navbar-brand:focus,
.navbar-dark .navbar-brand:hover {
    color: #fff
}
.navbar-dark .navbar-nav .nav-link {
    color: hsla(0, 0%, 100%, 0.5)
}
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover {
    color: hsla(0, 0%, 100%, 0.75)
}
.navbar-dark .navbar-nav .nav-link.disabled {
    color: hsla(0, 0%, 100%, 0.25)
}
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .show > .nav-link {
    color: #fff
}
.navbar-dark .navbar-toggler {
    color: hsla(0, 0%, 100%, 0.5);
    border-color: hsla(0, 0%, 100%, 0.1)
}
.navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8, %3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}
.navbar-dark .navbar-text {
    color: hsla(0, 0%, 100%, 0.5)
}
.navbar-dark .navbar-text a,
.navbar-dark .navbar-text a:focus,
.navbar-dark .navbar-text a:hover {
    color: #fff
}
.navbar-nav .dropdown-menu {
    position: absolute;
    float: inherit
}
.navbar-toggler-icon {
    width: 1em
}
.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e9ecef;
    border-radius: 3px
}
.card > hr {
    margin-right: 0;
    margin-left: 0
}
.card > .list-group:first-child .list-group-item:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px
}
.card > .list-group:last-child .list-group-item:last-child {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 20px
}
.card-title {
    margin-bottom: 0.715rem
}
.card-subtitle {
    margin-top: -0.3575rem
}
.card-subtitle,
.card-text:last-child {
    margin-bottom: 0
}
.card-link:hover {
    text-decoration: none
}
.card-link+.card-link {
    margin-left: 20px
}
.card-header {
    padding: 0.715rem 20px;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, .03);
    border-bottom: 1px solid #e9ecef
}
.card-header:first-child {
    border-radius: 2px 2px 0 0
}
.card-header+.list-group .list-group-item:first-child {
    border-top: 0
}
.card-footer {
    padding: 0.715rem 20px;
    background-color: rgba(0, 0, 0, .03);
    border-top: 1px solid #e9ecef
}
.card-footer:last-child {
    border-radius: 0 0 2px 2px
}
.card-header-tabs {
    margin-bottom: -0.715rem;
    border-bottom: 0
}
.card-header-pills,
.card-header-tabs {
    margin-right: -10px;
    margin-left: -10px
}
.card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem
}
.card-img {
    width: 100%;
    border-radius: 2px
}
.card-img-top {
    width: 100%;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px
}
.card-img-bottom {
    width: 100%;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px
}
.card-deck {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column
}
.card-deck .card {
    margin-bottom: 10px
}
@media (min-width:576px) {
    .card-deck {
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        margin-right: -10px;
        margin-left: -10px
    }
    .card-deck .card {
        display: -ms-flexbox;
        display: flex;
        -ms-flex: 1 0;
        flex: 1 0;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-right: 10px;
        margin-bottom: 0;
        margin-left: 10px
    }
}
.card-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column
}
.card-group > .card {
    margin-bottom: 10px
}
@media (min-width:576px) {
    .card-group {
        -ms-flex-flow: row wrap;
        flex-flow: row wrap
    }
    .card-group > .card {
        -ms-flex: 1 0;
        flex: 1 0;
        margin-bottom: 0
    }
    .card-group > .card+.card {
        margin-left: 0;
        border-left: 0
    }
    .card-group > .card:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }
    .card-group > .card:first-child .card-header,
    .card-group > .card:first-child .card-img-top {
        border-top-right-radius: 0
    }
    .card-group > .card:first-child .card-footer,
    .card-group > .card:first-child .card-img-bottom {
        border-bottom-right-radius: 0
    }
    .card-group > .card:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0
    }
    .card-group > .card:last-child .card-header,
    .card-group > .card:last-child .card-img-top {
        border-top-left-radius: 0
    }
    .card-group > .card:last-child .card-footer,
    .card-group > .card:last-child .card-img-bottom {
        border-bottom-left-radius: 0
    }
    .card-group > .card:only-child {
        border-radius: 3px
    }
    .card-group > .card:only-child .card-header,
    .card-group > .card:only-child .card-img-top {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px
    }
    .card-group > .card:only-child .card-footer,
    .card-group > .card:only-child .card-img-bottom {
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px
    }
    .card-group > .card:not(:first-child):not(:last-child):not(:only-child),
    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer,
    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,
    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,
    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top {
        border-radius: 0
    }
}
.card-columns .card {
    margin-bottom: 1.43rem
}
@media (min-width:576px) {
    .card-columns {
        -webkit-column-count: 3;
        column-count: 3;
        -webkit-column-gap: 1.43rem;
        column-gap: 1.43rem;
        orphans: 1;
        widows: 1
    }
    .card-columns .card {
        display: inline-block;
        width: 100%
    }
}
.accordion .card:not(:first-of-type):not(:last-of-type) {
    border-bottom: 0;
    border-radius: 0
}
.accordion .card:not(:first-of-type) .card-header:first-child {
    border-radius: 0
}
.accordion .card:first-of-type {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0
}
.accordion .card:last-of-type {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}
.card[class*=bg-] {
    border: 1px solid rgba(0, 0, 0, .05)
}
.card[class*=bg-] .card-header {
    border-bottom: 1px solid rgba(0, 0, 0, .05)
}
.card[class*=bg-] .card-bottom {
    border-top: 1px solid rgba(0, 0, 0, .05)
}
.breadcrumb {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.25rem
}
.breadcrumb-item+.breadcrumb-item {
    padding-left: 0.5rem
}
.breadcrumb-item+.breadcrumb-item:before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #868e96;
    content: "/"
}
.breadcrumb-item+.breadcrumb-item:hover:before {
    text-decoration: underline;
    text-decoration: none
}
.breadcrumb-item.active {
    color: #868e96
}
.pagination {
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem
}
.page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #868e96;
    background-color: #fff;
    border: 1px solid #dee2e6
}
.page-link:hover {
    z-index: 2;
    color: #868e96;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #e9ecef
}
.page-link:focus {
    z-index: 2;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(173, 181, 189, .5);
    box-shadow: 0 0 0 2px rgba(173, 181, 189, .5)
}
.page-link:not(:disabled):not(.disabled) {
    cursor: pointer
}
.page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem
}
.page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem
}
.page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #adb5bd;
    border-color: #adb5bd
}
.page-item.disabled .page-link {
    color: #ced4da;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #e9ecef
}
.pagination-lg .page-link {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    line-height: 1.5
}
.pagination-lg .page-item:first-child .page-link {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem
}
.pagination-lg .page-item:last-child .page-link {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem
}
.pagination-sm .page-link {
    padding: 0.25rem 0.55rem;
    font-size: 0.9rem;
    line-height: 1.3
}
.pagination-sm .page-item:first-child .page-link {
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem
}
.pagination-sm .page-item:last-child .page-link {
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem
}
.pagination .page-link {
    text-align: center;
    min-width: 33px
}
.pagination.pagination-sm .page-link {
    min-width: 25px
}
.pagination.pagination-separated .page-item:not(:first-child) {
    margin-left: 2px
}
.pagination.pagination-separated .page-item:not(:last-child) {
    margin-right: 2px
}
.badge,
.pagination.pagination-separated .page-link {
    border-radius: 0.25em
}
.badge {
    display: inline-block;
    padding: 0.38em 0.565em;
    font-size: 75%;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline
}
.badge:empty {
    display: none
}
.btn .badge {
    position: relative;
    top: -1px
}
.badge-pill {
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem
}
.badge-primary {
    color: #fff;
    background-color: #3c91da
}
.badge-primary[href]:focus,
.badge-primary[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #2477bf
}
.badge-secondary {
    color: #fff;
    background-color: #adb5bd
}
.badge-secondary[href]:focus,
.badge-secondary[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #919ca6
}
.badge-success {
    color: #fff;
    background-color: #59cd90
}
.badge-success[href]:focus,
.badge-success[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #38bb76
}
.badge-info {
    color: #fff;
    background-color: #45bddc
}
.badge-info[href]:focus,
.badge-info[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #26a7c8
}
.badge-warning {
    color: #fff;
    background-color: #f7b267
}
.badge-warning[href]:focus,
.badge-warning[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #f49937
}
.badge-danger {
    color: #fff;
    background-color: #ee6352
}
.badge-danger[href]:focus,
.badge-danger[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #e93924
}
.badge-light {
    color: #868e96;
    background-color: #f5f6f8
}
.badge-light[href]:focus,
.badge-light[href]:hover {
    color: #868e96;
    text-decoration: none;
    background-color: #d7dde3
}
.badge-dark {
    color: #fff;
    background-color: #343a40
}
.badge-dark[href]:focus,
.badge-dark[href]:hover {
    color: #fff;
    text-decoration: none;
    background-color: #1d2124
}
.jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    border-radius: 0.3rem
}
@media (min-width:576px) {
    .jumbotron {
        padding: 4rem 2rem
    }
}
.jumbotron {
    background-color: #fff;
    border: 1px solid #e9ecef;
    border-radius: 3px
}
@media (min-width:576px) {
    .jumbotron {
        padding: 3rem 2rem
    }
}
.jumbotron-fluid {
    padding-right: 0;
    padding-left: 0;
    border-radius: 0
}
.alert {
    position: relative;
    padding: 1.143rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem
}
.alert-heading {
    color: inherit
}
.alert-link {
    font-weight: 700
}
.alert-dismissible {
    padding-right: 3.786rem
}
.alert-dismissible .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.143rem;
    color: inherit
}
.alert-primary {
    border-color: #c8e0f5
}
.alert-primary hr {
    border-top-color: #b2d4f1
}
.alert-secondary {
    border-color: #e8eaed
}
.alert-secondary hr {
    border-top-color: #dadde2
}
.alert-success {
    border-color: #d1f1e0
}
.alert-success hr {
    border-top-color: #bdebd3
}
.alert-info {
    border-color: #cbedf5
}
.alert-info hr {
    border-top-color: #b6e6f1
}
.alert-warning {
    border-color: #fde9d4
}
.alert-warning hr {
    border-top-color: #fcddbc
}
.alert-danger {
    border-color: #fad3cf
}
.alert-danger hr {
    border-top-color: #f8beb8
}
.alert-light {
    border-color: #fcfdfd
}
.alert-light hr {
    border-top-color: #edf3f3
}
.alert-dark {
    border-color: #c6c8ca
}
.alert-dark hr {
    border-top-color: #b9bbbe
}
.alert-primary {
    color: #1f4b71;
    background-color: #d8e9f8;
    border-color: #b9d7f2
}
.alert-primary hr {
    border-top-color: #a3cbee
}
.alert-primary .alert-link {
    color: #143049
}
.alert-secondary {
    color: #5a5e62;
    background-color: #eff0f2;
    border-color: #e1e4e7
}
.alert-secondary hr {
    border-top-color: #d3d7dc
}
.alert-secondary .alert-link {
    color: #424547
}
.alert-success {
    color: #2e6b4b;
    background-color: #def5e9;
    border-color: #c3edd7
}
.alert-success hr {
    border-top-color: #afe7ca
}
.alert-success .alert-link {
    color: #1f4732
}
.alert-info {
    color: #246272;
    background-color: #daf2f8;
    border-color: #bce7f2
}
.alert-info hr {
    border-top-color: #a7dfee
}
.alert-info .alert-link {
    color: #18414b
}
.alert-warning {
    color: #805d36;
    background-color: #fdf0e1;
    border-color: #fce3c8
}
.alert-warning hr {
    border-top-color: #fbd7b0
}
.alert-warning .alert-link {
    color: #5c4327
}
.alert-danger {
    color: #7c332b;
    background-color: #fce0dc;
    border-color: #f9c7c1
}
.alert-danger hr {
    border-top-color: #f7b2aa
}
.alert-danger .alert-link {
    color: #56231e
}
.alert-light {
    color: #7f8081;
    background-color: #fdfdfe;
    border-color: #fbfcfc
}
.alert-light hr {
    border-top-color: #ecf1f1
}
.alert-light .alert-link {
    color: #666767
}
.alert-dark {
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #b6b8ba
}
.alert-dark hr {
    border-top-color: #a9abae
}
.alert-dark .alert-link {
    color: #040505
}
@-webkit-keyframes progress-bar-stripes {
    0% {
        background-position: 1rem 0
    }
    to {
        background-position: 0 0
    }
}
@keyframes progress-bar-stripes {
    0% {
        background-position: 1rem 0
    }
    to {
        background-position: 0 0
    }
}
.progress {
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 0.25rem
}
.progress,
.progress-bar {
    display: -ms-flexbox;
    display: flex
}
.progress-bar {
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #3c91da;
    -webkit-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease
}
@media screen and (prefers-reduced-motion:reduce) {
    .progress-bar {
        -webkit-transition: none;
        -o-transition: none;
        transition: none
    }
}
.progress-bar-striped {
    background-image: -webkit-linear-gradient(45deg, hsla(0, 0%, 100%, 0.15) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, 0.15) 0, hsla(0, 0%, 100%, 0.15) 75%, transparent 0, transparent);
    background-image: -o-linear-gradient(45deg, hsla(0, 0%, 100%, 0.15) 25%, transparent 25%, transparent 50%, hsla(0, 0%, 100%, 0.15) 50%, hsla(0, 0%, 100%, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, hsla(0, 0%, 100%, 0.15) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, 0.15) 0, hsla(0, 0%, 100%, 0.15) 75%, transparent 0, transparent);
    background-size: 1rem 1rem
}
.progress-bar-animated {
    -webkit-animation: progress-bar-stripes 1s linear infinite;
    animation: progress-bar-stripes 1s linear infinite
}
.media {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start
}
.media-body {
    -ms-flex: 1 1;
    flex: 1 1
}
.list-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0
}
.list-group-item-action {
    width: 100%;
    color: #495057;
    text-align: inherit
}
.list-group-item-action:focus,
.list-group-item-action:hover {
    color: #495057;
    text-decoration: none;
    background-color: #f8f9fa
}
.list-group-item-action:active {
    color: #686e71;
    background-color: #e9ecef
}
.list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125)
}
.list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem
}
.list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem
}
.list-group-item:focus,
.list-group-item:hover {
    z-index: 1;
    text-decoration: none
}
.list-group-item.disabled,
.list-group-item:disabled {
    color: #868e96;
    background-color: #fff
}
.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #3c91da;
    border-color: #3c91da
}
.list-group-flush .list-group-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0
}
.list-group-flush:first-child .list-group-item:first-child {
    border-top: 0
}
.list-group-flush:last-child .list-group-item:last-child {
    border-bottom: 0
}
.list-group-item-primary {
    color: #1f4b71;
    background-color: #c8e0f5
}
.list-group-item-primary.list-group-item-action:focus,
.list-group-item-primary.list-group-item-action:hover {
    color: #1f4b71;
    background-color: #b2d4f1
}
.list-group-item-primary.list-group-item-action.active {
    color: #fff;
    background-color: #1f4b71;
    border-color: #1f4b71
}
.list-group-item-secondary {
    color: #5a5e62;
    background-color: #e8eaed
}
.list-group-item-secondary.list-group-item-action:focus,
.list-group-item-secondary.list-group-item-action:hover {
    color: #5a5e62;
    background-color: #dadde2
}
.list-group-item-secondary.list-group-item-action.active {
    color: #fff;
    background-color: #5a5e62;
    border-color: #5a5e62
}
.list-group-item-success {
    color: #2e6b4b;
    background-color: #d1f1e0
}
.list-group-item-success.list-group-item-action:focus,
.list-group-item-success.list-group-item-action:hover {
    color: #2e6b4b;
    background-color: #bdebd3
}
.list-group-item-success.list-group-item-action.active {
    color: #fff;
    background-color: #2e6b4b;
    border-color: #2e6b4b
}
.list-group-item-info {
    color: #246272;
    background-color: #cbedf5
}
.list-group-item-info.list-group-item-action:focus,
.list-group-item-info.list-group-item-action:hover {
    color: #246272;
    background-color: #b6e6f1
}
.list-group-item-info.list-group-item-action.active {
    color: #fff;
    background-color: #246272;
    border-color: #246272
}
.list-group-item-warning {
    color: #805d36;
    background-color: #fde9d4
}
.list-group-item-warning.list-group-item-action:focus,
.list-group-item-warning.list-group-item-action:hover {
    color: #805d36;
    background-color: #fcddbc
}
.list-group-item-warning.list-group-item-action.active {
    color: #fff;
    background-color: #805d36;
    border-color: #805d36
}
.list-group-item-danger {
    color: #7c332b;
    background-color: #fad3cf
}
.list-group-item-danger.list-group-item-action:focus,
.list-group-item-danger.list-group-item-action:hover {
    color: #7c332b;
    background-color: #f8beb8
}
.list-group-item-danger.list-group-item-action.active {
    color: #fff;
    background-color: #7c332b;
    border-color: #7c332b
}
.list-group-item-light {
    color: #7f8081;
    background-color: #fcfdfd
}
.list-group-item-light.list-group-item-action:focus,
.list-group-item-light.list-group-item-action:hover {
    color: #7f8081;
    background-color: #edf3f3
}
.list-group-item-light.list-group-item-action.active {
    color: #fff;
    background-color: #7f8081;
    border-color: #7f8081
}
.list-group-item-dark {
    color: #1b1e21;
    background-color: #c6c8ca
}
.list-group-item-dark.list-group-item-action:focus,
.list-group-item-dark.list-group-item-action:hover {
    color: #1b1e21;
    background-color: #b9bbbe
}
.list-group-item-dark.list-group-item-action.active {
    color: #fff;
    background-color: #1b1e21;
    border-color: #1b1e21
}
.close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5
}
.close:focus,
.close:hover {
    color: #000;
    text-decoration: none;
    opacity: .75
}
.close:not(:disabled):not(.disabled) {
    cursor: pointer
}
button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none
}
.modal,
.modal-open {
    overflow: hidden
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    outline: 0
}
.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto
}
.modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none
}
.modal.fade .modal-dialog {
    transition: -webkit-transform 0.3s ease-out;
    -webkit-transition: -webkit-transform 0.3s ease-out;
    -o-transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    -webkit-transform: translateY(-25%);
    -ms-transform: translateY(-25%);
    transform: translateY(-25%)
}
@media screen and (prefers-reduced-motion:reduce) {
    .modal.fade .modal-dialog {
        -webkit-transition: none;
        -o-transition: none;
        transition: none
    }
}
.modal.show .modal-dialog {
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0)
}
.modal-dialog-centered {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    min-height: calc(100% - 1rem)
}
.modal-content {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 0.3rem;
    outline: 0
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000
}
.modal-backdrop.fade {
    opacity: 0
}
.modal-backdrop.show {
    opacity: .5
}
.modal-header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem
}
.modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5
}
.modal-body {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem
}
.modal-footer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #e9ecef
}
.modal-footer > :not(:first-child) {
    margin-left: 0.25rem
}
.modal-footer > :not(:last-child) {
    margin-right: 0.25rem
}
.modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll
}
@media (min-width:576px) {
    .modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto
    }
    .modal-dialog-centered {
        min-height: calc(100% - 3.5rem)
    }
    .modal-sm {
        max-width: 300px
    }
}
@media (min-width:992px) {
    .modal-lg {
        max-width: 800px
    }
}
.modal-header {
    padding: 15px 20px
}
.modal-header .close {
    padding: 15px 20px;
    margin: -15px -20px -15px auto
}
.modal-title {
    font-size: 1rem;
    font-weight: 400
}
.modal-body,
.modal-footer {
    padding: 15px 20px
}
.tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    margin: 5px;
    font-family: Open Sans, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.9rem;
    word-wrap: break-word;
    opacity: 0
}
.tooltip.show {
    opacity: 1
}
.tooltip .arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem
}
.tooltip .arrow:before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid
}
.bs-tooltip-auto[x-placement^=top],
.bs-tooltip-top {
    padding: 0.4rem 0
}
.bs-tooltip-auto[x-placement^=top] .arrow,
.bs-tooltip-top .arrow {
    bottom: 0
}
.bs-tooltip-auto[x-placement^=top] .arrow:before,
.bs-tooltip-top .arrow:before {
    top: 0;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: #868e96
}
.bs-tooltip-auto[x-placement^=right],
.bs-tooltip-right {
    padding: 0 0.4rem
}
.bs-tooltip-auto[x-placement^=right] .arrow,
.bs-tooltip-right .arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem
}
.bs-tooltip-auto[x-placement^=right] .arrow:before,
.bs-tooltip-right .arrow:before {
    right: 0;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    border-right-color: #868e96
}
.bs-tooltip-auto[x-placement^=bottom],
.bs-tooltip-bottom {
    padding: 0.4rem 0
}
.bs-tooltip-auto[x-placement^=bottom] .arrow,
.bs-tooltip-bottom .arrow {
    top: 0
}
.bs-tooltip-auto[x-placement^=bottom] .arrow:before,
.bs-tooltip-bottom .arrow:before {
    bottom: 0;
    border-width: 0 0.4rem 0.4rem;
    border-bottom-color: #868e96
}
.bs-tooltip-auto[x-placement^=left],
.bs-tooltip-left {
    padding: 0 0.4rem
}
.bs-tooltip-auto[x-placement^=left] .arrow,
.bs-tooltip-left .arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem
}
.bs-tooltip-auto[x-placement^=left] .arrow:before,
.bs-tooltip-left .arrow:before {
    left: 0;
    border-width: 0.4rem 0 0.4rem 0.4rem;
    border-left-color: #868e96
}
.tooltip-inner {
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    background-color: #868e96;
    border-radius: 0.25rem
}
.popover {
    top: 0;
    left: 0;
    z-index: 1060;
    max-width: 276px;
    font-family: Open Sans, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.9rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 0.3rem
}
.popover,
.popover .arrow {
    position: absolute;
    display: block
}
.popover .arrow {
    width: 1rem;
    height: 0.5rem;
    margin: 0 0.3rem
}
.popover .arrow:after,
.popover .arrow:before {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid
}
.bs-popover-auto[x-placement^=top],
.bs-popover-top {
    margin-bottom: 0.5rem
}
.bs-popover-auto[x-placement^=top] .arrow,
.bs-popover-top .arrow {
    bottom: calc((0.5rem + 1px) * -1)
}
.bs-popover-auto[x-placement^=top] .arrow:after,
.bs-popover-auto[x-placement^=top] .arrow:before,
.bs-popover-top .arrow:after,
.bs-popover-top .arrow:before {
    border-width: 0.5rem 0.5rem 0
}
.bs-popover-auto[x-placement^=top] .arrow:before,
.bs-popover-top .arrow:before {
    bottom: 0;
    border-top-color: rgba(0, 0, 0, .25)
}
.bs-popover-auto[x-placement^=top] .arrow:after,
.bs-popover-top .arrow:after {
    bottom: 1px;
    border-top-color: #fff
}
.bs-popover-auto[x-placement^=right],
.bs-popover-right {
    margin-left: 0.5rem
}
.bs-popover-auto[x-placement^=right] .arrow,
.bs-popover-right .arrow {
    left: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 1rem;
    margin: 0.3rem 0
}
.bs-popover-auto[x-placement^=right] .arrow:after,
.bs-popover-auto[x-placement^=right] .arrow:before,
.bs-popover-right .arrow:after,
.bs-popover-right .arrow:before {
    border-width: 0.5rem 0.5rem 0.5rem 0
}
.bs-popover-auto[x-placement^=right] .arrow:before,
.bs-popover-right .arrow:before {
    left: 0;
    border-right-color: rgba(0, 0, 0, .25)
}
.bs-popover-auto[x-placement^=right] .arrow:after,
.bs-popover-right .arrow:after {
    left: 1px;
    border-right-color: #fff
}
.bs-popover-auto[x-placement^=bottom],
.bs-popover-bottom {
    margin-top: 0.5rem
}
.bs-popover-auto[x-placement^=bottom] .arrow,
.bs-popover-bottom .arrow {
    top: calc((0.5rem + 1px) * -1)
}
.bs-popover-auto[x-placement^=bottom] .arrow:after,
.bs-popover-auto[x-placement^=bottom] .arrow:before,
.bs-popover-bottom .arrow:after,
.bs-popover-bottom .arrow:before {
    border-width: 0 0.5rem 0.5rem
}
.bs-popover-auto[x-placement^=bottom] .arrow:before,
.bs-popover-bottom .arrow:before {
    top: 0;
    border-bottom-color: rgba(0, 0, 0, .25)
}
.bs-popover-auto[x-placement^=bottom] .arrow:after,
.bs-popover-bottom .arrow:after {
    top: 1px;
    border-bottom-color: #fff
}
.bs-popover-auto[x-placement^=bottom] .popover-header:before,
.bs-popover-bottom .popover-header:before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -0.5rem;
    content: "";
    border-bottom: 1px solid #f7f7f7
}
.bs-popover-auto[x-placement^=left],
.bs-popover-left {
    margin-right: 0.5rem
}
.bs-popover-auto[x-placement^=left] .arrow,
.bs-popover-left .arrow {
    right: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 1rem;
    margin: 0.3rem 0
}
.bs-popover-auto[x-placement^=left] .arrow:after,
.bs-popover-auto[x-placement^=left] .arrow:before,
.bs-popover-left .arrow:after,
.bs-popover-left .arrow:before {
    border-width: 0.5rem 0 0.5rem 0.5rem
}
.bs-popover-auto[x-placement^=left] .arrow:before,
.bs-popover-left .arrow:before {
    right: 0;
    border-left-color: rgba(0, 0, 0, .25)
}
.bs-popover-auto[x-placement^=left] .arrow:after,
.bs-popover-left .arrow:after {
    right: 1px;
    border-left-color: #fff
}
.popover-header {
    padding: 0.5rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    color: inherit;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px)
}
.popover-header:empty {
    display: none
}
.popover-body {
    padding: 0.5rem 0.75rem;
    color: #686e71
}
.carousel {
    position: relative
}
.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden
}
.carousel-item {
    position: relative;
    display: none;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    transition: -webkit-transform 0.6s ease;
    -webkit-transition: -webkit-transform 0.6s ease;
    -o-transition: transform 0.6s ease;
    transition: transform 0.6s ease;
    transition: transform 0.6s ease, -webkit-transform 0.6s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px
}
@media screen and (prefers-reduced-motion:reduce) {
    .carousel-item {
        -webkit-transition: none;
        -o-transition: none;
        transition: none
    }
}
.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
    display: block
}
.carousel-item-next,
.carousel-item-prev {
    position: absolute;
    top: 0
}
.carousel-item-next.carousel-item-left,
.carousel-item-prev.carousel-item-right {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0)
}
@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)) {
    .carousel-item-next.carousel-item-left,
    .carousel-item-prev.carousel-item-right {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}
.active.carousel-item-right,
.carousel-item-next {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%)
}
@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)) {
    .active.carousel-item-right,
    .carousel-item-next {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
}
.active.carousel-item-left,
.carousel-item-prev {
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%)
}
@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)) {
    .active.carousel-item-left,
    .carousel-item-prev {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }
}
.carousel-fade .carousel-item {
    opacity: 0;
    -webkit-transition-duration: 0.6s;
    -o-transition-duration: 0.6s;
    transition-duration: 0.6s;
    -webkit-transition-property: opacity;
    -o-transition-property: opacity;
    transition-property: opacity
}
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right,
.carousel-fade .carousel-item.active {
    opacity: 1
}
.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
    opacity: 0
}
.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-prev,
.carousel-fade .carousel-item-next,
.carousel-fade .carousel-item-prev,
.carousel-fade .carousel-item.active {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0)
}
@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)) {
    .carousel-fade .active.carousel-item-left,
    .carousel-fade .active.carousel-item-prev,
    .carousel-fade .carousel-item-next,
    .carousel-fade .carousel-item-prev,
    .carousel-fade .carousel-item.active {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}
.carousel-control-next,
.carousel-control-prev {
    position: absolute;
    top: 0;
    bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 15%;
    color: #fff;
    text-align: center;
    opacity: .5
}
.carousel-control-next:focus,
.carousel-control-next:hover,
.carousel-control-prev:focus,
.carousel-control-prev:hover {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: .9
}
.carousel-control-prev {
    left: 0
}
.carousel-control-next {
    right: 0
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: transparent no-repeat 50%;
    background-size: 100% 100%
}
.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E")
}
.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E")
}
.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0;
    z-index: 15;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none
}
.carousel-indicators li {
    position: relative;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: hsla(0, 0%, 100%, 0.5)
}
.carousel-indicators li:before {
    top: -10px
}
.carousel-indicators li:after,
.carousel-indicators li:before {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: ""
}
.carousel-indicators li:after {
    bottom: -10px
}
.carousel-indicators .active {
    background-color: #fff
}
.carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center
}
.align-baseline {
    vertical-align: baseline !important
}
.align-top {
    vertical-align: top !important
}
.align-middle {
    vertical-align: middle !important
}
.align-bottom {
    vertical-align: bottom !important
}
.align-text-bottom {
    vertical-align: text-bottom !important
}
.align-text-top {
    vertical-align: text-top !important
}
.bg-primary {
    background-color: #3c91da !important
}
a.bg-primary:focus,
a.bg-primary:hover,
button.bg-primary:focus,
button.bg-primary:hover {
    background-color: #2477bf !important
}
.bg-secondary {
    background-color: #adb5bd !important
}
a.bg-secondary:focus,
a.bg-secondary:hover,
button.bg-secondary:focus,
button.bg-secondary:hover {
    background-color: #919ca6 !important
}
.bg-success {
    background-color: #59cd90 !important
}
a.bg-success:focus,
a.bg-success:hover,
button.bg-success:focus,
button.bg-success:hover {
    background-color: #38bb76 !important
}
.bg-info {
    background-color: #45bddc !important
}
a.bg-info:focus,
a.bg-info:hover,
button.bg-info:focus,
button.bg-info:hover {
    background-color: #26a7c8 !important
}
.bg-warning {
    background-color: #f7b267 !important
}
a.bg-warning:focus,
a.bg-warning:hover,
button.bg-warning:focus,
button.bg-warning:hover {
    background-color: #f49937 !important
}
.bg-danger {
    background-color: #ee6352 !important
}
a.bg-danger:focus,
a.bg-danger:hover,
button.bg-danger:focus,
button.bg-danger:hover {
    background-color: #e93924 !important
}
.bg-light {
    background-color: #f5f6f8 !important
}
a.bg-light:focus,
a.bg-light:hover,
button.bg-light:focus,
button.bg-light:hover {
    background-color: #d7dde3 !important
}
.bg-dark {
    background-color: #343a40 !important
}
a.bg-dark:focus,
a.bg-dark:hover,
button.bg-dark:focus,
button.bg-dark:hover {
    background-color: #1d2124 !important
}
.bg-white {
    background-color: #fff !important
}
.bg-transparent {
    background-color: transparent !important
}
.border {
    border: 1px solid #dee2e6 !important
}
.border-top {
    border-top: 1px solid #dee2e6 !important
}
.border-right {
    border-right: 1px solid #dee2e6 !important
}
.border-bottom {
    border-bottom: 1px solid #dee2e6 !important
}
.border-left {
    border-left: 1px solid #dee2e6 !important
}
.border-0 {
    border: 0 !important
}
.border-top-0 {
    border-top: 0 !important
}
.border-right-0 {
    border-right: 0 !important
}
.border-bottom-0 {
    border-bottom: 0 !important
}
.border-left-0 {
    border-left: 0 !important
}
.border-primary {
    border-color: #3c91da !important
}
.border-secondary {
    border-color: #adb5bd !important
}
.border-success {
    border-color: #59cd90 !important
}
.border-info {
    border-color: #45bddc !important
}
.border-warning {
    border-color: #f7b267 !important
}
.border-danger {
    border-color: #ee6352 !important
}
.border-light {
    border-color: #f5f6f8 !important
}
.border-dark {
    border-color: #343a40 !important
}
.border-white {
    border-color: #fff !important
}
.rounded {
    border-radius: 0.25rem !important
}
.rounded-top {
    border-top-left-radius: 0.25rem !important
}
.rounded-right,
.rounded-top {
    border-top-right-radius: 0.25rem !important
}
.rounded-bottom,
.rounded-right {
    border-bottom-right-radius: 0.25rem !important
}
.rounded-bottom,
.rounded-left {
    border-bottom-left-radius: 0.25rem !important
}
.rounded-left {
    border-top-left-radius: 0.25rem !important
}
.rounded-circle {
    border-radius: 50% !important
}
.rounded-0 {
    border-radius: 0 !important
}
.clearfix:after {
    display: block;
    clear: both;
    content: ""
}
.d-none {
    display: none !important
}
.d-inline {
    display: inline !important
}
.d-inline-block {
    display: inline-block !important
}
.d-block {
    display: block !important
}
.d-table {
    display: table !important
}
.d-table-row {
    display: table-row !important
}
.d-table-cell {
    display: table-cell !important
}
.d-flex {
    display: -ms-flexbox !important;
    display: flex !important
}
.d-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important
}
@media (min-width:576px) {
    .d-sm-none {
        display: none !important
    }
    .d-sm-inline {
        display: inline !important
    }
    .d-sm-inline-block {
        display: inline-block !important
    }
    .d-sm-block {
        display: block !important
    }
    .d-sm-table {
        display: table !important
    }
    .d-sm-table-row {
        display: table-row !important
    }
    .d-sm-table-cell {
        display: table-cell !important
    }
    .d-sm-flex {
        display: -ms-flexbox !important;
        display: flex !important
    }
    .d-sm-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}
@media (min-width:768px) {
    .d-md-none {
        display: none !important
    }
    .d-md-inline {
        display: inline !important
    }
    .d-md-inline-block {
        display: inline-block !important
    }
    .d-md-block {
        display: block !important
    }
    .d-md-table {
        display: table !important
    }
    .d-md-table-row {
        display: table-row !important
    }
    .d-md-table-cell {
        display: table-cell !important
    }
    .d-md-flex {
        display: -ms-flexbox !important;
        display: flex !important
    }
    .d-md-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}
@media (min-width:992px) {
    .d-lg-none {
        display: none !important
    }
    .d-lg-inline {
        display: inline !important
    }
    .d-lg-inline-block {
        display: inline-block !important
    }
    .d-lg-block {
        display: block !important
    }
    .d-lg-table {
        display: table !important
    }
    .d-lg-table-row {
        display: table-row !important
    }
    .d-lg-table-cell {
        display: table-cell !important
    }
    .d-lg-flex {
        display: -ms-flexbox !important;
        display: flex !important
    }
    .d-lg-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}
@media (min-width:1200px) {
    .d-xl-none {
        display: none !important
    }
    .d-xl-inline {
        display: inline !important
    }
    .d-xl-inline-block {
        display: inline-block !important
    }
    .d-xl-block {
        display: block !important
    }
    .d-xl-table {
        display: table !important
    }
    .d-xl-table-row {
        display: table-row !important
    }
    .d-xl-table-cell {
        display: table-cell !important
    }
    .d-xl-flex {
        display: -ms-flexbox !important;
        display: flex !important
    }
    .d-xl-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}
@media print {
    .d-print-none {
        display: none !important
    }
    .d-print-inline {
        display: inline !important
    }
    .d-print-inline-block {
        display: inline-block !important
    }
    .d-print-block {
        display: block !important
    }
    .d-print-table {
        display: table !important
    }
    .d-print-table-row {
        display: table-row !important
    }
    .d-print-table-cell {
        display: table-cell !important
    }
    .d-print-flex {
        display: -ms-flexbox !important;
        display: flex !important
    }
    .d-print-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}
.embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden
}
.embed-responsive:before {
    display: block;
    content: ""
}
.embed-responsive .embed-responsive-item,
.embed-responsive embed,
.embed-responsive iframe,
.embed-responsive object,
.embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0
}
.embed-responsive-21by9:before {
    padding-top: 42.85714%
}
.embed-responsive-16by9:before {
    padding-top: 56.25%
}
.embed-responsive-4by3:before {
    padding-top: 75%
}
.embed-responsive-1by1:before {
    padding-top: 100%
}
.flex-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important
}
.flex-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important
}
.flex-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important
}
.flex-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important
}
.flex-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important
}
.flex-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important
}
.flex-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important
}
.flex-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important
}
.flex-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important
}
.flex-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important
}
.flex-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important
}
.flex-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important
}
.justify-content-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important
}
.justify-content-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important
}
.justify-content-center {
    -ms-flex-pack: center !important;
    justify-content: center !important
}
.justify-content-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important
}
.justify-content-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important
}
.align-items-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important
}
.align-items-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important
}
.align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important
}
.align-items-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important
}
.align-items-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important
}
.align-content-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important
}
.align-content-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important
}
.align-content-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important
}
.align-content-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important
}
.align-content-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important
}
.align-content-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important
}
.align-self-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important
}
.align-self-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important
}
.align-self-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important
}
.align-self-center {
    -ms-flex-item-align: center !important;
    align-self: center !important
}
.align-self-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important
}
.align-self-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important
}
@media (min-width:576px) {
    .flex-sm-row {
        -ms-flex-direction: row !important;
        flex-direction: row !important
    }
    .flex-sm-column {
        -ms-flex-direction: column !important;
        flex-direction: column !important
    }
    .flex-sm-row-reverse {
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important
    }
    .flex-sm-column-reverse {
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important
    }
    .flex-sm-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important
    }
    .flex-sm-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important
    }
    .flex-sm-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important
    }
    .flex-sm-fill {
        -ms-flex: 1 1 auto !important;
        flex: 1 1 auto !important
    }
    .flex-sm-grow-0 {
        -ms-flex-positive: 0 !important;
        flex-grow: 0 !important
    }
    .flex-sm-grow-1 {
        -ms-flex-positive: 1 !important;
        flex-grow: 1 !important
    }
    .flex-sm-shrink-0 {
        -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important
    }
    .flex-sm-shrink-1 {
        -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important
    }
    .justify-content-sm-start {
        -ms-flex-pack: start !important;
        justify-content: flex-start !important
    }
    .justify-content-sm-end {
        -ms-flex-pack: end !important;
        justify-content: flex-end !important
    }
    .justify-content-sm-center {
        -ms-flex-pack: center !important;
        justify-content: center !important
    }
    .justify-content-sm-between {
        -ms-flex-pack: justify !important;
        justify-content: space-between !important
    }
    .justify-content-sm-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important
    }
    .align-items-sm-start {
        -ms-flex-align: start !important;
        align-items: flex-start !important
    }
    .align-items-sm-end {
        -ms-flex-align: end !important;
        align-items: flex-end !important
    }
    .align-items-sm-center {
        -ms-flex-align: center !important;
        align-items: center !important
    }
    .align-items-sm-baseline {
        -ms-flex-align: baseline !important;
        align-items: baseline !important
    }
    .align-items-sm-stretch {
        -ms-flex-align: stretch !important;
        align-items: stretch !important
    }
    .align-content-sm-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important
    }
    .align-content-sm-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important
    }
    .align-content-sm-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important
    }
    .align-content-sm-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important
    }
    .align-content-sm-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important
    }
    .align-content-sm-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important
    }
    .align-self-sm-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important
    }
    .align-self-sm-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important
    }
    .align-self-sm-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important
    }
    .align-self-sm-center {
        -ms-flex-item-align: center !important;
        align-self: center !important
    }
    .align-self-sm-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important
    }
    .align-self-sm-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important
    }
}
@media (min-width:768px) {
    .flex-md-row {
        -ms-flex-direction: row !important;
        flex-direction: row !important
    }
    .flex-md-column {
        -ms-flex-direction: column !important;
        flex-direction: column !important
    }
    .flex-md-row-reverse {
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important
    }
    .flex-md-column-reverse {
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important
    }
    .flex-md-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important
    }
    .flex-md-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important
    }
    .flex-md-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important
    }
    .flex-md-fill {
        -ms-flex: 1 1 auto !important;
        flex: 1 1 auto !important
    }
    .flex-md-grow-0 {
        -ms-flex-positive: 0 !important;
        flex-grow: 0 !important
    }
    .flex-md-grow-1 {
        -ms-flex-positive: 1 !important;
        flex-grow: 1 !important
    }
    .flex-md-shrink-0 {
        -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important
    }
    .flex-md-shrink-1 {
        -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important
    }
    .justify-content-md-start {
        -ms-flex-pack: start !important;
        justify-content: flex-start !important
    }
    .justify-content-md-end {
        -ms-flex-pack: end !important;
        justify-content: flex-end !important
    }
    .justify-content-md-center {
        -ms-flex-pack: center !important;
        justify-content: center !important
    }
    .justify-content-md-between {
        -ms-flex-pack: justify !important;
        justify-content: space-between !important
    }
    .justify-content-md-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important
    }
    .align-items-md-start {
        -ms-flex-align: start !important;
        align-items: flex-start !important
    }
    .align-items-md-end {
        -ms-flex-align: end !important;
        align-items: flex-end !important
    }
    .align-items-md-center {
        -ms-flex-align: center !important;
        align-items: center !important
    }
    .align-items-md-baseline {
        -ms-flex-align: baseline !important;
        align-items: baseline !important
    }
    .align-items-md-stretch {
        -ms-flex-align: stretch !important;
        align-items: stretch !important
    }
    .align-content-md-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important
    }
    .align-content-md-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important
    }
    .align-content-md-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important
    }
    .align-content-md-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important
    }
    .align-content-md-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important
    }
    .align-content-md-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important
    }
    .align-self-md-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important
    }
    .align-self-md-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important
    }
    .align-self-md-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important
    }
    .align-self-md-center {
        -ms-flex-item-align: center !important;
        align-self: center !important
    }
    .align-self-md-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important
    }
    .align-self-md-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important
    }
}
@media (min-width:992px) {
    .flex-lg-row {
        -ms-flex-direction: row !important;
        flex-direction: row !important
    }
    .flex-lg-column {
        -ms-flex-direction: column !important;
        flex-direction: column !important
    }
    .flex-lg-row-reverse {
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important
    }
    .flex-lg-column-reverse {
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important
    }
    .flex-lg-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important
    }
    .flex-lg-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important
    }
    .flex-lg-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important
    }
    .flex-lg-fill {
        -ms-flex: 1 1 auto !important;
        flex: 1 1 auto !important
    }
    .flex-lg-grow-0 {
        -ms-flex-positive: 0 !important;
        flex-grow: 0 !important
    }
    .flex-lg-grow-1 {
        -ms-flex-positive: 1 !important;
        flex-grow: 1 !important
    }
    .flex-lg-shrink-0 {
        -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important
    }
    .flex-lg-shrink-1 {
        -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important
    }
    .justify-content-lg-start {
        -ms-flex-pack: start !important;
        justify-content: flex-start !important
    }
    .justify-content-lg-end {
        -ms-flex-pack: end !important;
        justify-content: flex-end !important
    }
    .justify-content-lg-center {
        -ms-flex-pack: center !important;
        justify-content: center !important
    }
    .justify-content-lg-between {
        -ms-flex-pack: justify !important;
        justify-content: space-between !important
    }
    .justify-content-lg-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important
    }
    .align-items-lg-start {
        -ms-flex-align: start !important;
        align-items: flex-start !important
    }
    .align-items-lg-end {
        -ms-flex-align: end !important;
        align-items: flex-end !important
    }
    .align-items-lg-center {
        -ms-flex-align: center !important;
        align-items: center !important
    }
    .align-items-lg-baseline {
        -ms-flex-align: baseline !important;
        align-items: baseline !important
    }
    .align-items-lg-stretch {
        -ms-flex-align: stretch !important;
        align-items: stretch !important
    }
    .align-content-lg-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important
    }
    .align-content-lg-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important
    }
    .align-content-lg-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important
    }
    .align-content-lg-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important
    }
    .align-content-lg-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important
    }
    .align-content-lg-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important
    }
    .align-self-lg-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important
    }
    .align-self-lg-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important
    }
    .align-self-lg-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important
    }
    .align-self-lg-center {
        -ms-flex-item-align: center !important;
        align-self: center !important
    }
    .align-self-lg-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important
    }
    .align-self-lg-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important
    }
}
@media (min-width:1200px) {
    .flex-xl-row {
        -ms-flex-direction: row !important;
        flex-direction: row !important
    }
    .flex-xl-column {
        -ms-flex-direction: column !important;
        flex-direction: column !important
    }
    .flex-xl-row-reverse {
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important
    }
    .flex-xl-column-reverse {
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important
    }
    .flex-xl-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important
    }
    .flex-xl-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important
    }
    .flex-xl-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important
    }
    .flex-xl-fill {
        -ms-flex: 1 1 auto !important;
        flex: 1 1 auto !important
    }
    .flex-xl-grow-0 {
        -ms-flex-positive: 0 !important;
        flex-grow: 0 !important
    }
    .flex-xl-grow-1 {
        -ms-flex-positive: 1 !important;
        flex-grow: 1 !important
    }
    .flex-xl-shrink-0 {
        -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important
    }
    .flex-xl-shrink-1 {
        -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important
    }
    .justify-content-xl-start {
        -ms-flex-pack: start !important;
        justify-content: flex-start !important
    }
    .justify-content-xl-end {
        -ms-flex-pack: end !important;
        justify-content: flex-end !important
    }
    .justify-content-xl-center {
        -ms-flex-pack: center !important;
        justify-content: center !important
    }
    .justify-content-xl-between {
        -ms-flex-pack: justify !important;
        justify-content: space-between !important
    }
    .justify-content-xl-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important
    }
    .align-items-xl-start {
        -ms-flex-align: start !important;
        align-items: flex-start !important
    }
    .align-items-xl-end {
        -ms-flex-align: end !important;
        align-items: flex-end !important
    }
    .align-items-xl-center {
        -ms-flex-align: center !important;
        align-items: center !important
    }
    .align-items-xl-baseline {
        -ms-flex-align: baseline !important;
        align-items: baseline !important
    }
    .align-items-xl-stretch {
        -ms-flex-align: stretch !important;
        align-items: stretch !important
    }
    .align-content-xl-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important
    }
    .align-content-xl-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important
    }
    .align-content-xl-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important
    }
    .align-content-xl-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important
    }
    .align-content-xl-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important
    }
    .align-content-xl-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important
    }
    .align-self-xl-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important
    }
    .align-self-xl-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important
    }
    .align-self-xl-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important
    }
    .align-self-xl-center {
        -ms-flex-item-align: center !important;
        align-self: center !important
    }
    .align-self-xl-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important
    }
    .align-self-xl-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important
    }
}
.float-left {
    float: left !important
}
.float-right {
    float: right !important
}
.float-none {
    float: none !important
}
@media (min-width:576px) {
    .float-sm-left {
        float: left !important
    }
    .float-sm-right {
        float: right !important
    }
    .float-sm-none {
        float: none !important
    }
}
@media (min-width:768px) {
    .float-md-left {
        float: left !important
    }
    .float-md-right {
        float: right !important
    }
    .float-md-none {
        float: none !important
    }
}
@media (min-width:992px) {
    .float-lg-left {
        float: left !important
    }
    .float-lg-right {
        float: right !important
    }
    .float-lg-none {
        float: none !important
    }
}
@media (min-width:1200px) {
    .float-xl-left {
        float: left !important
    }
    .float-xl-right {
        float: right !important
    }
    .float-xl-none {
        float: none !important
    }
}
.position-static {
    position: static !important
}
.position-relative {
    position: relative !important
}
.position-absolute {
    position: absolute !important
}
.position-fixed {
    position: fixed !important
}
.position-sticky {
    position: -webkit-sticky !important;
    position: sticky !important
}
.fixed-top {
    top: 0
}
.fixed-bottom,
.fixed-top {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030
}
.fixed-bottom {
    bottom: 0
}
@supports ((position:-webkit-sticky) or (position:sticky)) {
    .sticky-top {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020
    }
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal
}
.shadow-sm {
    -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, .075) !important;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, .075) !important
}
.shadow {
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .15) !important;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .15) !important
}
.shadow-lg {
    -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important
}
.shadow-none {
    -webkit-box-shadow: none !important;
    box-shadow: none !important
}
.w-25 {
    width: 25% !important
}
.w-50 {
    width: 50% !important
}
.w-75 {
    width: 75% !important
}
.w-100 {
    width: 100% !important
}
.w-auto {
    width: auto !important
}
.h-25 {
    height: 25% !important
}
.h-50 {
    height: 50% !important
}
.h-75 {
    height: 75% !important
}
.h-100 {
    height: 100% !important
}
.h-auto {
    height: auto !important
}
.mw-100 {
    max-width: 100% !important
}
.mh-100 {
    max-height: 100% !important
}
.m-0 {
    margin: 0 !important
}
.mt-0,
.my-0 {
    margin-top: 0 !important
}
.mr-0,
.mx-0 {
    margin-right: 0 !important
}
.mb-0,
.my-0 {
    margin-bottom: 0 !important
}
.ml-0,
.mx-0 {
    margin-left: 0 !important
}
.m-1 {
    margin: 0.3575rem !important
}
.mt-1,
.my-1 {
    margin-top: 0.3575rem !important
}
.mr-1,
.mx-1 {
    margin-right: 0.3575rem !important
}
.mb-1,
.my-1 {
    margin-bottom: 0.3575rem !important
}
.ml-1,
.mx-1 {
    margin-left: 0.3575rem !important
}
.m-2 {
    margin: 0.715rem !important
}
.mt-2,
.my-2 {
    margin-top: 0.715rem !important
}
.mr-2,
.mx-2 {
    margin-right: 0.715rem !important
}
.mb-2,
.my-2 {
    margin-bottom: 0.715rem !important
}
.ml-2,
.mx-2 {
    margin-left: 0.715rem !important
}
.m-3 {
    margin: 1.43rem !important
}
.mt-3,
.my-3 {
    margin-top: 1.43rem !important
}
.mr-3,
.mx-3 {
    margin-right: 1.43rem !important
}
.mb-3,
.my-3 {
    margin-bottom: 1.43rem !important
}
.ml-3,
.mx-3 {
    margin-left: 1.43rem !important
}
.m-4 {
    margin: 2.145rem !important
}
.mt-4,
.my-4 {
    margin-top: 2.145rem !important
}
.mr-4,
.mx-4 {
    margin-right: 2.145rem !important
}
.mb-4,
.my-4 {
    margin-bottom: 2.145rem !important
}
.ml-4,
.mx-4 {
    margin-left: 2.145rem !important
}
.m-5 {
    margin: 4.29rem !important
}
.mt-5,
.my-5 {
    margin-top: 4.29rem !important
}
.mr-5,
.mx-5 {
    margin-right: 4.29rem !important
}
.mb-5,
.my-5 {
    margin-bottom: 4.29rem !important
}
.ml-5,
.mx-5 {
    margin-left: 4.29rem !important
}
.p-0 {
    padding: 0 !important
}
.pt-0,
.py-0 {
    padding-top: 0 !important
}
.pr-0,
.px-0 {
    padding-right: 0 !important
}
.pb-0,
.py-0 {
    padding-bottom: 0 !important
}
.pl-0,
.px-0 {
    padding-left: 0 !important
}
.p-1 {
    padding: 0.3575rem !important
}
.pt-1,
.py-1 {
    padding-top: 0.3575rem !important
}
.pr-1,
.px-1 {
    padding-right: 0.3575rem !important
}
.pb-1,
.py-1 {
    padding-bottom: 0.3575rem !important
}
.pl-1,
.px-1 {
    padding-left: 0.3575rem !important
}
.p-2 {
    padding: 0.715rem !important
}
.pt-2,
.py-2 {
    padding-top: 0.715rem !important
}
.pr-2,
.px-2 {
    padding-right: 0.715rem !important
}
.pb-2,
.py-2 {
    padding-bottom: 0.715rem !important
}
.pl-2,
.px-2 {
    padding-left: 0.715rem !important
}
.p-3 {
    padding: 1.43rem !important
}
.pt-3,
.py-3 {
    padding-top: 1.43rem !important
}
.pr-3,
.px-3 {
    padding-right: 1.43rem !important
}
.pb-3,
.py-3 {
    padding-bottom: 1.43rem !important
}
.pl-3,
.px-3 {
    padding-left: 1.43rem !important
}
.p-4 {
    padding: 2.145rem !important
}
.pt-4,
.py-4 {
    padding-top: 2.145rem !important
}
.pr-4,
.px-4 {
    padding-right: 2.145rem !important
}
.pb-4,
.py-4 {
    padding-bottom: 2.145rem !important
}
.pl-4,
.px-4 {
    padding-left: 2.145rem !important
}
.p-5 {
    padding: 4.29rem !important
}
.pt-5,
.py-5 {
    padding-top: 4.29rem !important
}
.pr-5,
.px-5 {
    padding-right: 4.29rem !important
}
.pb-5,
.py-5 {
    padding-bottom: 4.29rem !important
}
.pl-5,
.px-5 {
    padding-left: 4.29rem !important
}
.m-auto {
    margin: auto !important
}
.mt-auto,
.my-auto {
    margin-top: auto !important
}
.mr-auto,
.mx-auto {
    margin-right: auto !important
}
.mb-auto,
.my-auto {
    margin-bottom: auto !important
}
.ml-auto,
.mx-auto {
    margin-left: auto !important
}
@media (min-width:576px) {
    .m-sm-0 {
        margin: 0 !important
    }
    .mt-sm-0,
    .my-sm-0 {
        margin-top: 0 !important
    }
    .mr-sm-0,
    .mx-sm-0 {
        margin-right: 0 !important
    }
    .mb-sm-0,
    .my-sm-0 {
        margin-bottom: 0 !important
    }
    .ml-sm-0,
    .mx-sm-0 {
        margin-left: 0 !important
    }
    .m-sm-1 {
        margin: 0.3575rem !important
    }
    .mt-sm-1,
    .my-sm-1 {
        margin-top: 0.3575rem !important
    }
    .mr-sm-1,
    .mx-sm-1 {
        margin-right: 0.3575rem !important
    }
    .mb-sm-1,
    .my-sm-1 {
        margin-bottom: 0.3575rem !important
    }
    .ml-sm-1,
    .mx-sm-1 {
        margin-left: 0.3575rem !important
    }
    .m-sm-2 {
        margin: 0.715rem !important
    }
    .mt-sm-2,
    .my-sm-2 {
        margin-top: 0.715rem !important
    }
    .mr-sm-2,
    .mx-sm-2 {
        margin-right: 0.715rem !important
    }
    .mb-sm-2,
    .my-sm-2 {
        margin-bottom: 0.715rem !important
    }
    .ml-sm-2,
    .mx-sm-2 {
        margin-left: 0.715rem !important
    }
    .m-sm-3 {
        margin: 1.43rem !important
    }
    .mt-sm-3,
    .my-sm-3 {
        margin-top: 1.43rem !important
    }
    .mr-sm-3,
    .mx-sm-3 {
        margin-right: 1.43rem !important
    }
    .mb-sm-3,
    .my-sm-3 {
        margin-bottom: 1.43rem !important
    }
    .ml-sm-3,
    .mx-sm-3 {
        margin-left: 1.43rem !important
    }
    .m-sm-4 {
        margin: 2.145rem !important
    }
    .mt-sm-4,
    .my-sm-4 {
        margin-top: 2.145rem !important
    }
    .mr-sm-4,
    .mx-sm-4 {
        margin-right: 2.145rem !important
    }
    .mb-sm-4,
    .my-sm-4 {
        margin-bottom: 2.145rem !important
    }
    .ml-sm-4,
    .mx-sm-4 {
        margin-left: 2.145rem !important
    }
    .m-sm-5 {
        margin: 4.29rem !important
    }
    .mt-sm-5,
    .my-sm-5 {
        margin-top: 4.29rem !important
    }
    .mr-sm-5,
    .mx-sm-5 {
        margin-right: 4.29rem !important
    }
    .mb-sm-5,
    .my-sm-5 {
        margin-bottom: 4.29rem !important
    }
    .ml-sm-5,
    .mx-sm-5 {
        margin-left: 4.29rem !important
    }
    .p-sm-0 {
        padding: 0 !important
    }
    .pt-sm-0,
    .py-sm-0 {
        padding-top: 0 !important
    }
    .pr-sm-0,
    .px-sm-0 {
        padding-right: 0 !important
    }
    .pb-sm-0,
    .py-sm-0 {
        padding-bottom: 0 !important
    }
    .pl-sm-0,
    .px-sm-0 {
        padding-left: 0 !important
    }
    .p-sm-1 {
        padding: 0.3575rem !important
    }
    .pt-sm-1,
    .py-sm-1 {
        padding-top: 0.3575rem !important
    }
    .pr-sm-1,
    .px-sm-1 {
        padding-right: 0.3575rem !important
    }
    .pb-sm-1,
    .py-sm-1 {
        padding-bottom: 0.3575rem !important
    }
    .pl-sm-1,
    .px-sm-1 {
        padding-left: 0.3575rem !important
    }
    .p-sm-2 {
        padding: 0.715rem !important
    }
    .pt-sm-2,
    .py-sm-2 {
        padding-top: 0.715rem !important
    }
    .pr-sm-2,
    .px-sm-2 {
        padding-right: 0.715rem !important
    }
    .pb-sm-2,
    .py-sm-2 {
        padding-bottom: 0.715rem !important
    }
    .pl-sm-2,
    .px-sm-2 {
        padding-left: 0.715rem !important
    }
    .p-sm-3 {
        padding: 1.43rem !important
    }
    .pt-sm-3,
    .py-sm-3 {
        padding-top: 1.43rem !important
    }
    .pr-sm-3,
    .px-sm-3 {
        padding-right: 1.43rem !important
    }
    .pb-sm-3,
    .py-sm-3 {
        padding-bottom: 1.43rem !important
    }
    .pl-sm-3,
    .px-sm-3 {
        padding-left: 1.43rem !important
    }
    .p-sm-4 {
        padding: 2.145rem !important
    }
    .pt-sm-4,
    .py-sm-4 {
        padding-top: 2.145rem !important
    }
    .pr-sm-4,
    .px-sm-4 {
        padding-right: 2.145rem !important
    }
    .pb-sm-4,
    .py-sm-4 {
        padding-bottom: 2.145rem !important
    }
    .pl-sm-4,
    .px-sm-4 {
        padding-left: 2.145rem !important
    }
    .p-sm-5 {
        padding: 4.29rem !important
    }
    .pt-sm-5,
    .py-sm-5 {
        padding-top: 4.29rem !important
    }
    .pr-sm-5,
    .px-sm-5 {
        padding-right: 4.29rem !important
    }
    .pb-sm-5,
    .py-sm-5 {
        padding-bottom: 4.29rem !important
    }
    .pl-sm-5,
    .px-sm-5 {
        padding-left: 4.29rem !important
    }
    .m-sm-auto {
        margin: auto !important
    }
    .mt-sm-auto,
    .my-sm-auto {
        margin-top: auto !important
    }
    .mr-sm-auto,
    .mx-sm-auto {
        margin-right: auto !important
    }
    .mb-sm-auto,
    .my-sm-auto {
        margin-bottom: auto !important
    }
    .ml-sm-auto,
    .mx-sm-auto {
        margin-left: auto !important
    }
}
@media (min-width:768px) {
    .m-md-0 {
        margin: 0 !important
    }
    .mt-md-0,
    .my-md-0 {
        margin-top: 0 !important
    }
    .mr-md-0,
    .mx-md-0 {
        margin-right: 0 !important
    }
    .mb-md-0,
    .my-md-0 {
        margin-bottom: 0 !important
    }
    .ml-md-0,
    .mx-md-0 {
        margin-left: 0 !important
    }
    .m-md-1 {
        margin: 0.3575rem !important
    }
    .mt-md-1,
    .my-md-1 {
        margin-top: 0.3575rem !important
    }
    .mr-md-1,
    .mx-md-1 {
        margin-right: 0.3575rem !important
    }
    .mb-md-1,
    .my-md-1 {
        margin-bottom: 0.3575rem !important
    }
    .ml-md-1,
    .mx-md-1 {
        margin-left: 0.3575rem !important
    }
    .m-md-2 {
        margin: 0.715rem !important
    }
    .mt-md-2,
    .my-md-2 {
        margin-top: 0.715rem !important
    }
    .mr-md-2,
    .mx-md-2 {
        margin-right: 0.715rem !important
    }
    .mb-md-2,
    .my-md-2 {
        margin-bottom: 0.715rem !important
    }
    .ml-md-2,
    .mx-md-2 {
        margin-left: 0.715rem !important
    }
    .m-md-3 {
        margin: 1.43rem !important
    }
    .mt-md-3,
    .my-md-3 {
        margin-top: 1.43rem !important
    }
    .mr-md-3,
    .mx-md-3 {
        margin-right: 1.43rem !important
    }
    .mb-md-3,
    .my-md-3 {
        margin-bottom: 1.43rem !important
    }
    .ml-md-3,
    .mx-md-3 {
        margin-left: 1.43rem !important
    }
    .m-md-4 {
        margin: 2.145rem !important
    }
    .mt-md-4,
    .my-md-4 {
        margin-top: 2.145rem !important
    }
    .mr-md-4,
    .mx-md-4 {
        margin-right: 2.145rem !important
    }
    .mb-md-4,
    .my-md-4 {
        margin-bottom: 2.145rem !important
    }
    .ml-md-4,
    .mx-md-4 {
        margin-left: 2.145rem !important
    }
    .m-md-5 {
        margin: 4.29rem !important
    }
    .mt-md-5,
    .my-md-5 {
        margin-top: 4.29rem !important
    }
    .mr-md-5,
    .mx-md-5 {
        margin-right: 4.29rem !important
    }
    .mb-md-5,
    .my-md-5 {
        margin-bottom: 4.29rem !important
    }
    .ml-md-5,
    .mx-md-5 {
        margin-left: 4.29rem !important
    }
    .p-md-0 {
        padding: 0 !important
    }
    .pt-md-0,
    .py-md-0 {
        padding-top: 0 !important
    }
    .pr-md-0,
    .px-md-0 {
        padding-right: 0 !important
    }
    .pb-md-0,
    .py-md-0 {
        padding-bottom: 0 !important
    }
    .pl-md-0,
    .px-md-0 {
        padding-left: 0 !important
    }
    .p-md-1 {
        padding: 0.3575rem !important
    }
    .pt-md-1,
    .py-md-1 {
        padding-top: 0.3575rem !important
    }
    .pr-md-1,
    .px-md-1 {
        padding-right: 0.3575rem !important
    }
    .pb-md-1,
    .py-md-1 {
        padding-bottom: 0.3575rem !important
    }
    .pl-md-1,
    .px-md-1 {
        padding-left: 0.3575rem !important
    }
    .p-md-2 {
        padding: 0.715rem !important
    }
    .pt-md-2,
    .py-md-2 {
        padding-top: 0.715rem !important
    }
    .pr-md-2,
    .px-md-2 {
        padding-right: 0.715rem !important
    }
    .pb-md-2,
    .py-md-2 {
        padding-bottom: 0.715rem !important
    }
    .pl-md-2,
    .px-md-2 {
        padding-left: 0.715rem !important
    }
    .p-md-3 {
        padding: 1.43rem !important
    }
    .pt-md-3,
    .py-md-3 {
        padding-top: 1.43rem !important
    }
    .pr-md-3,
    .px-md-3 {
        padding-right: 1.43rem !important
    }
    .pb-md-3,
    .py-md-3 {
        padding-bottom: 1.43rem !important
    }
    .pl-md-3,
    .px-md-3 {
        padding-left: 1.43rem !important
    }
    .p-md-4 {
        padding: 2.145rem !important
    }
    .pt-md-4,
    .py-md-4 {
        padding-top: 2.145rem !important
    }
    .pr-md-4,
    .px-md-4 {
        padding-right: 2.145rem !important
    }
    .pb-md-4,
    .py-md-4 {
        padding-bottom: 2.145rem !important
    }
    .pl-md-4,
    .px-md-4 {
        padding-left: 2.145rem !important
    }
    .p-md-5 {
        padding: 4.29rem !important
    }
    .pt-md-5,
    .py-md-5 {
        padding-top: 4.29rem !important
    }
    .pr-md-5,
    .px-md-5 {
        padding-right: 4.29rem !important
    }
    .pb-md-5,
    .py-md-5 {
        padding-bottom: 4.29rem !important
    }
    .pl-md-5,
    .px-md-5 {
        padding-left: 4.29rem !important
    }
    .m-md-auto {
        margin: auto !important
    }
    .mt-md-auto,
    .my-md-auto {
        margin-top: auto !important
    }
    .mr-md-auto,
    .mx-md-auto {
        margin-right: auto !important
    }
    .mb-md-auto,
    .my-md-auto {
        margin-bottom: auto !important
    }
    .ml-md-auto,
    .mx-md-auto {
        margin-left: auto !important
    }
}
@media (min-width:992px) {
    .m-lg-0 {
        margin: 0 !important
    }
    .mt-lg-0,
    .my-lg-0 {
        margin-top: 0 !important
    }
    .mr-lg-0,
    .mx-lg-0 {
        margin-right: 0 !important
    }
    .mb-lg-0,
    .my-lg-0 {
        margin-bottom: 0 !important
    }
    .ml-lg-0,
    .mx-lg-0 {
        margin-left: 0 !important
    }
    .m-lg-1 {
        margin: 0.3575rem !important
    }
    .mt-lg-1,
    .my-lg-1 {
        margin-top: 0.3575rem !important
    }
    .mr-lg-1,
    .mx-lg-1 {
        margin-right: 0.3575rem !important
    }
    .mb-lg-1,
    .my-lg-1 {
        margin-bottom: 0.3575rem !important
    }
    .ml-lg-1,
    .mx-lg-1 {
        margin-left: 0.3575rem !important
    }
    .m-lg-2 {
        margin: 0.715rem !important
    }
    .mt-lg-2,
    .my-lg-2 {
        margin-top: 0.715rem !important
    }
    .mr-lg-2,
    .mx-lg-2 {
        margin-right: 0.715rem !important
    }
    .mb-lg-2,
    .my-lg-2 {
        margin-bottom: 0.715rem !important
    }
    .ml-lg-2,
    .mx-lg-2 {
        margin-left: 0.715rem !important
    }
    .m-lg-3 {
        margin: 1.43rem !important
    }
    .mt-lg-3,
    .my-lg-3 {
        margin-top: 1.43rem !important
    }
    .mr-lg-3,
    .mx-lg-3 {
        margin-right: 1.43rem !important
    }
    .mb-lg-3,
    .my-lg-3 {
        margin-bottom: 1.43rem !important
    }
    .ml-lg-3,
    .mx-lg-3 {
        margin-left: 1.43rem !important
    }
    .m-lg-4 {
        margin: 2.145rem !important
    }
    .mt-lg-4,
    .my-lg-4 {
        margin-top: 2.145rem !important
    }
    .mr-lg-4,
    .mx-lg-4 {
        margin-right: 2.145rem !important
    }
    .mb-lg-4,
    .my-lg-4 {
        margin-bottom: 2.145rem !important
    }
    .ml-lg-4,
    .mx-lg-4 {
        margin-left: 2.145rem !important
    }
    .m-lg-5 {
        margin: 4.29rem !important
    }
    .mt-lg-5,
    .my-lg-5 {
        margin-top: 4.29rem !important
    }
    .mr-lg-5,
    .mx-lg-5 {
        margin-right: 4.29rem !important
    }
    .mb-lg-5,
    .my-lg-5 {
        margin-bottom: 4.29rem !important
    }
    .ml-lg-5,
    .mx-lg-5 {
        margin-left: 4.29rem !important
    }
    .p-lg-0 {
        padding: 0 !important
    }
    .pt-lg-0,
    .py-lg-0 {
        padding-top: 0 !important
    }
    .pr-lg-0,
    .px-lg-0 {
        padding-right: 0 !important
    }
    .pb-lg-0,
    .py-lg-0 {
        padding-bottom: 0 !important
    }
    .pl-lg-0,
    .px-lg-0 {
        padding-left: 0 !important
    }
    .p-lg-1 {
        padding: 0.3575rem !important
    }
    .pt-lg-1,
    .py-lg-1 {
        padding-top: 0.3575rem !important
    }
    .pr-lg-1,
    .px-lg-1 {
        padding-right: 0.3575rem !important
    }
    .pb-lg-1,
    .py-lg-1 {
        padding-bottom: 0.3575rem !important
    }
    .pl-lg-1,
    .px-lg-1 {
        padding-left: 0.3575rem !important
    }
    .p-lg-2 {
        padding: 0.715rem !important
    }
    .pt-lg-2,
    .py-lg-2 {
        padding-top: 0.715rem !important
    }
    .pr-lg-2,
    .px-lg-2 {
        padding-right: 0.715rem !important
    }
    .pb-lg-2,
    .py-lg-2 {
        padding-bottom: 0.715rem !important
    }
    .pl-lg-2,
    .px-lg-2 {
        padding-left: 0.715rem !important
    }
    .p-lg-3 {
        padding: 1.43rem !important
    }
    .pt-lg-3,
    .py-lg-3 {
        padding-top: 1.43rem !important
    }
    .pr-lg-3,
    .px-lg-3 {
        padding-right: 1.43rem !important
    }
    .pb-lg-3,
    .py-lg-3 {
        padding-bottom: 1.43rem !important
    }
    .pl-lg-3,
    .px-lg-3 {
        padding-left: 1.43rem !important
    }
    .p-lg-4 {
        padding: 2.145rem !important
    }
    .pt-lg-4,
    .py-lg-4 {
        padding-top: 2.145rem !important
    }
    .pr-lg-4,
    .px-lg-4 {
        padding-right: 2.145rem !important
    }
    .pb-lg-4,
    .py-lg-4 {
        padding-bottom: 2.145rem !important
    }
    .pl-lg-4,
    .px-lg-4 {
        padding-left: 2.145rem !important
    }
    .p-lg-5 {
        padding: 4.29rem !important
    }
    .pt-lg-5,
    .py-lg-5 {
        padding-top: 4.29rem !important
    }
    .pr-lg-5,
    .px-lg-5 {
        padding-right: 4.29rem !important
    }
    .pb-lg-5,
    .py-lg-5 {
        padding-bottom: 4.29rem !important
    }
    .pl-lg-5,
    .px-lg-5 {
        padding-left: 4.29rem !important
    }
    .m-lg-auto {
        margin: auto !important
    }
    .mt-lg-auto,
    .my-lg-auto {
        margin-top: auto !important
    }
    .mr-lg-auto,
    .mx-lg-auto {
        margin-right: auto !important
    }
    .mb-lg-auto,
    .my-lg-auto {
        margin-bottom: auto !important
    }
    .ml-lg-auto,
    .mx-lg-auto {
        margin-left: auto !important
    }
}
@media (min-width:1200px) {
    .m-xl-0 {
        margin: 0 !important
    }
    .mt-xl-0,
    .my-xl-0 {
        margin-top: 0 !important
    }
    .mr-xl-0,
    .mx-xl-0 {
        margin-right: 0 !important
    }
    .mb-xl-0,
    .my-xl-0 {
        margin-bottom: 0 !important
    }
    .ml-xl-0,
    .mx-xl-0 {
        margin-left: 0 !important
    }
    .m-xl-1 {
        margin: 0.3575rem !important
    }
    .mt-xl-1,
    .my-xl-1 {
        margin-top: 0.3575rem !important
    }
    .mr-xl-1,
    .mx-xl-1 {
        margin-right: 0.3575rem !important
    }
    .mb-xl-1,
    .my-xl-1 {
        margin-bottom: 0.3575rem !important
    }
    .ml-xl-1,
    .mx-xl-1 {
        margin-left: 0.3575rem !important
    }
    .m-xl-2 {
        margin: 0.715rem !important
    }
    .mt-xl-2,
    .my-xl-2 {
        margin-top: 0.715rem !important
    }
    .mr-xl-2,
    .mx-xl-2 {
        margin-right: 0.715rem !important
    }
    .mb-xl-2,
    .my-xl-2 {
        margin-bottom: 0.715rem !important
    }
    .ml-xl-2,
    .mx-xl-2 {
        margin-left: 0.715rem !important
    }
    .m-xl-3 {
        margin: 1.43rem !important
    }
    .mt-xl-3,
    .my-xl-3 {
        margin-top: 1.43rem !important
    }
    .mr-xl-3,
    .mx-xl-3 {
        margin-right: 1.43rem !important
    }
    .mb-xl-3,
    .my-xl-3 {
        margin-bottom: 1.43rem !important
    }
    .ml-xl-3,
    .mx-xl-3 {
        margin-left: 1.43rem !important
    }
    .m-xl-4 {
        margin: 2.145rem !important
    }
    .mt-xl-4,
    .my-xl-4 {
        margin-top: 2.145rem !important
    }
    .mr-xl-4,
    .mx-xl-4 {
        margin-right: 2.145rem !important
    }
    .mb-xl-4,
    .my-xl-4 {
        margin-bottom: 2.145rem !important
    }
    .ml-xl-4,
    .mx-xl-4 {
        margin-left: 2.145rem !important
    }
    .m-xl-5 {
        margin: 4.29rem !important
    }
    .mt-xl-5,
    .my-xl-5 {
        margin-top: 4.29rem !important
    }
    .mr-xl-5,
    .mx-xl-5 {
        margin-right: 4.29rem !important
    }
    .mb-xl-5,
    .my-xl-5 {
        margin-bottom: 4.29rem !important
    }
    .ml-xl-5,
    .mx-xl-5 {
        margin-left: 4.29rem !important
    }
    .p-xl-0 {
        padding: 0 !important
    }
    .pt-xl-0,
    .py-xl-0 {
        padding-top: 0 !important
    }
    .pr-xl-0,
    .px-xl-0 {
        padding-right: 0 !important
    }
    .pb-xl-0,
    .py-xl-0 {
        padding-bottom: 0 !important
    }
    .pl-xl-0,
    .px-xl-0 {
        padding-left: 0 !important
    }
    .p-xl-1 {
        padding: 0.3575rem !important
    }
    .pt-xl-1,
    .py-xl-1 {
        padding-top: 0.3575rem !important
    }
    .pr-xl-1,
    .px-xl-1 {
        padding-right: 0.3575rem !important
    }
    .pb-xl-1,
    .py-xl-1 {
        padding-bottom: 0.3575rem !important
    }
    .pl-xl-1,
    .px-xl-1 {
        padding-left: 0.3575rem !important
    }
    .p-xl-2 {
        padding: 0.715rem !important
    }
    .pt-xl-2,
    .py-xl-2 {
        padding-top: 0.715rem !important
    }
    .pr-xl-2,
    .px-xl-2 {
        padding-right: 0.715rem !important
    }
    .pb-xl-2,
    .py-xl-2 {
        padding-bottom: 0.715rem !important
    }
    .pl-xl-2,
    .px-xl-2 {
        padding-left: 0.715rem !important
    }
    .p-xl-3 {
        padding: 1.43rem !important
    }
    .pt-xl-3,
    .py-xl-3 {
        padding-top: 1.43rem !important
    }
    .pr-xl-3,
    .px-xl-3 {
        padding-right: 1.43rem !important
    }
    .pb-xl-3,
    .py-xl-3 {
        padding-bottom: 1.43rem !important
    }
    .pl-xl-3,
    .px-xl-3 {
        padding-left: 1.43rem !important
    }
    .p-xl-4 {
        padding: 2.145rem !important
    }
    .pt-xl-4,
    .py-xl-4 {
        padding-top: 2.145rem !important
    }
    .pr-xl-4,
    .px-xl-4 {
        padding-right: 2.145rem !important
    }
    .pb-xl-4,
    .py-xl-4 {
        padding-bottom: 2.145rem !important
    }
    .pl-xl-4,
    .px-xl-4 {
        padding-left: 2.145rem !important
    }
    .p-xl-5 {
        padding: 4.29rem !important
    }
    .pt-xl-5,
    .py-xl-5 {
        padding-top: 4.29rem !important
    }
    .pr-xl-5,
    .px-xl-5 {
        padding-right: 4.29rem !important
    }
    .pb-xl-5,
    .py-xl-5 {
        padding-bottom: 4.29rem !important
    }
    .pl-xl-5,
    .px-xl-5 {
        padding-left: 4.29rem !important
    }
    .m-xl-auto {
        margin: auto !important
    }
    .mt-xl-auto,
    .my-xl-auto {
        margin-top: auto !important
    }
    .mr-xl-auto,
    .mx-xl-auto {
        margin-right: auto !important
    }
    .mb-xl-auto,
    .my-xl-auto {
        margin-bottom: auto !important
    }
    .ml-xl-auto,
    .mx-xl-auto {
        margin-left: auto !important
    }
}
.text-monospace {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
}
.text-justify {
    text-align: justify !important
}
.text-nowrap {
    white-space: nowrap !important
}
.text-truncate {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap
}
.text-left {
    text-align: left !important
}
.text-right {
    text-align: right !important
}
.text-center {
    text-align: center !important
}
@media (min-width:576px) {
    .text-sm-left {
        text-align: left !important
    }
    .text-sm-right {
        text-align: right !important
    }
    .text-sm-center {
        text-align: center !important
    }
}
@media (min-width:768px) {
    .text-md-left {
        text-align: left !important
    }
    .text-md-right {
        text-align: right !important
    }
    .text-md-center {
        text-align: center !important
    }
}
@media (min-width:992px) {
    .text-lg-left {
        text-align: left !important
    }
    .text-lg-right {
        text-align: right !important
    }
    .text-lg-center {
        text-align: center !important
    }
}
@media (min-width:1200px) {
    .text-xl-left {
        text-align: left !important
    }
    .text-xl-right {
        text-align: right !important
    }
    .text-xl-center {
        text-align: center !important
    }
}
.text-lowercase {
    text-transform: lowercase !important
}
.text-uppercase {
    text-transform: uppercase !important
}
.text-capitalize {
    text-transform: capitalize !important
}
.font-weight-light {
    font-weight: 300 !important
}
.font-weight-normal {
    font-weight: 400 !important
}
.font-weight-bold {
    font-weight: 700 !important
}
.font-italic {
    font-style: italic !important
}
.text-white {
    color: #fff !important
}
.text-primary {
    color: #3c91da !important
}
a.text-primary:focus,
a.text-primary:hover {
    color: #2477bf !important
}
.text-secondary {
    color: #adb5bd !important
}
a.text-secondary:focus,
a.text-secondary:hover {
    color: #919ca6 !important
}
.text-success {
    color: #59cd90 !important
}
a.text-success:focus,
a.text-success:hover {
    color: #38bb76 !important
}
.text-info {
    color: #45bddc !important
}
a.text-info:focus,
a.text-info:hover {
    color: #26a7c8 !important
}
.text-warning {
    color: #f7b267 !important
}
a.text-warning:focus,
a.text-warning:hover {
    color: #f49937 !important
}
.text-danger {
    color: #ee6352 !important
}
a.text-danger:focus,
a.text-danger:hover {
    color: #e93924 !important
}
.text-light {
    color: #f5f6f8 !important
}
a.text-light:focus,
a.text-light:hover {
    color: #d7dde3 !important
}
.text-dark {
    color: #343a40 !important
}
a.text-dark:focus,
a.text-dark:hover {
    color: #1d2124 !important
}
.text-body {
    color: #686e71 !important
}
.text-muted {
    color: #868e96 !important
}
.text-black-50 {
    color: rgba(0, 0, 0, .5) !important
}
.text-white-50 {
    color: hsla(0, 0%, 100%, 0.5) !important
}
.text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0
}
.visible {
    visibility: visible !important
}
.invisible {
    visibility: hidden !important
}
.dropdown-menu.dropdown-menu-right {
    right: 0;
    left: auto !important
} /*!
 *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */@font-face {
    font-family: FontAwesome;
    src: url('../../static/media/fontawesome-webfont.674f50d2.eot');
    src: url('../../static/media/fontawesome-webfont.674f50d2.eot?#iefix&v=4.7.0') format("embedded-opentype"), url(../../static/media/fontawesome-webfont.af7ae505.woff2) format("woff2"), url(../../static/media/fontawesome-webfont.fee66e71.woff) format("woff"), url(../../static/media/fontawesome-webfont.b06871f2.ttf) format("truetype"), url(../../static/media/fontawesome-webfont.912ec66d.svg#fontawesomeregular) format("svg");
    font-weight: 400;
    font-style: normal
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}
.fa-lg {
    font-size: 1.33333333em;
    line-height: 0.75em;
    vertical-align: -15%
}
.fa-2x {
    font-size: 2em
}
.fa-3x {
    font-size: 3em
}
.fa-4x {
    font-size: 4em
}
.fa-5x {
    font-size: 5em
}
.fa-fw {
    width: 1.28571429em;
    text-align: center
}
.fa-ul {
    padding-left: 0;
    margin-left: 2.14285714em;
    list-style-type: none
}
.fa-ul > li {
    position: relative
}
.fa-li {
    position: absolute;
    left: -2.14285714em;
    width: 2.14285714em;
    top: 0.14285714em;
    text-align: center
}
.fa-li.fa-lg {
    left: -1.85714286em
}
.fa-border {
    padding: 0.2em 0.25em 0.15em;
    border: 0.08em solid #eee;
    border-radius: 0.1em
}
.fa-pull-left {
    float: left
}
.fa-pull-right {
    float: right
}
.fa.fa-pull-left {
    margin-right: 0.3em
}
.fa.fa-pull-right {
    margin-left: 0.3em
}
.pull-right {
    float: right
}
.pull-left {
    float: left
}
.fa.pull-left {
    margin-right: 0.3em
}
.fa.pull-right {
    margin-left: 0.3em
}
.fa-spin {
    -webkit-animation: fa-spin 2s infinite linear;
    animation: fa-spin 2s infinite linear
}
.fa-pulse {
    -webkit-animation: fa-spin 1s infinite steps(8);
    animation: fa-spin 1s infinite steps(8)
}
@-webkit-keyframes fa-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }
    to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg)
    }
}
@keyframes fa-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }
    to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg)
    }
}
.fa-rotate-90 {
    -ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)""
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg)
}
.fa-rotate-180 {
    -ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)""
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg)
}
.fa-rotate-270 {
    -ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)""
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg)
}
.fa-flip-horizontal {
    -ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)""
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    transform: scaleX(-1)
}
.fa-flip-vertical {
    -ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)""
    -webkit-transform: scaleY(-1);
    -ms-transform: scaleY(-1);
    transform: scaleY(-1)
}
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-rotate-90 {
    -webkit-filter:none;
    filter:none
}
.fa-stack {
    position: relative;
    display: inline-block;
    width: 2em;
    height: 2em;
    line-height: 2em;
    vertical-align: middle
}
.fa-stack-1x,
.fa-stack-2x {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center
}
.fa-stack-1x {
    line-height: inherit
}
.fa-stack-2x {
    font-size: 2em
}
.fa-inverse {
    color: #fff
}
.fa-glass:before {
    content: "\F000"
}
.fa-music:before {
    content: "\F001"
}
.fa-search:before {
    content: "\F002"
}
.fa-envelope-o:before {
    content: "\F003"
}
.fa-heart:before {
    content: "\F004"
}
.fa-star:before {
    content: "\F005"
}
.fa-star-o:before {
    content: "\F006"
}
.fa-user:before {
    content: "\F007"
}
.fa-film:before {
    content: "\F008"
}
.fa-th-large:before {
    content: "\F009"
}
.fa-th:before {
    content: "\F00A"
}
.fa-th-list:before {
    content: "\F00B"
}
.fa-check:before {
    content: "\F00C"
}
.fa-close:before,
.fa-remove:before,
.fa-times:before {
    content: "\F00D"
}
.fa-search-plus:before {
    content: "\F00E"
}
.fa-search-minus:before {
    content: "\F010"
}
.fa-power-off:before {
    content: "\F011"
}
.fa-signal:before {
    content: "\F012"
}
.fa-cog:before,
.fa-gear:before {
    content: "\F013"
}
.fa-trash-o:before {
    content: "\F014"
}
.fa-home:before {
    content: "\F015"
}
.fa-file-o:before {
    content: "\F016"
}
.fa-clock-o:before {
    content: "\F017"
}
.fa-road:before {
    content: "\F018"
}
.fa-download:before {
    content: "\F019"
}
.fa-arrow-circle-o-down:before {
    content: "\F01A"
}
.fa-arrow-circle-o-up:before {
    content: "\F01B"
}
.fa-inbox:before {
    content: "\F01C"
}
.fa-play-circle-o:before {
    content: "\F01D"
}
.fa-repeat:before,
.fa-rotate-right:before {
    content: "\F01E"
}
.fa-refresh:before {
    content: "\F021"
}
.fa-list-alt:before {
    content: "\F022"
}
.fa-lock:before {
    content: "\F023"
}
.fa-flag:before {
    content: "\F024"
}
.fa-headphones:before {
    content: "\F025"
}
.fa-volume-off:before {
    content: "\F026"
}
.fa-volume-down:before {
    content: "\F027"
}
.fa-volume-up:before {
    content: "\F028"
}
.fa-qrcode:before {
    content: "\F029"
}
.fa-barcode:before {
    content: "\F02A"
}
.fa-tag:before {
    content: "\F02B"
}
.fa-tags:before {
    content: "\F02C"
}
.fa-book:before {
    content: "\F02D"
}
.fa-bookmark:before {
    content: "\F02E"
}
.fa-print:before {
    content: "\F02F"
}
.fa-camera:before {
    content: "\F030"
}
.fa-font:before {
    content: "\F031"
}
.fa-bold:before {
    content: "\F032"
}
.fa-italic:before {
    content: "\F033"
}
.fa-text-height:before {
    content: "\F034"
}
.fa-text-width:before {
    content: "\F035"
}
.fa-align-left:before {
    content: "\F036"
}
.fa-align-center:before {
    content: "\F037"
}
.fa-align-right:before {
    content: "\F038"
}
.fa-align-justify:before {
    content: "\F039"
}
.fa-list:before {
    content: "\F03A"
}
.fa-dedent:before,
.fa-outdent:before {
    content: "\F03B"
}
.fa-indent:before {
    content: "\F03C"
}
.fa-video-camera:before {
    content: "\F03D"
}
.fa-image:before,
.fa-photo:before,
.fa-picture-o:before {
    content: "\F03E"
}
.fa-pencil:before {
    content: "\F040"
}
.fa-map-marker:before {
    content: "\F041"
}
.fa-adjust:before {
    content: "\F042"
}
.fa-tint:before {
    content: "\F043"
}
.fa-edit:before,
.fa-pencil-square-o:before {
    content: "\F044"
}
.fa-share-square-o:before {
    content: "\F045"
}
.fa-check-square-o:before {
    content: "\F046"
}
.fa-arrows:before {
    content: "\F047"
}
.fa-step-backward:before {
    content: "\F048"
}
.fa-fast-backward:before {
    content: "\F049"
}
.fa-backward:before {
    content: "\F04A"
}
.fa-play:before {
    content: "\F04B"
}
.fa-pause:before {
    content: "\F04C"
}
.fa-stop:before {
    content: "\F04D"
}
.fa-forward:before {
    content: "\F04E"
}
.fa-fast-forward:before {
    content: "\F050"
}
.fa-step-forward:before {
    content: "\F051"
}
.fa-eject:before {
    content: "\F052"
}
.fa-chevron-left:before {
    content: "\F053"
}
.fa-chevron-right:before {
    content: "\F054"
}
.fa-plus-circle:before {
    content: "\F055"
}
.fa-minus-circle:before {
    content: "\F056"
}
.fa-times-circle:before {
    content: "\F057"
}
.fa-check-circle:before {
    content: "\F058"
}
.fa-question-circle:before {
    content: "\F059"
}
.fa-info-circle:before {
    content: "\F05A"
}
.fa-crosshairs:before {
    content: "\F05B"
}
.fa-times-circle-o:before {
    content: "\F05C"
}
.fa-check-circle-o:before {
    content: "\F05D"
}
.fa-ban:before {
    content: "\F05E"
}
.fa-arrow-left:before {
    content: "\F060"
}
.fa-arrow-right:before {
    content: "\F061"
}
.fa-arrow-up:before {
    content: "\F062"
}
.fa-arrow-down:before {
    content: "\F063"
}
.fa-mail-forward:before,
.fa-share:before {
    content: "\F064"
}
.fa-expand:before {
    content: "\F065"
}
.fa-compress:before {
    content: "\F066"
}
.fa-plus:before {
    content: "\F067"
}
.fa-minus:before {
    content: "\F068"
}
.fa-asterisk:before {
    content: "\F069"
}
.fa-exclamation-circle:before {
    content: "\F06A"
}
.fa-gift:before {
    content: "\F06B"
}
.fa-leaf:before {
    content: "\F06C"
}
.fa-fire:before {
    content: "\F06D"
}
.fa-eye:before {
    content: "\F06E"
}
.fa-eye-slash:before {
    content: "\F070"
}
.fa-exclamation-triangle:before,
.fa-warning:before {
    content: "\F071"
}
.fa-plane:before {
    content: "\F072"
}
.fa-calendar:before {
    content: "\F073"
}
.fa-random:before {
    content: "\F074"
}
.fa-comment:before {
    content: "\F075"
}
.fa-magnet:before {
    content: "\F076"
}
.fa-chevron-up:before {
    content: "\F077"
}
.fa-chevron-down:before {
    content: "\F078"
}
.fa-retweet:before {
    content: "\F079"
}
.fa-shopping-cart:before {
    content: "\F07A"
}
.fa-folder:before {
    content: "\F07B"
}
.fa-folder-open:before {
    content: "\F07C"
}
.fa-arrows-v:before {
    content: "\F07D"
}
.fa-arrows-h:before {
    content: "\F07E"
}
.fa-bar-chart-o:before,
.fa-bar-chart:before {
    content: "\F080"
}
.fa-twitter-square:before {
    content: "\F081"
}
.fa-facebook-square:before {
    content: "\F082"
}
.fa-camera-retro:before {
    content: "\F083"
}
.fa-key:before {
    content: "\F084"
}
.fa-cogs:before,
.fa-gears:before {
    content: "\F085"
}
.fa-comments:before {
    content: "\F086"
}
.fa-thumbs-o-up:before {
    content: "\F087"
}
.fa-thumbs-o-down:before {
    content: "\F088"
}
.fa-star-half:before {
    content: "\F089"
}
.fa-heart-o:before {
    content: "\F08A"
}
.fa-sign-out:before {
    content: "\F08B"
}
.fa-linkedin-square:before {
    content: "\F08C"
}
.fa-thumb-tack:before {
    content: "\F08D"
}
.fa-external-link:before {
    content: "\F08E"
}
.fa-sign-in:before {
    content: "\F090"
}
.fa-trophy:before {
    content: "\F091"
}
.fa-github-square:before {
    content: "\F092"
}
.fa-upload:before {
    content: "\F093"
}
.fa-lemon-o:before {
    content: "\F094"
}
.fa-phone:before {
    content: "\F095"
}
.fa-square-o:before {
    content: "\F096"
}
.fa-bookmark-o:before {
    content: "\F097"
}
.fa-phone-square:before {
    content: "\F098"
}
.fa-twitter:before {
    content: "\F099"
}
.fa-facebook-f:before,
.fa-facebook:before {
    content: "\F09A"
}
.fa-github:before {
    content: "\F09B"
}
.fa-unlock:before {
    content: "\F09C"
}
.fa-credit-card:before {
    content: "\F09D"
}
.fa-feed:before,
.fa-rss:before {
    content: "\F09E"
}
.fa-hdd-o:before {
    content: "\F0A0"
}
.fa-bullhorn:before {
    content: "\F0A1"
}
.fa-bell:before {
    content: "\F0F3"
}
.fa-certificate:before {
    content: "\F0A3"
}
.fa-hand-o-right:before {
    content: "\F0A4"
}
.fa-hand-o-left:before {
    content: "\F0A5"
}
.fa-hand-o-up:before {
    content: "\F0A6"
}
.fa-hand-o-down:before {
    content: "\F0A7"
}
.fa-arrow-circle-left:before {
    content: "\F0A8"
}
.fa-arrow-circle-right:before {
    content: "\F0A9"
}
.fa-arrow-circle-up:before {
    content: "\F0AA"
}
.fa-arrow-circle-down:before {
    content: "\F0AB"
}
.fa-globe:before {
    content: "\F0AC"
}
.fa-wrench:before {
    content: "\F0AD"
}
.fa-tasks:before {
    content: "\F0AE"
}
.fa-filter:before {
    content: "\F0B0"
}
.fa-briefcase:before {
    content: "\F0B1"
}
.fa-arrows-alt:before {
    content: "\F0B2"
}
.fa-group:before,
.fa-users:before {
    content: "\F0C0"
}
.fa-chain:before,
.fa-link:before {
    content: "\F0C1"
}
.fa-cloud:before {
    content: "\F0C2"
}
.fa-flask:before {
    content: "\F0C3"
}
.fa-cut:before,
.fa-scissors:before {
    content: "\F0C4"
}
.fa-copy:before,
.fa-files-o:before {
    content: "\F0C5"
}
.fa-paperclip:before {
    content: "\F0C6"
}
.fa-floppy-o:before,
.fa-save:before {
    content: "\F0C7"
}
.fa-square:before {
    content: "\F0C8"
}
.fa-bars:before,
.fa-navicon:before,
.fa-reorder:before {
    content: "\F0C9"
}
.fa-list-ul:before {
    content: "\F0CA"
}
.fa-list-ol:before {
    content: "\F0CB"
}
.fa-strikethrough:before {
    content: "\F0CC"
}
.fa-underline:before {
    content: "\F0CD"
}
.fa-table:before {
    content: "\F0CE"
}
.fa-magic:before {
    content: "\F0D0"
}
.fa-truck:before {
    content: "\F0D1"
}
.fa-pinterest:before {
    content: "\F0D2"
}
.fa-pinterest-square:before {
    content: "\F0D3"
}
.fa-google-plus-square:before {
    content: "\F0D4"
}
.fa-google-plus:before {
    content: "\F0D5"
}
.fa-money:before {
    content: "\F0D6"
}
.fa-caret-down:before {
    content: "\F0D7"
}
.fa-caret-up:before {
    content: "\F0D8"
}
.fa-caret-left:before {
    content: "\F0D9"
}
.fa-caret-right:before {
    content: "\F0DA"
}
.fa-columns:before {
    content: "\F0DB"
}
.fa-sort:before,
.fa-unsorted:before {
    content: "\F0DC"
}
.fa-sort-desc:before,
.fa-sort-down:before {
    content: "\F0DD"
}
.fa-sort-asc:before,
.fa-sort-up:before {
    content: "\F0DE"
}
.fa-envelope:before {
    content: "\F0E0"
}
.fa-linkedin:before {
    content: "\F0E1"
}
.fa-rotate-left:before,
.fa-undo:before {
    content: "\F0E2"
}
.fa-gavel:before,
.fa-legal:before {
    content: "\F0E3"
}
.fa-dashboard:before,
.fa-tachometer:before {
    content: "\F0E4"
}
.fa-comment-o:before {
    content: "\F0E5"
}
.fa-comments-o:before {
    content: "\F0E6"
}
.fa-bolt:before,
.fa-flash:before {
    content: "\F0E7"
}
.fa-sitemap:before {
    content: "\F0E8"
}
.fa-umbrella:before {
    content: "\F0E9"
}
.fa-clipboard:before,
.fa-paste:before {
    content: "\F0EA"
}
.fa-lightbulb-o:before {
    content: "\F0EB"
}
.fa-exchange:before {
    content: "\F0EC"
}
.fa-cloud-download:before {
    content: "\F0ED"
}
.fa-cloud-upload:before {
    content: "\F0EE"
}
.fa-user-md:before {
    content: "\F0F0"
}
.fa-stethoscope:before {
    content: "\F0F1"
}
.fa-suitcase:before {
    content: "\F0F2"
}
.fa-bell-o:before {
    content: "\F0A2"
}
.fa-coffee:before {
    content: "\F0F4"
}
.fa-cutlery:before {
    content: "\F0F5"
}
.fa-file-text-o:before {
    content: "\F0F6"
}
.fa-building-o:before {
    content: "\F0F7"
}
.fa-hospital-o:before {
    content: "\F0F8"
}
.fa-ambulance:before {
    content: "\F0F9"
}
.fa-medkit:before {
    content: "\F0FA"
}
.fa-fighter-jet:before {
    content: "\F0FB"
}
.fa-beer:before {
    content: "\F0FC"
}
.fa-h-square:before {
    content: "\F0FD"
}
.fa-plus-square:before {
    content: "\F0FE"
}
.fa-angle-double-left:before {
    content: "\F100"
}
.fa-angle-double-right:before {
    content: "\F101"
}
.fa-angle-double-up:before {
    content: "\F102"
}
.fa-angle-double-down:before {
    content: "\F103"
}
.fa-angle-left:before {
    content: "\F104"
}
.fa-angle-right:before {
    content: "\F105"
}
.fa-angle-up:before {
    content: "\F106"
}
.fa-angle-down:before {
    content: "\F107"
}
.fa-desktop:before {
    content: "\F108"
}
.fa-laptop:before {
    content: "\F109"
}
.fa-tablet:before {
    content: "\F10A"
}
.fa-mobile-phone:before,
.fa-mobile:before {
    content: "\F10B"
}
.fa-circle-o:before {
    content: "\F10C"
}
.fa-quote-left:before {
    content: "\F10D"
}
.fa-quote-right:before {
    content: "\F10E"
}
.fa-spinner:before {
    content: "\F110"
}
.fa-circle:before {
    content: "\F111"
}
.fa-mail-reply:before,
.fa-reply:before {
    content: "\F112"
}
.fa-github-alt:before {
    content: "\F113"
}
.fa-folder-o:before {
    content: "\F114"
}
.fa-folder-open-o:before {
    content: "\F115"
}
.fa-smile-o:before {
    content: "\F118"
}
.fa-frown-o:before {
    content: "\F119"
}
.fa-meh-o:before {
    content: "\F11A"
}
.fa-gamepad:before {
    content: "\F11B"
}
.fa-keyboard-o:before {
    content: "\F11C"
}
.fa-flag-o:before {
    content: "\F11D"
}
.fa-flag-checkered:before {
    content: "\F11E"
}
.fa-terminal:before {
    content: "\F120"
}
.fa-code:before {
    content: "\F121"
}
.fa-mail-reply-all:before,
.fa-reply-all:before {
    content: "\F122"
}
.fa-star-half-empty:before,
.fa-star-half-full:before,
.fa-star-half-o:before {
    content: "\F123"
}
.fa-location-arrow:before {
    content: "\F124"
}
.fa-crop:before {
    content: "\F125"
}
.fa-code-fork:before {
    content: "\F126"
}
.fa-chain-broken:before,
.fa-unlink:before {
    content: "\F127"
}
.fa-question:before {
    content: "\F128"
}
.fa-info:before {
    content: "\F129"
}
.fa-exclamation:before {
    content: "\F12A"
}
.fa-superscript:before {
    content: "\F12B"
}
.fa-subscript:before {
    content: "\F12C"
}
.fa-eraser:before {
    content: "\F12D"
}
.fa-puzzle-piece:before {
    content: "\F12E"
}
.fa-microphone:before {
    content: "\F130"
}
.fa-microphone-slash:before {
    content: "\F131"
}
.fa-shield:before {
    content: "\F132"
}
.fa-calendar-o:before {
    content: "\F133"
}
.fa-fire-extinguisher:before {
    content: "\F134"
}
.fa-rocket:before {
    content: "\F135"
}
.fa-maxcdn:before {
    content: "\F136"
}
.fa-chevron-circle-left:before {
    content: "\F137"
}
.fa-chevron-circle-right:before {
    content: "\F138"
}
.fa-chevron-circle-up:before {
    content: "\F139"
}
.fa-chevron-circle-down:before {
    content: "\F13A"
}
.fa-html5:before {
    content: "\F13B"
}
.fa-css3:before {
    content: "\F13C"
}
.fa-anchor:before {
    content: "\F13D"
}
.fa-unlock-alt:before {
    content: "\F13E"
}
.fa-bullseye:before {
    content: "\F140"
}
.fa-ellipsis-h:before {
    content: "\F141"
}
.fa-ellipsis-v:before {
    content: "\F142"
}
.fa-rss-square:before {
    content: "\F143"
}
.fa-play-circle:before {
    content: "\F144"
}
.fa-ticket:before {
    content: "\F145"
}
.fa-minus-square:before {
    content: "\F146"
}
.fa-minus-square-o:before {
    content: "\F147"
}
.fa-level-up:before {
    content: "\F148"
}
.fa-level-down:before {
    content: "\F149"
}
.fa-check-square:before {
    content: "\F14A"
}
.fa-pencil-square:before {
    content: "\F14B"
}
.fa-external-link-square:before {
    content: "\F14C"
}
.fa-share-square:before {
    content: "\F14D"
}
.fa-compass:before {
    content: "\F14E"
}
.fa-caret-square-o-down:before,
.fa-toggle-down:before {
    content: "\F150"
}
.fa-caret-square-o-up:before,
.fa-toggle-up:before {
    content: "\F151"
}
.fa-caret-square-o-right:before,
.fa-toggle-right:before {
    content: "\F152"
}
.fa-eur:before,
.fa-euro:before {
    content: "\F153"
}
.fa-gbp:before {
    content: "\F154"
}
.fa-dollar:before,
.fa-usd:before {
    content: "\F155"
}
.fa-inr:before,
.fa-rupee:before {
    content: "\F156"
}
.fa-cny:before,
.fa-jpy:before,
.fa-rmb:before,
.fa-yen:before {
    content: "\F157"
}
.fa-rouble:before,
.fa-rub:before,
.fa-ruble:before {
    content: "\F158"
}
.fa-krw:before,
.fa-won:before {
    content: "\F159"
}
.fa-bitcoin:before,
.fa-btc:before {
    content: "\F15A"
}
.fa-file:before {
    content: "\F15B"
}
.fa-file-text:before {
    content: "\F15C"
}
.fa-sort-alpha-asc:before {
    content: "\F15D"
}
.fa-sort-alpha-desc:before {
    content: "\F15E"
}
.fa-sort-amount-asc:before {
    content: "\F160"
}
.fa-sort-amount-desc:before {
    content: "\F161"
}
.fa-sort-numeric-asc:before {
    content: "\F162"
}
.fa-sort-numeric-desc:before {
    content: "\F163"
}
.fa-thumbs-up:before {
    content: "\F164"
}
.fa-thumbs-down:before {
    content: "\F165"
}
.fa-youtube-square:before {
    content: "\F166"
}
.fa-youtube:before {
    content: "\F167"
}
.fa-xing:before {
    content: "\F168"
}
.fa-xing-square:before {
    content: "\F169"
}
.fa-youtube-play:before {
    content: "\F16A"
}
.fa-dropbox:before {
    content: "\F16B"
}
.fa-stack-overflow:before {
    content: "\F16C"
}
.fa-instagram:before {
    content: "\F16D"
}
.fa-flickr:before {
    content: "\F16E"
}
.fa-adn:before {
    content: "\F170"
}
.fa-bitbucket:before {
    content: "\F171"
}
.fa-bitbucket-square:before {
    content: "\F172"
}
.fa-tumblr:before {
    content: "\F173"
}
.fa-tumblr-square:before {
    content: "\F174"
}
.fa-long-arrow-down:before {
    content: "\F175"
}
.fa-long-arrow-up:before {
    content: "\F176"
}
.fa-long-arrow-left:before {
    content: "\F177"
}
.fa-long-arrow-right:before {
    content: "\F178"
}
.fa-apple:before {
    content: "\F179"
}
.fa-windows:before {
    content: "\F17A"
}
.fa-android:before {
    content: "\F17B"
}
.fa-linux:before {
    content: "\F17C"
}
.fa-dribbble:before {
    content: "\F17D"
}
.fa-skype:before {
    content: "\F17E"
}
.fa-foursquare:before {
    content: "\F180"
}
.fa-trello:before {
    content: "\F181"
}
.fa-female:before {
    content: "\F182"
}
.fa-male:before {
    content: "\F183"
}
.fa-gittip:before,
.fa-gratipay:before {
    content: "\F184"
}
.fa-sun-o:before {
    content: "\F185"
}
.fa-moon-o:before {
    content: "\F186"
}
.fa-archive:before {
    content: "\F187"
}
.fa-bug:before {
    content: "\F188"
}
.fa-vk:before {
    content: "\F189"
}
.fa-weibo:before {
    content: "\F18A"
}
.fa-renren:before {
    content: "\F18B"
}
.fa-pagelines:before {
    content: "\F18C"
}
.fa-stack-exchange:before {
    content: "\F18D"
}
.fa-arrow-circle-o-right:before {
    content: "\F18E"
}
.fa-arrow-circle-o-left:before {
    content: "\F190"
}
.fa-caret-square-o-left:before,
.fa-toggle-left:before {
    content: "\F191"
}
.fa-dot-circle-o:before {
    content: "\F192"
}
.fa-wheelchair:before {
    content: "\F193"
}
.fa-vimeo-square:before {
    content: "\F194"
}
.fa-try:before,
.fa-turkish-lira:before {
    content: "\F195"
}
.fa-plus-square-o:before {
    content: "\F196"
}
.fa-space-shuttle:before {
    content: "\F197"
}
.fa-slack:before {
    content: "\F198"
}
.fa-envelope-square:before {
    content: "\F199"
}
.fa-wordpress:before {
    content: "\F19A"
}
.fa-openid:before {
    content: "\F19B"
}
.fa-bank:before,
.fa-institution:before,
.fa-university:before {
    content: "\F19C"
}
.fa-graduation-cap:before,
.fa-mortar-board:before {
    content: "\F19D"
}
.fa-yahoo:before {
    content: "\F19E"
}
.fa-google:before {
    content: "\F1A0"
}
.fa-reddit:before {
    content: "\F1A1"
}
.fa-reddit-square:before {
    content: "\F1A2"
}
.fa-stumbleupon-circle:before {
    content: "\F1A3"
}
.fa-stumbleupon:before {
    content: "\F1A4"
}
.fa-delicious:before {
    content: "\F1A5"
}
.fa-digg:before {
    content: "\F1A6"
}
.fa-pied-piper-pp:before {
    content: "\F1A7"
}
.fa-pied-piper-alt:before {
    content: "\F1A8"
}
.fa-drupal:before {
    content: "\F1A9"
}
.fa-joomla:before {
    content: "\F1AA"
}
.fa-language:before {
    content: "\F1AB"
}
.fa-fax:before {
    content: "\F1AC"
}
.fa-building:before {
    content: "\F1AD"
}
.fa-child:before {
    content: "\F1AE"
}
.fa-paw:before {
    content: "\F1B0"
}
.fa-spoon:before {
    content: "\F1B1"
}
.fa-cube:before {
    content: "\F1B2"
}
.fa-cubes:before {
    content: "\F1B3"
}
.fa-behance:before {
    content: "\F1B4"
}
.fa-behance-square:before {
    content: "\F1B5"
}
.fa-steam:before {
    content: "\F1B6"
}
.fa-steam-square:before {
    content: "\F1B7"
}
.fa-recycle:before {
    content: "\F1B8"
}
.fa-automobile:before,
.fa-car:before {
    content: "\F1B9"
}
.fa-cab:before,
.fa-taxi:before {
    content: "\F1BA"
}
.fa-tree:before {
    content: "\F1BB"
}
.fa-spotify:before {
    content: "\F1BC"
}
.fa-deviantart:before {
    content: "\F1BD"
}
.fa-soundcloud:before {
    content: "\F1BE"
}
.fa-database:before {
    content: "\F1C0"
}
.fa-file-pdf-o:before {
    content: "\F1C1"
}
.fa-file-word-o:before {
    content: "\F1C2"
}
.fa-file-excel-o:before {
    content: "\F1C3"
}
.fa-file-powerpoint-o:before {
    content: "\F1C4"
}
.fa-file-image-o:before,
.fa-file-photo-o:before,
.fa-file-picture-o:before {
    content: "\F1C5"
}
.fa-file-archive-o:before,
.fa-file-zip-o:before {
    content: "\F1C6"
}
.fa-file-audio-o:before,
.fa-file-sound-o:before {
    content: "\F1C7"
}
.fa-file-movie-o:before,
.fa-file-video-o:before {
    content: "\F1C8"
}
.fa-file-code-o:before {
    content: "\F1C9"
}
.fa-vine:before {
    content: "\F1CA"
}
.fa-codepen:before {
    content: "\F1CB"
}
.fa-jsfiddle:before {
    content: "\F1CC"
}
.fa-life-bouy:before,
.fa-life-buoy:before,
.fa-life-ring:before,
.fa-life-saver:before,
.fa-support:before {
    content: "\F1CD"
}
.fa-circle-o-notch:before {
    content: "\F1CE"
}
.fa-ra:before,
.fa-rebel:before,
.fa-resistance:before {
    content: "\F1D0"
}
.fa-empire:before,
.fa-ge:before {
    content: "\F1D1"
}
.fa-git-square:before {
    content: "\F1D2"
}
.fa-git:before {
    content: "\F1D3"
}
.fa-hacker-news:before,
.fa-y-combinator-square:before,
.fa-yc-square:before {
    content: "\F1D4"
}
.fa-tencent-weibo:before {
    content: "\F1D5"
}
.fa-qq:before {
    content: "\F1D6"
}
.fa-wechat:before,
.fa-weixin:before {
    content: "\F1D7"
}
.fa-paper-plane:before,
.fa-send:before {
    content: "\F1D8"
}
.fa-paper-plane-o:before,
.fa-send-o:before {
    content: "\F1D9"
}
.fa-history:before {
    content: "\F1DA"
}
.fa-circle-thin:before {
    content: "\F1DB"
}
.fa-header:before {
    content: "\F1DC"
}
.fa-paragraph:before {
    content: "\F1DD"
}
.fa-sliders:before {
    content: "\F1DE"
}
.fa-share-alt:before {
    content: "\F1E0"
}
.fa-share-alt-square:before {
    content: "\F1E1"
}
.fa-bomb:before {
    content: "\F1E2"
}
.fa-futbol-o:before,
.fa-soccer-ball-o:before {
    content: "\F1E3"
}
.fa-tty:before {
    content: "\F1E4"
}
.fa-binoculars:before {
    content: "\F1E5"
}
.fa-plug:before {
    content: "\F1E6"
}
.fa-slideshare:before {
    content: "\F1E7"
}
.fa-twitch:before {
    content: "\F1E8"
}
.fa-yelp:before {
    content: "\F1E9"
}
.fa-newspaper-o:before {
    content: "\F1EA"
}
.fa-wifi:before {
    content: "\F1EB"
}
.fa-calculator:before {
    content: "\F1EC"
}
.fa-paypal:before {
    content: "\F1ED"
}
.fa-google-wallet:before {
    content: "\F1EE"
}
.fa-cc-visa:before {
    content: "\F1F0"
}
.fa-cc-mastercard:before {
    content: "\F1F1"
}
.fa-cc-discover:before {
    content: "\F1F2"
}
.fa-cc-amex:before {
    content: "\F1F3"
}
.fa-cc-paypal:before {
    content: "\F1F4"
}
.fa-cc-stripe:before {
    content: "\F1F5"
}
.fa-bell-slash:before {
    content: "\F1F6"
}
.fa-bell-slash-o:before {
    content: "\F1F7"
}
.fa-trash:before {
    content: "\F1F8"
}
.fa-copyright:before {
    content: "\F1F9"
}
.fa-at:before {
    content: "\F1FA"
}
.fa-eyedropper:before {
    content: "\F1FB"
}
.fa-paint-brush:before {
    content: "\F1FC"
}
.fa-birthday-cake:before {
    content: "\F1FD"
}
.fa-area-chart:before {
    content: "\F1FE"
}
.fa-pie-chart:before {
    content: "\F200"
}
.fa-line-chart:before {
    content: "\F201"
}
.fa-lastfm:before {
    content: "\F202"
}
.fa-lastfm-square:before {
    content: "\F203"
}
.fa-toggle-off:before {
    content: "\F204"
}
.fa-toggle-on:before {
    content: "\F205"
}
.fa-bicycle:before {
    content: "\F206"
}
.fa-bus:before {
    content: "\F207"
}
.fa-ioxhost:before {
    content: "\F208"
}
.fa-angellist:before {
    content: "\F209"
}
.fa-cc:before {
    content: "\F20A"
}
.fa-ils:before,
.fa-shekel:before,
.fa-sheqel:before {
    content: "\F20B"
}
.fa-meanpath:before {
    content: "\F20C"
}
.fa-buysellads:before {
    content: "\F20D"
}
.fa-connectdevelop:before {
    content: "\F20E"
}
.fa-dashcube:before {
    content: "\F210"
}
.fa-forumbee:before {
    content: "\F211"
}
.fa-leanpub:before {
    content: "\F212"
}
.fa-sellsy:before {
    content: "\F213"
}
.fa-shirtsinbulk:before {
    content: "\F214"
}
.fa-simplybuilt:before {
    content: "\F215"
}
.fa-skyatlas:before {
    content: "\F216"
}
.fa-cart-plus:before {
    content: "\F217"
}
.fa-cart-arrow-down:before {
    content: "\F218"
}
.fa-diamond:before {
    content: "\F219"
}
.fa-ship:before {
    content: "\F21A"
}
.fa-user-secret:before {
    content: "\F21B"
}
.fa-motorcycle:before {
    content: "\F21C"
}
.fa-street-view:before {
    content: "\F21D"
}
.fa-heartbeat:before {
    content: "\F21E"
}
.fa-venus:before {
    content: "\F221"
}
.fa-mars:before {
    content: "\F222"
}
.fa-mercury:before {
    content: "\F223"
}
.fa-intersex:before,
.fa-transgender:before {
    content: "\F224"
}
.fa-transgender-alt:before {
    content: "\F225"
}
.fa-venus-double:before {
    content: "\F226"
}
.fa-mars-double:before {
    content: "\F227"
}
.fa-venus-mars:before {
    content: "\F228"
}
.fa-mars-stroke:before {
    content: "\F229"
}
.fa-mars-stroke-v:before {
    content: "\F22A"
}
.fa-mars-stroke-h:before {
    content: "\F22B"
}
.fa-neuter:before {
    content: "\F22C"
}
.fa-genderless:before {
    content: "\F22D"
}
.fa-facebook-official:before {
    content: "\F230"
}
.fa-pinterest-p:before {
    content: "\F231"
}
.fa-whatsapp:before {
    content: "\F232"
}
.fa-server:before {
    content: "\F233"
}
.fa-user-plus:before {
    content: "\F234"
}
.fa-user-times:before {
    content: "\F235"
}
.fa-bed:before,
.fa-hotel:before {
    content: "\F236"
}
.fa-viacoin:before {
    content: "\F237"
}
.fa-train:before {
    content: "\F238"
}
.fa-subway:before {
    content: "\F239"
}
.fa-medium:before {
    content: "\F23A"
}
.fa-y-combinator:before,
.fa-yc:before {
    content: "\F23B"
}
.fa-optin-monster:before {
    content: "\F23C"
}
.fa-opencart:before {
    content: "\F23D"
}
.fa-expeditedssl:before {
    content: "\F23E"
}
.fa-battery-4:before,
.fa-battery-full:before,
.fa-battery:before {
    content: "\F240"
}
.fa-battery-3:before,
.fa-battery-three-quarters:before {
    content: "\F241"
}
.fa-battery-2:before,
.fa-battery-half:before {
    content: "\F242"
}
.fa-battery-1:before,
.fa-battery-quarter:before {
    content: "\F243"
}
.fa-battery-0:before,
.fa-battery-empty:before {
    content: "\F244"
}
.fa-mouse-pointer:before {
    content: "\F245"
}
.fa-i-cursor:before {
    content: "\F246"
}
.fa-object-group:before {
    content: "\F247"
}
.fa-object-ungroup:before {
    content: "\F248"
}
.fa-sticky-note:before {
    content: "\F249"
}
.fa-sticky-note-o:before {
    content: "\F24A"
}
.fa-cc-jcb:before {
    content: "\F24B"
}
.fa-cc-diners-club:before {
    content: "\F24C"
}
.fa-clone:before {
    content: "\F24D"
}
.fa-balance-scale:before {
    content: "\F24E"
}
.fa-hourglass-o:before {
    content: "\F250"
}
.fa-hourglass-1:before,
.fa-hourglass-start:before {
    content: "\F251"
}
.fa-hourglass-2:before,
.fa-hourglass-half:before {
    content: "\F252"
}
.fa-hourglass-3:before,
.fa-hourglass-end:before {
    content: "\F253"
}
.fa-hourglass:before {
    content: "\F254"
}
.fa-hand-grab-o:before,
.fa-hand-rock-o:before {
    content: "\F255"
}
.fa-hand-paper-o:before,
.fa-hand-stop-o:before {
    content: "\F256"
}
.fa-hand-scissors-o:before {
    content: "\F257"
}
.fa-hand-lizard-o:before {
    content: "\F258"
}
.fa-hand-spock-o:before {
    content: "\F259"
}
.fa-hand-pointer-o:before {
    content: "\F25A"
}
.fa-hand-peace-o:before {
    content: "\F25B"
}
.fa-trademark:before {
    content: "\F25C"
}
.fa-registered:before {
    content: "\F25D"
}
.fa-creative-commons:before {
    content: "\F25E"
}
.fa-gg:before {
    content: "\F260"
}
.fa-gg-circle:before {
    content: "\F261"
}
.fa-tripadvisor:before {
    content: "\F262"
}
.fa-odnoklassniki:before {
    content: "\F263"
}
.fa-odnoklassniki-square:before {
    content: "\F264"
}
.fa-get-pocket:before {
    content: "\F265"
}
.fa-wikipedia-w:before {
    content: "\F266"
}
.fa-safari:before {
    content: "\F267"
}
.fa-chrome:before {
    content: "\F268"
}
.fa-firefox:before {
    content: "\F269"
}
.fa-opera:before {
    content: "\F26A"
}
.fa-internet-explorer:before {
    content: "\F26B"
}
.fa-television:before,
.fa-tv:before {
    content: "\F26C"
}
.fa-contao:before {
    content: "\F26D"
}
.fa-500px:before {
    content: "\F26E"
}
.fa-amazon:before {
    content: "\F270"
}
.fa-calendar-plus-o:before {
    content: "\F271"
}
.fa-calendar-minus-o:before {
    content: "\F272"
}
.fa-calendar-times-o:before {
    content: "\F273"
}
.fa-calendar-check-o:before {
    content: "\F274"
}
.fa-industry:before {
    content: "\F275"
}
.fa-map-pin:before {
    content: "\F276"
}
.fa-map-signs:before {
    content: "\F277"
}
.fa-map-o:before {
    content: "\F278"
}
.fa-map:before {
    content: "\F279"
}
.fa-commenting:before {
    content: "\F27A"
}
.fa-commenting-o:before {
    content: "\F27B"
}
.fa-houzz:before {
    content: "\F27C"
}
.fa-vimeo:before {
    content: "\F27D"
}
.fa-black-tie:before {
    content: "\F27E"
}
.fa-fonticons:before {
    content: "\F280"
}
.fa-reddit-alien:before {
    content: "\F281"
}
.fa-edge:before {
    content: "\F282"
}
.fa-credit-card-alt:before {
    content: "\F283"
}
.fa-codiepie:before {
    content: "\F284"
}
.fa-modx:before {
    content: "\F285"
}
.fa-fort-awesome:before {
    content: "\F286"
}
.fa-usb:before {
    content: "\F287"
}
.fa-product-hunt:before {
    content: "\F288"
}
.fa-mixcloud:before {
    content: "\F289"
}
.fa-scribd:before {
    content: "\F28A"
}
.fa-pause-circle:before {
    content: "\F28B"
}
.fa-pause-circle-o:before {
    content: "\F28C"
}
.fa-stop-circle:before {
    content: "\F28D"
}
.fa-stop-circle-o:before {
    content: "\F28E"
}
.fa-shopping-bag:before {
    content: "\F290"
}
.fa-shopping-basket:before {
    content: "\F291"
}
.fa-hashtag:before {
    content: "\F292"
}
.fa-bluetooth:before {
    content: "\F293"
}
.fa-bluetooth-b:before {
    content: "\F294"
}
.fa-percent:before {
    content: "\F295"
}
.fa-gitlab:before {
    content: "\F296"
}
.fa-wpbeginner:before {
    content: "\F297"
}
.fa-wpforms:before {
    content: "\F298"
}
.fa-envira:before {
    content: "\F299"
}
.fa-universal-access:before {
    content: "\F29A"
}
.fa-wheelchair-alt:before {
    content: "\F29B"
}
.fa-question-circle-o:before {
    content: "\F29C"
}
.fa-blind:before {
    content: "\F29D"
}
.fa-audio-description:before {
    content: "\F29E"
}
.fa-volume-control-phone:before {
    content: "\F2A0"
}
.fa-braille:before {
    content: "\F2A1"
}
.fa-assistive-listening-systems:before {
    content: "\F2A2"
}
.fa-american-sign-language-interpreting:before,
.fa-asl-interpreting:before {
    content: "\F2A3"
}
.fa-deaf:before,
.fa-deafness:before,
.fa-hard-of-hearing:before {
    content: "\F2A4"
}
.fa-glide:before {
    content: "\F2A5"
}
.fa-glide-g:before {
    content: "\F2A6"
}
.fa-sign-language:before,
.fa-signing:before {
    content: "\F2A7"
}
.fa-low-vision:before {
    content: "\F2A8"
}
.fa-viadeo:before {
    content: "\F2A9"
}
.fa-viadeo-square:before {
    content: "\F2AA"
}
.fa-snapchat:before {
    content: "\F2AB"
}
.fa-snapchat-ghost:before {
    content: "\F2AC"
}
.fa-snapchat-square:before {
    content: "\F2AD"
}
.fa-pied-piper:before {
    content: "\F2AE"
}
.fa-first-order:before {
    content: "\F2B0"
}
.fa-yoast:before {
    content: "\F2B1"
}
.fa-themeisle:before {
    content: "\F2B2"
}
.fa-google-plus-circle:before,
.fa-google-plus-official:before {
    content: "\F2B3"
}
.fa-fa:before,
.fa-font-awesome:before {
    content: "\F2B4"
}
.fa-handshake-o:before {
    content: "\F2B5"
}
.fa-envelope-open:before {
    content: "\F2B6"
}
.fa-envelope-open-o:before {
    content: "\F2B7"
}
.fa-linode:before {
    content: "\F2B8"
}
.fa-address-book:before {
    content: "\F2B9"
}
.fa-address-book-o:before {
    content: "\F2BA"
}
.fa-address-card:before,
.fa-vcard:before {
    content: "\F2BB"
}
.fa-address-card-o:before,
.fa-vcard-o:before {
    content: "\F2BC"
}
.fa-user-circle:before {
    content: "\F2BD"
}
.fa-user-circle-o:before {
    content: "\F2BE"
}
.fa-user-o:before {
    content: "\F2C0"
}
.fa-id-badge:before {
    content: "\F2C1"
}
.fa-drivers-license:before,
.fa-id-card:before {
    content: "\F2C2"
}
.fa-drivers-license-o:before,
.fa-id-card-o:before {
    content: "\F2C3"
}
.fa-quora:before {
    content: "\F2C4"
}
.fa-free-code-camp:before {
    content: "\F2C5"
}
.fa-telegram:before {
    content: "\F2C6"
}
.fa-thermometer-4:before,
.fa-thermometer-full:before,
.fa-thermometer:before {
    content: "\F2C7"
}
.fa-thermometer-3:before,
.fa-thermometer-three-quarters:before {
    content: "\F2C8"
}
.fa-thermometer-2:before,
.fa-thermometer-half:before {
    content: "\F2C9"
}
.fa-thermometer-1:before,
.fa-thermometer-quarter:before {
    content: "\F2CA"
}
.fa-thermometer-0:before,
.fa-thermometer-empty:before {
    content: "\F2CB"
}
.fa-shower:before {
    content: "\F2CC"
}
.fa-bath:before,
.fa-bathtub:before,
.fa-s15:before {
    content: "\F2CD"
}
.fa-podcast:before {
    content: "\F2CE"
}
.fa-window-maximize:before {
    content: "\F2D0"
}
.fa-window-minimize:before {
    content: "\F2D1"
}
.fa-window-restore:before {
    content: "\F2D2"
}
.fa-times-rectangle:before,
.fa-window-close:before {
    content: "\F2D3"
}
.fa-times-rectangle-o:before,
.fa-window-close-o:before {
    content: "\F2D4"
}
.fa-bandcamp:before {
    content: "\F2D5"
}
.fa-grav:before {
    content: "\F2D6"
}
.fa-etsy:before {
    content: "\F2D7"
}
.fa-imdb:before {
    content: "\F2D8"
}
.fa-ravelry:before {
    content: "\F2D9"
}
.fa-eercast:before {
    content: "\F2DA"
}
.fa-microchip:before {
    content: "\F2DB"
}
.fa-snowflake-o:before {
    content: "\F2DC"
}
.fa-superpowers:before {
    content: "\F2DD"
}
.fa-wpexplorer:before {
    content: "\F2DE"
}
.fa-meetup:before {
    content: "\F2E0"
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto
}
.e-logo {
    font-weight: 700;
    display: block
}
.e-logo small {
    display: block;
    position: relative;
    line-height: 12px;
    font-size: 12px;
    top: -4px;
    text-align: center
}
.e-navbar__cont {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    position: relative
}
.e-navbar__title {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    -ms-flex-order: 2;
    order: 2;
    top: 0
}
.e-navbar__nav {
    position: relative
}
.e-navbar__nav > div {
    width: 100%
}
.e-navbar__actions {
    position: relative;
    -ms-flex-order: 3;
    order: 3
}
.e-navbar__actions:empty {
    display: none
}
.e-navbar .navbar-toggler {
    position: relative;
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
    border-radius: 3px;
    color: #a5adb6;
    z-index: 20;
    -ms-flex-order: 1;
    order: 1
}
.e-navbar .navbar-brand {
    -ms-flex-order: 1;
    order: 1;
    padding: 0
}
.e-navbar .navbar-brand:empty {
    display: none !important
}
.e-navbar .navbar-brand,
.e-navbar .navbar-brand a,
.e-navbar .navbar-brand a:focus,
.e-navbar .navbar-brand a:hover {
    text-decoration: none;
    color: #888
}
.e-navbar .navbar-nav .nav-item:not(:last-child) {
    margin-right: 0.5rem
}
.e-navbar .navbar-text {
    color: #888
}
.e-navbar .navbar-text a {
    color: #a5adb6;
    text-decoration: none
}
.e-navbar .navbar-text a:focus,
.e-navbar .navbar-text a:hover {
    color: #686e71;
    text-decoration: none
}
.e-navbar .btn-group {
    font-size: 0
}
.e-navbar--nav-in-center .e-navbar__nav .navbar-nav {
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%
}
.e-navbar--brand-in-center .navbar-brand {
    position: absolute;
    width: 100%;
    text-align: center;
    left: 0;
    top: 0
}
.e-navlist .nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap
}
.e-navlist .nav-item:not(:last-child) {
    margin-bottom: 3px
}
.e-navlist .nav-link.disabled {
    opacity: .5
}
.e-navlist.e-navlist--active-bg .nav-link {
    color: #868e96;
    background-color: transparent;
    padding: 0.5rem;
    border-radius: 0.25em;
    white-space: nowrap;
    -webkit-transition: background-color 0.15s linear;
    -o-transition: background-color 0.15s linear;
    transition: background-color 0.15s linear
}
.e-navlist.e-navlist--active-bg .active > .nav-link,
.e-navlist.e-navlist--active-bg .nav-link.active,
.e-navlist.e-navlist--active-bg .nav-link:hover {
    color: #fff;
    background-color: #868e96
}
.e-navlist.e-navlist--active-bold .nav-link {
    color: #686e71
}
.e-navlist.e-navlist--active-bold .active > .nav-link,
.e-navlist.e-navlist--active-bold .nav-link.active {
    font-weight: 700
}
.e-navline .nav-item:not(:last-child) {
    margin-right: 0.3rem
}
.e-navline .nav-link {
    padding: 1rem 0.5rem;
    position: relative
}
.e-navline--arrow .nav {
    position: relative
}
.e-navline--arrow .nav:after,
.e-navline--arrow .nav:before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 1rem;
    border: 10px solid transparent
}
.e-navline--arrow .nav:before {
    border-top-color: #e9ecef
}
.e-navline--arrow .nav:after {
    bottom: -19px;
    border-top-color: #fff
}
.e-tabs .nav-tabs {
    outline: 0
}
.e-tabs .nav-tabs .nav-item {
    margin: 0
}
.e-tabs .nav-tabs .nav-link {
    position: relative;
    border: 0;
    color: #686e71
}
.e-tabs .nav-tabs .nav-link.disabled {
    opacity: .5;
    pointer-events: none
}
.e-tabs .nav-tabs .active > .nav-link,
.e-tabs .nav-tabs .nav-link.active,
.e-tabs .nav-tabs .nav-link:hover {
    background-color: transparent
}
.e-tabs .nav-tabs .active > .nav-link:after,
.e-tabs .nav-tabs .nav-link.active:after,
.e-tabs .nav-tabs .nav-link:hover:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    border-top: 2px solid #ced4da
}
.e-tabs--nested .nav-item:not(:last-child) {
    margin-right: 1rem
}
.e-tabs--nested .nav-link {
    padding: 1rem 0.5rem
}
.e-tabs--nested .nav-tabs {
    outline: 0
}
.e-tabs--nested .nav-tabs .nav-item:not(:last-child) {
    margin-right: 1rem
}
.e-tabs--nested .nav-tabs .nav-link {
    border: 0
}
.e-tabs--nested .nav-tabs .active > .nav-link:after,
.e-tabs--nested .nav-tabs .active > .nav-link:before,
.e-tabs--nested .nav-tabs .nav-link.active:after,
.e-tabs--nested .nav-tabs .nav-link.active:before,
.e-tabs--nested .nav-tabs .nav-link:hover:after,
.e-tabs--nested .nav-tabs .nav-link:hover:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -6px;
    border: 6px solid transparent;
    width: 0
}
.e-tabs--nested .nav-tabs .active > .nav-link:before,
.e-tabs--nested .nav-tabs .nav-link.active:before,
.e-tabs--nested .nav-tabs .nav-link:hover:before {
    border-bottom-color: #e9ecef
}
.e-tabs--nested .nav-tabs .active > .nav-link:after,
.e-tabs--nested .nav-tabs .nav-link.active:after,
.e-tabs--nested .nav-tabs .nav-link:hover:after {
    bottom: -1px
}
.e-tabs--nested .nav-tabs .nav-link:hover:after {
    border-bottom-color: #e9ecef
}
.e-tabs--nested .nav-tabs .active > .nav-link:after,
.e-tabs--nested .nav-tabs .nav-link.active:after {
    border-bottom-color: #fff
}
.react-bootstrap-table table {
    table-layout: fixed
}
.react-bootstrap-table th.sortable {
    cursor: pointer
}
.react-bootstrap-table th .order > .dropdown > .caret {
    margin: 10px 0 10px 5px;
    color: #ccc
}
.react-bootstrap-table th .order > .dropup > .caret {
    margin: 10px 0;
    color: #ccc
}
.react-bootstrap-table th > .react-bootstrap-table-sort-order > .caret {
    margin: 10px 6.5px
}
.react-bootstrap-table th[data-row-selection] {
    width: 30px
}
.react-bootstrap-table td.react-bs-table-no-data {
    text-align: center
}
.react-bootstrap-table td.react-bootstrap-table-editing-cell .animated {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}
.react-bootstrap-table td.react-bootstrap-table-editing-cell .animated.bounceIn,
.react-bootstrap-table td.react-bootstrap-table-editing-cell .animated.bounceOut {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s
}
.react-bootstrap-table td.react-bootstrap-table-editing-cell .animated.shake {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s
}
@-webkit-keyframes shake {
    0%,
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
    10%,
    50%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }
    30%,
    70% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
}
@keyframes shake {
    0%,
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
    10%,
    50%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }
    30%,
    70% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
}
.react-bootstrap-table td.react-bootstrap-table-editing-cell .shake {
    -webkit-animation-name: shake;
    animation-name: shake
}
@-webkit-keyframes bounceIn {
    0%,
    20%,
    40%,
    60%,
    80%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, .61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, .61, 0.355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, .3, 0.3);
        transform: scale3d(0.3, .3, 0.3)
    }
    20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }
    40% {
        -webkit-transform: scale3d(0.9, .9, 0.9);
        transform: scale3d(0.9, .9, 0.9)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03)
    }
    80% {
        -webkit-transform: scale3d(0.97, .97, 0.97);
        transform: scale3d(0.97, .97, 0.97)
    }
    to {
        opacity: 1;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}
@keyframes bounceIn {
    0%,
    20%,
    40%,
    60%,
    80%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, .61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, .61, 0.355, 1)
    }
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, .3, 0.3);
        transform: scale3d(0.3, .3, 0.3)
    }
    20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }
    40% {
        -webkit-transform: scale3d(0.9, .9, 0.9);
        transform: scale3d(0.9, .9, 0.9)
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03)
    }
    80% {
        -webkit-transform: scale3d(0.97, .97, 0.97);
        transform: scale3d(0.97, .97, 0.97)
    }
    to {
        opacity: 1;
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}
.react-bootstrap-table td.react-bootstrap-table-editing-cell .bounceIn {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn
}
@-webkit-keyframes bounceOut {
    20% {
        -webkit-transform: scale3d(0.9, .9, 0.9);
        transform: scale3d(0.9, .9, 0.9)
    }
    50%,
    55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }
    to {
        opacity: 0;
        -webkit-transform: scale3d(0.3, .3, 0.3);
        transform: scale3d(0.3, .3, 0.3)
    }
}
@keyframes bounceOut {
    20% {
        -webkit-transform: scale3d(0.9, .9, 0.9);
        transform: scale3d(0.9, .9, 0.9)
    }
    50%,
    55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1)
    }
    to {
        opacity: 0;
        -webkit-transform: scale3d(0.3, .3, 0.3);
        transform: scale3d(0.3, .3, 0.3)
    }
}
.react-bootstrap-table td.react-bootstrap-table-editing-cell .bounceOut {
    -webkit-animation-name: bounceOut;
    animation-name: bounceOut
}
.react-bootstrap-table-page-btns-ul {
    float: right;
    margin-top: 0
}
.react-bootstrap-table-pagination-list-hidden {
    display: none
}
.react-bootstrap-table table {
    table-layout: auto
}
.react-bootstrap-table table th.sortable {
    padding-right: 2em;
    position: relative
}
.order,
.react-bootstrap-table-sort-order {
    position: absolute;
    width: 8px;
    top: 0;
    bottom: 0;
    right: 0.75em
}
.order:after,
.order:before,
.react-bootstrap-table-sort-order:after,
.react-bootstrap-table-sort-order:before {
    position: absolute;
    font: normal normal normal 14px FontAwesome;
    right: 0;
    line-height: 1.5;
    bottom: 50%;
    top: 50%;
    margin-top: -9px;
    padding: 0;
    opacity: .4
}
.order:before,
.react-bootstrap-table-sort-order:before {
    content: "\F0DD"
}
.order:after,
.react-bootstrap-table-sort-order:after {
    content: "\F0DE"
}
.order .caret,
.react-bootstrap-table-sort-order .caret {
    display: none
}
.react-bootstrap-table-sort-order.dropup:after,
.react-bootstrap-table-sort-order:not(.dropup):before {
    opacity: 1
}
.react-bootstrap-table-pagination {
    margin-left: 0;
    margin-right: 0
}
.react-bootstrap-table-pagination .pagination .page-item:not(:first-child) {
    margin-left: 2px
}
.react-bootstrap-table-pagination .pagination .page-item:not(:last-child) {
    margin-right: 2px
}
.react-bootstrap-table-pagination .pagination .page-link {
    border-radius: 0.25em;
    padding: 0.25rem 0.55rem;
    font-size: 0.9rem;
    line-height: 1.3;
    min-width: 25px
}
.react-bootstrap-table-pagination .react-bootstrap-table-pagination-list {
    max-width: 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 2px;
    margin-top: -2px
}
.react-bootstrap-table-pagination .react-bootstrap-table-pagination-list .pagination {
    float: none;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 0
}
.e-panel .card-title {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between
}
.e-panel .card-title .h1,
.e-panel .card-title .h2,
.e-panel .card-title .h3,
.e-panel .card-title .h4,
.e-panel .card-title .h5,
.e-panel .card-title .h6,
.e-panel .card-title h1,
.e-panel .card-title h2,
.e-panel .card-title h3,
.e-panel .card-title h4,
.e-panel .card-title h5,
.e-panel .card-title h6 {
    font-weight: 700;
    margin: 0
}
.e-panel .card-title small:empty {
    display: none
}
.e-advanced-table__search-input {
    -ms-flex-positive: 1;
    flex-grow: 1
}
.e-advanced-table__bookmark {
    cursor: pointer;
    color: #e9ecef
}
.e-advanced-table__bookmark.active,
.e-advanced-table__bookmark:hover {
    color: #adb5bd
}
.e-metric__main {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center
}
.e-metric__text {
    line-height: 1
}
.flatpickr-calendar {
    background: transparent;
    opacity: 0;
    display: none;
    text-align: center;
    visibility: hidden;
    padding: 0;
    -webkit-animation: none;
    animation: none;
    direction: ltr;
    border: 0;
    font-size: 14px;
    line-height: 24px;
    border-radius: 5px;
    position: absolute;
    width: 307.875px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    background: #fff;
    -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0, 0, 0, .08);
    box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0, 0, 0, .08)
}
.flatpickr-calendar.inline,
.flatpickr-calendar.open {
    opacity: 1;
    max-height: 640px;
    visibility: visible
}
.flatpickr-calendar.open {
    display: inline-block;
    z-index: 99999
}
.flatpickr-calendar.animate.open {
    -webkit-animation: fpFadeInDown 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    animation: fpFadeInDown 0.3s cubic-bezier(0.23, 1, 0.32, 1)
}
.flatpickr-calendar.inline {
    display: block;
    position: relative;
    top: 2px
}
.flatpickr-calendar.static {
    position: absolute;
    top: calc(100% + 2px)
}
.flatpickr-calendar.static.open {
    z-index: 999;
    display: block
}
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
    -webkit-box-shadow: none !important;
    box-shadow: none !important
}
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
    -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
    box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6
}
.flatpickr-calendar .hasTime .dayContainer,
.flatpickr-calendar .hasWeeks .dayContainer {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0
}
.flatpickr-calendar .hasWeeks .dayContainer {
    border-left: 0
}
.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {
    height: 40px;
    border-top: 1px solid #e6e6e6
}
.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
    height: auto
}
.flatpickr-calendar:after,
.flatpickr-calendar:before {
    position: absolute;
    display: block;
    pointer-events: none;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    left: 22px
}
.flatpickr-calendar.rightMost:after,
.flatpickr-calendar.rightMost:before {
    left: auto;
    right: 22px
}
.flatpickr-calendar:before {
    border-width: 5px;
    margin: 0 -5px
}
.flatpickr-calendar:after {
    border-width: 4px;
    margin: 0 -4px
}
.flatpickr-calendar.arrowTop:after,
.flatpickr-calendar.arrowTop:before {
    bottom: 100%
}
.flatpickr-calendar.arrowTop:before {
    border-bottom-color: #e6e6e6
}
.flatpickr-calendar.arrowTop:after {
    border-bottom-color: #fff
}
.flatpickr-calendar.arrowBottom:after,
.flatpickr-calendar.arrowBottom:before {
    top: 100%
}
.flatpickr-calendar.arrowBottom:before {
    border-top-color: #e6e6e6
}
.flatpickr-calendar.arrowBottom:after {
    border-top-color: #fff
}
.flatpickr-calendar:focus {
    outline: 0
}
.flatpickr-wrapper {
    position: relative;
    display: inline-block
}
.flatpickr-months {
    display: -ms-flexbox;
    display: flex
}
.flatpickr-months .flatpickr-month {
    background: transparent;
    color: rgba(0, 0, 0, .9);
    fill: rgba(0, 0, 0, .9);
    height: 28px;
    line-height: 1;
    text-align: center;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    -ms-flex: 1;
    flex: 1 1
}
.flatpickr-months .flatpickr-next-month,
.flatpickr-months .flatpickr-prev-month {
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    line-height: 16px;
    height: 28px;
    padding: 10px;
    z-index: 3;
    color: rgba(0, 0, 0, .9);
    fill: rgba(0, 0, 0, .9)
}
.flatpickr-months .flatpickr-next-month.disabled,
.flatpickr-months .flatpickr-prev-month.disabled {
    display: none
}
.flatpickr-months .flatpickr-next-month i,
.flatpickr-months .flatpickr-prev-month i {
    position: relative
}
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month {
    left: 0
}
.flatpickr-months .flatpickr-next-month.flatpickr-next-month,
.flatpickr-months .flatpickr-prev-month.flatpickr-next-month {
    right: 0
}
.flatpickr-months .flatpickr-next-month:hover,
.flatpickr-months .flatpickr-prev-month:hover {
    color: #959ea9
}
.flatpickr-months .flatpickr-next-month:hover svg,
.flatpickr-months .flatpickr-prev-month:hover svg {
    fill: #f64747
}
.flatpickr-months .flatpickr-next-month svg,
.flatpickr-months .flatpickr-prev-month svg {
    width: 14px;
    height: 14px
}
.flatpickr-months .flatpickr-next-month svg path,
.flatpickr-months .flatpickr-prev-month svg path {
    -webkit-transition: fill 0.1s;
    -o-transition: fill 0.1s;
    transition: fill 0.1s;
    fill: inherit
}
.numInputWrapper {
    position: relative;
    height: auto
}
.numInputWrapper input,
.numInputWrapper span {
    display: inline-block
}
.numInputWrapper input {
    width: 100%
}
.numInputWrapper input::-ms-clear {
    display: none
}
.numInputWrapper span {
    position: absolute;
    right: 0;
    width: 14px;
    padding: 0 4px 0 2px;
    height: 50%;
    line-height: 50%;
    opacity: 0;
    cursor: pointer;
    border: 1px solid rgba(57, 57, 57, .15);
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}
.numInputWrapper span:hover {
    background: rgba(0, 0, 0, .1)
}
.numInputWrapper span:active {
    background: rgba(0, 0, 0, .2)
}
.numInputWrapper span:after {
    display: block;
    content: "";
    position: absolute
}
.numInputWrapper span.arrowUp {
    top: 0;
    border-bottom: 0
}
.numInputWrapper span.arrowUp:after {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid rgba(57, 57, 57, .6);
    top: 26%
}
.numInputWrapper span.arrowDown {
    top: 50%
}
.numInputWrapper span.arrowDown:after {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid rgba(57, 57, 57, .6);
    top: 40%
}
.numInputWrapper span svg {
    width: inherit;
    height: auto
}
.numInputWrapper span svg path {
    fill: rgba(0, 0, 0, .5)
}
.numInputWrapper:hover {
    background: rgba(0, 0, 0, .05)
}
.numInputWrapper:hover span {
    opacity: 1
}
.flatpickr-current-month {
    font-size: 135%;
    line-height: inherit;
    font-weight: 300;
    color: inherit;
    position: absolute;
    width: 75%;
    left: 12.5%;
    padding: 6.16px 0 0;
    line-height: 1;
    height: 28px;
    display: inline-block;
    text-align: center;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}
.flatpickr-current-month span.cur-month {
    font-family: inherit;
    font-weight: 700;
    color: inherit;
    display: inline-block;
    margin-left: 0.5ch;
    padding: 0
}
.flatpickr-current-month span.cur-month:hover {
    background: rgba(0, 0, 0, .05)
}
.flatpickr-current-month .numInputWrapper {
    width: 6ch;
    width: 7ch\0;
    display: inline-block
}
.flatpickr-current-month .numInputWrapper span.arrowUp:after {
    border-bottom-color: rgba(0, 0, 0, .9)
}
.flatpickr-current-month .numInputWrapper span.arrowDown:after {
    border-top-color: rgba(0, 0, 0, .9)
}
.flatpickr-current-month input.cur-year {
    background: transparent;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: inherit;
    cursor: text;
    padding: 0 0 0 0.5ch;
    margin: 0;
    display: inline-block;
    font-size: inherit;
    font-family: inherit;
    font-weight: 300;
    line-height: inherit;
    height: auto;
    border: 0;
    border-radius: 0;
    vertical-align: initial
}
.flatpickr-current-month input.cur-year:focus {
    outline: 0
}
.flatpickr-current-month input.cur-year[disabled],
.flatpickr-current-month input.cur-year[disabled]:hover {
    font-size: 100%;
    color: rgba(0, 0, 0, .5);
    background: transparent;
    pointer-events: none
}
.flatpickr-weekdays {
    background: transparent;
    text-align: center;
    overflow: hidden;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    height: 28px
}
.flatpickr-weekdays .flatpickr-weekdaycontainer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1;
    flex: 1 1
}
span.flatpickr-weekday {
    cursor: default;
    font-size: 90%;
    background: transparent;
    color: rgba(0, 0, 0, .54);
    line-height: 1;
    margin: 0;
    text-align: center;
    display: block;
    -ms-flex: 1;
    flex: 1 1;
    font-weight: bolder
}
.dayContainer,
.flatpickr-weeks {
    padding: 1px 0 0
}
.flatpickr-days {
    position: relative;
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 307.875px
}
.flatpickr-days:focus {
    outline: 0
}
.dayContainer {
    padding: 0;
    outline: 0;
    text-align: left;
    width: 307.875px;
    min-width: 307.875px;
    max-width: 307.875px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -ms-flex-pack: justify;
    justify-content: space-around;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1
}
.dayContainer+.dayContainer {
    -webkit-box-shadow: -1px 0 0 #e6e6e6;
    box-shadow: -1px 0 0 #e6e6e6
}
.flatpickr-day {
    background: none;
    border: 1px solid transparent;
    border-radius: 150px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #393939;
    cursor: pointer;
    font-weight: 400;
    width: 14.2857143%;
    -ms-flex-preferred-size: 14.2857143%;
    flex-basis: 14.2857143%;
    max-width: 39px;
    height: 39px;
    line-height: 39px;
    margin: 0;
    display: inline-block;
    position: relative;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center
}
.flatpickr-day.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day.nextMonthDay:focus,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.today.inRange,
.flatpickr-day:focus,
.flatpickr-day:hover {
    cursor: pointer;
    outline: 0;
    background: #e6e6e6;
    border-color: #e6e6e6
}
.flatpickr-day.today {
    border-color: #959ea9
}
.flatpickr-day.today:focus,
.flatpickr-day.today:hover {
    border-color: #959ea9;
    background: #959ea9;
    color: #fff
}
.flatpickr-day.endRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.endRange.nextMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.endRange:focus,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected,
.flatpickr-day.selected.inRange,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.selected:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.startRange:focus,
.flatpickr-day.startRange:hover {
    background: #569ff7;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff;
    border-color: #569ff7
}
.flatpickr-day.endRange.startRange,
.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange {
    border-radius: 50px 0 0 50px
}
.flatpickr-day.endRange.endRange,
.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange {
    border-radius: 0 50px 50px 0
}
.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)),
.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),
.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)) {
    -webkit-box-shadow: -10px 0 0 #569ff7;
    box-shadow: -10px 0 0 #569ff7
}
.flatpickr-day.endRange.startRange.endRange,
.flatpickr-day.selected.startRange.endRange,
.flatpickr-day.startRange.startRange.endRange {
    border-radius: 50px
}
.flatpickr-day.inRange {
    border-radius: 0;
    -webkit-box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
    box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6
}
.flatpickr-day.disabled,
.flatpickr-day.disabled:hover,
.flatpickr-day.nextMonthDay,
.flatpickr-day.notAllowed,
.flatpickr-day.notAllowed.nextMonthDay,
.flatpickr-day.notAllowed.prevMonthDay,
.flatpickr-day.prevMonthDay {
    color: rgba(57, 57, 57, .3);
    background: transparent;
    border-color: transparent;
    cursor: default
}
.flatpickr-day.disabled,
.flatpickr-day.disabled:hover {
    cursor: not-allowed;
    color: rgba(57, 57, 57, .1)
}
.flatpickr-day.week.selected {
    border-radius: 0;
    -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;
    box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7
}
.flatpickr-day.hidden {
    visibility: hidden
}
.rangeMode .flatpickr-day {
    margin-top: 1px
}
.flatpickr-weekwrapper {
    display: inline-block;
    float: left
}
.flatpickr-weekwrapper .flatpickr-weeks {
    padding: 0 12px;
    -webkit-box-shadow: 1px 0 0 #e6e6e6;
    box-shadow: 1px 0 0 #e6e6e6
}
.flatpickr-weekwrapper .flatpickr-weekday {
    float: none;
    width: 100%;
    line-height: 28px
}
.flatpickr-weekwrapper span.flatpickr-day,
.flatpickr-weekwrapper span.flatpickr-day:hover {
    display: block;
    width: 100%;
    max-width: none;
    color: rgba(57, 57, 57, .3);
    background: transparent;
    cursor: default;
    border: none
}
.flatpickr-innerContainer {
    display: block;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden
}
.flatpickr-innerContainer,
.flatpickr-rContainer {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}
.flatpickr-rContainer {
    display: inline-block;
    padding: 0
}
.flatpickr-time {
    text-align: center;
    outline: 0;
    display: block;
    height: 0;
    line-height: 40px;
    max-height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    display: -ms-flexbox;
    display: flex
}
.flatpickr-time:after {
    content: "";
    display: table;
    clear: both
}
.flatpickr-time .numInputWrapper {
    -ms-flex: 1;
    flex: 1 1;
    width: 40%;
    height: 40px;
    float: left
}
.flatpickr-time .numInputWrapper span.arrowUp:after {
    border-bottom-color: #393939
}
.flatpickr-time .numInputWrapper span.arrowDown:after {
    border-top-color: #393939
}
.flatpickr-time.hasSeconds .numInputWrapper {
    width: 26%
}
.flatpickr-time.time24hr .numInputWrapper {
    width: 49%
}
.flatpickr-time input {
    background: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 0;
    border-radius: 0;
    text-align: center;
    margin: 0;
    padding: 0;
    height: inherit;
    line-height: inherit;
    color: #393939;
    font-size: 14px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}
.flatpickr-time input.flatpickr-hour {
    font-weight: 700
}
.flatpickr-time input.flatpickr-minute,
.flatpickr-time input.flatpickr-second {
    font-weight: 400
}
.flatpickr-time input:focus {
    outline: 0;
    border: 0
}
.flatpickr-time .flatpickr-am-pm,
.flatpickr-time .flatpickr-time-separator {
    height: inherit;
    display: inline-block;
    float: left;
    line-height: inherit;
    color: #393939;
    font-weight: 700;
    width: 2%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-flex-item-align: center;
    align-self: center
}
.flatpickr-time .flatpickr-am-pm {
    outline: 0;
    width: 18%;
    cursor: pointer;
    text-align: center;
    font-weight: 400
}
.flatpickr-time .flatpickr-am-pm:focus,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time input:hover {
    background: #f3f3f3
}
.flatpickr-input[readonly] {
    cursor: pointer
}
@-webkit-keyframes fpFadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}
@keyframes fpFadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}
.flatpickr-input[readonly] {
    background-color: transparent
}
.flatpickr-calendar {
    width: 210px;
    padding: 13px 15px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 3px
}
.flatpickr-calendar:before {
    border-width: 9px;
    margin: 0 -9px
}
.flatpickr-calendar:after {
    border-width: 8px;
    margin: 0 -8px
}
.flatpickr-calendar.animate.open {
    -webkit-animation: none;
    animation: none
}
.flatpickr-calendar.arrowTop:before {
    border-bottom-color: rgba(0, 0, 0, .15)
}
.flatpickr-calendar.arrowTop.open {
    -webkit-transform: translateY(10px);
    -ms-transform: translateY(10px);
    transform: translateY(10px)
}
.flatpickr-calendar.arrowBottom:before {
    border-top-color: rgba(0, 0, 0, .15)
}
.flatpickr-calendar.arrowBottom.open {
    -webkit-transform: translateY(-36px);
    -ms-transform: translateY(-36px);
    transform: translateY(-36px)
}
.flatpickr-calendar.inline {
    border-color: transparent;
    top: 0;
    margin-left: auto;
    margin-right: auto
}
.flatpickr-calendar.inline:after,
.flatpickr-calendar.inline:before {
    display: none
}
.flatpickr-calendar.hasTime.noCalendar {
    padding: 5px
}
.flatpickr-calendar .flatpickr-months {
    position: relative
}
.flatpickr-calendar .flatpickr-months .flatpickr-prev-month {
    left: -5px
}
.flatpickr-calendar .flatpickr-months .flatpickr-next-month {
    right: -5px
}
.flatpickr-calendar .flatpickr-month {
    color: #686e71;
    fill: #686e71
}
.flatpickr-calendar .flatpickr-month input.cur-year {
    font-weight: 400
}
.flatpickr-calendar .flatpickr-next-month,
.flatpickr-calendar .flatpickr-prev-month {
    height: auto;
    padding-top: 6px;
    padding-bottom: 6px
}
.flatpickr-calendar .flatpickr-next-month:hover svg,
.flatpickr-calendar .flatpickr-prev-month:hover svg {
    fill: rgba(57, 57, 57, .4)
}
.flatpickr-calendar .flatpickr-current-month {
    font-size: 1rem;
    line-height: 1.2;
    height: auto;
    padding: 6px 0
}
.flatpickr-calendar .flatpickr-current-month .numInputWrapper {
    width: 6.5ch;
    margin-right: -2ch
}
.flatpickr-calendar .flatpickr-current-month .numInputWrapper span:after {
    top: 1px
}
.flatpickr-calendar .flatpickr-days {
    width: 210px
}
.flatpickr-calendar .dayContainer {
    width: 210px;
    min-width: 210px;
    max-width: 210px
}
.flatpickr-calendar span.flatpickr-weekday {
    font-size: 1rem;
    color: #686e71
}
.flatpickr-calendar span.flatpickr-day {
    height: 28px;
    line-height: 28px;
    border-radius: 3px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important
}
.flatpickr-calendar span.flatpickr-day.inRange {
    border-radius: 0
}
.flatpickr-calendar span.flatpickr-day.inRange,
.flatpickr-calendar span.flatpickr-day.nextMonthDay.inRange,
.flatpickr-calendar span.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-calendar span.flatpickr-day.nextMonthDay:focus,
.flatpickr-calendar span.flatpickr-day.nextMonthDay:hover,
.flatpickr-calendar span.flatpickr-day.prevMonthDay.inRange,
.flatpickr-calendar span.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-calendar span.flatpickr-day.prevMonthDay:focus,
.flatpickr-calendar span.flatpickr-day.prevMonthDay:hover,
.flatpickr-calendar span.flatpickr-day.today.inRange,
.flatpickr-calendar span.flatpickr-day:focus,
.flatpickr-calendar span.flatpickr-day:hover {
    background: #e9ecef;
    border-color: #e9ecef
}
.flatpickr-calendar span.flatpickr-day.endRange,
.flatpickr-calendar span.flatpickr-day.endRange.inRange,
.flatpickr-calendar span.flatpickr-day.endRange.nextMonthDay,
.flatpickr-calendar span.flatpickr-day.endRange.prevMonthDay,
.flatpickr-calendar span.flatpickr-day.endRange:focus,
.flatpickr-calendar span.flatpickr-day.endRange:hover,
.flatpickr-calendar span.flatpickr-day.selected,
.flatpickr-calendar span.flatpickr-day.selected.inRange,
.flatpickr-calendar span.flatpickr-day.selected.nextMonthDay,
.flatpickr-calendar span.flatpickr-day.selected.prevMonthDay,
.flatpickr-calendar span.flatpickr-day.selected:focus,
.flatpickr-calendar span.flatpickr-day.selected:hover,
.flatpickr-calendar span.flatpickr-day.startRange,
.flatpickr-calendar span.flatpickr-day.startRange.inRange,
.flatpickr-calendar span.flatpickr-day.startRange.nextMonthDay,
.flatpickr-calendar span.flatpickr-day.startRange.prevMonthDay,
.flatpickr-calendar span.flatpickr-day.startRange:focus,
.flatpickr-calendar span.flatpickr-day.startRange:hover {
    background: #3c91da;
    border-color: #3c91da
}
.flatpickr-calendar span.flatpickr-day.endRange.startRange,
.flatpickr-calendar span.flatpickr-day.selected.startRange,
.flatpickr-calendar span.flatpickr-day.startRange {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px
}
.flatpickr-calendar span.flatpickr-day.endRange,
.flatpickr-calendar span.flatpickr-day.selected.endRange,
.flatpickr-calendar span.flatpickr-day.startRange.endRange {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px
}
.flatpickr-calendar .flatpickr-time {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px
}
.flatpickr-calendar.hasTime.showTimeInput .flatpickr-time {
    border-top: 0
}
.flatpickr-calendar.hasTime .flatpickr-innerContainer {
    padding-bottom: 10px
}
.flatpickr-calendar.hasTime .flatpickr-innerContainer+.flatpickr-time {
    padding-top: 10px;
    border-top: 1px solid #e6e6e6
}
@media (-ms-high-contrast:none), screen and (-ms-high-contrast:active) {
    .flatpickr-calendar span.flatpickr-day {
        -ms-flex-preferred-size: 13.3%;
        flex-basis: 13.3%
    }
}
.e-select .e-select__control {
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
    min-height: calc(2.25rem + 2px);
    background: #fff;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out
}
.e-select .e-select__control:hover {
    border: 1px solid #ced4da
}
.e-select .e-select__control--is-focused,
.e-select .e-select__control--is-focused:hover {
    background-color: #fff;
    border-color: #a7cdee;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 0 0.2rem rgba(60, 145, 218, .25);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 0 0.2rem rgba(60, 145, 218, .25)
}
.e-select .e-select__control--is-disabled {
    background-color: #e9ecef
}
.e-select .e-select__value-container {
    padding: 0 0.75rem;
    line-height: 17px
}
.e-select .e-select__single-value {
    margin-left: 0;
    color: #495057
}
.e-select .e-select__value-container--is-multi {
    padding: 0.16rem 0.75rem;
    -ms-flex-align: start;
    align-items: flex-start
}
.e-select .e-select__multi-value {
    border-radius: 0.25em;
    margin: 0.23rem 0.375rem 0.23rem 0;
    background: #f5f6f8;
    border: 1px solid rgba(0, 0, 0, .1);
    line-height: 1
}
.e-select .e-select__multi-value__label {
    color: #868e96;
    padding: 0.38em 0.565em;
    font-size: 75%
}
.e-select .e-select__multi-value__remove {
    border-left: 1px solid rgba(0, 0, 0, .1);
    border-radius: 0;
    cursor: pointer
}
.e-select .e-select__multi-value__remove:hover {
    background: #e6eaed;
    color: #686e71
}
.e-select .e-select__multi-value__remove svg {
    height: 11px;
    width: 11px
}
.e-select .e-select__placeholder {
    color: #868e96;
    margin: 0
}
.e-select .e-select__input {
    margin: 0 -2px
}
.e-select .e-select__indicator-separator {
    background-color: #a7cdee;
    display: none
}
.e-select .e-select__dropdown-indicator {
    height: 2.25rem;
    width: 2.2rem;
    padding: 0;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center
}
.e-select .e-select__dropdown-indicator:after {
    content: "";
    display: inline-block;
    border-style: solid;
    border-color: #868e96 transparent transparent;
    border-width: 0.35rem 0.35rem 0
}
.e-select .e-select__dropdown-indicator svg {
    display: none
}
.e-select .e-select__control--is-focused .e-select__dropdown-indicator:after {
    border-color: transparent transparent #868e96;
    border-width: 0 0.35rem 0.35rem
}
.e-select .e-select__clear-indicator {
    height: 2.25rem;
    width: calc(2.25rem + 2px);
    padding: 0;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    color: #868e96;
    cursor: pointer
}
.e-select .e-select__clear-indicator:hover {
    color: #686e71
}
.e-select .e-select__option {
    background: #fff;
    color: #495057;
    padding: 0.25rem 1.5rem
}
.e-select .e-select__option--is-focused,
.e-select .e-select__option:active {
    background: #f2f4f6;
    color: #3d4349
}
.e-select .e-select__option--is-selected {
    background: #dee2e6;
    color: #16181b
}
.e-select .e-select__option--is-disabled {
    color: #adb5bd
}
.rc-slider {
    position: relative;
    height: 14px;
    padding: 5px 0;
    width: 100%;
    border-radius: 6px;
    -ms-touch-action: none;
    touch-action: none
}
.rc-slider,
.rc-slider * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}
.rc-slider-rail {
    width: 100%;
    background-color: #e9e9e9
}
.rc-slider-rail,
.rc-slider-track {
    position: absolute;
    height: 4px;
    border-radius: 6px
}
.rc-slider-track {
    left: 0;
    background-color: #abe2fb
}
.rc-slider-handle {
    position: absolute;
    margin-left: -7px;
    margin-top: -5px;
    width: 14px;
    height: 14px;
    cursor: -webkit-grab;
    cursor: grab;
    border: 2px solid #96dbfa;
    background-color: #fff;
    -ms-touch-action: pan-x;
    touch-action: pan-x
}
.rc-slider-handle:hover {
    border-color: #57c5f7
}
.rc-slider-handle:active {
    border-color: #57c5f7;
    -webkit-box-shadow: 0 0 5px #57c5f7;
    box-shadow: 0 0 5px #57c5f7;
    cursor: -webkit-grabbing;
    cursor: grabbing
}
.rc-slider-handle:focus {
    border-color: #57c5f7;
    -webkit-box-shadow: 0 0 0 5px #96dbfa;
    box-shadow: 0 0 0 5px #96dbfa;
    outline: none
}
.rc-slider-mark {
    position: absolute;
    top: 18px;
    left: 0;
    width: 100%;
    font-size: 12px
}
.rc-slider-mark-text {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: #999
}
.rc-slider-mark-text-active {
    color: #666
}
.rc-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent
}
.rc-slider-dot {
    position: absolute;
    bottom: -2px;
    margin-left: -4px;
    width: 8px;
    height: 8px;
    border: 2px solid #e9e9e9;
    background-color: #fff;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle
}
.rc-slider-dot-active {
    border-color: #96dbfa
}
.rc-slider-disabled {
    background-color: #e9e9e9
}
.rc-slider-disabled .rc-slider-track {
    background-color: #ccc
}
.rc-slider-disabled .rc-slider-dot,
.rc-slider-disabled .rc-slider-handle {
    border-color: #ccc;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: #fff;
    cursor: not-allowed
}
.rc-slider-disabled .rc-slider-dot,
.rc-slider-disabled .rc-slider-mark-text {
    cursor: not-allowed !important
}
.rc-slider-vertical {
    width: 14px;
    height: 100%;
    padding: 0 5px
}
.rc-slider-vertical .rc-slider-rail {
    height: 100%;
    width: 4px
}
.rc-slider-vertical .rc-slider-track {
    left: 5px;
    bottom: 0;
    width: 4px
}
.rc-slider-vertical .rc-slider-handle {
    margin-left: -5px;
    margin-bottom: -7px;
    -ms-touch-action: pan-y;
    touch-action: pan-y
}
.rc-slider-vertical .rc-slider-mark {
    top: 0;
    left: 18px;
    height: 100%
}
.rc-slider-vertical .rc-slider-step {
    height: 100%;
    width: 4px
}
.rc-slider-vertical .rc-slider-dot {
    left: 2px;
    margin-bottom: -4px
}
.rc-slider-vertical .rc-slider-dot:first-child,
.rc-slider-vertical .rc-slider-dot:last-child {
    margin-bottom: -4px
}
.rc-slider-tooltip-zoom-down-appear,
.rc-slider-tooltip-zoom-down-enter,
.rc-slider-tooltip-zoom-down-leave {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: block !important;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}
.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active,
.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active {
    -webkit-animation-name: rcSliderTooltipZoomDownIn;
    animation-name: rcSliderTooltipZoomDownIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}
.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
    -webkit-animation-name: rcSliderTooltipZoomDownOut;
    animation-name: rcSliderTooltipZoomDownOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}
.rc-slider-tooltip-zoom-down-appear,
.rc-slider-tooltip-zoom-down-enter {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1)
}
.rc-slider-tooltip-zoom-down-leave {
    -webkit-animation-timing-function: cubic-bezier(0.755, .05, 0.855, .06);
    animation-timing-function: cubic-bezier(0.755, .05, 0.855, .06)
}
@-webkit-keyframes rcSliderTooltipZoomDownIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transform: scale(0);
        transform: scale(0)
    }
    to {
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}
@keyframes rcSliderTooltipZoomDownIn {
    0% {
        opacity: 0;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transform: scale(0);
        transform: scale(0)
    }
    to {
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}
@-webkit-keyframes rcSliderTooltipZoomDownOut {
    0% {
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
    to {
        opacity: 0;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transform: scale(0);
        transform: scale(0)
    }
}
@keyframes rcSliderTooltipZoomDownOut {
    0% {
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
    to {
        opacity: 0;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transform: scale(0);
        transform: scale(0)
    }
}
.rc-slider-tooltip {
    position: absolute;
    left: -9999px;
    top: -9999px;
    visibility: visible
}
.rc-slider-tooltip,
.rc-slider-tooltip * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}
.rc-slider-tooltip-hidden {
    display: none
}
.rc-slider-tooltip-placement-top {
    padding: 4px 0 8px
}
.rc-slider-tooltip-inner {
    padding: 6px 2px;
    min-width: 24px;
    height: 24px;
    font-size: 12px;
    line-height: 1;
    color: #fff;
    text-align: center;
    text-decoration: none;
    background-color: #6c6c6c;
    border-radius: 6px;
    -webkit-box-shadow: 0 0 4px #d9d9d9;
    box-shadow: 0 0 4px #d9d9d9
}
.rc-slider-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid
}
.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    bottom: 4px;
    border-top-color: #6c6c6c
}
.e-slider {
    padding: 0 6px
}
.rc-slider {
    padding: 6px 0;
    height: 16px
}
.rc-slider-rail {
    background-color: #dee2e6
}
.rc-slider-rail,
.rc-slider-step {
    left: 0;
    right: 0
}
.rc-slider-handle {
    margin-left: -9px;
    margin-top: -7px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    border-radius: 50%;
    border: 3px solid #fff;
    background-color: #adb5bd
}
.rc-slider-handle:active,
.rc-slider-handle:focus,
.rc-slider-handle:hover {
    cursor: pointer;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: none
}
.rc-slider-track {
    background-color: #adb5bd
}
.rc-slider-tooltip-placement-top {
    padding: 4px 0
}
.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -4px;
    border-width: 4px 4px 0;
    border-top-color: #adb5bd
}
.rc-slider-tooltip-inner {
    font-size: 75%;
    line-height: 1.2;
    padding: 2px 4px;
    border-radius: 2px;
    border: 1px solid #adb5bd;
    background-color: #adb5bd;
    height: auto;
    min-width: 0;
    -webkit-box-shadow: none;
    box-shadow: none
}
.e-slider .primary.rc-slider .rc-slider-handle,
.e-slider .primary.rc-slider .rc-slider-track {
    background-color: #3c91da
}
.rc-slider-tooltip.primary .rc-slider-tooltip-inner {
    background-color: #3c91da;
    border: 1px solid #3c91da
}
.rc-slider-tooltip.primary.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    border-top-color: #3c91da
}
.e-slider .secondary.rc-slider .rc-slider-handle,
.e-slider .secondary.rc-slider .rc-slider-track {
    background-color: #adb5bd
}
.rc-slider-tooltip.secondary .rc-slider-tooltip-inner {
    background-color: #adb5bd;
    border: 1px solid #adb5bd
}
.rc-slider-tooltip.secondary.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    border-top-color: #adb5bd
}
.e-slider .success.rc-slider .rc-slider-handle,
.e-slider .success.rc-slider .rc-slider-track {
    background-color: #59cd90
}
.rc-slider-tooltip.success .rc-slider-tooltip-inner {
    background-color: #59cd90;
    border: 1px solid #59cd90
}
.rc-slider-tooltip.success.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    border-top-color: #59cd90
}
.e-slider .info.rc-slider .rc-slider-handle,
.e-slider .info.rc-slider .rc-slider-track {
    background-color: #45bddc
}
.rc-slider-tooltip.info .rc-slider-tooltip-inner {
    background-color: #45bddc;
    border: 1px solid #45bddc
}
.rc-slider-tooltip.info.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    border-top-color: #45bddc
}
.e-slider .warning.rc-slider .rc-slider-handle,
.e-slider .warning.rc-slider .rc-slider-track {
    background-color: #f7b267
}
.rc-slider-tooltip.warning .rc-slider-tooltip-inner {
    background-color: #f7b267;
    border: 1px solid #f7b267
}
.rc-slider-tooltip.warning.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    border-top-color: #f7b267
}
.e-slider .danger.rc-slider .rc-slider-handle,
.e-slider .danger.rc-slider .rc-slider-track {
    background-color: #ee6352
}
.rc-slider-tooltip.danger .rc-slider-tooltip-inner {
    background-color: #ee6352;
    border: 1px solid #ee6352
}
.rc-slider-tooltip.danger.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    border-top-color: #ee6352
}
.e-slider .light.rc-slider .rc-slider-handle,
.e-slider .light.rc-slider .rc-slider-track {
    background-color: #f5f6f8
}
.rc-slider-tooltip.light .rc-slider-tooltip-inner {
    background-color: #f5f6f8;
    border: 1px solid #f5f6f8
}
.rc-slider-tooltip.light.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    border-top-color: #f5f6f8
}
.e-slider .dark.rc-slider .rc-slider-handle,
.e-slider .dark.rc-slider .rc-slider-track {
    background-color: #343a40
}
.rc-slider-tooltip.dark .rc-slider-tooltip-inner {
    background-color: #343a40;
    border: 1px solid #343a40
}
.rc-slider-tooltip.dark.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    border-top-color: #343a40
}
.demo-tabs {
    background: #fff;
    border-bottom: 1px solid #e9ecef;
    padding-top: 15px
}
.demo-tabs .nav-tabs {
    margin-bottom: -1px
}
.demo-tabs .nav-item:not(:last-child) {
    margin-right: 5px
}
.demo-tabs .nav-tabs .nav-item.show .nav-link,
.demo-tabs .nav-tabs .nav-link.active {
    background-color: #f2f5f7;
    border-bottom-color: #f2f5f7
}
.demo-tabs-dropdown {
    position: absolute;
    top: 0;
    right: 5px;
    bottom: 0
}
.demo-tabs-dropdown .dropdown-toggle {
    border-radius: 3px;
    cursor: pointer
}
.demo-tabs-dropdown .dropdown-toggle:hover,
.demo-tabs-dropdown.show .dropdown-toggle {
    background-color: rgba(0, 0, 0, .075)
}
.demo-tabs-dropdown .dropdown-toggle:after {
    margin: 0 0.1em;
    vertical-align: 0.18em
}
.demo-tabs-dropdown .dropdown-menu {
    margin-top: 2px;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem
}
/*# sourceMappingURL=main.f9e10bd9.css.map*/</meta>