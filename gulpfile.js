var syntax = 'sass'; // Syntax: sass or scss;

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    rsync = require('gulp-rsync'),
    rigger = require('gulp-rigger');

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
    })
});

gulp.task('html', function () {
    gulp.src('app/html/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('app/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('styles', function () {
    return gulp.src('app/' + syntax + '/**/*.' + syntax + '')
        .pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss({level: {1: {specialComments: 0}}})) // Opt., comment out when debugging
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
});

gulp.task('js', function () {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/js/validate.js',
        'app/libs/swiper/swiper.min.js',
        'app/libs/jquery.inputmask.bundle.js',
        'app/libs/nice-select/jquery.nice-select.js',
        'app/libs/select2/select2.js',
        'app/libs/velocity.min.js',
        'app/libs/range-slider/nouislider.min.js',
        'app/libs/tippy/popper.min.js',
        'app/libs/tippy/tippy.min.js',
        'app/libs/slick/slick.min.js',
        'app/js/common.js', // Always at the end
    ])
        .pipe(concat('scripts.min.js'))
        // .pipe(uglify()) // Mifify js (opt.)
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('rsync', function () {
    return gulp.src('app/**')
        .pipe(rsync({
            root: 'app/',
            hostname: 'username@yousite.com',
            destination: 'yousite/public_html/',
            exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
            recursive: true,
            archive: true,
            silent: false,
            compress: true
        }))
});

gulp.task('watch', ['html', 'styles', 'js', 'browser-sync'], function () {
    gulp.watch('app/html/*.html', ['html']).on('change', browserSync.reload);
    gulp.watch('app/' + syntax + '/**/*.' + syntax + '', ['styles']);
    gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);

});

gulp.task('default', ['watch']);
