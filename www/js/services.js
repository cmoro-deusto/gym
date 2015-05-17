angular.module('starter.services', [])

.factory('ExercisesService', function() {
        return {
            getExercises: function() {
                return Data.GetExercises;
            },
            getExercise: function(exerciseID) {
                return Data.GetExercises[exerciseID];
            },
            getExerciseName: function(exerciseID) {
                return Data.GetExercises[exerciseID].name;
            }
        }
    });
