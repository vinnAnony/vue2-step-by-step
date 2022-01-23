Vue.component('student', {
    template: '<li><slot></slot></li>'
});

Vue.component('student-list', {
    template: `
        <div>
            <student v-for="student in students" v-text="student.name" :key="student.name"/>
        </div>
    `,
    data() {
        return {
            students : [
                {name: 'Kim', passed: true},
                {name: 'Jong', passed: false},
                {name: 'Barry', passed: false},
                {name: 'Alan', passed: true},
                {name: 'Frost', passed: false},
            ]
        }
    }
});

new Vue({
    el: '#root'
})