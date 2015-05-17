var Data = (function() {
    "use strict";
    return {
        GetExercises: (function () {
            var exercises = [
                {id: 0, name: 'Flexiones', icon: 'exe-icon-03.jpg', image: 'exe-icon-03.jpg', video: 'videos/pushup.mp4'},
                {id: 1, name: 'Sentadillas', icon: 'exe-icon-02.jpg', image: 'exe-icon-02.jpg', video: 'videos/chairpose.mp4'},
                {id: 2, name: 'Plancha', icon: 'exercise-icon.png', image: '', video: ''},
                {id: 3, name: 'Abdominales', icon: 'exercise-icon.png', image: '', video: ''},
                {id: 4, name: 'Molino', icon: 'exercise-icon.png', image: '', video: ''},
                {id: 5, name: 'Rana', icon: 'exercise-icon.png', image: '', video: ''}
            ];
            return exercises;
        }())
    }
}());