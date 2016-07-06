angular
  .module('trackmydietApp')
  .controller('diaryAddHomeCtrl', diaryAddHomeCtrl);

function diaryAddHomeCtrl (trackmydietData) {
  var vm = this;
  vm.pageHeader =  "Keep Diet Diary";

  trackmydietData.getDiaries()
    .success(function(data) {
      vm.diaries = data;
      vm.days = data.length;
    })
    .error(function (e) {
      vm.formError = "Sorry, something's gone wrong when getting diary data";
    });
}
