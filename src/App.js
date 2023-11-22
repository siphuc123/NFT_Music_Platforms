import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ListAll from "./ListAll";
import {
  Home,
  Profile,
  Login,
  Register,
  Collection,
  Feed,
  ProductDetail,
  Explore
} from "./pages";
import { Navbar, Footer } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import GetDetails from "./GetDetails";
import Create from "./create_nfts";
import ListAll from './ListAll'
import { useEffect } from "react";
import $ from "jquery";

// ---------__ JS __--------- //

function App() {
  useEffect(() => {
    var $L = 1200,
      $menu_navigation = $("#main-nav"),
      $cart_trigger = $("#cd-cart-trigger"),
      $hamburger_icon = $("#cd-hamburger-menu"),
      $lateral_cart = $("#cd-cart"),
      $shadow_layer = $("#cd-shadow-layer");

    //open lateral menu on mobile
    $hamburger_icon.on("click", function (event) {
      event.preventDefault();
      //close cart panel (if it's open)
      $lateral_cart.removeClass("speed-in");
      toggle_panel_visibility($menu_navigation, $shadow_layer, $("body"));
    });

    //open cart
    $cart_trigger.on("click", function (event) {
      event.preventDefault();
      //close lateral menu (if it's open)
      $menu_navigation.removeClass("speed-in");
      toggle_panel_visibility($lateral_cart, $shadow_layer, $("body"));
    });

    //close lateral cart or lateral menu
    $shadow_layer.on("click", function () {
      $shadow_layer.removeClass("is-visible");
      // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
      if ($lateral_cart.hasClass("speed-in")) {
        $lateral_cart
          .removeClass("speed-in")
          .on(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function () {
              $("body").removeClass("overflow-hidden");
            }
          );
        $menu_navigation.removeClass("speed-in");
      } else {
        $menu_navigation
          .removeClass("speed-in")
          .on(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function () {
              $("body").removeClass("overflow-hidden");
            }
          );
        $lateral_cart.removeClass("speed-in");
      }
    });

    //move #main-navigation inside header on laptop
    //insert #main-navigation after header on mobile
    move_navigation($menu_navigation, $L);
    $(window).on("resize", function () {
      move_navigation($menu_navigation, $L);

      if ($(window).width() >= $L && $menu_navigation.hasClass("speed-in")) {
        $menu_navigation.removeClass("speed-in");
        $shadow_layer.removeClass("is-visible");
        $("body").removeClass("overflow-hidden");
      }
    });

    function toggle_panel_visibility($lateral_panel, $background_layer, $body) {
      if ($lateral_panel.hasClass("speed-in")) {
        // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        $lateral_panel
          .removeClass("speed-in")
          .one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function () {
              $body.removeClass("overflow-hidden");
            }
          );
        $background_layer.removeClass("is-visible");
      } else {
        $lateral_panel
          .addClass("speed-in")
          .one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function () {
              $body.addClass("overflow-hidden");
            }
          );
        $background_layer.addClass("is-visible");
      }
    }

    function move_navigation($navigation, $MQ) {
      if ($(window).width() >= $MQ) {
        $navigation.detach();
        $navigation.appendTo("header");
      } else {
        $navigation.detach();
        $navigation.insertAfter("header");
      }
    }

    
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path=":item/:id" element={<ProductDetail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/profile/:name" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/get-details" element={<GetDetails />} />
          <Route path="/profile/:name/read" element={<ListAll/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
