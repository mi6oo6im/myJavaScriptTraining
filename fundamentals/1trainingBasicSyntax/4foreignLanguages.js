function foreignLanguages(country) {
    let language = ''
    switch (country) {
        case 'England':
        case 'USA': language = 'English'; break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico': language = 'Spanish'; break;
        default: language = 'unknown'; break;
    }
    console.log(language);
}
foreignLanguages('England')
foreignLanguages('USA')
foreignLanguages('Spain')
foreignLanguages('Argentina')
foreignLanguages('Mexico')
foreignLanguages('Germany')