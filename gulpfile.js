const { series, parallel, src, dest, watch, task } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sync = require('browser-sync').create()
const del = require('del')

function html() {
    return src('./src/*.html')
        .pipe(dest('./dist/'))
}

function script() {
    return src('./src/scripts/*.js')
        .pipe(dest('./dist/src/scripts/'))
}

function css() {
    return src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist/src/styles'), {})
}

function images() {
     src('./src/assets/images/png/**/*.png')
        .pipe(dest('./dist/src/assets/images/png/'))
     return src('./src/assets/images/svg/**/*.svg')
        .pipe(dest('./dist/src/assets/images/svg/'))
}

function fonts() {
    src('./src/assets/fonts/**/*.ttf')
        .pipe(dest('./dist/src/assets/fonts/'))
    return src('./src/assets/fonts/**/*.ttf2')
        .pipe(dest('./dist/src/assets/fonts/'))
}

function clear() {
    return del('./dist')
}

function serve() {
    sync.init({
        server: './dist'
    })

    watch('src/*.html', series(html)).on('change', sync.reload)
    watch('src/scripts/*.js', series(script)).on('change', sync.reload)
    watch('src/styles/*.scss', series(css)).on('change', sync.reload)
    watch('./src/assets/images/png/**/*.png', series(images)).on('change', sync.reload)
    watch('./src/assets/images/svg/**/*.svg', series(images)).on('change', sync.reload)
    watch('./src/assets/fonts/**/*.ttf', series(fonts)).on('change', sync.reload)
    watch('./src/assets/fonts/**/*.ttf2', series(fonts)).on('change', sync.reload)
}

exports.build = series(clear, html, css, fonts, images, script)
exports.serve = series(clear, html, css, fonts, images, script, serve)
exports.clear = clear;
