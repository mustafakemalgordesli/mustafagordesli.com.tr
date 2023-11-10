"use client"

import { actions } from "@/store/menu-store";

export const updateState = (dispatch) => {
    const setActiveMenuItem = (item) => dispatch(actions.SetMenu(item));

    const homeElement = document.getElementById('home');
    const aboutElement = document.getElementById('about');
    const resumeElement = document.getElementById('resume');
    const projectsElement = document.getElementById('projects');
    const contactElement = document.getElementById('contact');

    const update = () => {
        if (
            homeElement &&
            window.pageYOffset < 500
        ) {
            setActiveMenuItem('#home');
        } else if (
            aboutElement &&
            window.pageYOffset >= 500 &&
            window.pageYOffset < 1150
        ) {
            setActiveMenuItem('#about');
        } else if (
            resumeElement &&
            window.pageYOffset >= 1150 &&
            window.pageYOffset < 1848
        ) {
            setActiveMenuItem('#resume');
        } else if (
            projectsElement &&
            window.pageYOffset >= 1848 &&
            window.pageYOffset < 2640
        ) {
            setActiveMenuItem('#projects');
        } else if (
            contactElement &&
            window.pageYOffset >= 2640
        ) {
            setActiveMenuItem('#contact');
        }
    }

    setTimeout(() => {
        update()
    }, 250)

    setTimeout(() => {
        update()
    }, 750)

}
