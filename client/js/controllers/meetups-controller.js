function meetupsController($scope) {


   $scope.meetups= [
      { name: 'MEAN SF Developers'},
      { name: 'Some other meetup'}
   ];

   $scope.createMeetup = function() {
      $scope.meetups.push({ name: $scope.meetupName});
      $scope.meetupName = '';
   }
   $scope.meetupsCount = $scope.meetups.length;
}
