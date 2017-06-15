/**
 * Created by apoorvaa_gupta on 2/6/17.
 */

$('document').ready(function () {
    const studentId = window.location.pathname.split('/student/')[1].split('/')[0];
    $.get("http://localhost:4000/api/students/"+studentId+"/mycourses", function (enrollments) {
        const ul = $('minicourses-list');
        for(let i=0;i<enrollments.length;i++){
            ul.append('<li> <div class="minicourses-list-li"> <div class="row minicourse-div"> <div class="col-sm-4" style="padding: 0"><img src="./../images/cover.jpg" class="minicourse-img"></div>' +
                '<div class="col-sm-8 minicourse-content">' +
                '<div class="row minicourse-chps"><span>' + enrollments[i].minicourses.tags[0].subject.subjectName + '</span>&nbsp;&nbsp; >&nbsp;&nbsp;<span>' + enrollments[i].minicourses.tags[0].course.courseName + '</span></div>' +
                '<div class="row minicourse-title"><span>' + enrollments[i].minicourses.name + '</span></div>' +
                '<div class="row"><p class="minicourse-description">' + enrollments[i].minicourses.description + '</p></div>' +
                '<div class="row align-items-center"><a href="http://localhost:4000/courses/' + enrollments[i].minicourses.id + '" class="enrol-style">VIEW</a></div>' +
                '</div> </div> <div class="row minicourse-tags"> <div class="minicourse-tag">' +
                '<div class="row tag-title">TEACHER </div> <div class="row tag-content"><span>' + enrollments[i].minicourses.tutor.name + '</span></div> </div>' +
                '<div class="minicourse-tag"> <div class="row tag-title">DURATION</div>' +
                '<div class="row tag-content"><span>' + enrollments[i].minicourses.duration + '</span></div> </div> <div class="minicourse-tag">' +
                '<div class="row tag-title">DIFFICULTY</div> <div class="row tag-content"><span>' + enrollments[i].minicourses.level + '</span></div>' +
                '</div> <div class="minicourse-tag"> <div class="row tag-title">RELEVANCE</div>' +
                '<div class="row tag-content"><span>' + enrollments[i].minicourses.tags[0].category.categoryName + '</span></div> </div> <div class="minicourse-tag">' +
                '<div class="row tag-title">MEDIUM</div>' +
                '<div class="row tag-content"><span>' + enrollments[i].minicourses.medium + '</span></div> </div> </div> </div> </li>'
            )
        }
    });


});