var $ = require('jQuery');
var Popper = require('popper.js');
require('bootstrap');

const VIDEO = "video";
const MUSIC = "music";
const SETTINGS = "settings";
const DASHBOARD = "dashboard";
const LOADING = "loading";
const V_MAN = "v-manager";

var video = "";
var music = "";
var settings = "";
var dashboard = "";
var loading = "";
var v_man = "";

function clear() {
    $(".c-body").html("");
}

function preload() {
    setPage(VIDEO);
    setPage(MUSIC);
    setPage(SETTINGS);
    setPage(V_MAN);
    setPage(DASHBOARD, () => {loadPage(DASHBOARD)});
}

function setPage(name, fn) {
    let output = $.get(`file://${__dirname}/content/${name}.html`).success((data) => {
        switch(name){
            case VIDEO:
                video = data;
                break;
            case MUSIC:
                music = data;
                break;
            case DASHBOARD:
                dashboard = data;
                break;
            case SETTINGS:
                settings = data;
                break;
            case LOADING:
                loading=data;
                break;
            case V_MAN:
                v_man=data;
                break;
            default:
                break;
        }
        if ( fn != undefined )
            fn();
    });
}

function activate(menuID){
    $('.nav-item').removeClass("active");
    if (menuID != false)
        $(`#${menuID}`).addClass("active");
}

function loadPage(name) {
    clear();
    switch(name){
        case VIDEO:
            $(video).appendTo(".c-body");
            activate('nav-video');
            break;
        case MUSIC:
            $(music).appendTo(".c-body");
            activate('nav-music');
            break;
        case DASHBOARD:
            $(dashboard).appendTo(".c-body");
            activate(false);
            break;
        case SETTINGS:
            $(settings).appendTo(".c-body");
            activate('nav-settings');
            break;
        case LOADING:
            $(loading).appendTo(".c-body");
            activate(false);
            break;
        case V_MAN:
            $(v_man).appendTo(".c-body");
            activate('nav-settings');
            break;
        default:
            break;
    }
}

$(() => {
    setPage(LOADING, () => {
        loadPage(LOADING);
        preload();
    });
});
