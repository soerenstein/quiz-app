import { get, getAll } from "./util"
export function Navigation() {

    const indexPage = get('#index_page')
    const bookmarkPage = get('#bookmark_page')
    const createPage = get('#create_page')
    const profilePage = get('#profile_page')
    
    const indexHeader = get('#header1')
    const bookmarkHeader = get('#header2')
    const createHeader = get('#header3')
    const profileHeader = get('#header4')
    
    const navHome = get('#nav_home')
    const navBookmark = get('#nav_bookmark')
    const navCreate = get('#nav_create')
    const navProfile = get('#nav_profile')
    
navHome.addEventListener('click', () => { // index header
    indexHeader.classList.remove('hidden')
    bookmarkHeader.classList.add('hidden')
    createHeader.classList.add('hidden')
    profileHeader.classList.add('hidden')
})

navHome.addEventListener('click', () => { // index page 
    indexPage.classList.remove('hidden')
    bookmarkPage.classList.add('hidden')
    createPage.classList.add('hidden')
    profilePage.classList.add('hidden')
})

navBookmark.addEventListener('click', () => { // bookmark header 
    bookmarkHeader.classList.remove('hidden')
    indexHeader.classList.add('hidden')
    createHeader.classList.add('hidden')
    profileHeader.classList.add('hidden')
})

navBookmark.addEventListener('click', () => { // bookmark page 
    bookmarkPage.classList.remove('hidden')
    indexPage.classList.add('hidden')
    createPage.classList.add('hidden')
    profilePage.classList.add('hidden')
})

navCreate.addEventListener('click', () => { // create header 
    createHeader.classList.remove('hidden')
    bookmarkHeader.classList.add('hidden')
    indexHeader.classList.add('hidden')
    profileHeader.classList.add('hidden')
})

navCreate.addEventListener('click', () => { // create page 
    createPage.classList.remove('hidden')
    bookmarkPage.classList.add('hidden')
    indexPage.classList.add('hidden')
    profilePage.classList.add('hidden')
})

navProfile.addEventListener('click', () => { // profile header 
    profileHeader.classList.remove('hidden')
    bookmarkHeader.classList.add('hidden')
    createHeader.classList.add('hidden')
    indexHeader.classList.add('hidden')
})

navProfile.addEventListener('click', () => { // profile page 
    profilePage.classList.remove('hidden')
    bookmarkPage.classList.add('hidden')
    createPage.classList.add('hidden')
    indexPage.classList.add('hidden')
})

}