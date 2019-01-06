
@font-face {
    font-family: 'icomoon';
    src: url("../fonts/icomoon/icomoon.eot?srf3rx");
    src: url("../fonts/icomoon/icomoon.eot?srf3rx#iefix") format("embedded-opentype"), url("../fonts/icomoon/icomoon.ttf?srf3rx") format("truetype"), url("../fonts/icomoon/icomoon.woff?srf3rx") format("woff"), url("../fonts/icomoon/icomoon.svg?srf3rx#icomoon") format("svg");
    font-weight: normal;
    font-style: normal; }
  
  /* =======================================================
  *
  * 	Template Style 
  *
  * ======================================================= */
  body {
    font-family: "Poppins", Arial, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 2;
    color: gray;
    background: whitesmoke; }
  
  #page {
    position: relative;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s; }
    .offcanvas #page {
      overflow: hidden;
      position: absolute; }
      .offcanvas #page:after {
        -webkit-transition: 2s;
        -o-transition: 2s;
        transition: 2s;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 101;
        background: rgba(0, 0, 0, 0.7);
        content: ""; }
  
  a {
    color: #4aca85;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s; }
    a:hover, a:active, a:focus {
      color: #4aca85;
      outline: none;
      text-decoration: none; }
  
  p {
    margin-bottom: 20px; }
  
  h1, h2, h3, h4, h5, h6, figure {
    color: #303133;
    font-family: "Nunito", Arial, sans-serif;
    font-weight: 400;
    margin: 0 0 20px 0;
    line-height: 1.3; }
  
  ::-webkit-selection {
    color: #fff;
    background: #4aca85; }
  
  ::-moz-selection {
    color: #fff;
    background: #4aca85; }
  
  ::selection {
    color: #fff;
    background: #4aca85; }
  
  .product-img,
  .work-img,
  .author-img,
  .mobile-img,
  .colorlib-video,
  .blog-img,
  .colorlib-about-img,
  .services-img,
  .staff-img {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative; }
  
  .colorlib-nav {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    margin: 0 auto; }
    @media screen and (max-width: 768px) {
      .colorlib-nav {
        margin: 0; } }
    .colorlib-nav .top-menu {
      padding: 30px 30px; }
      @media screen and (max-width: 768px) {
        .colorlib-nav .top-menu {
          padding: 28px 1em; } }
    .colorlib-nav #colorlib-logo {
      font-size: 20px;
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      font-weight: 700; }
      .colorlib-nav #colorlib-logo a {
        position: relative;
        color: #fff; }
        .colorlib-nav #colorlib-logo a i {
          color: #fff;
          display: block;
          font-size: 60px;
          font-weight: normal;
          margin-bottom: 10px; }
    @media screen and (max-width: 768px) {
      .colorlib-nav .menu-1 {
        display: none; } }
    .colorlib-nav ul {
      padding: 0;
      margin: 0; }
      .colorlib-nav ul li {
        padding: 8px 0;
        margin: 0;
        list-style: none;
        display: inline;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px; }
        .colorlib-nav ul li a {
          position: relative;
          padding: 20px 12px;
          color: rgba(255, 255, 255, 0.9);
          -webkit-transition: 0.5s;
          -o-transition: 0.5s;
          transition: 0.5s; }
          .colorlib-nav ul li a:hover {
            color: #fff; }
        .colorlib-nav ul li.has-dropdown {
          position: relative; }
          .colorlib-nav ul li.has-dropdown .dropdown {
            width: 140px;
            -webkit-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
            box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
            z-index: 1002;
            visibility: hidden;
            opacity: 0;
            position: absolute;
            top: 40px;
            left: 0;
            text-align: left;
            background: #000;
            padding: 20px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -ms-border-radius: 4px;
            border-radius: 4px;
            -webkit-transition: 0s;
            -o-transition: 0s;
            transition: 0s; }
            .colorlib-nav ul li.has-dropdown .dropdown:before {
              bottom: 100%;
              left: 40px;
              border: solid transparent;
              content: " ";
              height: 0;
              width: 0;
              position: absolute;
              pointer-events: none;
              border-bottom-color: #000;
              border-width: 8px;
              margin-left: -8px; }
            .colorlib-nav ul li.has-dropdown .dropdown li {
              display: block;
              margin-bottom: 0px; }
              .colorlib-nav ul li.has-dropdown .dropdown li:last-child {
                margin-bottom: 0; }
              .colorlib-nav ul li.has-dropdown .dropdown li a {
                padding: 2px 0;
                display: block;
                color: #999999;
                line-height: 1.2;
                text-transform: none;
                font-size: 13px;
                letter-spacing: 0; }
                .colorlib-nav ul li.has-dropdown .dropdown li a:hover {
                  color: #fff; }
        .colorlib-nav ul li.btn-cta a {
          color: #fff;
          background: #4aca85;
          padding: 10px 15px;
          -webkit-border-radius: 100px;
          -moz-border-radius: 100px;
          -ms-border-radius: 100px;
          border-radius: 100px;
          -webkit-transition: 0.3s;
          -o-transition: 0.3s;
          transition: 0.3s; }
          .colorlib-nav ul li.btn-cta a:hover {
            -webkit-box-shadow: 0px 14px 20px -9px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 14px 20px -9px rgba(0, 0, 0, 0.75);
            -ms-box-shadow: 0px 14px 20px -9px rgba(0, 0, 0, 0.75);
            -o-box-shadow: 0px 14px 20px -9px rgba(0, 0, 0, 0.75);
            box-shadow: 0px 14px 20px -9px rgba(0, 0, 0, 0.75); }
        .colorlib-nav ul li.active > a {
          color: rgba(255, 255, 255, 0.5);
          position: relative; }
          .colorlib-nav ul li.active > a:after {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0); }
  
  .colorlib-video {
    overflow: hidden;
    position: relative;
    height: 400px; }
    .colorlib-video a {
      z-index: 1001;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -45px;
      margin-left: -45px;
      width: 90px;
      height: 90px;
      display: table;
      text-align: center;
      background: #798eea;
      -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
      -ms-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
      -o-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%; }
      .colorlib-video a i {
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        font-size: 40px;
        color: #fff; }
    .colorlib-video .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      -webkit-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s; }
    .colorlib-video:hover .overlay {
      background: rgba(0, 0, 0, 0.7); }
    .colorlib-video:hover a {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1); }
  
  .video-hero {
    background-size: cover;
    position: relative;
    background-repeat: no-repeat;
    z-index: 0; }
    @media screen and (max-width: 768px) {
      .video-hero {
        heifght: inherit;
        padding: 3em 0; } }
    .video-hero .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0.95;
      background: #499bea;
      background: -moz-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -webkit-gradient(left top, right bottom, color-stop(0%, #499bea), color-stop(100%, #798eea));
      background: -webkit-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -o-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -ms-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -webkit-linear-gradient(315deg, #499bea 0%, #798eea 100%);
      background: -o-linear-gradient(315deg, #499bea 0%, #798eea 100%);
      background: linear-gradient(135deg, #499bea 0%, #798eea 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#798eea', GradientType=1 );
      z-index: 1; }
    .video-hero .display-t {
      display: table;
      height: 700px;
      width: 100%;
      position: relative;
      z-index: 2; }
      @media screen and (max-width: 768px) {
        .video-hero .display-t {
          height: 600px; } }
      .video-hero .display-t.display-t2 {
        height: 500px; }
    .video-hero .display-tc {
      display: table-cell;
      vertical-align: middle; }
      .video-hero .display-tc .holder {
        color: #fff;
        font-family: "Poppins", Arial, sans-serif;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 7px; }
        .video-hero .display-tc .holder span {
          position: relative; }
      .video-hero .display-tc h2 {
        color: #fff;
        font-size: 60px;
        margin-bottom: 20px;
        font-weight: 300; }
        @media screen and (max-width: 768px) {
          .video-hero .display-tc h2 {
            font-size: 34px; } }
      .video-hero .display-tc p {
        font-family: "Nunito", Arial, sans-serif;
        color: #fff;
        font-weight: 200;
        font-size: 30px; }
      .video-hero .display-tc p.breadcrumbs {
        font-size: 14px; }
        .video-hero .display-tc p.breadcrumbs span {
          padding-right: 10px;
          color: rgba(255, 255, 255, 0.5); }
          .video-hero .display-tc p.breadcrumbs span a {
            color: rgba(255, 255, 255, 0.9); }
      .video-hero .display-tc .btn-custom {
        font-size: 16px; }
  
  .colorlib-about,
  .colorlib-shop,
  .colorlib-work,
  .colorlib-work-featured,
  .colorlib-intro,
  #colorlib-subscribe,
  .colorlib-pricing,
  .colorlib-services,
  #colorlib-contact,
  .colorlib-blog {
    padding: 7em 0;
    clear: both; }
  
  .colorlib-bg-white {
    background: #fff;
    border: 1px solid #e6e6e6;
    border-left: none;
    border-right: none; }
  
  .colorlib-featured {
    padding-bottom: 3em;
    width: 100%; }
    .colorlib-featured .featured-wrap {
      margin-top: -7em; }
    .colorlib-featured .featured-entry img {
      -webkit-box-shadow: 0px 3px 19px -9px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 3px 19px -9px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 3px 19px -9px rgba(0, 0, 0, 0.75);
      margin-bottom: 20px; }
    .colorlib-featured .owl-theme .owl-dots .owl-dot span {
      background: #e6e6e6; }
    .colorlib-featured .owl-theme .owl-dots .owl-dot.active span {
      background: #cccccc; }
  
  .services {
    margin-bottom: 50px;
    position: relative;
    z-index: 0;
    padding: 0 1em; }
    @media screen and (max-width: 768px) {
      .services {
        margin-bottom: 3em; } }
    .services .icon {
      position: relative;
      margin-bottom: 30px;
      display: inline-block; }
      .services .icon i {
        font-size: 50px;
        color: #798eea;
        z-index: 1; }
    .services .desc h3 {
      font-size: 26px;
      font-weight: 300; }
  
  .colorlib-intro .colorlib-heading {
    margin-bottom: 2em; }
  
  .colorlib-intro .play {
    width: 100%;
    display: block;
    margin: 30px 0; }
    .colorlib-intro .play a {
      width: 100px;
      height: 100px;
      display: table;
      margin: 0 auto;
      text-align: center;
      background: #798eea;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%; }
      .colorlib-intro .play a i {
        font-size: 20px;
        color: #fff;
        display: table-cell;
        vertical-align: middle; }
  
  .pulse {
    display: table;
    width: 100px;
    height: 100px;
    background: #798eea;
    cursor: pointer;
    -webkit-box-shadow: 0 0 0 rgba(121, 142, 234, 0.4);
    box-shadow: 0 0 0 rgba(121, 142, 234, 0.4);
    -webkit-animation: pulse 2s infinite;
    animation: pulse 2s infinite;
    text-align: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%; }
    .pulse i {
      font-size: 30px !important;
      display: table-cell;
      vertical-align: middle; }
  
  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(121, 142, 234, 0.4); }
    70% {
      -webkit-box-shadow: 0 0 0 30px rgba(121, 142, 234, 0); }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(121, 142, 234, 0); } }
  
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(121, 142, 234, 0.4);
      -webkit-box-shadow: 0 0 0 0 rgba(121, 142, 234, 0.4);
      box-shadow: 0 0 0 0 rgba(121, 142, 234, 0.4); }
    70% {
      -moz-box-shadow: 0 0 0 30px rgba(121, 142, 234, 0);
      -webkit-box-shadow: 0 0 0 30px rgba(121, 142, 234, 0);
      box-shadow: 0 0 0 30px rgba(121, 142, 234, 0); }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(121, 142, 234, 0);
      -webkit-box-shadow: 0 0 0 0 rgba(121, 142, 234, 0);
      box-shadow: 0 0 0 0 rgba(121, 142, 234, 0); } }
  
  .colorlib-work-featured .mobile-wrap {
    margin-bottom: 4em;
    display: block; }
    .colorlib-work-featured .mobile-wrap .mobile-img {
      background-position: top;
      height: 730px;
      -webkit-box-shadow: 0px 3px 38px -13px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 3px 38px -13px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 3px 38px -13px rgba(0, 0, 0, 0.2);
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      -ms-border-radius: 4px;
      border-radius: 4px; }
    .colorlib-work-featured .mobile-wrap .desc {
      padding: 30px; }
      .colorlib-work-featured .mobile-wrap .desc h2 {
        font-size: 50px;
        font-weight: 300;
        margin-bottom: 40px; }
        @media screen and (max-width: 768px) {
          .colorlib-work-featured .mobile-wrap .desc h2 {
            font-size: 34px; } }
      .colorlib-work-featured .mobile-wrap .desc .features {
        position: relative;
        margin-bottom: 50px; }
        .colorlib-work-featured .mobile-wrap .desc .features .icon {
          position: absolute;
          top: 10px;
          left: 0; }
          .colorlib-work-featured .mobile-wrap .desc .features .icon i {
            font-size: 30px;
            color: #499bea; }
        .colorlib-work-featured .mobile-wrap .desc .features .f-desc {
          padding-left: 50px; }
  
  .work-flex {
    width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    margin-bottom: 40px; }
    .work-flex .half {
      display: block;
      width: 50%;
      height: 450px; }
      .work-flex .half .display-t {
        height: 450px;
        display: table; }
        @media screen and (max-width: 480px) {
          .work-flex .half .display-t {
            display: block;
            height: auto; } }
      .work-flex .half .display-tc {
        display: table-cell;
        vertical-align: middle; }
      .work-flex .half .desc {
        padding: 0 3em;
        background: #fff; }
        @media screen and (max-width: 768px) {
          .work-flex .half .desc {
            padding: 3em; } }
        .work-flex .half .desc h2 {
          font-weight: 400; }
          .work-flex .half .desc h2 a {
            color: #303133; }
      @media screen and (max-width: 480px) {
        .work-flex .half {
          width: 100%; } }
    .work-flex .work-img {
      display: block;
      height: 450px; }
  
  .work-grid {
    margin-bottom: 40px; }
    .work-grid .work-img {
      display: block;
      height: 270px;
      position: relative; }
      .work-grid .work-img .icon {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 270px;
        content: '';
        display: table;
        text-align: center;
        background: #4aca85;
        opacity: 0;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s; }
        .work-grid .work-img .icon i {
          display: table-cell;
          vertical-align: middle;
          color: #fff;
          font-size: 20px; }
      .work-grid .work-img:hover .icon, .work-grid .work-img:focus .icon {
        opacity: 1; }
    .work-grid .desc {
      background: #fff;
      padding: 25px; }
      .work-grid .desc h2 {
        font-size: 24px; }
        .work-grid .desc h2 a {
          color: #303133; }
          .work-grid .desc h2 a:hover {
            color: #4aca85; }
  
  .product-entry {
    margin-bottom: 40px; }
    .product-entry .product-img {
      display: block;
      height: 350px;
      margin-bottom: 20px;
      position: relative; }
      .product-entry .product-img .tag {
        position: absolute;
        top: 10px;
        left: 10px; }
        .product-entry .product-img .tag .new {
          font-size: 11px;
          background: #4aca85;
          color: #fff;
          padding: .3em .5em;
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
          -ms-border-radius: 2px;
          border-radius: 2px; }
        .product-entry .product-img .tag .sale {
          font-size: 11px;
          background: #798eea;
          color: #fff;
          padding: .3em .5em;
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
          -ms-border-radius: 2px;
          border-radius: 2px; }
      .product-entry .product-img .cart {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        display: block;
        padding: 0 1em;
        opacity: 0;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s; }
        .product-entry .product-img .cart p {
          display: block;
          margin-bottom: 0;
          width: 100%;
          text-transform: uppercase;
          font-size: 12px; }
          .product-entry .product-img .cart p span {
            display: inline-block; }
            .product-entry .product-img .cart p span a {
              display: block;
              color: #fff;
              padding: 1em; }
              .product-entry .product-img .cart p span a:hover {
                background: #4aca85; }
    .product-entry .desc h3 {
      font-size: 20px;
      text-transform: uppercase;
      font-size: 14px;
      margin-bottom: 10px; }
      .product-entry .desc h3 a {
        color: #000; }
    .product-entry .desc .price span {
      color: #4aca85;
      font-weight: 400; }
    .product-entry .desc .price .sale {
      color: gray;
      text-decoration: line-through;
      font-weight: 300; }
    .product-entry:hover .product-img .cart {
      opacity: 1; }
  
  .staff-entry {
    display: block;
    margin-bottom: 20px;
    z-index: 0;
    background: #fff;
    padding: 30px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px; }
    .staff-entry .staff-img {
      width: 150px;
      height: 150px;
      display: block;
      margin: 0 auto;
      margin-bottom: 30px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%; }
    .staff-entry .desc h3 {
      font-size: 24px;
      margin-bottom: 10px; }
    .staff-entry .desc span {
      display: block;
      margin-bottom: 20px;
      font-size: 13px; }
    .staff-entry .colorlib-social-icons li {
      margin-left: 0; }
      .staff-entry .colorlib-social-icons li a {
        padding: 0; }
  
  #colorlib-counter {
    position: relative;
    z-index: -1;
    padding-top: 7em;
    padding-bottom: 7em; }
    #colorlib-counter .colorlib-heading {
      margin-bottom: 30px; }
      #colorlib-counter .colorlib-heading h2 {
        color: #fff; }
      #colorlib-counter .colorlib-heading p {
        font-size: 22px;
        color: rgba(255, 255, 255, 0.8); }
  
  .counter-entry {
    padding: 0;
    position: relative; }
    @media screen and (max-width: 768px) {
      .counter-entry {
        margin-bottom: 20px; } }
  
  .colorlib-counters {
    background-size: cover;
    background-attachment: fixed;
    background-position: center center; }
    .colorlib-counters .overlay {
      z-index: 0;
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      background: #499bea;
      background: -moz-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -webkit-gradient(left top, right bottom, color-stop(0%, #499bea), color-stop(100%, #798eea));
      background: -webkit-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -o-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -ms-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -webkit-linear-gradient(315deg, #499bea 0%, #798eea 100%);
      background: -o-linear-gradient(315deg, #499bea 0%, #798eea 100%);
      background: linear-gradient(135deg, #499bea 0%, #798eea 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#798eea', GradientType=1 );
      opacity: .96; }
    .colorlib-counters .icon {
      margin-bottom: 20px;
      width: 100px;
      z-index: 0; }
      .colorlib-counters .icon i {
        font-size: 50px;
        color: rgba(255, 255, 255, 0.9);
        z-index: 1; }
    .colorlib-counters .colorlib-counter {
      font-size: 75px;
      display: block;
      color: #fff;
      font-family: "Nunito", Arial, sans-serif;
      width: 100%;
      font-weight: 300;
      margin-bottom: 0; }
    .colorlib-counters .colorlib-counter-label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 20px;
      display: block;
      font-weight: 300; }
  
  article {
    background: #fff;
    padding: 35px;
    margin-bottom: 40px;
    -webkit-box-shadow: 0px 3px 38px -13px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 3px 38px -13px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 3px 38px -13px rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px; }
    article h2 {
      font-weight: 400;
      margin-bottom: 15px; }
      article h2 a {
        color: #303133; }
    article .admin span {
      font-size: 12px;
      color: #303133; }
    article p.author-wrap {
      position: relative;
      margin-top: 30px; }
      article p.author-wrap .author-img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 30px;
        height: 30px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        border-radius: 50%; }
      article p.author-wrap .author {
        padding-left: 40px;
        color: #303133;
        font-size: 12px; }
  
  .pricing {
    background: #fff;
    padding: 2em 1em 1em 1em;
    -webkit-box-shadow: 0px 3px 38px -13px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 3px 38px -13px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 3px 38px -13px rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    border-radius: 2px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px; }
    .pricing .pricing-heading {
      margin-bottom: 30px; }
    .pricing .price {
      font-size: 72px;
      color: #4aca85;
      line-height: 50px;
      font-weight: 300; }
      .pricing .price .currency {
        font-size: 30px;
        top: -0.9em;
        padding-right: 10px; }
      .pricing .price small {
        font-size: 13px;
        display: block;
        color: #888f94; }
  
  #colorlib-subscribe {
    position: relative; }
  
  .colorlib-subscribe {
    clear: both;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center; }
    .colorlib-subscribe .overlay {
      z-index: 0;
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      background: #499bea;
      background: -moz-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -webkit-gradient(left top, right bottom, color-stop(0%, #499bea), color-stop(100%, #798eea));
      background: -webkit-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -o-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -ms-linear-gradient(-45deg, #499bea 0%, #798eea 100%);
      background: -webkit-linear-gradient(315deg, #499bea 0%, #798eea 100%);
      background: -o-linear-gradient(315deg, #499bea 0%, #798eea 100%);
      background: linear-gradient(135deg, #499bea 0%, #798eea 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#798eea', GradientType=1 );
      opacity: .96; }
    .colorlib-subscribe .colorlib-heading {
      margin-bottom: 30px; }
      .colorlib-subscribe .colorlib-heading h2 {
        color: #fff; }
      .colorlib-subscribe .colorlib-heading p {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.7); }
  
  .qbstp-header-subscribe {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    width: 100%;
    padding: 0; }
    .qbstp-header-subscribe .col-three-forth {
      width: 70%; }
    .qbstp-header-subscribe .col-one-third {
      width: 30%; }
    .qbstp-header-subscribe .col-three-forth, .qbstp-header-subscribe .col-one-third {
      display: table;
      height: 50px;
      float: left; }
      @media screen and (max-width: 768px) {
        .qbstp-header-subscribe .col-three-forth, .qbstp-header-subscribe .col-one-third {
          width: 50%; } }
    .qbstp-header-subscribe .form-control {
      background: #fff;
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px;
      -ms-border-radius: 30px;
      border-radius: 30px;
      border-top-right-radius: 0px !important;
      border-bottom-right-radius: 0px !important; }
    .qbstp-header-subscribe .form-group {
      position: relative;
      width: 100%;
      display: table-cell;
      vertical-align: middle; }
      @media screen and (max-width: 480px) {
        .qbstp-header-subscribe .form-group {
          width: 100%; } }
      .qbstp-header-subscribe .form-group input::-webkit-input-placeholder {
        color: #4d4d4d; }
      .qbstp-header-subscribe .form-group input::-moz-input-placeholder {
        color: #4d4d4d; }
      .qbstp-header-subscribe .form-group input::-ms-input-placeholder {
        color: #4d4d4d; }
      .qbstp-header-subscribe .form-group input::-o-input-placeholder {
        color: #4d4d4d; }
      .qbstp-header-subscribe .form-group input::input-placeholder {
        color: #4d4d4d; }
    .qbstp-header-subscribe #email {
      font-size: 14px;
      width: 100%;
      border: none;
      border-bottom: transparent;
      color: #4d4d4d !important; }
    .qbstp-header-subscribe button {
      border-top-left-radius: 0px !important;
      border-bottom-left-radius: 0px !important;
      background: #4aca85;
      color: #fff;
      border: none;
      padding: 10px 20px;
      text-transform: uppercase;
      height: 50px;
      width: 100%;
      display: block; }
  
  .no-gutters {
    margin: 0 !important; }
  
  .pagination li {
    margin: 2px; }
    .pagination li a {
      color: #000;
      background: #fff;
      color: #000;
      border: 1px solid #e6e6e6;
      margin: 2px; }
      .pagination li a:first-child {
        border: 1px solid #e6e6e6;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        -ms-border-radius: 2px;
        border-radius: 2px; }
      .pagination li a:hover, .pagination li a:focus {
        background: #4aca85;
        color: #fff;
        border: 1px solid #4aca85; }
      @media screen and (max-width: 768px) {
        .pagination li a {
          padding: 7px 15px; } }
    .pagination li.active a {
      background: #4aca85;
      border: 1px solid #4aca85; }
      .pagination li.active a:hover, .pagination li.active a:focus {
        background: #4aca85;
        color: #fff;
        border: 1px solid #4aca85; }
  
  .no-gutters {
    margin: 0 !important;
    padding: 0 !important; }
  
  .f-blog {
    position: relative;
    padding-left: 80px;
    margin-bottom: 40px; }
    .f-blog .blog-img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 70px;
      height: 60px;
      float: left; }
    .f-blog .desc h2 {
      font-size: 14px;
      margin-bottom: 5px; }
      .f-blog .desc h2 a {
        color: #fff; }
    .f-blog .desc .admin {
      font-size: 12px; }
  
  .contact-info-wrap-flex {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    width: 100%;
    margin-bottom: 3em; }
    .contact-info-wrap-flex .con-info {
      width: 100%;
      background: #fff;
      padding: 1.5em;
      background: white;
      margin-bottom: 30px; }
      @media screen and (max-width: 768px) {
        .contact-info-wrap-flex .con-info {
          width: 100%;
          margin: 4px !important; } }
    .contact-info-wrap-flex p {
      margin-bottom: 0;
      color: #000; }
      .contact-info-wrap-flex p span i {
        color: #4aca85; }
      .contact-info-wrap-flex p a {
        color: #000; }
  
  .form-control {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
    border: 1px solid #f0f0f0;
    font-size: 16px !important;
    font-weight: 300;
    background: white;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    -ms-border-radius: 0px;
    border-radius: 0px; }
    .form-control:focus, .form-control:active {
      background: #fff;
      -webkit-box-shadow: none;
      box-shadow: none;
      border: 1px solid #e6e6e6; }
  
  input[type="text"] {
    height: 50px; }
  
  .form-group {
    margin-bottom: 30px; }
    @media screen and (max-width: 768px) {
      .form-group #fname {
        margin-bottom: 30px; } }
    .form-group label {
      font-weight: 400; }
    .form-group .btn-modify {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
      font-size: 13px;
      padding: 10px 15px; }
  
  .colorlib-social-icons {
    margin: 0;
    padding: 0; }
    .colorlib-social-icons li {
      margin: 0;
      padding: 0;
      list-style: none;
      display: -moz-inline-stack;
      display: inline-block;
      zoom: 1;
      *display: inline; }
      .colorlib-social-icons li a {
        display: -moz-inline-stack;
        display: inline-block;
        zoom: 1;
        *display: inline;
        color: #4aca85;
        padding-left: 10px;
        padding-right: 10px; }
        .colorlib-social-icons li a i {
          font-size: 20px; }
  
  .colorlib-heading {
    margin-bottom: 5em; }
    .colorlib-heading h2 {
      font-size: 50px;
      font-weight: 300;
      margin-bottom: 30px;
      position: relative; }
      @media screen and (max-width: 768px) {
        .colorlib-heading h2 {
          font-size: 30px; } }
  
  #colorlib-footer {
    background: #303133;
    color: rgba(255, 255, 255, 0.6) !important;
    padding-top: 6em; }
    #colorlib-footer .colorlib-widget p {
      font-size: 13px; }
    @media screen and (max-width: 768px) {
      #colorlib-footer .colorlib-widget {
        margin-bottom: 40px;
        width: 100%;
        float: left; } }
    #colorlib-footer .colorlib-footer-links {
      padding: 0;
      margin: 0; }
      @media screen and (max-width: 768px) {
        #colorlib-footer .colorlib-footer-links {
          margin-bottom: 30px; } }
      #colorlib-footer .colorlib-footer-links li {
        padding: 0;
        margin: 0 0 10px 0;
        list-style: none;
        display: block;
        font-size: 13px; }
        #colorlib-footer .colorlib-footer-links li a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none; }
          #colorlib-footer .colorlib-footer-links li a i {
            padding-right: 10px;
            color: #fff; }
    #colorlib-footer .colorlib-social-icons li a {
      padding-left: 10px;
      padding-right: 10px; }
      #colorlib-footer .colorlib-social-icons li a:first-child {
        padding-left: 0; }
    #colorlib-footer h4 {
      margin-bottom: 30px;
      font-size: 12px;
      color: #e6e6e6;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 700; }
    #colorlib-footer .copy {
      background: #262626;
      padding: 7em 0; }
      #colorlib-footer .copy p {
        margin-bottom: 0;
        color: #fff;
        font-size: 13px; }
        #colorlib-footer .copy p small a {
          color: rgba(255, 255, 255, 0.7); }
  
  #map {
    width: 100%;
    height: 500px;
    position: relative; }
    @media screen and (max-width: 768px) {
      #map {
        height: 200px; } }
  
  #colorlib-offcanvas {
    position: absolute;
    z-index: 1901;
    width: 270px;
    background: #1a1a1a;
    top: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 75px 40px 40px 40px;
    overflow-y: auto;
    display: none;
    -moz-transform: translateX(270px);
    -webkit-transform: translateX(270px);
    -ms-transform: translateX(270px);
    -o-transform: translateX(270px);
    transform: translateX(270px);
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s; }
    @media screen and (max-width: 768px) {
      #colorlib-offcanvas {
        display: block; } }
    .offcanvas #colorlib-offcanvas {
      -moz-transform: translateX(0px);
      -webkit-transform: translateX(0px);
      -ms-transform: translateX(0px);
      -o-transform: translateX(0px);
      transform: translateX(0px); }
    #colorlib-offcanvas a {
      color: rgba(255, 255, 255, 0.5); }
      #colorlib-offcanvas a:hover {
        color: rgba(255, 255, 255, 0.8); }
    #colorlib-offcanvas ul {
      padding: 0;
      margin: 0; }
      #colorlib-offcanvas ul li {
        padding: 0;
        margin: 0;
        list-style: none; }
        #colorlib-offcanvas ul li > ul {
          padding-left: 20px;
          display: none; }
        #colorlib-offcanvas ul li.offcanvas-has-dropdown > a {
          display: block;
          position: relative; }
          #colorlib-offcanvas ul li.offcanvas-has-dropdown > a:after {
            position: absolute;
            right: 0px;
            font-family: 'icomoon';
            speak: none;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            /* Better Font Rendering =========== */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            content: "\e0c5";
            font-size: 20px;
            color: rgba(255, 255, 255, 0.2);
            -webkit-transition: 0.5s;
            -o-transition: 0.5s;
            transition: 0.5s; }
        #colorlib-offcanvas ul li.offcanvas-has-dropdown.active a:after {
          -webkit-transform: rotate(-180deg);
          -moz-transform: rotate(-180deg);
          -ms-transform: rotate(-180deg);
          -o-transform: rotate(-180deg);
          transform: rotate(-180deg); }
        #colorlib-offcanvas ul li.btn-cta {
          margin-top: 5px; }
          #colorlib-offcanvas ul li.btn-cta a {
            border-bottom: 1px solid #4aca85;
            padding-bottom: 5px; }
  
  .gototop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s; }
    .gototop.active {
      opacity: 1;
      visibility: visible; }
    .gototop a {
      width: 50px;
      height: 50px;
      display: table;
      background: black;
      color: #fff;
      text-align: center;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%; }
      .gototop a i {
        height: 50px;
        display: table-cell;
        vertical-align: middle; }
      .gototop a:hover, .gototop a:active, .gototop a:focus {
        text-decoration: none;
        outline: none; }
  
  .colorlib-nav-toggle {
    width: 25px;
    height: 25px;
    cursor: pointer;
    text-decoration: none;
    top: 1.2em !important; }
    .colorlib-nav-toggle.active i::before, .colorlib-nav-toggle.active i::after {
      background: #303133; }
    .colorlib-nav-toggle:hover, .colorlib-nav-toggle:focus, .colorlib-nav-toggle:active {
      outline: none;
      border-bottom: none !important; }
    .colorlib-nav-toggle i {
      position: relative;
      display: inline-block;
      width: 25px;
      height: 2px;
      color: #252525;
      font: bold 14px/.4 Helvetica;
      text-transform: uppercase;
      text-indent: -55px;
      background: #252525;
      -webkit-transition: all .2s ease-out;
      -o-transition: all .2s ease-out;
      transition: all .2s ease-out; }
      .colorlib-nav-toggle i::before, .colorlib-nav-toggle i::after {
        content: '';
        width: 25px;
        height: 2px;
        background: #252525;
        position: absolute;
        left: 0;
        -webkit-transition: all .2s ease-out;
        -o-transition: all .2s ease-out;
        transition: all .2s ease-out; }
    .colorlib-nav-toggle.colorlib-nav-white > i {
      color: #fff;
      background: #fff; }
      .colorlib-nav-toggle.colorlib-nav-white > i::before, .colorlib-nav-toggle.colorlib-nav-white > i::after {
        background: #fff; }
  
  .colorlib-nav-toggle i::before {
    top: -7px; }
  
  .colorlib-nav-toggle i::after {
    bottom: -7px; }
  
  .colorlib-nav-toggle:hover i::before {
    top: -10px; }
  
  .colorlib-nav-toggle:hover i::after {
    bottom: -10px; }
  
  .colorlib-nav-toggle.active i {
    background: transparent; }
  
  .colorlib-nav-toggle.active i::before {
    top: 0;
    -webkit-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -o-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    background: #fff; }
  
  .colorlib-nav-toggle.active i::after {
    bottom: 0;
    -webkit-transform: rotateZ(-45deg);
    -moz-transform: rotateZ(-45deg);
    -ms-transform: rotateZ(-45deg);
    -o-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    background: #fff; }
  
  .colorlib-nav-toggle {
    position: absolute;
    right: 0px;
    top: 65px;
    z-index: 21;
    padding: 6px 0 0 0;
    display: block;
    margin: 0 auto;
    display: none;
    height: 44px;
    width: 44px;
    z-index: 2001;
    border-bottom: none !important; }
    @media screen and (max-width: 768px) {
      .colorlib-nav-toggle {
        display: block; } }
  
  .btn {
    margin-right: 4px;
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 400;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    border-radius: 30px;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    padding: 8px 20px; }
    .btn.btn-md {
      padding: 8px 20px !important; }
    .btn.btn-lg {
      padding: 18px 36px !important; }
    .btn:hover, .btn:active, .btn:focus {
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      outline: none !important; }
  
  .btn-primary {
    background: #4aca85;
    color: #fff;
    border: 1px solid #4aca85; }
    .btn-primary:hover, .btn-primary:focus, .btn-primary:active {
      background: #5ed092 !important;
      border-color: #5ed092 !important; }
    .btn-primary.btn-outline {
      background: transparent;
      color: #4aca85;
      border: 1px solid #4aca85; }
      .btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {
        background: #4aca85;
        color: #fff; }
  
  .btn-success {
    background: #5cb85c;
    color: #fff;
    border: 1px solid #5cb85c; }
    .btn-success:hover, .btn-success:focus, .btn-success:active {
      background: #4cae4c !important;
      border-color: #4cae4c !important; }
    .btn-success.btn-outline {
      background: transparent;
      color: #5cb85c;
      border: 2px solid #5cb85c; }
      .btn-success.btn-outline:hover, .btn-success.btn-outline:focus, .btn-success.btn-outline:active {
        background: #5cb85c;
        color: #fff; }
  
  .btn-info {
    background: #5bc0de;
    color: #fff;
    border: 1px solid #5bc0de; }
    .btn-info:hover, .btn-info:focus, .btn-info:active {
      background: #46b8da !important;
      border-color: #46b8da !important; }
    .btn-info.btn-outline {
      background: transparent;
      color: #5bc0de;
      border: 1px solid #5bc0de; }
      .btn-info.btn-outline:hover, .btn-info.btn-outline:focus, .btn-info.btn-outline:active {
        background: #5bc0de;
        color: #fff; }
  
  .btn-warning {
    background: #f0ad4e;
    color: #fff;
    border: 1px solid #f0ad4e; }
    .btn-warning:hover, .btn-warning:focus, .btn-warning:active {
      background: #eea236 !important;
      border-color: #eea236 !important; }
    .btn-warning.btn-outline {
      background: transparent;
      color: #f0ad4e;
      border: 1px solid #f0ad4e; }
      .btn-warning.btn-outline:hover, .btn-warning.btn-outline:focus, .btn-warning.btn-outline:active {
        background: #f0ad4e;
        color: #fff; }
  
  .btn-danger {
    background: #d9534f;
    color: #fff;
    border: 1px solid #d9534f; }
    .btn-danger:hover, .btn-danger:focus, .btn-danger:active {
      background: #d43f3a !important;
      border-color: #d43f3a !important; }
    .btn-danger.btn-outline {
      background: transparent;
      color: #d9534f;
      border: 1px solid #d9534f; }
      .btn-danger.btn-outline:hover, .btn-danger.btn-outline:focus, .btn-danger.btn-outline:active {
        background: #d9534f;
        color: #fff; }
  
  .btn-outline {
    background: none;
    border: 1px solid gray;
    font-size: 16px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s; }
    .btn-outline:hover, .btn-outline:focus, .btn-outline:active {
      -webkit-box-shadow: none;
      box-shadow: none; }
  
  .btn.with-arrow {
    position: relative;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s; }
    .btn.with-arrow i {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      right: 0px;
      top: 50%;
      margin-top: -8px;
      -webkit-transition: 0.2s;
      -o-transition: 0.2s;
      transition: 0.2s; }
    .btn.with-arrow:hover {
      padding-right: 50px; }
      .btn.with-arrow:hover i {
        color: #fff;
        right: 18px;
        visibility: visible;
        opacity: 1; }
  
  .row-pb-lg {
    padding-bottom: 7em !important; }
  
  .row-pb-md {
    padding-bottom: 5em !important; }
  
  .row-pb-sm {
    padding-bottom: 3em !important; }
  
  .nopadding {
    padding: 0 !important;
    margin: 0 !important; }
  
  .colorlib-loader {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: url(../images/loader.gif) center no-repeat #fff; }
  
  .js .animate-box {
    opacity: 0; }
  




    //
// Dropdown menus
// --------------------------------------------------


// Dropdown arrow/caret
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top:   $caret-width-base dashed;
    border-top:   $caret-width-base solid \9; // IE8
    border-right: $caret-width-base solid transparent;
    border-left:  $caret-width-base solid transparent;
  }
  
  // The dropdown wrapper (div)
  .dropup,
  .dropdown {
    position: relative;
  }
  
  // Prevent the focus on the dropdown toggle when closing dropdowns
  .dropdown-toggle:focus {
    outline: 0;
  }
  
  // The dropdown menu (ul)
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: $zindex-dropdown;
    display: none; // none by default, but block on "open" of the menu
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0; // override default ul
    list-style: none;
    font-size: $font-size-base;
    text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)
    background-color: $dropdown-bg;
    border: 1px solid $dropdown-fallback-border; // IE8 fallback
    border: 1px solid $dropdown-border;
    border-radius: $border-radius-base;
    @include box-shadow(0 6px 12px rgba(0,0,0,.175));
    background-clip: padding-box;
  
    // Aligns the dropdown menu to right
    //
    // Deprecated as of 3.1.0 in favor of `.dropdown-menu-[dir]`
    &.pull-right {
      right: 0;
      left: auto;
    }
  
    // Dividers (basically an hr) within the dropdown
    .divider {
      @include nav-divider($dropdown-divider-bg);
    }
  
    // Links within the dropdown menu
    > li > a {
      display: block;
      padding: 3px 20px;
      clear: both;
      font-weight: normal;
      line-height: $line-height-base;
      color: $dropdown-link-color;
      white-space: nowrap; // prevent links from randomly breaking onto new lines
    }
  }
  
  // Hover/Focus state
  .dropdown-menu > li > a {
    &:hover,
    &:focus {
      text-decoration: none;
      color: $dropdown-link-hover-color;
      background-color: $dropdown-link-hover-bg;
    }
  }
  
  // Active state
  .dropdown-menu > .active > a {
    &,
    &:hover,
    &:focus {
      color: $dropdown-link-active-color;
      text-decoration: none;
      outline: 0;
      background-color: $dropdown-link-active-bg;
    }
  }
  
  // Disabled state
  //
  // Gray out text and ensure the hover/focus state remains gray
  
  .dropdown-menu > .disabled > a {
    &,
    &:hover,
    &:focus {
      color: $dropdown-link-disabled-color;
    }
  
    // Nuke hover/focus effects
    &:hover,
    &:focus {
      text-decoration: none;
      background-color: transparent;
      background-image: none; // Remove CSS gradient
      @include reset-filter;
      cursor: $cursor-disabled;
    }
  }
  
  // Open state for the dropdown
  .open {
    // Show the menu
    > .dropdown-menu {
      display: block;
    }
  
    // Remove the outline when :focus is triggered
    > a {
      outline: 0;
    }
  }
  
  // Menu positioning
  //
  // Add extra class to `.dropdown-menu` to flip the alignment of the dropdown
  // menu with the parent.
  .dropdown-menu-right {
    left: auto; // Reset the default from `.dropdown-menu`
    right: 0;
  }
  // With v3, we enabled auto-flipping if you have a dropdown within a right
  // aligned nav component. To enable the undoing of that, we provide an override
  // to restore the default dropdown menu alignment.
  //
  // This is only for left-aligning a dropdown menu within a `.navbar-right` or
  // `.pull-right` nav component.
  .dropdown-menu-left {
    left: 0;
    right: auto;
  }
  
  // Dropdown section headers
  .dropdown-header {
    display: block;
    padding: 3px 20px;
    font-size: $font-size-small;
    line-height: $line-height-base;
    color: $dropdown-header-color;
    white-space: nowrap; // as with > li > a
  }
  
  // Backdrop to catch body clicks on mobile, etc.
  .dropdown-backdrop {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: ($zindex-dropdown - 10);
  }
  
  // Right aligned dropdowns
  .pull-right > .dropdown-menu {
    right: 0;
    left: auto;
  }
  
  // Allow for dropdowns to go bottom up (aka, dropup-menu)
  //
  // Just add .dropup after the standard .dropdown class and you're set, bro.
  // TODO: abstract this so that the navbar fixed styles are not placed here?
  
  .dropup,
  .navbar-fixed-bottom .dropdown {
    // Reverse the caret
    .caret {
      border-top: 0;
      border-bottom: $caret-width-base dashed;
      border-bottom: $caret-width-base solid \9; // IE8
      content: "";
    }
    // Different positioning for bottom up menu
    .dropdown-menu {
      top: auto;
      bottom: 100%;
      margin-bottom: 2px;
    }
  }
  
  
  // Component alignment
  //
  // Reiterate per navbar.less and the modified component alignment there.
  
  @media (min-width: $grid-float-breakpoint) {
    .navbar-right {
      .dropdown-menu {
        right: 0; left: auto;
      }
      // Necessary for overrides of the default right aligned menu.
      // Will remove come v4 in all likelihood.
      .dropdown-menu-left {
        left: 0; right: auto;
      }
    }
  }
  

  @charset "UTF-8";

/*!
Animate.css - http://daneden.me/animate
Licensed under the MIT license - http://opensource.org/licenses/MIT

Copyright (c) 2015 Daniel Eden
*/

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animated-fast {
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.animated.bounceIn,
.animated.bounceOut {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

.animated.flipOutX,
.animated.flipOutY {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

@-webkit-keyframes bounce {
  from, 20%, 53%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0,-4px,0);
    transform: translate3d(0,-4px,0);
  }
}

@keyframes bounce {
  from, 20%, 53%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0,-4px,0);
    transform: translate3d(0,-4px,0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}

@-webkit-keyframes flash {
  from, 50%, to {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

@keyframes flash {
  from, 50%, to {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
    transform: scale3d(1.05, .95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
    transform: scale3d(1.05, .95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}

@-webkit-keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

@keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}

@-webkit-keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes wobble {
  from {
    -webkit-transform: none;
    transform: none;
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes wobble {
  from {
    -webkit-transform: none;
    transform: none;
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}

@-webkit-keyframes jello {
  from, 11.1%, to {
    -webkit-transform: none;
    transform: none;
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

@keyframes jello {
  from, 11.1%, to {
    -webkit-transform: none;
    transform: none;
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

.jello {
  -webkit-animation-name: jello;
  animation-name: jello;
  -webkit-transform-origin: center;
  transform-origin: center;
}

@-webkit-keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(.97, .97, .97);
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(.97, .97, .97);
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}

@-webkit-keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

@-webkit-keyframes bounceInLeft {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInLeft {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}

@-webkit-keyframes bounceInRight {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInRight {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

@-webkit-keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}

@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }
}

@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }
}

.bounceOut {
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}

@-webkit-keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}

@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}

@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}

@-webkit-keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

.bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
    -ms-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    -ms-transform: scale(1.0);
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    -ms-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    -ms-transform: scale(1.0);
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    /*-webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);*/
    -webkit-transform: translate3d(0, -50px, 0);
    transform: translate3d(0, -50px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    /*-webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);*/
    -webkit-transform: translate3d(0, -50px, 0);
    transform: translate3d(0, -50px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

@-webkit-keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}

@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    /*-webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);*/
    -webkit-transform: translate3d(-50px, 0, 0);
    transform: translate3d(-50px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    /*-webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);*/
    -webkit-transform: translate3d(-50px, 0, 0);
    transform: translate3d(-50px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}

@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    /*-webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);*/
    -webkit-transform: translate3d(50px, 0, 0);
    transform: translate3d(50px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    /*-webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);*/
    -webkit-transform: translate3d(50px, 0, 0);
    transform: translate3d(50px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    visibility: hidden;
    /*-webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);*/
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0);
  }

  to {
    opacity: 1;
    /*visibility: visible;*/
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    visibility: hidden;
    /*-webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);*/
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0);
  }

  to {
    visibility: visible;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUpMenu {
  from {
    opacity: 0;
    visibility: hidden;
    /*-webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);*/
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 1;
    visibility: visible;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUpMenu {
  from {
    opacity: 0;
    visibility: hidden;
    /*-webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);*/
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    visibility: visible;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUpMenu {
  -webkit-animation-name: fadeInUpMenu;
  animation-name: fadeInUpMenu;
}

@-webkit-keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

@-webkit-keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

.fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}

@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

.fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}

@-webkit-keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@-webkit-keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

.fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}

@-webkit-keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

.fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}

@-webkit-keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

.fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}

@-webkit-keyframes flip {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
    transform: perspective(400px) scale3d(.95, .95, .95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

@keyframes flip {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
    transform: perspective(400px) scale3d(.95, .95, .95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}

@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@-webkit-keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}

@-webkit-keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

@keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

@-webkit-keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.flipOutY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}

@-webkit-keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

@-webkit-keyframes lightSpeedOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

@keyframes lightSpeedOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

.lightSpeedOut {
  -webkit-animation-name: lightSpeedOut;
  animation-name: lightSpeedOut;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}

@-webkit-keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
}

@-webkit-keyframes rotateInDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
}

@-webkit-keyframes rotateInDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
}

@-webkit-keyframes rotateInUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
}

@-webkit-keyframes rotateInUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
}

@-webkit-keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

@keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

.rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
}

@-webkit-keyframes rotateOutDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

.rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
}

@-webkit-keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
}

@-webkit-keyframes rotateOutUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
}

@-webkit-keyframes rotateOutUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

.rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
}

@-webkit-keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%, 80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

@keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%, 80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

.hinge {
  -webkit-animation-name: hinge;
  animation-name: hinge;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

@keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

.rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}

@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

@-webkit-keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInDown {
  -webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
}

@-webkit-keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInLeft {
  -webkit-animation-name: zoomInLeft;
  animation-name: zoomInLeft;
}

@-webkit-keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInRight {
  -webkit-animation-name: zoomInRight;
  animation-name: zoomInRight;
}

@-webkit-keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInUp {
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}

@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  to {
    opacity: 0;
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}

@-webkit-keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutDown {
  -webkit-animation-name: zoomOutDown;
  animation-name: zoomOutDown;
}

@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
    transform: scale(.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}

@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
    transform: scale(.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}

.zoomOutLeft {
  -webkit-animation-name: zoomOutLeft;
  animation-name: zoomOutLeft;
}

@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
    transform: scale(.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}

@keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
    transform: scale(.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}

.zoomOutRight {
  -webkit-animation-name: zoomOutRight;
  animation-name: zoomOutRight;
}

@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutUp {
  -webkit-animation-name: zoomOutUp;
  animation-name: zoomOutUp;
}

@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}

@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}

@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}

@-webkit-keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.slideOutDown {
  -webkit-animation-name: slideOutDown;
  animation-name: slideOutDown;
}

@-webkit-keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}

@-webkit-keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}

@-webkit-keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

.slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}