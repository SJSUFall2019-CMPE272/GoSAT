import React from 'react';

class Dashboard extends React.Component{

    constructor(){
        super();
    }

    render(){
        return (<div>  
          {/* <!-- SideNav slide-out button --> */}
          <a href="#" data-activates="slide-out" class="btn btn-primary p-3 button-collapse"><i class="fas fa-bars"></i></a>
        
          {/* <!-- Sidebar navigation --> */}
          <div id="slide-out" class="side-nav fixed">
              <ul class="custom-scrollbar">
                  {/* <!-- Logo --> */}
                  <li>
                      <div class="logo-wrapper waves-light">
                          <a href="#"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" class="img-fluid flex-center" /></a>
                      </div>
                  </li>
                  {/* <!--/. Logo --> */}
                  {/* <!--Social--> */}
                  <li>
                      <ul class="social">
                          <li><a href="#" class="icons-sm fb-ic"><i class="fab fa-facebook-f"> </i></a></li>
                          <li><a href="#" class="icons-sm pin-ic"><i class="fab fa-pinterest"> </i></a></li>
                          <li><a href="#" class="icons-sm gplus-ic"><i class="fab fa-google-plus-g"> </i></a></li>
                          <li><a href="#" class="icons-sm tw-ic"><i class="fab fa-twitter"> </i></a></li>
                      </ul>
                  </li>
                  {/* <!--/Social--> */}
                  {/* <!--Search Form--> */}
                  <li>
                      <form class="search-form" role="search">
                          <div class="form-group md-form mt-0 pt-1 waves-light">
                              <input type="text" class="form-control" placeholder="Search" />
                          </div>
                      </form>
                  </li>
                  {/* <!--/.Search Form--> */}
                  {/* <!-- Side navigation links --> */}
                  <li>
                      <ul class="collapsible collapsible-accordion">
                          <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-chevron-right"></i>
                                  Submit blog<i class="fas fa-angle-down rotate-icon"></i></a>
                              <div class="collapsible-body">
                                  <ul>
                                      <li><a href="#" class="waves-effect">Submit listing</a>
                                      </li>
                                      <li><a href="#" class="waves-effect">Registration form</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                          <li><a class="collapsible-header waves-effect arrow-r"><i class="far fa-hand-pointer"></i>
                                  Instruction<i class="fas fa-angle-down rotate-icon"></i></a>
                              <div class="collapsible-body">
                                  <ul>
                                      <li><a href="#" class="waves-effect">For bloggers</a>
                                      </li>
                                      <li><a href="#" class="waves-effect">For authors</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                          <li><a class="collapsible-header waves-effect arrow-r"><i class="far fa-eye"></i> About<i class="fas fa-angle-down rotate-icon"></i></a>
                              <div class="collapsible-body">
                                  <ul>
                                      <li><a href="#" class="waves-effect">Introduction</a>
                                      </li>
                                      <li><a href="#" class="waves-effect">Monthly meetings</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                          <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-envelope-o"></i> Contact
                                  me<i class="fas fa-angle-down rotate-icon"></i></a>
                              <div class="collapsible-body">
                                  <ul>
                                      <li><a href="#" class="waves-effect">FAQ</a>
                                      </li>
                                      <li><a href="#" class="waves-effect">Write a message</a>
                                      </li>
                                      <li><a href="#" class="waves-effect">FAQ</a>
                                      </li>
                                      <li><a href="#" class="waves-effect">Write a message</a>
                                      </li>
                                      <li><a href="#" class="waves-effect">FAQ</a>
                                      </li>
                                      <li><a href="#" class="waves-effect">Write a message</a>
                                      </li>
                                      <li><a href="#" class="waves-effect">FAQ</a>
                                      </li>
                                      <li><a href="#" class="waves-effect">Write a message</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                      </ul>
                  </li>
                  {/* <!--/. Side navigation links --> */}
              </ul>
              <div class="sidenav-bg rgba-blue-strong"></div>
          </div>
          {/* <!--/. Sidebar navigation --> */}
          </div> )  
        {/* <!--Main Navigation--> */}
    }
}